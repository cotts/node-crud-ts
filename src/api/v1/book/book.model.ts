import mongoose, { Schema, Document, Model, model } from 'mongoose'

export interface IBook extends Document {
  title: string
  description: string
  author: string
  edition: number
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
  edition: {
    type: Number,
    required: true,
  },
})

export default mongoose.model<IBook>('Book', BookSchema)
