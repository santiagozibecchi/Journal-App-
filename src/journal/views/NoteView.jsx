import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";


export const NoteView = () => {

     return (
          <Grid
               container
               direction='row'
               justifyContent='space-between'
               sx={{ mb: 1 }}
               alignItems="center"
          >
               <Grid item>
                    <Typography fontSize={39} fontWeight='ligth'> 14 de Junio, 2022</Typography>
               </Grid>

               <Grid item>
                    <Button color="primary" sx={{ padding: 2 }}>
                         <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                         Guardar
                    </Button>
               </Grid>

               <Grid container>
                    <TextField
                         type="text"
                         variant="filled"
                         fullWidth
                         placeholder="Ingrese un titulo"
                         label="Titulo"
                         sx={{ border: 'none', mb: 1 }}
                    />

                    <TextField
                         type="text"
                         variant="filled"
                         fullWidth
                         multiline
                         minRows={5}
                         placeholder="Escribe tus notas"
                         label="Notas"
                         sx={{ border: 'none', mb: 1 }}
                    />

                    {/* Galeria de imagenes */}
                    <ImageGallery />

               </Grid>

          </Grid>
     );
};
