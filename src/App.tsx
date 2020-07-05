import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './layouts/Layout';
import Routes from './routes';
import { store } from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import './styles/index.scss';

library.add();

/**
 * Корневой компонент приложения.
 */
const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Routes/>
            </Layout>
        </Router>
    </Provider>
);

export default App;
