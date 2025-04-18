import React from 'react';
import Div from '../Div';
import './logolist.scss';
const partnerLogos = [
  {
    src: '/images/partner_1.png',
    alt: 'Partner',
  },
  {
    src: '/images/partner_2.png',
    alt: 'Partner',
  },
  {
    src: '/images/partner_3.png',
    alt: 'Partner',
  },
  {
    src: '/images/partner_4.png',
    alt: 'Partner',
  },
  {
    src: '/images/partner_5.png',
    alt: 'Partner',
  },
  {
    src: '/images/partner_6.png',
    alt: 'Partner',
  },
  
];

export default function LogoList() {
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => (
        <div className="cs-partner_logo" key={index}>
          <img src={partnerLogo.src} alt={partnerLogo.alt} />
        </div>
      ))}
    </Div>
  );
}
