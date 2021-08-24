import React from 'react';
import { Link } from 'react-router-dom';



const Home = (props) => {

    return (
        <section className='hero'>
            <nav>
                <div id="header">
                    <h2>QUOTABLE</h2>
                    <p>Search and store your favorite quotes.</p>
                </div>
               <Link to='/search' className='searchLink'>Search</Link>
                <button className='btn' onClick={props.logout_func}>Logout</button>
            </nav>
            <br/><br/><br/><br/><br/>
            <div className='QuoteGenerator'>
                <div className='quote'>
                    <h2>{ props.quote.content ? props.quote.content : '' }</h2>
                    <small>-{ props.quote.author ? props.quote.author : '' }-</small>
                </div><br />
                <button className='btn' onClick={props.clickBtn}>Generate New Quote</button>
            </div><br/>
            <div id="footer">
                <footer>
                    <h3>QUOTABLE</h3>
                    <p>Created by Francis Adjei</p>
                </footer>
            </div>
        </section>
    )
}

export default Home;