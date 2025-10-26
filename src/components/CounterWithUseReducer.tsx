import {useReducer} from 'react'

type State = { count: number };
type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };


const reducer = (state: State,action:Action): State => {
    switch(action.type){
        case 'INCREMENT':
            return {count: state.count + 1};
        case 'DECREMENT':
            return {count: state.count - 1};
        default:
            return state;
    }

}

const Counter = () => {
    const [state,dispatch] = useReducer(reducer, {count:0});
    return (
        <div>
            <p>Contador: {state.count}</p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>Incrementar</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrementar</button>
        </div>
    )
}

export default Counter
