import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="container mt-6 mx-auto">
      {/* Header */}
      <div>
        <Header />
      </div>

      {/* Task Form */}
      <div
        className="task_container mx-auto pb-10 rounded-md mb-20 max-w-5xl xs:w-80 sm:w-4/5"
        // style={{ width: "55%", minHeight: "700px" }}
      >
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
