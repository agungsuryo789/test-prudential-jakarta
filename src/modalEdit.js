import React, { Component } from 'react';
import {Button, Navbar, Nav, Card, Col, Container, Row, Form} from 'react-bootstrap';
import axios from 'axios';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            name: '',
            price: '',
            imageurl:''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        const token =  cookie.load('token')
        const id = {
            id: this.state.id,
        }
          axios({
            method: 'put',
            url: 'https://test-binar.herokuapp.com/v1/products/'+ { id },
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
          })
          .catch((err) => {
            console.log("AXIOS ERROR: ", err);
          });
      };

    Handler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSave() {
        const item = this.state;
        this.props.saveModalDetails(item)
    }

    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <form onSubmit={this.handleSubmit}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Product</h5>
                        </div>
                        <div className="modal-body">
                            <input value={this.state.name} onChange={(e) => this.Handler(e)} />
                            <input value={this.state.price} onChange={(e) => this.Handler(e)} />
                            <input value={this.state.imageurl} onChange={(e) => this.Handler(e)} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" data-dismiss="modal" >Save changes</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;