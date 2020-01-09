import React from 'react';

import Landing from "./pages/1Landing";
import IndexHelper from "./components/IndexHelper/IndexHelper";
import {HOME} from "./helpers/constants";

const pages = [
    {name: 'Inicio', tag: HOME, index: 1},
];

function App() {
    return (
        <div className="animated">
            <Landing/>
            <IndexHelper pages={pages} currentPage={HOME} onPageSelected={() => {}}/>
        </div>
    );
}

export default App;
