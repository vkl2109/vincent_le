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
import { TextScramble } from "./TextScramble"
import { Link } from "react-router-dom";

export function LandingBanner () {
    const [ opened, { toggle }] = useDisclosure(false)

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
                <TextScramble text={"Full Stack Mobile App & Web Developer"}/>
                <Link to={"mailto:vincentle2021@gmail.com"} target="_blank">
                    <Button 
                    size="xl" variant="gradient" radius="xl">
                        Work With Me
                    </Button>
                </Link>
            </Group>
        </BackgroundImage>
    )
}