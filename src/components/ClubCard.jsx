import { Card, Button } from "react-bootstrap";
import { useState } from "react";

export default function ClubCard({ club }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <Card>
      <Card.Body>
        <Card.Title>{club.name}</Card.Title>
        <Card.Text>
          Level: {club.level}
          <br />
          Meeting: {club.meeting}
        </Card.Text>
        <Button
          variant={favorite ? "success" : "outline-success"}
          onClick={() => setFavorite(f => !f)}
        >
          {favorite ? "Favorited" : "Add to Favorites"}
        </Button>
      </Card.Body>
    </Card>
  );
}