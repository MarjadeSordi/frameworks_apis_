'use strict'

const Usuario = use('App/Models/Usuario')

class LoginController {
  async index({ view, response, session}) {
    if(session.get('nome')){
     return response.redirect('/bemvindo')
    }
    else
    return view.render('login')
  }

  async login({ request, response, session }) {
    const email = request.input('email')
    const senha = request.input('senha')

    const usuario = await Usuario.findBy('email', email);
    
    if(usuario && usuario.senha == senha) {
      console.log('logado');
      session.put('nome', usuario.nome);
      return response.redirect('/bemvindo')

    } else {
      console.log('Usuário e/ou senha inválidos!')
    }

    return response.redirect('back')
  }

  async logout({session, response}){
    session.clear();
    return response.redirect('/');
  }

}

module.exports = LoginController
