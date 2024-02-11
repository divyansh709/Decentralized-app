import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Expert Guidance',
    text: 'Our platform provides access to a diverse array of expert-curated resources, from legal advice to growth strategies',
  },
  {
    title: 'Interactive Community',
    text: ' Engage with like-minded individuals, share experiences, and exchange ideas within our vibrant community forum.',
  },
  {
    title: 'Tailored Content',
    text:'From beginner tips to advanced strategies, our platform ensures that users receive relevant insights tailored to their journey.',
  },
  {
    title: 'Resource Hub',
    text: 'Access a comprehensive repository of tools, templates, and educational materials designed to streamline the startup process. ',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;