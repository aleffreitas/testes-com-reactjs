import Header from './Header';
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Header
        name="{aleffreitas}"
        links={["Sobre", "Portfólio", "Contato"]}>
      </Header>

      <Counter
        count={0}>
      </Counter>

      
    </div>
  );
}

export default App;
