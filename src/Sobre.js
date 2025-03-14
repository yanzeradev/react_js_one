import React from "react";
import { Link } from 'react-router-dom';
import Cruzeiro from './cruzeiro.jpeg';
import Figure from 'react-bootstrap/Figure';


function Sobre() {
  return (
    <div>
      <h1>Sobre</h1>
      <img src="https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Logo do Google"/>
      <br/>
      <img src={Cruzeiro} alt="camisa do Cruzeiro"/>
      <br/>
      <Figure>
      <Figure.Image
        width={1280}
        height={720}
        alt="cruzeiraooo"
        src={Cruzeiro}
      />
      <Figure.Caption>
        Cruzeiro é o melhor time do brasil!
      </Figure.Caption>
      </Figure>
      <Link to="/">retornar a pagina inicial</Link>
    </div>
  );
}

export default Sobre;