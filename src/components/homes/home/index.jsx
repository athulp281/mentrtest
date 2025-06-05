"use client";

import React from 'react';
import { Footer, FooterThree, Header, Wrapper } from '../../../layout/';
import BlogArea from './blog-area';
import BrandArea from './brand-area';
import CreativeArea from './creative-area';
import HeroArea from './hero-area';
import NewsLetter from './news-letter';
import ProjectArea from './project-area';
import ServicesArea from './services-area';
import Testimonial from './testimonial';
import CooArea from './CooArea';
import ReadyToBuildCta from './ReadyToBuildCta';
import OurMentorNew from './OurMentorNew';
import SocialIcons from '@/components/SocialIcons';

const Home = () => {
 

  return (
    <Wrapper>
      <Header />
      <HeroArea />
      <SocialIcons/>
      <CreativeArea />
      <BrandArea />
      <ServicesArea />
      <ProjectArea />
      <CooArea />
      <OurMentorNew/>
      {/* <Testimonial />
      <BlogArea /> */}
      <ReadyToBuildCta/>
      {/* <NewsLetter /> */}
      {/* <Footer /> */}
       <FooterThree/>
    </Wrapper>
  );
};

export default Home;
