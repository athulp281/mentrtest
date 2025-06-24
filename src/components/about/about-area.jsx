import React from 'react';
import useModal from '../../hooks/use-modal';
import VideoModal from '../common/modals/modal-video';
import MotionWrapper from '../MotionWrapper';

const contents = {
  title:<>Welcome to <span>Mentrloop</span> — your go-to platform for skill development and startup orientation.</>,
  video_title:'',
  video_id:'8D6b3McyhhU',
  right_text_1:"Founded in 2025, Mentrloop was born from a simple but powerful idea: to empower aspiring entrepreneurs and learners with the practical skills and guidance they need to turn their ideas into successful startups and thrive in everyday life.",
  right_text_2:"",
  client_icon:'/assets/img/about/testi-7.png',
  missionName:'Mission',
  client_title:'',
  missionDesc:"We are dedicated to igniting confidence, creativity, and self-reliance by providing real-world skills and startup mentorship tailored for today’s dynamic world. Whether you’re dreaming of launching your own business or simply want to build skills that matter, Mentrloop is here to support your journey.",
  about_img:'/assets/img/breadcrum/ab-1.2.jpg',

  visionName:"Vision",
  visionDesc:"We envision a world where anyone can transform their ideas into thriving startups while mastering essential life and business skills needed to succeed in the 21st century. Mentrloop aims to be the leading platform where innovation meets practicality and community.",
valueName:"Values",
valueDesc:"Mentrloop stands for empowerment, practical learning, and bold, entrepreneurial thinking. We make education accessible, build strong communities, and lead with integrity in everything we do."

}
const {valueDesc,valueName,visionName,visionDesc,about_img,client_icon,missionName,client_title,missionDesc,right_text_1,right_text_2,title,video_id,video_title} = contents;

const AboutArea = () => {

  return (
    <>
      <div className="ac-about-content-area pt-130">
        <div className="container">
          <div className="ac-border-bottom ac-bottom-space">
            <div className="row">
              <div className="col-xl-6 col-lg-6 wow tpfadeLeft">
                <div className="ac-about-left">
                  <MotionWrapper directions={"bottom"} delay={.4}> <h3 className="ac-ab-title"><a href="#">{title}</a></h3></MotionWrapper>
                 
                  <div className="ac-play-button">
                    <button  className="popup-video">
                      <i className="fas fa-star"></i></button>
                    <span>{video_title}</span>
                  </div>
                </div>
              </div>
              <div className="col-xl- col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
                <div className="ac-about-right">
                  <MotionWrapper directions={"bottom"} delay={.4}><p className="pb-25">{right_text_1}</p></MotionWrapper>
                  
                  <p>{right_text_2}</p>
                </div>
              </div>
            </div>
          </div>
         
           
        </div>
      </div>
    </>
  );
};

export default AboutArea;