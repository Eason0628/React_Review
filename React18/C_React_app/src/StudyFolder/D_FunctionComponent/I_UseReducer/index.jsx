import { useReducer } from "react"

function App () {
    const [state, disparch] = useReducer((state, action) => {
        if (action == 'add') {
            return state + 1
        } else if (action == 'sub') {
            return state - 1
        } else {
            return 0
        }
    }, 0)
    return <>
        {state}
        <button onClick={() => disparch('add')}>增加</button>
        <button onClick={() => disparch('sub')}>减少</button>
    </>
}
export default App;