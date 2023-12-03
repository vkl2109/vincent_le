/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const ScrollContext = createContext();

const ScrollContextProvider = ({ children }) => {
    const [ scrollToWork, setScrollToWork ] = useState(() => () => console.log('initial'))

    return(
        <ScrollContext.Provider
            value={{
                scrollToWork,
                setScrollToWork
            }}
            >
            { children }
        </ScrollContext.Provider>
    )
}

export {
    ScrollContext,
    ScrollContextProvider
};