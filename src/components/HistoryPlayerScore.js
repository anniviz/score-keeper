import styled from 'styled-components'
import PropTypes from 'prop-types'

HistoryPlayerScore.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
}

export default function HistoryPlayerScore({ name, score }) {
  return (
    <HistoryPlayerScoreWrapper>
      <span>{name}</span>
      <span>{score}</span>
    </HistoryPlayerScoreWrapper>
  )
}

const HistoryPlayerScoreWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
