import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FireBaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();


export const signInWithGoogle = async () => {

     try {

          const result = await signInWithPopup(FireBaseAuth, googleProvider);
          // const credentials = GoogleAuthProvider.credentialFromResult(result);
          // FireBaseAuth tiene toda la confifuracion de la autenticacion basado en la version 9 de firebase

          const { displayName, email, photoURL, uid } = result.user;

          return {
               ok: true,
               // User info
               displayName,
               email,
               photoURL,
               uid,
          }

     } catch (error) {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;

          return {
               ok: false,
               errorMessage,
          }
     }
}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {

     try {
          console.log(({ email, password, displayName }));

          const resp = await createUserWithEmailAndPassword(FireBaseAuth, email, password)
          const { uid, photoURL } = resp.user;
          console.log(resp);
          // TODO: Actualizar el displayName en Firebase

          return {
               ok: true,
               uid,
               photoURL,
               email,
               displayName,
          }

     } catch (error) {
          console.log(error);
          return {
               ok: false,
               errorMessage: error.message,
          }
     }
}