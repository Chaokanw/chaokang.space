import React from 'react';
import './App.css';
import MainPage from './MainPage';
import ProjectsPage from './ProjectsPage';
import PhotosPage from './PhotosPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutPage from './AboutPage';
import DemoPage from './DemoPage';
import ErrorPage from './ErrorPage';



function App() {
    return ( 
        <div className = "App" >
            <Router>
                <Switch>
                    <Route path="/" exact component={MainPage} /> 
                    <Route path="/projects" exact component={ProjectsPage} /> 
                    <Route path="/projects/:title" component={DemoPage} />
                    <Route path="/photos" exact component={PhotosPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path='*' exact={true} component={ErrorPage} />

                </Switch>
   
            </Router>
            
            
        </div>
    );
}

export default App;