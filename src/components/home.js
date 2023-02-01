import { Component} from "react";
import "../styles/home.css"

class Home extends Component{
   render(){
       return(
            <div className="home" id="home">
                  <div className="container">
                      <Define/>  
                      {/* <Image/> */}
                  </div>
            </div>
       )
   }
}

class Define extends Component{
    render(){
        return(
            <div className="text">
                <h4>
                   Good food choices are good investments. 
                </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Etiam et purus a odio finibus bibendum amet leo.
                </p>
                <div className="btn">
                    <a href="#order">order now</a>
                    <a href="#learner">learner more</a>
                </div>
            </div>
        )
    }
}


// class Image extends Component{
//     render(){
//         return(
//             <div className="image">
//                 <img src={homeImage} alt="homeimage"/>
//             </div>
//         )
//     }
// }

export default Home;