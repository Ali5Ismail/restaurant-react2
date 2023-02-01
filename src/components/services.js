import { Component } from "react";

import  "../styles/servicesStyle.css"

class Services extends Component{
    render(){
        return(
            <div className="services" id="services">
                  <div>
                     <span>1287+</span>
                     <span>savings</span>                     
                  </div>
                  <div>
                     <span>5786+</span>
                     <span>photos</span>                     
                  </div>
                  <div>
                     <span>1440+</span>
                     <span>rockets</span>                     
                  </div>
                  <div>
                     <span>7110+</span>
                     <span>globes</span>                     
                  </div>
            </div>
        )
    }
}

export default Services;