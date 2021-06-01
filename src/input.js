import React from 'react';
import DisplayComponent from './display';


class InputComponent extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            country:"us",
            city:"",
            days:"1", 
            weatherInfo: null
        }


    }

    handleChange = (event) => {

        if(event.target.name === 'country'){
            this.setState({country: event.target.value})
        }
        else if(event.target.name === 'city'){
            this.setState({city:this.target.value})
        }
        else if(event.target.name === 'days'){
            this.setState({days:event.target.value})
        }

        console.log(this.state)
    }


    submit = () => {

        const url = "http:localhost:8080/weatherApp?days="+ this.state.days + "&city=" + 
        this.state.city + "&country=" + this.state.country;  

        fetch(url)
        .then(response => { if(response.status >= 200 && response.status <=299)
            {response.json()} else{
                throw Error(response.statusText)
            }})
        .then(data => this.setState(this.state.weatherInfo=data))
        .catch((err) => console.log(err))

        this.props.callParentState();
    }

    render(){

        return(
            <div>
            <p>Days</p>
            <select name = "days" onChange = {(e) => this.handleChange(e)}>
                <option value = "1">1</option>
                <option value = "5">5</option>
            </select>
            <p>Country</p>
            <select name = "country" onChange = {(e) => this.handleChange(e)}>
                <option value = "us">United States</option>
                <option value = "uk">United Kingdom</option>
            </select>
            <p>City</p>
            <input name = "city" type = "text" size = "20" onChange = {(e) => this.handleChange(e)}></input>
            <button style = {{display:"block", marginTop:"10px"}} onClick = {this.submit}>Submit</button>
            {this.state.weatherInfo != null &&
                <DisplayComponent info = {this.state.weatherInfo}/>
            }
            </div>
        );

    }

}


export default InputComponent;