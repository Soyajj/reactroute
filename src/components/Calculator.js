import React, { Component } from 'react';
import '../App.css';

export class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            nextNum: '',
            number: '',
        }
    }
     
    number = (number) => {
        this.setState({
            number: this.state.number + number.toString(),
        })
    }


    add = () => {
        this.setState({
            nextNum: this.state.number,
            number: '',
            value: 1,
        }) 
    }
    mul = () => {
        this.setState({
            nextNum: this.state.number,
            number: '',
            value: 2,
        }) 
    }
    sub = () => {
        this.setState({
            nextNum: this.state.number,
            number: '',
            value: 3,
        }) 
    }
    divide = () => {
        this.setState({
            nextNum: this.state.number,
            number: '',
            value: 4,
        }) 
    }

    result = () => {
        if(this.state.value === 1){
        this.setState({
            number: parseInt(this.state.nextNum) + parseInt(this.state.number),
            nextNum: ''
        })}
        else if(this.state.value === 2){
            this.setState({
                number: parseInt(this.state.nextNum) * parseInt(this.state.number),
                nextNum: ''
            })}
        else if(this.state.value === 3){
            this.setState({
                number: parseInt(this.state.nextNum) - parseInt(this.state.number),
                nextNum: ''
            })}
        else if(this.state.value === 4){
                this.setState({
                    number: parseInt(this.state.nextNum) / parseInt(this.state.number),
                    nextNum: ''
            })}
     }


     clear = () => {
         this.setState({
             number:'',
             nextNum: '',
             value: ''
         })
     }

     handleChange = (e) => {
         this.setState({
             number: e.target.value
         })
     }
    render() {
        return (
            <div className = "calculator">
                <h1>Calculator</h1>
                <div>
                    <input type ="number" onChange={this.handleChange} id="name" value={this.state.number}
                        autocomplete="off"
                    />
                </div>
                <div>
                    <button onClick={() => this.number(1)}>1</button>
                    <button onClick={() => this.number(2)}>2</button>
                    <button onClick={() => this.number(3)}>3</button>
                    <button onClick ={this.mul}>*</button>
                </div>
                <div>
                    <button onClick={() => this.number(4)}>4</button>
                    <button onClick={() => this.number(5)}>5</button>
                    <button onClick={() => this.number(6)}>6</button>
                    <button onClick={this.divide}>/</button>
                </div>
                <div>
                    <button onClick={() => this.number(7)}>7</button>
                    <button onClick={() => this.number(8)}>8</button>
                    <button onClick={() => this.number(9)}>9</button>
                    <button onClick={this.clear}>C</button>
                </div>
                <div>
                    <button onClick={this.add}>+</button>
                    <button onClick={() => this.number(0)}>0</button>
                    <button onClick={this.sub}>-</button>
                    <button onClick={this.result}>=</button>
                </div>
            </div>
        )
    }
}

export default MainPage