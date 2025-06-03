import MotionWrapper from '@/components/MotionWrapper';
import Link from 'next/link';
import React from 'react';

const footer_contents = {
  shapes: [
    { num: 'one', img: '/assets/img/creative/creative-hand.png' },
    { num: 'two', img: '/assets/img/service/service-1.png' },
  ],
  title: 'Ready to Build Your Future, Not Just Watch Others Build Theirs?',
  text: 'Take the first step today. Learn real skills, get real results, and start creating your own success story.',
  btn_text: 'Contact us',
  copy_right_text: <>© {new Date().getFullYear()} Personal Portfolio , All Right Received.</>,
  copy_right_menu: ['Case Studies', 'Pricing Plan'],
  social_links: ['fab fa-linkedin-in', 'fab fa-facebook-f', 'fab fa-instagram', 'fab fa-youtube'],
  social_links: [
    {icon: 'fab fa-linkedin-in',link: 'https://www.linkedin.com/' },
    {icon: 'fab fa-facebook-f',link: 'http://facebook.com' },
    {icon: 'fab fa-instagram',link: 'https://www.instagram.com/' },
    {icon: 'fab fa-youtube',link: 'https://www.youtube.com/' },
  ],
}
const { shapes, btn_text, copy_right_menu, copy_right_text, social_links, text, title } = footer_contents;

const ReadyToBuildCta = () => {
  return (
    <footer className="p-relative">
      <div className="tp-footer-area pt-120 p-relative">
        {shapes.map((s, i) => <div key={i} className={`tp-footer-shape-${s.num}`}>
          <img src={s.img} alt="" />
        </div>)}
        <div className="container">
          <div className="row">
            <div className="col-xl-12 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".5s">
              <div className="footer-widget-info text-center">
                <MotionWrapper directions={"bottom"} delay={.4}> <h2 className="tp-footer-title pb-15">{title}</h2></MotionWrapper>
               
              <MotionWrapper directions={"bottom"} delay={.4}>  <p>{text}</p></MotionWrapper> 
              <MotionWrapper directions={"bottom"} delay={.4}> <Link href="/contact" className="tp-btn mb-50">
                 
                    {btn_text}
                    
                </Link></MotionWrapper>
               
               
              </div>
            </div>
          </div>
          <div className="tp-copyright-bottom wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                
              </div>
              {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="tp-cpoyright-menu text-md-start text-center text-lg-center mb-30">
                  {copy_right_menu.map((m, i) => <a key={i} href="#">{m}</a>)}
                </div>
              </div> */}
              {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="tp-copyright-social tp-copyright-social-two text-center text-lg-end mb-30">
                  {social_links.map((s, i) => (
                    <a key={i} href={s.link} target="_blank" rel="noreferrer"><i className={s.icon}></i></a>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ReadyToBuildCta;