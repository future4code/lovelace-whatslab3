import React from 'react'

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
       return (<div>
    {leitura.usuario} : {leitura.mensagem} 
       </div>
        )
        })
        return (
          <div>
           <span> {pessoasComMensagens}</span>
           
            <input 
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuário"}/>

            <input
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder={"Mensagem"}/>

            <button onClick={this.solicitaRemetentesAndMensagens}>Enviar</button>
          </div>
        )
  
      }

}
export default App;