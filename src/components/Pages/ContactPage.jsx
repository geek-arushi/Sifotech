import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import { pageTitle } from '../../helper';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import ContactInfoWidget from '../Widget/ContactInfoWidget';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    ProjectType: '',
    Phone: '',
    Message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwCkKiPFHtUW4gm3v_aXsEPRoc2N1jS-0q51c6o6sNU9w0ttV8c1w4HAlDcm07coeHg0Q/exec'; // 🔥 put your script URL here

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', // important for avoiding CORS issues
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      alert('Message sent successfully!');
      setFormData({
        Name: '',
        Email: '',
        ProjectType: '',
        Phone: '',
        Message: '',
      });
    } catch (error) {
      console.error('Error!', error.message);
      alert('Something went wrong. Please try again.');
    }
  };

  useEffect(() => {
    pageTitle('Contact Us');
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Contact Us"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Contact"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Do you have a project <br/>in your mind?"
              subtitle="Getting Touch"
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form onSubmit={handleSubmit} className="row">
              <Div className="col-sm-6">
                <label className="cs-primary_color">Full Name*</label>
                <input
                  type="text"
                  name="Name"
                  className="cs-form_field"
                  value={formData.Name}
                  onChange={handleChange}
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Email*</label>
                <input
                  type="email"
                  name="Email"
                  className="cs-form_field"
                  value={formData.Email}
                  onChange={handleChange}
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Project Type*</label>
                <input
                  type="text"
                  name="ProjectType"
                  className="cs-form_field"
                  value={formData.ProjectType}
                  onChange={handleChange}
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Mobile*</label>
                <input
                  type="text"
                  name="Phone"
                  className="cs-form_field"
                  value={formData.Phone}
                  onChange={handleChange}
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Message*</label>
                <textarea
                  name="Message"
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                  value={formData.Message}
                  onChange={handleChange}
                  required
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button type="submit" className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
          </Div>
        </Div>
      </Div>
    </>
  );
}
