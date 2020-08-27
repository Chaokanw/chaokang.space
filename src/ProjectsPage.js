import React from 'react';
import Construction from './Construction'
import Nav from './Nav'
import Preview from './Preview';


let previewList = [
    {"title": "GraphiPy - A Universal Social Data Extractor",
     "name": "GraphiPy",
     "link": "/projects/GraphiPy",
     "src": "/images/demos/GraphiPy.png"},

    {"title": "Pixalsso - A Pixelate World", 
    "name": "Pixalsso",
    "link": "/projects/Pixalsso",
    "src": "/images/demos/pixalsso.png"},

    {"title": "Weather Search Web Application",
     "name": "Weather App",
     "link": "/projects/WeatherApp",
     "src": "/images/demos/weatherApp.png"},
]

class ProjectsPage extends React.Component {

    render() {
        
        return ( 
            <div>
                <Nav></Nav>
                <h1>Projects</h1> 
                {/* <p className = "heading" >
                
                </p> */}

                {previewList.map(
                    (preview, i) =>
                    <Preview
                        key = {i}
                        title = {preview.title}
                        link = {preview.link}
                        src = {preview.src}
                        name = {preview.name}
                    >
                    </Preview>
                )} 


                {/* <Preview>

                </Preview>

                <Preview>
                    
                </Preview>

                <Preview>
                    
                </Preview> */}
            {/* <Construction>

            </Construction> */}
                
            </div>
        );
    }
}

export default ProjectsPage;