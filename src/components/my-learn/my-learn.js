import { Component } from 'react'; 

import './my-learn.css'

class MyLearn extends Component {


    constructor(props) {
        super(props); 

        this.state = {  
            sex: '---',
            amount: 33,
            position: '',
            color: false
        } 
    }

    changeSexW = () => {
        this.setState ({
            sex: 'woman'
        })
    }

    changeSexM = () => {
        this.setState ({
            sex: 'man'
        })
    }

    changeColor = () => {
        this.setState (({color}) => ({
            color: !color
        }))
    }


    nextPush = () => {
        console.log('ok');
        this.setState ({
            amount: this.state.amount + 1,
        })
    }


    commitInput = (e) => {
        this.setState ({
            position: e.target.value
        })
    }


    render() {
        const {name, surename} = this.props;
        const {sex, position, amount, color} = this.state;

        let classNames = "learn-btn";

        if (color) {
            classNames += ' color';
        }


        return (
            <div className="my-learn">
                <h1> My name is {name}, my surname is {surename}, my sex - {sex}, position- {position} </h1>
                <button onClick={this.changeSexM} className={classNames}>Man</button>
                <button onClick={this.changeSexW} className={classNames}>Woman</button>
                <button onClick={this.nextPush} className={classNames}>Push</button>
                <button onClick={this.changeColor} className={classNames}>ChangeColor</button>
                <span className="learn-span"> {amount}</span>
                <form>
                    <span>Введите должность </span>
                    <input type="text" onChange={this.commitInput}></input>
                </form>
                
            </div>
        )
    }
    
}

export default MyLearn;