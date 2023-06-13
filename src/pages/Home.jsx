import { useState } from "react";
import CardResult from "../components/CardResult";

function Home() {
  const [todoText, setTodoText] = useState("");
  const [resTodo, setResTodo] = useState([]);

  const handleInput = (input) => {
    setTodoText(input.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResTodo((prevTodo) => [
      ...prevTodo,
      {
        id: Math.floor(Math.random() * Date.now()),
        todo: todoText,
        finished: false,
      },
    ]);
    setTodoText("");
  };

  const handleDelete = (id) => {
    const filteredData = resTodo.filter((data) => data.id !== id);

    setResTodo(filteredData);
  };

  const handleCompleted = (id) => {
    const updateTodo = resTodo.map((data) => {
      if (id === data.id) {
        return {
          ...data,
          finished: !data.finished,
        };
      }
      return data;
    });
    setResTodo(updateTodo);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-violet-950">
        <div className="w-full w-5/6 md:w-1/3 rounded-xl p-5 bg-gradient-to-tr from-indigo-400 to-indigo-900 shadow-lg">
          <div className="title flex justify-center my-4">
            <h1 className="font-mono text-4xl font-bold text-white">
              Todos App
            </h1>
          </div>
          <div className="my-6">
            <form className="flex justify-center gap-2">
              <input
                type="text"
                placeholder="todos.."
                className="border w-full rounded-md p-2"
                value={todoText}
                onChange={handleInput}
              />
              <button
                type="submit"
                className="bg-white rounded-lg px-2"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="result-wrapper">
            {/* <ul>
              {resTodo.length > 0
                ? resTodo.map((res) => {
                    return <li key={res.id}>{res.todo}</li>;
                  })
                : null}
            </ul> */}
            {resTodo.length > 0
              ? resTodo.map((data) => {
                  return (
                    <CardResult
                      key={data.id}
                      todoData={data}
                      handleDelete={handleDelete}
                      handleCompleted={handleCompleted}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
