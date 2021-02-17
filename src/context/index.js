import React, { Component } from 'react';

const AppContext = React.createContext();

class AppProvider extends Component {
    state = {
        stage: 1,
        players: [],
        result: ''
    }


    render() {
        
        return (
            <AppContext.Provider value={{
                state: this.state
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export {
    AppContext,
    AppProvider
}