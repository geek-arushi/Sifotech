import React from 'react';
const postData = [
  {
    title: 'How to keep fear from ruining your art business with confident',
    postHref: '/blog/blog-details',
    subtitle:
      'The first step is to acknowledge your fear rather than suppress it. It’s completely normal to feel uncertain, especially when your work is so personal. Recognising those fears allows you to move past them. Instead of waiting for the perfect moment, keep creating — even when you’re unsure.....',
    authorName: 'Arino Admin',
    authorImg: '/images/avatar_2.jpeg',
    authorDesignation: 'London, United Kindom',
    date: '07',
    month: 'Mar',
    year: '2025',
  },
  {
    title: 'A.I becomes more powerful day by day with new approaches',
    postHref: '/blog/blog-details',
    subtitle:
      'Artificial Intelligence is no longer just a buzzword — it’s a rapidly evolving force shaping the future of every industry. With new approaches emerging daily, from deep learning to generative models and adaptive systems, A.I.....',
    authorName: 'David Milar',
    authorImg: '/images/avatar_3.jpeg',
    authorDesignation: 'London, United Kindom',
    date: '15',
    month: 'Mar',
    year: '2025',
  },
  {
    title: 'Local SEO is a very essential role play for new websites',
    postHref: '/blog/blog-details',
    subtitle:
      'Local SEO plays a crucial role in helping new websites gain visibility in their immediate market. When you are just starting out, getting found by nearby customers can make all the difference. Optimising your site for local search ensures that people in your area can easily discover your business',
    authorName: 'Jhone Doe',
    authorImg: '/images/avatar_4.jpeg',
    authorDesignation: 'London, United Kindom',
    date: '20',
    month: 'Mar',
    year: '2025',
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
                <div className="cs-post_avatar">
                  <div className="cs-post_avatar_img">
                    <img src={item.authorImg} alt="Avatar" />
                  </div>
                  <div className="cs-post_avatar_info">
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
