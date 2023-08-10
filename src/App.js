import "./styles.css";
import TodoList from "./components/TodoList";
import TodoContextData from "./context";

export default function App() {
  return (
    <TodoContextData>
      <div className="App" style={{ height: "100vh" }}>
        <TodoList />
      </div>
    </TodoContextData>
  );
}
