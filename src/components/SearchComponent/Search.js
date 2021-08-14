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
               <button className='btn' onClick={props.clickBtn}>Search</button>
            </div>
            <div className='QuoteGenerator'>
                <div className='quote'>
                    <h2>{ props.current_quote.content ? props.current_quote.content : '' }</h2>
                    <small>-{ props.current_quote.author ? props.current_quote.author : '' }-</small>
                </div><br />
                <button className='btn' onClick={props.next_quote}>Next Quote</button>
            </div>
            <div id="footer">
                <footer>
                    <h3>QUOTABLE</h3>
                    <p>Created by Francis Adjei</p>
                </footer>
            </div>
        </section>
    )
}

export default Search;