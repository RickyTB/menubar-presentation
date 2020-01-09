import React, {useState} from 'react';

import IndexHelper from "./components/IndexHelper/IndexHelper";
import {HOME, INFO} from "./helpers/constants";
import Router from "./components/Router/Router";

const pages = [
    {name: 'Inicio', tag: HOME, index: 1},
    {name: 'Información', tag: INFO, index: 2},
];

function App() {
    const [currentPage, setCurrentPage] = useState(INFO);
    return (
        <div className="animated">
            <Router currentPage={currentPage} onPageSelected={setCurrentPage}/>
            <IndexHelper pages={pages} currentPage={currentPage} onPageSelected={setCurrentPage}/>
        </div>
    );
}

export default App;
