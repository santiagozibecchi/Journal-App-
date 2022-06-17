import { Navigate, Route, Routes } from 'react-router-dom';
import JournalRoutes from '../journal/routes/JournalRoutes';

import AuthRoutes from '../auth/routes/AuthRoutes';

import { CheckingAuth } from '../ui';
import { useCheckedAuth } from '../hooks';

// Centralizacion de todas las rutas => hacia donde las quiero dirigir

const AppRouter = () => {

     const { status } = useCheckedAuth();

     if (status === 'checking') {
          return <CheckingAuth />
     }

     return (
          <Routes>

               {
                    (status === 'authenticated')
                         ? <Route path='/*' element={<JournalRoutes />} />
                         : <Route path='/auth/*' element={<AuthRoutes />} />
               }

               {/* Ruta por defecto - para cualquier otra ruta que no este definida */}
               <Route path='/*' element={<Navigate to='/auth/login' />} />

               {/* De esta forma, si el usuario de firebase esta autenticado no podra acceder nuevamente a la ruta del login */}

               {/* Login y Registro */}
               {/* Cualquier path que inicie con /auth/ ... */}
               {/* <Route path='/auth/*' element={<AuthRoutes />} /> */}

               {/* JournalApp */}
               {/* Cualquier otra ruta que no entre por /auth/ .. */}
               {/* <Route path='/*' element={<JournalRoutes />} /> */}

          </Routes>
     )
};

export default AppRouter;