import {
    Group,
    Stack,
    Button,
    rem,
    Badge,
    Divider
} from "@mantine/core"
import { FeatureCard } from "./FeatureCard"
import { useNavigate } from "react-router-dom"

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
                name: 'joinhyve.io',
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
                name: 'turbo1031exchange.com'
            },
        ]
    },
    {
        id: 2,
        name: 'Coding For Hermit Crabs',
        slogan: 'Beginner Friendly Coding',
        image: 'hermitcrab',
        description: 'An educational nonprofit platform introducing IT skills and training to the disenfranchised as a path to financial independence.',
        techStack: [
            {
                id: 0,
                name: 'Ruby on Rails'
            },
            {
                id: 1,
                name: 'React',
            },
            {
                id: 2,
                name: 'TypeScript'
            }
        ],
        links: [
            {
                id: 0,
                link: 'https://www.codingforhermitcrabs.org/',
                name: 'codingforhermitcrabs.org'
            }
        ]
    }
]

export function LandingFeatures () {
    const navigate = useNavigate()

    const handleMore = () => {
        navigate('/portfolio')
    }

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
            </Group>
            <Button onClick={handleMore} size="xl" variant="light" radius="xl">See More</Button>
        </Stack>
    )
}