import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AuthRoutes from '../auth/routes/AuthRoutes';
import JournalRoutes from '../journal/routes/JournalRoutes';

// Centralizacion de todas las rutas => hacia donde las quiero dirigir

const AppRouter = () => {

     return (
          <Routes>

               {/* Login y Registro */}
               {/* Cualquier path que inicie con /auth/ ... */}
               <Route path='/auth/*' element={<AuthRoutes />} />

               {/* JournalApp */}
               {/* Cualquier otra ruta que no entre por /auth/ .. */}
               <Route path='/*' element={<JournalRoutes />} />

          </Routes>
     )
};

export default AppRouter;