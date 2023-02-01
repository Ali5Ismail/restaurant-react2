import { Component } from "react";
import aboutSrc from "../images/1.png"
import  "../styles/aboutstyle.css"

class About extends Component{
    render(){
        return(
            <div className="about" id="about">
               <div className="container">
                   <Image/>
                   <Desc/>
               </div>
             </div>
        )
    }
}


class Image extends Component{
    render(){
        return(

            <div className="image">
                <img src={aboutSrc} alt="aboutSrc"/>
            </div>
        )
    }
}

class Desc extends Component{
    render(){
        return(
            <div className="desc">
                <h4> We pride ourselves on making real food from the best ingredients</h4>
                <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio 
                   finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                </p>
                <a href="index.html">learn more</a>
            </div>
        )
    }
}

export default About;