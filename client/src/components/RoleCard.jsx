import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Avatar,
  IconButton,
  Box,
  Tooltip
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';

const RoleCard = ({ role, onEdit, onDelete }) => {
  const getContrastColor = (hexcolor) => {
    hexcolor = hexcolor.replace("#", "");
    const r = parseInt(hexcolor.substr(0, 2), 16);
    const g = parseInt(hexcolor.substr(2, 2), 16);
    const b = parseInt(hexcolor.substr(4, 2), 16);
    const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return brightness > 128 ? '#000000' : '#FFFFFF';
  };

  return (
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
              onClick={onEdit}
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
              onClick={onDelete}
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
          {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
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
          </Box> */}
        </Box>

        {/* Role Badge */}
        {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
        </Box> */}
      </CardContent>
    </Card>
  );
};

export default RoleCard;