import React from 'react';
import useModal from '../../../hooks/use-modal';
import VideoModal from '../../common/modals/modal-video';
import MotionWrapper from '@/components/MotionWrapper';

const creative_contents = {
  shape_1: '/assets/img/hero/shape-2.png',
  creative_shapes: [
    { img: '/assets/img/creative/creative-hand.png' },
    { img_2: '-2', img: '/assets/img/creative/creative-circle-img.png' },
  ],
  title: <>Why <b>Skill</b>  Learning Matters: A Pathway to Growth, Adaptability, and Future Success</>,
  video_id: 'PO_fBTkoznc',
  video_title: 'Highlights That Make the Difference',
  creative_box: [
    { id: 1, duration: '.3s', delay: '.6s',color: 'tp-cardbg-1', icon: 'fas fa-briefcase', box_title: ',', 
    box_text: 'Career Growth & Opportunity' },
    {
      id: 2, duration: '.5s', delay: '.8s', color: 'tp-cardbg-2', icon: 'fas fa-user-check',
      box_title: ',', box_text: 'Boost Confidence & Independence'
    },
    {
      id: 3, duration: '.7s', delay: '1s', color: 'tp-cardbg-3', icon: 'fas fa-lightbulb',
      box_title: ',', box_text: 'Improve Problem Solving & Creativity'
    },
    {
      id: 4, duration: '.7s', delay: '1s', color: 'tp-cardbg-4', icon: 'fas fa-clock',
      box_title: ',', box_text: 'Increase Productivity & Efficiency'
    },
    {
      id: 5, duration: '.7s', delay: '1s', color: 'tp-cardbg-1', icon: 'fas fa-seedling',
      box_title: ',', box_text: 'Enhance Life Long Self Growth'
    },
    {
      id: 6, duration: '.7s', delay: '1s', icon: 'fas fa-lightbulb',color: 'tp-cardbg-2',
      box_title: ',', box_text: 'Supports Entrepreneurship & Innovation'
    },
  ]
}

const {shape_1,creative_shapes,title,video_id,video_title,creative_box } = creative_contents;

const CreativeArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  const [isClient, setIsClient] = React.useState(false);

React.useEffect(() => {
  setIsClient(true);
}, []);

  return (
    <>
      <div className="p-relative">
        <div className="shape-two z-index-1">
          <img src={shape_1} alt="" />
        </div>
        <div className="tp-creative-area p-relative white-bg pt-140 pb-135 fix">
         <div className="circle-animation service">
        <span className="tp-circle-1"></span>
        <span className="tp-circle-2"></span>
      </div>
          {/* {creative_shapes.map((s, i) => (
            <div key={i} className={`creative-shape-img${s.img_2 ? s.img_2 : ''}`}>
              <img src={s.img} alt="" />
            </div>
          ))} */}
          <div className="container creative-z-index ">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-creative-box text-center">
                  <div className="tp-creative-content mb-110">
                   <MotionWrapper directions={"top"} delay={.4}><h4 className="tp-creative-title">{title}</h4></MotionWrapper> 
                  </div>
                  <div className="tp-play-button mb-150">
                    {isClient && (
                    <button className="popup-video" onClick={() => setIsVideoOpen(true)}>
                     <i className="fas fa-star"></i>
                    </button>
                    )}
                    <span>{video_title}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="creative-box pl-40 pr-40">
              <div className="row gx-5">
                {creative_box.map((b,i) => (
                  
                  <div key={b.id} className="col-lg-4 col-md-12 col-xs-12 mb-30">
                    <MotionWrapper directions={"bottom"} delay={.4}>
                    <div className={`tp-creative-item ${b?.color}`}>
                      <div className="tp-creative-yellow d-flex align-items-center">
                        <div className="tp-creative-icon mr-35">
                          <i className={b.icon}></i>
                        </div>
                        <div className="counter-text">
                          {/* <span>{b.box_title}</span> */}
                          <p className="m-0"><b>{b.box_text}</b></p>
                        </div>
                      </div>
                    </div>
                    </MotionWrapper>
                  </div>
                  
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default CreativeArea;