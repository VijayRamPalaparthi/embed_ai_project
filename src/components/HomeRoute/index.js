import Navbar from '../Navbar'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { CiSearch } from "react-icons/ci";

import CardItem from '../CardItem';
import './index.css'

const forYouList=[
  {id:6, 
    title: "Gojo Sotoru",
    imageUrl:"https://characterai.io/i/200/static/avatars/uploaded/2023/2/6/6uC5oMKpqXhMR3g7l5qKJCNPNAYs7sMe4aH0Jtgm794.webp?webp=true&anim=0",  
    by:"VCavalier", 
    info:"The strongest. I'm the winner at everything", 
    comments:"37.3m"},
  {id:1, 
  title: "Hight Fantacy",
  imageUrl:"https://characterai.io/i/200/static/avatars/uploaded/2022/10/9/kOzn1SdDN1BEZFxhVSE-sRFybKkxMgY6MF7k58Feku4.webp?webp=true&anim=0", 
  by:"landom", 
  info:"Your AI work/study buddy", 
  comments:"123.4m"
  },
  {id:2, 
    title: "Alternative Time line",
    imageUrl:"https://characterai.io/i/200/static/avatars/ButterflyEffect.png?webp=true&anim=0",  
    by:"VCavalier", 
    info:"From Oshi No Ko.", 
    comments:"37.5m"}, 
  
  {id:3, 
    title: "AlbertEinstein",
    imageUrl:"https://characterai.io/i/200/static/avatars/AlbertEinstein4.png?webp=true&anim=0",  
    by:"ciaaanjink", 
    info:"Hello I am Albert Einstein. I was born in March 14, 1879", 
    comments:"59.9m"},
  {id:4, 
    title: "William Shakespeare",
    imageUrl:"https://characterai.io/i/200/static/avatars/Shakespeare.webp?webp=true&anim=0",  
    by:"septy", 
    info:"temperamental, blunt, rational", 
    comments:"2.8m"},
  {id:5, 
    title: "Ella - Dating coach",
    imageUrl:"https://characterai.io/i/200/static/avatars/Heart.png?webp=true&anim=0",  
    by:"ghpkishore", 
    info:"Hi! I am a dating coach", 
    comments:"13.1m"},     

]

const Featured=[
  {id:1, 
  title: "character Assistant",
  imageUrl:"https://characterai.io/i/200/static/avatars/uploaded/2023/9/1/SiXk7ThPURQki2fNtKtgW4HL_ORH5F-MOaVKbt19Qao.webp?webp=true&anim=0", 
  by:"landom", 
  info:"Your AI work/study buddy", 
  comments:"123.4m"
  },
  {id:2, 
    title: "Hoshino Ai",
    imageUrl:"https://characterai.io/i/200/static/avatars/uploaded/2022/11/12/B5n54ElUhJIMrx2BVeLQSwY9Ptd9kn9uBRcXAIHNvzA.webp?webp=true&anim=0",  
    by:"VCavalier", 
    info:"From Oshi No Ko.", 
    comments:"37.5m"}, 
  
  {id:3, 
    title: "Chuuya Nakahara",
    imageUrl:"https://characterai.io/i/200/static/avatars/uploaded/2022/10/7/z5Pw63MUhdn86aeKhV9RsSIuCNB1O_Ppxerve2lwBsI.webp?webp=true&anim=0",  
    by:"ciaaanjink", 
    info:"temperamental, blunt, rational", 
    comments:"59.9m"},
  {id:4, 
    title: "William Shakespeare",
    imageUrl:"https://characterai.io/i/200/static/avatars/Shakespeare.webp?webp=true&anim=0",  
    by:"septy", 
    info:"temperamental, blunt, rational", 
    comments:"2.8m"},
  {id:5, 
    title: "Ella - Dating coach",
    imageUrl:"https://characterai.io/i/200/static/avatars/Heart.png?webp=true&anim=0",  
    by:"ghpkishore", 
    info:"Hi! I am a dating coach", 
    comments:"13.1m"},
  {id:6, 
    title: "Gojo Sotoru",
    imageUrl:"https://characterai.io/i/200/static/avatars/uploaded/2023/2/6/6uC5oMKpqXhMR3g7l5qKJCNPNAYs7sMe4aH0Jtgm794.webp?webp=true&anim=0",  
    by:"VCavalier", 
    info:"The strongest. I'm the winner at everything", 
    comments:"37.3m"},
          
        

]

