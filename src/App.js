import React, {useState} from 'react';

import IndexHelper from "./components/IndexHelper/IndexHelper";
import {HOME, INFO, RESOURCES, USAGE, AJAX} from "./helpers/constants";
import Router from "./components/Router/Router";

const pages = [
    {name: 'Inicio', tag: HOME, index: 1},
    {name: 'Información', tag: INFO, index: 2},
    {name: 'Uso', tag: USAGE, index: 3},
    {name: 'Ajax y css', tag: AJAX, index: 4},
    {name: 'Recursos', tag: RESOURCES, index: 5},
];

function App() {
    const [currentPage, setCurrentPage] = useState(HOME);
    return (
        <div className="animated">
            <Router currentPage={currentPage} onPageSelected={setCurrentPage}/>
            <IndexHelper pages={pages} currentPage={currentPage} onPageSelected={setCurrentPage}/>
        </div>
    );
}

export default App;
