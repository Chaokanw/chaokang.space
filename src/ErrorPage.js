import React from 'react';
import Nav from './Nav'
import { Link } from 'react-router-dom';

class ErrorPage extends React.Component {
    render() {
        return ( 
            <div>
                 <Nav></Nav>
                 <h1>
                    <i className="fas fa-surprise"></i>
                    <i className="far fa-surprise"></i>
                    <i className="fas fa-surprise"></i>
                    <i className="far fa-surprise"></i>
                    <i className="fas fa-surprise"></i>
                    <i className="far fa-surprise"></i>
                    <i className="fas fa-surprise"></i>
                    <i className="far fa-surprise"></i>
                </h1> 
                    
                    <p className="heading" >
                        Oops! There is an error.
                    </p>
                    <p>
                        Back to the home page: <Link to='/' className="highlight blue">Click me!</Link>
                    </p>

            </div>
        )
    }

}

export default ErrorPage