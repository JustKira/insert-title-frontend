import Landing from"./components/Landing/Landing"
//Anim Plugins
import gsap from "gsap";
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import Cards from "./components/Cards";

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <div className='font-Pop overflow-hidden'>
          <Landing/>

          <div className="h-screen w-full">
            <Cards/>
          </div>
    </div>
  );
}

export default App;
