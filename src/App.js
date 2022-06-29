import Landing from"./components/Landing/Landing"
//Anim Plugins
import gsap from "gsap";
import ScrollTrigger from 'gsap/src/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <div className='font-Pop overflow-hidden'>
          <Landing/>
    </div>
  );
}

export default App;
