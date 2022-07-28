import React, { createContext, useState } from "react";

const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

function ApiDetails({ children }) {
    const [apiDetails, setApiDetails] = useState({
        ApiBaseURL: "John Doe"
    });

    return (
        <UserContext.Provider value={apiDetails}>
            <UserDispatchContext.Provider value={setApiDetails}>
                {children}
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    );
}

export { ApiDetails, UserContext, UserDispatchContext };