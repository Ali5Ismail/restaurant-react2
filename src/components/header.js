import { Component} from "react";
import "../styles/headerstyle.css"
import logoImage from"../images/logo.png"

 class Header extends Component{
    render(){
        return(
            <header>
                <div className="container">
                    <Logo/>
                    <Navbar/>
                </div>
            </header>
        )
    }
}


class Logo extends Component{
    render (){
        return(
        <div className="logo">
             <img src={logoImage} alt="logoimage"/>
        </div>
        )
    }
}


class Navbar extends Component{
     
    state={
         apperance:"none"
     }
      changeApperance(){
        if(this.state.apperance==='none'){
            this.setState({
                apperance:"block"
            }) 
            console.log(this.state.apperance);
        }
        else{
            this.setState({
                apperance:"none"
            })   
            console.log(this.state.apperance);
        }
        
     }
     
     render(){
       
        return(
            <nav>
                <ul>
                    <li>
                        <a href="#home">home</a>
                    </li>
                    <li>
                        <a href="#about">aboutus</a>
                    </li>
                    <li>
                        <a href="#explore">explorefoods</a>
                    </li>
                    <li>
                        <a href="#review">reviews</a>
                    </li>
                    <li>
                        <a href="#question">FAQ</a>
                    </li>
                    <li>
                        <a href="#phone">01120450953</a>
                    </li>
                
                </ul>
                     <i class="fa-solid fa-bars"></i>
            </nav>  
         )

     }
}

export default Header;
