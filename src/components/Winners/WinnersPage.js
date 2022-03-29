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
        <PageTitle pageTitle="MIST Winners" />
        <PageSubTitle pageSubTitle="Here are the results for MIST 2022" />
        <div className="pageSubTitle">
          <h5>The students listed below have qualified for nationals!</h5>
        </div>
        <Container>
          <Row className="justify-content-sm-center">
            <Col sm="7">
              <h4>Category I: Knowledge and Quran</h4>
              <h5>Knowledge Test 2</h5>
              <ol>
                <li>Mohammed Aamir (Institute Of Knowledge)</li>
                <li>Aribah Deejay (Institute Of Knowledge)</li>
                <li>Malaika Sultan (Institute Of Knowledge)</li>
              </ol>
              <h5>Knowledge Test 3</h5>
              <ol>
                <li>Emaan Kazi (Institute Of Knowledge)</li>
                <li>Abdullah Rafiq (Mission Viejo High School)</li>
              </ol>
              <h5>Quran Memorization - Level 1</h5>
              <ol>
                <li>Ahmed Deejay (Institute Of Knowledge)</li>
                <li>Malek Hamideh (Institute Of Knowledge)</li>
                <li>Hania Kashif (Institute Of Knowledge)</li>
                <li>Siraj Bajwa (Canyon High School)</li>
                <li>Salik Hasan (Fairmont Prep)</li>
                <li>Suhaib Sayed (Fairmont Prep) </li>
              </ol>
              <h5>Quran Memorization - Level 2</h5>
              <ol>
                <li>Eesa Baig (Institute Of Knowledge)</li>
                <li>Husna Fathima (Institute Of Knowledge)</li>
                <li>Mir Ali (Institute Of Knowledge)</li>
                <li>Sumaiya Bawany (Institute Of Knowledge)</li>
                <li>Imaad Rana (Trabuco Hills High School)</li>
                <li>Daniyal Rauf (Fairmont Prep)</li>
                <li>Simrah Bajwa (Canyon High School)</li>
              </ol>
              <h5>Quran Memorization - Level 3</h5>
              <ol>
                <li>Simra Mirza (Institute Of Knowledge)</li>
                <li>Ammar Sharif (Institute Of Knowledge)</li>
                <li>Ibraheem Jawadi (Fairmont Prep) </li>
                <li>Hassan Samiullah (Portola High School)</li>
                <li>Aisha Deejay (Institute Of Knowledge)</li>
              </ol>
              <h5>Quran Recitation</h5>
              <ol>
                <li>Ameerah Hirji (Yorba Linda High School)</li>
                <li>Rheyanah Williams (Institute Of Knowledge)</li>
              </ol>

              <h4>Category II: Arts</h4>
              <h5>2D Art</h5>
              <ol>
                <li>Abdullah Rafiq (Mission Viejo High School)</li>
                <li>Denah Howpun (Temecula Valley High School)</li>
                <li>Ayat Hilala (Orange Crecent School)</li>
                <li>Danna Soussan (Canyon High School)</li>
                <li>Aribah Deejay (Institute Of Knowledge)</li>
              </ol>
              <h5>Fashion Design</h5>
              <ol>
                <li>Laila Elzahed (Portola High School)</li>
              </ol>
              <h5>Graphic Design</h5>
              <ol>
                <li>Aisha Deejay (Institute Of Knowledge)</li>
                <li>Redah Jessani (Portola High School)</li>
                <li>Ahmed Deejay (Institute Of Knowledge)</li>
              </ol>
              <h5>Photography</h5>
              <ol>
                <li>Simra Mirza (Institute Of Knowledge)</li>
                <li>Ameerah Hirji (Yorba Linda High School)</li>
                <li>Haneefah Syed (Valencia High School)</li>
                <li>Yousef Khan (Arnold O. Beckman High School)</li>
                <li>Saad Elyas (Portola High School)</li>
              </ol>

              <h4>Category III: Writing and Oratory</h4>
              <h5>Extemporaneous Speaking</h5>
              <ol>
                <li>Yousef Khan (Arnold O. Beckman High School)</li>
                <li>Abdallah Fares (Portola High School)</li>
                <li>Nyla Surti (Whitney High School)</li>
                <li>Zayd Mayar (Murrieta Valley High School)</li>
                <li>Hassan Samiullah (Portola High School)</li>
              </ol>
              <h5>Original Oratory</h5>
              <ol>
                <li>Haneefah Syed (Valencia High School)</li>
                <li>Ayra Berket (Santiago High School)</li>
              </ol>
              <h5>Spoken Word</h5>
              <ol>
                <li>Zimal Amir (Institute Of Knowledge)</li>
                <li>Hania Kashif (Institute Of Knowledge)</li>
                <li>Abdullah Rafiq (Mission Viejo High School)</li>
              </ol>
              <h5>Creative Writing</h5>
              <ol>
                <li>Simra Mirza (Institute Of Knowledge)</li>
                <li>Nadia Rizvan (Canyon High School)</li>
                <li>Siraj Bajwa (Canyon High School)</li>
                <li>Malaika Sultan (Institute Of Knowledge)</li>
                <li>Rana Soussan (Canyon High School)</li>
              </ol>

              <h4>Category IV: Brackets</h4>
              <h5>Debate</h5>
              <ol>
                <li>Ibraheem Jawadi (Fairmont Prep)</li>
                <li>Masroor Siddiqui (Fairmont Prep)</li>
                <li>Amir Valiulla (Troy High School)</li>
                <li>Ahsan Razak (Canyon High School)</li>
              </ol>
              <h5>Math Olympics</h5>
              <ol>
                <li>Anshul Aravind (Portola High School)</li>
                <li>Yousef Khan (Arnold O. Beckman High School)</li>
                <li>Ameerah Hirji (Yorba Linda High School)</li>
                <li>Abdullah Rafiq (Mission Viejo High School)</li>
                <li>Imaad Rana (Trabuco Hills High School)</li>
              </ol>
              <h5>MIST Quiz Bowl</h5>
              <ol>
                <li>
                  COALITION: Murrieta Valley High School, Orange Crecent School,
                  Canyon High School
                  <ul>
                    <li>Zayd Mayar</li>
                    <li>Mohamad Ibrahim</li>
                    <li>Saleem Darkhalil</li>
                    <li>Siraj Bajwa</li>
                  </ul>
                </li>
                <li>
                  Institute Of Knowledge
                  <ul>
                    <li>Aribah Deejay</li>
                    <li>Ammar Sharif</li>
                    <li>Rheyanah Williams</li>
                    <li>Aisha Deejay</li>
                  </ul>
                </li>
                <li>
                  Portola High School
                  <ul>
                    <li>Ennes Kahf</li>
                    <li>Ismaeel Harsolia</li>
                    <li>Yahya Idriss</li>
                    <li>Abdallah Fares</li>
                    <li>Samir Hakim</li>
                    <li>Muhammad Ismail</li>
                  </ul>
                </li>
              </ol>
              <h5>Improv</h5>
              <ol>
                <li>
                  COALITION: Fountain Valley High School, Orange Crecent School
                  <ul>
                    <li>Masa Abbas</li>
                    <li>Amanie Salem</li>
                    <li>Farah Elgazar</li>
                    <li>Shahhed Abuhamdeh</li>
                    <li>Ayat Hilala</li>
                    <li>Malak Salem</li>
                  </ul>
                </li>
                <li>
                  Institute Of Knowledge (Boys Team)
                  <ul>
                    <li>Asad Syed</li>
                    <li>Malek Hamideh</li>
                    <li>Eesa Baig</li>
                    <li>Ahmed Deejay</li>
                  </ul>
                </li>
                <li>
                  Institute Of Knowledge (Girls Team)
                  <ul>
                    <li>Husna Fathima</li>
                    <li>Simra Mirza</li>
                    <li>Hania Kashif</li>
                    <li>Sumaiya Bawany</li>
                    <li>Emaan Kazi</li>
                  </ul>
                </li>
              </ol>

              <h4>Category V: Group Projects</h4>
              <h5>Science Fair</h5>
              <ol>
                <li>
                  Institute Of Knowledge (Diamond bar, CA)
                  <ul>
                    <li>Hania Kashif</li>
                    <li>Emaan Kazi</li>
                  </ul>
                </li>
              </ol>

              <h4>Category VI: Sports</h4>
              <h5>Basketball - Male</h5>
              <ol>
                <li>
                  COALITION: Bolsa Grande High School, Troy High School,
                  Northwood High School, Canyon High School
                  <ul>
                    <li>Haris Anis</li>
                    <li>Amir Valiulla</li>
                    <li>Sufyan Patel</li>
                    <li>Yusuf Mohamed</li>
                    <li>Ahsan Razak</li>
                    <li>Sohaym Khan</li>
                  </ul>
                </li>
                <li>
                  Portola High School
                  <ul>
                    <li>Ennes Kahf</li>
                    <li>Ismaeel Harsolia</li>
                    <li>Yahya Idriss</li>
                    <li>Hassan Samiullah</li>
                    <li>Muhammad Ismail</li>
                  </ul>
                </li>
                <li>
                  COALITION: Orange Crecent School, Fairmont Prep
                  <ul>
                    <li>Mohamad Ibrahim</li>
                    <li>Saleem Darkhalil</li>
                    <li>Suhaib Sayed</li>
                    <li>Masroor Siddiqui</li>
                    <li>Salik Hasan</li>
                    <li>Yahya Hasan</li>
                    <li>Ibraheem Jawadi</li>
                    <li>Daniyal Rauf</li>
                  </ul>
                </li>
                <li>
                  COALITION: Institute Of Knowledge, Trabuco Hills High School
                  <ul>
                    <li>Malek Hamideh</li>
                    <li>Mir Ali</li>
                    <li>Eesa Baig</li>
                    <li>Ammar Sharif</li>
                    <li>Mohammed Aamir</li>
                    <li>Ahmed Deejay</li>
                    <li>Imaad Rana</li>
                  </ul>
                </li>
              </ol>
              <h5>Basketball - Female</h5>
              <ol>
                <li>
                  COALITION: Fountain Valley High School, Orange Crecent School
                  <ul>
                    <li>Masa Abbas</li>
                    <li>Amanie Salem</li>
                    <li>Farah Elgazar</li>
                    <li>Shahhed Abuhamdeh</li>
                    <li>Ayat Hilala</li>
                    <li>Malak Salem</li>
                  </ul>
                </li>
                <li>
                  COALITION: Temecula Valley High School, Portola High School,
                  Canyon High School
                  <ul>
                    <li>Denah Howpun</li>
                    <li>Zoya Khan</li>
                    <li>Shifa Harsolia</li>
                    <li>Sarina Behera</li>
                    <li>Iman Alam</li>
                    <li>Sharouk Hussein</li>
                    <li>Nadia Rizvan</li>
                    <li>Hana Abusair</li>
                    <li>Danna Soussan</li>
                  </ul>
                </li>
              </ol>

              <h4>OVERALL RANKINGS</h4>
              <h5>INDIVIDUAL</h5>
              <ol>
                <li>Simra Mirza (Institute Of Knowledge)</li>
                <li>Hania Kashif (Institute Of Knowledge)</li>
                <li>Ahmed Deejay (Institute Of Knowledge)</li>
              </ol>
              <h5>TEAMS</h5>
              <ol>
                <li>Institute Of Knowledge</li>
                <li>Portola High School</li>
                <li>Canyon High School</li>
              </ol>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { WinnersPage };
