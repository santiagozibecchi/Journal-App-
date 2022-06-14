import { TurnedInNot } from "@mui/icons-material";
import { Drawer, Box, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from "@mui/material";

export const SideBar = ({ drawerWidth }) => {


     return (
          <Box
               component='nav'
               sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          >
               <Drawer
                    variant='permanent' // o bien temporary -> dependiendo del tamano
                    open={true}
                    sx={{
                         display: { xs: 'block' },
                         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}
               >
                    <Toolbar>
                         <Typography variant='h6' noWrap component='div'>
                              Santiago Zibecchi
                         </Typography>
                    </Toolbar>
                    <Divider />

                    <List>
                         {
                              ['enero', 'febreo', 'Marzo', 'abril'].map(text => (
                                   <ListItem key={text} disablePadding>
                                        <ListItemButton>
                                             <ListItemIcon>
                                                  <TurnedInNot />
                                             </ListItemIcon>

                                             <Grid container>
                                                  <ListItemText primary={text} />
                                                  <ListItemText secondary={'lorena s dasdasd asd sad asdas dsad asvdsmk v'} />
                                             </Grid>

                                        </ListItemButton>
                                   </ListItem>
                              ))
                         }
                    </List>

               </Drawer>

          </Box>
     );
};
