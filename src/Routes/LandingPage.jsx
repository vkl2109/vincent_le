import {
    Stack,
    Divider
} from "@mantine/core"
import { 
    LandingBanner,
    LandingFeatures,
    LandingSkills
} from "../Components"


export function LandingPage () {

    return(
        <Stack>
            <LandingBanner />
            <LandingFeatures />
            <Divider />
            <LandingSkills />
        </Stack>
    )
}