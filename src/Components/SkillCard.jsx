import {
    Card,
    Title,
    rem
} from "@mantine/core"
import PropTypes from 'prop-types';

export function SkillCard ({ skill }) {
    return(
    <Card p="xl" radius="lg" withBorder maw={rem(400)}>
      <Card.Section withBorder>
        <Title order={2}>{skill.category}</Title>
      </Card.Section>
    </Card>
    )
}

SkillCard.propTypes = {
  skill: PropTypes.shape({
    category: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string.isRequired,
    })),
  }).isRequired,
};