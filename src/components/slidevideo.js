import { Component } from "react";

import "../styles/slidevideo.css";



class SlideVideo extends Component{
    
   

    render(){
        function Video(){
            return(
               <div className="videocontainer" style={{display:"none"}}>
                 <iframe
                        width="800" height="500" src="https://www.youtube.com/embed/bMknfKXIFA8" 
                        title="YouTube video player" frameborder="0" allow="accelerometer;
                         autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                         allowfullscreen>

                </iframe>
               </div>
            )
        } 
        return(
            <div className="video" id="video">
                <div className="container">
                       <h3>
                         When a man's stomach is full it makes no
                         difference <br/> whether he is rich or poor.
                        
                        </h3> 

                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                            Etiam et purus a odio finibus bibendum in sit <br/>
                             amet leo. Mauris feugiat erat tellus. 
                        </p>
                         
                        <Video/>

                          <button>watch</button>

                </div>
            </div>
        )
    }
}

export default SlideVideo;