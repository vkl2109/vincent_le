import {
    BackgroundImage,
    Group,
    Avatar,
    Title,
    Container,
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
import { useDisclosure } from "@mantine/hooks"
import waves from "../assets/waves.svg"
import vincentle from "../assets/vincentle.png"
import logo from "../assets/logo.png"
import classes from "./LandingPage.module.css"


export function LandingPage () {
    const [ opened, { toggle }] = useDisclosure(false)

    const handleClick = () => {
        window.open("mailto:vincentle2021@gmail.com")
    }

    return(<>
        <BackgroundImage 
            src={waves}
            h={"calc(100vh - var(--app-shell-header-height, 0px) - var(--app-shell-footer-height, 0px)"}
            >
            <Group
                w="100%"
                h="100%"
                class={classes.backgroundWaves}
                >
                <Container 
                    style={{ perspective: rem(1000) }}>
                    <Container class={classes.innerCard} 
                    onClick={toggle}
                    style={{ transform: opened ? "rotateY(360deg)" : "rotateY(0deg)"}}>
                        <Avatar 
                            src={vincentle}
                            class={classes.avatar}
                            />
                        <Avatar 
                            src={logo}
                            p="xl"
                            class={classes.avatarBack}
                            />
                    </Container>
                </Container>
                <Title order={1} mt="lg">
                    {"Hi, I'm Vincent!"}
                </Title>
                <Title size={rem(50)} m="lg">
                    Full Stack Mobile App & Web Developer
                </Title>
                <Button 
                onClick={handleClick}
                size="xl" variant="filled" radius="xl" bg="white" c="black">
                    Work With Me
                </Button>
            </Group>
        </BackgroundImage>
        <Stack h={"calc(100vh - var(--app-shell-header-height, 0px) - var(--app-shell-footer-height, 0px)"}
            justify="start"
            align="center"
            p="xl">
            <Badge size={rem(30)} p="xl">My Work</Badge>
            <Divider my="sm" color="white" w="90vw" />
            <Group gap="xl" wrap>
                <Card padding="lg" radius="md" withBorder w={rem(400)}>
                    <Card.Section>
                        <Image
                        src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                        height={160}
                        alt="Norway"
                        />
                    </Card.Section>
                    <Card.Section p="md" withBorder justify="center" align="center">
                        <Group gap="lg" justify="center" align="center" wrap>
                            <Title>Hyve</Title>
                            <Badge variant="outline" size="lg">{"Fund Events With Friends"}</Badge>
                        </Group>
                        <Text fz="md" c="dimmed" fw={300} lineClamp={4}>
                            A new payments platform designed to help you create social experiences with your friends. Send invites, collect money upfront, and withdraw funds all in one place.
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
            </Group>
        </Stack>
    </>)
}