import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
  Typography,
  Box,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
} from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRole, fetchRoles } from '../../redux/roleReducer';

const RolesList = () => {
  const {roles} = useSelector((state) => state.role)
  console.log({roles:roles});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteDialog, setDeleteDialog] = useState({ open: false, role: null });
  const navigate = useNavigate();
  const dispatch = useDispatch();

    useEffect(() => {
      // Fetch categories from backend when component mounts
      dispatch(fetchRoles());
    }, [dispatch]);
  




  const handleDelete = async () => {
    await dispatch(deleteRole({id:deleteDialog.role._id}))
    dispatch(fetchRoles())
      
      
      setDeleteDialog({ open: false, role: null });
    
  };

  const openDeleteDialog = (role) => {
    setDeleteDialog({ open: true, role });
  };

  const closeDeleteDialog = () => {
    setDeleteDialog({ open: false, role: null });
  };

  // if (loading) {
  //   return (
  //     <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
  //       <CircularProgress />
  //     </Box>
  //   );
  // }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" component="h1">
          Roles Management
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => navigate('/roles/create')}
        >
          Add New Role
        </Button>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError('')}>
          {error}
        </Alert>
      )}

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Role Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roles.map((role) => (
              <TableRow key={role._id}>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="medium">
                    {role.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" color="textSecondary">
                    {role.description}
                  </Typography>
                </TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => navigate(`/roles/edit/${role._id}`)}
                    sx={{ mr: 1 }}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => openDeleteDialog(role)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {roles.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  <Typography variant="body1" color="textSecondary">
                    No roles found
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialog.open} onClose={closeDeleteDialog}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete the role "{deleteDialog.role?.name}"? 
            This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteDialog}>Cancel</Button>
          <Button onClick={handleDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default RolesList;