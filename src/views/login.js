import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
class Login extends React.Component{

    state ={
        chapa: '',
        senha: ''
    }
    entrar =() =>{
        console.log('Chapa: ', this.state.chapa)
        console.log('Senha: ', this.state.senha)
        console.log("window.location.href='home.html'")
    }

render(){
    return(
    <div className="container">
        <div className="row">
            <div className="col-md-6" style={ {position: 'relative',left: '300px'}}>
               <div className="bs-docs-section"></div> 
                <Card title="Login">
                    <div className="row">
                    <div className="col-lg-12">
                    <div className="bs-component">
                        <form>
                            <fieldset>
                                <FormGroup label="Chapa: *" htmlFor="exampleInputChapa">
                                    <input type="chapa"
                                    value={this.state.chapa} 
                                    onChange={e =>this.setState({chapa: e.target.value})}
                                    className="form-control" id="exampleInputChapa" 
                                    aria-describedby="emailHelp" placeholder="Digite a Chapa"/>
                               </FormGroup>
                               <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                                    <input type="password" 
                                    value={this.state.senha} 
                                    onChange={e =>this.setState({senha: e.target.value})}
                                    className="form-control" id="exampleInputPassword1" 
                                    placeholder="Password"/>
                               </FormGroup>
                                <button onClick={this.entrar} type="button" className="btn btn-success">Entrar</button>
                                <button onClick="window.location.href='usuarios.html'" type="button" className="btn btn-danger">Cadastrar</button>
                            </fieldset>
                        </form>
                        </div>
                        </div>
                        </div>
                    
               </Card>
            </div>
        </div>
    </div>
    )
}


}

export default Login