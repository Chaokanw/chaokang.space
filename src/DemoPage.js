import React from 'react';
import Construction from './Construction'
import Nav from './Nav'
import ErrorPage from './ErrorPage';

// let name ="Error";


let graphiPy = {
    key: "GraphiPy",
    title: "GraphiPy",
    link: "https://pypi.org/project/GraphiPy/",
    subtitle: "<a href='https://pypi.org/project/GraphiPy/' target='new' class ='yellow highlight'>GraphiPy</a> is a Universal Social Data Extractor.",
    descriptions:[
            "It simplifies the <span class ='pink highlight'>data extraction</span> process from different social media websites. "+
            "Instead of having to study the different APIs of each website, just provide the API keys and use GraphiPy!",

            "Currently, GraphiPy provides support to 7 different websites: Reddit, Facebook, LinkedIn, Pinterest, Tumblr, Twitter, YouTube"

    ],
    video:"https://www.youtube.com/embed/I_86Q3LQvNQ",
    demos:[
        {
            src:"",
            description:""
        }
    ]
}

let pixalsso = {
    key:"Pixalsso",
    title: "Pixalsso",
    subtitle:"",
    link:"https://pixalsso.herokuapp.com/",
    descriptions:[ ""
    ],
    demos:[

    ]
}

let weatherApp =  {
    key:"WeatherApp",
    title: "Weather App",
    subtitle:"",
    link:"http://csci571hw8-env.ybwvbvnvrs.us-east-2.elasticbeanstalk.com/",
    descriptions: ["This is Weather App"
    ],
    demos:[

    ]
}

let Gomoku =  {
    key:"Gomoku",
    title: "Gomoku",
    subtitle:"",
    descriptions: ["This is Gomoku "
    ],
    demos:[

    ]
}

let projectList = [graphiPy, pixalsso, weatherApp, Gomoku]

let projectMap = new Map();
let project
for(project of projectList){
    projectMap.set(project.key.toLowerCase(), project)
}


console.log(projectMap)




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
            return ( 
                <div>
                    
                    <Nav></Nav>

                    <h1>{project.title}</h1> 
                    
                    <p className="heading" dangerouslySetInnerHTML={{ __html: project.subtitle }}>
                        
                    </p>
                    
                    <p dangerouslySetInnerHTML={{ __html: project.descriptions[0] }}>
                        
                    </p>

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
                    


                    
                    
                </div>

                
            );
        }
    }
}

export default DemoPage;