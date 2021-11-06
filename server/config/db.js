import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const connection = await mongoose.connect('mongodb://localhost/bookstore', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${connection.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
