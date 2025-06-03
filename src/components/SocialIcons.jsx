'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const socialLinks = [
  {
    icon: 'fab fa-facebook-f',
    url: 'https://www.facebook.com/profile.php?id=61576718240212',
    bg: 'bg-primary',
  },
  {
    icon: 'fab fa-instagram',
    url: 'https://www.instagram.com/mentrloop/',
    bg: 'bg-danger',
  },
  {
    icon: 'fab fa-linkedin-in',
    url: 'https://www.linkedin.com/company/mentrloop',
    bg: 'bg-info',
  },
];

const SocialIcons = () => {
  return (
    <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="position-fixed top-50 translate-middle-y end-0 pe-3 d-flex flex-column gap-3"
  style={{ zIndex: 9999 }} // Critical part
>
  {socialLinks.map((link, index) => (
    <Link
      key={index}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-white d-flex align-items-center justify-content-center ${link.bg}`}
      style={{
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
      }}
    >
      <i className={link.icon}></i>
    </Link>
  ))}
</motion.div>
  );
};

export default SocialIcons;
