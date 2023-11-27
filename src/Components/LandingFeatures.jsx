import {
    Group,
    Stack,
    Button,
    rem,
    Badge,
    Divider
} from "@mantine/core"
import { FeatureCard } from "./FeatureCard"

const featuredData = [
    {
        id: 0,
        name: 'Hyve',
        slogan: 'Fund Events With Friends',
        image: 'hyve',
        description: 'A new event scheduling and payments automation platform: send invites, collect money upfront, and withdraw funds all in one place.',
        techStack: [
            {
                id: 0,
                name: 'React Native'
            },
            {
                id: 1,
                name: 'Firebase',
            },
            {
                id: 2,
                name: 'Expo Go',
            }
        ],
        links: [
            {
                id: 0,
                link: 'https://www.joinhyve.io/',
                name: 'Landing Page',
            },
            {
                id: 1,
                link: 'https://apps.apple.com/us/app/hyve-fund-events-with-friends/id6449512036',
                name: 'App Store'
            }
        ]
    },
    {
        id: 1,
        name: 'Turbo1031',
        slogan: 'Lightning Fast 1031 Exchanges',
        image: 'turbo1031',
        description: 'An automated 1031 exchange forms platform with secure user auth, Stripe payment processing, PDF auto-completion, and automated email reminders.',
        techStack: [
            {
                id: 0,
                name: 'React'
            },
            {
                id: 1,
                name: 'Django',
            },
            {
                id: 2,
                name: 'Ant Design',
            }
        ],
        links: [
            {
                id: 0,
                link: 'https://www.turbo1031exchange.com/',
                name: 'Full Site'
            },
        ]
    }
]

export function LandingFeatures () {
    return(
        <Stack 
            justify="start"
            align="center"
            p="xl">
            <Badge size={rem(30)} variant="outline" p="xl">Featured Work</Badge>
            <Divider my="sm" color="white" w="90vw" />
            <Group gap="xl" justify="center" wrap>
                {featuredData.map(feature => {
                    return(
                        <FeatureCard cardData={feature} key={feature.id} />
                    )
                })}
                {/* <Card padding="lg" radius="md" withBorder w={rem(400)}>
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
                </Card> */}
            </Group>
            <Button size="xl" variant="light" radius="xl">See More</Button>
        </Stack>
    )
}