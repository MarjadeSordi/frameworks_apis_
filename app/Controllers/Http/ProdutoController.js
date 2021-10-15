'use strict'

const Produto = use('App/Models/Produto')

class ProdutoController{
 async index({view}){

  const produtos = await Produto.all();
  return view.render('/produtos/tabelas', {produtos: produtos.toJSON()})
  
 } 

 async criar({view}){
   return view.render('produtos.formulario')
 }

 async editar({view, params}){
  const produto = await Produto.find(params.id);
  const produtoEdit = await produto.toJSON()
  
  return view.render('/produtos/formulario', {produto: produtoEdit })
 }

 async editarProd({params, request, response}) { 
  const produto = await Produto.find(params.id);   
  const produtoAtualizar = request.only(['nome', 'preco', 'categoria']);
  produto.merge(produtoAtualizar);
  await produto.save()
  return response.redirect('/produtos')

 }

 
 async salvar({request, response}){
   const produto = new Produto();
   produto.nome = request.input('nome');
   produto.preco = request.input('preco');
   produto.categoria = request.input('categoria');

    await produto.save();
    return response.redirect('/produtos')
 }


 async deletar({params, response, session }){
  const produto = await Produto.find(params.id);
  await produto.delete()
  session.flash({ notification: "Produto deletado" });
  return response.redirect('/produtos')
 }

}

module.exports = ProdutoController;