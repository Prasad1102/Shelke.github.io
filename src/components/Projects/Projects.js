import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import FoodOrder from "../../Assets/Projects/FoodOrder.png";
import Elernning from "../../Assets/Projects/Elernning.png";
import Stories from "../../Assets/Projects/Stories.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Stories}
              isBlog={false}
              title="Stories"
              description="Stories is a blogging website built with Python and Django. It features user authentication, allowing users to sign up, log in, and manage their profiles. Users can follow each other, like, and comment on blogs, fostering a community of engaged readers and writers. Whether sharing personal experiences or professional insights, Stories provides a platform for users to connect and interact through their shared interests and stories."
              ghLink="https://github.com/Prasad1102/Stories"
              demoLink="https://stories.pythonanywhere.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FoodOrder}
              isBlog={false}
              title="FoodOrderingSystem"
              description="My Food Ordering System is a comprehensive platform built with Python and Django. It features user authentication, allowing users to create accounts, log in, and manage their profiles. Users can browse various food items, add them to their cart, place orders, and view their order history. The system also includes an admin interface where administrators can add new recipes and manage the menu. This user-friendly platform ensures a seamless and efficient food ordering experience for both customers and administrators.
"
              ghLink="https://github.com/Prasad1102/FoodOrderSystem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Elernning}
              isBlog={false}
              title="TestEagles"
              description="TestEagles is a user-friendly e-learning platform developed with Python, Django, HTML, CSS, and Bootstrap. It features secure user authentication, allowing users to create accounts and manage profiles. Users can browse educational posts and track their learning progress. Administrators have access to an admin panel to create and update posts, ensuring fresh and relevant content. TestEagles offers a seamless learning experience for both students and educators.
"
              ghLink="https://github.com/Prasad1102/TestEagles"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
