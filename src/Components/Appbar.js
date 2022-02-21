import React,{ useState } from "react";
import { FaAlignJustify,FaPowerOff,FaTiktok } from "react-icons/fa";
import { Navbar,Container,NavDropdown,Nav } from 'react-bootstrap';
import AddForm from "./addForm";

const ToggleSidebar = () => {
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    return (
        <div>
            <div className="container-fluid p-0">
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container fluid>          
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#" onClick={ToggleSidebar}><FaAlignJustify /></Nav.Link>
                                    <Navbar.Brand href="#home">React-Js</Navbar.Brand>
                                </Nav>
                                <Nav className="mr-0">
                                    <NavDropdown title={"Profile"} id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#/">Action</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#/"><FaPowerOff/> Logout</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
                        <div className="sd-header">
                            <h4 className="mb-0"><FaTiktok/> TikTok</h4>
                            {/* <div className="btn btn-primary" onClick={ToggleSidebar}><i className="fa fa-times"></i></div> */}
                        </div>
                        <div className="sd-body">
                            <ul>
                                <li><a href='/home/add' className="sd-link">Add Item</a></li>
                                <li><a href='/home/list' className="sd-link">List Item</a></li>     
                            </ul>
                        </div>
                    </div>
                    <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>

                    {/* Body section  */}
                    <div className="p-3">
                        <AddForm/>
                    </div> 
           </div>
           
        </div>
    )
}

export default ToggleSidebar