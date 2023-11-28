import {
    Group,
    Stack,
    Button,
    rem,
    Badge,
    Divider
} from "@mantine/core"
import { FeatureCard } from "./FeatureCard"
import { useNavigate } from "react-router-dom"
import { featuredData } from "../Constants"

export function LandingFeatures () {
    const navigate = useNavigate()

    const handleMore = () => {
        navigate('/portfolio')
    }

    return(
        <Stack 
            justify="start"
            align="center"
            p="xl">
            <Badge size={rem(30)} variant="outline" p="xl">Featured Work</Badge>
            <Divider my="sm" color="white" w="90vw" />
            <Group gap="xl" justify="center" wrap>
                {featuredData.map(feature => {
                    return(
                        <FeatureCard cardData={feature} key={feature.id} />
                    )
                })}
            </Group>
            <Button onClick={handleMore} size="xl" variant="light" radius="xl">See More</Button>
        </Stack>
    )
}