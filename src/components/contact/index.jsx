"use client";
import React from 'react';
import { FooterThree, HeaderSix, Wrapper } from '../../layout';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ContactArea from './contact-area';


const Contact = () => {

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title={'Contact'} />
      <ContactArea/>
      <FooterThree />
    </Wrapper>
  );
};

export default Contact;