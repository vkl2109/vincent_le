import {
    Group,
    Title,
    Stack,
    Button,
    rem,
    Badge,
    Card,
    Image,
    Pill,
    Text,
    Divider
} from "@mantine/core"
import {
    turbo1031,
    hyve
} from "../assets"

export function LandingFeatures () {
    return(
        <Stack 
            justify="start"
            align="center"
            p="xl">
            <Badge size={rem(30)} p="xl">My Work</Badge>
            <Divider my="sm" color="white" w="90vw" />
            <Group gap="xl" justify="center" wrap>
                <Card padding="lg" radius="md" withBorder w={rem(400)}>
                    <Card.Section>
                        <Image
                        src={hyve}
                        h={rem(150)}
                        alt="Hyve"
                        />
                    </Card.Section>
                    <Card.Section p="md" withBorder justify="center" align="center">
                        <Stack gap="sm" justify="center" align="center" mb="sm">
                            <Title>Hyve</Title>
                            <Badge variant="outline" size="lg">{"Fund Events With Friends"}</Badge>
                        </Stack>
                        <Text fz="md" c="dimmed" fw={300} lineClamp={3}>
                            A new event scheduling and payments automation platform: send invites, collect money upfront, and withdraw funds all in one place.
                        </Text>
                        <Group gap="sm" wrap p="sm"  justify="center">
                            <Pill size="lg">React Native</Pill>
                            <Pill size="lg">Firebase</Pill>
                            <Pill size="lg">Expo Go</Pill>
                        </Group>
                    </Card.Section>
                    <Card.Section>
                        <Button variant="light" color="blue" m="md" w="40%" radius="md"
                        onClick={() => window.open("http://joinhyve.io/")}
                        >
                            Landing Page
                        </Button>
                        <Button 
                        variant="light" color="blue" m="md" w="40%" radius="md"
                        onClick={() => window.open("https://apps.apple.com/us/app/hyve-fund-events-with-friends/id6449512036")}
                        >
                            App Store
                        </Button>
                    </Card.Section>
                </Card>
                <Card padding="lg" radius="md" withBorder w={rem(400)}>
                    <Card.Section withBorder>
                        <Image
                        src={turbo1031}
                        h={rem(150)}
                        alt="Turbo1031"
                        />
                    </Card.Section>
                    <Card.Section p="md" withBorder justify="center" align="center">
                        <Stack gap="sm" justify="center" align="center" wrap mb="sm">
                            <Title>Turbo1031</Title>
                            <Badge variant="outline" size="lg">{"Lightning Fast 1031 Exchanges"}</Badge>
                        </Stack>
                        <Text fz="md" c="dimmed" fw={300} lineClamp={3}>
                            An automated 1031 exchange forms platform with secure user auth, Stripe payment processing, PDF auto-completion, and automated email reminders.
                        </Text>
                        <Group gap="sm" wrap p="sm"  justify="center">
                            <Pill size="lg">React</Pill>
                            <Pill size="lg">Django</Pill>
                            <Pill size="lg">Ant Design</Pill>
                        </Group>
                    </Card.Section>
                    <Button variant="light" color="blue" mt="md" fullWidth radius="md"
                    onClick={() => window.open("https://www.turbo1031exchange.com/")}
                    >
                        Full Site
                    </Button>
                </Card>
            </Group>
        </Stack>
    )
}