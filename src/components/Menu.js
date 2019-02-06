import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = props => (
  <nav id="menu" ref={props.domRef}>
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
    <div className="close" onClick={props.onToggleMenu}>
      Close
    </div>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
  domRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
}

export default Menu
