import React, { Component } from 'react';

const Weather = props => (
    <div>
        <div>
            <p>
                Location: {props.city}, {props.country}
            </p>
            <p>
                Temperature: {props.temperature}
            </p>
            <p>
                Humidity: {props.humidity}
            </p>
            <p>
                Description: {props.description}
            </p>
        </div>
    </div>
)
export default Weather