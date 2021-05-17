import PropTypes from 'prop-types'

PlayerForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default function PlayerForm({ onSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Player name
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
