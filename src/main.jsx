import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Bootstrap 5 and Bootstrap Icons
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// ReMiCare - VISI Brand Layered CSS
import './styles/variables.css';
import './styles/global.css';
import './styles/components.css';
import './styles/accessibility.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
