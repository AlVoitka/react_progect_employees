import { Component } from 'react'; 

import './my-learn.css'

class MyLearn extends Component {


    constructor(props) {
        super(props); 

        this.state = {  
            sex: 'man',
            amount: 33
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


    nextPush = () => {
        this.setState ({
            amount: this.state.amount + 1
        })
    }


    render() {
        const {name, surename} = this.props;
        return (
            <div className="my-learn">
                <h1> My name is {name}, my surname is {surename}, my sex - {this.state.sex} </h1>
                <button onClick={this.changeSexM} className="learn-btn">Man</button>
                <button onClick={this.changeSexW} className="learn-btn">Woman</button>
                <button onClick={this.nextPush} className="learn-btn">Push</button>
                <span className="learn-span"> {this.state.amount}</span>
                
            </div>
        )
    }
    
}

export default MyLearn;