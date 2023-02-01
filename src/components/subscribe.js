import { Component } from "react";

import "../styles/subscribestyle.css"
class Subscribe extends Component{
    render(){
        return(
            <div className="subscribe" id="subscribe">
                <div className="container">
                <h3>Hurry up! Subscribe our newsletter
                    and get 25% Off
                </h3>
                  <p>Limited time offer for this month. No credit card required.</p>

                  <form>
                      <input type="email" placeholder="Email Address here"/>
                      <input type="submit" value="subscribe"/>
                  </form>
                </div>
            </div>
        )
    }
}

export default Subscribe;