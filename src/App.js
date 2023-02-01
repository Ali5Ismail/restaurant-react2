   import Header from "../src/components/header"
   import Home from "../src/components/home"
   import About from "./components/about";
   import Explore from "./components/explore";
    import Feature from "./components/features";
import Lastslide from "./components/lastslide";
import Question from "./components/question";
   import Services from "./components/services";
import Slider from "./components/slider";
   import SlideVideo from "./components/slidevideo";
import Subscribe from "./components/subscribe";

   function App() {
  return (
    <div className="App">
          <Header/>
          <Home/>
          <Services/>
          <About/>
          <Feature/>
          <SlideVideo/>
          <Explore/>
          <Slider/>
          <Question/>
          <Lastslide/>
          <Subscribe/>
    </div>
  );
}

export default App;
