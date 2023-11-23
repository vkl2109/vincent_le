import { Container, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';

export default function Footer() {
  return (
    <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Group h={50} gap={0} justify="flex-end">
        <ActionIcon size="lg" color="gray" variant="subtle">
          <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </ActionIcon>
        <ActionIcon size="lg" color="gray" variant="subtle">
          <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </ActionIcon>
        <ActionIcon size="lg" color="gray" variant="subtle">
          <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Container>
  );
}