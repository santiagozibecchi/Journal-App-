import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FireBaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";


export const useCheckedAuth = () => {

     const { status } = useSelector(status => status.auth);
     const dispatch = useDispatch();

     // Es necesario disparar un efecto para que este pueda cambiar si estamos
     // autenticados o no

     useEffect(() => {

          // cuando el estado de la autenticacion cambia 
          onAuthStateChanged(FireBaseAuth, async (user) => {
               // console.log(user)
               // si no existe nungun usuario
               if (!user) return dispatch(logout())

               const { uid, email, displayName, photoURL } = user;
               dispatch(login({ uid, email, displayName, photoURL }));

          })
          // no la voy a limpiar porque siempre quiero estar pendiente del cambio
          // de la autenticacion => es un observable

          // el segundo argumento es un callback que se va a ejecutar cuando 
          // se reciba el siguiente valor de tipo <User>

     }, [])
     // firebase nos ofrece una forma de estar pendiente de los cambios que el 
     // usuario va a tener

     return {
          status
     }

}
