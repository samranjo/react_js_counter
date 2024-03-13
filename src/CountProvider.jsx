import { createContext, useState } from "react";

export const CountContext = createContext();

function CountProvider(props){
    const [countState, setCountState] = useState(0);
    return (
        <CountContext.Provider value = {[countState, setCountState]}>
            {props.children}
        </CountContext.Provider>
    );
};

export default CountProvider;