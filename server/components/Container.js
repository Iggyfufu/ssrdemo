const React = require('react')
const { connect } = require('react-redux')

class Component extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('mounted');
  }

  render() {
    return (
      <div>
        <h1>Cats!</h1>
        <div>
          {this.props.imgs && this.props.imgs.map(img => (
            <img src={img.src} />
          ))}
        </div>
      </div>
    )
  }
}

const mapState = state => ({ imgs: state.imgs })

const ContainerComponent = connect(mapState)(Component)

module.exports = { ContainerComponent }