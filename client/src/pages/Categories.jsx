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
import { addCategory, deleteCategory, fetchCategories, updateCategory } from "../redux/categoryReducer";

const CategoriesManagement = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  const [openDialog, setOpenDialog] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const [formData, setFormData] = useState({ name: "", description: "", color: "#2196f3" });

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleOpenAdd = () => {
    setEditingCategory(null);
    setFormData({ name: "", description: "", color: "#2196f3" });
    setOpenDialog(true);
  };

  const handleOpenEdit = (category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      description: category.description,
      color: category.color || "#2196f3",
    });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => setOpenDialog(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleCloseSnackbar = () => setSnackbar((prev) => ({ ...prev, open: false }));

  const getContrastColor = (hexcolor) => {
    if (!hexcolor) return "#000";
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

    if (editingCategory) {
      dispatch(updateCategory({ id: editingCategory._id, ...formData }));
      showSnackbar("Category updated successfully!", "success");
    } else {
      dispatch(addCategory(formData));
      showSnackbar("Category added successfully!", "success");
    }

    handleCloseDialog();
  };

  const handleConfirmDelete = (category) => {
    setSelectedCategory(category);
    setOpenConfirm(true);
  };

  const confirmDelete = () => {
    if (selectedCategory) {
      dispatch(deleteCategory(selectedCategory._id));
      showSnackbar("Category deleted successfully!", "success");
      setOpenConfirm(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 5 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar sx={{ bgcolor: "primary.main", width: 50, height: 50 }}>C</Avatar>
          <Box>
            <Typography variant="h4" fontWeight="bold">
              Category Management
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Manage and organize your content categories efficiently
            </Typography>
          </Box>
        </Box>

        <Tooltip title="Add New Category">
          <Fab color="primary" onClick={handleOpenAdd}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </Box>

      {/* Categories Grid */}
      <Grid container spacing={3}>
        {categories?.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category._id}>
            <Card
              sx={{
                height: "100%",
                p: 2,
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": { boxShadow: 6, transform: "translateY(-4px)" },
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                  <Avatar sx={{ bgcolor: category.color }}>{category.name.charAt(0)}</Avatar>
                  <Box>
                    <Tooltip title="Edit">
                      <IconButton onClick={() => handleOpenEdit(category)} color="primary">
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton onClick={() => handleConfirmDelete(category)} color="error">
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
                <Typography variant="h6">{category.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {category.description}
                </Typography>
                <Chip
                  label={category.name}
                  sx={{
                    mt: 2,
                    bgcolor: category.color,
                    color: getContrastColor(category.color),
                    fontWeight: "bold",
                  }}
                />
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
        <DialogActions sx={{ px: 4, py: 3 }}>
          <Button startIcon={<CancelIcon />} onClick={handleCloseDialog}>
            Cancel
          </Button>
          <Button
            startIcon={<SaveIcon />}
            onClick={handleSave}
            variant="contained"
            sx={{ px: 4, py: 1.5 }}
          >
            {editingCategory ? "Update" : "Save"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation */}
      <Dialog open={openConfirm} onClose={() => setOpenConfirm(false)} maxWidth="xs">
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent sx={{ py: 3 }}>
          Are you sure you want to delete <b>{selectedCategory?.name}</b>?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenConfirm(false)}>Cancel</Button>
          <Button variant="contained" color="error" onClick={confirmDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
      </Snackbar>
    </Container>
  );
};

export default CategoriesManagement;
