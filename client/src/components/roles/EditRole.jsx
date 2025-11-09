import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  CircularProgress,
} from '@mui/material';
import { Save, Cancel } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchRoles, getRoleById, updateRole } from '../../redux/roleReducer';
import { useDispatch, useSelector } from 'react-redux';

const EditRole = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  console.log({id:id});
  const dispatch = useDispatch();    
  const {roles, currentRole} = useSelector((state) => state.role)
  console.log({currentRole:currentRole});

  useEffect(() => {
    dispatch(getRoleById({id}))
  }, [id, dispatch]);

  // Populate form with currentRole data when it's available
  useEffect(() => {
    if (currentRole && currentRole._id === id) {
      setFormData({
        name: currentRole.name || '',
        description: currentRole.description || ''
      });
      setFetchLoading(false);
    }
  }, [currentRole, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Role name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Role name must be at least 2 characters long';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    try {
      await dispatch(updateRole({id, name:formData.name, description:formData.description}))
      dispatch(fetchRoles())
      navigate('/roles');
    } catch (err) {
      setError('Failed to update role');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/roles');
  };

  // if (fetchLoading) {
  //   return (
  //     <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
  //       <CircularProgress />
  //     </Box>
  //   );
  // }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Edit Role
        </Typography>
        
        {error && (
          <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError('')}>
            {error}
          </Alert>
        )}
        
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            label="Role Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            margin="normal"
            required
            disabled={loading}
            placeholder={currentRole?.name || ''}
          />
          
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            error={!!errors.description}
            helperText={errors.description}
            margin="normal"
            multiline
            rows={4}
            required
            disabled={loading}
            placeholder={currentRole?.description || ''}
          />
          
          <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
            <Button
              variant="outlined"
              startIcon={<Cancel />}
              onClick={handleCancel}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              startIcon={loading ? <CircularProgress size={20} /> : <Save />}
              disabled={loading}
            >
              {loading ? 'Updating...' : 'Update Role'}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default EditRole;