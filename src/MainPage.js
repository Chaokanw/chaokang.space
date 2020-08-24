import React from 'react';
import ContactDiv from './ContactDiv'




class MainPage extends React.Component {
    render() {
        return ( 
            <div>
                <h1> Hello, I 'm <span className="highlight yellow">Chaokang</span>.</h1> 
                <p className = "heading" >
                    You can also call me Vincent. 
                    </p>

                <p>
                    I'm a graduate student at the&nbsp;
                    <a id="USC" className="highlight" href="https://www.usc.edu/" target="new">USC</a>, 
                    majoring in computer science. Currently, I'm actively seeking a 
                    full-time <span className="highlight pink">software&nbsp;engineering</span> position.
                </p>

                <p>
                    You can find some of my project demos <a href="#" className="highlight blue">here</a>:
                </p>

                <p>
                    Outside of programming, I also enjoy travel, skiing, editing videos, and taking photos  
                </p>


                <p>
                    Please feel free to contact me in the following ways:
                </p>
                <ContactDiv>
                </ContactDiv>


            </div>
        )
    }

}

export default MainPage