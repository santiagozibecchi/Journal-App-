import { Grid, Typography } from "@mui/material";

const AuthLayout = ({ children, title = '' }) => {
     return (

          <Grid
               container
               spacing={0}
               direction="column"
               alignItems="center"
               justifyContent="center"
               sx={{
                    minHeight: '100vh',
                    backgroundColor: 'primary.main',
                    padding: 4,
               }}
          >

               <Grid item
                    className="box-shadow"
                    // tamanio de la caja
                    xs={3}
                    // estilo
                    sx={{
                         width: { sm: 450 },
                         backgroundColor: 'white',
                         padding: 3,
                         borderRadius: 2,
                    }}
               >
                    <Typography variant="h5" sx={{ mb: 1 }}>{title}</Typography>

                    {/* A partir de este espacio va en children */}
                    {children}

               </Grid>

          </Grid>
     );
};

export default AuthLayout;