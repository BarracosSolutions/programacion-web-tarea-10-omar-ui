import React, { Component } from 'react';

import { Table } from 'reactstrap';

export default class ReceiptsList extends Component {
    render() {
      return (
        <div>
            <h4>Receipts List</h4>
            <Table striped>
                <thead>
                <tr>
                    <th></th>
                    <th>Number</th>
                    <th>Client</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>123456</td>
                    <td>Omar Segura</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>456789</td>
                    <td>Carlos Arguedas</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>789456</td>
                    <td>Fabian Hernandez</td>
                </tr>
                </tbody>
            </Table>
        </div>
      );
    }
  }