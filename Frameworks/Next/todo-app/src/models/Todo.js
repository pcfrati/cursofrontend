//& schema da tabela

import mongoose from "mongoose";

//function para definir o schema
const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "O título é obrigatório"],
    trim: true, // remove os espaços  do início e do fim
    maxlength: [100, "Não é possível inserir mais de 100 caracteres"]
  },
  completed: {
    type: Boolean,
    default: false,
},
createdAt:{
    type:Date,
    default: Date.now,
}

});

export default TodoSchema;