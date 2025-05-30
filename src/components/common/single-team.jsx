import Link from 'next/link';
import React from 'react';
import MotionWrapper from '../MotionWrapper';

const SingleTeam = ({ team }) => {
  const { id, img, name, title, delay, duration, social_links,desc } = team;
  return (
    <div className="col-xl-3 col-lg-3 col-md-6">
       <MotionWrapper directions={"bottom"} delay={.6}>
      <div className="tpteam mb-30">
        <div className="tpteam__shape-1">
          <img src="assets/img/team/team-shape-5.1.png" alt="" />
        </div>
        <div className="tpteam__shape-2">
          <img src="assets/img/team/team-shape-5.2.png" alt="" />
        </div>
        <div className="tpteam__thumb">
          <img className="w-100" src={img} alt="" />
        </div>
        <div className="tpteam__content">
          <h4 className="tp-team-sm-title">
            <Link href={`/about-me/${id}`}>
              
                {name}
                
            </Link>
          </h4>
          <h5 className="tp-team-sm-subtitle"><a href="#">{title}</a></h5>
            <h6 className="tp-team-sm-subtitle" style={{padding:10,textAlign:"justify"}}><a href="#">{desc}</a></h6>
          {/* {social_links.map((l, i) => <a key={i} href={l.link}
            target={l.target}><i className={l.icon}></i></a>)} */}
        </div>
      </div>
      </MotionWrapper>
    </div>
  );
};

export default SingleTeam;