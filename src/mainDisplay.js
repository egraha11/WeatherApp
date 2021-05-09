import React from 'react';
import './MainDisplay.css';
import menu_image from './images/menu_image.png';
import InputComponent from './input';
import DisplayComponent from './display';



class MainDisplay extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            show_input : false
        }

        this.menuClick = this.menuClick.bind(this);
    }

    menuClick(){
        this.setState(prevState => ({show_input: !prevState.show_input}));
    }

    hideInput = () =>
    {

    }

    render(){

            //<div className = "mainRender">

            if(this.state.show_input != false){
                return(
                <div className = "mainRender">
                <div className = "sideInput"><InputComponent callParentState = {this.menuClick}/></div>
                <DisplayComponent />
                </div>)
            }
            else{
                return(
                <div className = "mainRender">
                <img src = {menu_image} alt = "" style = {{height:"50px", width:"50px"}} onClick = {this.menuClick}/>
                <DisplayComponent />
                </div>)
            }
    }

}



export default MainDisplay;