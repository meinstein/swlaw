import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './styles'

const Link = props => <NavLink activeStyle={styles.active} style={styles.link} {...props} />

const Nav = () => (
  <nav style={styles.container}>
    <Link to="/day/1">Day 1</Link>
    <Link to="/day/2">Day 2</Link>
    <Link to="/day/3">Day 3</Link>
    <Link to="/day/4">Day 4</Link>
  </nav>
)

export default Nav
