import React, { useEffect, useState } from "react";
import Input from "../../components/common/Inputs/Input";
import Button from "../../components/common/Button/Button";
import TextArea from "../../components/common/TextArea/TextArea";
import Listdata from "../../components/common/Listdata.jsx/Listdata";

const Todos = () => {
  const [yourTodos, setYourTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const startEdit = (i) => {
    setTodoTitle(yourTodos[i].title);
    setTodoDescription(yourTodos[i].description);
    setIsEdit(true);
    setEditIndex(i);
  };

  const handleSubmit = () => {
    if (isEdit) {
      todoEdit(editIndex);
      setIsEdit(false);
    } else {
      handleAddTodo();
    }
  };

  //   Add Todo Function
  const handleAddTodo = () => {
    if (!todoTitle || !todoDescription) {
      alert("Please fill in both the title and description fields.");
      return;
    }

    const newTodo = {
      title: todoTitle,
      description: todoDescription,
    };
    setYourTodos([...yourTodos, newTodo]);
    setTodoTitle("");
    setTodoDescription("");
  };

  //   to save todos to local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(yourTodos));
  }, [yourTodos]);

  //   Edit Todo Function
  const todoEdit = (i) => {
    const updatedTodos = yourTodos.map((todo, index) =>
      index === i
        ? { ...todo, title: todoTitle, description: todoDescription }
        : todo
    );

    setYourTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodoTitle("");
    setTodoDescription("");
  };

  //   Delete Todo Function
  const todoDelete = (i) => {
    const updatedTodos = [...yourTodos.slice(0, i), ...yourTodos.slice(i + 1)];
    setYourTodos(updatedTodos);
  };

  return (
    <section className="flex justify-center items-center md:h-screen bg-[#0F2854]">
      <section className="grid grid-cols-1 lg:grid-cols-2 md:border-2 h-3/4 md:w-10/12 bg-[#F96E5B] shadow-lg rounded-xl">
        <section className="border-2 p-5 m-4 space-y-3 bg-[#FFE2AF] text-[#161E54] shadow-lg rounded-xl">
          <h1 className="text-center font-bold text-2xl">Todos Form</h1>
          <div className="">
            <label htmlFor="">Todo Title</label>
            <Input
              type="text"
              value={todoTitle}
              className="border-2 w-full p-1.5"
              placeholder="Add your Title"
              onChange={(e) => setTodoTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Todo Description</label>
            <TextArea
              value={todoDescription}
              className="border-2 p-1.5 w-full h-50"
              placeholder="Description"
              onChange={(e) => setTodoDescription(e.target.value)}
            />
          </div>
          <div>
            <Button
              id="todobtn"
              className="border-2 p-2 rounded-2xl w-full bg-blue-500 text-white"
              btnText={isEdit ? "Update Todo" : "Add Todo"}
              onClick={handleSubmit}
            />
          </div>
        </section>
        <section className=" border-2 p-5 m-4 h-auto md:overflow-y-scroll bg-[#FFE2AF] text-[#161E54] shadow-2xl rounded-xl my-scroll">
          <section className=" ">
            <h1 className="text-center font-bold text-2xl">Your todos</h1>
            {yourTodos.length === 0 ? (
              <p className="text-center text-gray-900 mt-4">No todos yet 🚫</p>
            ) : (
              yourTodos.map((todo, index) => (
                <Listdata
                  key={index}
                  todoTitle={todo.title}
                  todoDescription={todo.description}
                  todoEdit={() => startEdit(index)}
                  todoDelete={() => todoDelete(index)}
                />
              ))
            )}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Todos;
