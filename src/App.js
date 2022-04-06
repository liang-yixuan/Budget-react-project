import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ExpenseItem></ExpenseItem>
        <p>吃了🍉🍉</p>
      </header>
    </div> 
  );
}

export default App;
