import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function Counter () {
  const count = useSelector(state => state.count);
  const countUp = { type: 'COUNT_UP' };
  const dispatch = useDispatch();

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
