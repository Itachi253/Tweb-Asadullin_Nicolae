import { useState } from 'react'
import { useTodosStore } from './TodosContext'

const AddTodo = () => {
	const [ todoBody, setTodoBody ] = useState('');
	const todosStore = useTodosStore();

	const handleAddTodo = () => {
		todosStore.addTodo(todoBody);
		setTodoBody('');
	};

	return (
		<>
			<input value={todoBody} onChange={(e) => setTodoBody(e.target.value)} type="text" placeholder="file" />
			<button onClick={handleAddTodo}>add file</button>
		</>
	);
}

export default AddTodo