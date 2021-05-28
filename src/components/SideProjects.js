import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./WorkExperience.css";

function SideProjects() {
  return (
    <div>
      <Container>
        <div className="space-between">
          <Card className="text-left" border="primary">
            <Card.Header as="h5">
              BobaTime (September 2020 - Present)
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>Uses React.js, HTML, javascript, CSS for the frontend</li>
                  <li>
                    Calls Yelp's API to search for bubble tea stores in a
                    certain radius, sorts returned stores based on 5-star rating
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>{" "}
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default SideProjects;
