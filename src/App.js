// provider import
import TodoContextProvider from './contexts/TodoContext';

// component imports
import Title from './components/Header';
import TodoList from './components/TodoList';
import NewTodoForm from './components/NewTodoForm';

function App() {
  return (
    <div>
      <TodoContextProvider>
        <Title title="todos" />
        <NewTodoForm />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
