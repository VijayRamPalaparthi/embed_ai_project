import {Component} from 'react'
import Navbar from '../Navbar'
import { RiGlobalLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import './index.css'



class CreateRoute extends Component {
    state={char:'',tagline:'',desc:'',greet:''}

    changeCharName=(event)=>{
        this.setState({char:event.target.value})
    }

    changeTagline=(event)=>{
        this.setState({tagline:event.target.value})
    }

    changeDesc=(event)=>{
        this.setState({desc:event.target.value})
    }

    changeGreet=(event)=>{
        this.setState({greet:event.target.value})
    }


    render(){
        const{char,tagline,desc,greet}=this.state
        return(
            <div className='homeroute-container'>
                <Navbar isCreate />
                <div className='body-container'>
                    <div className='create-container'>
                        <div className='profile1'>
                            <h1 className='profile-text1'>{char[0]}</h1>
                        </div>
                        <div className='input-container'>
                            <h1 className='input-type'>Character name</h1>
                            <input className='input' 
                            type="text" value={char} 
                            onChange={this.changeCharName} 
                            placeholder='eg.Albert EinStein'/>
                            <p className='number-of-char'>{char.length}/20</p>
                        </div>

                        <div className='input-container'>
                            <h1 className='input-type'>Tagline</h1>
                            <input className='input' 
                            type="text" value={tagline} 
                            onChange={this.changeTagline} 
                            placeholder='Add a short Tagline for your Character'/>
                            <p className='number-of-char'>{tagline.length}/50</p>
                        </div>

                        <div className='input-container'>
                            <h1 className='input-type'>Description</h1>
                            <textarea className='desc input'
                            value={desc} 
                            onChange={this.changeDesc} 
                            placeholder='How would your character describes themselves'
                            />
                            <p className='number-of-char'>{desc.length}/500</p>
                        </div>

                        <div className='input-container'>
                            <h1 className='input-type'>Greeting</h1>
                            <textarea className='desc input' 
                            type="text" value={greet} 
                            onChange={this.changeGreet} 
                            placeholder='Hello I am albert Ask me anything about my sceintific contribution'></textarea>
                            <p className='number-of-char'>{greet.length}/2050</p>
                        </div>
                        <h1 className='input-type'>More Options</h1>
                        <h1 className='input-type visible'>Visibility</h1>
                        <div className='visible-container'>
                            <RiGlobalLine size={16}/>
                            <p>Public</p>
                            <MdOutlineKeyboardArrowDown/>
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
    
}

export default CreateRoute