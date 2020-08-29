import React from 'react';
import Construction from './Construction'
import Nav from './Nav'
import ErrorPage from './ErrorPage';
import {projectList} from './Demos'




let projectMap = new Map();
let project
for(project of projectList){
    projectMap.set(project.key.toLowerCase(), project)
}




function handleClick(e){
    // e.preventDefault();
    // console.log('The link was clicked.');
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.alt);
    var modal = document.getElementById("myModal");
    var img = e.currentTarget;
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  }


function handleClose(e){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

class DemoPage extends React.Component {
    
    render() {
        let title = this.props.match.params.title;
        // console.log(this.props.match.params.title)
        let project = projectMap.get(title.toLowerCase())
        
        // project = project === undefined ? "Error" : project
        if( project === undefined ){
            return (
                <div>
                    <ErrorPage></ErrorPage>
                </div>
            );
        }
        else{
            let descriptions = project.descriptions;
            let demos = project.demos;
            return ( 
                <div>
                    
                    <Nav></Nav>

                    <h1>{project.title}</h1> 
                    
                    <p className="heading" dangerouslySetInnerHTML={{ __html: project.subtitle }}>
                        
                    </p>

                    {descriptions.map(
                        (description, i)=>
                        <p key = {i} dangerouslySetInnerHTML={{ __html: description }}>
                        
                        </p>
                    )}
                    
                    

                    {project.link === undefined? "" : <p>
                        Project Link  <a  href={project.link} target="new" >
                            <i className="fas fa-link"></i> <span className="highlight blue">Click me!</span>
                            </a>
                    </p>}

                    {project.video === undefined? "" : 
                        <div className="video-div">
                            <iframe src={project.video} allow="fullscreen" >    
                            </iframe>
                            <div className="description">Video Demonstration</div>
                        </div>
                    }
                    {console.log(demos)}
                    
                    {demos.map(
                        (demo, i) =>
                        <div className="demo-div" key = {i} >
                            <img 
                                className="demo-img" 
                                onClick={handleClick} 
                                alt={demo.description} 
                                src={demo.src}
                            >
                            </img>
                        
                            <div className="description">{demo.description}</div>
                        
                        </div>
                    )}


                    <div id="myModal" onClick={handleClose} className="modal">
                        <span className="close">&times;</span>
                        <img className="modal-content" id="img01"></img>
                        <div id="caption"></div>
                    </div>
                </div>

                
            );
        }
    }
}

export default DemoPage;