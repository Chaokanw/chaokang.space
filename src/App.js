import React from 'react';
import './App.css';
import MainPage from './MainPage';
import ProjectsPage from './ProjectsPage';
import PhotosPage from './PhotosPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
    return ( 
        <div className = "App" >
            <Router>
                <Switch>
                    <Route path="/" exact component={MainPage} /> 
                    <Route path="/projects" component={ProjectsPage} /> 
                    <Route path="/photos" exact component={PhotosPage} />
                </Switch>
   
            </Router>
            
            
        </div>
    );
}

export default App;