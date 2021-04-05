import React from "react";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import { PageSubTitle } from "../Header/PageSubTitle";
import { Container, Row, Col } from "react-bootstrap";
import "./WinnersPage.css";

class WinnersPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PageTitle pageTitle="MIST 2021 Winners" />
        <PageSubTitle pageSubTitle="Here are the results for MIST 2021" />
        <Container>
          <Row className="justify-content-sm-center">
            <Col sm="7">
              <h4>Category I: Knowledge and Quran</h4>
              <h5>Knowledge Test 1</h5>
              <ol>
                <li>Abdallah Fares (Portola High School (Irvine, CA))</li>
                <li>Zayaan Jamal (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>
                  Zaina Alayyan (Fountain Valley High School (Fountain Valley,
                  CA))
                </li>
                <li>Ahmed Deejay (Institute Of Knowledge (Diamond bar, CA))</li>
              </ol>
              <h5>Quran Recitation - Male</h5>
              <ol>
                <li>
                  Abdulrahman Albedawy (Granada Islamic School (Santa Clara,
                  CA))
                </li>
                <li>Ali Mortada (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Hassan Samiullah (Portola High School (Irvine, CA))</li>
                <li>Siraj Bajwa (Canyon High School (Anaheim, CA))</li>
                <li>Imaad Rana (Trabuco Hills High School)</li>
              </ol>
              <h5>Quran Recitation - Female</h5>
              <ol>
                <li>Simra Mirza (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Dua Shoaib (Arnold O. Beckman High School (Irvine, CA))</li>
              </ol>
              <h4>Category II: Arts</h4>
              <h5>2D Art</h5>
              <ol>
                <li>Rokshana Bushra (Van Nuys High School)</li>
                <li>Simra Mirza (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Ayman Hayat (Tamalpais High School (Mill Valley, CA))</li>
                <li>Danna Soussan (Canyon High School (Anaheim, CA))</li>
                <li>Sabrina Liu (Whitney High School (Cerritos, CA))</li>
              </ol>
              <h5>Graphic Design</h5>
              <ol>
                <li>Redah Jessani (Portola High School (Irvine, CA))</li>
                <li>Ahmed Deejay (Institute Of Knowledge (Diamond bar, CA))</li>
              </ol>
              <h5>Photography</h5>
              <ol>
                <li>Zayaan Jamal (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Zayd Azam (Tamalpais High School (Mill Valley, CA))</li>
                <li>
                  Yousef Khan (Arnold O. Beckman High School (Irvine, CA))
                </li>
                <li>
                  Faizal Khaliq-Baporia (Tamalpais High School (Mill Valley,
                  CA))
                </li>
              </ol>
              <h4>Category III: Writing and Oratory</h4>
              <h5>Extemporaneous Speaking</h5>
              <ol>
                <li>Hassan Samiullah (Portola High School (Irvine, CA))</li>
                <li>Ali Mortada (Institute Of Knowledge (Diamond bar, CA))</li>
              </ol>
              <h5>Spoken Word</h5>
              <ol>
                <li>Sarah Alkatib (Portola High School (Irvine, CA))</li>
                <li>Imaad Rana (Trabuco Hills High School)</li>
                <li>Ahmed Deejay (Institute Of Knowledge (Diamond bar, CA))</li>
              </ol>
              <h5>Creative Writing</h5>
              <ol>
                <li>Simra Mirza (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Rokshana Bushra (Van Nuys High School)</li>
                <li>Nadia Rizvan (Canyon High School (Anaheim, CA))</li>
                <li>
                  Alyssa Betancourt (Arnold O. Beckman High School (Irvine, CA))
                </li>
                <li>Hafsa Chaudhry (Van Nuys High School)</li>
              </ol>
              <h4>Category IV: Brackets</h4>
              <h5>Debate</h5>
              <ol>
                <li>Zayaan Jamal (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Zahi Imaduddin (Washington High School (Fremont, CA))</li>
                <li>Hasan Abbas (Washington High School (Fremont, CA))</li>
                <li>Ali Mortada (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Iman Morshed (Washington High School (Fremont, CA))</li>
              </ol>
              <h5>MIST Quiz Bowl</h5>
              <ol>
                <li>
                  Portola High School (Irvine, CA)
                  <ul>
                    <li>Emad Hussain</li>
                    <li>Abdallah Fares</li>
                    <li>Hassan Samiullah</li>
                  </ul>
                </li>
                <li>
                  Fountain Valley High School (Fountain Valley, CA)
                  <ul>
                    <li>Zaina Alayyan</li>
                  </ul>
                </li>
                <li>
                  Trabuco Hills High School
                  <ul>
                    <li>Imaad Rana</li>
                    <li>Zarrar Afridi</li>
                    <li>Mohammad Zayed</li>
                  </ul>
                </li>
              </ol>
              <h4>Category V: Group Projects</h4>
              <h5>Business Venture</h5>
              <ol>
                <li>
                  Granada Islamic School (Santa Clara, CA)
                  <ul>
                    <li>Rayyan Talukdar</li>
                    <li>Noor Alsabbagh</li>
                    <li>Ayman Rabia</li>
                  </ul>
                </li>
                <li>
                  Institute Of Knowledge (Diamond bar, CA)
                  <ul>
                    <li>Ali Mortada</li>
                    <li>Michael Spears</li>
                    <li>Zayaan Jamal</li>
                  </ul>
                </li>
              </ol>
              <h5>Humanitarian Service</h5>
              <ol>
                <li>
                  Portola High School (Irvine, CA)
                  <ul>
                    <li>Hassan Samiullah</li>
                  </ul>
                </li>
                <li>
                  Fountain Valley High School (Fountain Valley, CA)
                  <ul>
                    <li>Zaina Alayyan</li>
                  </ul>
                </li>
              </ol>
              <h5>Science Fair</h5>
              <ol>
                <li>
                  Portola High School (Irvine, CA)
                  <ul>
                    <li>Abdallah Fares</li>
                  </ul>
                </li>
                <li>
                  Institute of Knowledge (Diamond Bar, CA)
                  <ul>
                    <li>Sumaiya Bawany</li>
                    <li>Amaanah Ali</li>
                  </ul>
                </li>
              </ol>
              <h5>Short Film</h5>
              <ol>
                <li>
                  Portola High School (Irvine, CA)
                  <ul>
                    <li>Aisha Malik</li>
                    <li>Erfan Tavassoli</li>
                    <li>Mona Tavassoli</li>
                  </ul>
                </li>
              </ol>
              <h4>Overall Rankings</h4>
              <h5>Individual</h5>
              <ol>
                <li>Hassan Samiullah (Portola High School (Irvine, CA))</li>
                <li>Zayaan Jamal (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Abdallah Fares (Portola High School (Irvine, CA))</li>
                <li>Simra Mirza (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Ali Mortada (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>
                  Zaina Alayyan (Fountain Valley High School (Fountain Valley,
                  CA))
                </li>
                <li>Rokshana Bushra (Van Nuys High School)</li>
                <li>Ahmed Deejay (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Imaad Rana (Trabuco Hills High School)</li>
                <li>
                  Rayyan Talukdar (Granada Islamic School (Santa Clara, CA))
                </li>
              </ol>
              <h5>Teams</h5>
              <ol>
                <li>Institute Of Knowledge (Diamond bar, CA)</li>
                <li>Portola High School (Irvine, CA)</li>
                <li>Fountain Valley High School (Fountain Valley, CA)</li>
                <li>Granada Islamic School (Santa Clara, CA)</li>
                <li>Van Nuys High School</li>
                <li>Arnold O. Beckman High School (Irvine, CA)</li>
                <li>Tamalpais High School (Mill Valley, CA</li>
                <li>Canyon High School (Anaheim, CA)</li>
                <li>Washington High School (Fremont, CA)</li>
                <li>Trabuco Hills High School</li>
              </ol>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { WinnersPage };
