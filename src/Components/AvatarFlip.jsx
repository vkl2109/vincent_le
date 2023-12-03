import {
    Avatar,
    Container,
    rem,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import images from "../assets"
import classes from "../CSS/LandingPage.module.css"

export function AvatarFlip () {
    const [ opened, { toggle }] = useDisclosure(false)

    return(
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
    )
}