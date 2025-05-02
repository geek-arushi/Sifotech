import { Icon } from '@iconify/react'
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Div from '../Div'
import Sidebar from '../Sidebar.jsx'
import Spacing from '../Spacing'

export default function BlogDetailsPage() {
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
                <img src="/images/post_5.jpg" alt="Post" className="w-100 cs-radius_15" />
              </Div>
              <Div className="cs-post_info">
                <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                  <span className="cs-posted_by">05 Mar 2025</span>
                  <Link to="/blog" className="cs-post_avatar">Tech</Link>
                </Div>
                <h2 className="cs-post_title">The Rise of AI: Threat or Tool?</h2>
                <p>Artificial Intelligence is everywhere these days. It’s in the apps we use, the ads we see, even the way businesses reply to our messages. AI isn’t just a buzzword anymore—it’s real, and it’s changing things fast. But here's the big question: Should we be scared of it? Or should we be learning how to work with it?</p>
                <blockquote className="cs-primary_font">
                It’s not about AI taking over. It’s about how we choose to work with it. The future belongs to those who adapt.
                  <small>Sifotech</small>
                </blockquote>
                <p>Let’s be honest—we’ve all seen the headlines. “AI is coming for your job,” “Robots replacing humans,” and so on. It sounds scary, but the reality is much more balanced. Yes, AI is automating some tasks. It’s helping companies respond faster, sort through data quicker, and even predict what customers might do next. But it’s also creating new roles, tools, and opportunities for those ready to learn.</p>
                <Div className="row">
                  <Div className="col-md-6">
                    <img src="/images/blog_details_img_1.jpg" alt="Blog Details" className="cs-radius_15 w-100" />
                    <Div className="cs-height_45 cs-height_lg_45" />
                  </Div>
                  <Div className="col-md-6">
                    <img src="/images/blog_details_img_2.jpg" alt="Blog Details" className="cs-radius_15 w-100" />
                    <Div className="cs-height_45 cs-height_lg_45" />
                  </Div>
                </Div>
                <h3>AI Isn’t Replacing You—It’s Helping You Work Smarter</h3>
                <p> AI is amazing at doing boring, repetitive stuff. Think data entry, simple customer support, or scheduling posts. That means humans get more time to do what we’re best at—being creative, thinking critically, and solving real-world problems.</p>
                <p>At Sifotech, we help businesses tap into that power. Whether it’s building an AI-powered chatbot, streamlining how you get online orders, or helping you track what your customers really want—we create tools that make your life easier, not harder.So no, AI isn’t here to steal your job. But someone who knows how to use AI just might.</p>
              </Div>
            </Div>
            {/* End Details Post Content */}

            

            {/* Start Comment Section */}
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            {/* Start Sidebar */}
            <Spacing lg='0' md='80'/>
            <Sidebar />
            {/* End Sidebar */}
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
