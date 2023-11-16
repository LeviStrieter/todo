import { useRef, useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [item, instantiate] = useState([]);
  const inputRef = useRef(null);

  const addItem = (e) => {
    e.preventDefault();
    const newItem = inputRef.current.value;
    if (newItem !== "") {
      instantiate([...item, newItem]);
    }
    inputRef.current.value = "";
  };

  const removeItem = (index) => {
    const updateditems = item.filter((_, i) => i !== index);
    instantiate(updateditems);
  };

  return (
    <>
      <div className="App container">
        <h1>ToDo List</h1>
        <form>
          <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Item" ref={inputRef}></input>
            <small class="form-text text-muted">Enter item to be added.</small>
          </div>
          </form>
          <ul class="list-group">
          {item.map((item, index) => (
            <li class="list-group-item" key={index}>
              {item}
              <span className="text-dark" onClick={() => removeItem(index)}>
                x
              </span>
            </li>
          ))}
        </ul>

        <button type="button" class="btn btn-secondary btn-lg" onClick={addItem}>Add</button>

      </div>
    </>
  );
}

export default App;
