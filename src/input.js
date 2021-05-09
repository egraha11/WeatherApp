import React from 'react';


class InputComponent extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            country:"",
            city:"",
            zip:"",
        }


    }

    handleChange = (event) => {

        if(event.target.name == 'country'){
            this.setState(this.state.country = event.target.value)
        }
        else if(event.target.name == 'city'){
            this.setState(this.state.city = event.target.value)
        }
        else {
            this.setState(this.state.zip = event.target.value)
        }
    }


    submit = () => {

        const jsonObject = new Object();

        jsonObject.info = JSON.stringify(this.state);

        fetch('http://localhost:3000', {
            method:"POST", 
            body: JSON.stringify(jsonObject)
        }).then(response => response.json())
        .then(data => this.setState({response: data}))
        .catch((err) => console.log('error retrieving databse'))

        this.props.callParentState();
    }

    render(){

        return(
            <div>
            <p>Country</p>
            <input name = "country" type = "text" size = "20" onChange = {(e) => this.handleChange(e)}></input>
            <p>City</p>
            <input name = "city" type = "text" size = "20" onChange = {(e) => this.handleChange(e)}></input>
            <p>Zip</p>
            <input name = "zip" type = "text" size = "20" onChange = {(e) => this.handleChange(e)}></input>
            <button style = {{display:"block", marginTop:"10px"}} onClick = {this.submit}>Submit</button>
            </div>
        );

    }

}


export default InputComponent;