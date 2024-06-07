import React from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testimonials = () => {
    
    const slider = useRef();
    let tx = 0;

     const slideForward = () =>{
        if(tx  > -50)
            {
                tx = tx-25;
            }
        slider.current.style.transform = `translateX(${tx}%)`

     }

     
     const slidebackward = () =>{
        if(tx  < 0)
            {
                tx = tx+25;
            }
        slider.current.style.transform = `translateX(${tx}%)`
     }



  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward}/>
      <img src={back_icon} alt="" className="back-btn" onClick={slidebackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Angila Johnson</h3>
                  <span>Educity,USA</span>
                </div>
              </div>
           
            <p>
              Choosing to pursue my degree at Educity was one of the best
              decisions I've made for myself. The faculty and staff are so
              supportive and knowledgeable. and commitment to academic
              excellence that I will always be grateful for.
            </p>
             </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Roby</h3>
                  <span>Educity,USA</span>
                </div>
              </div>
            
            <p>
              Opting to specialize in computer science at Educity has truly been
              a game-changer for me. The professors' expertise and the
              cutting-edge resources available have fueled my passion for coding
              and problem-solving. 
            </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Anne Johnson</h3>
                  <span>Educity,USA</span>
                </div>
              </div>
            
            <p>
              Deciding to study business administration at Educity has opened up
              a world of opportunities for me. The guidance and mentorship from
              the faculty have been instrumental in shaping my understandings.
            </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Chris Nolan </h3>
                  <span>Educity,USA</span>
                </div>
              </div>
            
            <p>
              Choosing Educity for my engineering degree has been an incredibly
              rewarding experience. The approach to learning, coupled
              with the state-of-the-art facilities, has allowed me to  deep
              dive into my field of study. 
            </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
