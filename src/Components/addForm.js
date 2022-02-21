import React, { Component } from 'react';
import { Form, Button, Card, ListGroup, Badge, Row, Col, Toast,ToastContainer } from 'react-bootstrap';
import { FaPlus } from "react-icons/fa";
import Logo from '../img.svg'

var product_obj = [];
class AddForm extends Component {

    constructor() {
        super()

        this.state = {
            product_name: '',
            product_key: '',
            product_price: '',
            product_measuring_unit: '',
            product_m_date: '',
            description: '',
            qa_check: 'off',
            quantity: '',
            section_no: '',
            product_type: "",
            show: false,
            hint:''
        }
    }
    addProduct(e) {
        e.preventDefault();
        product_obj.push({
            product_name: this.state.product_name,
            product_key: this.state.product_key,
            product_price: this.state.product_price,
            product_measuring_unit: this.state.product_measuring_unit,
            product_m_date: new Date(this.state.product_m_date).getTime(),
            description: this.state.description,
            qa_check: this.state.qa_check,
            quantity: this.state.quantity,
            section_no: this.state.section_no,
            product_type: this.state.product_type,
            
        })

        console.log(product_obj)
        

        if(this.state.product_name!=="" && this.state.product_key!==""&& this.state.quantity!==""&& this.state.product_price!==""&& this.state.product_measuring_unit!==""&& this.state.product_m_date!==""){
            this.setState({
                product_name: '',
                product_key: '',
                product_price: '',
                product_measuring_unit: '',
                product_m_date: '',
                description: '',
                qa_check: 'off',
                quantity: '',
                section_no: '',
                product_type: "",
                hint:"Product added successfully!"     
            });
            this.setState({
                show: true
            }); 
        }else{
            this.setState({
                show: true,
                hint:"Please fill require fields!"
            }); 
        }
    }
    
    setShow() {
        this.setState({
            show: false
        });
    }
    render() {
        return (
            <div>
                <div className='row '>
                    <ToastContainer position="top-center" className="p-3">
                        <Toast  onClose={() => this.setShow(false)} show={this.state.show} delay={3000} autohide>
                            <Toast.Body className='text-center'>{this.state.hint}</Toast.Body>
                        </Toast>
                    </ToastContainer>
                </div>
                <div className="row" style={{ width: 'auto', height: '85vh' }}>

                    <div className="col-sm-12 col-md-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src={Logo} className="p-5" />
                            <Card.Body>
                                <Card.Title className="text-center fw-bold">AVAILABLE PRODUCTS</Card.Title>
                                <Card.Text>
                                    <ListGroup numbered>
                                        <ListGroup.Item

                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <div className="ms-2 me-auto">
                                                <div className="">Chocolate</div>

                                            </div>
                                            <Badge variant="primary" pill>
                                                14
                                            </Badge>
                                        </ListGroup.Item>
                                        <ListGroup.Item

                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <div className="ms-2 me-auto">
                                                <div className="">Cookies</div>

                                            </div>
                                            <Badge variant="primary" pill>
                                                14
                                            </Badge>
                                        </ListGroup.Item>
                                        <ListGroup.Item

                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <div className="ms-2 me-auto">
                                                <div className="">Biscute</div>

                                            </div>
                                            <Badge variant="primary" pill>
                                                14
                                            </Badge>
                                        </ListGroup.Item>
                                        <ListGroup.Item

                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <div className="ms-2 me-auto">
                                                <div className="">Vegetables</div>

                                            </div>
                                            <Badge variant="primary" pill>
                                                14
                                            </Badge>
                                        </ListGroup.Item>
                                        <ListGroup.Item

                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <div className="ms-2 me-auto">
                                                <div className="">Fruits</div>

                                            </div>
                                            <Badge variant="primary" pill>
                                                14
                                            </Badge>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <Card className="">
                            <Card.Body>
                                <Card.Title className="text-center fw-bold">ADD PRODUCTS</Card.Title>
                                <Form>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridName">
                                            <label>Product Name <span className='text-red'>*</span></label>
                                            <input type="text"
                                                className='form-control'
                                                required
                                                value={this.state.product_name}
                                                onChange={event => {
                                                    console.log(event.target.value)
                                                    this.setState({ product_name: event.target.value });
                                                }} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridkey">
                                            <label>Product Key <span className='text-red'>*</span></label>
                                            <input
                                                type="text"
                                                className='form-control'
                                                required
                                                value={this.state.product_key}
                                                onChange={event => {
                                                    this.setState({ product_key: event.target.value });
                                                }} />
                                        </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridState">
                                            <label>Product Type <span className='text-red'>*</span></label>
                                            <select
                                                required
                                                value={this.state.product_type}
                                                className='form-control'
                                                onChange={event => {
                                                    this.setState({ product_type: event.target.value });
                                                }}>
                                                <option value={"type1"}>Type 1</option>
                                                <option value={"type1"}>Type 2</option>
                                            </select>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridAddress2">
                                            <label>Quantity <span className='text-red'>*</span></label>
                                            <input
                                                className='form-control'
                                                required
                                                value={this.state.quantity}
                                                type="number" onChange={event => {
                                                    this.setState({ quantity: event.target.value });
                                                }} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridCity">
                                            <label>Section No</label>
                                            <input
                                                className='form-control'
                                                required
                                                value={this.state.section_no}
                                                onChange={event => {
                                                    this.setState({ section_no: event.target.value });
                                                }} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridZip">
                                            <label>Manufacture Date <span className='text-red'>*</span></label>
                                            <input
                                                className='form-control' type="date"
                                                required
                                                value={this.state.product_m_date}
                                                onChange={event => {
                                                    this.setState({ product_m_date: event.target.value });
                                                }} />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">

                                        <Form.Group as={Col} controlId="formGridAddress2">
                                            <label>Price <span className='text-red'>*</span></label>
                                            <input
                                                className='form-control'
                                                required
                                                value={this.state.product_price}
                                                type="number"
                                                onChange={event => {
                                                    this.setState({ product_price: event.target.value });
                                                }} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridCity">
                                            <label>Unit <span className='text-red'>*</span></label>
                                            <input
                                                className='form-control'
                                                required
                                                value={this.state.product_measuring_unit}
                                                onChange={event => {
                                                    this.setState({ product_measuring_unit: event.target.value });
                                                }} />
                                        </Form.Group>


                                    </Row>
                                    <Form.Group className="mb-3" as={Col} controlId="formGridCity">
                                        <label>Description</label>
                                        <input
                                            className='form-control' type="textarea"
                                            required
                                            value={this.state.description}
                                            onChange={event => {
                                                this.setState({ description: event.target.value });
                                            }} />
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                                        <Col sm={{ span: 10, }}>

                                            <input
                                                type="checkbox"

                                                id='qacheck'
                                                defaultChecked={this.state.qa_check}

                                                onChange={event => {
                                                    this.setState(prevState => ({
                                                        qa_check: prevState.qa_check === 'on' ? 'off' : 'on'
                                                    }));
                                                    console.log(this.state.qa_check)

                                                }} />
                                            <label style={{ marginleft: "5px" }} htmlFor="qacheck">  QA Check</label>
                                        </Col>
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className="float-right primary" onClick={this.addProduct.bind(this)} >
                                        <FaPlus /> Add
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>


        );
    }
}

export default AddForm;