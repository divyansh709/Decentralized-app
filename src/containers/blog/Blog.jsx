import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="Growth Hacking 101: Strategies to Accelerate Startup Success" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="The Fundamentals of Startup Legalities: Navigating Legal Challenges with Confidence" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="From Pitch to Profit: Mastering the Art of Startup Funding" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="The Power of Branding: Building a Strong Identity for Your Startup" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="Adapting to Change: Thriving in the Ever-Evolving Startup Ecosystem" />
      </div>
    </div>
  </div>
);

export default Blog;