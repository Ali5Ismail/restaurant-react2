import { Component } from "react";
import img from "../images/feature.png"
import "../styles/featurestyle.css"

class Feature extends Component{
    render(){
        return(
            <div className="feature" id="review">
                <div className="container">
                     <Text/>
                     <Images/>
                </div>
            </div>
        )
    }
}

class Text extends Component{
    render(){
        return(
             <div className="text">
                <h4>
                   We make everything by hand with the best possible ingredients.
                </h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Etiam et purus a odio finibus bibendum in sit amet leo.
                 Mauris feugiat erat tellus.Far far away, behind the word mountains,
                 far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="check">
                    <p>
                        <span>Etiam sed dolor ac diam volutpat.</span>
                    </p>
                    <p>
                        <span>Etiam sed dolor ac diam volutpat.</span>
                    </p>
                    <p>
                        <span>Etiam sed dolor ac diam volutpat.</span>
                    </p>
                    <p>
                        <span>Etiam sed dolor ac diam volutpat.</span>
                    </p>
                </div>
                <a href="#home">learn more</a>
             </div>
        )
    }
}

class Images extends Component{
    render(){
        return(
            <div className="images">
                    <img src={img} alt="img1" />
            </div>
        )
    }
}

export default Feature;