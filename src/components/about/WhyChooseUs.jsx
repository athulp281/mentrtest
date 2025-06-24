import Link from 'next/link';
import React from 'react';
import MotionWrapper from '../MotionWrapper';



const contents = {
  title: 'Why Choose Us',
  sm_desc_1: "At Mentrloop, we go beyond traditional learning. We blend practical skill development with startup guidance, giving you the tools to not just dream—but do. Whether you're an aspiring entrepreneur or simply looking to build everyday skills, our programs are designed to be real, relevant, and result-driven.",
  sm_desc_2: "You’ll learn from mentors who’ve done it, not just read about it. Our community is supportive, our approach is hands-on, and our goal is simple: to help you grow with confidence and clarity.Join Mentrloop—and start building your future today."
}
const { title, sm_desc_1, sm_desc_2 } = contents;

const WhyChooseUs = () => {
  return (
    <>
      <div className="ac-feature-area">
        <div className="container">
          <div className="row ac-feature-space">
            <div className="col-xl-6 col-lg-6">
              <div className="ac-feature-left">
                <MotionWrapper directions={"bottom"} delay={.4}><h3 className="ac-feature-title">{title}</h3></MotionWrapper>  
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="ac-feature-right">
                <MotionWrapper directions={"bottom"} delay={.4}><p className="pb-25">{sm_desc_1}</p></MotionWrapper> 
               <MotionWrapper directions={"bottom"} delay={.4}> <p>{sm_desc_2}</p></MotionWrapper> 
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;