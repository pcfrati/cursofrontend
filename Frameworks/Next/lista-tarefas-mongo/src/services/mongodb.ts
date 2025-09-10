
//* pega a string de conexão nas variaveis de ambiente do projeto(environment)

import mongoose from "mongoose";

//* transformo em um endereço URL (URI)
const MONGODB_URI = process.env.DATABASE_URL; //& 1.

if(!MONGODB_URI) {
    throw new Error("Defina o DATABASE_URL no .env.local");
}

//& cache do sistema (mongoose), armazena conexões já estabelecidas
let cached = (global as any).mongoose; //& 2.
//* se cached não existir (primeira vez que acesso ao site)
if(!cached){
    cached = (global as any).mongoose = {conn: null, promise: null};
}


async function connectMongo() {
    //* verifica se conexão já exite e retorna a própria conexão
    if(cached.conn) return cached.conn; //& 3
    
    //! verifica se existe uma promessa de conexão em andamento
    if(!cached.promise){ //& 4
        const aguard = {bufferCommands: false};
    //* crio uma promessa de conexão
        cached.promise = mongoose.connect(MONGODB_URI!, aguard)
        .then((mongoose)=>{
            console.log("Conectado ao Mongo");
        return mongoose
        });
    }

    //& aguarda a conexão ser criada
    try { //& 5
        //* cria a conexão a partir da promessa q estava pendente
        cached.conn = await cached.promise;
    } catch (error) {
        //! se a conexão falhar
        cached.promise = null;
        throw error; // lança o erro para o view
    }
    return cached.conn;
}

//& transforma em um componente reutilizável
export default connectMongo;

// 1. Criar o endereço de conexão
// 2. Criar o cached para armazenar as conexões ao longo do projeto
// 3. Verificar se já existe uma conexão estabelecida com DB
// 4. Veriifica se não existe uma promessa de conexão e cria uma promise
// 5. Com a promise criada, estabelce uma conexão com o banco

