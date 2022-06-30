
const Nav = () => {
  return (
    <nav className="fixed split-nav">
      <div className="nav-brand">
        <h3><a href="#">Gossip</a></h3>
      </div>
      <div className="collapsible">
        <label htmlFor="collapsible">
          <input id="collapsible" type="checkbox" name="collapsible" />
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </label>
        <div className="collapsible-body">
          <ul className="inline">
            <li><a href="#">Post</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Github</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
