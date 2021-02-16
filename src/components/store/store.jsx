import React , { createContext, useState } from 'react';

export const StoreContext = createContext({});

const Store = ({ children }) => {
    const [state, setState] = useState({});
    const store = {state, setState}

    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    );

}

export default Store;