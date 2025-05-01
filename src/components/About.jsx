/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


const aboutItems = [
  {
    label: 'Project done',
    number: 45
  },
  {
    label: 'Years of experience',
    number: 10
  }
];


const About = () => {
  return (
    <section
      id="about"
      className="section"
    >

      
      <div className="container">
        

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <h2 className="headline-2 reveal-up mb-6 md:mb-8">
          About Me
          </h2>

          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[70ch] ">
            Welcome! I&apos;m Dhiwa Aqsha, a recent graduate from Tarumanagara University, where I majored in Computer Science with a strong focus on Data Science, Database Administration, and Software Development. Throughout my studies, I gained a solid foundation in data management and analysis, covering topics such as Machine Learning, Database Systems, Natural Language Processing, Algorithms, and Software Development. These courses have equipped me with the technical expertise to work with large datasets, develop data-driven solutions, design and build software applications, and analyze complex data to support informed decision-making.<br/><br/>
            I have worked on a variety of projects, both independently and as part of a team. These projects have ranged from website and mobile app development to game design and data analysis, allowing me to apply my skills across diverse fields. For my final project, I developed a university information chatbot application based on artificial intelligence, which further enhanced my expertise in AI and application development.<br/><br/>
            With a deep passion for both data-driven solutions and software development, I am eager to continue enhancing my technical skills while contributing to the growth of the company I join. I am committed to continuous learning and applying my knowledge to manage and analyze data, as well as develop software solutions that address real-world challenges. I look forward to growing professionally and making meaningful contributions in both data science and software development.
          </p>


          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            
            <img
              src="/images/logo-dhiwa-white.png"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>

      </div>

      <div className="container mt-12">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <h2 className="headline-2 reveal-up mb-6 md:mb-8">Education</h2>
          {/* Flex container to separate period text from other content */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-zinc-300 md:text-lg">
                <strong>Bachelor of Informatics Engineering</strong><br />
                Tarumanagara University<br />
                GPA: <strong>3.91</strong>
              </p>
            </div>

            {/* Teks 2021 - 2024 di kanan atas */}
            <div className="text-sm text-zinc-400">
              <p>2021 - 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About