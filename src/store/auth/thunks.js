import { async } from "@firebase/util";
import { loginWithEmailAndPAssword, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./"


export const checkingAuthentication = (email, password) => {
     return async (dispatch) => {

          dispatch(checkingCredentials())

     };
};

// Comienza con start para saber que es el inicio de una tarea asincrona

export const startGoogleSignIn = () => {
     return async (dispatch) => {

          dispatch(checkingCredentials())

          const result = await signInWithGoogle();
          if (!result.ok) return dispatch(logout(result.errorMessage));

          dispatch(login(result))
     };
};

export const startCreatingUserWithEmailAndPassword = ({ email, password, displayName }) => {
     return async (dispatch) => {

          dispatch(checkingCredentials());

          const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

          if (!ok) return dispatch(logout({ errorMessage }));

          dispatch(login({ uid, displayName, photoURL, email }));


          // console.log(resp);

     }
}

export const startLoginWithEmailAndPassword = ({ email, password }) => {
     return async (dispatch) => {

          dispatch(checkingAuthentication());

          const { uid, ok, errorMessage, displayName, photoURL } = await loginWithEmailAndPAssword({ email, password });

          if (!ok) return dispatch(logout({ errorMessage }));

          dispatch(login({ uid, displayName, photoURL, email }));


     }
}