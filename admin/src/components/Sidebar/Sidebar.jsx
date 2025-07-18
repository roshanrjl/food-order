import React from 'react'
import './Sidebar.css'
import assets from '../../assets/assets.js'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-options">
<NavLink to='/add' className="sidebar-option">
  <img src={assets.add_icon} alt="" />
  <p>ADD Items</p>
</NavLink>

<NavLink to='/list' className="sidebar-option">
  <img src={assets.order_icon} alt="" />
  <p>List Item</p>
</NavLink>

<NavLink to='/orders' className="sidebar-option">
  <img src={assets.order_icon} alt="" />
  <p>Orders</p>
</NavLink>
<NavLink to='/remove' className="sidebar-option">
  <img src={assets.order_icon} alt="" />
  <p>Remove</p>
</NavLink>

        </div>
      </div>
    </div>
  )
}

export default Sidebar

