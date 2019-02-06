import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <h2>Menu</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/generic">Ipsum veroeros</Link>
        </li>
        <li>
          <Link to="/generic">Tempus etiam</Link>
        </li>
        <li>
          <Link to="/generic">Consequat dolor</Link>
        </li>
        <li>
          <Link to="/elements">Elements</Link>
        </li>
      </ul>
    </div>
    <div className="close" onClick={props.onToggleMenu} >
      Close
    </div>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
