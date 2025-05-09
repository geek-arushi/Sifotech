import React, { useEffect, useState } from 'react';
import Hero4 from '../Hero/Hero4';
import { pageTitle } from '../../helper';
import Button from '../Button';
import Div from '../Div';
import FunFact2 from '../FunFact/FunFact2';
import Spacing from '../Spacing';
import SectionHeading from '../SectionHeading';
import MovingText2 from '../MovingText/MovingText2';
import Portfolio from '../Portfolio';
import { Icon } from '@iconify/react';
import TimelineSlider from '../Slider/TimelineSlider';
import TestimonialSlider from '../Slider/TestimonialSlider';
import Cta from '../Cta';
import LogoList from '../LogoList';
import PostList from '../Post/PostList';

const heroSocialLinks = [
  {
    name: '',
    links: '/',
  },
];

const funfaceData = [
  {
    title: 'Digital Products',
    factNumber: '150',
  },
  {
    title: 'Clients Around the Globe',
    factNumber: '2K',
  },
  {
    title: 'Successfull Projects',
    factNumber: '5k',
  },
  {
    title: 'Team Members',
    factNumber: '30',
  },
];

const serviceData1 = [
  { title: 'UI/UX Design', href: '/service/service-details' },
  { title: 'Marketing', href: '/service/service-details' },
  { title: 'Branding', href: '/service/service-details' },
];

const serviceData2 = [
  { title: 'SEO', href: '/service/service-details' },
  { title: 'App design', href: '/service/service-details' },
  { title: 'React Developer', href: '/service/service-details' },
];

export default function DigitalAgencyHome() {
  const [itemShow, setItemShow] = useState(6);
  pageTitle('Digital Agency');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Start Hero Section */}
      <Hero4
        title="We Are <span>S</span>ifotech<br />Digital Agency"
        subtitle="Solving real problems with creative digital solutions – we design, develop, and deliver top-tier results for today and tomorrow.s"
        scrollDownId="#service"
        socialLinksHeading=""
        heroSocialLinks={heroSocialLinks}
        phoneNumber="contact@sifotech.co.uk"
        email="hr@sifotech.co.uk"
      />
      {/* End Hero Section */}

      {/* Start Funfact Section */}
      <Div className="container">
        <FunFact2
          data={funfaceData}
          variant="cs-type1"
          bgUrl="/images/funfact_shape_bg.svg"
        />
      </Div>
      {/* End Funfact Section */}

      {/* Start Moving Text Section */}
      <MovingText2 data={serviceData1} />
      <Spacing lg="20" md="10" />
      <MovingText2 reverseDirection data={serviceData2} />
      {/* End Moving Text Section */}

      {/* Start About Section with Media Player */}
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-5 col-xl-4">
              <SectionHeading
                title="Uk’s best digital agency ever"
                subtitle="Why Choose Us"
                btnText="Learn More"
                btnLink="/about"
              />
              <Spacing lg="45" md="45" />
            </Div>
            <Div className="col-lg-7 offset-xl-1">
              <Div className="cs-radius_15 overflow-hidden">
                <video
                  className="w-100 cs-radius_15"
                  src="/video/LOGO.mp4"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End About Section */}
       {/* Start Our Services */}
       <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="What we provide"
          subtitle="Services"
          variant="cs-style1 text-center"
        />
        <Spacing lg="65" md="45" />
      </Div>
      <Spacing lg="120" md="50" />
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img src="/images/service_img_1.jpg" alt="Service" className="cs-radius_15 w-100" />
            </Div>
            <Spacing lg="0" md="30" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">Below our most design related services</h2>
            <Spacing lg="50" md="30" />
            <Div className="row">
              <Div className="col-lg-6">
                <Button btnLink="/service/service-details" btnText="Performance Optimization" variant="cs-type2" />
                <Spacing lg="20" md="10" />
                <Button btnLink="/service/service-details" btnText="Cross-Platform App Development" variant="cs-type2" />
                <Spacing lg="20" md="10" />
                <Button btnLink="/service/service-details" btnText="Native App Development" variant="cs-type2" />
                <Spacing lg="20" md="10" />
                <Button btnLink="/service/service-details" btnText="Progressive Web Apps (PWAs)" variant="cs-type2" />
                <Spacing lg="20" md="10" />
                <Button btnLink="/service/service-details" btnText="CMS-Based Solutions" variant="cs-type2" />
                <Spacing lg="20" md="10" />
                <Button btnLink="/service/service-details" btnText="Legacy System Modernization" variant="cs-type2" />
              </Div>
              <Div className="col-lg-6">
                <Button btnLink="/service/service-details" btnText="IT Consulting & Digital Transformation" variant="cs-type2" />
                <Spacing lg="20" md="10" />
                <Button btnLink="/service/service-details" btnText="Maintenance & Support" variant="cs-type2" />
                <Spacing lg="20" md="10" />
                <Button btnLink="/service/service-details" btnText="DevOps & Cloud Services" variant="cs-type2" />
                <Spacing lg="20" md="10" />
                <Button btnLink="/service/service-details" btnText="Web Development" variant="cs-type2" />
                <Spacing lg="20" md="10" />
                <Button btnLink="/service/service-details" btnText="Custom Software Development" variant="cs-type2" />
                <Spacing lg="20" md="10" />
                <Button btnLink="/service/service-details" btnText="Mobile App Development" variant="cs-type2" />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Our Services */}

      {/* Start Awards Section */}
      <Spacing lg="140" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-4">
            <SectionHeading
              title="We get multiple projects"
              subtitle="Our Services"
              variant="cs-style1"
            />
            <Spacing lg="90" md="45" />
          </Div>
          <Div className="col-xl-7 offset-xl-1">
            <TimelineSlider />
          </Div>
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      {/* End Awards Section */}

     

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Spacing lg="145" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-5 col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="45" md="45" />
            </Div>
            <Div className="col-lg-7 offset-xl-1">
              <PostList />
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      {/* End Blog Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <SectionHeading
          title="Our reputed partner"
          subtitle="Top Clients"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}