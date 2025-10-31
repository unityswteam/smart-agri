import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Fab,
  Tooltip,
  Snackbar,
  Alert,
} from "@mui/material";
import { Add as AddIcon, Security as SecurityIcon } from "@mui/icons-material";
import RoleList from "./RoleList";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoles } from "../redux/roleReducer";

// Initial roles data
const initialRolesData = [
  {
    id: 1,
    name: "Administrator",
    description:
      "Full system access with all permissions including user management and system configuration.",
    color: "#f44336",
    permissions: ["all"],
  },
  {
    id: 2,
    name: "Manager",
    description:
      "Can manage teams, projects, and assign tasks to team members.",
    color: "#2196f3",
    permissions: ["manage_teams", "manage_projects", "assign_tasks"],
  },
  {
    id: 3,
    name: "Developer",
    description:
      "Access to development tools, code repositories, and project tasks.",
    color: "#4caf50",
    permissions: ["development_tools", "code_access", "task_access"],
  },
  {
    id: 4,
    name: "Viewer",
    description:
      "Read-only access to view projects and reports without editing capabilities.",
    color: "#ff9800",
    permissions: ["read_only"],
  },
];

const RolesManagement = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchRoles());
//   }, [dispatch]);
  const { roles } = useSelector((state) => state.role);

  console.log({entireState:roles});


  const [role, setRoles] = useState(initialRolesData);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCreateRole = () => {
    navigate("/roles/create");
  };

  const handleEditRole = (roleId) => {
    navigate(`/roles/edit/${roleId}`);
  };

  const handleDeleteRole = (roleId) => {
    setRoles((prev) => prev.filter((role) => role.id !== roleId));
    showSnackbar("Role deleted successfully!", "success");
  };

  const showSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 6,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <SecurityIcon sx={{ fontSize: 40, color: "primary.main" }} />
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
          <Fab color="primary" onClick={handleCreateRole} sx={{ boxShadow: 3 }}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </Box>

      {/* Roles List */}
      <RoleList
        roles={roles}
        onEdit={handleEditRole}
        onDelete={handleDeleteRole}
      />

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default RolesManagement;
