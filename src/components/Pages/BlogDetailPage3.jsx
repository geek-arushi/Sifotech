import { Icon } from '@iconify/react'
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Div from '../Div'
import Sidebar from '../Sidebar.jsx'
import Spacing from '../Spacing'

export default function BlogDetailsPage3() {
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
                <img src="/images/post_2.jpg" alt="Post" className="w-100 cs-radius_15" />
              </Div>
              <Div className="cs-post_info">
                <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                  <span className="cs-posted_by">05 Mar 2025</span>
                  <Link to="/blog" className="cs-post_avatar">Marketing</Link>
                </Div>
                <h2 className="cs-post_title">What Is SEO—and Why Every Business (Yes, Yours Too) Needs It</h2>
                <p>Ever wondered how some websites show up first on Google... while others are stuck on page 5? That’s not luck—it’s SEO. And if you run a business in 2025, SEO isn’t optional anymore. It’s how people find you.</p>
                <blockquote className="cs-primary_font">
                If your business isn’t showing up on Google, it’s like it doesn’t exist at all.
                  <small>Sifotech</small>
                </blockquote>
                <p>SEO stands for Search Engine Optimization. It’s the art (and science) of making your website rank higher in search engines like Google. Whether someone’s searching for “best pizza near me” or “affordable courier services UK,” SEO helps make sure your business shows up—before your competitors do. SEO is more than just throwing keywords into your content. It’s about creating a fast, user-friendly website with the right mix of technical setup, helpful content, and strategic tweaks.</p>
                <Div className="row">
                  <Div className="col-md-6">
                    <img src="/images/blog_details_img_11.jpg" alt="Blog Details" className="cs-radius_15 w-100" />
                    <Div className="cs-height_45 cs-height_lg_45" />
                  </Div>
                  <Div className="col-md-6">
                    <img src="/images/blog_details_img_12.jpg" alt="Blog Details" className="cs-radius_15 w-100" />
                    <Div className="cs-height_45 cs-height_lg_45" />
                  </Div>
                </Div>
                <h3>How Sifotech Helps You Get Found Online</h3>
                <p> We know SEO sounds a bit technical—and honestly, it is. But that’s where we come in. At Sifotech, we make SEO simple for business owners. Our team handles everything from website audits to on-page SEO, content planning, local search optimisation, and monthly performance tracking.</p>
                <p>SEO is how you make sure you’re the answer. It's not a one-time trick. It’s an ongoing strategy. But done right, it keeps working for you even while you sleep.</p>
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
