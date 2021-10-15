'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Clothing extends Model {
  static get createdAtColumn () {
    return null 
  }
  static get updatedAtColumn () {
    return null 
  }
}

module.exports = Clothing
