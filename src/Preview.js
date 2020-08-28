import React from 'react';
import './preview.css';
import {Link} from 'react-router-dom'


class Preview extends React.Component {
    render() {
        // console.log(this.props)
        return ( 
                <div className="preview-div">
                    <img src={this.props.src} alt={this.props.title}></img>
                    <div className="overlay">
                        <Link to ={this.props.link}>
                            <div className="title"> {this.props.title}
                            </div>  
                        </Link>
                    </div>
                </div>
           
        )
    }

}

export default Preview