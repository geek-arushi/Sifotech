import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Accordion from '../Accordion'
import Button from '../Button'
import Cta from '../Cta'
import IconBox from '../IconBox'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'

export default function ServiceDetailsPage() {
  pageTitle('Service Details');
  const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageHeading 
        title='Service Details'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText={params.serviceDetailsId}
      />
      <Spacing lg='145' md='80'/>
      <Div className="container">
        <SectionHeading 
          title='Design working process' 
          subtitle='UI/UX Design' 
          variant='cs-style1 text-center'
        />
        <Spacing lg='90' md='45'/>
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_1.svg'
              title='Sketching'
              subtitle='We begin with rough sketches and ideation to explore concepts, understand user needs, and lay the foundation for intuitive design. This stage allows us to think freely, fail fast, and innovate early.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_2.svg'
              title='Wireframing'
              subtitle='Here, structure meets purpose. We build low-fidelity wireframes to map out the layout, flow, and user interactions—ensuring every element serves a functional role before the visuals begin.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_3.svg'
              title='Prototyping'
              subtitle='We bring ideas to life through clickable prototypes that simulate real-user experiences. This step helps us validate usability, collect feedback, and refine interactions—before any code is written.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
        </Div>
      </Div>
      <Spacing lg='120' md='50'/>
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img src="/images/service_img_1.jpeg" alt="Service" className='cs-radius_15 w-100' />
            </Div>
            <Spacing lg='0' md='40'/>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">Below our most design related services</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-lg-6">
                <Button btnLink='/service/service-details' btnText='Performance Optimization' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Cross-Platform App Development' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Native App Development' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Progressive Web Apps (PWAs)' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='CMS-Based Solutions' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Legacy System Modernization' variant='cs-type2'/>
                <Spacing lg='0' md='10'/>
              </Div>
              <Div className="col-lg-6">
                <Button btnLink='/service/service-details' btnText='IT Consulting & Digital Transformation' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Maintenance & Support' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='DevOps & Cloud Services' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Web Development' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Custom Software Development' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Mobile App Development' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <TestimonialSlider />
      <Spacing lg='145' md='80'/>
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title='Some pre questions and answers' 
                subtitle='FAQ’s'
              />
              <Spacing lg='90' md='45'/>
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion/>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title='Let’s disscuse make <br />something <i>cool</i> together' 
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
