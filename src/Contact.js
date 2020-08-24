import React from 'react';


let contactInfo = {
    "linkedin": "https://www.linkedin.com/in/chaokang-wu/",
    "github": "https://github.com/Chaokanw",
    "facebook":"https://www.facebook.com/profile.php?id=100004086908396",
    "email":"chaokang.wu@hotmail.com"
}

class Contact extends React.Component {
    render() {
        return ( 
            <div id="contact-div" target="_blank">
                <a href={contactInfo.linkedin} target="new">
                    <i className="fab fa-linkedin"></i>
                </a>

                <a href={contactInfo.github} target="new">
                    <i className="fab fa-github-square"></i>  
                </a>

                <a href={contactInfo.facebook} target="new">
                    <i className="fab fa-facebook-square"></i>
                </a>

                <a href={"mailto:"+contactInfo.email} target="new">
                    <i className="fas fa-envelope-square"></i>
                </a>
            </div>
        )
    }

}

export default Contact