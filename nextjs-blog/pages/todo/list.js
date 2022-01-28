import { useState } from "react";
import Layout from "../../components/layout";

export default function List() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  function handleChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodo([input, ...todo]);
    setInput("");
  }

  function handleDelete(item) {
    let updated = todo.filter(
      (todoItem) => todo.indexOf(todoItem) != todo.indexOf(item)
    );
    setTodo(updated);
  }
  return (
    <Layout>
      <h1>Todo List</h1>
      <form>
        <input type="text" value={input} onChange={handleChange} />
        <button onClick={handleSubmit}>Add</button>
        <ul>
          {todo.length > 0 &&
            todo.map((item) => {
              return (
                <li>
                  {item}
                  <button
                    onClick={function (e) {
                      e.preventDefault();
                      handleDelete(item);
                    }}
                  >
                    x
                  </button>
                </li>
              );
            })}
        </ul>
      </form>
    </Layout>
  );
}
