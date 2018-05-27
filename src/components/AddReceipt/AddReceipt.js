import React, { Component } from 'react';
import ArticlesList from '../ArticlesList/ArticlesList';
import { Button, Form, FormGroup, Label, CustomInput } from 'reactstrap';

export default class AddReceipt extends Component {

    render() {
      return (
        <div>
            <h3>Add Receipt</h3>
            <Form>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="number" className="mr-sm-2">#</Label>
                    <CustomInput type="number" name="number" id="number" inline/>
                    <Label for="date" className="mr-sm-2">Date</Label>
                    <CustomInput type="date" name="date" id="date" inline/>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="clientName" className="mr-sm-2">Client Name</Label>
                    <CustomInput bsSize="sm" type="text" name="clientName" id="clientName" inline/>
                </FormGroup>
                <ArticlesList/>
                <Button color="primary">Add Receipt</Button>
            </Form>
        </div>
      );
    }
  }