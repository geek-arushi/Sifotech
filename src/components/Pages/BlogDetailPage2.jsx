import { Icon } from '@iconify/react'
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Div from '../Div'

import Spacing from '../Spacing'

export default function BlogDetailsPage2() {
  const params = useParams()
  pageTitle('Blog Details');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    {/* Start Page Heading Section */}
      <PageHeading 
        title='Blog Single'
        bgSrc='/images/blog_details_hero_bg.jpeg'
        pageLinkText={params.blogDetailsId}
      />
      {/* End Page Heading Section */}

      {/* Start Blog Details */}
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">

            {/* Start Details Post Content */}
            <Div className="cs-post cs-style2">
              <Div className="cs-post_thumb cs-radius_15">
                <img src="/images/post_7.jpg" alt="Post" className="w-100 cs-radius_15" />
              </Div>
              <Div className="cs-post_info">
                <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                  <span className="cs-posted_by">05 Mar 2025</span>
                  <Link to="/blog" className="cs-post_avatar">Marketing</Link>
                </Div>
                <h2 className="cs-post_title">What Is Social Media Marketing—and Why It Matters More Than Ever</h2>
                <p>Let’s be honest—if your business isn’t on social media in 2025, you’re missing out. Whether you’re selling pizzas, running a salon, managing deliveries, or launching a clothing brand, your audience is already scrolling... the question is: Are they seeing you?</p>
                <blockquote className="cs-primary_font">
                Social media isn’t just about likes or shares anymore—it’s your first handshake with the customer.
                  <small>Sifotech</small>
                </blockquote>
                <p>Think about it—when people hear about your brand, what do they do? They check your Instagram. They look at your reviews. They click on your latest post. That’s your digital first impression.Social media gives you a direct line to your audience. You can answer their questions, share your latest offers, show behind-the-scenes moments, and build a real connection. But doing it right takes more than just pretty posts—it needs strategy, consistency, and a bit of creativity.</p>
                <Div className="row">
                  <Div className="col-md-6">
                    <img src="/images/blog_details_img_8.jpg" alt="Blog Details" className="cs-radius_15 w-100" />
                    <Div className="cs-height_45 cs-height_lg_45" />
                  </Div>
                  <Div className="col-md-6">
                    <img src="/images/blog_details_img_10.jpg" alt="Blog Details" className="cs-radius_15 w-100" />
                    <Div className="cs-height_45 cs-height_lg_45" />
                  </Div>
                </Div>
                <h3>How Sifotech Makes It Simple</h3>
                <p>We get it. Running a business is already a lot. That’s why our team at Sifotech handles social media marketing end-to-end. From planning content calendars to designing eye-catching graphics, writing engaging captions, and even running targeted ads—we do it all so you can focus on what you do best.</p>
                <p> Whether you’re starting fresh or want to give your page a glow-up, we help you grow your presence where it counts.So no, SSM isn’t “just for big brands.” It’s for every local shop, startup, freelancer, and business owner who wants to be seen, remembered, and chosen.</p>
              </Div>
            </Div>
            {/* End Details Post Content */}
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      {/* Start Blog Details */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta   
          title='Let’s disscuse make <br />something <i>cool</i> together' 
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
      {/* End CTA Section */}
    </>
  )
}
