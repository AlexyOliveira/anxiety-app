import React, { useEffect, useState } from "react";
import "./ToDoList.css";
import Header from "./Header";
import Footer from "./Footer";

function ToDoList() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const storedList = localStorage.getItem("anxietapp-list");

    if (storedList) {
      setList(JSON.parse(storedList));
    }
  }, []);

  const handleAdd = () => {
    if (text.trim() !== "") {
      setList((prevList) => {
        const newList = [
          ...prevList,
          { text: text.toUpperCase(), done: false },
        ];
        localStorage.setItem("anxietapp-list", JSON.stringify(newList));
        return newList;
      });

      setText("");
    }
  };

  const getText = (e) => {
    setText(e.target.value);
  };
  const handleTrash = (value) => {
    const newList = list.filter((l) => l.text !== value);
    setList(newList);
    localStorage.setItem("anxietapp-list", JSON.stringify(newList));
  };

  const handleDone = (value) => {
    const updatedList = list.map((item) => {
      if (item.text === value) {
        return { ...item, done: !item.done };
      } else {
        return item;
      }
    });

    setList(updatedList);
    localStorage.setItem("anxietapp-list", JSON.stringify(updatedList));
  };
  return (
    <div className="list-container">
      <Header />
      <div className="list-form">
        <input
          maxLength={30}
          onChange={getText}
          value={text}
          placeholder="Oque você vai fazer hoje?"
          type="text"
          name=""
          id=""
        />
        <button onClick={handleAdd} className="btn btn-primary" type="button">
          Adicionar tarefa
        </button>
      </div>
      <div className="list">
        <ul>
          {list.map((l, index) => (
            <li className={l.done ? "done" : ""} key={index}>
              <div className="text">{l.text}</div>{" "}
              <div>
                {" "}
                <button
                  onClick={() => handleDone(l.text)}
                  className="btn btn-primary"
                >
                  feito
                </button>{" "}
                <button
                  name="d"
                  onClick={() => handleTrash(l.text)}
                  className=" btn btn-warning"
                  type="button"
                >
                  <i
                    style={{ color: "red" }}
                    className="fa-regular fa-trash-can"
                  ></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default ToDoList;
