import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  Snackbar,
  Alert
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  Save as SaveIcon,
  Security as SecurityIcon
} from '@mui/icons-material';
import RoleForm from '../components/RoleForm';
import { useDispatch, useSelector } from 'react-redux';
import { addRole, fetchRoles } from '../redux/roleReducer';

const CreateRole = () => {
  const navigate = useNavigate();
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
   const dispatch = useDispatch();

  const { roles } = useSelector((state) => state.role);
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    color: '#2196f3',
    permissions: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePermissionsChange = (e) => {
    const { value } = e.target;
    setFormData(prev => ({
      ...prev,
      permissions: typeof value === 'string' ? value.split(',') : value
    }));
  };

  const handleSave =async() => {
    if (!formData.name.trim() || !formData.description.trim()) {
      showSnackbar('Please fill in all required fields', 'error');
      return;
    }

    // Here you would typically save to your backend
    console.log({formData:formData});
    dispatch(addRole({name:formData.name, description:formData.description}))
    dispatch(fetchRoles())
    
    // // Navigate back after a short delay
    // setTimeout(() => {
    //   navigate('/roles');
    // }, 1500);
  };

  const handleCancel = () => {
    navigate('/roles');
  };

  const showSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={handleCancel}
          color="inherit"
        >
          Back to Roles
        </Button>
        <SecurityIcon sx={{ fontSize: 32, color: 'primary.main' }} />
        <Box>
          <Typography variant="h4" component="h1" fontWeight="bold">
            Create New Role
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Add a new user role to the system
          </Typography>
        </Box>
      </Box>

      {/* Form */}
      <Paper elevation={2} sx={{ mb: 3 }}>
        <RoleForm 
          formData={formData}
          onInputChange={handleInputChange}
          onPermissionsChange={handlePermissionsChange}
          isEditing={false}
        />
        
        {/* Actions */}
        <Box sx={{ 
          p: 3, 
          borderTop: '1px solid', 
          borderColor: 'divider',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 2
        }}>
          <Button 
            onClick={handleCancel}
            color="inherit"
            sx={{ px: 4 }}
          >
            Cancel
          </Button>
          <Button 
            startIcon={<SaveIcon />} 
            onClick={handleSave}
            variant="contained"
            sx={{ px: 4 }}
          >
            Create Role
          </Button>
        </Box>
      </Paper>

      {/* Snackbar */}
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={4000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity} 
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CreateRole;