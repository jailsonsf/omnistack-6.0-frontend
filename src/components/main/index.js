import React, { Component } from 'react';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import './styles.css';

export default class Main extends Component {
    state = {
        newBox: '',
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const response = await api.post('boxes', {
            title: this.state.newBox,
        });

        console.log(response.data);
    };

    handleInputChange = (event) => {
        this.setState({newBox: event.target.value})
    };

    render() {
        return (
            <div id="main-container">
                <form onSubmit={this.handleSubmit}>
                    <img src={logo} alt="rocketbox" />
                    <input 
                        placeholder="Criar box" 
                        value={this.state.newBox}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Criar</button>
                </form>
            </div>
        );
    };
}