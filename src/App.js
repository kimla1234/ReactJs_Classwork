import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Course from "./Components/Course";
import Counter from "./Components/State/Counter";
import CounterApp from "./Components/State/CounterApp";
import TodoList from "./Components/Todo-List/TodoList";

function App() {
  return (
    <div >
      <Navbar />
      <div className="p-8">
        <h2 className="text-fuchsia-700 text-4xl">Counter App (useState)</h2>
        <Counter />
      </div>
      <TodoList />
      <div className="text-fuchsia-700 flex justify-center text-4xl">Component</div>
      <Course />
    </div>
  );
}

export default App;
