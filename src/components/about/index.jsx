import React from 'react';
import { FooterThree, HeaderSix, Wrapper } from '../../layout';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import CtaTwo from '../common/cta/cta-2';
import AboutArea from './about-area';
import FeatureArea from './feature-area';
import ServicesArea from './services-area';
import TeamArea from './team-area';
import HearTheStory from './HearTheStory';
import WhyChooseUs from './WhyChooseUs';

const About = () => {

  return (
    
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title={'About Mentrloop'} />
      <AboutArea/>
      <FeatureArea/>
      <HearTheStory/>
      <WhyChooseUs/>
      {/* <ServicesArea/> */}
      
      {/* <TeamArea/> */}
      {/* <CtaTwo/> */}
      <FooterThree />
    </Wrapper>
  );
};

export default About;