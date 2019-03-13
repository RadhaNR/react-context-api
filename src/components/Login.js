import React, { Component } from 'react';
import { C2 } from './C2';

export const LoginContext = React.createContext();

export class Login extends Component {
    render() {
        return (
            <div>
                <LoginContext.Provider value="Radha">
                  <C2 />
                </LoginContext.Provider>
            </div>
        );
    }
}
