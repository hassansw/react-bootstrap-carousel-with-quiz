import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Quiz.css';

class Quiz extends React.Component {

    render() {
        const { id } = this.props
        return (
            <div className="quiz-container">
                <div className="container">
                    <h2>Tomorrow I want some:</h2>
                    <ul>
                        <li>
                            <input type="radio" id={'f-option' + id} name="selector" />
                            <label htmlFor={'f-option' + id}>Pizza</label>
                            <div className="check"></div>
                        </li>
                        <li>
                            <input type="radio" id={'s-option' + id} name="selector" />
                            <label htmlFor={'s-option' + id}>Bacon</label>
                            <div className="check">
                                <div className="inside"></div>
                            </div>
                        </li>

                        <li>
                            <input type="radio" id={'t-option' + id} name="selector" />
                            <label htmlFor={'t-option' + id}>Cats</label>
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


Quiz.defaultProps = {
    id: 0
}

Quiz.propTypes = {
    id: PropTypes.number
};

export default Quiz;