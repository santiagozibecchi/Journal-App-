import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import JournalLayout from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

const JournalPage = () => {
     return (

          <JournalLayout>

               {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ut labore! Fuga, accusamus quibusdam. Cupiditate voluptate ad mollitia aspernatur repudiandae similique voluptates accusantium veritatis obcaecati! Repudiandae omnis sint obcaecati dolor!</Typography> */}



               {/* Nothing Selected - cuando no hay nada seleccionado muestro el 
                    siguiete componente
               */}
               <NothingSelectedView />

               <IconButton
                    size='large'
                    sx={{
                         color: 'white',
                         backgroundColor: 'error.main',
                         ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                         position: 'fixed',
                         right: 50,
                         bottom: 50,
                    }}
               >
                    <AddOutlined sx={{ fontSize: 30 }} />
               </IconButton>


               {/* NoteView */}
               {/* <NoteView /> */}

          </JournalLayout>
     )
}

export default JournalPage;