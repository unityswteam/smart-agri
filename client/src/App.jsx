
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateRole from "./pages/createRole";
import EditRole from "./pages/EditRole";
import RoleList from "./pages/RoleList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRoles } from "./redux/roleReducer";
import CategoryList from './pages/Categories'

import Header from "./components/Markup/Header";
import Footer from "./components/Markup/Footer";
import Home from './pages/Markup/home'



// import templates css file

import "./assets/template_assets/vendors/bootstrap/css/bootstrap.min.css";
    import "./assets/template_assets/vendors/animate/animate.min.css" 
    import "./assets/template_assets/vendors/animate/custom-animate.css" 
    import "./assets/template_assets/vendors/fontawesome/css/all.min.css" 
    import "./assets/template_assets/vendors/jarallax/jarallax.css" 
    import "./assets/template_assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css" 
    import "./assets/template_assets/vendors/nouislider/nouislider.min.css" 
    import "./assets/template_assets/vendors/nouislider/nouislider.pips.css" 
    import "./assets/template_assets/vendors/odometer/odometer.min.css" 
    import "./assets/template_assets/vendors/swiper/swiper.min.css" 
    import "./assets/template_assets/vendors/agrion-icons/style.css"
    import "./assets/template_assets/vendors/tiny-slider/tiny-slider.min.css" 
    import "./assets/template_assets/vendors/reey-font/stylesheet.css" 
    import "./assets/template_assets/vendors/owl-carousel/owl.carousel.min.css" 
    import "./assets/template_assets/vendors/owl-carousel/owl.theme.default.min.css" 
    import "./assets/template_assets/vendors/bxslider/jquery.bxslider.css" 
    import "./assets/template_assets/vendors/bootstrap-select/css/bootstrap-select.min.css" 
    import "./assets/template_assets/vendors/vegas/vegas.min.css" 
    import "./assets/template_assets/vendors/jquery-ui/jquery-ui.css" 
    import "./assets/template_assets/vendors/timepicker/timePicker.css" 
    import "./assets/template_assets/css/agrion.css" 
    import "./assets/template_assets/css/agrion-responsive.css" 
    // import custom css file
    import "./assets/styles/custom.css"

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  return (
    <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roles" element={<RoleList />} />
        <Route path="/roles/create" element={<CreateRole />} />
        <Route path="/roles/edit/:id" element={<EditRole />} />
        <Route path='/categories' element={<CategoryList/>}/>
        </Routes>
        <Footer/>
    
    </BrowserRouter>
  );
}

export default App;
