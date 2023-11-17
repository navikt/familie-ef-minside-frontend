//import './utils/polyfills';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import '@navikt/ds-css';
import {createRoot} from "react-dom/client";
import {Component} from "react";





const container = document.getElementById('root');

class Minside extends Component {
    render() {
        return <>Minside</>;
    }
}

if (container == null) {
    throw new Error('Mangler container for appen');
} else {
    const root = createRoot(container);
    root.render(
        <>
            <Router basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path={'*'} element={<Minside />} />
                </Routes>
            </Router>
        </>
    );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
