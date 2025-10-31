import React, { useState } from 'react';
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
  MenuItem,
  Tooltip,
  Fab,
  Alert,
  Snackbar
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  Security as SecurityIcon
} from '@mui/icons-material';

// Initial roles data
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

const permissionOptions = [
  'all',
  'manage_teams',
  'manage_projects',
  'assign_tasks',
  'development_tools',
  'code_access',
  'task_access',
  'read_only',
  'content_edit',
  'user_management'
];

const RolesManagement = () => {
  const [roles, setRoles] = useState(initialRolesData);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingRole, setEditingRole] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    color: '#2196f3',
    permissions: []
  });

  const handleOpenAdd = () => {
    setEditingRole(null);
    setFormData({
      name: '',
      description: '',
      color: '#2196f3',
      permissions: []
    });
    setOpenDialog(true);
  };

  const handleOpenEdit = (role) => {
    setEditingRole(role);
    setFormData({
      name: role.name,
      description: role.description,
      color: role.color,
      permissions: [...role.permissions]
    });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingRole(null);
  };

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

    if (editingRole) {
      // Update existing role
      setRoles(prev => prev.map(role => 
        role.id === editingRole.id 
          ? { ...role, ...formData }
          : role
      ));
      showSnackbar('Role updated successfully!', 'success');
    } else {
      // Add new role
      const newRole = {
        ...formData,
        id: Math.max(...roles.map(r => r.id)) + 1
      };
      setRoles(prev => [...prev, newRole]);
      showSnackbar('Role added successfully!', 'success');
    }

    handleCloseDialog();
  };

  const handleDelete = (roleId) => {
    setRoles(prev => prev.filter(role => role.id !== roleId));
    setDeleteConfirm(null);
    showSnackbar('Role deleted successfully!', 'success');
  };

  const showSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const getContrastColor = (hexcolor) => {
    hexcolor = hexcolor.replace("#", "");
    const r = parseInt(hexcolor.substr(0, 2), 16);
    const g = parseInt(hexcolor.substr(2, 2), 16);
    const b = parseInt(hexcolor.substr(4, 2), 16);
    const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return brightness > 128 ? '#000000' : '#FFFFFF';
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />
          <Box>
            <Typography variant="h3" component="h1" fontWeight="bold">
              Role Management
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Manage user roles and permissions
            </Typography>
          </Box>
        </Box>
        
        <Tooltip title="Add New Role">
          <Fab color="primary" onClick={handleOpenAdd} sx={{ boxShadow: 3 }}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </Box>

      {/* Roles Grid */}
      <Grid container spacing={3}>
        {roles.map((role) => (
          <Grid item xs={12} sm={6} md={4} key={role.id}>
            <Card 
              sx={{ 
                height: '100%',
                transition: 'all 0.3s ease',
                border: `2px solid transparent`,
                background: 'linear-gradient(145deg, #f5f5f5, #ffffff)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                  border: `2px solid ${role.color}40`
                }
              }}
            >
              <CardContent sx={{ p: 3, position: 'relative' }}>
                {/* Action Buttons */}
                <Box sx={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 1 }}>
                  <Tooltip title="Edit Role">
                    <IconButton 
                      size="small" 
                      onClick={() => handleOpenEdit(role)}
                      sx={{ 
                        bgcolor: 'primary.main',
                        color: 'white',
                        '&:hover': { bgcolor: 'primary.dark' }
                      }}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  
                  <Tooltip title="Delete Role">
                    <IconButton 
                      size="small" 
                      onClick={() => setDeleteConfirm(role.id)}
                      sx={{ 
                        bgcolor: 'error.main',
                        color: 'white',
                        '&:hover': { bgcolor: 'error.dark' }
                      }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Box>

                {/* Role Header */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, pr: 8 }}>
                  <Avatar 
                    sx={{ 
                      bgcolor: role.color,
                      width: 50,
                      height: 50,
                      mr: 2,
                      fontSize: '1.2rem',
                      fontWeight: 'bold'
                    }}
                  >
                    {role.name.charAt(0)}
                  </Avatar>
                  <Typography 
                    variant="h5" 
                    component="h2"
                    sx={{ 
                      fontWeight: 'bold',
                      background: `linear-gradient(45deg, ${role.color}, ${role.color}dd)`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent'
                    }}
                  >
                    {role.name}
                  </Typography>
                </Box>
                
                {/* Description */}
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.6, minHeight: 60 }}
                >
                  {role.description}
                </Typography>
                
                {/* Permissions */}
                <Box sx={{ mb: 2 }}>
                  <Typography variant="caption" color="text.secondary" fontWeight="bold">
                    PERMISSIONS:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
                    {role.permissions.slice(0, 3).map((permission, index) => (
                      <Chip
                        key={index}
                        label={permission.replace('_', ' ')}
                        size="small"
                        sx={{
                          bgcolor: `${role.color}20`,
                          color: role.color,
                          border: `1px solid ${role.color}40`,
                          fontSize: '0.7rem',
                          fontWeight: 'bold'
                        }}
                      />
                    ))}
                    {role.permissions.length > 3 && (
                      <Chip
                        label={`+${role.permissions.length - 3} more`}
                        size="small"
                        variant="outlined"
                        sx={{ fontSize: '0.7rem' }}
                      />
                    )}
                  </Box>
                </Box>

                {/* Role Badge */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Chip 
                    label={role.name}
                    size="medium"
                    sx={{ 
                      bgcolor: role.color,
                      color: getContrastColor(role.color),
                      fontWeight: 'bold',
                      fontSize: '0.8rem'
                    }}
                  />
                  <Typography variant="caption" color="text.secondary">
                    ID: {role.id}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add/Edit Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ bgcolor: 'primary.main', color: 'white' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {editingRole ? <EditIcon /> : <AddIcon />}
            {editingRole ? 'Edit Role' : 'Add New Role'}
          </Box>
        </DialogTitle>
        
        <DialogContent sx={{ p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Role Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                variant="outlined"
              />
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
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Color"
                name="color"
                type="color"
                value={formData.color}
                onChange={handleInputChange}
                variant="outlined"
                InputProps={{
                  style: { height: '60px' }
                }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Permissions"
                name="permissions"
                value={formData.permissions}
                onChange={handlePermissionsChange}
                SelectProps={{
                  multiple: true,
                  renderValue: (selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value.replace('_', ' ')} size="small" />
                      ))}
                    </Box>
                  )
                }}
                variant="outlined"
              >
                {permissionOptions.map((permission) => (
                  <MenuItem key={permission} value={permission}>
                    {permission.replace('_', ' ')}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </DialogContent>
        
        <DialogActions sx={{ p: 2 }}>
          <Button 
            startIcon={<CancelIcon />} 
            onClick={handleCloseDialog}
            color="inherit"
          >
            Cancel
          </Button>
          <Button 
            startIcon={<SaveIcon />} 
            onClick={handleSave}
            variant="contained"
            sx={{ minWidth: 120 }}
          >
            {editingRole ? 'Update' : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!deleteConfirm} onClose={() => setDeleteConfirm(null)} maxWidth="xs" fullWidth>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete this role? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteConfirm(null)}>Cancel</Button>
          <Button 
            onClick={() => handleDelete(deleteConfirm)} 
            color="error" 
            variant="contained"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for notifications */}
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

export default RolesManagement;