import { useContext } from "react";
import { CountContext } from "./CountProvider";
import './Counter.css'

function Counter(props){
    console.log(props);

    const [countState, setCountState] = useContext(CountContext);

    return (
        <h2 className="Counter">
            Count: {countState}
        </h2>
    );
};


export default Counter;