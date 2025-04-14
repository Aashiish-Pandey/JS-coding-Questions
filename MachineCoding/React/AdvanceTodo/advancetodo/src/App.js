import { useState, useRef } from "react";
import "./App.css";

const ListItem = ({ text, completed, handleCompleted, id, handleDelete }) => {
  return (
    <div className="listItem">
      <div className="circle" onClick={() => handleCompleted(id)}>
        {completed && <span>&#10003;</span>}
      </div>
      <p>{text}</p>
      <button className="delete" onClick={() => handleDelete(id)}>
        X
      </button>
    </div>
  );
};
export default function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const handleKeyPress = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      setTodos((todos) => [
        ...todos,
        { text: e.target.value, completed: false, id: Date.now() },
      ]);
      inputRef.current.value = "";
    }
  };
  const handleCompleted = (id) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodo);
  };

  const handleDelete = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };
  return (
    <div className="App">
      <div className="listContainer">
        <input type="text" onKeyUp={handleKeyPress} ref={inputRef} />

        <div className="todoList">
          {todos.map((todo) => (
            <ListItem
              {...todo}
              key={todo?.id}
              handleCompleted={handleCompleted}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
