
import React, { Component } from 'react'

export class Second extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5 h1ll numberstitel">Whitelist Application</h1>
                <div className="form-group">
                    <label htmlFor="Experience">Experience</label>
                    <input type="text" className="form-control form-control14" name="Experience" onChange={inputChange('Experience')} value={values.Experience} />
                </div>
                <div className="form-group">
                    <label htmlFor="backstory">backstory</label>
                    <input type="text" className="form-control form-control14" name="backstory" onChange={inputChange('backstory')} value={values.backstory} />
                </div>
                <div className="form-group">
                    <label htmlFor="Combatlogging">Combatlogging</label>
                    <input type="text" className="form-control form-control14" name="Combatlogging" onChange={inputChange('Combatlogging')} value={values.Combatlogging} />
                </div>

                <br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger btnlogin" onClick={this.back}><i class="fas fa-arrow-left"></i></button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary btnlogin" onClick={this.continue}><i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Second