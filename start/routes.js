'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager');
const LoginController = require('../app/Controllers/Http/LoginController');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.get('/', 'LoginController.index');
Route.post('/login', 'LoginController.login');
Route.get('/bemvindo', 'WelcomeController.bemVindo');
Route.get('/logout','LoginController.logout');
Route.get('/closet', 'ClothingController.index');
Route.get('/closet/novo', 'ClothingController.criar');
Route.get('/closet/editar/:id', 'ClothingController.editar'); 
Route.post('/closet/salvar', 'ClothingController.salvar');
Route.post('/closet/editarClothing/:id', 'ClothingController.editarClothing');
Route.get('/closet/deletar/:id','ClothingController.deletar');