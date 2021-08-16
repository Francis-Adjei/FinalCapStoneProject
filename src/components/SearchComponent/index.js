import React, { Component } from 'react'
import Search from './Search';
import { connect } from 'react-redux'
import { serverGetTagQuotes } from './../../actions/SearchAction';

class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: 'technology',
            current_quote: '',
            current_count: 0
        }

        this.clickBtn = this.clickBtn.bind(this);
        this.doLogout = this.doLogout.bind(this);
        this.nextQuote = this.nextQuote.bind(this);
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.home !== this.props.home) {
            // console.log(this.props.home);

            if (this.props.home.data.count > 0) {
                this.setState({
                    current_quote: this.props.home.data.results[0],
                    current_count: 0
                });
                // console.log(this.props.data);
            }
        }
    }

    clickBtn = () => {
        // console.log(this.state.search);
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

    nextQuote = () => {
        if (this.props.home.data.results) {
            let counter = this.state.current_count;
            let new_count = counter + 1;
            if (new_count < this.props.home.data.results.length) {
                this.setState({ current_quote: this.props.home.data.results[new_count], current_count: new_count });
            }
        }
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
                next_quote={this.nextQuote}
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