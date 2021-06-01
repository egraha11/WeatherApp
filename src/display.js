import React from 'react';


class DisplayComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            weatherInfo : props.info,
        }
    }

    render(){

        const newDate = new Date();
        const month = newDate.getMonth() + 1;
        const dayOfMonth = newDate.getUTCDate();
        const year = newDate.getUTCFullYear();


        return(
            <div>
            {Object.keys(this.state.weatherInfo).map((day) => {
                <ul>
                    <li>{dayOfMonth}/{month}/{year}</li>
                    {dayOfMonth = dayOfMonth + 1}
                    <li>high temp: {day.max_temp}</li>
                    <li>low temp: {day.min_temp}</li>
                    <li>average temp: {day.temp}</li>
                    <li>weather condition: {day.main}</li>
                    <li>humidity: {day.humidity}</li>
                </ul>
            })}
            </div>
        );
    }

}

export default DisplayComponent;