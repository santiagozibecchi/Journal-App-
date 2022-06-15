import { checkingCredentials } from "./authSlice"


export const checkingAuthentication = (email, password) => {
     return async (dispatch) => {

          dispatch(checkingCredentials())

     };
};

// Comienza con start para saber que es el inicio de una tarea asincrona

export const startGoogleSignIn = () => {
     return async(dispatch) => {

          dispatch(checkingCredentials())
     };
};