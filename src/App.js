import "./App.css";
import Children from "./components/CenteredCard";
import "./components/CenteredCard/style.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Children
          title="JS"
          string="JavaScript é uma linguagem de programação"
        />
        <Children
          title="HTML"
          string="HTML é uma linguagem de marcação de texto"
        />
        <Children
          title="CSS"
          string="CSS servi para estilizar os elementos da sua página"
        />
      </div>
    </div>
  );
}

export default App;
