import {
    Stack,
    Container
} from "@mantine/core"
import {
    AvatarFlip,
    TypingText
} from "../Components"
import { bio } from "../Constants"

export function AboutPage () {

    return(
        <Stack 
        justify="start"
        align="center"
        p="xl"
        h={"calc(100vh - var(--app-shell-header-height, 0px) - var(--app-shell-footer-height, 0px)"}
        >
            <AvatarFlip />
            <Container miw="50vw" maw="75vw">
                <TypingText text={bio} />
            </Container>
        </Stack>
    )
}