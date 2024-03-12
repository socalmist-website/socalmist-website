import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Header } from "../Header/Navbar";
import { PageSubTitle } from "../Header/PageSubTitle";
import { PageTitle } from "../Header/PageTitle";
import "./WinnersPage.css";

class WinnersPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PageTitle pageTitle="MIST Winners" />
        <PageSubTitle pageSubTitle="Here are the results for MIST 2023" />
        <div className="pageSubTitle">
          <h5>The students listed below have qualified for nationals!</h5>
        </div>
        <Container className="winners">
          <Row className="justify-content-sm-center">
            <Col sm="6">
              <h4>Category I: Knowledge and Quran</h4>
              {/* <h5>Knowledge Test 2</h5>
              <ol>
                <li>Mohammed Aamir (Institute Of Knowledge)</li>
                <li>Aribah Deejay (Institute Of Knowledge)</li>
                <li>Malaika Sultan (Institute Of Knowledge)</li>
              </ol> */}
              <h5>Knowledge Test 3</h5>
              <ol>
                <li>Adam Benaddi (Medina Educational Center (Murrieta, CA))</li>
              </ol>
              <h5>Quran Memorization - Level 1 - Male</h5>
              <ol>
                <li>Taha Rangoonwala (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Sami Malik (Medina Educational Center (Murrieta, CA))</li>
                <li>Emad Parekh (Institute Of Knowledge (Diamond bar, CA))</li>
              </ol>
              <h5>Quran Memorization - Level 1 - Female</h5>
              <ol>
                <li>Salma Azzaz (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Zubaida Rangoonwala (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Samiya Ali (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Simrah Bajwa (Canyon High School (Anaheim, CA))</li>
                <li>Maryam  Darkal (Institute Of Knowledge (Diamond bar, CA))</li>
              </ol>
              <h5>Quran Memorization - Level 2 - Male</h5>
              <ol>
                <li>Yusef Shouman  (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Omar Azzawi (Institute Of Knowledge (Diamond bar, CA))</li>
              </ol>
              <h5>Quran Memorization - Level 2 - Female</h5>
              <ol>
                <li>Layan Mustafa (Institute Of Knowledge (Diamond bar, CA))</li>
              </ol>
              <h5>Quran Memorization - Level 3 - Male</h5>
              <ol>
                <li>Ahmed Deejay (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Abdulrahman Mardini (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Ashaz Mustafa (Medina Educational Center (Murrieta, CA))</li>
                <li>Daniyal Rauf (Fairmont Prep)</li>
              </ol>
              <h5>Quran Memorization - Level 3 - Female</h5>
              <ol>
                <li>Javeria Kashif (Institute Of Knowledge (Diamond bar, CA))</li>
              </ol>
              <h5>Quran Memorization - Level 4 - Male</h5>
              <ol>
                <li>Abdur-Rahman Parekh (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Ammar Sharif (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Mekyle Hamedi (Medina Educational Center (Murrieta, CA))</li>
                <li>Ibraheem Jawadi (Fairmont Prep)</li>
              </ol>
              <h5>Quran Memorization - Level 4 - Female</h5>
              <ol>
                <li>Alina Samiullah (Portola High School (Irvine, CA))</li>
                <li>Rama Takleh (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Sarah  Haque (Institute Of Knowledge (Diamond bar, CA))</li>
              </ol>
              <h5>Quran Recitation - Male</h5>
              <ol>
                <li>Ennes Kahf (Portola High School (Irvine, CA))</li>
                <li>Abdullah Chaudhry (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Haaris Alam (Portola High School (Irvine, CA))</li>
                <li>Usman Salman (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Azim Ahmed (Arnold O. Beckman High School (Irvine, CA))</li>
              </ol>
              <h5>Quran Recitation - Female</h5>
              <ol>
                <li>Hania Kashif (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Zoya Rana (Tesoro High School (San Juan Capistrano, CA))</li>
                <li>Serena Khan (Arnold O. Beckman High School (Irvine, CA))</li>
              </ol>

              <h4>Category II: Arts</h4>
              <h5>2D Art</h5>
              <ol>
                <li>Enaas Khan (Medina Educational Center (Murrieta, CA))</li>
                <li>Sumayah Ahmed (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Aqilla Ikrar (Trabuco Hills High School)</li>
                <li>Zimal Amir (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Senna Kahf (Portola High School (Irvine, CA))</li>
              </ol>
              <h5>3D Art</h5>
              <ol>
                <li>Ayra  Berket  (Santiago High School (Corona, CA))</li>
                <li>Abdullah Rafiq (Mission Viejo High School (Mission Viejo, CA))</li>
                <li>Adam Azzaz (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Janna Joma (Institute Of Knowledge (Diamond bar, CA))</li>
              </ol>
              <h5>Fashion Design</h5>
              <ol>
                <li>Nyla Surti (Cerritos High School)</li>
                <li>Layan Mustafa (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Reesha Khan (Northwood High School (Irvine, CA))</li>
              </ol>
              <h5>Digital Art</h5>
              <ol>
                <li>Haris Faruqi (Medina Educational Center (Murrieta, CA))</li>
                <li>Ahmed Deejay (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Sami Malik (Medina Educational Center (Murrieta, CA))</li>
              </ol>
              <h5>Photography</h5>
              <ol>
                <li>Shifa Harsolia (Portola High School (Irvine, CA))</li>
                <li>Zubaida Rangoonwala (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Muhammad  Junaid (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Javeria Kashif (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Usman Salman (Institute Of Knowledge (Diamond bar, CA))</li>
              </ol>

              <h4>Category III: Writing and Oratory</h4>
              <h5>Extemporaneous Essay</h5>
              <ol>
                <li>Alina Samiullah (Portola High School (Irvine, CA))</li>
                <li>Masroor Siddiqui (Fairmont Prep)</li>
                <li>Enaas Khan (Medina Educational Center (Murrieta, CA))</li>
                <li>Mekyle Hamedi (Medina Educational Center (Murrieta, CA))</li>
              </ol>
              <h5>Extemporaneous Speaking</h5>
              <ol>
                <li>Zayd  Mayar (Medina Educational Center (Murrieta, CA))</li>
                <li>Yousef Khan (Arnold O. Beckman High School (Irvine, CA))</li>
                <li>Ali Ezzeldine (Irvine High School (Irvine, CA))</li>
                <li>Madina Wardak (Medina Educational Center (Murrieta, CA))</li>
                <li>Omar Azzawi (Institute Of Knowledge (Diamond bar, CA))</li>
              </ol>
              <h5>Original Oratory</h5>
              <ol>
                <li>Zara Popal (Medina Educational Center (Murrieta, CA))</li>
                <li>Ateeb Ansari (Medina Educational Center (Murrieta, CA))</li>
              </ol>
              <h5>Poetry</h5>
              <ol>
                <li>Nadia Rizvan  (Canyon High School (Anaheim, CA))</li>
                <li>Dania Yamani (Portola High School (Irvine, CA))</li>
                <li>Sumayah Ahmed (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Adam Benaddi (Medina Educational Center (Murrieta, CA))</li>
                <li>Aqilla Ikrar (Trabuco Hills High School)</li>
              </ol>
              <h5>Prepared Essay</h5>
              <ol>
                <li>Haris Faruqi (Medina Educational Center (Murrieta, CA))</li>
                <li>Javeria Kashif (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Adam Azzaz (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Ashaz Mustafa (Medina Educational Center (Murrieta, CA))</li>
                <li>Maryam Quraishi (Northwood High School (Irvine, CA))</li>
              </ol>
              <h5>Short Fiction</h5>
              <ol>
                <li>Zulaikha Wardak (Medina Educational Center (Murrieta, CA))</li>
              </ol>

              <h5>Spoken Word</h5>
              <ol>
                <li>Nyla Surti (Cerritos High School)</li>
                <li>Zimal Amir (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Hania Kashif (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Ayra Berket (Santiago High School (Corona, CA))</li>
              </ol>

              <h4>Category IV: Brackets</h4>
              <h5>Debate</h5>
              <ol>
                <h6>1. Fairmont Prep</h6>
                <ul>
                  <li>Masroor Siddiqui</li>
                  <li>Ibraheem Jawadi</li>
                </ul>
                <p></p>
                <h6>2. Trabuco Hills High School</h6>
                <ul>
                  <li>Aadhil Pm</li>
                  <li>Athallah Ikrar</li>
                </ul>
                <p></p>
                <h6>3. Institute Of Knowledge (Diamond bar, CA)</h6>
                <ul>
                  <li>Muhammad Motala</li>
                  <li>Javeria Kashif</li>
                </ul>
                <p></p>
                <h6>4. COALITION</h6>
                <ul>
                  <h7>Cerritos High School</h7>
                  <ul>
                    <li>Sheeza Adil</li>
                  </ul>
                  <h7>Santiago High School (Corona, CA)</h7>
                  <ul>
                    <li>Ayra  Berket</li>
                  </ul>
                </ul>
                <p></p>
                <h6>5. Medina Educational Center (Murrieta, CA)</h6>
                <ul>
                  <li>Madina Wardak</li>
                  <li>Adam Benaddi</li>
                </ul>
              </ol>

              <h5>Math Olympics</h5>
              <ol>
                <li>Yousef Khan (Arnold O. Beckman High School (Irvine, CA))</li>
                <li>Alisha Khan (Cerritos High School)</li>
                <li>Daniyal Rauf (Fairmont Prep)</li>
                <li>Faateh Syed (Cerritos High School)</li>
                <li>Aleeza Adnan (Whitney High School (Cerritos, CA))</li>
              </ol>
              <h5>MIST Quiz Bowl</h5>
              <ol>
                <h6>1. Medina Educational Center (Murrieta, CA)</h6>
                <ul>
                  <li>Mekyle Hamedi</li>
                  <li>Zayd Mayar</li>
                  <li>Enaas Khan</li>
                  <li>Ashaz Mustafa</li>
                  <li>Haris Faruqi</li>
                </ul>
                <p></p>
                <h6>2. Portola High School (Irvine, CA)</h6>
                <ul>
                  <li>Ibraheem Jawadi (Fairmont Prep)</li>
                  <li>Ennes Kahf</li>
                  <li>Haaris Alam</li>
                  <li>Yahya Idriss</li>
                  <li>Alina Samiullah</li>
                  <li>Senna Kahf</li>
                  <li>Sarah Alkatib</li>
                </ul>
                <p></p>
                <h6>3. COALITION</h6>
                <ul>
                  <h7>Arnold O. Beckman High School (Irvine, CA)</h7>
                  <ul>
                    <li>Emaad Syed</li>
                  </ul>
                  <h7>Cerritos High School</h7>
                  <ul>
                    <li>Yunis Nasla</li>
                  </ul>
                  <h7>Mission Viejo High School (Mission Viejo, CA)</h7>
                  <ul>
                    <li>Hana Bawani</li>
                    <li>Abdullah Rafiq</li>
                  </ul>
                  <h7>Irvine High School (Irvine, CA)</h7>
                  <ul>
                    <li>Ali Ezzeldine</li>
                  </ul>
                </ul>
                <p></p>
                <h6>4. Institute Of Knowledge (Diamond bar, CA)</h6>
                <ul>
                  <li>Hania Kashif</li>
                  <li>Ammar Sharif</li>
                  <li>Mohammed  Aamir</li>
                  <li>Abdulrahman Mardini</li>
                  <li>Abdullah Chaudhry</li>
                  <li>Adam Azzaz</li>
                </ul>
              </ol>
              <h5>Improv - Male</h5>
              <ol>
                <h6>1. Institute Of Knowledge (Diamond bar, CA)</h6>
                <ul>
                  <li>Muhammad  Junaid</li>
                  <li>Ihsan Musallet</li>
                  <li>Emad Parekh</li>
                  <li>Yusef Shouman</li>
                  <li>Zohare Jamal</li>
                </ul>
              </ol>
              <h5>Improv - Female</h5>
              <ol>
                <h6>1. Institute Of Knowledge (Diamond bar, CA)</h6>
                <ul>
                  <li>Zubaida Rangoonwala</li>
                  <li>Layan Mustafa</li>
                  <li>Samiya Ali</li>
                  <li>Sarah Haque</li>
                  <li>Zeena Hajhamid</li>
                  <li>Zimal Amir</li>
                </ul>
              </ol>

              <h4>Category V: Group Projects</h4>
              <h5>Business Venture</h5>
              <ol>
                <h6>1. Institute Of Knowledge (Diamond bar, CA)</h6>
                <ul>
                  <li>Javeria Kashif</li>
                  <li>Layan Mustafa</li>
                  <li>Maryam Darkal</li>
                </ul>
                <p></p>
                <h6>2. Medina Educational Center (Murrieta, CA)</h6>
                <ul>
                  <li>Sami Malik</li>
                  <li>Adam Benaddi</li>
                  <li>Ashaz Mustafa</li>
                  <li>Haris Faruqi</li>
                </ul>
              </ol>

              <h5>Humanitarian Service</h5>
              <ol>
                <h6>1. Institute Of Knowledge (Diamond bar, CA)</h6>
                <ul>
                  <li>Alishba Salman</li>
                  <li>Rama Takleh</li>
                </ul>
                <p></p>
                <h6>2. Medina Educational Center (Murrieta, CA)</h6>
                <ul>
                  <li>Ateeb Ansari</li>
                  <li>Zayd Mayar</li>
                  <li>Madina Wardak</li>
                  <li>Zulaikha Wardak</li>
                  <li>Zara Popal</li>
                </ul>
              </ol>

              <h5>Science Fair</h5>
              <ol>
                <h6>1. Institute Of Knowledge (Diamond bar, CA)</h6>
                <ul>
                  <li>Hania Kashif</li>
                  <li>Mohammed  Aamir</li>
                  <li>Zimal Amir</li>
                  <li>Adam Azzaz</li>
                </ul>
              </ol>

              <h5>Short Film</h5>
              <ol>
                <h6>1. Institute Of Knowledge (Diamond bar, CA)</h6>
                <ul>
                  <li>Sana Sakr</li>
                  <li>Rayan Azam</li>
                </ul>
                <p></p>
                <h6>2. Medina Educational Center (Murrieta, CA)</h6>
                <ul>
                  <li>Mekyle Hamedi</li>
                </ul>
              </ol>
              <h5>Social Media</h5>
              <ol>
                <h6>1. Institute Of Knowledge (Diamond bar, CA)</h6>
                <ul>
                  <li>Zubaida Rangoonwala</li>
                  <li>Omar Azzawi</li>
                  <li>Samiya Ali</li>
                  <li>Sarah Haque</li>
                  <li>Zeena Hajhamid</li>
                </ul>
                <p></p>
                <h6>2. Trabuco Hills High School</h6>
                <ul>
                  <li>Aadhil Pm</li>
                  <li>Aqilla Ikrar</li>
                  <li>Athallah Ikrar</li>
                </ul>
              </ol>

              <h4>Category VI: Sports</h4>
              <h5>Basketball - Male</h5>
              <ol>
                <h6>1. COALITION</h6>
                <ul>
                  <h7>Northwood High School (Irvine High School)</h7>
                  <ul>
                    <li>Emraan Anwari</li>
                    <li>Aly Mohammed Ali</li>
                    <li>Krim Sounbol</li>
                    <li>Hamza Marufy</li>
                    <li>Yahya Hasan</li>
                  </ul>
                  <h7>Portola High School (Irvine, CA)</h7>
                  <ul>
                    <li>Ennes Kahf</li>
                    <li>Ismaeel Harsolia</li>
                  </ul>
                  <h7>Arnold O. Beckman High School (Irvine, CA)</h7>
                  <ul>
                    <li>Safi Syed</li>
                  </ul>
                  
                </ul>
                <p></p>
                <h6>2. Institute Of Knowledge (Diamond bar, CA)</h6>
                <ul>
                  <li>Muhammad Motala</li>
                  <li>Mir Ali</li>
                  <li>Ihsan Musallet</li>
                  <li>Emad Parekh</li>
                  <li>Ammar Sharif</li>
                  <li>Mohammed  Aamir</li>
                  <li>Yusef Shouman</li>
                  <li>Abdulrahman Mardini</li>
                  <li>Taha Rangoonwala</li>
                  <li>Abdur-Rahman Parekh</li>
                </ul>
                <p></p>
                <h6>3. COALITION</h6>
                <ul>
                  <h7>Fairmont Prep</h7>
                  <ul>
                    <li>Masroor Siddiqui</li>
                    <li>Yahya Hasan</li>
                    <li>Daniyal Rauf</li>
                  </ul>
                  <h7>Cerritos High School</h7>
                  <ul>
                    <li>Yunis Nasla</li>
                    <li>Faateh Syed</li>
                  </ul>
                </ul>
                <p></p>
                <h6>4. Medina Educational Center (Murrieta, CA)</h6>
                <ul>
                  <li>Ateeb Ansari</li>
                  <li>Sami Malik</li>
                  <li>Mekyle Hamedi</li>
                  <li>Zayd  Mayar</li>
                  <li>Ashaz Mustafa</li>
                  <li>Haris Faruqi</li>
                </ul>
              </ol>
              <h5>Basketball - Female</h5>
              <ol>
                <h6>1. Institute Of Knowledge (Diamond bar, CA)</h6>
                <ul>
                  <li>Zubaida Rangoonwala</li>
                  <li>Javeria Kashif</li>
                  <li>Alishba Salman</li>
                  <li>Hania Kashif</li>
                  <li>Rama Takleh</li>
                  <li>Sarah Haque</li>
                  <li>Salma Azzaz</li>
                  <li>Sana Sakr</li>
                  <li>Maryam Darkal</li>
                  <li>Zimal Amir</li>
                </ul>
                <p></p>
                <h6>2. COALITION</h6>
                <ul>
                  <h7>Portola High School (Irvine, CA)</h7>
                  <ul>
                    <li>Shifa Harsolia</li>
                    <li>Zaara Batla</li>
                  </ul>
                  <h7>Tesoro High School (San Juan Capistrano, CA)</h7>
                  <ul>
                    <li>Zoya Rana</li>
                  </ul>
                  <h7>Canyon High School (Anaheim, CA)</h7>
                  <ul>
                    <li>Simrah Bajwa</li>
                  </ul>
                  <h7>Santiago High School (Corona, CA)</h7>
                  <ul>
                    <li>Ayra Berket</li>
                  </ul>
                </ul>
              </ol>

              <h4>OVERALL RANKINGS</h4>
              <h5>INDIVIDUAL</h5>
              <ol>
                <li>Javeria Kashif (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Zubaida Rangoonwala (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Haris Faruqi (Medina Educational Center (Murrieta, CA))</li>
                <li>Zimal Amir (Institute Of Knowledge (Diamond bar, CA))</li>
                <li>Hania Kashif (Institute Of Knowledge (Diamond bar, CA))</li>
              </ol>
              <h5>TEAMS</h5>
              <ol>
                <li>Institute Of Knowledge</li>
                <li>Medina Educational Center (Murrieta, CA)</li>
                <li>Portola High School (Irvine, CA)</li>
                <li>Cerritos High School</li>
                <li>Fairmont Prep</li>
              </ol>
            </Col>
          </Row >
        </Container >
      </div >
    );
  }
}

export { WinnersPage };
