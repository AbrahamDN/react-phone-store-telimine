import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Default extends Component {
    render() {
        return (
            <div className="center-xy">
                <h1>Wrong place buddy.</h1>
                <br />
                <h3>Error 404 - Page not found!</h3>
                <p><b>{this.props.location.pathname}</b> is not a legit path name.</p>
                <br />
                <Link to="/">
                    <button>
                        Return to Homepage
                    </button>
                </Link>
            </div>
        );
    }
}


export default Default;