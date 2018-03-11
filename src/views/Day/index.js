import * as React from 'react'

import { Markdown, Loader } from '../../components'
import styles from './styles'

class Day extends React.Component {
  state = {
    source: '',
    updating: false
  }

  componentDidMount = () => this._getDay(this.props.num)

  componentWillReceiveProps = ({ num }) => {
    if (this.props.num !== num) {
      this._getDay(num)
    }
  }

  _getDay = async num => {
    this.setState(prevState => ({ ...prevState, updating: true }))
    const file = require(`../../days/${num}.md`)
    const res = await fetch(file)
    const text = await res.text()
    // graceful loading
    setTimeout(() => this.setState(prevState => ({ ...prevState, updating: false, source: text })), 350)
  }

  render = () => (
    <div style={{ position: 'relative' }}>
      {this.state.source ? (
        <React.Fragment>
          {this.state.updating && <Loader />}
          <Markdown
            style={{
              transition: 'all 350ms ease-in',
              opacity: this.state.updating ? 0 : 1,
              ...styles.container
            }}
          >
            {this.state.source}
          </Markdown>
        </React.Fragment>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default Day
