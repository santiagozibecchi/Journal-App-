import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {

     const [formState, setFormState] = useState(initialForm);
     const [formValidation, setFormValidation] = useState({});

     useEffect(() => {
          createValidators();
     }, [formState]);

     // useMemo porque quiero memorizar el valor porque puede ser que la persona
     // este trabajando en cambiar algo que no deberia afectar con cambiar el isFormValid 
     // se deberia volver a procesar si cambia el formState 
     const isFormValid = useMemo(() => {

          // barro cada una de las propiedades del formValidation y verificar si tienen el 
          // valor del null 
          for (const formValue of Object.keys(formValidation)) {
               if (formValidation[formValue] !== null) return false;
          }

          return true;
     }, [formValidation])

     const onInputChange = ({ target }) => {
          const { name, value } = target;
          setFormState({
               ...formState,
               [name]: value
          });
     }

     const onResetForm = () => {
          setFormState(initialForm);
     }

     // nuevo estado para saber si los formularios/ inputs son validos o no
     const createValidators = () => {
          const formCheckedValues = {};

          for (const formFields of Object.keys(formValidations)) {
               const [fn, errorMessage /* = 'Este campo es requerido.' */] = formValidations[formFields];

               // propiedad computada => estoy creando las propiedades que voy a mandar 
               formCheckedValues[`${formFields}Valid`] = fn(formState[formFields]) ? null : errorMessage;
          }

          setFormValidation(formCheckedValues);
     }

     return {
          ...formState,
          formState,
          onInputChange,
          onResetForm,
          ...formValidation,
          isFormValid
     }
}