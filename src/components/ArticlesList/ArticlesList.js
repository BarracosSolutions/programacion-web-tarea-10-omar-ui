import React, { Component } from 'react';
import { Button, Input, Table } from 'reactstrap';

export default class ArticlesList extends Component {
    render() {
      return (
        <div>
            <Table striped>
                <thead>
                <tr>
                    <th>Qty</th>
                    <th>Desc</th>
                    <th>Unit Value</th>
                    <th>Subtotal</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Rice</td>
                    <td>100</td>
                    <td>100</td>
                    <td><Button color="danger">Delete</Button></td>
                </tr>
                <tr>
                    <td><Input type="number" name="artNumber" id="artNumber"/></td>
                    <td><Input type="text" name="artName" id="artName"/></td>
                    <td><Input type="number" name="artVal" id="artVal"/></td>
                    <td></td>
                    <td><Button color="success">Add</Button></td>
                </tr>
                </tbody>
            </Table>
        </div>
      );
    }
  }