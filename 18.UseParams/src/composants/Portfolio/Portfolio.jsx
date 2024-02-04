import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export default function Portfolio() {
  return (
    <div>
      <h1>Page Portfolio</h1>
      <nav>
        <Link to="/portfolio/photographies">Photographies</Link>
        <Link to="/portfolio/graphisme">Graphisme</Link>
        <Outlet />
      </nav>
    </div>
  );
}
