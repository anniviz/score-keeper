import PropTypes from 'prop-types'
import './PlayerForm.css'

PlayerForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default function PlayerForm({ onSubmit }) {
  return (
    <form className="PlayerForm" onSubmit={handleSubmit}>
      <label>
        Player name:
        <input name="name" type="text" placeholder="Player name" />
      </label>
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const name = event.target.elements.name.value
    onSubmit(name)
  }
}
