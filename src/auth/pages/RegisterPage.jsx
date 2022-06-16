import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import AuthLayout from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { startCreatingUserWithEmailAndPassword } from '../../store/auth';

const formData = {
     email: '',
     password: '',
     displayName: '',
};

const formValidations = {
     email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
     password: [(value) => value.length >= 6, 'El password debe de tener mas de 6 letras'],
     displayName: [(value) => value.length >= 1, 'El nombre es obligatorio.'],
}

const RegisterPage = () => {

     const dispatch = useDispatch();

     const [formSubmitted, setFormSubmitted] = useState(false);

     const { status, errorMessage } = useSelector(state => state.auth);

     // Para que no se este recalculando cada vez que cambia el valor del formulario
     const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

     const {
          formState, displayName, email, password, onInputChange,
          isFormValid, displayNameValid, emailValid, passwordValid
     } = useForm(formData, formValidations);



     const onSubmit = (e) => {
          e.preventDefault();
          setFormSubmitted(true);

          if (!isFormValid) return;
          console.log(formState);

          dispatch(startCreatingUserWithEmailAndPassword(formState));
     }

     return (

          <AuthLayout title='Crear Cuenta'>

               <h1>FormValid {isFormValid ? 'Valido' : 'Incorrecto'}</h1>

               {/* Todo el contenido del AuthLayout es el children = form  */}
               <form onSubmit={onSubmit}>
                    <Grid container>
                         <Grid item xs={12} sx={{ mt: 2 }}>
                              <TextField
                                   label="Nombre completo"
                                   type="text"
                                   placeholder="Nombre completo"
                                   fullWidth
                                   name="displayName"
                                   value={displayName}
                                   onChange={onInputChange}
                                   error={!!displayNameValid && formSubmitted}
                                   helperText={displayNameValid}
                              />
                         </Grid>
                         <Grid item xs={12} sx={{ mt: 2 }}>
                              <TextField
                                   label="Correo"
                                   type="email"
                                   placeholder="correo@gmail.com"
                                   fullWidth
                                   name="email"
                                   value={email}
                                   onChange={onInputChange}
                                   error={!!emailValid && formSubmitted}
                                   helperText={emailValid}
                              />
                         </Grid>

                         <Grid item xs={12} sx={{ mt: 2 }}>
                              <TextField
                                   label="Contraseña"
                                   type="password"
                                   placeholder="Contraseña"
                                   fullWidth
                                   name="password"
                                   value={password}
                                   onChange={onInputChange}
                                   error={!!passwordValid && formSubmitted}
                                   helperText={passwordValid}
                              />
                         </Grid>

                         <Grid container spacing={2} sx={{ mt: 1, mb: 1 }}>

                              <Grid
                                   item
                                   xs={12}
                                   display={!!errorMessage ? '' : 'none'}
                              >
                                   <Alert severity='error'>
                                        {errorMessage}
                                   </Alert>
                              </Grid>

                              <Grid item xs={12}>
                                   <Button
                                        disabled={isCheckingAuthentication}
                                        type='submit'
                                        variant="contained"
                                        fullWidth>
                                        Crear cuenta
                                   </Button>
                              </Grid>

                         </Grid>

                         <Grid container direction="row" justifyContent="end">
                              <Typography mr={1}>¿Ya tienes una cuenta?</Typography>
                              <Link component={RouterLink} color="inherit" to="/auth/login">
                                   Ingresar
                              </Link>

                         </Grid>

                    </Grid>
               </form>

          </AuthLayout>


     );
};

export default RegisterPage;