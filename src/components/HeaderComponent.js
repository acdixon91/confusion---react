import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.checkNav = this.checkNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  checkNav() {
    if (this.state.isNavOpen) {
      this.toggleNav();
    }
  }

  handleLogin(event) {
    this.toggleModal();
    alert(
      "Username: " +
        this.username.value +
        " Password: " +
        this.password.value +
        " Remember " +
        this.remember.checked
    );
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md" fixed="top">
          <div className="container-fluid">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-md-5 ml-md-3" href="/">
              <img
                src="assets/images/ignis.logo.jpeg"
                height="50"
                width="130"
                alt="Ristorane Con Fusion"
                className=""
              ></img>
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink
                    className="nav-link"
                    to="/home"
                    onClick={this.checkNav}
                  >
                    <i className="fa fa-home fa-lg"></i> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link"
                    to="/aboutus"
                    onClick={this.checkNav}
                  >
                    <i className="fa fa-info fa-lg"></i> About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link"
                    to="/menu"
                    onClick={this.checkNav}
                  >
                    <i className="fa fa-list fa-lg"></i> Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link"
                    to="/contactus"
                    onClick={this.checkNav}
                  >
                    <i className="fa fa-address-card fa-lg"></i> Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline className="mr-3" onClick={this.toggleModal}>
                    <i className="fa fa-sign-in fa-lg"></i> Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ignis con Restaurante</h1>
                <p>
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your culinary senses!
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember Me
                </Label>
              </FormGroup>
              <Button
                type="submit"
                value="submit"
                className="bg-primary mt-3 mr-md-3"
              >
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
