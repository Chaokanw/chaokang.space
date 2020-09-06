import React from 'react';
import Construction from './Construction'
import Nav from './Nav'
import ErrorPage from './ErrorPage';
import {albumList} from './Albums'




let albumMap = new Map();
let album
for(album of albumList){
    albumMap.set(album.key.toLowerCase(), album)
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
        let album = albumMap.get(title.toLowerCase())
        
        // album = album === undefined ? "Error" : album
        if( album === undefined ){
            return (
                <div>
                    <ErrorPage></ErrorPage>
                </div>
            );
        }
        else{
            let descriptions = album.descriptions;
            let demos = album.demos;
            return ( 
                <div>
                    
                    <Nav></Nav>

                    <h1>{album.title}</h1> 
                    
                    <p className="heading" dangerouslySetInnerHTML={{ __html: album.subtitle }}>
                        
                    </p>

                    {descriptions.map(
                        (description, i)=>
                        <p key = {i} dangerouslySetInnerHTML={{ __html: description }}>
                        
                        </p>
                    )}
                    
                    
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