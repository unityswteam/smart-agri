//Initial roles data

export const initialRolesData = [
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
