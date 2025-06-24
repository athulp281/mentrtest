import MotionWrapper from '@/components/MotionWrapper';
import Link from 'next/link';
import React from 'react';

const about_contents = {
  about_img: '/assets/img/about/coo.png',
  subtitle: 'COO Talks',
  title: <>A Word From Our  <span className="tp-section-highlight"> COO
    <svg width="247" height="12" viewBox="0 0 247 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M-0.000488281 0L247 12H-0.000488281V0Z" fill="#FFDC60" />
    </svg> </span> </>,
  sm_desc: 'Learning a skill isn’t just about getting better at something — it’s about unlocking new possibilities for your future. When you know how to build, design, market, or code, you are not just job-ready… you are startup-ready '
,
sm_desc_second:"I’ve seen firsthand how one good skill can spark an idea, and how that idea can grow into a successful business. That’s why we’re here — to help you build that foundation. Whether you want to start something of your own or join a growing team, the skills you learn with us will give you the confidence and capability to move forward with purpose",
  btn_text: 'About Collax'
}
const { about_img, btn_text, sm_desc, subtitle, title,sm_desc_second } = about_contents;

const CooArea = () => {
  return (
    <div className="tp-about-area  pt-120 pb-120 p-relative fix">
      <Shape shape_class="sm-1" img='chose/hero-shape-5.1.png' />
      <Shape shape_class="sm-2" img='chose/bp-chose-5.2.png' />
      <div className="bp-about-shape d-none d-md-block">
        <img src="/assets/img/about/about-shape-6.1.png" alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-5 ">
             <MotionWrapper directions={"bottom"} delay={.4}>
            <div className="bp-about-img">
              <img src={about_img} alt="" />
            </div>
            </MotionWrapper>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-10 col-12 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="tp-feature-section-title-box bs-section-title-space">
                 <MotionWrapper directions={"top"} delay={.4}>
              <h5 className="tp-subtitle tp-subtitle-before-color pb-10">{subtitle}</h5>
              </MotionWrapper>
               <MotionWrapper directions={"bottom"} delay={.4}>
              <h2 className="tp-title tp-title-sm">{title}</h2>
              </MotionWrapper>
               <MotionWrapper directions={"right"} delay={.4}>
              <p className="pb-25">{sm_desc}</p>
               <p className="pt-10">{sm_desc_second}</p>
               </MotionWrapper>
              <div style={{display:"flex",justifyContent:"flex-end",marginTop:20}}>
               Aamir Shah COO, MentrLoop
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CooArea;

const Shape = ({ shape_class, img }) => {
  return (
    <div className={`bs-about-${shape_class} d-none d-lg-block`}>
      <img src={`/assets/img/${img}`} alt="" />
    </div>
  )
}