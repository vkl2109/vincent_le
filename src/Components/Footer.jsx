import { Group, ActionIcon, rem, Button } from '@mantine/core';
import { 
  IconBrandGithub, 
  IconBrandYoutube, 
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconPhone
} from '@tabler/icons-react';
import { Link } from "react-router-dom";

export function Footer() {

  return (
    <Group h={rem(75)} justify="space-evenly" align="center" wrap>
      <Link to={"mailto:vincentle2021@gmail.com"} target="_blank">
        <ActionIcon hiddenFrom="sm" size="xl" color="gray" variant="outline" radius="xl">
            <IconMail style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
        </ActionIcon>
        <Button w={rem(300)} visibleFrom="sm" variant="subtle">vincentle2021@gmail.com</Button>
      </Link>
      <Group h="100%" justify="center" align="center">
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
      <Link to={"tel:+1 818 207 7859"} target="_blank">
        <ActionIcon hiddenFrom="sm" size="xl" color="gray" variant="outline" radius="xl">
            <IconPhone style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
        </ActionIcon>
        <Button visibleFrom="sm" w={rem(300)} variant="subtle">+1 (818) 207-7859</Button>
      </Link>
    </Group>
  );
}