import mongoose, { Schema, Document, Model, model } from 'mongoose'

export interface IBook extends Document {
  title: string
  description: string
  author: string
}

const BookSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
})

export default mongoose.model<IBook>('Book', BookSchema)
