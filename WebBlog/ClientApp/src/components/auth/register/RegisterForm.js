import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            isLoading: false,
            errors: {}
        }
    }

    onSubmitForm = (e) => {
        e.preventDefault();

        const { email } = this.state;
        let errors = {};
        if (email === '') errors.email = 'Enter valid email';
        const isValid = Object.keys(errors).length === 0;
        if (isValid) {
            this.setState({ isLoading: true });
            axios.post('/api/account/register',
                {
                    email: 'tereshko@gmail.ua'
                }).then(
                    (resp) => {
                        console.log('-----OK-----', resp);
                    },
                    (badResp) => {
                        console.log('----Bad---', badResp.response.data);
                    }
                );
        }
        else {
            this.setState({errors});
        }
        // setTimeout(()=>{
        //     console.log('---End---');
        //     this.setState({isLoading: false});
        // }, 2000);
        console.log('--Submit form--');
    }
    handleChange = (e) => {
        const {errors}= this.state;
        const {name, value}= e.target;
        if (!!errors[name]) {
            let clone_errors = Object.assign({}, errors);
            delete clone_errors[name];
            this.setState(
                {
                    [name]: value,
                    errors: clone_errors
                }
            )
        }
        else {
            this.setState(
                { [name]: value })
        }
    }
    render() {
        console.log('-----State----', this.state);
        const { isLoading, errors } = this.state;
        const { email } = this.state;
        return (
            <form onSubmit={this.onSubmitForm}>
                <h1 className="text-center">Register</h1>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                        className={classnames('form-control', {'is-invalid': !!errors.email})}
                        id="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <button type="submit"
                        className="btn btn-info btn-block"
                        disabled={isLoading}>Register</button>
                </div>
            </form>
        );
    }
}


export default RegisterForm;
