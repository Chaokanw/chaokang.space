import React from 'react';
import Construction from './Construction'

import {Link} from 'react-router-dom'


function ProjectsPage() {
    return ( 
        <div>
             <p className = "heading" >
               <Link to="/"><i class="fas fa-chevron-circle-left"></i> Back to main</Link>
            </p>
           <h1> Projects</h1> 
           <Construction>

           </Construction>
            
        </div>
    );
}

export default ProjectsPage;