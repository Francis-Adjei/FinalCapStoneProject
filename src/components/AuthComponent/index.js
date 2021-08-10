import React, { Component } from 'react'
import Login from './Login'
import { connect } from 'react-redux'
import { serverLogin } from './../../actions/AuthAction';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'shattawale@gmail.com',
            password: 'w12345'
        }

        this.doLogin = this.doLogin.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    doLogin = () => {
        let obj = {
            password: this.state.password,
            email: this.state.email
        }

        // this.props.serverLoad("true");

        // this.props.serverLogin(obj)

        if (this.state.email === 'shattawale@gmail.com' && this.state.password === 'w12345') {
            window.localStorage.setItem('user', JSON.stringify(obj));
            this.props.history.push("/home");
            return;

        } else {

            alert("Wrong email and password");
            return;
        }
    }

    handleChange = (data) => {
        this.setState(prevState => ({
            correspondence_details: {                   // object that we want to update
                ...prevState,    // keep all other key-value pairs
                [data.field]: data.value     // update the value of specific key
            }
        }));
    }

    render() {
        return (
            <Login {...this.state} handleChange={(event) => this.handleChange(event.target.value)} login_func={this.doLogin} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { serverLogin })(LoginContainer)