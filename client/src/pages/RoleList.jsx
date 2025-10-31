import React, { useState } from 'react';
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Alert
} from '@mui/material';
import RoleCard from '../components/RoleCard';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRole, fetchRoles } from '../redux/roleReducer';

const RoleList = ({ roles, onEdit, onDelete }) => {
  const [deleteConfirm, setDeleteConfirm] = useState(null);
     const dispatch = useDispatch();

  //  const { roles:rles } = useSelector((state) => state.role);
  // console.log(rles);

  const handleDeleteConfirm = async(roleId) => {
    // setDeleteConfirm(roleId);
          await dispatch(deleteRole(roleId))
          dispatch(dispatch(fetchRoles()))

  };

  const handleDelete = () => {
    if (deleteConfirm) {
      onDelete(deleteConfirm);
      setDeleteConfirm(null);
    }
  };

  // Safe check for roles
  if (!roles || !Array.isArray(roles)) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Alert severity="info">
          No roles available or roles data is invalid.
        </Alert>
      </Box>
    );
  }

  if (roles.length === 0) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Alert severity="info">
          No roles found. Create your first role to get started.
        </Alert>
      </Box>
    );
  }

  return (
    <>
      <Grid container spacing={3}>
        {roles.map((role) => (
          <Grid item xs={12} sm={6} md={4} key={role._id}>
            <RoleCard 
              role={role} 
              onEdit={() => onEdit(role._id)}
              onDelete={() => handleDeleteConfirm(role._id)}
            />
          </Grid>
        ))}
      </Grid>

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!deleteConfirm} onClose={() => setDeleteConfirm(null)} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ py: 2, px: 3 }}>
          Confirm Delete
        </DialogTitle>
        <DialogContent sx={{ p: 3 }}>
          <Typography>
            Are you sure you want to delete this role? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 3, borderTop: '1px solid', borderColor: 'divider' }}>
          <Button 
            onClick={() => setDeleteConfirm(null)}
            sx={{ px: 3 }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleDelete} 
            color="error" 
            variant="contained"
            sx={{ px: 3 }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RoleList;