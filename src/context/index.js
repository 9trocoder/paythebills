import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

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

    removePlayerHandler = (idx) => {
        let newArray = this.state.players;
        newArray.splice(idx, 1);
        this.setState({players: newArray});
    }

    nextHandler = () => {
        const { players } = this.state;
        if(players.length < 2) {
            toast.error("You need more than one player", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 2000
            })
        } else {
            this.setState({
                stage: 2
             },()=> {
                 setTimeout(() => {
                    this.generatePayer()
                 }, 2000)
             })
        }
    }

    generatePayer = () => {
        const { players } = this.state;
        this.setState({
            result: players[Math.floor(Math.random() * players.length)]
        })
    }


    render() {
        
        return (
            <>
                <AppContext.Provider value={{
                    state: this.state,
                    addPlayer: this.addPlayerHandler,
                    removePlayer: this.removePlayerHandler,
                    next: this.nextHandler,
                    getNewPayer: this.generatePayer
                }}>
                    {this.props.children}
                </AppContext.Provider>
                <ToastContainer/>
            </>
        )
    }
}

export {
    AppContext,
    AppProvider
}