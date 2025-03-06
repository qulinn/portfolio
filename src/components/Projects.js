import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import corpImg1 from "../assets/img/corp1.png"
import corpImg2 from "../assets/img/corp2.png"
import corpImg3 from "../assets/img/corp3.png"
import corpImg4 from "../assets/img/corp4.png"
import corpImg5 from "../assets/img/corp5.png"
import corpImg6 from "../assets/img/corp6.png"
import eduImg1 from "../assets/img/edu1.png"
import eduImg2 from "../assets/img/edu2.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Discord Bot",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "My Portofolio",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Object Detection",
      description: "Research & Development",
      imgUrl: projImg3,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  // Professional Experience
  const experiences = [
    {
      title: "Software Engineer at mocomoco Inc.",
      description: "Feb 2025 - Present",
      imgUrl: corpImg6, 
    },
    {
      title: "Software Engineer at e-Seikatsu Co.,Ltd.",
      description: "Nov 2024 - Mar 2025",
      imgUrl: corpImg5, 
    },
    {
      title: "AI Developer at DataAnnotation",
      description: "Oct 2024 - Present",
      imgUrl: corpImg4, 
    },
    {
      title: "Intern at Apple",
      description: "Apr 2024 - Sep 2024",
      imgUrl: corpImg3, 
    },
    {
      title: "Intern at Google",
      description: "Aug 2022 - Dec 2022",
      imgUrl: corpImg2, 
    },
    {
      title: "Research Assistant at Kyushu Institute of Technology",
      description: "Jun 2021 - Sep 2022",
      imgUrl: corpImg1, 
    },
    {
      title: "Teaching Assistant at Kyushu Institute of Technology",
      description: "Apr 2022 - Sep 2022",
      imgUrl: corpImg1, 
    },
  ];


  // Professional Experience
  const education = [
    {
      title: "PhD, Computer Science",
      description: "Oct 2024 - Sep 2027",
      imgUrl: eduImg1, 
    },
    {
      title: "Master's degree, Computer Science",
      description: "Apr 2022 - Sep 2024",
      imgUrl: eduImg1, 
    },
    {
      title: "Google STEP Development Course",
      description: "May 2022 - Jun 2022",
      imgUrl: eduImg2, 
    },
    {
      title: "Bachelor's degree, Computer Science",
      description: "Apr 2018 - Mar 2022",
      imgUrl: eduImg1, 
    },
    
  ];



  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>What I've Done</h2>
                <p>Gained hands-on experience in software development through personal projects, work experience, and a Computer Science degree.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Personal Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Professional Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Education</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    
                    {/* Personal Projects */}
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                    {/* Professional Experience */}
                    <Tab.Pane eventKey="second">
                      <Row>
                        {experiences.map((experience, index) => (
                          <ProjectCard key={index} {...experience} />
                        ))}
                      </Row>
                    </Tab.Pane>

                    {/* Education */}
                    <Tab.Pane eventKey="third">
                      <Row>
                        {education.map((education, index) => (
                          <ProjectCard key={index} {...education} />
                        ))}
                      </Row>
                    </Tab.Pane>
                  
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};