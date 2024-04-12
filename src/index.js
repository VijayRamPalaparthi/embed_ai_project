import React from 'react'
// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from './App'

// const root = createRoot(document.getElementById('root'));
// root.render(<BrowserRouter>
//   <App />
// </BrowserRouter>);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
