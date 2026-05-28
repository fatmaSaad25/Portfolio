import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaWordpress, FaMapMarkerAlt, FaGraduationCap, FaBrain, FaVideo, FaFilm } from 'react-icons/fa';
import StyleHome from './Home.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaWhatsapp, FaFacebook, FaGithub } from 'react-icons/fa';
import serverRwahel from '../img/serverRwahel.jpg';
import logo from '../img/logo.jpg';
import totyAcademy from '../img/totyAcademy.jpeg';
import novaLight from '../img/novaLight.png';
import Afs from '../img/Afs.png';
import FS from '../img/FS.jpg';
import novaDark from '../img/novaDark.png';

const Home = () => {
  const designs = [
    { id: 1, img: serverRwahel, title: "Rowahel Logistics - Poster", category: "Advertising & Campaign Design" },
    { id: 2, img: logo, title: "Rowahel Logistics - Brand Identity", category: "Logo & Typography" },
    { id: 3, img: totyAcademy, title: "Toty Academy", category: "Educational & Kids Branding" },
    { id: 4, img: novaLight, title: "Nova Travel - Elegant Light Edition", category: "Tourism & Travel Campaign" },
    { id: 5, img: novaDark, title: "Nova Travel - Vibrant Dark Edition", category: "Social Media Graphics" },
    { id: 6, img: Afs, title: "AFS Hiring Announcement", category: "Corporate Recruitment Poster" },
    { id: 7, img: FS, title: "FS AI Video Packages", category: "AI-Driven Marketing Identity" },
  ];

  const aiMarketingVideos = [
    {
      title: " Nova Travel(SA)",
      videoSrc: require('../img/سعودى.mp4')
    },
    {
      title: " Nova Travel(EG)",
      videoSrc: require('../img/مصرى.mp4')
    },
    {
      title: "RawahelTransport Company",
      videoSrc: require('../img/اماراتى.mp4') // تم التوجيه هنا مؤقتاً لحل مشكلة الاسم العربي "رواحل.mp4"
    },
    {
      title: " Nova Travel(AE)",
      videoSrc: require('../img/اماراتى.mp4')
    }
  ];

  const aiSeriesVideos = [
    {
      title: "Cinematic Series - Episode 1",
      description: "The premiere episode of a fictional digital drama built entirely with modern AI video generation tools.",
      videoSrc: require('../img/مدينه الاحلام1.mp4')
    },
    {
      title: "Cinematic Series - Episode 2",
      description: "The sequel episode continuing the AI-driven narrative with advanced character stability and pacing.",
      videoSrc: require('../img/مدينه الاحلام2.mp4')
    },
    {
      title: "Cinematic Series - Episode 3",
      description: "The third episode in the series, which is the third part of a narrative series based on artificial intelligence.",
      videoSrc: require('../img/مدينه الاحلام3.mp4')
    },
    {
      title: "Cinematic Series - Episode 4",
      description: "The fourth episode of the series, which is the fourth part of a narrative series based on artificial intelligence.",
      videoSrc: require('../img/مدينه الاحلام4.mp4')
    }
    
  ];

  const myProjects = [
    {
      title: "E-Commerce",
      category: "React / CSS", 
      img: require('../img/womanStyle.PNG'),
      link: "https://fatmasaad25.github.io/womenStyle/#/",
      type: "code" 
    },
    {
      title: "strategia",
      category: "React / CSS", 
      img: require('../img/strategia.PNG'),
      link: "https://fatmasaad25.github.io/strategia.site",
      type: "code" 
    },
    {
      title: "Washwasha news ",
      category: "Html / CSS / JS",
      img: require('../img/wshwsha.PNG'),
      link: "https://wshwsha.vercel.app/",
      type: "code" 
    },
    {
      title: "Restaurant",
      category: "Html / CSS ",
      img: require('../img/fastFood.PNG'),
      link: "https://fast-food-teal-delta.vercel.app/",
      type: "code" 
    },
    {
      title: "KAF",
      category: "Html / CSS ",
      img: require('../img/kaf.PNG'),
      link: "https://kaf-kappa.vercel.app/",
      type: "code" 
    },
    {
      title: "Shery Academy",
      category: "WordPress", 
      img: require('../img/sheryAcademy.PNG'),
      link: "https://sheryacademy.com/ar/%D8%A7%D9%84%D8%Sub%D9%8I%D8%A9/",
      type: "wordpress"
    },
    {
      title: "Bronsi Petroleum",
      category: "WordPress",
      img: require('../img/bronsi.PNG'),
      link: "https://bronsi.ly/",
      type: "wordpress"
    },
    {
      title: "ZAZMIT Petroleum",
      category: "WordPress", 
      img: require('../img/zazmit.PNG'),
      link: "https://zazmit.ly/",
      type: "wordpress"
    }
  ];

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "76d7b223-00cf-4ed5-9efd-eb82e9a24881");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <div>
      <section className={StyleHome.heroSection} id="home">
        <div className="container">
          <div className="row align-items-center"> 
            <div className="col-lg-6">
              <div className={StyleHome.textHeroSection}>
                <h1> 
                  Hi, I'm <span className={StyleHome.nameHighlight}>Fatma Saad</span> 
                  <br/> 
                  <span className={StyleHome.typewriterText}>Front-End & AI Creator</span>
                </h1>
                <p>Crafting responsive web interfaces and designing cinematic AI promotional videos, marketing content, and digital series.</p>
                <div className={StyleHome.heroBtnGroup}>
                  <a href="#ai-marketing" className={StyleHome.btnAiWork}>AI Videos</a>
                  <a href="#projects" className={StyleHome.btnwork}>Web Projects</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={StyleHome.imgHero}>
                <img src={require('../img/img1-removebg-preview.png')} alt="Fatma Saad" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={StyleHome.aboutSection} id='about'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className={StyleHome.personalCard}>
                <h3>Quick Info</h3>
                <ul>
                  <li><FaGraduationCap /> <strong>Education:</strong> Information Systems</li>
                  <li><FaMapMarkerAlt /> <strong>Location:</strong> Ismailia, Egypt</li>
                  <li><strong>Availability:</strong> Remote & On-site</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className={StyleHome.aboutText}>
                <h2>About Me</h2>
                <p>
                  I’m a Front-End Developer and AI Content Creator with a background in <strong>Information Systems</strong>. 
                  My educational foundation empowers me to seamlessly bridge the gap between technical logic, clean database concepts, and beautiful interface layouts.
                </p>
                <p>
                  Currently based in <strong>Ismailia, Egypt</strong>, I specialize in building highly responsive web interfaces with React and WordPress, while simultaneously leveraging cutting-edge generative AI video platforms to produce captivating high-end marketing campaigns, brand promotions, and original narrative digital series.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={StyleHome.techStack} id="skills">
        <div className="container text-center">
          <h2 className={StyleHome.subTitle}>My Tech Stack & Tools</h2>
          <div className="row justify-content-center mt-5">
            {[
              { icon: <FaHtml5 />, name: 'HTML5', color: '#E34F26' },
              { icon: <FaCss3Alt />, name: 'CSS3', color: '#1572B6' },
              { icon: <FaJs />, name: 'JavaScript', color: '#F7DF1E' },
              { icon: <FaReact />, name: 'React', color: '#61DAFB' },
              { icon: <FaWordpress />, name: 'WordPress', color: '#21759B' },
              { icon: <FaBrain />, name: 'AI Video Generation', color: '#E91E63' }
            ].map((tech, index) => (
              <div className="col-6 col-md-4 col-lg-2 mb-4" key={index}>
                <div className={StyleHome.techCard}>
                  <span style={{ color: tech.color }}>{tech.icon}</span>
                  <p>{tech.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={StyleHome.aiVideoSection} id="ai-marketing">
        <div className="container">
          <h2 className={StyleHome.aiSectionTitle}><FaVideo /> AI Promotional & Marketing Videos</h2>
          <div className="row mt-5">
            {aiMarketingVideos.map((video, index) => (
              <div className="col-md-6 col-lg-3 mb-4" key={index}>
                <div className={StyleHome.videoCard}>
                  <div className={StyleHome.videoWrapper}>
                    <video controls controlsList="nodownload" preload="metadata">
                      <source src={video.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className={StyleHome.videoInfo}>
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={StyleHome.aiSeriesSection} id="ai-series">
        <div className="container">
          <h2 className={StyleHome.aiSectionTitle}><FaFilm /> AI-generated series</h2>
          <div className="row mt-5 justify-content-center">
            {aiSeriesVideos.map((video, index) => (
              <div className="col-md-6 col-lg-5 mb-4" key={index}>
                <div className={StyleHome.videoCard}>
                  <div className={StyleHome.videoWrapper}>
                    <video controls controlsList="nodownload" preload="metadata">
                      <source src={video.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className={StyleHome.videoInfo}>
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* تم تعديل الـ styles هنا لتقرأ من StyleHome بشكل صحيح ومتناسق */}
      <section className={StyleHome.gallerySection}>
        <div className="container">
          <div className={StyleHome.titleArea}>
            <h2 className={StyleHome.designText}>Creative Designs Showcase</h2>
            <p>A curated collection of my work in graphic design, social media campaigns, and brand identities.</p>
            <div className={StyleHome.line}></div>
          </div>

          <div className={StyleHome.gridContainer}>
            {designs.map((design) => (
              <div key={design.id} className={StyleHome.designCard}>
                <div className={StyleHome.imgWrapper}>
                  <img src={design.img} alt={design.title} className={StyleHome.designImg} />
                  <div className={StyleHome.overlay}>
                    <div className={StyleHome.overlayText}>
                      <h3>{design.title}</h3>
                      <span>{design.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={StyleHome.projectSection} id="projects">
        <div className="container">
          <h2 className="text-center mb-5">Web Development Projects</h2>
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className={StyleHome.mySwiper}
          >
            {myProjects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className={StyleHome.projectCard}>
                  <div className={StyleHome.imgWrapper}>
                    <img src={project.img} alt={project.title} />
                    <span className={project.type === 'code' ? StyleHome.badgeCode : StyleHome.badgeWp}>
                      {project.category}
                    </span>
                  </div>
                  <div className={StyleHome.projectInfo}>
                    <h3>{project.title}</h3>
                    <a href={project.link} target="_blank" rel="noreferrer" className={StyleHome.viewBtn}>
                      Visit Website
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className={StyleHome.contactSection} id="contact">
        <div className="container">
          <div className="row">
            <h2 className="text-center mb-5">Contact Us</h2>
            
            <div className="col-lg-5 col-md-12">
              <div className={StyleHome.contactText}>
                <div className={StyleHome.infoBox}>
                  <h3>Phone</h3>
                  <h4>01099754998</h4>
                </div>
                <div className={StyleHome.infoBox}>
                  <h3>Address</h3>
                  <h4>Ismailia, Aboatwa Street</h4>
                </div>
                <div className={StyleHome.infoBox}>
                  <h3>Email</h3>
                  <h4>fsaad5221@gmail.com</h4>
                </div>
                <div className={StyleHome.socialIcons}>
                  <a href="https://wa.me/201099754998" target="_blank" rel="noreferrer" className={StyleHome.iconWhatsapp}>
                    <FaWhatsapp />
                  </a>
                  <a href="https://www.facebook.com/share/17p5fcbwGn/" target="_blank" rel="noreferrer" className={StyleHome.iconFacebook}>
                    <FaFacebook />
                  </a>
                  <a href="https://github.com/fatmaSaad25" target="_blank" rel="noreferrer" className={StyleHome.iconGithub}>
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <form onSubmit={onSubmit} className={StyleHome.formWrapper}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" name="name" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea name="message" className="form-control" rows="5" required></textarea>
                </div>
                <button type="submit" className={StyleHome.btnform}>Send Message</button>
                <p className="mt-3">{result}</p> 
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;