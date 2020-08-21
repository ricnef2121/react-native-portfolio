import React, {useContext,useState} from 'react';
import ContextState from './index';

const WrapperContext = ({children}) => {
    //const context = useContext(ContextState);

    const [state, setstate] = useState({});
    return (
            <ContextState.Provider
            value={
                {globalState:state,
                setGlobal:setstate
            }}
            >
                {children}
            </ContextState.Provider>
    );
}

export default WrapperContext;
