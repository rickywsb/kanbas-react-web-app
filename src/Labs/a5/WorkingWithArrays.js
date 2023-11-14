import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithArrays() {
    const [errorMessage, setErrorMessage] = useState(null);

    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
      });
    const [todos, setTodos] = useState([]);
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
      useEffect(() => {
        fetchTodos();
      }, []);
    
    
    const API = "http://localhost:8000/a5/todos";
    const [id, setId] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);
    // 创建新的待办事项
    const createNewTodo = async () => {
        try {
          const response = await fetch(`${API}/create`, { method: 'POST' });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          console.log("New todo created:", data);
          // 可能需要更新状态或执行其他操作
        } catch (error) {
          console.error("Error during fetch operation:", error.message);
        }
      };

      const updateDescription = async (id) => {
        try {
            await axios.patch(`http://localhost:8000/todos/${id}/description`, { description });
            // Handle success
        } catch (error) {
            // Handle error
        }
    };

    const updateCompleted = async (id) => {
        try {
            await axios.patch(`http://localhost:8000/todos/${id}/completed`, { completed });
            // Handle success
        } catch (error) {
            // Handle error
        }
    };
    const fetchTodoById = async (id) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
      };
    

    const removeTodo = async (todo) => {
        const response = await axios
          .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
      };
    
      const updateTitle = async () => {
        const response = await axios.get(
          `${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
      };
    
      const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
      };
      const deleteTodo = async (todo) => {
        try {
          const response = await axios.delete(
            `${API}/${todo.id}`);
          setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (error) {
          console.log(error);
          setErrorMessage(error.response.data.message);
        }
      };
    

      const updateTodo = async () => {
        try {
            const response = await axios.put(
              `${API}/${todo.id}`, todo);
            setTodos(todos.map((t) => (
              t.id === todo.id ? todo : t)));
            setTodo({});
          } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
          }
      
      };
    
    
    

    return (
      <div>
        <h3>Working with Arrays</h3>
        <input value={todo.id}
         onChange={(e) => setTodo({ ...todo, id: e.target.value })}
            className="form-control mb-2"
            type="number"
        />
        <input value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
                className="form-control mb-2"
                type="text"
            />
            <textarea
                onChange={(e) => setTodo({ ...todo,
                description: e.target.value })}
                value={todo.description} type="text"
            />
            <input
                onChange={(e) => setTodo({
                ...todo, due: e.target.value })}
                value={todo.due} type="date"
            />
            <label>
                <input
                onChange={(e) => setTodo({
                    ...todo, completed: e.target.checked })}
                value={todo.completed} type="checkbox"
                />
                Completed
            </label>
            <button onClick={postTodo} >
                Post Todo
            </button>
            <button onClick={updateTodo}>
                Update Todo
            </button>

             <button onClick={updateTitle}
              className="btn btn-success mb-2 w-100">
                 Update Title
            </button>
            <button onClick={createNewTodo}
                className="btn btn-primary mb-2 w-100">
                Create Todo
            </button>
            {errorMessage && (
            <div className="alert alert-danger mb-2 mt-2">
            {errorMessage}
            </div>
      )}
            
        <ul className="list-group">
        
        {todos.map((todo) => (
            
          <li key={todo.id}
              className="list-group-item">
            <button
          onClick={() => fetchTodoById(todo.id)}
          className="btn btn-warning me-2 float-end" >
          Edit
        </button>
            
            <button
                onClick={() => deleteTodo(todo)}
                className="btn btn-danger float-end ms-2">
                Delete
            </button>
            <input
              checked={todo.completed}
              type="checkbox" readOnly
            />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
            {todo.title}
          </li>
        ))}
      </ul>
        <h4>Retrieving Arrays</h4>
        <a href={API} className="btn btn-primary me-2">
          Get Todos
        </a>

        <h4>Retrieving an Item from an Array by ID</h4>
            <input
                className="form-control"
                value={id}
                onChange={(e) => {
                    setId(e.target.value); // 更新id状态
                    setTodo({ ...todo, id: e.target.value }); // 更新todo对象的id
                }}
            />
            <a href={`${API}/${id}`} // 使用id状态变量
                className="btn btn-primary me-2">
                Get Todo by ID
            </a>
            <h3>Filtering Array Items</h3>
            <a href={`${API}/${todo.id}?completed=true`}
                className="btn btn-primary me-2" >
                Get Completed Todos
            </a>
            <h4>Creating new Items in an Array</h4>
            <button onClick={createNewTodo} className="btn btn-primary me-2">
                Create Todo
            </button>
            <input
                value={todo.id}
                onChange={(e) => setTodo({
                ...todo, id: e.target.value })}
                className="form-control mb-2"
                type="number"
            />
            <h3>Deleting from an Array</h3>
            <a href={`${API}/${todo.id}/delete`}
                className="btn btn-primary me-2">
                Delete Todo with ID = {todo.id}
            </a>
            <input
                value={todo.title}
                onChange={(e) => setTodo({
                ...todo, title: e.target.value })}
                className="form-control mb-2"
                type="text"
            />
            <h3>Updating an Item in an Array</h3>
            <a
                href={`${API}/${todo.id}/title/${todo.title}`}
                className="btn btn-primary me-2" >
                Update Title to {todo.title}
            </a>
            <h4>Extra Credit Updating Properties</h4>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Edit Description"
            />
            <input
                type="checkbox"
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
            />
            {/* Replace '1' with the actual ID */}
            <button onClick={() => updateDescription(1)}>Update Description</button>
            <button onClick={() => updateCompleted(1)}>Update Completed</button>
      </div>
    );
  }
  export default WorkingWithArrays;