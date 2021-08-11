import React from 'react';
import { Link } from 'react-router-dom';

const Search = (props) => {

    return (
        <section className='hero'>
            <nav>
                <div id="header">
                    <h2>QUOTABLE</h2>
                    <p>Search and store your favorite quotes.</p>
                </div>
               <a href='/home' className='searchLink'>Home</a>
                <button className='btn' onClick={props.logout_func}>Logout</button>
            </nav>
            <br />
            <div className="search__container">
               <input className="search__input" type="text" placeholder="Search" onChange={(event) => props.handleChange({"field": "search", "value": event.target.value})} />
            </div>
            <br />
            <div className='QuoteGenerator'>
                <div className='quote'>
                    <h2>{ props.quote.content ? props.quote.content : '' }</h2>
                    <small>-{ props.quote.author ? props.quote.author : '' }-</small>
                </div><br />
                <button className='btn' onClick={props.clickBtn}>Generate New Quote</button>
            </div>
            <div id="footer">
                <footer>
                    <h3>QUOTABLE</h3>
                    <p>Created by Francis Adjei</p>
                    <span>
                        <a href="https://github.com/Francis-Adjei/FinalCapStoneProject"><i className="fa fa-github" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com/in/adjei-francis-91a40016b/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                    </span>
                </footer>
            </div>
        </section>
    )
}

export default Search;