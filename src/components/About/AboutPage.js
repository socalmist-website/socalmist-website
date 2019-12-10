import React from 'react';
import { Header } from '../Header/Navbar';
import "./AboutPage.css";
import {Container, Row, Col, Image} from 'react-bootstrap';
class AboutPage extends React.Component {

  styles={
    fontSize: 100,
  
  };
  render() {
    const image = require("../../public/aboutfiller.png");
    return (
      <div >  
      
        <Header />
        <div className="aboutpagebanner"> 
      
        <p style={this.styles}>About MIST</p>
        
        </div>

        <div className="firstsectionabout">

        <Container>
          <Row className="justify-content-sm-center">
            <Col sm={12} className="titleHolder">
              <h2>MIST = Muslim Inter-Scholastic Tournament</h2>
              <hr></hr>
            </Col>
          </Row>
          <Row className = "justify-content-sm-center">

              <Col sm ={12} className="textholder">
              <p>Put stuff about mist: Florida's intro for example:</p>
              <p>​Our mission is to bring high school students together to
                 develop leadership, promote communication, and inspire creativity 
                 while gaining a deeper understanding of Islam and Muslims.  
                 We do this through our annual regional and national tournaments.  
                 MIST was founded in 2002 by a teenage girl in Houston, Texas and now takes 
                 place in 15 regions across North America. And though our name and heritage
                  are proudly Muslim, we serve as an outlet for all high school students, 
                  regardless of religion or faith!</p>
                <p>Paragraph 1</p>
                <p>Paragraph 2</p>
                <p>Paragraph 3</p>
              </Col>
              </Row>



              </Container>
              </div>


      <div className ="develop-confidence">
          <Container>
          <Row><p></p></Row>
           <Row><p></p></Row>
 
              <Row >
              <Col sm={6} >
              <h3>Develop Confidence and Professionalism</h3>
              <hr></hr>
              <p>Develop Confidence and Professionalism</p>
              <p>Paragraph 1</p>
              <p>Paragraph 2</p>
              <p>Paragraph 3</p>
              </Col>

              <Col sm={6} >
                  <Image fluid={true} src={image} />
              </Col>
              </Row>
              

          </Container>
      </div>  


          <div className ="Learn Strategies to Deal with Stereotypes">
          <Container>
           <Row><p></p></Row>
           <Row><p></p></Row>
           <Row><p></p></Row>
           <Row><p></p></Row>
           
         
              <Row >
              

              <Col sm={6} >
                  <Image fluid={true} src={image} />
              </Col>

              <Col sm={6} >
              <h3>Learn Strategies to Deal with Stereotypes</h3>
              <hr></hr>
              <p>Learn Strategies to Deal with Stereotypes</p>
              <p>Paragraph 2</p>
              <p>Paragraph 2</p>
              <p>Paragraph 3</p>
              </Col>
              </Row>
        </Container>
          </div>  

          <div className ="Express Thoughts, Feelings, and Ideas">
          <Container>
           <Row><p></p></Row>
           <Row><p></p></Row>
           <Row><p></p></Row>
           <Row><p></p></Row>
           
         
              <Row >

             <Col sm={6} >
              <h3>Express Thoughts, Feelings, and Ideas</h3>
              <hr></hr>
              <p>Express Thoughts, Feelings, and Ideas</p>
              <p>Paragraph 2</p>
              <p>Paragraph 2</p>
              <p>Paragraph 3</p>
              </Col>

              <Col sm={6} >
                  <Image fluid={true} src={image} />
              </Col>

              </Row>
            </Container>
          </div>  
          
          <div className ="Meet and Network">
          <Container>
           <Row><p></p></Row>
           <Row><p></p></Row>
           <Row><p></p></Row>
           <Row><p></p></Row>
           
         
              <Row >

              <Col sm={6} >
                  <Image fluid={true} src={image} />
              </Col>
              
             <Col sm={6} >
              <h3>Meet and Network</h3>
              <hr></hr>
              <p>Meet and Network</p>
              <p>Paragraph 2</p>
              <p>Paragraph 2</p>
              <p>Paragraph 3</p>
              </Col>

              

              </Row>
            </Container>
          </div>  


        
      </div>
    );
  }
}

export { AboutPage };