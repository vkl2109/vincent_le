import {
    Group,
    Stack,
    rem,
    Badge,
    Divider
} from "@mantine/core"
import { FeatureCard } from "../Components"
import { totalData } from "../Constants"

export function PortfolioPage () {
    return(<Stack 
            justify="start"
            align="center"
            p="xl">
            <Badge size={rem(30)} variant="outline" p="xl">My Portfolio</Badge>
            <Divider my="sm" color="white" w="90vw" />
            <Group gap="xl" justify="center" wrap>
                {totalData.map(feature => {
                    return(
                        <FeatureCard cardData={feature} key={feature.id} />
                    )
                })}
            </Group>
    </Stack>)
}