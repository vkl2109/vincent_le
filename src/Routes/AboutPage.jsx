import {
    Stack,
} from "@mantine/core"
import {
    AvatarFlip
} from "../Components"

export function AboutPage () {

    return(
        <Stack 
        justify="center"
        align="center"
        h={"calc(100vh - var(--app-shell-header-height, 0px) - var(--app-shell-footer-height, 0px)"}>
            <AvatarFlip />
        </Stack>
    )
}