import { useReducer } from 'react';

// Define the state type
type State = {
  count: number;
  step: number;
};

// Define the action types
type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' }
  | { type: 'SET_STEP'; payload: number };

// Reducer function with typed state and action
const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + state.step };
    case 'DECREMENT':
      return { ...state, count: state.count - state.step };
    case 'RESET':
      return { ...state, count: 0 };
    case 'SET_STEP':
      return { ...state, step: action.payload };
    default:
      throw new Error(`Unhandled action: ${action}`);
  }
};

const Counter = () => {
  // Initial state object for the useReducer
  const initialState: State = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      <input
        type="number"
        value={state.step}
        onChange={(e) =>
          dispatch({ type: 'SET_STEP', payload: Number(e.target.value) })
        }
        placeholder="Step"
      />
    </div>
  );
};

export default Counter;
