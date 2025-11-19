import { Container, Row, Col } from "react-bootstrap";
import ClubCard from "./ClubCard.jsx";

const CLUBS = [
  { id: 1, name: "Soccer Club", level: "Intermediate", meeting: "Mon 7 PM" },
  { id: 2, name: "Basketball Club", level: "Beginner-Friendly", meeting: "Wed 6 PM" },
  { id: 3, name: "Badminton Club", level: "All Levels", meeting: "Fri 5 PM" },
];

export default function Clubs() {
  return (
    <Container className="py-4">
      <h2>Sports Clubs</h2>
      <Row className="g-3">
        {CLUBS.map(c => (
          <Col key={c.id} md={4}>
            <ClubCard club={c} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}