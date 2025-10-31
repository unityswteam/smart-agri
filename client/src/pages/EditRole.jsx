import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

// Mock data - in real app, you'd fetch this from an API
const initialRolesData = [
  {
    id: 1,
    name: 'Administrator',
    description: 'Full system access with all permissions including user management and system configuration.',
    color: '#f44336',
    permissions: ['all']
  },
  {
    id: 2,
    name: 'Manager',
    description: 'Can manage teams, projects, and assign tasks to team members.',
    color: '#2196f3',
    permissions: ['manage_teams', 'manage_projects', 'assign_tasks']
  },
  {
    id: 3,
    name: 'Developer',
    description: 'Access to development tools, code repositories, and project tasks.',
    color: '#4caf50',
    permissions: ['development_tools', 'code_access', 'task_access']
  },
  {
    id: 4,
    name: 'Viewer',
    description: 'Read-only access to view projects and reports without editing capabilities.',
    color: '#ff9800',
    permissions: ['read_only']
  }
];

const EditRole = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    color: '#2196f3',
    permissions: []
  });

  useEffect(() => {
    // Simulate API fetch
    const fetchRole = async () => {
      setLoading(true);
      try {
        // In real app: const response = await fetch(`/api/roles/${id}`);
        const foundRole = initialRolesData.find(r => r.id === parseInt(id));
        if (foundRole) {
          setRole(foundRole);
          setFormData({
            name: foundRole.name,
            description: foundRole.description,
            color: foundRole.color,
            permissions: [...foundRole.permissions]
          });
        } else {
          showSnackbar('Role not found', 'error');
          navigate('/roles');
        }
      } catch (error) {
        showSnackbar('Error loading role', 'error');
        navigate('/roles');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchRole();
    }
  }, [id, navigate]);

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

  const handleSave = () => {
    if (!formData.name.trim() || !formData.description.trim()) {
      showSnackbar('Please fill in all required fields', 'error');
      return;
    }

    // Here you would typically update to your backend
    console.log('Updating role:', formData);
    showSnackbar('Role updated successfully!', 'success');
    
    // Navigate back after a short delay
    setTimeout(() => {
      navigate('/roles');
    }, 1500);
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

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  if (!role) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography>Role not found</Typography>
      </Container>
    );
  }

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
            Edit Role
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Update role details and permissions
          </Typography>
        </Box>
      </Box>

      {/* Form */}
      <Paper elevation={2} sx={{ mb: 3 }}>
        <RoleForm 
          formData={formData}
          onInputChange={handleInputChange}
          onPermissionsChange={handlePermissionsChange}
          isEditing={true}
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
            Update Role
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

export default EditRole;