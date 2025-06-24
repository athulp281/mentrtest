import React from 'react';
import useModal from '../../hooks/use-modal';
import VideoModal from '../common/modals/modal-video';
import MotionWrapper from '../MotionWrapper';

const contents = {
  client_icon:'/assets/img/about/testi-7.png',
  missionName:'Hear the Story',
  client_title:'',
  missionDesc:"In 2023, a conversation with friends opened my eyes. I realized many passionate entrepreneurs have brilliant ideas but struggle without the practical skills and mentorship to bring them to life. Startups often fail not from a lack of passion, but due to poor planning and insufficient support. That realization inspired me to create Mentrloop — a platform designed to equip you with the essential skills and personalized mentorship needed to transform ideas into extraordinary businesses. At Mentrloop, we believe that with the right tools and support, anyone can build something amazing. ",
  about_img:'/assets/img/breadcrum/book.png',
}
const {about_img,client_icon,missionName,client_title,missionDesc} = contents;

const HearTheStory = () => {

  return (
    <>
      <div className="ac-about-content-area pt-130">
        <div className="container">
          <div className="row ac-testimonial-space">
            <div className="col-xl-6 col-lg-6 wow tpfadeLeft">
              <div className="ac-testimonial-info">
                <div className="actestimonial">
                  <div className="actestimonial__icon">
                    <img src={client_icon} alt="" />
                  </div>
                  <div className="actestimonial__position">
                    <MotionWrapper directions={"bottom"} delay={.4}><h4 className="ac-client-name"><a href="#">{missionName}</a></h4></MotionWrapper>
                    
                    <span>{client_title}</span>
                  </div>
                  <div className="pb-25">
                    <MotionWrapper directions={"bottom"} delay={.4}><p > <span><i className="fas fa-quote-right"></i></span>{missionDesc}</p></MotionWrapper>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
              <div className="ac-testimonial-right">
               <MotionWrapper directions={"bottom"} delay={.4}><img src={about_img} alt="" /></MotionWrapper>  
              </div>
            </div>
          </div>
          {/* ---------------------------------------------------------- */}
           
        </div>
      </div>

      
    </>
  );
};

export default HearTheStory;