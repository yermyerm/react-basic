import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const deleteToDo = (idx) => {
    setToDos((currentToDos) =>
      currentToDos.filter((toDo, toDoIdx) => idx !== toDoIdx)
    );
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentToDos) => [...currentToDos, toDo]);
    setToDo("");
  };
  return (
    <div>
      <h1>My ToDos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo, idx) => (
          <li key={idx}>
            {toDo}
            <button onClick={() => deleteToDo(idx)}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
