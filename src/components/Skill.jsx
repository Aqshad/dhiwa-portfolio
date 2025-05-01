/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


/**
 * Components
 */
import SkillCard from "./SkillCard";


const skillItem = [
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design Tool'
  },
  {
    imgSrc: '/images/python-5.svg',
    label: 'Python',
    desc: 'Data Analyst'
  },
  {
    imgSrc: '/images/flutter.svg',
    label: 'Flutter',
    desc: 'Mobile App'
  }, 
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/images/mysql.svg',
    label: 'MySQL',
    desc: 'Database'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/photoshop.svg',
    label: 'Adobe Photoshop',
    desc: 'Photo Editing'
  },
  {
    imgSrc: '/images/premiere.svg',
    label: 'Adobe Premiere Pro',
    desc: 'Video Editing'
  },
  {
    imgSrc: '/images/illustrator.svg',
    label: 'Adobe Illustrator',
    desc: 'Vector Graphics'
  },
  {
    imgSrc: '/images/msexcel.svg',
    label: 'Microsoft Excel',
    desc: 'User Interface'
  }
  ,
  {
    imgSrc: '/images/msword.svg',
    label: 'Microsoft Word',
    desc: 'User Interface'
  }
  ,
  {
    imgSrc: '/images/msppt.svg',
    label: 'Microsoft Power Point',
    desc: 'User Interface'
  }
];


const Skill = () => {
  return (
    <section className="section">
      <div className="container">

        <h2 className="headline-2 reveal-up">
          Essential Tools I use
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to build exceptional websites, applications, and perform data analysis.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Skill