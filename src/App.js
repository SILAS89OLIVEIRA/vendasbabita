import React, { Component } from 'react';
import api from './api';


class App extends Component{

  state = {
    usuarios: [],


  }

async componentDidMount(){
  const response = await api.get('/usuarios'); 

  //console.log(response.data);

  this.setState({usuarios: response.data})
} 

  render(){

    const {usuarios} = this.state;

    console.log(usuarios);

    return(
      <div>
        <h1>Venda Lojas</h1>
        <ul style={{listStyleType: "none", margin:0, padding:0}}>
         {usuarios.map(usuarios => (
           <li key={usuarios.lojas_nome}>
             <h2>Loja: {usuarios.lojas_nome}</h2>
             <p>Venda: {usuarios.total}</p>
           </li>

         ))}
        </ul>
      </div>
    );
  };
};

export default App;
