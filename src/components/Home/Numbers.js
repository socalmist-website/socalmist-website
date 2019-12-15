import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Numbers.css';

class Numbers extends Component {
  students = 160;
  schools = 12;
  prizes = 6;
  judges = 72;
  volunteers = 50;

  started = false;

  state = {
    count: 0,
  }

  handleScroll(self) {
    if (!this.started) {
      const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      const scrolled = winScroll / height
      
      if (scrolled >= 0.20) {
        this.started = true;
        self.interval = setInterval(() => {
          self.setState({ time: Date.now(), count: this.state.count + 1 });
        }, 13);
      }
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.handleScroll(this));
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
    if (this.state.count >= 100) {
      clearInterval(this.interval);
    }
  }

  render() { 
    return (
      <Jumbotron className="numbersBackground">
        <Row className="justify-content-sm-center">
          <Col sm={6} className="centerAlign">
            <h1 className="numbersTitle">MIST 2019 By the Numbers</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg={2} md={3} className="centerAlign">
            <div>
              <h1 className="numberText">{( Math.round((this.state.count / 100) * this.students)) }</h1>
              <h4>STUDENTS</h4>
              <h4>REGISTERED</h4>
            </div>
          </Col>
          <Col lg={2} md={3} className="centerAlign">
            <div>
              <h1 className="numberText">{( Math.round((this.state.count / 100) * this.schools)) }</h1>
              <h4>SCHOOLS</h4>
              <h4>PARTICIPATED</h4>
            </div>
          </Col>
          <Col lg={2} md={3} className="centerAlign">
            <div>
              <h1 className="numberText">{( Math.round((this.state.count / 100) * this.prizes)) }</h1>
              <h4>SPONSORS</h4>
            </div>
          </Col>
          <Col lg={2} md={3} className="centerAlign">
            <div>
              <h1 className="numberText">{( Math.round((this.state.count / 100) * this.judges)) }</h1>
              <h4>JUDGES</h4>
            </div>
          </Col>
          <Col lg={2} md={3} className="centerAlign">
            <div>
              <h1 className="numberText">{( Math.round((this.state.count / 100) * this.volunteers)) }</h1>
              <h4>VOLUNTEERS</h4>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}
 
export default Numbers;