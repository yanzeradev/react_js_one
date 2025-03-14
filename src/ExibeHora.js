import React from 'react';

function ExibeHora() {
    return (
        <div> 
            <p>Horario em milisegundos:</p>
            { Date.now() }
        </div>
    );
}

export default ExibeHora;