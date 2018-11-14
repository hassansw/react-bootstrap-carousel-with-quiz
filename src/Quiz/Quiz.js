import React, { Component } from 'react';
import './Quiz.css';

class Quiz extends Component {
    render() {
        return (
            <div className="quiz-container">
                <div className="container">
                    <h2>Tomorrow I want some:</h2>
                    <ul>
                        <li>
                            <input type="radio" id="f-option" name="selector" />
                            <label htmlFor="f-option">Pizza</label>
                            <div className="check"></div>
                        </li>
                        <li>
                            <input type="radio" id="s-option" name="selector" />
                            <label htmlFor="s-option">Bacon</label>
                            <div className="check">
                                <div className="inside"></div>
                            </div>
                        </li>

                        <li>
                            <input type="radio" id="t-option" name="selector" />
                            <label htmlFor="t-option">Cats</label>
                            <div className="check">
                                <div className="inside"></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="signature">
                    
                </div>
            </div>
        );
    }
}

export default Quiz;