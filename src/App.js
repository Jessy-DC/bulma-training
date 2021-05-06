import './App.css';
import Navbar from "./components/navbar";

import 'bulma/css/bulma.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="section">
        <div className="container">
          <h1 className="title">
            Hello World
          </h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
