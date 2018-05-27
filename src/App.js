import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

import Header       from './components/Header/Header';
import Footer       from './components/Footer/Footer';
import AddReceipt   from './components/AddReceipt/AddReceipt';
import ReceiptsList from './components/ReceiptsList/ReceiptsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Container>
          <Row>
            <Col xs="4"><ReceiptsList/></Col>
            <Col xs="8"><AddReceipt/></Col>
          </Row>  
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default App;
