import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./WorkExperience.css";

function WorkExperience() {
  return (
    <div>
      <Container>
        <div className="space-between">
          <Card className="text-left" border="primary">
            <Card.Header as="h5">
              Cision CNW Newswire (January 2021 - April 2021)
            </Card.Header>
            <Card.Body>
              <Card.Subtitle> Software Developer</Card.Subtitle>
              <Card.Text>
                <ul>
                  <li>
                    Expanded upon and helped complete existing UK compliance
                    reporting project
                    <ul>
                      <li>
                        Implemented additional features to optimize reporting
                        project, requirements from CLA and NLA licensing bodies,
                        and unit tests using Java and Spring Boot
                      </li>
                      <li>
                        Performed database migration for German compliance
                        project using Groovy
                      </li>
                    </ul>
                  </li>
                  <li>
                    Augmented existing ingestion pipeline by integrating feed
                    from CEDROM using Java
                  </li>
                  <li>
                    Worked with additional tools such as AWS Kinesis, DynamoDB,
                    and Elasticsearch
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>{" "}
          </Card>
        </div>

        <div className="space-between">
          <Card className="text-left" border="primary">
            <Card.Header as="h5">
              Cision CNW Newswire (June 2020 - August 2020)
            </Card.Header>
            <Card.Body>
              <Card.Subtitle>Software Tester</Card.Subtitle>
              <Card.Text>
                <ul>
                  <li>
                    Improved the stability of 10 test cases and migrated them to
                    the new automation framework
                  </li>
                  <li>
                    Created 18 test cases to validate email scheduling UI
                    features
                  </li>
                  <li>
                    Used the Selenium Webdriver framework, Cucumber and Gherkin
                    to automate test cases, and used Java to implement step
                    definitions for Cision's new automation framework
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

export default WorkExperience;
