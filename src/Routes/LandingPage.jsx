import {
    Stack,
} from "@mantine/core"
import { 
    LandingBanner,
    LandingFeatures
} from "../Components"

export function LandingPage () {

    return(<Stack>
        <LandingBanner />
        <LandingFeatures />
    </Stack>)
}