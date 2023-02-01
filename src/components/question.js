import { Component } from "react";
import "../styles/questionstyle.css"

class Question extends Component{
    
    render(){
        const Qstore=[
            {
                qtitle:"Is Foodera Bread Really Baked Fresh Each Day?",
                A:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language."
            },
            {
                qtitle:"Can I order your products online?",
                A:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language."
            },
            {
                qtitle:"Do you bake breads containing animal fats or products?",
                A:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language"
                
            },
            {
                qtitle:"When are you opening a shop near me?",
                A:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language"
            }

        ]
        return(
            <div className="question" id="question">
                <div className="container">
                    <h3>Frequently Asked Questions</h3>
                    <div className="questioncontainer">
                        {Qstore.map((ele)=> <Ques1 title={ele.qtitle} desc={ele.A}/>)}
                     </div>
                </div>
            </div>
        )
    }
}

class Ques1 extends Component{
    render(){
        return(
           <div className="quesbody">
              <h4> {this.props.title}</h4>
              <p>
              Far far away, behind the word mountains, 
              far from the countries Vokalia and Consonantia, 
              there live the blind texts. Separated they live in 
              Bookmarksgrove right at the coast of the Semantics, a large language.
              </p>
           </div>  
        )
    }
} 

export default Question;