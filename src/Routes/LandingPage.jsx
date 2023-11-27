import {
    BackgroundImage,
    Group,
    Avatar,
    Title,
    Container,
    rem
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import waves from "../assets/waves.svg"
import vincentle from "../assets/vincentle.png"
import logo from "../assets/logo.png"
import classes from "./LandingPage.module.css"

export function LandingPage () {
    const [ opened, { toggle }] = useDisclosure(false)

    return(
        <BackgroundImage 
            src={waves}
            h={"calc(100vh - var(--app-shell-header-height, 0px) - var(--app-shell-footer-height, 0px)"}
            >
            <Container
                w="100%"
                h="100%"
                class={classes.backgroundWaves}
                >
                <Group
                    justify="center"
                    align="center"
                    gap={rem(50)}
                    wrap
                    >
                    <Container 
                        h={rem(200)}
                        w={rem(200)}
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
                    <Title order={1} size={rem(50)}>
                        Hi, I'm Vincent!
                    </Title>
                </Group>
            </Container>
        </BackgroundImage>
    )
}