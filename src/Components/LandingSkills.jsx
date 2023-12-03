import {
    Stack,
    Group,
    Divider,
    rem,
    Badge,
    Title,
    Text,
    Button
} from "@mantine/core"
import { IconDownload } from "@tabler/icons-react"
import { SkillCard } from "../Components"
import { skillData } from "../Constants"
import resume from "../assets/Vincent_Le_Resume.pdf"

const resumeData = [
    {
        id: 0,
        position: 'Machine Learning Researcher',
        company: 'Department of Investigation',
        dates: 'July 2023 - present',
    },
    {
        id: 1,
        position: 'Back End Developer',
        company: 'The Bulletin',
        dates: 'August 2023 - present',
    },
    {
        id: 2,
        position: 'Full Stack Software Developer Intern',
        company: 'Turbo 1031 Exchange',
        dates: 'June 2023 - August 2023',
    },
    {
        id: 3,
        position: 'Web Developer Apprentice',
        company: 'Coding for Hermit Crabs',
        dates: 'February 2023 - August 2023',
    }
]

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
            <Stack>
                <Title>Education</Title>
                <Group></Group>
            </Stack>
            <Group justify="space-between" align="start" w="75vw">
                <Stack align="flex-start">
                    <Title>Working Experience</Title>
                    {resumeData.map((resume) => {
                        return(
                            <Stack key={resume.id} align="start">
                                <Text fw={700}>{resume.position}</Text>
                                <Text>{resume.company}</Text>
                                <Text c="dimmed">{resume.dates}</Text>
                            </Stack>
                        )
                    })}
                </Stack>
                <Stack align="flex-start">
                    <Title>Skills</Title>
                    {skillData.map((skill) => {
                        return(
                            <Stack key={skill.id} align="flex-start">
                                {skill.list.map((item) => {
                                    return(<Text key={item.id}>{item.name}</Text>)
                                })}
                            </Stack>
                        )
                    })}
                </Stack>
            </Group>
            <Button 
                size="xl" 
                variant="light" 
                radius="xl"
                rightSection={<IconDownload size={24} />}
                component="a"
                download="Vincent_Le_Resume"
                target="_blank"
                href={resume}
                >
                Download
            </Button>
        </Stack>
    )
}