import React from 'react'
import ReactDOM from 'react-dom'
import 'font-awesome/css/font-awesome.min.css';
import './index.sass'
import App from "./components/app";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./components/store/reducer/rootReducer";

const store = createStore(rootReducer)

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
