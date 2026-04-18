
import { Bookmark } from 'lucide-react';

const Card = (props) => {
  return (
        <div className='card'>
           <div>
             <div className="top">
                <img src={props.image} alt="" />
                <button>Save <Bookmark size= {12}/></button>
            </div>
            <div className="center">
                <h3> {props.name} <span> 5 days ago</span></h3>
                <h2> {props.position}</h2>
                <div className='tag'>
                    <h4>Part-time</h4>
                    <h4>Senior level</h4>
                </div>
            </div>
           </div>
            <div className="bottom">
                <div>
                    <h3>$120/hr</h3>
                    <p>Mumbia, India</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
  )
}

export default Card