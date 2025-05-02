import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Pagination from '../Pagination';
import PostStyle2 from '../Post/PostStyle2';
import Div from '../Div';
import Sidebar from '../Sidebar.jsx';
import Spacing from '../Spacing';
const postData = [
  {
    thumb: '/images/post_4.jpeg',
    title: 'A.I will take all human job within next year',
    subtitle:
      'If you\'ve scrolled through social media lately or watched the news, chances are you\'ve heard someone say, "AI is taking over everything!" Some even go as far as to say it\'ll replace all human jobs within a year. Sounds scary, right? But let\'s take a breath and look at what\'s really happening. Yes, AI is getting smarter—and fast. It\'s helping businesses reply to customer messages, write content, analyse data, and even recommend what to watch or eat. But does that mean it\'s coming for every single job? Not quite.The truth is, while AI is great at doing repetitive or routine tasks, it still needs humans behind the scenes. Most industries aren\'t even close to being fully automated. Plus, a lot of work still depends on human judgment, emotion, and good old-fashioned common sense.',
    date: '07 Mar 2025',
    category: 'Tech',
    categoryHref: '/blog',
    href: '/blog/blog-details',
  },
  {
    thumb: '/images/post_7.jpg',
    title: 'Why Your Business Needs Social Media Marketing in 2025',
    subtitle:
      'Social Media Marketing isn\'t just about posting photos anymore—it\'s how modern businesses connect, grow, and stay relevant. Whether you\'re a local store or an online brand, being active on platforms like Instagram, Facebook, and LinkedIn gives you visibility, trust, and real engagement.',
    date: '20 Mar 2025',
    category: 'Marketing',
    categoryHref: '/blog',
    href: '/blog2',
  },
  {
    thumb: '/images/post_2.jpg',
    title: 'Get Found or Get Forgotten: Why SEO Matters in 2025',
    subtitle:
      'Most people click the first few results they see on Google—so if your business isn’t up there, you’re missing out. SEO (Search Engine Optimization) helps your website show up when your ideal customers are searching. It’s not about gaming the system—it’s about being discoverable, relevant, and trusted online.',
    date: '04 Mar 2022',
    category: 'Marketing',
    categoryHref: '/blog',
    href: '/blog3',
  },
];

export default function BlogPage() {
  pageTitle('Blog');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Our Blog"
        bgSrc="/images/blog_hero_bg.jpeg"
        pageLinkText="Blog"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
            {postData.map((item, index) => (
              <Div key={index}>
                <PostStyle2
                  thumb={item.thumb}
                  title={item.title}
                  subtitle={item.subtitle}
                  date={item.date}
                  category={item.category}
                  categoryHref={item.categoryHref}
                  href={item.href}
                />
                {postData.length > index + 1 && <Spacing lg="95" md="60" />}
              </Div>
            ))}
            <Spacing lg="60" md="40" />
            <Pagination />
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            <Spacing lg="0" md="80" />
            <Sidebar />
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
