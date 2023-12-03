import {
    Stack,
    Group,
    Divider,
    rem,
    Badge,
    Title
} from "@mantine/core"
import { SkillCard } from "../Components"
import { skillData } from "../Constants"

export function LandingSkills () {
    return(
        <Stack
            justify="center"
            align="center"
            p="xl">
            <Badge size={rem(30)} variant="outline" p="xl">Resume</Badge>
            <Divider my="sm" color="white" w="90vw" />
            {/* <Group 
                justify="center"
                align="center"
                gap="xl"
                wrap
                >
                {skillData.map((skill) => {
                    return(<SkillCard key={skill.id} skill={skill}/>)
                })}
            </Group> */}
            <Group justify="space-between" align="center" w="80vw">
                <Stack>
                    <Title>Working Experience</Title>
                </Stack>
                <Stack>
                    <Title>Skills</Title>
                </Stack>
            </Group>
        </Stack>
    )
}