import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Greeting from "./components/Greeting.jsx";
import Counter from "./components/Counter.jsx";
import LoginToggle from "./components/LoginToggle.jsx";
import ListExample from "./components/ListExample.jsx";
import FormExample from "./components/FormExample.jsx";
import TodoApp from "./components/TodoApp.jsx";


export default function App() {
  return (
    <div className="container">
      <Header />

      <div className="card">
        <h2>Day 2 - JSX & Props</h2>
        <p className="badge">Components + Props</p>
        <Greeting name="Ram" />
        <Greeting name="Avtar" />
      </div>

      <div className="card">
        <h2>Day 3 - State</h2>
        <p className="badge">useState + Events</p>
        <Counter />
      </div>

      <div className="card">
        <h2>Day 4 - Conditional Rendering</h2>
        <LoginToggle />
      </div>

      <div className="card">
        <h2>Day 5 - Lists & Keys</h2>
        <ListExample />
      </div>

      <div className="card">
        <h2>Day 6 - Forms & Controlled Inputs</h2>
        <FormExample />
      </div>

      <div className="card">
        <h2>Day 7 - Mini Project: To-Do App</h2>
        <TodoApp />
      </div>

      <Footer />
    </div>
  );
}
