import React from 'react'
// import ReactDOM from 'react-dom'

import App from './App';
import './styles/style.css';
import './index.css'

// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById('root')
// )

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
  <React.StrictMode>
 		<App />
 	</React.StrictMode>,
);