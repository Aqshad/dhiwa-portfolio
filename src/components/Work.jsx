/**
 * @copyright 2024 dhiwaaqsha
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize } from 'react-feather'; // Import Maximize icon

const projects = [
  {
    title: "Tarumabot – University Information Chatbot Development",
    description: `
    This is my thesis project, and it is called Tarumabot. Tarumabot is a virtual assistant designed to provide quick and easy access to general information about Tarumanagara University. 
    <br>
    <br>The chatbot is useful for both students and the general public who are looking for information related to the university, such as academic programs, admissions, facilities, and campus life.
    <br>
    <br>With this technology, users can interact through conversations and receive answers instantly without the need to search manually. Tarumabot is expected to be a practical solution to support information needs in higher education in the digital era.
    <br>
    <br><strong>Slide 1:</strong> Main Interface of Tarumabot upon Launch
    <br><strong>Slide 2:</strong> User and Chatbot Interaction Interface
    <br><strong>Slide 3:</strong> About Us - Information about Tarumabot
`,

    date: "June 2024 - December 2024",
    images: ["/images/project/tarumabot1.png", "/images/project/tarumabot2.png", "/images/project/tarumabot3.png","/images/project/tarumabot4.png","/images/project/tarumabot5.png","/images/project/tarumabot6.png",]
  },
  { 
    title: "Thriftology – E-Commerce UI/UX Design in Figma",
    description: `
    This project is a Figma-based prototype for a website called Thriftology. Thriftology is a e-commerce platform designed for selling high-quality thrifted clothing. The purpose of this project is to create a modern, user-friendly interface that makes it easy and enjoyable for users to browse, search, and purchase secondhand fashion items.
    <br>
    <br>With a clean and stylish design, Thriftology aims to provide an engaging shopping experience for fashion enthusiasts who are passionate about sustainable and affordable clothing options.
    <br>
    <br><strong>Slide 1:</strong> Home Page and Login Screen
    <br><strong>Slide 2:</strong> Product Listing Page for Browsing Clothing Items
    <br><strong>Slide 3:</strong> Product Detail View on the Left and User Profile Settings on the Right
    <br><strong>Slide 4:</strong> Shopping Cart Items and Password Settings Page
`,
    date: "October 2024 - December 2024",
    images: ["/images/project/thriftology1.png", "/images/project/thriftology2.png","/images/project/thriftology3.png","/images/project/thriftology4.png"]
  },
  { 
    title: "ShopEasy – Mobile Marketplace App Built with Flutter",
    description: `
    This project is a mobile application called ShopEasy, developed using Flutter. ShopEasy is a marketplace platform where users can buy and sell a wide range of products such as fashion, electronics, medicine, furniture, and more. It also includes a built-in e-wallet system called EasyPay, which helps users perform transactions quickly and conveniently within the app.
    <br>
    <br><strong>Slide 1:</strong> Main Screen, Login, and Signup Pages
    <br><strong>Slide 2:</strong> Product Listing Page and Product Detail View
    <br><strong>Slide 3:</strong> Shopping Cart and Payment Page
    <br><strong>Slide 4:</strong> User Profile and Settings Page
`,
    date: "July 2023 - December 2023",
    images: ["/images/project/shopeasy1.png", "/images/project/shopeasy2.png","/images/project/shopeasy3.png","/images/project/shopeasy4.png"]
  },
  { 
    title: "Job Listing Fraud Detection using Machine Learning",
    description: `
    This project focuses on predicting whether a job posting is genuine or fraudulent using a machine learning approach. The classification model utilized in this project is the Long Short-Term Memory (LSTM) Network, a type of recurrent neural network (RNN) that is effective in handling sequential data and capturing long-term dependencies.
    <br>
    <br>By applying LSTM, the project aims to accurately detect fake job postings, helping to enhance user safety and trust in online job marketplaces.
    <br>
    <br><strong>Slide 1:</strong> Importing Required Libraries
    <br><strong>Slide 2:</strong> Loading the Dataset and Data Preprocessing
    <br><strong>Slide 3:</strong> Exploratory Data Analysis (EDA) to Understand the Data
    <br><strong>Slide 4:</strong> Data Cleaning: Handling Duplicate or Null Values
    <br><strong>Slide 5:</strong> Understanding the Data through Visualization
    <br><strong>Slide 6 & 7:</strong> Text Preprocessing for LSTM Model Compatibility
    <br><strong>Slide 8 & 9:</strong> Building the LSTM Model
    <br><strong>Slide 10 & 11:</strong> Training the Model and Model Evaluation
    `,
    date: "July 2023 - December 2023",
    images: ["/images/project/jobpostingprediction1.png", "/images/project/jobpostingprediction2.png","/images/project/jobpostingprediction3.png","/images/project/jobpostingprediction4.png","/images/project/jobpostingprediction5.png","/images/project/jobpostingprediction6.png","/images/project/jobpostingprediction7.png","/images/project/jobpostingprediction8.png","/images/project/jobpostingprediction9.png","/images/project/jobpostingprediction10.png","/images/project/jobpostingprediction11.png",]
  },
  { 
    title: "Water Reminder – Hydration App Developed with Flutter",
    description: `
    This project is a mobile application called Water Reminder, developed using Flutter. Water Reminder is designed to help users who often forget to drink enough water throughout the day. By providing timely reminders and tracking daily water intake, the app promotes healthier hydration habits.
    <br>
    <br>With a simple and user-friendly interface, Water Reminder allows users to easily set their drinking goals and stay consistent in maintaining proper hydration.
    <br>
    <br><strong>Slide 1:</strong> Main Screen for Setting Water Intake per Drink and Navigation Menu
    <br><strong>Slide 2:</strong> Weekly Stats Feature for Monitoring Daily Intake and Premium Upgrade Popup
    <br><strong>Slide 3:</strong> Settings Page and Additional Features
    `,
    date: "February 2023 - June 2023",
    images: ["/images/project/waterreminder1.png", "/images/project/waterreminder2.png","/images/project/waterreminder3.png"]
  },
  { 
    title: "Digital Illustration",
    description: `
    This project showcases a collection of digital illustrations created using Adobe Photoshop and Adobe Illustrator. Each artwork highlights different styles, techniques, and creative concepts, reflecting a diverse range of digital artistry skills.
    <br>
    <br>The project demonstrates proficiency in digital illustration, from concept development to the final visual execution, capturing both imagination and technical expertise.
    <br>
    <br><strong>Slide 1:</strong> Digital illustration practice The artwork focuses on capturing the flow, folds, light, and shadow of fabric, while adding a creative touch with the inclusion of autumn leaves to enhance visual interest.
    <br><strong>Slide 2:</strong> Vector portrait illustration based on a photo reference with clean lines and bold shading while maintaining the subject core facial features and expression.
    <br><strong>Slide 3:</strong> Immortalizing everyday objects in digital paintings, focusing on texture, light, and form.
    <br><strong>Slide 4:</strong> transforming photos into visual art through simplification, stylization, distortion, and destruction.
    `,
    date: "July 2023 - Februari 2025",
    images: ["/images/project/illustration1.png", "/images/project/illustration2.png","/images/project/illustration3.png","/images/project/illustration4.png"]
  },
  { 
    title: "Smoke Detection System with Machine Learning Models",
    description: `
    This project focuses on smoke detection using a machine learning approach with a dataset obtained from Kaggle. The goal is to develop a reliable system that can accurately detect smoke, thereby enhancing human safety and protecting property from potential fire hazards.
    <br>
    <br>In this study, three different classification models — Logistic Regression, K-Nearest Neighbors (K-NN), and Random Forest — were compared to determine the most effective method for smoke detection. The results showed that Random Forest achieved the highest accuracy at 99.995%, making it the best-performing model. K-NN also performed well with an accuracy of 99.936%, while Logistic Regression reached 88.073%.
    <br>
    <br>These findings highlight that Random Forest is the most reliable choice for building an effective smoke detection system, which plays a critical role in improving public safety and minimizing property loss due to fire incidents.
    <br>
    <br><strong>Slide 1:</strong> Importing Required Libraries
    <br><strong>Slide 2:</strong> Loading the Dataset
    <br><strong>Slide 3:</strong> Exploratory Data Analysis (EDA) to Understand the Data
    <br><strong>Slide 4:</strong> Data Visualization for Deeper Insights (Part 1)
    <br><strong>Slide 5:</strong> Data Visualization for Deeper Insights (Part 2)
    <br><strong>Slide 6:</strong> Splitting the Data Before Scaling
    <br><strong>Slide 7:</strong> Visualization Comparison Before and After Data Scaling
    <br><strong>Slide 8:</strong> Prediction and Evaluation using Logistic Regression 
    <br><strong>Slide 9:</strong> Prediction and Evaluation using K-Nearest Neighbors (K-NN)
    <br><strong>Slide 10:</strong> Prediction and Evaluation using Random Forest
    `,
    date: "March 2023 - May 2023",
    images: ["/images/project/smoke1.png", "/images/project/smoke2.png","/images/project/smoke3.png","/images/project/smoke4.png","/images/project/smoke5.png","/images/project/smoke6.png","/images/project/smoke7.png","/images/project/smoke8.png", "/images/project/smoke9.png", "/images/project/smoke10.png"]
  }
];

const Carousel = ({ images, currImage, setCurrImage, setIsLoading }) => {
  const prev = () => setCurrImage(currImage === 0 ? images.length - 1 : currImage - 1);
  const next = () => setCurrImage(currImage === images.length - 1 ? 0 : currImage + 1);

  const openFullscreen = () => {
    const imgElement = document.getElementById('carousel-image');
    if (imgElement.requestFullscreen) {
      imgElement.requestFullscreen();
    } else if (imgElement.mozRequestFullScreen) {
      imgElement.mozRequestFullScreen();
    } else if (imgElement.webkitRequestFullscreen) {
      imgElement.webkitRequestFullscreen();
    } else if (imgElement.msRequestFullscreen) {
      imgElement.msRequestFullscreen();
    }
  };

  return (
    <div className="overflow-hidden relative w-full max-w-5xl mx-auto">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            id="carousel-image"
            src={image}
            className="w-full aspect-[17/9] object-contain rounded-lg"
            alt={`Slide ${index + 1}`}
            onLoad={() => setIsLoading(false)} // Set isLoading ke false saat gambar selesai dimuat
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-1 rounded-full shadow bg-zinc-800 text-white hover:bg-zinc-700">
          <ChevronLeft size={40} />
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-zinc-800 text-white hover:bg-zinc-700">
          <ChevronRight size={40} />
        </button>
      </div>

      <button
        onClick={openFullscreen}
        className="absolute top-4 right-4 p-2 bg-zinc-800 text-white rounded-lg shadow-md hover:bg-zinc-700"
      >
        <Maximize size={15} />
      </button>
    </div>
  );
};

const Work = () => {
  const [currProject, setCurrProject] = useState(0);
  const [currImage, setCurrImage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const prevProject = () => {
    setIsLoading(true);
    setCurrProject(currProject === 0 ? projects.length - 1 : currProject - 1);
    setCurrImage(0);
  };

  const nextProject = () => {
    setIsLoading(true);
    setCurrProject(currProject === projects.length - 1 ? 0 : currProject + 1);
    setCurrImage(0);
  };

  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Project Experience</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[70ch] reveal-up">
          During my studies, I had the opportunity to work on various projects, some of which I completed independently, while others were done as part of a team.
        </p>
      </div>
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <div className="flex justify-between items-center mb-6">
            <h3 className="headline-3 text-white">{projects[currProject].title}</h3>
            <div className="text-sm text-zinc-400">
              {projects[currProject].date}
            </div>
          </div>

          {projects[currProject].description
            .split("\n\n")
            .map((paragraph, idx) => (
              <p
                key={idx}
                className="text-zinc-300 mb-4 md:text-lg md:max-w-[80ch]"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}

          <Carousel
            images={projects[currProject].images}
            currImage={currImage}
            setCurrImage={setCurrImage}
            setIsLoading={setIsLoading} // Kirimkan setIsLoading ke komponen Carousel
          />

          {/* Indikator loading */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-400"></div> {/* Spinner */}
            </div>
          )}

          <div className="flex justify-between mt-6">
            <button onClick={prevProject} className="px-4 py-2 bg-zinc-800 rounded-lg hover:bg-zinc-700">
              Previous Project
            </button>
            <button onClick={nextProject} className="px-4 py-2 bg-zinc-800 rounded-lg hover:bg-zinc-700">
              Next Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;