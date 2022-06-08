import './App.css';
import TodoInput from './components/input'
import Todos from './components/todos'

function App() {
  return (
    <div className="App">
      <h1><b>TASK MANAGER</b></h1>
      <TodoInput/>
      <Todos/>
    </div>
  );
}

export default App;
