import React from 'react';
import Construction from './Construction'
import Nav from './Nav'

let name ="Error";

let map = new Map;
map.set("GraphiPy", "This is GraphiPy!");
map.set("WeatherApp", "This is WeatherApp!");
map.set("Pixalsso", "This is Pixalsso!");

console.log(map);


class DemoPage extends React.Component {
    

    render() {
        let title = this.props.match.params.title;
        // console.log(this.props.match.params.title)
        let demo = map.get(title)
        demo = demo == undefined ? "Error" : demo
        return ( 
            <div>
                <Nav></Nav>
                <h1>{demo}</h1> 
                <p className = "heading" >
                
                </p>
            
            <Construction>

            </Construction>
                
            </div>
        );
    }
}

export default DemoPage;