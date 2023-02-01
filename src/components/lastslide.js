import { Component } from "react";
import "../styles/lastslidestyle.css"

class Lastslide extends Component{
    render(){
        return(
            <div className="lastslide" id="lastslide">
                <p>Baked fresh daily by bakers with passion.</p>
                <a href="#home">learn more</a>
            </div>
        )
    }
}
export default Lastslide;