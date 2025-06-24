import Link from 'next/link';
import React from 'react';
import MotionWrapper from '../MotionWrapper';

function FeatureItem({ title, subtitle, color }) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6">
      <div className='acfeature mb-50'>
        <div className={`ac-circle ${color ? `ac-cirle-color-${color}` : ''}`}></div>
        <div className="acfeature__item">
          <h3 className="ac-feature-sm-title">
            <Link href="/about-me">
              {title}
            </Link>
          </h3>
          <p style={{display:"flex",textAlign:"justify"}}>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

const contents = {
  title: 'Creating world class experiences',
  sm_desc_1: "Collax builds digital products that let people do things differently. Share your challenge with our team, and we’ll work with you to deliver a revolutionary digital product. Our clients have changed the way people do banking, listen to music.",
  sm_desc_2: "learn languages, and rent bikes. Their products have been featured in TechCrunch, Business Insider, and Product Hunt"
}
const { title, sm_desc_1, sm_desc_2 } = contents;

const FeatureArea = () => {
  return (
    <>
      <div className="ac-feature-area">
        <div className="container">
          <div className="ac-feature-border-top">
            <MotionWrapper directions={"bottom"} delay={.4}>
            <div className="row">
              <FeatureItem title={'Mission'}
                subtitle={'We are dedicated to igniting confidence, creativity, and self-reliance by providing real-world skills and startup mentorship tailored for today’s dynamic world. Whether you’re dreaming of launching your own business or simply want to build skills that matter, Mentrloop is here to support your journey.'} />
              <FeatureItem title={'Vission'} color={'2'}
                subtitle={'We envision a world where anyone can transform their ideas into thriving startups while mastering essential life and business skills needed to succeed in the 21st century. Mentrloop aims to be the leading platform where innovation meets practicality and community. '} />
              <FeatureItem title={'Values'} color={'3'}
                subtitle={'Mentrloop stands for empowerment, practical learning, and bold, entrepreneurial thinking. We make education accessible, build strong communities, and lead with integrity in everything we do.'} />
            </div>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;