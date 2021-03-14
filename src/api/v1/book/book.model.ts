import mongoose, { Schema, Document, Model, model } from 'mongoose'

export interface IBook extends Document{
  title: String,
  description: String,
  author: String,
  edition: Number
}

const BookSchema: Schema = new Schema({
  title: {
    type: String,
    required: true
  },
   description: {
    type: String,
    required: true
  }, 
  author: {
    type: String,
    required: true
  }, 
  edition: {
    type: Number,
    required: true
  }
})

const Book: Model<IBook> = model('Book', BookSchema) 

export default Book