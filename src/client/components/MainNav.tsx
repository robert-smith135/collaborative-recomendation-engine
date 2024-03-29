import * as React from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormInput,
    Collapse
  } from "shards-react";

export default class MainNav extends React.Component<any, any>  {
    constructor(props) {
        super(props);
    
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);
    
        this.state = {
            dropdownOpen: false,
            collapseOpen: false
        };
    }
    
    toggleDropdown() {
        this.setState({
            ...this.state,
            ...{
            dropdownOpen: !this.state.dropdownOpen
            }
        });
    }

    toggleNavbar() {
        this.setState({
            ...this.state,
            ...{
            collapseOpen: !this.state.collapseOpen
            }
        });
    }

    render() {
        return (
			<Navbar full={true} type="dark" theme="primary" expand={true}>
			<NavbarBrand href="#">Movie Recomender</NavbarBrand>
			<NavbarToggler onClick={this.toggleNavbar} />

			<Collapse open={this.state.collapseOpen} navbar>
			<Nav navbar>
				<NavItem>
				<NavLink active href="#">
					Active
				</NavLink>
				</NavItem>
				<NavItem>
				<NavLink href="#" disabled>
					Disabled
				</NavLink>
				</NavItem>
				<Dropdown
				open={this.state.dropdownOpen}
				toggle={this.toggleDropdown}
				>
				<DropdownToggle nav caret>
					Dropdown
				</DropdownToggle>
				<DropdownMenu>
					<DropdownItem>Action</DropdownItem>
					<DropdownItem>Another action</DropdownItem>
					<DropdownItem>Something else here</DropdownItem>
				</DropdownMenu>
				</Dropdown>
			</Nav>

			<Nav navbar className="ml-auto">
				<InputGroup size="sm" seamless>
				<FormInput className="border-0" placeholder="Search..." />
				</InputGroup>
			</Nav>
			</Collapse>
		</Navbar>
        )
    }
}