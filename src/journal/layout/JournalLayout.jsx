import { Box } from "@mui/system";

// Menu lateral
const drawerWidth = 240;


const JournalLayout = ({children}) => {

     return (
          <Box sx={{ display: 'flex' }}>

               {/* Navbar drawerWidth */}


               {/* Sidebar drawerWidth*/}

               <Box
                    c omponent='main'
                    sx={{flexGrow: 1, p: 3}}
               >
                    {/* Toolbar */}

                    {children}

               </Box>


          </Box>

     );
};


export default JournalLayout;