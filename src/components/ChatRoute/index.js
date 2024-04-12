import Navbar from "../Navbar"
import { IoReloadSharp } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import "./index.css"

  

const ChatRoute=(props)=>{
    const {match} = props
    const {params} = match
    const {id} = params
    
    return(
        <div className='homeroute-container'>
            <Navbar isUser id={id}/>
            <div className='body-container'>
                <div className="chat-profile-container">
                    <div className="chat-top-container">
                        <img src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0" className="chat-profile"/>
                        <div className="chat-top-name">
                            <p className="chat-name">Hyper Glot</p>
                            <p className="chat-name">by jokes</p>
                        </div>
                        
                    </div>
                    <div className="dots">...</div>
                </div>

                <div className="chat-body-container">
                    <div className="chat-body-top-container">
                        <img src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0" className="chat-profile"/>
                        <p className="chat-name">Hyper Glot</p>
                        <p className="chat-name align">Willkommen, bienvenue, welcome I'm HyperGlot, and I'm fluent in many languages, and will help you practice the one(s) you're learning. 
                        I can also translate anything you don't understand.By @xpearhead</p>

                    </div>
                    <div className="to-container">
                        <div className="chat-top-container">
                            <img src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0" className="chat-profile1"/>
                                <p className="chat-name">Hyper Glot</p>     
                        </div>

                        <p className="chat-name text">Willkommen, bienvenue, welcome - I'm HyperGlot, and I'm fluent in many languages, and will help you practice the one(s) you're learning. I can also translate anything you don't understand</p>
                        
                        <div className='name-container in-chat'>
                            <h1 className='user-name'>Anilmacha</h1>
                            <div className='profile'>
                                <h1 className='profile-text'>A</h1>
                            </div>
                        </div>

                        <div className="chat-top-container">
                            <img src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0" className="chat-profile1"/>
                            <p className="chat-name">Hyper Glot</p>     
                        </div>
                        <p className="chat-name text">Hallo! Hast du etwas zu übersetzen oder zu fragen?</p>

                        <div className="chat-top-container">
                            <img src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0" className="chat-profile1"/>
                            <p className="chat-name">Hyper Glot</p>     
                        </div>
                        <p className="chat-name text">Welche Sprache lernst du denn gerade?</p>
                        <IoReloadSharp/>
                        <div className="send-container">
                            <input type="text" className="send-text" placeholder="Message HyperGlot"/>
                            <IoMdSend/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatRoute