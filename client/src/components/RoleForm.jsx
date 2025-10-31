import React from 'react';
import {
  Box,
  Grid,
  TextField,
  MenuItem,
  Typography,
  Avatar
} from '@mui/material';

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

const RoleForm = ({ formData, onInputChange, onPermissionsChange, isEditing = false }) => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Role Name"
            name="name"
            value={formData.name}
            onChange={onInputChange}
            required
            variant="outlined"
            sx={{ mb: 1 }}
          />
          <Typography variant="caption" color="text.secondary">
            Enter a unique name for this role
          </Typography>
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={formData.description}
            onChange={onInputChange}
            required
            multiline
            rows={3}
            variant="outlined"
            sx={{ mb: 1 }}
          />
          <Typography variant="caption" color="text.secondary">
            Describe the purpose and capabilities of this role
          </Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Typography variant="subtitle2" gutterBottom>
            Role Color
          </Typography>
          <TextField
            fullWidth
            name="color"
            type="color"
            value={formData.color}
            onChange={onInputChange}
            variant="outlined"
            InputProps={{
              style: { 
                height: '50px',
                padding: '8px 12px'
              }
            }}
            sx={{ mb: 1 }}
          />
          <Typography variant="caption" color="text.secondary">
            Choose a color to identify this role visually
          </Typography>
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            label="Permissions"
            name="permissions"
            value={formData.permissions}
            onChange={onPermissionsChange}
            SelectProps={{
              multiple: true,
              renderValue: (selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, py: 0.5 }}>
                  {selected.map((value) => (
                    <Chip 
                      key={value} 
                      label={value.replace('_', ' ')} 
                      size="small" 
                      sx={{ fontSize: '0.75rem' }}
                    />
                  ))}
                </Box>
              )
            }}
            variant="outlined"
            sx={{ mb: 1 }}
          >
            {permissionOptions.map((permission) => (
              <MenuItem 
                key={permission} 
                value={permission}
                sx={{ py: 1, px: 2 }}
              >
                {permission.replace('_', ' ')}
              </MenuItem>
            ))}
          </TextField>
          <Typography variant="caption" color="text.secondary">
            Select the permissions associated with this role
          </Typography>
        </Grid>

        {/* Preview Section */}
        <Grid item xs={12}>
          <Box sx={{ 
            p: 2, 
            border: '1px dashed',
            borderColor: 'divider',
            borderRadius: 1,
            bgcolor: 'grey.50'
          }}>
            <Typography variant="subtitle2" gutterBottom>
              Role Preview
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar 
                sx={{ 
                  bgcolor: formData.color,
                  width: 40,
                  height: 40
                }}
              >
                {formData.name ? formData.name.charAt(0) : 'R'}
              </Avatar>
              <Box>
                <Typography variant="body1" fontWeight="medium">
                  {formData.name || 'Role Name'}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {formData.description || 'Role description will appear here'}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RoleForm;