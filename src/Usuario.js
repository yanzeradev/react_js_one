import React from "react";
import { Route, BrowserRouter, Routes} from "react-router-dom";
import { Link } from 'react-router-dom';

function Usuario() {
    return (
        <div>
        <h1>Usuario</h1>
        <h3> Olá Sr. Yankarlos, seja bem vindo!</h3>
        <button onClick={() => {alert("Linha Nao criada")}}> Criar nova linha </button>
        <br/>
        <Link to="/">retornar a pagina inicial</Link>
        </div>
    );
    }

export default Usuario;