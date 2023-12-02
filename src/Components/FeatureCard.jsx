import {
    Group,
    Title,
    Stack,
    Button,
    rem,
    Badge,
    Card,
    Image,
    Pill,
    Text,
} from "@mantine/core"
import images from "../assets"
import PropTypes from 'prop-types';

export function FeatureCard ({ cardData }) {
    return(
        <Card radius="md" withBorder maw={rem(400)}>
            <Card.Section withBorder>
                <Image
                src={images[cardData.image]}
                h={rem(150)}
                alt={cardData.image}
                />
            </Card.Section>
            <Card.Section p="md" withBorder justify="center" align="center">
                <Stack gap="sm" justify="center" align="center" mb="sm">
                    <Title order={2}>{cardData.name}</Title>
                    <Badge variant="outline" size="lg">{cardData.slogan}</Badge>
                </Stack>
                <Text fz="md" c="dimmed" fw={300} lineClamp={3}>
                    {cardData?.description}
                </Text>
                <Group gap="sm" wrap p="sm"  justify="center">
                    {cardData.techStack.map((pill => {
                        return(
                            <Pill key={pill.id} size="lg">{pill.name}</Pill>
                        )
                    }))}
                </Group>
            </Card.Section>
            <Card.Section>
                <Group
                w="100%"
                gap="xs"
                px="sm"
                justify="center"
                align="center">
                    {cardData.links.map(link => {
                        return(
                            <Button 
                            key={link.id}
                            variant="light" color="blue" m="md" 
                            style={{ flex: 1 }}
                            radius="md"
                            onClick={() => window.open(link.link)}
                            >
                                {link.name}
                            </Button>
                        )
                    })}
                </Group>
            </Card.Section>
        </Card>
    )
} 

FeatureCard.propTypes = {
  cardData: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    slogan: PropTypes.string,
    description: PropTypes.string,
    techStack: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string.isRequired,
    })),
    links: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })),
  }).isRequired,
};