import mongoose, { Document, Model, Schema } from "mongoose";

export interface ITarefa extends Document{
    //* herda a base do document do mongoose
    //? atributos
    titulo: string;
    concluida: boolean;
    criadaEm: Date;
}

//? criar a regra (o schema) do MongoDB
const TarefaSchema: Schema<ITarefa> = new mongoose.Schema({
    titulo:{
        type: String,
        required: [true, "O título é obrigatório"],
        trim: true,
        maxLength: [50, "Máximo de 50 caracteres"]
    },
    concluida:{
        type: Boolean,
        default: false
    },
    criadaEm:{
        type: Date,
        default: Date.now
    }
});

//? export do modelo
const Tarefa: Model<ITarefa> = mongoose.models.Tarefa || mongoose.model<ITarefa>("Tarefa", TarefaSchema);

export default Tarefa;