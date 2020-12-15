
import React, { Component } from 'react';
import Confirm from './whitelist form/confirmation';
import First from './whitelist form/first';
import Second from './whitelist form/second ';
// import AccountSetup from './AccountSetup';
// import SocialProfiles from './SocialProfiles';
// import Confirm from './Confirm';
// import Success from './Success';

export class Form extends Component {
    state = {
        step: 1,
        Fullname: '',
        DiscordId: '',
        JoinTH: '',
        Age: '',
        Experience: '',
        backstory: '',
        Combatlogging: ''

    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    render() {
        const { step } = this.state;
        const { Fullname, DiscordId, JoinTH, Age, Experience, backstory, Combatlogging } = this.state;
        const values = {  Fullname, DiscordId, JoinTH, Age, Experience, backstory, Combatlogging };

        switch (step) {
            case 1:
                return (      <First
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
              
                );
            case 2:
                return (
                    <Second
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange={this.inputChange}
                    values={values}
                />
                );
            case 3:
                return (
                    <Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange={this.inputChange}
                    values={values}
                />
                    
                );
            case 4:
                return (
                  <div></div>
                );
        }
    }
}

export default Form