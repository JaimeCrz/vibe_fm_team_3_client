import React from 'react';
import './style.css'
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from "axios";

axios.defaults.baseURL = "https://vibefmapi.herokuapp.com/api/v1/";
// axios.defaults.baseURL = "http://localhost:3000/api/v1/";


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
