import Link from 'next/link';
import React from 'react';
import { blog_data } from '../../../data';
import MotionWrapper from '@/components/MotionWrapper';

const blog_contents = {
  shapes: ['blog/hero-shape-5.1.png', 'testimonial/testimonial-shape-5.3.png'],
  subtitle: 'Our Team',
  title: <>Meet our <span>mentors</span> </>,
  blog_items: blog_data.filter(b => b.home_6),
}
const { subtitle, title, shapes, blog_items } = blog_contents;

const OurMentorNew = () => {
  return (
    <div className="tp-blog-area  bg-radius-none pt-125 pb-100 p-relative">
      {shapes.map((s, i) => (
        <div key={i} className={`bs-blog-shape-${i + 1} d-none d-lg-block`}>
          <img src={`/assets/img/${s}`} alt="" />
        </div>
      ))}
      <div className="container">
        <div className="row gx-0 justify-content-center">
          <div className="col-xl-8">
            <div className="tp-project-section-box text-center">
                <MotionWrapper directions={"top"} delay={.4}><h5 className="tp-subtitle tp-subtitle-before-color">{subtitle}</h5></MotionWrapper>
                <MotionWrapper directions={"bottom"} delay={.4}>
              <h2 className="tp-title-sm pb-65">{title}</h2>
              </MotionWrapper>
            </div>
          </div>
        </div>
        <div className="row">
          {blog_items.map((item,i) => {
            const { id, img, meta_tag, short_desc, duration, delay, title } = item;
            return (

              <div key={id} className="col-xl-4 col-lg-4 col-md-6" >
                  <MotionWrapper directions={"bottom"} delay={i}>
                <div className="bpblog">
                  <div className="bpblog__item mb-30">
                    <div className="bpblog__img w-img fix">
                      <Link href={`/blog-details/${id}`}>
                            <img src={img} alt="" />
                      </Link>
                    </div>
                    <div className="bpblog__content">
                      <span><a href="#">{meta_tag}</a></span>
                      <h4 className="bp-blog-title">
                        <MotionWrapper directions={"left"} delay={.4}>
                        <Link href={`/blog-details/${id}`}>
                        
                            {title}
                          
                        </Link>
                        </MotionWrapper>
                      </h4>
                      <MotionWrapper directions={"bottom"} delay={.4}><p className="m-0">{short_desc}...</p></MotionWrapper>
                      
                    </div>
                  </div>
                </div>
                </MotionWrapper>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  );
};

export default OurMentorNew;