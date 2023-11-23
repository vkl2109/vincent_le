import { Container, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandGithub, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Group h={50} gap={0} justify="flex-end">
        <Link to={"https://www.github.com/vkl2109"} target="_blank">
            <ActionIcon size="lg" color="gray" variant="subtle">
                <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
        </Link>
        <Link to={"https://www.youtube.com/c/vincentlemusic"} target="_blank">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Link>
        <Link to={"https://www.instagram.com/vincentlemusic"} target="_blank">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Link>
      </Group>
    </Container>
  );
}