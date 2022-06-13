import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import JournalPage from '../pages/JournalPage'

const JournalRoutes = () => {
     return (
          <Routes>
               <Route path="/" element={<JournalPage />} />

               {/* Para cualquier otra ruta */}
               <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
     )
}

export default JournalRoutes