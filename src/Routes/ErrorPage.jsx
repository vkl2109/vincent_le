import { useRouteError, useNavigate } from "react-router-dom";
import { Title, Text, Badge, Button, Stack, Group, rem } from '@mantine/core';

export function ErrorPage () {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  }

  return (
    <Stack justify="center" align="center" h="calc(100vh - var(--app-shell-header-height, 0px) - var(--app-shell-footer-height, 0px)">
      <Badge size={rem(50)} p="xl">404</Badge>
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
    </Stack>
  );
}