import React from 'react';
import Construction from './Construction'
import Nav from './Nav'
import Preview from './Preview';

let previewList = [
    {"title": "Mexico City & Guanajuato",
     "link": "/photos/Mexico",
     "src": "/images/photos/Mexico.jpg"},

    {"title": "Oahu, Hawaii", 
    "link": "/photos/Hawaii",
    "src": "/images/photos/Hawaii.jpg"},
    ,
    {"title": "Hokkaido", 
    "link": "/photos/Hokkaido",
    "src": "/images/photos/Hokkaido.jpg"},

     {"title": "Summertime Kansai",
     "link": "/photos/Kansai",
     "src": "/images/photos/Japan.jpg"},

    {"title": "Joshua Tree",
     "link": "/photos/Joshua",
     "src": "/images/photos/Joshua.jpg"},

     {"title": "Chifeng, Inner Mongolia ",
      "link": "/photos/Chifeng",
      "src": "/images/photos/Chifeng.jpg"},

     {"title": "La La Land",
      "link": "/photos/LosAngeles",
      "src": "/images/photos/LA.jpg"}
]

class PhotosPage extends React.Component {
    render() {
        return ( 
            <div>
                <Nav></Nav>
                <h1>Photos</h1> 
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
                
            </div>
        );
    }
}

export default PhotosPage;