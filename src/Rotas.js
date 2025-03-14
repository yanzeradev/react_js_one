import React from "react";
import { Route, BrowserRouter, Routes} from "react-router-dom";
import Home from "./Home";
import Sobre from "./Sobre";
import Usuario from "./Usuario";

function Rotas() {
    return (
        <div>
        
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Sobre" element={<Sobre />} />
                <Route path="/Usuario" element={<Usuario />} />
            </Routes>
            </BrowserRouter>


        </div>
    );
    }  

export default Rotas;