import React from 'react';

//theme
import "primereact/resources/themes/lara-light-teal/theme.css";    
    
//core
import "primereact/resources/primereact.min.css";  

import 'primeicons/primeicons.css';

import { AppRoutes } from './routes/routes';
        

export const App: React.FC = () => {
  return (
    <AppRoutes />
  );
}


