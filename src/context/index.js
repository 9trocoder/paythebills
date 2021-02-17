import React, { Component } from 'react';

const AppContext = React.createContext();

class AppProvider extends Component {
    state = {
        stage: 1,
        players: [],
        result: ''
    }

    addPlayerHandler = (name) => {
        this.setState((prevState) => ({
            players: [
                ...prevState.players,
                name
            ]
        }))
    }


    render() {
        
        return (
            <AppContext.Provider value={{
                state: this.state,
                addPlayer: this.addPlayerHandler
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