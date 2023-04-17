import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {lightMode: true}

  changing = () => {
    this.setState(prevState => ({lightMode: !prevState.lightMode}))
  }

  jadon = () => {
    const {lightMode} = this.state
    if (lightMode === true) {
      return 'Light Mode'
    }
    return 'Dark Mode'
  }

  jadon2 = () => {
    const {lightMode} = this.state
    if (lightMode === true) {
      return 'second-container'
    }
    return 'second-container2'
  }

  jadon3 = () => {
    const {lightMode} = this.state
    if (lightMode === true) {
      return 'para'
    }
    return 'para1'
  }

  render() {
    const text = this.jadon()
    const color = this.jadon2()
    const paragraph = this.jadon3()

    return (
      <div className="bg-container">
        <div className={color}>
          <p className={paragraph}>Click to change Mode</p>
          <button type="button" onClick={this.changing}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
