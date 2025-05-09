import React from 'react';
const postData = [
  {
    title: 'How to keep fear from ruining your art business with confident',
    postHref: '/blog/blog-details',
    subtitle:
      'The first step is to acknowledge your fear rather than suppress it. It’s completely normal to feel uncertain, especially when your work is so personal. Recognising those fears allows you to move past them. Instead of waiting for the perfect moment, keep creating — even when you’re unsure.....',
    // authorName: 'Arino Admin',
    // authorImg: '',
    // authorDesignation: '',
    // date: '07',
    // month: 'Mar',
    // year: '2025',
  },
  {
    title: 'Why Your Business needs Social Media marketing in 2025',
    postHref: '/blog2',
    subtitle:
      'Social Media Marketing is not just about posting photos anymore—its how modern businesses connect grow and stay relevant. Whether you are a local store or an online brand being active on platforms like Instagram Facebook and LinkedIn gives you visibility trust and real engagement.',
    // authorName: 'David Milar',
    // authorImg: '/images/avatar_3.jpeg',
    // authorDesignation: 'London, United Kindom',
    // date: '15',
    // month: 'Mar',
    // year: '2025',
  },
  {
    title: 'Local SEO is a very essential role play for new websites',
    postHref: '/blog3',
    subtitle:
      'Local SEO plays a crucial role in helping new websites gain visibility in their immediate market. When you are just starting out, getting found by nearby customers can make all the difference. Optimising your site for local search ensures that people in your area can easily discover your business',
    // authorName: 'Jhone Doe',
    // authorImg: '/images/avatar_4.jpeg',
    // authorDesignation: 'London, United Kindom',
    // date: '20',
    // month: 'Mar',
    // year: '2025',
  },
];

export default function PostList() {
  return (
    <ul className="cs-post_3_list cs-mp0">
      {postData.map((item, index) => (
        <li key={index}>
          <div className="cs-post cs-style3">
            <div className="cs-post_left">
              <div className="cs-posted_by">
                <span className="cs-primary_font">{item.date}</span>
                <span>
                  {item.month} <br/>
                  {item.year}
                </span>
              </div>
            </div>
            <div className="cs-post_right">
              <h2 className="cs-post_title">
                <a href={item.postHref}>{item.title}</a>
              </h2>
              <div className="cs-post_subtitle">{item.subtitle}</div>
              <div className="cs-post_meta">
                <div className="">
                  <div className="">
                    <img src={item.authorImg} alt="" />
                  </div>
                  <div className="">
                    <h4>{item.authorName}</h4>
                    <p>{item.authorDesignation}</p>
                  </div>
                </div>
                <a href={item.postHref} className="cs-text_btn">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
