import styled from 'styled-components'
import PropTypes from 'prop-types'
import HistoryPlayerScore from './HistoryPlayerScore'

HistoryEntry.propTypes = {
  gameName: PropTypes.string,
}

export default function HistoryEntry({ gameName }) {
  return (
    <HistoryEntryWrapper>
      <h2>{gameName}</h2>
      <div>
        <HistoryPlayerScore name="Anni" score="20" />
        <HistoryPlayerScore name="Lucia" score="30" />
      </div>
    </HistoryEntryWrapper>
  )
}

const HistoryEntryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
