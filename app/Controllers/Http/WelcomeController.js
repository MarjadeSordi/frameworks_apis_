'use strict'

class WelcomeController {

  async bemVindo({view, session, response}) {
    const nome = session.get('nome');
    if(nome){
      return view.render('bemvindo', {nome: nome});

    }
    else {
      response.redirect('/');
    }
  }
}

module.exports = WelcomeController
