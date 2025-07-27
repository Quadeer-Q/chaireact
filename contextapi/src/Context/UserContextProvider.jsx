import React from "react";
import userContext  from "./userContext";

const UserContextProvider= ({children})=>{
    const   [user,setUser]= React.useState(null)
    return (                                        
        <>
            <userContext.Provider value={{user,setUser}}>
                {children}
            </userContext.Provider>

        </>
    )
}
export default UserContextProvider;
// Wraps the children inside <userContext.Provider>.

// Passes a “value object” { user, setUser } down.

// React’s Context system automatically gives all children access to that value if they call useContext(userContext).