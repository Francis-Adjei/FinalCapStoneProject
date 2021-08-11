import React, { Component } from 'react'
import Search from './Search';
import { connect } from 'react-redux'
import { serverGetTagQuotes } from './../../actions/SearchAction';

class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }

        this.clickBtn = this.clickBtn.bind(this);
        this.doLogout = this.doLogout.bind(this);
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.home !== this.props.home) {
            console.log(this.props.home);
        }
    }

    clickBtn = () => {
        console.log(this.state.search);
        this.props.serverGetTagQuotes(this.state.search);
    }

    handleChange = (data) => {
        this.setState(prevState => ({
            ...prevState,    // keep all other key-value pairs
            [data.field]: data.value     // update the value of specific key
        }));
    }

    doLogout = () => {
        window.localStorage.clear();
        this.props.history.push("/");
    }

    render() {
        return (
            <Search
                {...this.state}
                handleChange={(event) => this.handleChange(event.target.value)}
                clickBtn={this.clickBtn}
                quote={this.props.home.data}
                logout_func={this.doLogout}
                handleChange={this.handleChange}
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

export default connect(mapStateToProps, { serverGetTagQuotes })(SearchContainer)