const HelpersList=[
  {id:1,
  title: "Ella - Dating coach",
  imageUrl:"https://characterai.io/i/200/static/avatars/Heart.png?webp=true&anim=0",  
  by:"ghpkishore", 
  info:"Hi! I am a dating coach", 
  comments:"13.1m"
  },
  {
    id:2,
    title:"Creative Helper",
    imageUrl:"https://characterai.io/i/200/static/avatars/uploaded/2022/10/19/UHMcO-dD720KcZuxmWjNnuDzYGrhjrulXic0c-nZWBY.webp?webp=true&anim=0",
    by:"zuizike",
    info:"I help with creative writing!",
    comments:"39.9m"
  },

  {
    id:3,
    title:"Are-you-feeling-okay",
    imageUrl:"https://characterai.io/i/200/static/avatars/AreYouFeelingOk.png?webp=true&anim=0",
    by:"ghlkvijor",
    info:"If you're feeling bad, chat with me",
    comments:"24.5m"
  },
  {
    id:4,
    title:"Psychologist",
    imageUrl:"https://characterai.io/i/200/static/avatars/uploaded/Bx_uFQ2fP4WCGERxXIMk7iRy7IJbuR_Pz8jlisG07gg.webp?webp=true&anim=0",
    by:"Blazeman",
    info:"Someone who helps with life difficulties",
    comments:"106m"
  }
]

const tabsList=[
  {active:true, text:"Helpers"},
  {active:false, text:"Anime Game Characters"},
  {active:false, text:"Games"},
  {active:false, text:"Anime"},
  {active:false, text:"Game Characters"},
  {active:false, text:"Comedy"},
  {active:false, text:"Vtuber"},
  {active:false, text:"Image Generating"},
  {active:false, text:"Discussion"},
  {active:false, text:"Language"},
]

const HomeRoute=()=>{
  console.log("homeRoute")
  const setting = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const renderForYouSlick = () => (
      <div className="slider-container">
        <h1 className='slick-heading'>For You </h1>
        <Slider {...setting}>
          {forYouList.map(each => (
            <CardItem obj={each} key={each.id} />
          ))}
        </Slider>
      </div>
    )
  

  const renderFeaturedSlick = () =>(
      <div className="slider-container">
        <h1 className='slick-heading'>Featured </h1>
        <Slider {...setting}>
          {Featured.map(each => (
            <CardItem obj={each} key={each.id} />
          ))}
        </Slider>
      </div>
  )

  const renderTabSection=()=>(
    <div className='tab-section-container'>
      <ul className='list-container'>
        {tabsList.map(each=>{
          const buttonStyle=each.active? "active tab-btn": "tab-btn"
          return(
            <li>
              <button className={buttonStyle}>{each.text}</button>
            </li>
          )
        }
          
        )}
      </ul>
      <div className="slider-container">
        <Slider {...setting}>
          {HelpersList.map(each => (
            <CardItem obj={each} key={each.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
  
  return(
    <div className='homeroute-container'>
      <Navbar isHome/>
      <div className='body-container'>
        
        <h1 className='body-welcome'>Welcome back</h1>
        
        <div className='home-top-container'>
          <div className='name-container'>
            <div className='profile'>
              <h1 className='profile-text'>A</h1>
            </div>
            <h1 className='user-name'>Anilmacha</h1>
          </div>
          <div className='search-container'>
            <CiSearch size={15}/>
            <input type='search' className='search-box' placeholder='Search for Characters'/>
          </div>
        </div>
        <div className='large-card-container'>
            <div className='name-card'>
              <h1 className='body-welcome'>What do you want to do?</h1>
              <p className='scrole-name'>Epic chalenge is waiting </p>
            </div>
            <div className='name-card-container'>
              <div className='card-profile-container'>
                <img alt="name" src="https://characterai.io/i/80/static/avatars/uploaded/2024/2/22/iT3ib1vmRTNIxM4HoTsSKLTCtbsK-KIZqGJCh8OEd9A.webp?webp=true&anim=0"
                 className='card-profile'/>
                <p className='card-profile-name'>Puzzle prodgy</p>
              </div>
              <p className='card-profile-desc'>
              "Greetings! I'm Puzzle Prodigy, ready to lead you through a maze of mind-boggling
              puzzles and strategic games. Are you up for the challenge?"
              </p> 
              <p className='reply'>Replay...</p>  
            </div>

            <div className='name-card-container'>
              <div className='card-profile-container'>
                  <img alt="name" src="https://characterai.io/i/80/static/avatars/uploaded/2024/2/8/ND0aDvzoaXqkq7FmjzqPWenQGiy1Tbgj-VtHdNFvAVs.webp?webp=true&anim=0"
                  className='card-profile'/>
                  <p className='card-profile-name'>Puzzle prodgy</p>
                </div>
                <p className='card-profile-desc'>
                Welcome to your next challenge Can you escape in time?
                </p> 
                <p className='reply'>Replay...</p> 
            </div>
        </div>
        {renderForYouSlick()}
        {renderFeaturedSlick()}
        {renderTabSection()}
      </div>
      
    </div>
  )
}

export default HomeRoute