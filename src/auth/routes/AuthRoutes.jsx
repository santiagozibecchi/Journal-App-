import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { Route, Routes, Navigate } from 'react-router-dom';


const AuthRoutes = () => {
     return (
          <Routes>
               <Route path="login" element={<LoginPage />} />
               <Route path="register" element={<RegisterPage />} />

               {/* Si se entrara a mostrar el authRoutes  y no estamos en Login o register*/}
               <Route path="/*" element={<Navigate to="/auth/login" />} />
          </Routes>

     )
}

export default AuthRoutes