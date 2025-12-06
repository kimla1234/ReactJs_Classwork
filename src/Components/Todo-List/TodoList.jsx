import React, { useState, useEffect } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("todoTasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [taskInput, setTaskInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: taskInput.trim(),
      completed: false,
    };

    setTasks([...tasks, newTodo]);
    setTaskInput("");
  };

  // Toggle Complete/Undo Functionality
  const toggleTaskCompleted = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete Functionality
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className=" border max-w-2xl w-full p-6 rounded-lg bg-white dark:bg-gray-800 dark:text-gray-300">
        <h1 className="text-4xl font-mono font-extrabold py-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
          TODO-List
        </h1>

        <div className="flex mb-6 group">
          <input
            id="taskInput"
            type="text"
            placeholder="Add a new task..."
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addTask()}
            className="flex-1 px-4 py-3 rounded-l-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 group-hover:shadow-lg"
          />
          <button
            id="addTaskBtn"
            onClick={addTask}
            className="px-5 rounded-r-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:shadow-xl transition-all duration-300"
          >
            Add
          </button>
        </div>

        {/* Task List Section */}
        <div id="taskList">
          {tasks.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400 italic">
              No tasks yet! Start adding some.
            </p>
          ) : (
            <ul className="space-y-3">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 ${
                    task.completed
                      ? "bg-green-100 dark:bg-green-900 border-l-4 border-green-500 line-through text-gray-500 dark:text-gray-400"
                      : "bg-gray-50 dark:bg-gray-700 border-l-4 border-purple-500 hover:shadow-md"
                  }`}
                >
                  <span className="flex-1 text-lg">{task.text}</span>

                  {/* Toggle Button */}
                  <button
                    onClick={() => toggleTaskCompleted(task.id)}
                    className={`ml-4 px-3 py-1 text-sm font-medium rounded-full transition-colors duration-200 ${
                      task.completed
                        ? "bg-white text-green-600 border border-green-600 hover:bg-green-600 hover:text-white"
                        : "bg-purple-500 text-white hover:bg-purple-600"
                    }`}
                  >
                    {task.completed ? "Undo" : "Complete"}
                  </button>

                  {/* Delete Button */}
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="ml-2 px-3 py-1 text-sm font-medium rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-200"
                    title="Delete Task"
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
