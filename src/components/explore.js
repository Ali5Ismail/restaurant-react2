import { Component } from "react";
import "../styles/explorestyle.css"
import mealimg1 from "../images/01.jpg"
import mealimg2 from "../images/02.jpg"
import mealimg3 from "../images/03.jpg"

class Explore extends Component{
    render(){
        return(
            <div className="explore" id="explore">
                <div className="container">
                     <Head/>
                     <div className="mealcontainer">
                     <Meal
                         imgsrc={mealimg1} name="Rainbow Vegetable Sandwich"
                          time="Time: 15 - 20 Minutes | Serves: 1"
                           price="$10.50"
                           discount="$11.70"
                         />
                        <Meal
                         imgsrc={mealimg2} name="Vegetarian Burger"
                          time="Time: 30 - 45 Minutes | Serves: 1"
                           price="$9.20"
                           discount="$10.50"
                         />
                        <Meal
                         imgsrc={mealimg3} name="Raspberry Stuffed French Toast"
                          time="Time: 10 - 15 Minutes | Serves: 1"
                           price="$12.50"
                           discount="$13.20"
                         />
                     </div>
                     <Order/>
                </div>
            </div>
        )
    }
}


class Head extends Component{
    render(){
        return(
            <div className="heading">
                 <h2>Explore Our Foods</h2>
                 <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus 
                 bibendum in sit amet leo.<br/>  Mauris feugiat erat tellus. Far far away,
                  behind the word mountains, far from the countries Vokalia <br/>
                   and Consonantia, there live the blind texts.<br/>
                    Separated they live in Bookmarksgrove 
                 </p>
            </div>
        )
    }
}


class Meal extends Component{
    render(){
        return(
            <div className="meal">
                 <div className="info">
                    <img src={this.props.imgsrc} alt="mealimg"/>
                     <h3>{this.props.name}</h3>
                     <p>{this.props.time}</p>
                      <span>
                        <span className="two">{this.props.price}</span>
                        <del> {this.props.discount}</del>
                      </span>
                 </div>
                 <a href="#home">order now</a>
            </div>
        )
    }
}

class Order extends Component{
    render(){
        return(
            <div className="order" style={{display:'none'}}>
                 <form action="/" method="post">
                      <h2>Make Your Order Now!</h2>
                        <div className="first">
                              <input type="text"placeholder="name" />
                              <input type="email" placeholder="email"/>
                        </div>
                      <input type="text" placeholder="address"/>
                      <input type="number" placeholder="Zip code"/>
                      <input type="number" placeholder="phone"/>
                      <select>
                        <option>name of order</option>
                      </select>
                      <input type="submit" value="send message"className="btn" />
                 </form>
            </div>
        )
    }
}
export default Explore;