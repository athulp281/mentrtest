'use client';

import ImageSlider from '@/components/ImageSlider';
import MotionWrapper from '@/components/MotionWrapper';
import PopupForm from '@/components/PopupForm';
import Link from 'next/link';
import React, { useEffect } from 'react';

const hero_contents = {
  title: <>Not Just a Learning Curve - It’s a Lifelong Loop of<span>Growth.</span> </>,
  text: <>Unlock your potential with continuous, hands-on skill development. Whether you're starting fresh
or leveling up, we’re with you every step of the way.
</>,

  btn_text_2: 'About MentrLoop',
  social_links: [
    { id: 1, icon: 'fab fa-facebook-f social-icon-1', title: 'Facebook',link: 'https://www.facebook.com/profile.php?id=61576718240212' },
    { id: 3, icon: 'fab fa-instagram social-icon-3', title: 'Instagram',link: 'https://www.instagram.com/mentrloop/' },
    { id: 2, icon: 'fab fa-linkedin-in social-icon-2', title: 'Linkedin',link: 'https://www.linkedin.com/company/mentrloop' },
    
  ],
  hero_img: '/assets/img/hero/hero-2.png',
}

const { title, text, btn_text, btn_text_2, social_links, hero_img } = hero_contents;

const HeroArea = () => {

  return (
    <div className="tp-hero-area tp-hero-space p-relative z-index-1 fix">
      <div className="tp-hero-shape">
        <div className="shape-circle-yellow d-none"></div>
        {/* <div className="shape-circle-blue"></div> */}
        <div className="shape-one"><img src="/assets/img/hero/shape-1.png" alt="" /></div>
      </div>
      <div className="tp-hero-wapper">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7">
              <div className="tp-hero-content">
                <div className="tp-hero-text">
                  <MotionWrapper directions={"right"} delay={.4}>
                  <h2 className="tp-hero-title">
                    {title}
                  </h2>
                  </MotionWrapper>
                <MotionWrapper directions={"bottom"} delay={.6}>   <p>{text}</p></MotionWrapper>
                
                 <MotionWrapper directions={"bottom"} delay={.4}>
                  <div className="tp-hero-button mb-140" >
                
                    <Link href="/about-me" className="tp-btn-grey">
                     
                        {btn_text_2}
                        <i className="far fa-arrow-right"></i>
                       
                    </Link>
                    <PopupForm/>
                  </div>
                  </MotionWrapper>
                  {/* <div className="tp-hero-social pb-30">
                    <MotionWrapper directions={"bottom"} delay={.4}>
                    <div className="tp-hero-social bp-hero-social">
                      {social_links.map((l, i) => (
                        <a key={i} className={`social-icon-${l.id}`} href={l.link} target="_blank" rel="noreferrer">
                          
                          <i className={l.icon}></i><span>{l.title}</span>
                        </a>
                      ))}
                    </div>
                    </MotionWrapper>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
               <ImageSlider/>
             
               {/* <MotionWrapper directions={"top"} delay={.4}> <div >
                <img src={hero_img} alt="" />
              </div></MotionWrapper> */}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;