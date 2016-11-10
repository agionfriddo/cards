import React from 'react';

const Navbar = (props) => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
        {/* Title */}
        <span className="mdl-layout-title">Title</span>
        {/* Add spacer, to align navigation to the right */}
        <div className="mdl-layout-spacer"></div>
        {/* Navigation. We hide it in small screens. */}
        <nav className="mdl-navigation mdl-layout--large-screen-only">
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
        </nav>
      </div>
    </header>
    <div className="mdl-layout__drawer">
      <span className="mdl-layout-title">Title</span>
      <nav className="mdl-navigation">
        <a className="mdl-navigation__link" href="">Link</a>
        <a className="mdl-navigation__link" href="">Link</a>
        <a className="mdl-navigation__link" href="">Link</a>
        <a className="mdl-navigation__link" href="">Link</a>
      </nav>
    </div>
    <main className="mdl-layout__content">
      <div className="page-content">{props.children}</div>
    </main>
  </div>
)

export default Navbar;
