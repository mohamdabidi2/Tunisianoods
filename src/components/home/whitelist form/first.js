import React, { Component } from 'react'

export class First extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5 h1ll numberstitel">Whitelist Application</h1>
                <div className="form-group">
                    <label htmlFor="Fullname">Full Name :</label>
                    <input type="text" className="form-control form-control14 " name="Fullname" onChange={inputChange('Fullname')} value={values.Fullname} />
                </div>
                <div className="form-group">
                    <label htmlFor="DiscordId">DiscordId</label>
                    <input type="text" className="form-control form-control14" name="DiscordId" onChange={inputChange('DiscordId')} value={values.DiscordId} />
                </div>
                <div className="form-group">
                    <label htmlFor="JoinTH">JoinTH</label>
                    <input type="text" className="form-control form-control14" name="JoinTH" onChange={inputChange('JoinTH')} value={values.JoinTH} />
                </div>
                <div className="form-group">
                    <label htmlFor="Age">Age</label>
                    <input type="text" className="form-control form-control14" name="Age" onChange={inputChange('Age')} value={values.Age} />
                </div>

                <br />

                <div className="text-right">
                    <button className="btn btn-primary btnlogin" onClick={this.continue}><i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
        )
    }
}

export default First