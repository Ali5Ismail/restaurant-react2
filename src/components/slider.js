import { Component } from "react";
import "../styles/sliderstyle.css"
import clientimg1 from "../images/2.jpg"


class Slider extends Component{
    render(){
        return(
            <div className="slider" id="slider">
                <div className="container">
                     <Client/>
                </div>
            </div>
        );
    }
}

class Client extends Component{
    render(){
        return(
            <div className="client">
                <img src={clientimg1} alt="clientimg"/>
                  <p> "i am javascript developer ,have more year of <br/>
                      experience in javascript and its work  like <br/>
                       web ,mobile,desktop and AI"
                  </p>
                   <div> <span>ali.js</span> <span>- javascript daevloper</span> </div>
            </div>
        )
    }
}

export default Slider;