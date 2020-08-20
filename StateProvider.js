//setup data layer
//track user information across pages for cart items.
import React, {createContext, useContext, useReducer} from 'react';

//THIS IS A DATA LAYER
export const StateContext=createContext({});

//BUILD A PROVIDER
export const StateProvider=({reducer, initialState, children })=>(
    <StateContext.Provider  value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue=()=>useContext(StateContext);