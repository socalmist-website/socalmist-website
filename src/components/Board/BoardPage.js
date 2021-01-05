import React from 'react';
import { Header } from '../Header/Navbar';
import { PageTitle } from '../Header/PageTitle';
import { Container, Row, Col } from 'react-bootstrap';
import './BoardPage.css';

class BoardPage extends React.Component {

  render() {
    const image = require('../../public/boardmembertest.png');

    const maria_director = require('../../public/maria.jpeg');
    const salma_director = require('../../public/salma.jpg');

    const asra_logistics = require('../../public/Asra_Fahim_Logistics.jpg');
    const asad_logistics = require('../../public/AsadYazdani.jpg');
    const baraa_logistics = require('../../public/Baraa_Logistics.jpg');
    const raahima_logistcs = require('../../public/Raahima_Logistcs.jpg');

    const faaizah_comp = require('../../public/faaizah.png');
    const juhaina_comp = require('../../public/juhaina_habeebulla.jpg');
    const meraal_comp = require('../../public/meraal_abutaha.jpg');
    const saalim_comp = require('../../public/saalim_majoo.png');
    const samah_comp =  require('../../public/samah_bajwa.jpg');
    const sadaf_comp = require('../../public/sadaf_qadir.png');
    const sara_comp = require('../../public/sara_anis.jpg');
    const sumaya_comp = require('../../public/sumaya_alkatib.jpg');
    const zainab_comp = require('../../public/zainab_khan.jpg');

    const arwa_regis = require('../../public/arwa_khan.jpg');
    const sana_regis = require('../../public/sana_khan.jpg');
    const summer_regis = require('../../public/summer_kurdi.jpg'); 
    const sahila_regis = require('../../public/sahila_kachroo.jpg');

    const amr_volun = require('../../public/amr.png');

    const mouwaz_finance = require('../../public/mouwaz.JPG');
    const husna_finance = require('../../public/husna.png');
    



    return (
      <div>
        <Header />
        <PageTitle pageTitle="Meet the Board" />
        <div className="titleHolder">
          <h2>Board page coming soon!</h2>
        </div>
        {/* <Container style={{ "margin-top": "3em" }}>
          <Row className="justify-content-sm-center">
            <Col lg={4} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" className = "top2" src={maria_director} height="250px"></img>
              <h4 className="boardMemName">Maria Najam</h4>
              <h5 className="boardPos">Regional Director</h5>
            </Col>
            <Col lg={4} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" className ="top2" src={salma_director} height="250px"></img>
              <h4 className="boardMemName">Salma Nasroodeen</h4>
              <h5 className="boardPos">Associate Director</h5>
            </Col>
          </Row>


          <Row className="justify-content-sm-center">
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "3em" }}>
              <img alt="img" src={image} height="200px"></img>
              <h4 className="boardMemName">Anam Aslam</h4>
              <h5 className="boardPos">Programs Chair</h5>
            </Col>
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "3em" }}>
              <img alt="img" src={mouwaz_finance} height="200px"></img>
              <h4 className="boardMemName">Mouaz Kanawati</h4>
              <h5 className="boardPos">Finance Chair</h5>
            </Col>
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "3em" }}>
              <img alt="img" src={arwa_regis} height="200px"></img>
              <h4 className="boardMemName">Arwa Khan</h4>
              <h5 className="boardPos">Registration Chair</h5>
            </Col>
          </Row>

          <Row className="justify-content-sm-center">
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={image} height="200px"></img>
              <h4 className="boardMemName">Ennis Machta</h4>
              <h5 className="boardPos">Marketing Chair</h5>
            </Col>
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={image} height="200px"></img>
              <h4 className="boardMemName">Zara Mann</h4>
              <h5 className="boardPos">Outreach Chair</h5>
            </Col>
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={amr_volun} height="200px"></img>
              <h4 className="boardMemName">Amr Moussa</h4>
              <h5 className="boardPos">Volunteers Chair</h5>
            </Col>
          </Row>

          <Row className="justify-content-sm-center">
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>

          <img alt="img" src={raahima_logistcs} className ="boardPic" height="200px"></img>
                <h4 className="boardMemName">Raahima Shoaib</h4>
              <h5 className="boardPos">Logistics Chair</h5>
            
              
            </Col>
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={sumaya_comp} height="200px"></img>
              <h4 className="boardMemName">Sumaya Alkatib</h4>
              <h5 className="boardPos">Category Head</h5>
            </Col>
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={samah_comp} height="200px"></img>
              <h4 className="boardMemName">Samah Bajwa</h4>
              <h5 className="boardPos">Category Head</h5>
            </Col>
          </Row>

          <Row className="justify-content-sm-center">
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={juhaina_comp} height="200px"></img>
              <h4 className="boardMemName">Juhaina Habeebulla</h4>
              <h5 className="boardPos">Category Head</h5>
            </Col>
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={zainab_comp} height="200px"></img>
              <h4 className="boardMemName">Zainab Khan</h4>
              <h5 className="boardPos">Category Head</h5>
            </Col>
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={saalim_comp} height="200px"></img>
              <h4 className="boardMemName">Saalim Majoo</h4>
              <h5 className="boardPos">Category Head</h5>
            </Col>
          </Row>

          <Row className="justify-content-sm-center">
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={faaizah_comp} height="200px"></img>
              <h4 className="boardMemName">Faaizah Saiduddin</h4>
              <h5 className="boardPos">Category Head</h5>
            </Col>
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={meraal_comp} height="200px"></img>
              <h4 className="boardMemName">Meraal Abutaha</h4>
              <h5 className="boardPos">Category Head</h5>
            </Col>
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={image} height="200px"></img>
              <h4 className="boardMemName">Nimah Khan</h4>
              <h5 className="boardPos">Spirits Competitions Coordinator</h5>
            </Col>
          </Row>

          <Row className="justify-content-sm-center">
          <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
            <img alt="img" src={sadaf_comp} height="200px"></img>
              <h4 className="boardMemName">Sadaf Qadir</h4>
              <h5 className="boardPos">Competitions Scorekeeper</h5>
             </Col>
            
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={image} height="200px"></img>
              <h4 className="boardMemName">Insha Khan</h4>
              <h5 className="boardPos">Workshops Coordinator</h5>
            </Col>
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={image} height="200px"></img>
              <h4 className="boardMemName">Mariam Masud</h4>
              <h5 className="boardPos">Spirits Competitions Coordinator</h5>
            </Col>
          </Row>

          <Row className="justify-content-sm-center">
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={image} height="200px"></img>
              <h4 className="boardMemName">Yusuf Ezzeldine</h4>
              <h5 className="boardPos">Outreach Coordinator</h5>
            </Col>
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={image} height="200px"></img>
              <h4 className="boardMemName">Aatena Hasan</h4>
              <h5 className="boardPos">Outreach Coordinator</h5>
            </Col>
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={asra_logistics} height="200px"></img>
              <h4 className="boardMemName">Asra Fahim</h4>
              <h5 className="boardPos">Communications Coordinator</h5>
            </Col>
          </Row>

          <Row className="justify-content-sm-center">
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={asad_logistics} height="200px"></img>
              <h4 className="boardMemName">Asad Yazdani</h4>
              <h5 className="boardPos">Logistics Coordinator</h5>
            </Col>
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={baraa_logistics} height="200px"></img>
              <h4 className="boardMemName">Baraa Zekeria</h4>
              <h5 className="boardPos">Logistics Coordinator</h5>
            </Col>
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={sahila_regis} height="200px"></img>
              <h4 className="boardMemName">Sahila Kachroo</h4>
              <h5 className="boardPos">Registration Coordinator</h5>
            </Col>
          </Row>

          <Row className="justify-content-sm-center">
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={sana_regis} height="200px"></img>
              <h4 className="boardMemName">Sana Khan</h4>
              <h5 className="boardPos">Registration Coordinator</h5>
            </Col>
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={summer_regis} height="200px"></img>
              <h4 className="boardMemName">Summer Kurdi</h4>
              <h5 className="boardPos">Registration Coordinator</h5>
            </Col>
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={husna_finance} height="200px"></img>
              <h4 className="boardMemName">Husna Maiwandi</h4>
              <h5 className="boardPos">Sponsorships Coordinator</h5>
            </Col>
          </Row>

          <Row className="justify-content-sm-center">
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={image} height="200px"></img>
              <h4 className="boardMemName">Iqra Abbaali</h4>
              <h5 className="boardPos">Media Coordinator</h5>
            </Col>
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={image} height="200px"></img>
              <h4 className="boardMemName">Shereen Nourollahi</h4>
              <h5 className="boardPos">Social Media Coordinator</h5>
            </Col>
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={image} height="200px"></img>
              <h4 className="boardMemName">Ali Rehman</h4>
              <h5 className="boardPos">Webmaster</h5>
            </Col>
          </Row>

          <Row className="justify-content-sm-center">           
            <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={image} height="200px"></img>
              <h4 className="boardMemName">Hamza Ayub</h4>
              <h5 className="boardPos">Ceremony Coordinator</h5>
            </Col>
           
              <Col lg={3} style={{ 'text-align': 'center', "margin-top": "2em" }}>
              <img alt="img" src={sara_comp} height="200px"></img>
              <h4 className="boardMemName">Sara Anis</h4>
              <h5 className="boardPos">Competitions Scorekeeper</h5>
            </Col>
            
            
            
          </Row>
        </Container> */}


      </div>
    );
  }
}

export { BoardPage };