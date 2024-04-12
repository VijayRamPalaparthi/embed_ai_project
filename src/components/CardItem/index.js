import { FaRegComment } from "react-icons/fa";
import "./index.css"
const CardItem = props => {
    const {obj} = props
    const {imageUrl, title, by,info, comments} = obj
    return (
        <div className="slick-card-container">
            <img src={imageUrl} alt={title} className="profile-image" />
            <div className="slick-card-content">
                <h1 className="slick-card-title">{title}</h1>
                <p className="slick-card-name">by @{by}</p>
                <p className="slick-card-name">{info}</p>
                <div className="comments-container">
                    <FaRegComment size={12}/>
                    <p className="comments">{comments}</p>
                </div>
            </div>
        </div>
        
      
    )
}
export default CardItem