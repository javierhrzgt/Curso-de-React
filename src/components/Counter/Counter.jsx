import {useReducer} from 'react'

const reducer = (state,action) => {
    switch(action.type){
        case 'INCREMENT':
            return {count: state.count + 1};
        case 'DECREMENT':
            return {count: state.count - 1};
        default:
            return state;
    }

}

export default function Counter() {
    const [state,dispatch] = useReducer(reducer, {count:0});

    return (
        <div>
            <p>Contador: {state.count}</p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>Incrementar</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrementar</button>
        </div>
    )
}
