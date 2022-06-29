//Anim Plugins
import gsap from "gsap";
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import Cards from './components/Cards';

import {Routes, Route} from "react-router-dom";

import CVBuilder from "./pages/CVBuilder";
import Landing from "./pages/Landing";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";
import RoadMap from "./pages/RoadMap";

gsap.registerPlugin(ScrollTrigger)

function App() {
    return (
        <div className='font-Pop overflow-hidden'>
            <Routes>
                <Route path="/" element={< Landing />}/>
                <Route path="/posts" element={< Posts />}/>
                <Route path="/cv-builder" element={< CVBuilder />}/>
                <Route path="/road-map" element={< RoadMap />}/>
                <Route path="/profile" element={< Profile />}/>
            </Routes>

        </div>

    );
}

export default App;
