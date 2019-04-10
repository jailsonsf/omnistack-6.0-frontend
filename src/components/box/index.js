import React, { Component } from 'react';

import { MdInsertDriveFile } from 'react-icons/md';

// import api from '../../services/api';

import logo from '../../assets/logo.svg';
import './styles.css';

export default class Box extends Component {
    render() {
        return (
            <div id="box-container">
                <header>
                    <img src={logo} alt=""/>
                    <h1>Rocket</h1>
                </header>

                <ul>
                    <li>
                        <a className="fileInfo" href="">
                            <MdInsertDriveFile size={24} color="#a5cfff" />
                            <strong>Desafio.pdf</strong>
                        </a>
                        <span>Há 3 min</span>
                    </li>
                    <li>
                        <a className="fileInfo" href="">
                            <MdInsertDriveFile size={24} color="#a5cfff" />
                            <strong>Desafio.pdf</strong>
                        </a>
                        <span>Há 3 min</span>
                    </li>
                </ul>
            </div>
        );
    };
}