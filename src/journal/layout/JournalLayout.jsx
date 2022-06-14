import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NavBar, SideBar } from "../components";

// Menu lateral
const drawerWidth = 300;

const JournalLayout = ({ children }) => {

     return (
          <Box sx={{ display: 'flex' }}>

               {/* Navbar drawerWidth */}
               <NavBar drawerWidth={drawerWidth} />

               {/* Sidebar drawerWidth*/}
               <SideBar drawerWidth={drawerWidth} />


               <Box
                    c omponent='main'
                    sx={{ flexGrow: 1, p: 3 }}
               >
                    {/* Toolbar */}
                    <Toolbar />

                    {children}

               </Box>


          </Box>

     );
};


export default JournalLayout;