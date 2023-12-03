import {
    BackgroundImage,
    Group,
    Title,
    Button,
} from "@mantine/core"
import images from "../assets"
import classes from "../CSS/LandingPage.module.css"
import { TextScramble } from "./TextScramble"
import { Link } from "react-router-dom";
import {
    AvatarFlip
} from "../Components"

export function LandingBanner () {

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
                <AvatarFlip />
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