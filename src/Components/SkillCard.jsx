import PropTypes from 'prop-types';

export function SkillCard ({ skill }) {
    return(<>
    </>)
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