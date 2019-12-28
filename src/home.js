import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="content container">
        <div className="row">
          <div className="profile">

            <p>Front End Developer/Engineer with a degree in Political Economics and a passion for creating. Explore my professional work history and some of the obscure skills I've picked up along the way, or <a href="/thomas-toan-resume.pdf" target="_blank" onclick="gtag('event', 'resume', { 'event_category': 'download', 'event_label': 'hero_copy', 'value': 'no_value' });">download my resume</a>.</p>
          </div>
        </div>
        <br />
        <div className="row">
          <div class="social-media">
            <a href="thomas-toan-resume.pdf" rel="noopener noreferrer" target="_blank" onclick="gtag('event', 'resume', { 'event_category': 'download', 'event_label': 'hero_icon', 'value': 'no_value' });"><i class="icon fa fa-file-pdf-o fa-2x"></i></a><span> </span>
            <a href="https://www.linkedin.com/in/thomas-toan" rel="noopener noreferrer" target="_blank" onclick="gtag('event', 'linkedin', { 'event_category': 'outbound_link', 'event_label': 'hero_icon', 'value': 'no_value' });"><i class="icon fa fa-linkedin fa-2x"></i></a><span> </span>
            <a href="https://www.github.com/toaney" rel="noopener noreferrer" target="_blank" onclick="gtag('event', 'github', { 'event_category': 'outbound_link', 'event_label': 'hero_icon', 'value': 'no_value' });"><i class="icon fa fa-github fa-2x"></i></a><span> </span>
            <a href="https://www.behance.net/toaney" rel="noopener noreferrer" target="_blank" onclick="gtag('event', 'behance', { 'event_category': 'outbound_link', 'event_label': 'hero_icon', 'value': 'no_value' });"><i class="icon fa fa-behance fa-2x"></i></a><span> </span>
            <a href="mailto:toaney@gmail.com" onclick="gtag('event', 'email_toaney', { 'event_category': 'contact', 'event_label': 'hero_icon', 'value': 'no_value' });"><i class="icon fa fa-envelope-o fa-2x"></i></a> 
          </div>
        </div>
        <br />
        <div className="row">
          <div className="info-segment">
            <h2>Code Snippets</h2>
            <h3>Browse below for code snippets</h3>
              <p><Link to="/todo-list">React Hooks - Todo List</Link></p> 
          </div>
        </div>
        <br />
        <div className="row">
          <div className="info-segment">
            <h2>Oct 2019 - present</h2>
            <h3>Software Engineer/ Photographer/ Developer/ Gardener</h3>
              <p>JavaScript, HTML, SCSS, React, Redux, JSX, Node.js, Express, MongoDB, JSLint, Enzyme, Jest, Webpack, Jenkins, Mixpanel, Google Domains, Amazon Web Services, Chrome DevTools, WordPress, UI/UX Design, Adobe Photoshop, Adobe Illustrator, Invision, Figma, Jira, Bitbucket, Confluence, Github, moonhangar.com, thomastoan.com</p> 
          </div>
        </div>
        <br />
        <div className="row">
          <div className="info-segment">
            <h2>July 2018 - Sept 2019</h2>
            <h3>Asurion Software Engineer 2 - Web/ Photographer/ Developer/ Fisherman/ Gardener</h3>
              <p>JavaScript, HTML, SCSS, React, Redux, JSX, Node.js, JSLint, Enzyme, Jest, Webpack, Jenkins, Mixpanel, Google Analytics, Google Domains, Amazon Web Services, Chrome DevTools, Firefox DevTools, WordPress, UI/UX Design, Adobe Photoshop, Adobe Illustrator, Invision, Figma, Jira, Bitbucket, Confluence, Github, moonhangar.com, thomastoan.com, Surf Fishing, Cast Iron Cooking</p> 
          </div>
        </div>
        <br />
        <div className="row">
          <div className="info-segment">
            <h2>March 2017 - June 2018</h2>
            <h3>Jelly Belly Front End Developer/ Web Content Developer/ Photographer/ Crabber/ Baker</h3>
              <p>JavaScript, JQuery, HTML, CSS, LESS, Node.js, Arc.js, GitHub, Tortoise SVN, Yeoman, NGINX, REST API, JSHint, Mocha, React, Redux, Webpack, Kibo eCommerce Platform, BrightEdge, Tealium, Vidi Emi, Basecamp, Crocagile, Google Analytics, Google Tag Manager, Google Cloud Platform, Google Domains, Chrome DevTools, Firefox DevTools, UI/UX, Adobe Photoshop, Adobe Illustrator, ruksack.com, thomastoan.com, ADA, SEO, GDPR, Crabbing, Gymnastics, Bread Baking</p> 
          </div>
        </div>
        <br />
        <div className="row">
          <div className="info-segment">
            <h2>May 2015 - Feb 2017</h2>
            <h3>Freelancer/ Designer/ Content Creator/ Expat/ Teacher/ Traveler/ One-Bag-er</h3>
            <p>JavaScript, Python, HTML, CSS, Bootstrap, Node.js, <a href="https://github.com/toaney" rel="noopener noreferrer" target="_blank" onclick="gtag('event', 'github', { 'event_category': 'outbound_link', 'event_label': 'content_copy', 'value': 'no_value' });">GitHub</a>, Chrome DevTools, Adobe Photoshop, Adobe Illustrator, Adobe Premiere, Adobe Dreamweaver, UI/UX, 99 Designs, <a href="https://www.behance.net/toaney" rel="noopener noreferrer" target="_blank" onclick="gtag('event', 'behance', { 'event_category': 'outbound_link', 'event_label': 'content_copy', 'value': 'no_value' });">Behance</a>, <a href="https://mjc.org/Learning_Together/Early_Childhood_Center/Overview" rel="noopener noreferrer" target="_blank" onclick="gtag('event', 'behance', { 'event_category': 'outbound_link', 'event_label': 'content_copy', 'value': 'midway_jewish_center' });">Logo Design</a>, <a href="https://www.behance.net/gallery/30293819/LongevityJersey" rel="noopener noreferrer" target="_blank" onclick="gtag('event', 'behance', { 'event_category': 'outbound_link', 'event_label': 'content_copy', 'value': 'jersey_design' });">Jersey Design</a>, iPage Hosting, thomastoan.com, <a href="http://mp.weixin.qq.com/s?__biz=MzA3MDkxMDU2MA%3D%3D&mid=400033071&idx=1&sn=b74713d1ee256085fcccf0269393a509&scene=1&srcid=10192fxkASdVH7mFQQAapUgF&key=b410d3164f5f798e455a1b6af642ea318909f7da42b99ce5d93588d05c9dc0bcdc54ea1f26a977ea317cf225eb973761&ascene=0&uin=MTgxMjUwNDE0Mg%3D%3D&devicetype=iMac+MacBookPro5%2C3+OSX+OSX+10.10.2+build%2814C109%29&version=11020012&pass_ticket=MO4cax0%2BEpAkYXXjNzVKux3j2jryLmboyCgKbxP4DyVxG4P7lsrSgGWZmFuoUIt6" rel="noopener noreferrer" target="_blank" onclick="gtag('event', 'mudrunning', { 'event_category': 'outbound_link', 'event_label': 'content_copy', 'value': 'no_value' });">Mudrunning</a>, PADI Open Water Diving, Teaching, Exam 955 Maintenance Selection System, <a href="https://vimeo.com/198124640" rel="noopener noreferrer" target="_blank" onclick="gtag('event', 'videography', { 'event_category': 'outbound_link', 'event_label': 'content_copy', 'value': 'no_value' });">GoPro Videography</a>, Nikon Photography</p>
          </div>
        </div>
        <br />
        <div className="row">
            <div className="info-segment">
            <h2>Oct 2013 - April 2015</h2>
            <h3>Wells Fargo QA Analyst/ Cyclist/ GoPro-er/ BORP Volunteer/ Webmaster</h3>
            <p>Rational Integration Tester, Rational ClearQuest, XML, HTTP, SOAP API, WISDL, Data Upkeep and Conditioning, GoPro HERO3+ Black Edition, Adobe Premiere, iPage Hosting, roughstack.com, <a href="http://www.borp.org/programs/adaptive-cycling/" rel="noopener noreferrer" target="_blank" onclick="gtag('event', 'borp', { 'event_category': 'outbound_link', 'event_label': 'content_copy', 'value': 'no_value' });">BORP Adaptive Cycling</a></p>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="info-segment">
            <h2>June 2012 - Sept 2013</h2>
            <h3>UBS Client Service Associate/ Journey of Hope Cyclist/ Backpacker/ BORP Volunteer/ Rock Climber/ Photographer</h3>
              <p>Series 66, Series 7, Nikon D5100, Cannondale CAAD4, Backpacking, <a href="https://vimeo.com/72704278" rel="noopener noreferrer" target="_blank" onclick="gtag('event', '2013_journey_of_hope', { 'event_category': 'outbound_link', 'event_label': 'content_copy', 'value': 'no_value' });">2013 Journey of Hope</a>, <a href="http://www.borp.org/programs/adaptive-cycling/" rel="noopener noreferrer" target="_blank" onclick="gtag('event', 'borp', { 'event_category': 'outbound_link', 'event_label': 'content_copy', 'value': 'no_value' });">BORP Adaptive Cycling</a>, Rock Climbing</p>
            </div>
        </div>
          <br />
        <div className="row">
          <div className="info-segment">
            <h2>Aug 2008 - May 2012</h2>
            <h3>UC Berkeley Political Economist/ Laundromat Service Technician/ Property Manager/ UBS Intern/ Cyclist/ Painter</h3>
            <p>Macroeconomics of Globalization, Microeconomics, Macroeconomics, Industrial Washer/Dryer Maintenance, Plumbing, Carpentry, <a href="https://www.behance.net/gallery/29879115/Bears" rel="noopener noreferrer" target="_blank" onclick="gtag('event', 'behance', { 'event_category': 'outbound_link', 'event_label': 'content_copy', 'value': 't-shirt_design' });">T-shirt design</a>, 30 Days of Painting, Bike Building, Bike Maintenance</p>
          </div>
        </div>
          <br />
        <div className="row">
          <div className="info-segment">
            <h2>Aug 2004 - April 2008</h2>
            <h3>Web Designer/ Yearbook Design Editor/ Newspaper Layout Editor/ Painter/ Director/ Property Manager</h3>
              <p>Adobe Photoshop, Adobe InDesign, Adobe Dreamweaver, HTML, CSS, Acrylic Painting, Oil Painting, Script Writing, Videography, Final Cut Pro, MS Office Suite, Plumbing, Carpentry</p>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="collaborate">
            <h2>Collaborate</h2>
            <p><a href="mailto:toaney@gmail.com" onclick="gtag('event', 'email_toaney', { 'event_category': 'contact', 'event_label': 'content_copy', 'value': 'no_value' });">Email toaney@gmail.com</a></p>
            <p><a href="tel:415-994-1694" onclick="gtag('event', 'phone-415-994-1694', { 'event_category': 'contact', 'event_label': 'content_copy', 'value': 'no_value' });">Call (415) 994-1694</a></p>
            <br />
          </div>
        </div>
      </div>
  );
}

export default Home;
