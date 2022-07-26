import React from 'react'

import Login from './views/login'

import 'bootswatch/dist/vapor/bootstrap.css'
import './custom.css'

class App extends React.Component {
  state = {
    nome : '',
    resultado :'?',
    valor1:5500,
    valor2: 50055
  }

  soma = () =>{
    const resultado = parseInt(this.state.valor1) + parseInt(this.state.valor2)
    this.setState({resultado: resultado})
  }
  render() {
    return(
<div>
  <Login />
</div>

      )
  }
}
export default App
