import { Container, Group, ActionIcon, rem } from '@mantine/core';
import { 
  IconBrandGithub, 
  IconBrandYoutube, 
  IconBrandInstagram,
  IconBrandLinkedin
} from '@tabler/icons-react';
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <Container h={rem(75)} style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Group h="100%" gap={10} justify="center" align="center">
        <Link to={"https://www.github.com/vkl2109"} target="_blank">
            <ActionIcon size="xl" color="gray" variant="outline" radius="xl">
                <IconBrandGithub style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
            </ActionIcon>
        </Link>
        <Link to={"https://www.youtube.com/c/vincentlemusic"} target="_blank">
          <ActionIcon size="xl" color="gray" variant="outline" radius="xl">
            <IconBrandYoutube style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
          </ActionIcon>
        </Link>
        <Link to={"https://www.instagram.com/vincentlemusic"} target="_blank">
          <ActionIcon size="xl" color="gray" variant="outline" radius="xl">
            <IconBrandInstagram style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
          </ActionIcon>
        </Link>
        <Link to={"https://linkedin.com/in/vincentkhacle"} target="_blank">
          <ActionIcon size="xl" color="gray" variant="outline" radius="xl">
            <IconBrandLinkedin style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
          </ActionIcon>
        </Link>
      </Group>
    </Container>
  );
}