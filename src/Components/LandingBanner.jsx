import {
    BackgroundImage,
    Group,
    Avatar,
    Title,
    Container,
    Button,
    rem,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import images from "../assets"
import classes from "../CSS/LandingPage.module.css"

export function LandingBanner () {
    const [ opened, { toggle }] = useDisclosure(false)

    const handleClick = () => {
        window.open("mailto:vincentle2021@gmail.com")
    }

    return(
        <BackgroundImage 
            src={images.waves}
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
                            src={images.vincentle}
                            class={classes.avatar}
                            />
                        <Avatar 
                            src={images.logo}
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
                size="xl" variant="gradient" radius="xl">
                    Work With Me
                </Button>
            </Group>
        </BackgroundImage>
    )
}