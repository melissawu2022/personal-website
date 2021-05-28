import Card from "react-bootstrap/Card";
import { GoMarkGithub } from "react-icons/go";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Home.css";

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="columnWithMyFace" sm={2}>
            <img
              className="picOfMyFace"
              src="./myface.png"
              alt="profile picture"
            />
            <Card border="grey" style={{ width: 189 }}>
              <Link>
                <GoMarkGithub
                  style={{ margin: 10 }}
                  onClick={(event) =>
                    (window.location.href = "https://github.com/melissawu2022")
                  }
                />
              </Link>
            </Card>
          </Col>
          <Col sm={8}>
            <Card className="columnWithIntro">
              <Card.Body>
                <Card.Title>Welcome</Card.Title>
                <Card.Text>
                  Hi! My name is Melissa Wu; and this is my personal website.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="columnWithIntro">
              <Card.Body>
                <Card.Title>General Skill Stack</Card.Title>
                <Card.Text>
                  Java, Sprint Boot, Python, React/React.js, LINUX, Git/Github,
                  Atlassian stack, Kinesis streams and DynamoDB from AWS{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
