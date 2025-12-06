import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Course from "./Components/Course";
import Counter from "./Components/State/Counter";
import CounterApp from "./Components/State/CounterApp";
import TodoList from "./Components/Todo-List/TodoList";

function App() {
  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}

export default App;
