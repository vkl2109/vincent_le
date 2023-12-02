import {
    Stack,
    Divider,
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
            <Title>Skills</Title>
            <Divider my="sm" color="white" w="90vw" />
            {skillData.map((skill) => {
                return(<SkillCard key={skill.id} skill={skill}/>)
            })}
        </Stack>
    )
}