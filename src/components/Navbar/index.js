import { Component } from 'react';
import {Link} from 'react-router-dom'
import { AiOutlinePlus } from "react-icons/ai";
import { RiCompassDiscoverFill } from "react-icons/ri";
import './index.css'


const userList=[
  
  {
    id:1,
    name:"Gojo Satoro",
    imageUrl:"https://characterai.io/i/200/static/avatars/uploaded/2022/11/16/nJChvURCkNMUWYAcg_Wgt2NHq3WeBkGWiCmMC1J1cHk.webp?webp=true&anim=0"

  },
  {
    id:2,
    name:"Creative Helper",
    imageUrl:"https://characterai.io/i/200/static/avatars/uploaded/2022/10/19/UHMcO-dD720KcZuxmWjNnuDzYGrhjrulXic0c-nZWBY.webp?webp=true&anim=0"
  },{
    id:3,
    name:"Elone Musk",
    imageUrl:"https://characterai.io/i/80/static/avatars/uploaded/2022/12/2/0cXVHLszZQ8idr8qGkhXB4-1PzA_qbAFmVl2V7v9NZc.webp?webp=true&anim=0"
  },
  {
    id:4,
    name:"Pam Beesly",
    imageUrl:"https://characterai.io/i/200/static/avatars/uploaded/2022/12/20/qvrRLW1-NGEq2SAnMh_rOwAh3zEO2CxVaNfwUuXpXu0.webp?webp=true&anim=0"
   },
  { id:5,
    name:"Hyper Glot", 
    imageUrl:"https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
   },
   

]

class  Navbar extends Component{
  state={users:userList,activeId:"",}

  componentDidMount=()=>{
    const{isUser,id}=this.props
    
    if(isUser){
      console.log(id)
      this.setState({activeId:id})
    }
  }

  renderProfiles=()=>{
    const{users,activeId}=this.state
    
    return(
      <ul className='profile-list'>
        {users.map(each=>{
          const profileState= each.id===activeId? "active-user-profile profile-tab" : "profile-tab"
          const changeActive=()=>{
            this.setState({activeId:each.id})
          }
          return(
            <li key={each.id}>
              <Link to={`/profile/${each.id}`} className={profileState} onClick={changeActive} >
              <img src={each.imageUrl} className='user-image'/>
              <p className='profile-name'>{each.name}</p>
              </Link> 
            </li>
          )
        })}
      </ul>
    )

  }

  render(){
    const {
      isHome,
      isCreate
       } = this.props
    const home = isHome ? 'discover-button' : 'discover-button  discover-deactive'
    // const toprate = isChat ? 'header-name home-active' : 'header-name'
  
    return (
      <nav className="nav-container">
        <div className='name-nav'>
          <h1 className='name'>character.ai</h1>
        </div>
        <div>
        <Link to="/create" className="link-container">
          <button className='create-button'>
            <div className='create-button-container'>
            <AiOutlinePlus size={25}/>
            <span className='side-head'>Create</span>
            </div>
            
          </button>
        </Link>
        </div>
  
        <div>
        <Link to="/" className="link-container">
          <button className={home}>
            <div className='create-button-container'>
            <RiCompassDiscoverFill size={25}/>
            <span className='side-head'>Discover</span>
            </div> 
          </button>
        </Link>
        </div>
        
      <h1 className='chat-heading'>Chats</h1>
      {isCreate && (
          <div className='new-char-container'>
          <div className='box'></div>
          <p className='side-chat'>New Character</p>
        </div>
      )}
      <p className='today'>Today</p>
        {this.renderProfiles()}
        <hr className='line'/>
        <div className='try-tab'>
          <p className='try'>try ci.</p>
        </div>
        <div className='name-container'> 
          <div className='profile'>
              <h1 className='profile-text'>A</h1>
          </div>
          <h1 className='user-name'>Anilmacha</h1>
        </div>  
      </nav>
    )
  }
  
}

export default Navbar