import React, { Component } from 'react'
import Home from './Home';
import { connect } from 'react-redux'
import { serverGetQuotes } from './../../actions/HomeAction';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.clickBtn = this.clickBtn.bind(this);
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.home !== this.props.home) {
            console.log(this.props.home);
        }
    }

    clickBtn = () => {
        this.props.serverGetQuotes();
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
            <Home 
            {...this.state} 
            handleChange={(event) => this.handleChange(event.target.value)} 
            clickBtn={this.clickBtn} 
            quote={this.props.home.data}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        home: state.home
    }
}

export default connect(mapStateToProps, { serverGetQuotes })(HomeContainer)