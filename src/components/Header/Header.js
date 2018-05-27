import React from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink } from 'reactstrap';

const Header =  props  => {
    return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Tarea 10 Omar</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={true} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
};

export default Header;