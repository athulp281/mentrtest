import Link from 'next/link';
import React from 'react';
import { portfolio_data } from '../../../data';

const ProjectArea = () => {
  const [category, setCategory] = React.useState('Major Points');
  const items = portfolio_data.filter(p => p.home);
  const [portfolioItems, setPortfolioItems] = React.useState(items.filter(i => i.category === category));
  const categories = [...new Set(items.map(p => p.category))];
  const [isClient, setIsClient] = React.useState(false);

React.useEffect(() => {
  setIsClient(true);
}, []);


  const handleCategory = (c) => {
    setCategory(c)
    const new_items = items.filter(i => i.category === c);
    setPortfolioItems(new_items)
  }

  const bigItems = portfolioItems.filter(i => i.big);
  const sm_items = portfolioItems.filter(i => i.sm);


  return (
    <div className="tp-project-area p-relative pt-130 pb-100">
      <div className="tp-project-shape">
        <img src="assets/img/project/project-shape.png" alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center mb-15">
          <div className="col-xl-5 col-lg-12 col-md-12">
            <div className="tp-project-section-box">
              <h5 className="tp-subtitle">Our Target</h5>
              <h2 className="tp-title">What to Expect after learning. </h2>
            </div>
          </div>
          <div className="col-xl-7 col-lg-12 col-md-12">
            <div className="tp-service-tab-button">
              <nav>
                <div className="nav tp-service-tab justify-content-xl-end justify-content-lg-center" id="nav-tab"
                  role="tablist">
                  {categories.map((c, i) => (
                    <div key={i}>{isClient&&<button onClick={() => handleCategory(c)} key={i}
                      className={`nav-links ${c === category ? 'active' : ''} mb-10`}
                      type="button">{c}</button>}</div>
                    
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="project-tab-main">
          <div className="row gx-1">
            {bigItems.map((item) => (
              <div key={item.id} className="col-xl-6 col-lg-12">
                <div className="tp-project-box mb-20">
                  <div className="tp-project-img fix mb-45">
                    <img className="w-100" src={item.img} alt="" />
                  </div>
                  <div className="tp-project-content ml-20">
                    <h2 className="pro-lg-title">
                      <Link href={`/portfolio-details/${item.id}`}>
                        {/* <a> */}
                          Industry-Ready Skills
                          {/* </a> */}
                      </Link>
                    </h2>
                    <p>Gain hands-on expertise in high-demand fields to stand out in the job market
from day one</p>
                    {/* <Link href={`/portfolio-details/${item.id}`} className="tp-btn-sm">
                     
                        View Case Studies <i className="far fa-arrow-right"></i>
                       
                    </Link> */}
                  </div>
                </div>
              </div>
            ))}
            <div className="col-xl-6 col-lg-12">
              <div className="row">
                {sm_items.map(item => (
                  <div key={item.id} className=" col-xl-12 col-lg-12">
                    <div className="tp-project-box-sm d-flex align-items-center mb-20">
                      <div className="tp-project-sm-img fix ml-25 mr-35">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="tp-project-sm-content">
                        <h3 className="pro-sm-title">
                          <Link href={`/portfolio-details/${item.id}`}>
                            {/* <a> */}
                              {item.title}
                              {/* </a> */}
                          </Link>
                        </h3>
                        <p>{item.sm_text}</p>
                        {/* <Link href={`/portfolio-details/${item.id}`} className="tp-btn-white-sm">
                          
                            Case Studies 
                          <i className="far fa-arrow-right"></i>
                         
                        </Link> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectArea;