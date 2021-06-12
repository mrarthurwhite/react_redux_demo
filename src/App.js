import './App.css';
import { useSelector } from 'react-redux';

function Counter () {
  const count = useSelector(state => state.count)

  return (
          <div>
            <p>Count: {count}</p>
          </div>
        );
}

function App() {
  return (
    <Counter />
  );
}

export default App;
