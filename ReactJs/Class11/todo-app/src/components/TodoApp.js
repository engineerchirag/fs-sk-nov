import { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    // { title: "Item 1", isCompleted: true },
    // { title: "Item 2", isCompleted: false },
    // { title: "Item 3", isCompleted: true },
    // { title: "Item 4", isCompleted: true },
    // { title: "Item 5", isCompleted: false },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [newTodoStatus, setNewTodoStatus] = useState(false);

  const handleNewTodoChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    const newTodosList = [...todos, { title: newTodo, isCompleted: newTodoStatus }];
    setTodos(newTodosList);
    setNewTodo("");
    setNewTodoStatus(false);
  };

  const handleCompletion = (e) => {
    const currentTodoIndex = Number(e.target.dataset.id); // 5
    const updatedTodoStatus = e.target.checked;
    // Replace a item in list by changing the isCompleted status
    const newTodosList = [...todos];
    // Get todo at current index
    const newUpdatedTodo = { ...newTodosList[currentTodoIndex] };
    newUpdatedTodo.isCompleted = updatedTodoStatus;
    newTodosList.splice(currentTodoIndex, 1, newUpdatedTodo);

    setTodos(newTodosList);
  };

  const handleNewTodoStatus = (e) => {
    console.log(e.target.value);
    setNewTodoStatus(e.target.value);
  }

  return (
    <div className="todo-wrapper">
      <h1>Todo App</h1>
      <div className="todo-form">
        <form>
          <input
            type="text"
            placeholder="Enter new todo..."
            value={newTodo}
            onChange={handleNewTodoChange}
          />
          <select onChange={handleNewTodoStatus} value={newTodoStatus}>
            <option value={false}>Todo</option>
            <option value={true}>Completed</option>
          </select>
          <button onClick={handleTodoSubmit}>Add</button>
        </form>
      </div>
      <div className="todo-list">

        {!todos.length ? "Please create your first todo" : null}

        {todos.map((todo, idx) => (
          <div className="todo-item">
            <input
              type="checkbox"
              data-id={idx}
              checked={todo.isCompleted}
              onChange={handleCompletion}
            />
            <span className={todo.isCompleted ? "completed" : ""}>
              {" "}
              {todo.title}{" "}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
