import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from "react-router-dom";


import JournalApp from './JournalApp';
import './styles.css';

// BrowserRouter coloco en el punto mas alto de mi aplicacion

ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
          <Provider store={store}>

               <BrowserRouter>
                    <JournalApp />
               </BrowserRouter>

          </Provider>
     </React.StrictMode>
)
