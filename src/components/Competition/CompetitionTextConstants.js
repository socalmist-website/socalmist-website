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
  }
}

export {competitions};