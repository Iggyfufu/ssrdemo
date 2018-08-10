const React = require('react')
const { connect } = require('react-redux')
const { fetchImgs } = require('./store')

class Component extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('mounted');
    this.props.fetchImgs()
  }

  render() {
    return (
      <div>
        <h1>Cats!</h1>
        <div>
          {this.props.imgs && this.props.imgs.map(img => (
            <img key={img.id} src={img.src} />
          ))}
        </div>
      </div>
    )
  }
}

const mapState = state => ({ imgs: state.imgs })
const mapDispatch = { fetchImgs }

const ContainerComponent = connect(mapState, mapDispatch)(Component)

module.exports = { ContainerComponent }