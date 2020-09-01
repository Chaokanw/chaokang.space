import React from 'react';
import Construction from './Construction'
import Nav from './Nav'
import Preview from './Preview';


let previewList = [
    {"title": "GraphiPy - A Universal Social Data Extractor",
     "link": "/projects/GraphiPy",
     "src": "/images/demos/GraphiPy.png"},

    {"title": "Pixalsso - A Pixelate World", 
    "link": "/projects/Pixalsso",
    "src": "/images/demos/Pixalsso.png"},

    {"title": "Weather Search Web Application",
     "link": "/projects/WeatherApp",
     "src": "/images/demos/WeatherApp.png"},

     {"title": "Gomoku - Five in a Row",
     "link": "/projects/Gomoku",
     "src": "/images/demos/Gomoku.png"}
]

class ProjectsPage extends React.Component {

    render() {
        
        return ( 
            <div>
                <Nav></Nav>
                <h1>Projects</h1> 
                <p className = "heading" >

                </p>
                {previewList.map(
                    (preview, i) =>
                    <Preview
                        key = {i}
                        title = {preview.title}
                        link = {preview.link}
                        src = {preview.src}
                    >
                    </Preview>
                )} 


  
            {/* <Construction>

            </Construction> */}
                
            </div>
        );
    }
}


export default ProjectsPage;