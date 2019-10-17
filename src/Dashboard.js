import React from 'react';
import './Dashboard.css'
import {Button, Navbar, Nav, Card, Col, Container, Row, Modal, Form} from 'react-bootstrap';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import cookie from 'react-cookies';

class Login extends React.Component {
  constructor(props){
    super(props);  
    this.state = {
      products: [],
      name: '',
      price: '',
      imageurl: '',
      loginStatus: true,
      show: false,
      setShow: false,
     
      prodID: null,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }
  componentDidMount(){
    const token =  cookie.load('token')
    const headers = {
      'Authorization': token
    };
    axios.get('https://test-binar.herokuapp.com/v1/products', { headers })
    .then(res =>{ 
        this.setState({products: res.data.result});
    })
  }
  handleChange = event => {
    this.setState({[event.target.name]:event.target.value});
  };
  handleSubmit = event => {
    event.preventDefault();
    const token =  cookie.load('token')
      axios({
        method: 'post',
        url: 'https://test-binar.herokuapp.com/v1/products/',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
        data: {
          name: this.state.name,
          price: this.state.price,
          imageurl: this.state.imageurl
        }
      })
      .then(res => {
        alert("Product successfuly added");
        console.log(res);
        this.setState({setShow: false});
        this.setState({show: false})
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };
  onLogout() {
    cookie.remove('token',);
    this.setState({loginStatus: false});
  }
  handleClose(){
    this.setState({setShow: false});
    this.setState({show: false})
  }
  handleShow(){
    this.setState({setShow: true});
    this.setState({show: true})
  }
  replaceModalItem(i){
    this.setState({
      prodID: i
    });
  }
  deleteModalItem(i){
    this.setState({
      prodID: i
    });
  }
  render() {
    if (!cookie.load('token')) {
      return (<Redirect to={'/'}/>)
    }
    
    if(this.state.products){
      return (
        <div className="Dashboard">
            <Navbar bg="dark" variant="dark" className="productNav" fixed="top">
              <Nav className="mr-auto">
                <Navbar.Brand>Product List</Navbar.Brand>
                <Button onClick={this.handleShow}>Create new</Button>
              </Nav>
                <a href="#logout" className="logoutButton" onClick={this.onLogout}>Logout</a>
            </Navbar>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Title>Create New</Modal.Title>
            <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <input type="text" name="name" placeholder="Product Name" style={{width: '100%'}} onChange={this.handleChange}/> <br></br>
              <input type="number" name="price" placeholder="Price (Dollar USD" style={{width: '100%'}}  onChange={this.handleChange}/> <br></br>
              <input type="text" name="imageurl" placeholder="Image URL" style={{width: '100%'}}  onChange={this.handleChange}/> <br></br>
              <Button variant="secondary" onClick={this.handleClose}>
                Back
              </Button>
              <Button variant="primary" type="submit">
                Create
              </Button>
            </Form>
            </Modal.Body>
          </Modal>
          <Container className="productCard">
            <Row>
            {
              this.state.products.map(function (prod, i){
                 return <Col key={i} xs={12} md={4} className="colCard"> 
                  <Card style={{ width: '18rem' }} className="divCard">
                    <Card.Img variant="top" className="cardImg" src={prod.imageurl} />
                    <Card.Body>
                      <Card.Text>
                        {prod.name}
                      </Card.Text>
                      <Card.Text>
                        ${prod.price}
                      </Card.Text>
                      <Button data-toggle="modal" 
                        onClick={() => this.replaceModalItem(i)}>Edit
                      </Button>
                      <Button data-toggle="modal" 
                        onClick={() => this.deleteModalItem(i)}>Delete
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              })
            }
            </Row>
          </Container>        
        </div>
      );
    }
  }
}
export default Login;