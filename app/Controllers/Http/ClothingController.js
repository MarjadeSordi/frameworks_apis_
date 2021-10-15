'use strict'

const Clothing = use('App/Models/Clothing')

class ClothingController{
 async index({view}){

  const clothings = await Clothing.all();
  return view.render('/closet/mycloset', {clothings: clothings.toJSON()})
  
 } 

 async criar({view}){
   return view.render('closet.formulario')
 }


 async editar({view, params}){
  const clothing = await Clothing.find(params.id);
  const clothingEdit = await clothing.toJSON()
  console.log(clothingEdit);

  return view.render('/closet/formulario', {clothing: clothingEdit })
 }

 async editarClothing({params, request, response}) { 
  const clothing = await Clothing.find(params.id);   
  const clothingAtualizar = request.only(['type_of', 'season','print','color', 'size', 'brand']);
  clothing.merge(clothingAtualizar);
  await clothing.save()
  return response.redirect('/closet')

 }

 
 async salvar({request, response}){
   const clothing = new Clothing();
   clothing.type_of = request.input('type_of');
   clothing.color = request.input('color');
   clothing.print = request.input('print')
   clothing.season = request.input('season');
   clothing.brand = request.input('brand');  
   clothing.expiration_type = request.input('expiration_type');
   clothing.size = request.input('size');
   clothing.buy_at = request.input('buy_at')


    await clothing.save();
    return response.redirect('/closet')
 }


 async deletar({params, response, session }){
  const clothing = await Clothing.find(params.id);
  await clothing.delete()
  session.flash({ notification: "Peça retirada do closet" });
  return response.redirect('/closet')
 }

}

module.exports = ClothingController;