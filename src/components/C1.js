import React, { Component } from 'react';
import { Context } from '../App';
import { LoginContext } from './Login';
//const Context = React.createContext();

export class C1 extends Component {
    render() {
        return (
            <div>
                <Context.Consumer>
                    {value =>
                        value
                    }
                </Context.Consumer>
                <LoginContext.Consumer>
                    {value =>
                        value
                    }
                </LoginContext.Consumer>
            </div>
        );
    }
}
