import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const competitions = {
  "knowledgeTests" : {
    "title" : "Knowledge Tests",
    "tabs" : (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>Read one of four books and take a test on it. The test comprises of a set of questions and an essay portion to judge reading and comprehension.</p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>
                Procedures:
              </h3>
              <ol>
                <li>
                  No more than four (4) students from each team may register for each test, and each student may pick only one
                  test to compete in. For example, 4 students may register for the first test, 4 other students may register for the
                  second test, etc.
                </li>
                <li>
                  Competitors must achieve a score of 65% in order to rank/win a medal.
                </li>
                <li>
                  Each student will be given a written test containing possible combinations of multiple choice, short answer, and
                  essay question(s) at the time of the competition. Questions will have an analytical/thinking focus.
                </li>
                <li>
                  Tests are open-book and must be taken individually.
                </li>
                <li>
                  Students may not bring additional notes into the exam room.
                </li>
                <li>
                  All questions for each topic will be based on the material covered in the assigned book.
                </li>
                <li>
                  There is no ballot for this competition. Scores are based solely on test performance.
                </li>
              </ol>
              <p><b>Note:</b> The books can be found at many online bookstores.</p>
            </div>
          </div>
        </Tab>
        <Tab eventKey="three" title="2020 Books">
          <div className="tabContent">
            2020 books to be added
          </div>
        </Tab>
      </Tabs>
    )
  },

  "quranMemorization" : {
    "title" : "Qur'an Memorization",
    "tabs" : <h3 style={{"text-align":"center"}}>Details coming soon!</h3>
  },

  "2dArt" : {
    "title" : "2D Art",
    "tabs" : <h3 style={{"text-align":"center"}}>Details coming soon!</h3>
  },

  "3dArt" : {
    "title" : "3D Art",
    "tabs" : <h3 style={{"text-align":"center"}}>Details coming soon!</h3>
  },

  "fashionDesign" : {
    "title" : "Fashion Design",
    "tabs" : <h3 style={{"text-align":"center"}}>Details coming soon!</h3>
  },

  "graphicDesign" : {
    "title" : "Graphic Design",
    "tabs" : <h3 style={{"text-align":"center"}}>Details coming soon!</h3>
  },

  "photography" : {
    "title" : "Photography",
    "tabs" : <h3 style={{"text-align":"center"}}>Details coming soon!</h3>
  },

  "roundOneArtBallot" : {
    "title" : "Round One Art Ballot",
    "tabs" : <h3 style={{"text-align":"center"}}>Details coming soon!</h3>
  },

  "extemporaneousEssay" : {
    "title" : "Extemporaneous Essay",
    "tabs" : <h3 style={{"text-align":"center"}}>Details coming soon!</h3>
  },

  "extemporaneousSpeaking" : {
    "title" : "Extemporaneous Speaking",
    "tabs" : <h3 style={{"text-align":"center"}}>Details coming soon!</h3>
  },

  "originalOratory" : {
    "title" : "Original Oratory",
    "tabs" : <h3 style={{"text-align":"center"}}>Details coming soon!</h3>
  },

  "poetry" : {
    "title" : "Poetry",
    "tabs" : <h3 style={{"text-align":"center"}}>Details coming soon!</h3>
  },

  "preparedEssay" : {
    "title" : "Prepared Essay",
    "tabs" : <h3 style={{"text-align":"center"}}>Details coming soon!</h3>
  },

  "shortFiction" : {
    "title" : "Short Fiction",
    "tabs" : <h3 style={{"text-align":"center"}}>Details coming soon!</h3>
  },

  "spokenWord" : {
    "title" : "Spoken Word",
    "tabs" : <h3 style={{"text-align":"center"}}>Details coming soon!</h3>
  },

  "debate" : {
    "title" : "Debate",
    "tabs" : <h3 style={{"text-align":"center"}}>Details coming soon!</h3>
  },

  "mathOlympics" : {
    "title" : "Math Olympics",
    "tabs" : <h3 style={{"text-align":"center"}}>Details coming soon!</h3>
  },

  "mistQuizBowl" : {
    "title" : "MIST Quiz Bowl",
    "tabs" : <h3 style={{"text-align":"center"}}>Details coming soon!</h3>
  },

  "improv" : {
    "title" : "Improv",
    "tabs" : <h3 style={{"text-align":"center"}}>Details coming soon!</h3>
  },

  "businessVenture" : {
    "title" : "Business Venture",
    "tabs" : <h3 style={{"text-align":"center"}}>Details coming soon!</h3>
  },

  "humanitarianService" : {
    "title" : "Humanitarian Service",
    "tabs" : <h3 style={{"text-align":"center"}}>Details coming soon!</h3>
  },

  "nasheed" : {
    "title" : "Nasheed/Rap",
    "tabs" : <h3 style={{"text-align":"center"}}>Details coming soon!</h3>
  },

  "scienceFair" : {
    "title" : "Science Fair",
    "tabs" : <h3 style={{"text-align":"center"}}>Details coming soon!</h3>
  },

  "shortFilm" : {
    "title" : "Short Film",
    "tabs" : <h3 style={{"text-align":"center"}}>Details coming soon!</h3>
  },

  "socialMedia" : {
    "title" : "Social Media",
    "tabs" : <h3 style={{"text-align":"center"}}>Details coming soon!</h3>
  },

  "basketball" : {
    "title" : "Basketball",
    "tabs" : <h3 style={{"text-align":"center"}}>Details coming soon!</h3>
  },

}

export {competitions};