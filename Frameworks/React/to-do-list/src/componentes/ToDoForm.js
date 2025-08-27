//& componente para criar o formulário para inserir uma nova tarefa

//* import do css
import "./ToDoForm.css"

import { useState } from "react";

const ToDoForm = ({ addTarefa }) => {
  //* estado para armazenar o valor do input (campo para inserir a tarefa)
  const [tarefa, setTarefa] = useState("");

  //* função para atualizar o estado com o valor do input
  const handleSubmit = (e) =>{
    //! impedir o comportamento padrão do formulário
    e.preventDefault();
    // verificar se o campo não está vazio
    if(tarefa.trim()!==""){
        // adiciono a tarefa ao array de tarefas
        addTarefa(tarefa);
        // limpo o campo de input
        setTarefa("");
    }
  };
  return(
    // retorna o formulário (o view)
    <form onSubmit={handleSubmit}>
        <input type="tex" placeholder="Insira uma nova tarefa" value={tarefa} onChange={(e) => setTarefa(e.target.value)}></input>
        <button type="submit">Adicionar</button>
    </form>
  )
};

export default ToDoForm;