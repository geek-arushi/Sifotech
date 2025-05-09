import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import FunFact from '../FunFact';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import TeamSlider from '../Slider/TeamSlider';
import Spacing from '../Spacing';
const funfaceData = [
  {
    title: 'Global Happy Clients',
    factNumber: '2K',
  },
  {
    title: 'Project Completed',
    factNumber: '5K',
  },
  {
    title: 'Team Members',
    factNumber: '30',
  },
  {
    title: 'Digital products',
    factNumber: '150',
  },
];

export default function AboutPage() {
  pageTitle('About');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="About Us"
        bgSrc="images/about_hero_bg.jpeg"
        pageLinkText="About Us"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Your digital growth partner"
              subtitle="About Our Agency"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              At Sifotech, we are passionate about driving digital transformation and empowering businesses to thrive in the digital age. Based in the UK, we specialize in providing cutting-edge digital marketing and technology solutions that help our clients achieve sustainable growth and digital success. With a deep understanding of the ever-evolving digital landscape, we leverage our technical expertise and creative insights to deliver impactful solutions that make a lasting difference.


              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/about_img_1.jpg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <img
              src="/images/about_img_2.jpg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <img
              src="/images/about_img_3.jpg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Fun Fact Section */}
      <Div className="container">
        <FunFact
          title="Our fun fact"
          subtitle="Behind every number is a story of innovation, collaboration, and results. From scaling startups to transforming enterprises, our journey is powered by purpose and driven by data."
          data={funfaceData}
        />
      </Div>
      {/* End Fun Fact Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/about_img_4.jpg"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-6 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Why Sifotech is Your Digital Growth Partner"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              Our mission is to bridge the gap between businesses and their digital potential by offering innovative technology solutions and data-driven marketing strategies. We aim to transform the digital journey of businesses by enhancing their online presence, optimizing performance, and building meaningful customer relationships.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
              Our vision is to become a globally recognized leader in digital transformation, known for our commitment to excellence, customer satisfaction, and continuous innovation. We strive to empower businesses with the tools and strategies they need to succeed in a digitally connected world.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start Team Section */}
      {/* <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div> */}
      {/* End Team Section */}

      {/* Start CTA Section */}
      <Spacing lg="150" md="80" />
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
