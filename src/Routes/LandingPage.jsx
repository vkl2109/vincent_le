import {
    BackgroundImage,
} from "@mantine/core"
import waves from "../assets/waves.svg"

export function LandingPage () {
    return(
        <BackgroundImage src={waves} mih="50vh">
            Landing Page
        </BackgroundImage>
    )
}