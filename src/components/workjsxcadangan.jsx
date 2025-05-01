/**
 * @copyright 2024 dhiwaaqsha
 * @license Apache-2.0
 */


/**
 * Components
 */
import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: '/images/project/tarumabot1.png',
    title: 'Tarumabot - Chatbot Layanan Informasi',
    tags: ['Chatbot', 'Development','Artificial Intelligence'],
    projectLink: 'https://musify-5al0.onrender.com/'
  },
  {
    imgSrc: '/images/project/thriftology1.png',
    title: 'Thriftology - Figma Design',
    tags: ['Figma', 'UI/UX Design', 'Web-design'],
    projectLink: 'https://pixstock-official.vercel.app/'
  },
  {
    imgSrc: '/images/project/jobposting1.png',
    title: 'Data Analyst - Job Posting Prediction',
    tags: ['Data Analyst', 'Python', 'prediction'],
    projectLink: ''
  },
  {
    imgSrc: '/images/project-4.jpg',
    title: 'Real state website',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/codewithsadee-org/wealthome'
  },
  {
    imgSrc: '/images/project-5.jpg',
    title: 'eCommerce website',
    tags: ['eCommerce', 'Development'],
    projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
  },
];


const Work = () => {
  return (
    
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          Project Experience
        </h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to build exceptional websites, applications, and perform data analysis.
        </p>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work