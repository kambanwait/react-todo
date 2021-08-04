import Todo from './components/Todo'

function App() {
  return (
    <div>

      <h1>My Todos</h1>

      <Todo title="A new Todo using Props" />
      <Todo title="Another Todo" />
      <Todo title="Do stuff" />

    </div>
  );
}

export default App;

