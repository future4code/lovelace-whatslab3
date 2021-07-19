import React from 'react'
import MainContainer from './components/MainContainer'
import Container from './components/Container'
import Mensagem from './components/Mensagem'
import Input from './components/Input'


class App extends React.Component {
  state = {
    mensageiro: 
     [ { usuario: "",
        mensagem: ""
     } ],
      valorInputUsuario: "",
      valorInputMensagem: ""
  }

  solicitaRemetentesAndMensagens = () => {
    const novoUsuario = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem
    }
    const novosUsuarios = [... this.state.mensageiro, novoUsuario, ]
    
    this.setState({
      mensageiro: novosUsuarios, 
      valorInputUsuario: "",
      valorInputMensagem: ""
    })
  }

  onChangeInputUsuario = (event) => {
    this.setState({
      valorInputUsuario: event.target.value
    })
  }
  onChangeInputMensagem = (event) => {
    this.setState({
      valorInputMensagem: event.target.value
    })
  }

  render(){
     const pessoasComMensagens = this.state.mensageiro.map((leitura)=>{
       return (<Mensagem>
          <h6>{leitura.usuario}: </h6>  
         {leitura.mensagem}
            </Mensagem>
        )
        })
        
        return (
         
          <MainContainer>
            <Container>
           
        {pessoasComMensagens}
        
           <Input>
            <input className = "nome-usuario "
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuário"}/>

            <input className = "mensagem-usuario"
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder={"Mensagem"}/>
         
            <button onClick={this.solicitaRemetentesAndMensagens}>Enviar</button>
              </Input>          
          </Container>
          </MainContainer>
        )
  
      }

}
export default App;