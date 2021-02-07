import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ component: Component, ...rest }) {
    const isLogged = useSelector(state => state.isLogged);
    return (
        <Route {...rest} render={
                (props) => {
                    if(isLogged){
                        return <Component {...props}/>
                    }
                    else {
                        return <Redirect to={
                            {
                                pathname: "/error",
                                state: {
                                    from: props.location
                                }
                            }
                        } />
                    }
                }
            }  
        />
            
    )
}
