"use client";

import React from 'react';
import { Footer, Header, Wrapper } from '../../../layout/';
import BlogArea from './blog-area';
import BrandArea from './brand-area';
import CreativeArea from './creative-area';
import HeroArea from './hero-area';
import NewsLetter from './news-letter';
import ProjectArea from './project-area';
import ServicesArea from './services-area';
import Testimonial from './testimonial';
import CooArea from './CooArea';
import OurMentors from './OurMentors';

const Home = () => {
 

  return (
    <Wrapper>
      <Header />
      <HeroArea />
      <CreativeArea />
      <BrandArea />
      <ServicesArea />
      <ProjectArea />
      <CooArea />
      <OurMentors/>
      {/* <Testimonial />
      <BlogArea /> */}
      <NewsLetter />
      <Footer />
    </Wrapper>
  );
};

export default Home;
