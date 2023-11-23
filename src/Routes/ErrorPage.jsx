import { useRouteError, useNavigate } from "react-router-dom";
import { Title, Text, Button, Container, Group } from '@mantine/core';

export default function ErrorPage () {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  }

  return (
    <Container>
      <div>404</div>
      <Title>You have found a secret place.</Title>
      <Text size="lg" align="center">
        Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has
        been moved to another URL.
      </Text>
      <Group position="center">
        <Button variant="subtle" size="md" onClick={handleRedirect}>
          Take me back to home page
        </Button>
      </Group>
    </Container>
  );
}