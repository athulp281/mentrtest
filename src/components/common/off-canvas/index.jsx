"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import menu_data from '../../../layout/headers/menu-data';

const sidebar_contents = {
  title: <>Unlock your potential with continuous, hands-on skill development. Whether you're starting fresh or leveling up, we’re with you every step of the way.</>,
  inst_imgs: [
    '/assets/img/offcanvas/insta-1.jpg',
    '/assets/img/offcanvas/insta-2.jpg',
    '/assets/img/offcanvas/insta-4.jpg',
    '/assets/img/offcanvas/insta-4.jpg',
  ]
}
const { inst_imgs, title } = sidebar_contents;

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [navTitle, setNavTitle] = useState('')

  const openMobileMenu = (menu) => {
    if(navTitle === menu){
      setNavTitle('')
    }
    else {
      setNavTitle(menu)
    }
  };
  return (
    <>
      <div className="tp-offcanvas-area">
        <div className={`tpoffcanvas ${isOpen ? 'opened' : ''}`}>
          <div className="tpoffcanvas__logo">
            <Link href="/">
              
                <img src="/assets/img/logo/logo-blue.png" alt="" />
              
            </Link>
          </div>
          <div className="tpoffcanvas__close-btn" onClick={() => setIsOpen(false)}>
            <button className="close-btn"><i className="fal fa-times-hexagon"></i></button>
          </div>
          <div className="tpoffcanvas__content d-none d-sm-block">
            <p>{title}</p>
          </div>
          <div className="mobile-menu d-lg-none">
            <div className="mm-menu">
              <ul>
                {menu_data.map((menu, i) => (
                 <li key={i} className={!menu.has_dropdown ? '' : navTitle === menu?.title ? "has-droupdown active" : "has-droupdown"}>
                    {menu.has_dropdown && <button  onClick={() => openMobileMenu(menu.title)}>{menu.title} </button>}
                    <ul className={navTitle === menu?.title ? "sub-menu active" : "sub-menu"}>
                      {menu?.sub_menus?.map((sub,i) => (
                      <li key={i}><Link href={`${sub.link}`}>{sub.title}</Link></li>
                      ))}
                    </ul>
                    {!menu.has_dropdown && <Link href={menu.link}>{menu.title}</Link>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tpoffcanvas__contact">
            <span>Contact us</span>
            <ul>
              <li>
                <i className="fas fa-star"></i> <a href="https://maps.app.goo.gl/Kf2CdEfBBZ6nwpqQ7" rel="noreferrer" target="_blank">A1 residency hi homes kuravankonam kowadir, Trivandrum pin:695003</a>
              </li>

              
              <li><i className="fas fa-star"></i><a href="tel:7306426656">+91 7306426656</a></li>
              <li><i className="fas fa-star"></i><a href="mailto:Info@mentrloop.com">Info@mentrloop.com</a></li>
            </ul>
          </div>
          <div className="tpoffcanvas__input d-none d-sm-block">
            <p>Get UPdate</p>
            <form className="p-relative" action="#">
              <input type="text" placeholder="Enter mail" />
              <button type="submit"><i className="fas fa-paper-plane"></i></button>
            </form>
          </div>
          {/* <div className="tpoffcanvas__instagram d-none d-sm-block">
            <p>Check Instagram POst</p>
            <div className="tp-insta">
              <div className="row">
                {inst_imgs.map((img, i) => (
                  <div key={i} className="col-3 col-sm-3"><a href="#">
                    <img src={img} alt="" /></a>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* overlay start */}
      <div onClick={() => setIsOpen(false)} className={`body-overlay ${isOpen ? 'apply' : ''}`}></div>
      {/* overlay end */}
    </>
  );
};

export default Sidebar;