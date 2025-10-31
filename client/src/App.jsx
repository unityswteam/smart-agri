import { BrowserRouter, Route, Routes } from "react-router-dom";
import RolesManagement from "./pages/RolesManagement";
import CreateRole from "./pages/createRole";
import EditRole from "./pages/EditRole";
import RoleList from "./pages/RoleList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRoles } from "./redux/roleReducer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<RolesManagement />} />
          <Route path="/roles" element={<RoleList />} />
          <Route path="/roles/edit/:id" element={<EditRole />} />
          <Route path="/roles/create" element={<CreateRole />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
