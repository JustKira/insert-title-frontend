//Anim Plugins
import gsap from "gsap";
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import Cards from './components/Cards';

import {Routes, Route} from "react-router-dom";

import jwt_decode from "jwt-decode"

import CVBuilder from "./pages/CVBuilder";
import Landing from "./pages/Landing";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";
import RoadMap from "./pages/RoadMap";
import PostDetail from './pages/PostDetail'
import SignInUp from './pages/SignInUp'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "./redux/user";
import RequireAuth from "./components/Router/RequireAuth";
import AddPost from "./pages/AddPost";

gsap.registerPlugin(ScrollTrigger)

let placeholder_text = "<h1>Id omnis nulla et atque voluptate aut laudantium necessitatibus! </h1><p>Lorem ipsum dolor sit amet. Non alias exercitationem et adipisci voluptatibus <em>Vel facilis  incidunt rerum rem inventore quibusdam vel dignissimos cupiditate</em>. Ea quibusdam voluptatem et quod quis a nisi veritatis est nemo reiciendis. Et sint cumque <strong>Sed facilis ad dolorem voluptas 33 saepe minus</strong>. </p><ul><li>Est quidem tempora non impedit fuga vel similique quidem qui reprehenderit possimus. </li><li>Sit numquam adipisci id excepturi aspernatur? </li><li>Et atque quia eum reprehenderit illum? </li><li>Eos error magnam in quibusdam iste non ipsa voluptas! </li><li>Ut culpa iure vel velit facere. </li></ul><h2>33 quidem impedit sed eligendi corporis qui fugiat accusantium! </h2><p>Ut eligendi natus aut dolores molestias ex repellendus possimus. Aut labore aliquam ex voluptatem blanditiisab totam. Ut sint distinctio et ipsam molestiae <strong>Sit cumque sed similique veritatis ut possimus praesentium sit ipsam aliquid</strong>. </p><h3>Hic voluptatibus dolore cum perspiciatis minima non facilis distinctio. </h3><p>Et incidunt magnam ex commodi eius aut consequatur consequatur eum quasi minus. Et nihil maiores non voluptates quam sed veritatis quia. </p><ol><li>Quo quod corrupti vel deleniti repellat vel commodi odio est dolores possimus. </li><li>Ut repudiandae fugiat id sunt esse qui nihil beatae est distinctio necessitatibus. </li></ol>"

function App() {
    
    const reducerState = useSelector((state) => state)
    const dispatch = useDispatch()
    //DATA REQ ON CHANGE

    useEffect(() => {
        console.log('test')
        try {
            if(reducerState.auth.status === 'success') {
                dispatch(getUserData({parms:""}))
            }
        } catch (error) {
            
        }
    }, [reducerState.auth])
    
    return (
        <div className='font-Pop overflow-hidden'>
            <Routes>
                <Route path="/" element={< Landing />}/>
                <Route path="/signing" element={< SignInUp />}/>
                <Route path="/posts/1" element={< PostDetail post={{
                    image:"https://www.valeo.com/wp-content/uploads/2021/09/logo-footer.png", title:"Job Title", company:"Company", pay_range:"pay-range", location:"Location", description:placeholder_text, questions:[
                    {id:0,question:"What's your name?",type:"text"},
                    {id:1,question:"What's your name?",type:"textarea"},
                    {id:2,question:"What's your name?",type:"dropdown", choices:['Choice1', 'Choice2', 'Choice3']}
                    ]}}/>}/>

                <Route element={< RequireAuth />}>
                <Route path="/posts" element={< Posts />}/>
                <Route path="/cv-builder" element={< CVBuilder />}/>
                <Route path="/road-map" element={< RoadMap />}/>
                <Route path="/profile" element={< Profile />}/>
                
                </Route>
                <Route path="/add-post" element={< AddPost />}/>
            </Routes>

        </div>

    );
}

export default App;
