import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  Chip,
  Avatar,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Tooltip,
  Fab,
  Alert,
  Snackbar,
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, deleteCategory, fetchCategories, updateCategory } from "../redux/categoryReducer";  // assume you create this


const CategoriesManagement = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // Fetch categories from backend when component mounts
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useSelector((state) => state?.category.categories);
  console.log(categories);

  const [localCategories, setCategories] = useState(categories || []);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    color: "#2196f3",
  });

  const handleOpenAdd = () => {
    setEditingCategory(null);
    setFormData({
      name: "",
      description: "",
      color: "#2196f3",
    });
    setOpenDialog(true);
  };

  const handleOpenEdit = (category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      description: category.description,
      color: category.color,
    });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingCategory(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const getContrastColor = (hexcolor) => {
    if (!hexcolor) return "#000000"; // Return a default color if hexcolor is invalid

    const color = hexcolor.replace("#", "");
    const r = parseInt(color.substr(0, 2), 16);
    const g = parseInt(color.substr(2, 2), 16);
    const b = parseInt(color.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? "#000000" : "#FFFFFF";
  };


  const handleSave = () => {
    if (!formData.name.trim() || !formData.description.trim()) {
      showSnackbar("Please fill in all required fields", "error");
      return;
    }

    dispatch(addCategory({ name: formData.name, description: formData.description, color: formData.color }));

    if (editingCategory) {
      setCategories((prev) =>
        prev.map((cat) =>
          cat._id === editingCategory._id ? { ...cat, ...formData } : cat
        )
      );
      dispatch(updateCategory({ id: editingCategory._id, name: formData.name, description: formData.description, color: formData.color }));
      showSnackbar("Category updated successfully!", "success");
    } else {
      const newCategory = {
        ...formData,
        id: Math.max(...Array.isArray(categories) ? categories.map((c) => c.id) : []) + 1,
      };
      setCategories((prev) => [...prev, newCategory]);
      showSnackbar("Category added successfully!", "success");
    }

    handleCloseDialog();
  };

  const handleDelete = (categoryId) => {
    setCategories((prev) => prev.filter((cat) => cat.id !== categoryId));
    dispatch(deleteCategory(categoryId));
    showSnackbar("Category deleted successfully!", "success");
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 6 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar sx={{ bgcolor: "primary.main", width: 40, height: 40 }}>
            C
          </Avatar>
          <Box>
            <Typography variant="h3" component="h1" fontWeight="bold">
              Category Management
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Manage your content categories
            </Typography>
          </Box>
        </Box>

        <Tooltip title="Add New Category">
          <Fab color="primary" onClick={handleOpenAdd} sx={{ boxShadow: 3 }}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </Box>

      <Grid container spacing={3}>
        {Array.isArray(categories) && categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category?.id}>
            <Card sx={{
              height: "100%",
              transition: "all 0.3s ease",
              border: `2px solid transparent`,
              background: "linear-gradient(145deg, #f5f5f5, #ffffff)",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                border: `2px solid ${category?.color}40`,
              },
            }}>
              <CardContent sx={{ p: 3, position: "relative" }}>
                <Box sx={{ position: "absolute", top: 16, right: 16, display: "flex", gap: 1 }}>
                  <Tooltip title="Edit Category">
                    <IconButton size="small" onClick={() => handleOpenEdit(category)} sx={{ bgcolor: "primary.main", color: "white", "&:hover": { bgcolor: "primary.dark" } }}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete Category">
                    <IconButton size="small" onClick={() => handleDelete(category?._id)} sx={{ bgcolor: "error.main", color: "white", "&:hover": { bgcolor: "error.dark" } }}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3, pr: 8 }}>
                  <Avatar sx={{ bgcolor: category?.color, width: 50, height: 50, mr: 2, fontSize: "1.2rem", fontWeight: "bold" }}>
                    {category.name.charAt(0)}
                  </Avatar>
                  <Typography variant="h5" component="h2" sx={{ fontWeight: "bold", background: `linear-gradient(45deg, ${category.color}, ${category.color}dd)`, backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}>
                    {category.name}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6, minHeight: 60 }}>
                  {category?.description}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Chip label={category?.name} size="medium" sx={{ bgcolor: category?.color, color: getContrastColor(category?.color), fontWeight: "bold", fontSize: "0.8rem" }} />
                  <Typography variant="caption" color="text.secondary">ID: {category._id}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ bgcolor: "primary.main", color: "white", py: 2, px: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {editingCategory ? <EditIcon /> : <AddIcon />}
            {editingCategory ? "Edit Category" : "Add New Category"}
          </Box>
        </DialogTitle>
        <DialogContent sx={{ p: 0 }}>
          <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Category Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  variant="outlined"
                  sx={{ mb: 1 }}
                />
                <Typography variant="caption" color="text.secondary">Enter a unique name for this category</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  multiline
                  rows={3}
                  variant="outlined"
                  sx={{ mb: 1 }}
                />
                <Typography variant="caption" color="text.secondary">Describe the purpose of this category</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" gutterBottom>Category Color</Typography>
                <TextField
                  fullWidth
                  name="color"
                  type="color"
                  value={formData.color}
                  onChange={handleInputChange}
                  variant="outlined"
                  InputProps={{ style: { height: "50px", padding: "8px 12px" } }}
                  sx={{ mb: 1 }}
                />
                <Typography variant="caption" color="text.secondary">Choose a color for this category</Typography>
              </Grid>

              {/* Preview */}
              <Grid item xs={12}>
                <Box sx={{ p: 2, border: "1px dashed", borderColor: "divider", borderRadius: 1, bgcolor: "grey.50" }}>
                  <Typography variant="subtitle2" gutterBottom>Category Preview</Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar sx={{ bgcolor: formData.color, width: 40, height: 40 }}>
                      {formData.name ? formData.name.charAt(0) : "C"}
                    </Avatar>
                    <Box>
                      <Typography variant="body1" fontWeight="medium">
                        {formData.name || "Category Name"}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {formData.description || "Category description will appear here"}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3, borderTop: "1px solid", borderColor: "divider" }}>
          <Button startIcon={<CancelIcon />} onClick={handleCloseDialog} color="inherit" sx={{ px: 3 }}>
            Cancel
          </Button>
          <Button startIcon={<SaveIcon />} onClick={handleSave} variant="contained" sx={{ minWidth: 120, px: 3 }}>
            {editingCategory ? "Update" : "Save"}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CategoriesManagement;
