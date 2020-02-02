import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Image from "react-bootstrap/Image";

const competitions = {
  knowledgeTests: {
    title: "Knowledge Tests",
    tabs: (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>
              Read one of four books and take a test on it. The test comprises
              of a set of questions and an essay portion to judge reading and
              comprehension.
            </p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>Procedures:</h3>
              <ol>
                <li>
                  No more than four (4) students from each team may register for
                  each test, and each student may pick only one test to compete
                  in. For example, 4 students may register for the first test, 4
                  other students may register for the second test, etc.
                </li>
                <li>
                  Competitors must achieve a score of 65% in order to rank/win a
                  medal.
                </li>
                <li>
                  Each student will be given a written test containing possible
                  combinations of multiple choice, short answer, and essay
                  question(s) at the time of the competition. Questions will
                  have an analytical/thinking focus.
                </li>
                <li>Tests are open-book and must be taken individually.</li>
                <li>
                  Students may not bring additional notes into the exam room.
                </li>
                <li>
                  All questions for each topic will be based on the material
                  covered in the assigned book.
                </li>
                <li>
                  There is no ballot for this competition. Scores are based
                  solely on test performance.
                </li>
              </ol>
              <p>
                <b>Note:</b> The books can be found at many online bookstores.
              </p>
            </div>
          </div>
        </Tab>
        <Tab eventKey="three" title="2020 Books">
          <div className="tabContent">
            <ul data-rte-list="default">
              <li>
                <p><strong>Keys to Immortal Success: A Collection of </strong>
                <a target="_blank" rel="noopener noreferrer" href="https://yaqeeninstitute.org/"><span><strong>Yaqeen Institute</strong></span></a><strong> Publications</strong></p>
                <ul data-rte-list="default">
                  <li>
                    <p>
                      <a target="_blank" rel="noopener noreferrer" href="https://yaqeeninstitute.org/justin-parrott/the-guiding-principles-of-faith-sincerity-honesty-and-good-will-in-islam/#.XhuOelNKhQI">
                        <span>The Guiding Principles of Faith: Sincerity, Honesty and Good Will in Islam</span>
                      </a>
                    </p>
                  </li>
                  <li><p><a target="_blank" rel="noopener noreferrer" href="https://cdn2.hubspot.net/hubfs/4713562/Website-Paper-PDFs/FINAL_-The-Technology-of-Happiness.pdf?__hstc=251652889.e0a64058aa847b71ac0154f8151f0f7d.1576186560291.1576186560291.1576186560291.1&amp;__hssc=251652889.3366141426.1578864070430"><span>The Technology of Happiness</span></a></p></li>
                  <li><p><a target="_blank" rel="noopener noreferrer" href="https://cdn2.hubspot.net/hubfs/4713562/Website-Paper-PDFs/The%20Idea%20of%20Happiness%20in%20the%20Quran.pdf?__hstc=251652889.e0a64058aa847b71ac0154f8151f0f7d.1576186560291.1576186560291.1576186560291.1&amp;__hssc=251652889.336614.1578864070430"><span>The Idea of Happiness in the Qur’an</span></a></p></li>
                </ul>
              </li>
              <li><p><strong>Gender &amp; Islam: A Collection of </strong><a target="_blank" rel="noopener noreferrer" href="https://yaqeeninstitute.org/"><span><strong>Yaqeen Institute</strong></span></a><strong> Publications</strong></p>
                <ul data-rte-list="default">
                  <li><p><a target="_blank" rel="noopener noreferrer" href="https://cdn2.hubspot.net/hubfs/4713562/Website-Paper-PDFs/FINAL_-Courage-&amp;-Commitment_-The-Femininity-of-Muslim-Women.pdf?__hstc=251652889.e0a64058aa847b71ac0154f8151f0f7d.1576186560291.1576186560291.1576186560291.1&amp;__hssc=251652889.3366141426333435.1578864070430"><span>Courage &amp; Commitment: The Femininity of Muslim Women</span></a></p></li>
                  <li><p><a target="_blank" rel="noopener noreferrer"href="https://cdn2.hubspot.net/hubfs/4713562/Website-Paper-PDFs/FINAL_-An-Open-Letter-to-Muslim-Men_-The-Sunnah-Trumps-Toxic-Masculinity.pdf?__hstc=251652889.e0a64058aa847b71ac0154f8151f0f7d.1576186560291.1576186560291.1576186560291.1&amp;__hssc=251652889.33661414263334.1578864070430"><span>An Open Letter to Muslim Men: The Sunnah Trumps Toxic Masculinity</span></a></p></li>
                  <li><p><a target="_blank" rel="noopener noreferrer" href="https://cdn2.hubspot.net/hubfs/4713562/Website-Paper-PDFs/Be%20a%20Man_%20Prophetic%20Masculinity.pdf?__hstc=251652889.e0a64058aa847b71ac0154f8151f0f7d.1576186560291.1576186560291.1576186560291.1&amp;__hssc=251652889.336614142633.1578864070430"><span>Be a Man: Prophetic Masculinity</span></a></p></li>
                  <li><p><a target="_blank" rel="noopener noreferrer" href="https://cdn2.hubspot.net/hubfs/4713562/Website-Paper-PDFs/FINAL-Women-in-Islamic-Law_-Examining-Five-Prevalent-Myths.pdf?__hssc=251652889.3.1580082652384&amp;__hstc=251652889.e0a64058aa847b71ac0154f8151f0f7d.1576186560291.1576186560291.1576186560291.1">Women in Islamic Law: Examining Five Prevalent Myths</a></p></li>
                </ul>
              </li>
              <li><p><a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/Destiny-Disrupted-History-Through-Islamic/dp/1586488139"><span><strong>Destiny Disrupted: A History of the World Through Islamic Eyes by Tamim Ansary</strong></span></a></p></li>
              <li><p><a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/Becoming-Dr-Journey-Migrant-Surgeon/dp/0520274563/ref=sr_1_1?keywords=Becoming+Dr.+Q%3A+My+Journey+from+Migrant+Farm+Worker+to+Brain+Surgeon+by+Alfredo+Qui%C3%B1ones-Hinojosa&amp;qid=1578931006&amp;s=books&amp;sr=1-1"><span><strong>Becoming Dr. Q: My Journey from Migrant Farm Worker to Brain Surgeon by Alfredo Quiñones-Hinojosa&nbsp;</strong></span></a></p></li>
            </ul>
          </div>
        </Tab>
      </Tabs>
    )
  },
  quranMemorization: {
    title: "Qur'an Memorization",
    tabs: (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>
              ​Test your memorization and recitation of the Quran in Arabic,
              according to tajweed (rules of recitation) in one of 4 levels.
              Levels are ranked by level of difficulty and length of the Surahs
              being memorized.
            </p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>Procedures:</h3>
              <ol>
                <li>
                  Each level is treated as a separate competition, and each
                  level is gender segregated. For example, male competitors will
                  register for Brothers Quran Memorization Level 1, and female
                  competitors will register for Sisters Quran Memorization Level
                  1.{" "}
                </li>
                <li>
                  If less than five students are registered for a given level in
                  the tournament, the level will be combined, and one set of
                  (preferably female) judges will judge both the males and
                  females in one ranking.{" "}
                </li>
                <li>
                  Each team may have a maximum of four (4) male and four (4)
                  female competitors for Level 1, and a maximum of two (2) male
                  and two (2) female competitors for Level 2, 3, and 4.{" "}
                </li>
                <li>
                  Students are expected to memorize the portion of the Quran
                  relevant to their level in Arabic and be able to recite from
                  memory fluently. Hafs (on the authority of Asim) is the
                  default recitation style.{" "}
                </li>
                <li>
                  Students may begin with Level 1 material in their first year
                  of competition, but may not repeat the same Level in
                  subsequent years.{" "}
                </li>
                <li>
                  Judges will prompt students by reading a portion of a verse,
                  and students will be expected to continue the recitation until
                  motioned to stop. Judging will be based on three separate
                  passages.{" "}
                </li>
                <li>
                  If the student is unable to continue reciting a passage after
                  5 seconds of silence, the judge may read a word (or few words)
                  to help the student continue reciting. If the student repeats
                  the verse before being prompted from a judge and is able to
                  continue reciting without help, no points will be deducted. If
                  the judge reminds the student of the beginning of the current
                  verse, which helps the student to start the verse over and
                  continue reciting, only one point should be deducted. If the
                  student is still unable to continue, the judge may remind the
                  student of the next word(s). Two points should be deducted
                  each time the judge has to remind the student of the next
                  word(s).{" "}
                </li>
                <li>
                  If the student is unable to continue reciting a passage from
                  memory after three failed attempts, the judge may ask the
                  student to proceed to the next passage, forfeiting the
                  remaining portion of memorization points for that passage.{" "}
                </li>
                <li>
                  Judges are expected to wait until the end of a verse or 5
                  seconds after a mistake (whichever is greater) before
                  signaling the competitor that a mistake was made.{" "}
                </li>
                <li>
                  If the mistake is corrected by the student immediately (within
                  5 seconds or before continuing with the next verse) without
                  being prompted in any way by the judge, one point is deducted.{" "}
                </li>
                <li>
                  After allowing time for a student to self-correct, a judge
                  should audibly tap their pen to indicate a mistake and allow
                  the student a chance to recite the verse once more.{" "}
                </li>
                <li>
                  If a mistake is not corrected on the second reading of a
                  verse, a judge may recite the correction. The student may ask
                  the judge for clarification. If the student correctly fixes
                  the mistake by reciting the correction from the judge, three
                  points are deducted.{" "}
                </li>
                <li>
                  If the competitor is unable to fix the mistake after prompting
                  by the judges, the mistake should be noted on the ballot with
                  5 points deducted for minor mistakes and 10 points for major
                  mistakes. If the mistake is in pronunciation and not
                  memorization, the mistake should be ignored if it recurs later
                  so that each type of pronunciation mistake is only penalized
                  once.{" "}
                </li>
                <li>
                  In addition to being scored on the pronunciation (Tajweed)
                  during the recitation of the passages competitors will also be
                  tested on basic Tajweed rules for the final 10 points.
                  Competitors will be indicated to a verse in a copy of the
                  Qur’an and they will be expected to identify as many rules as
                  possible, such as the place of articulation of letters, the
                  respective qualities of letters, nasal sounds, type of
                  elongation (madd), etc. Competitors will not be expected to
                  have an extensive knowledge on the laws of Tajweed.
                </li>
              </ol>

              <h3>Minor Mistakes:</h3>
              <ul>
                <li>
                  Heavy vs. Light - To overlook the rules of tafkheem and
                  tarqeeq only when reciting the name of Allah and the letter
                  Raa
                </li>
                <li>
                  Ghunnah - Not to adhere to the the rules of izhaar, idghaam,
                  iqlaab, ikhfaa, etc. in their respective places
                </li>
                <li>
                  Prolongation - Not to prolong / stretch a letter when madd is
                  present
                </li>
              </ul>
              <h3>Major Mistakes:</h3>
              <ul>
                <li>
                  Incorrect Makhraj or Sifat - Not to pronounce letters from the
                  correct place of articulation and their respective qualities,
                  including qalqala, etc.
                </li>
                <li>
                  Addition - To add on letters to words, or add entire words
                </li>
                <li>
                  Omission - To leave off letters from words, or leave out
                  entire words
                </li>
                <li>
                  Replacement - To replace a letter for another, or replace
                  entire words
                </li>
                <li>Change Harakah - To change the fat’ha, dhamma, or kasra</li>
                <li>
                  To replace Harakah with Sukoon and vice versa - To replace a
                  fat’ha, dhamma, or kasra with a saakin and vice versa
                </li>
              </ul>
            </div>
          </div>
        </Tab>
      </Tabs>
    )
  },

  "2dArt": {
    title: "2D Art",
    tabs: (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>
              Are you an aspiring painter? Do you doodle more than writing notes
              in class? Put your inspiration on canvas with the 2D art
              competition!
            </p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>Procedures:</h3>
              <ol>
                <li>
                  No more than two (2) students from each school can register
                  for this competition.{" "}
                </li>
                <li>
                  This competition is NOT a team effort. Each competitor must
                  turn in a separate piece of work.{" "}
                </li>
                <li>
                  MIST ID and order of competition will be pre-assigned on a
                  random selection basis.{" "}
                </li>
                <li>
                  Competitors shall report at the appropriate time to the
                  designated place. Competitors shall be introduced to the
                  judges by their MIST IDs.{" "}
                </li>
                <li>
                  All artwork must be labeled with the MIST ID ONLY. The
                  competitor name must not appear anywhere on the submission.{" "}
                </li>
                <li>No more than $100 can be spent on supplies. </li>
                <li>Artwork must relate to the overall MIST Theme. </li>
                <li>
                  Artwork should avoid realistic, representational rendering of
                  lifelike human or animal form. If in doubt, contact your
                  Regional Competitions Headquarters. Therefore, fully defined
                  facial, skeletal, or muscular features are not permitted. If
                  in doubt, contact your Regional Competitions Headquarters. a.
                  Suggestions: Draw a general picture of a squirrel; do not draw
                  a detailed image of the adorable facial expressions when it
                  comes across a good acorn.{" "}
                </li>
                <li>
                  Submission must be two-dimensional (examples: painting,
                  drawing, etc.). You can create the illusion of depth, but the
                  artwork must still be two-dimensional.{" "}
                </li>
                <li>
                  Acceptable mediums for artwork include, but are not limited
                  to: watercolor, oil, crayon, mixed mediums, chalk, pastels,
                  charcoal…etc.{" "}
                </li>
                <li>
                  Make sure your artwork is dry before submitting it to the
                  judges.{" "}
                </li>
                <li>
                  All 2D artwork must be mounted with a 1” to 2” border.
                  Suggestions for mounting include: poster board, mat board and
                  illustration board. Please affix artwork to the mounting
                  material with spray glue or tape. Do not use staples, paper
                  clips, or any glue that could seep through and damage the
                  artwork. Please do not use cardboard for mounting artwork.
                  Artwork should NOT be rolled or folded.{" "}
                </li>
                <li>
                  Each participant will be interviewed for five (5) minutes in
                  order to describe purpose and inspiration of the artwork.
                  Interview questions can be found in the last section of the 2D
                  Art Ballot. Please note that if there are more than fifteen
                  (15) entries for this competition, only the top fifsteen (15)
                  entries (based on artwork and written statement) will be
                  interviewed. In this case, an open gallery preliminary judging
                  round will take place, and all entries will be judged
                  according to the 2D/3D Art Ballot. The top fifteen (15) that
                  advance will have a five (5) minute interview with the Judges’
                  Panel.{" "}
                </li>
                <li>
                  A typewritten statement of the artwork, no more than one (1)
                  page (500 words max.) must be included with the artwork. The
                  explanation will include what the artwork is about and what
                  inspired the competitor to make it, as well as specific
                  answers to the interview questions. Please note that the
                  written statement is an integral component of qualifying for
                  an interview in the top fifteen.{" "}
                </li>
                <li>
                  Both the interview and artwork (with written statement) will
                  be judged according to the Arts Competition Ballot.
                </li>
              </ol>
              <h3>Checklist:</h3>
              <ul>
                <li>2D Art submission.</li>
                <li>
                  Written statement based on interview questions (Section D of
                  Art Ballot).
                </li>
                <li>
                  Both the submission and the written statement should be
                  clearly labeled with:
                  <ul>
                    <li>MIST IDs</li>
                    <li>Name of Competition</li>
                  </ul>
                </li>
              </ul>
              <p>
                [Please note: we recommend that all written statements are
                securely attached to submission. You may choose to use paper
                clips or a large manila envelope for these purposes.]
              </p>
            </div>
          </div>
        </Tab>
        <Tab eventKey="three" title="Detailed Ballot">
          <div>
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/2dartballot.png")}
            />
          </div>
        </Tab>
      </Tabs>
    )
  },

  "3dArt": {
    title: "3D Art",
    tabs: (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>
              Think you have what it takes to be the next great sculptor? Is 3-D
              printing your ultimate inspiration? Do you have a passion for
              wood-work? Show us your skills in the 3D art competition!
            </p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>Procedures:</h3>
              <ol>
                <li>
                  No more than two (2) students from each school can register
                  for this competition.{" "}
                </li>
                <li>
                  This competition is NOT a team effort. Each competitor must
                  turn in a separate piece of work.{" "}
                </li>
                <li>
                  MIST ID and order of competition will be pre-assigned on a
                  random selection basis.{" "}
                </li>
                <li>
                  Competitors shall report at the appropriate time to the
                  designated place. Competitors shall be introduced to the
                  judges by their MIST IDs.{" "}
                </li>
                <li>
                  All artwork must be labeled with the MIST ID ONLY. The
                  competitor name must not appear anywhere on the submission.{" "}
                </li>
                <li>No more than $100 can be spent on supplies. </li>
                <li>Artwork must relate to the overall MIST Theme. </li>
                <li>
                  Artwork should avoid realistic, representational rendering of
                  lifelike human or animal form. If in doubt, contact your
                  Regional Competitions Headquarters. Therefore, fully defined
                  facial, skeletal, or muscular features are not permitted. If
                  in doubt, contact your Regional Competitions Headquarters. a.
                  Suggestions: Draw a general picture of a squirrel; do not draw
                  a detailed image of the adorable facial expressions when it
                  comes across a good acorn.{" "}
                </li>
                <li>All submissions must be 3-dimensional.</li>
                <li>
                  Make sure your artwork is dry before submitting it to the
                  judges.
                </li>
                <li>
                  Artwork should also be placed on a board for easy carrying.
                  The board can be made of any material sturdy enough to carry
                  the artwork.
                </li>
                <li>
                  3D art should be sturdy. Judges are looking for artwork that
                  is well put together. Please note that your work may be moved
                  around on several occasions, and it should be robust to handle
                  these multiple moves.
                </li>
                <li>
                  Each participant will be interviewed for five (5) minutes in
                  order to describe purpose and inspiration of the artwork.
                  Interview questions can be found in the last section of the 2D
                  Art Ballot. Please note that if there are more than fifteen
                  (15) entries for this competition, only the top fifsteen (15)
                  entries (based on artwork and written statement) will be
                  interviewed. In this case, an open gallery preliminary judging
                  round will take place, and all entries will be judged
                  according to the 2D/3D Art Ballot. The top fifteen (15) that
                  advance will have a five (5) minute interview with the Judges’
                  Panel.{" "}
                </li>
                <li>
                  A typewritten statement of the artwork, no more than one (1)
                  page (500 words max.) must be included with the artwork. The
                  explanation will include what the artwork is about and what
                  inspired the competitor to make it, as well as specific
                  answers to the interview questions. Please note that the
                  written statement is an integral component of qualifying for
                  an interview in the top fifteen.{" "}
                </li>
                <li>
                  Both the interview and artwork (with written statement) will
                  be judged according to the Arts Competition Ballot.
                </li>
              </ol>
              <h3>Checklist:</h3>
              <ul>
                <li>3D Art submission.</li>
                <li>
                  Written statement based on interview questions (Section D of
                  Art Ballot).
                </li>
                <li>
                  Both the submission and the written statement should be
                  clearly labeled with:
                  <ul>
                    <li>MIST IDs</li>
                    <li>Name of Competition</li>
                  </ul>
                </li>
              </ul>
              <p>
                [Please note: we recommend that you make two copies of your
                written statement; one to attach to the back of your 3D
                submission, as well as the required separate statement that will
                be collected at on-site registration.]
              </p>
            </div>
          </div>
        </Tab>
        <Tab eventKey="three" title="Detailed Ballot">
          <div>
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/3dartballot.png")}
            />
          </div>
        </Tab>
      </Tabs>
    )
  },

  fashionDesign: {
    title: "Fashion Design",
    tabs: (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>
              You don’t just love wearing fashion, you design it! Take your
              inspiration from the MIST theme to become the next fashion
              phenomenon.
            </p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>Procedures:</h3>
              <p>
                The following is a list of rules and procedures for this
                category. Failure to fulfill these obligations and/or any
                violation of them may result in point loss.
              </p>
              <ol>
                <li>
                  No more than two (2) students from each school can register
                  for this competition.{" "}
                </li>
                <li>
                  This competition is NOT a team effort. Each competitor must
                  turn in a separate piece of work.{" "}
                </li>
                <li>
                  MIST ID and order of competition will be pre-assigned on a
                  random selection basis.{" "}
                </li>
                <li>
                  Competitors shall report at the appropriate time and place
                  designated.{" "}
                </li>
                <li>Judges shall know the competitors by their MIST IDs. </li>
                <li>
                  All designs must be labeled with the MIST ID ONLY. The
                  competitor’s name must not appear anywhere on the submission.{" "}
                </li>
                <li>
                  Your portfolio should have a cover or presentation case. Be
                  creative. (see example).{" "}
                </li>
                <li>
                  Your portfolio should include your philosophy: how you are
                  going to use your inspiration to make a collection (your
                  inspiration is this year’s theme and it can be combined with
                  other inspirations as well). For example, Loyalty +
                  Environment (trees, landscape, etc.). (see example).{" "}
                </li>
                <li>
                  Your portfolio should include a “Mood” or “Inspiration” page
                  of the image(s) that inspire your collection. So if your
                  philosophy is Loyalty and environment then there should be
                  images of those things so you can refer to them to draw
                  inspiration for your designs. (see example).{" "}
                </li>
                <li>
                  Your portfolio should include a fabric swatch/color palette
                  page. (see example){" "}
                </li>
                <li>
                  Each competitor’s portfolio must have a total of six (6)
                  outfits in the following combinations:{" "}
                  <ul>
                    <li>
                      a. OPTION 1: 3 complete adult female outfits AND 3
                      complete adult male outfits.&nbsp;
                    </li>
                    <li>
                      b. OPTION 2: 6 complete male outfits OR 6 complete female
                      outfits.&nbsp;
                    </li>
                  </ul>
                </li>
                <li>
                  These six (6) outfits can either be on a figure (see example)
                  or as a colored flat (it would just be your black and white
                  flats colored.) You are welcome to make xerox copies of your
                  flats and color on top. For each outfit, you must submit the
                  following as part of your portfolio:{" "}
                  <ol>
                    <li>
                      One 5”x7” -- 8.5”x11” illustration of each design as worn,
                      in color, matted and mounted on heavy paper or poster
                      board enclosed in an 8.5”x11” page protector to protect
                      the design. No smaller than 5” x 7”. (A total of 6 mounted
                      illustrations).{" "}
                    </li>
                    <li>
                      Two (2) flat design sketches (working/detail sketches) for
                      each outfit, for example: front and back (for a total of
                      12 flat sketches). These flats should be in black and
                      white so the details can be seen easily.{" "}
                    </li>
                    <li>
                      Description and sewing notes. Include in this section
                      details that are hard to see or identify in your design
                      illustration and/or sketches (see sample flat).{" "}
                    </li>
                    <li>
                      The illustration (photographs are not acceptable) is to be
                      clean, neatly mounted or matted. Colored pencils,
                      charcoal, pastels, watercolor, colored pen/ink, or crayons
                      may be used (see sample flat).{" "}
                    </li>
                    <li>
                      Competitors can gain extra points by providing extra
                      design items such as shoes, accessories: pins, jewelry,
                      etc. (outfits can be designed with shoes; however, outfits
                      without shoes will NOT be disqualified).{" "}
                    </li>
                    <li>
                      Competitors must provide a common feature within a set
                      such as similar buttons, similar colors, etc. Competitors
                      are encouraged to be original in all their designs.{" "}
                    </li>
                  </ol>
                </li>
                <li>
                  The sketch must fulfill all the basic requirements below:{" "}
                  <ol>
                    <li>
                      That designs are modest in nature while exuding
                      creativity.{" "}
                    </li>
                    <li>
                      That designs inspire comfort, confidence, and dignity.{" "}
                    </li>
                  </ol>
                </li>
                <li>
                  Each participant will be interviewed for five (5) minutes in
                  order to describe purpose and inspiration of the artwork.
                  Judges will interview competitors on their inspiration behind
                  the design, what they like the most and dislike the most.
                  Competitors should be ready to explain any details, parts, and
                  characteristics in the design that are outstanding or unusual.
                  Judges will also ask competitors what they think makes their
                  designs different from others in the market. Interview
                  questions can be found in the last section of the Fashion
                  Design Ballot. Please note that if there are more than 15
                  entries for this competition, only the top 15 entries (based
                  on the portfolio) will be interviewed. In this case, a
                  preliminary judging round will take place, and all entries
                  will be judged according to the Fashion Design Ballot. The top
                  15 that advance will have a five (5) minute interview with the
                  Judges’ Panel.{" "}
                </li>
                <li>
                  Both the interview and the portfolio will be judged according
                  to the Fashion Design Ballot.
                </li>
              </ol>
              <h3>Checklist:</h3>
              <ul>
                <li>Fashion Design Portfolio.</li>
                <li>
                  The submission must be clearly labeled with:
                  <ul>
                    <li>MIST IDs</li>
                    <li>Name of Competition</li>
                  </ul>
                </li>
              </ul>
              <p>
                [Please note: we recommend that participants use a sturdy
                portfolio that has all required items securely intact.]
              </p>
            </div>
          </div>
        </Tab>
        <Tab eventKey="three" title="Detailed Ballot">
          <div>
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/fashiondesignballot.png")}
            />
          </div>
        </Tab>
        <Tab eventKey="four" title="Example Portfolio">
          <div style={{ "margin-top": "1em", "text-align": "center" }}>
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/fashiondesignexample.png")}
            />
            ADD
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/fashiondesignexample2.png")}
            />
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/fashiondesignexample3.png")}
            />
          </div>
        </Tab>
      </Tabs>
    )
  },

  graphicDesign: {
    title: "Graphic Design",
    tabs: (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>
              If you’re the Photoshop or Illustrator whiz that everyone goes to
              for event flyers, the graphic design competition is for you.
              Pixelate away!
            </p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>Procedures:</h3>
              <p>
                The following is a list of rules and procedures for this
                category. Failure to fulfill these obligations and/or any
                violation of them may result in point loss.
              </p>
              <ol>
                <li>
                  No more than two (2) students from each school can register
                  for this competition.
                </li>
                <li>
                  This competition is NOT a team effort. Each competitor must
                  turn in a separate piece of work.
                </li>
                <li>
                  MIST ID and order of competition will be pre-assigned on a
                  random selection basis.
                </li>
                <li>
                  Competitors shall report at the appropriate time and place
                  designated for the interview.
                </li>
                <li>
                  Competitors shall be introduced to the judges by their MIST
                  IDs.
                </li>
                <li>
                  All artwork must be labeled (labelled) with the MIST ID ONLY.
                  If the contestant name appears anywhere on the artwork, points
                  will be deducted.
                </li>
                <li>Artwork must reflect on this year’s theme.</li>
                <li>
                  Artwork should avoid realistic, representational rendering of
                  lifelike human or animal form. If in doubt, contact your
                  Regional Competitions Headquarters.
                </li>
                <li>
                  Contestants should ONLY use their computers to generate any
                  artwork for this competition.
                </li>
                <li>Artwork should not be animated.</li>
                <li>
                  All submissions should be in JPG, TIFF, or GIF format. All
                  submissions will be submitted online.
                </li>
                <li>
                  All submissions must be submitted to your Regional
                  Competitions Headquarters&nbsp;
                  <strong>two (2) weeks</strong>
                  &nbsp;prior to the MIST competition.
                </li>
                <li>
                  &nbsp;A typed short explanation of the artwork, no more than
                  one (1) page (500 words max.) must be included with the
                  artwork. The explanation will include what the artwork is
                  about and what inspired the participant to make it.
                </li>
                <li>
                  Judging will be based on the explanation provided in the
                  interview and the artwork itself. The interview will be no
                  longer than five (5) minutes. Interview questions can be found
                  in the last section of the 2D/3D Art Ballot. Please note that
                  if there are more than 15 entries for this competition, only
                  the top 15 entries (based on artwork and written statement)
                  will be interviewed. In this case, an open gallery preliminary
                  judging round will take place, and all entries will be judged
                  according to the 2D/3D Art Ballot. The top 15 that advance
                  will have a five (5) minute interview with the Judges’ Panel.
                </li>
                <li>
                  &nbsp;Competitors will be judged according to the Art
                  Competition Ballot.
                </li>
              </ol>
              <h3>Checklist:</h3>
              <ul>
                <li>Graphic Design submission.</li>
                <li>
                  Written statement based on interview questions (Section D of
                  Art Ballot).
                </li>
                <li>
                  Both the submission and the written statement should be
                  clearly labeled with:
                  <ul>
                    <li>MIST IDs</li>
                    <li>Name of Competition</li>
                  </ul>
                </li>
              </ul>
              <p>
                [Please note: we recommend that participants use a sturdy
                portfolio that has all required items securely intact.]
              </p>
            </div>
          </div>
        </Tab>
        <Tab eventKey="three" title="Detailed Ballot">
          <div>
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/graphicdesignballot.png")}
            />
          </div>
        </Tab>
      </Tabs>
    )
  },

  photography: {
    title: "Photography",
    tabs: (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>
              Not only do you carry around your camera with you all the time,
              but you see everything as an opportunity for the perfect photo.
              Painting and drawing is cool and all - but you prefer a lens and
              the dark room for your creative pursuits.
            </p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>Procedures:</h3>
              <p>
                The following is a list of rules and procedures for this
                category. Failure to fulfill these obligations and/or any
                violation of them may result in point loss.
              </p>
              <ol>
                <li>
                  No more than two (2) students from each school can register
                  for this competition.
                </li>
                <li>
                  This competition is NOT a team effort. Each competitor must
                  turn in a separate piece of work.
                </li>
                <li>
                  MIST ID and order of competition will be pre-assigned on a
                  random selection basis.
                </li>
                <li>
                  Competitors shall report at the appropriate time and place
                  designated for the interview.
                </li>
                <li>
                  Competitors shall be introduced to the judges by their MIST
                  IDs.
                </li>
                <li>
                  All artwork must be labeled with the MIST ID ONLY. If the
                  contestant name appears anywhere on the artwork, points will
                  be deducted.
                </li>
                <li>
                  A minimum of three (3) and a maximum of five (5) photographs
                  must be submitted as part of the photography portfolio. The
                  photographs must carry a coherent theme or style to showcase
                  the photographer’s skill.
                </li>
                <li>
                  The pictures must reflect on this year’s theme and can be of
                  any inanimate OR animate object. It must be the competitor’s
                  own work from beginning to end, including taking the pictures.
                  Pictures must be taken exclusively for this competition
                  (pictures from previous years may not be used).
                </li>
                <li>
                  Competitors will be asked how and why they came up with their
                  ideas.
                </li>
                <li>
                  Photographs may NOT be digitally modified beyond standard
                  optimization (removal of dust, cropping, minor adjustments to
                  exposure, color and contrast, etc.).
                </li>
                <li>
                  The pictures must be bound in some way to reflect a portfolio.
                  Binding options may include, but are not limited to, vinyl
                  folders, sleeves in binders, etc. Do not use staples, paper
                  clips or rubber bands that may damage the artwork. Please do
                  not use cardboard for mounting artwork and do not use any
                  frames.
                </li>
                <li>
                  Photographs should be printed on high quality, photographic
                  paper.
                </li>
                <li>Artwork should not be rolled or folded.</li>
                <li>The pictures must each be a minimum of 8×10 or larger.</li>
                <li>
                  Each participant will be interviewed for five (5) minutes in
                  order to describe purpose and inspiration of the artwork.
                  Interview questions can be found in the last section of the
                  Art Ballot. Please note that if there are more than fifteen
                  (15) entries for this competition, only the top fifteen (15)
                  entries (based on artwork and written statement) will be
                  interviewed. In this case, an open gallery preliminary judging
                  round will take place, and all entries will be judged
                  according to the Photography Ballot. The top 15 that advance
                  will have a five (5) minute interview with the Judges’ Panel.
                </li>
                <li>
                  A typed statement about the artwork, no more than one (1) page
                  (500 words max.) must be included. The explanation will
                  include what the artwork is about and what inspired the
                  contestant to make it, as well as specific answers to the
                  interview questions. Please note that the written statement is
                  an integral component of qualifying for an interview in the
                  top fifteen.
                </li>
                <li>
                  Competitors will be judged according to the Art Competition
                  Ballot
                </li>
              </ol>
              <h3>Checklist:</h3>
              <ul>
                <li>Photography submission</li>
                <li>
                  Written statement based on interview questions (Section D of
                  Art Ballot).
                </li>
                <li>
                  Both the submission and the written statement should be
                  clearly labeled with:
                  <ul>
                    <li>MIST IDs</li>
                    <li>Name of Competition</li>
                  </ul>
                </li>
              </ul>
              <p>
                [Please note: we recommend that all written statements are
                securely attached to submission. You may choose to use paper
                clips or a large manila envelope for these purposes.]
              </p>
            </div>
          </div>
        </Tab>
        <Tab eventKey="three" title="Detailed Ballot">
          <div>
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/photographyballot.png")}
            />
          </div>
        </Tab>
      </Tabs>
    )
  },

  extemporaneousEssay: {
    title: "Extemporaneous Essay",
    tabs: (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>
              Competitors are allotted 60 minutes to compose a handwritten essay
              on a randomly selected topic related to the theme.
            </p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>Procedures:</h3>
              <p>
                The following is a list of rules and procedures for this
                category. Failure to fulfill these obligations and/or any
                violation of them may result in point loss.
              </p>
              <ol>
                <li>
                  A limit of two (2) students from each team may register for
                  this competition. Each student competes individually, so
                  collaboration is not permitted.
                </li>
                <li>
                  After registering, students are given a MIST ID Number, which
                  must be used to identify the student on the test. Names and
                  other identifying information should not be written anywhere
                  on the final submission.{" "}
                </li>
                <li>
                  All competitors are to report to the competition room at the
                  same time, which will be designated in the competition
                  schedule.{" "}
                </li>
                <li>
                  Paper and pen/pencil will be provided, but students may feel
                  free to bring their own.{" "}
                </li>
                <li>
                  Out of three randomly selected topics presented at the time of
                  competition, students must choose one topic for their essay.
                  The topics will be relevant to the annual theme.{" "}
                </li>
                <li>
                  Students will be allotted 60 minutes to complete their essay,
                  to be written in the English language. The submission is to be
                  turned in to the proctor at the end of the hour but can be
                  turned in earlier.{" "}
                </li>
                <li>
                  Students are allowed to bring printed reference materials or
                  quotations relevant to the theme with them to use for citation
                  during the competition, but prepared notes or personal essays
                  are not allowed. Materials must be reviewed and approved at
                  the sole discretion of the test proctor before the competition
                  begins.{" "}
                </li>
                <li>
                  Electronic device usage is not permitted during the
                  competition.
                </li>
              </ol>
            </div>
          </div>
        </Tab>
        <Tab eventKey="three" title="Detailed Ballot">
          <div>
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/extempessayballot.png")}
            />
          </div>
        </Tab>
      </Tabs>
    )
  },

  extemporaneousSpeaking: {
    title: "Extemporaneous Speaking",
    tabs: (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>
              The art of extemporaneous speaking is not for the faint-hearted.
              Delivering a coherent, engaging, and moving speech, is easy
              enough, right? Now try doing that on the spot with only 15 minutes
              of preparation!
            </p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>Procedures:</h3>
              <p>
                The following is a list of rules and procedures for this
                category. Failure to fulfill these obligations and/or any
                violation of them may result in point loss.
              </p>
              <ol>
                <li>
                  A limit of two (2) students from each team may register for
                  this competition. Each student competes individually, so
                  collaboration is not permitted.{" "}
                </li>
                <li>
                  MIST ID and order of competition will be pre-assigned on a
                  random selection basis.{" "}
                </li>
                <li>
                  All competitors are to report to the competition room at the
                  same time, which will be designated in the competition
                  schedule.{" "}
                </li>
                <li>
                  Paper and pen/pencil will be provided, but students may feel
                  free to bring their own.{" "}
                </li>
                <li>
                  Out of three randomly selected topics presented at the time of
                  competition, students must choose one topic for their speech.
                  The topics will be relevant to the annual theme.
                </li>
                <li>
                  Topics are to be phrased in the form of a question. Topics
                  will not necessarily require reference materials, but will
                  require an understanding of contemporary issues affecting
                  Muslims domestically and internationally. Example topic: Does
                  a significant rift exist between African-American Muslims and
                  immigrant Muslim communities?{" "}
                </li>
                <li>
                  Depending on the number of students who sign up for this
                  event, the competition might be conducted in a series of
                  rounds, with only the top contestants advancing to subsequent
                  rounds.{" "}
                </li>
                <li>
                  Participants may, if they choose, use references (books, the
                  Quran, etc.) If any reference is used the participant MUST
                  cite the reference during his or her speech. NO references
                  will be provided by MIST. The use of reference material is
                  optional.{" "}
                </li>
                <li>
                  Fifteen minutes before the contest is to begin, the first
                  speaker shall draw three topics, choose one, and return the
                  others. The other contestants shall draw in like manner, in
                  their speaking order, at seven-minute intervals. A contestant
                  drawing a topic on which he has spoken previously in the
                  tournament shall return that topic and draw again.{" "}
                </li>
                <li>
                  After the contestant has chosen a topic, he shall withdraw to
                  the preparation area and have fifteen (15) minutes to plan
                  his/her speech without conferring or exchanging information
                  with anyone. No prepared notes or outlines will be allowed in
                  the preparation room. Reference to books, magazines and a
                  bibliographical file is permitted. Once a contestant has
                  chosen a topic, she/he may neither change from nor alter that
                  topic. No visual aids may be used in the delivery of the
                  speech.{" "}
                </li>
                <li>
                  A note card may be used in preliminary rounds of invitational
                  qualifying tournaments but is not permitted in any elimination
                  rounds of these tournaments.{" "}
                </li>
                <li>
                  Time limit is seven minutes maximum with thirty-second grace
                  period. Violation of this rule will result in the contestant
                  being ranked last in the round when visible time signals have
                  been given by the judge or by the authorized timekeeper.{" "}
                </li>
                <li>
                  Electronic device usage is not permitted during the
                  competition.
                </li>
              </ol>
            </div>
          </div>
        </Tab>
        <Tab eventKey="three" title="Detailed Ballot">
          <div>
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/extempspeakingballot.png")}
            />
          </div>
        </Tab>
      </Tabs>
    )
  },

  originalOratory: {
    title: "Original Oratory",
    tabs: (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>
              The art of extemporaneous speaking is not for the faint-hearted.
              Delivering a coherent, engaging, and moving speech, is easy
              enough, right? Now try doing that on the spot with only 15 minutes
              of preparation!
            </p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>Procedures:</h3>
              <p>
                The following is a list of rules and procedures for this
                category. Failure to fulfill these obligations and/or any
                violation of them may result in point loss.
              </p>
              <ol>
                <li>
                  A limit of two (2) students from each team may register for
                  this competition. Each student competes individually, so
                  collaboration is not permitted.{" "}
                </li>
                <li>
                  MIST ID and order of competition will be pre-assigned on a
                  random selection basis.{" "}
                </li>
                <li>
                  All competitors are to report to the competition room at the
                  same time, which will be designated in the competition
                  schedule.{" "}
                </li>
                <li>
                  The Orator must provide 3 COPIES of his/her script to be
                  turned in during the competition orientation. MIST will not
                  photocopy any scripts. Contestants must come prepared with
                  their copies. The competitor must compete with the script that
                  is submitted at that time.{" "}
                </li>
                <li>
                  Orations must be labeled with the MIST ID ONLY. The contestant
                  name must not appear anywhere on the work.{" "}
                </li>
                <li>
                  The orator must be truthful. Any non-factual reference,
                  especially a personal one, must be so identified.{" "}
                </li>
                <li>
                  The oration may not contain more than 150 words of quoted
                  material. Extensive paraphrasing from other sources is
                  prohibited. Orators caught plagiarizing or extensively
                  paraphrasing will be disqualified.{" "}
                </li>
                <li>
                  No visual aids may be used in the delivery of the speech.{" "}
                </li>
                <li>
                  An orator holding a manuscript or notes will be ranked last.{" "}
                </li>
                <li>
                  Time limit is seven minutes maximum with thirty-second grace
                  period. Violation of this rule will result in the contestant
                  being ranked last in the round when visible time signals have
                  been given by the judge or by the authorized timekeeper.{" "}
                </li>
                <li>
                  Electronic device usage is not permitted during the
                  competition
                </li>
              </ol>
            </div>
          </div>
        </Tab>
        <Tab eventKey="three" title="Detailed Ballot">
          <div>
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/originaloratoryballot.png")}
            />
          </div>
        </Tab>
        <Tab eventKey="four" title="Prompts">
          <div className="tabContent">
            <h4><a href="https://static1.squarespace.com/static/5610f7bce4b033aa91249ccd/t/5e1cfdb4db2c3e0f98890c23/1578958261899/Writing+Prompts.pdf" target="_blank" without rel="noopener noreferrer">Writing and Oratory Prompts</a></h4>
          </div>
        </Tab>
      </Tabs>
    )
  },

  poetry: {
    title: "Poetry",
    tabs: (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>
              Competitors must submit an original piece of poetry never before
              published within a 40 line limit. The piece must clearly relate
              back to the theme, but also be applicable to a general audience.
            </p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>Procedures:</h3>
              <p>
                The following is a list of rules and procedures for this
                category. Failure to fulfill these obligations and/or any
                violation of them may result in point loss.
              </p>
              <ol>
                <li>
                  A limit of two (2) students from each team may register for
                  this competition. Each student competes individually, so
                  collaboration is not permitted.
                </li>
                <li>
                  Poetry must clearly reflect upon any aspect of this year’s
                  theme.
                </li>
                <li>
                  Submissions must be labeled with the MIST ID ONLY. The
                  contestant name must not appear anywhere on the work.
                </li>
                <li>
                  Competitors may incorporate any style or genres of poetry
                  including rhymed, lyric, dramatic, narrative, or free verse.
                </li>
                <li>
                  All poems must have a title and must not exceed 40 lines in
                  length (excluding title).
                </li>
                <li>
                  Poems must be the original work of the entrant. Entries must
                  not have been published, self-published, published on a
                  website or broadcast before January 2016.
                </li>
                <li>
                  Handwritten entries cannot be accepted. Entries should be
                  typed in black ink only. Entries can be double or
                  single-spaced. Please do not staple printed entries.
                </li>
                <li>
                  A PDF copy of the poem must be emailed to your Regional
                  Competitions Headquarters <strong>two (2) weeks</strong>{" "}
                  before the Regional Tournament. Late submissions will result
                  in a point deduction on your final score. Your region may have
                  different deadlines for this competition. Contact your
                  Regional Competitions Headquarters for more information.
                </li>
                <li>
                  Poetry submissions must include a filled-out “Poetry Analyzing
                  Written Statement”.
                </li>
              </ol>
            </div>
          </div>
        </Tab>
        <Tab eventKey="three" title="Detailed Ballot">
          <div>
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/poetryballot.png")}
            />
          </div>
        </Tab>
      </Tabs>
    )
  },

  preparedEssay: {
    title: "Prepared Essay",
    tabs: (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>
              Have you been inspired by this year’s MIST theme? The prepared
              essay competition is perfect if you’re looking for an outlet. This
              is your chance to be creative and persuade us on the significance
              of your chosen topic. Share the passion!
            </p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>Procedures:</h3>
              <p>
                The following is a list of rules and procedures for this
                category. Failure to fulfill these obligations and/or any
                violation of them may result in point loss.
              </p>
              <ol>
                <li>
                  A limit of two (2) students from each team may register for
                  this competition. Each student competes individually, so
                  collaboration is not permitted.
                </li>
                <li>
                  The written essay must be typed or word-processed and
                  double-spaced. It must be on white, 8.5 X 11 paper and must be
                  stapled in the left corner.
                </li>
                <li>
                  The essay MUST have a cover page. The cover page must include
                  the title and MIST ID only. The contestant name must not
                  appear anywhere on the submission.
                </li>
                <li>
                  If outside sources are used, proper MLA citations as well as a
                  “Works Cited” page must be included in the essay.
                </li>
                <li>
                  A PDF copy of the written essay must be emailed to your
                  Regional Competitions Headquarters{" "}
                  <strong>two (2) weeks</strong> before the Regional Tournament.
                  Late submissions will result in a point deduction on your
                  final score. Your region may have different deadlines for this
                  competition. Contact your Regional Competitions Headquarters
                  for more information.
                </li>
                <li>
                  Some regions require three (3) copies of the written essay to
                  be taken to MIST and turned in by the competitor to the event
                  section leader at the competitor’s orientation. Contestants
                  are solely responsible for bringing their own copies. Contact
                  your Regional Competitions Headquarters for more information.
                </li>
                <li>
                  The written essay shall be a minimum of 1,500 words and a
                  maximum of 2,000 words. All abbreviations, acronyms (excluding
                  a, an, the) will be counted. Only the first 2,000 countable
                  words will be read.
                </li>
                <li>
                  Competitors will be judged according to the Prepared Essay
                  Ballot.
                </li>
              </ol>
            </div>
          </div>
        </Tab>
        <Tab eventKey="three" title="Detailed Ballot">
          <div>
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/preparedessayballot.png")}
            />
            ADD
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/preparedessayballot2.png")}
            />
          </div>
        </Tab>
        <Tab eventKey="four" title="Prompts">
          <div className="tabContent">
            <h4><a href="https://static1.squarespace.com/static/5610f7bce4b033aa91249ccd/t/5e1cfdb4db2c3e0f98890c23/1578958261899/Writing+Prompts.pdf" target="_blank" without rel="noopener noreferrer">Writing and Oratory Prompts</a></h4>
          </div>
        </Tab>
      </Tabs>
    )
  },

  shortFiction: {
    title: "Short Fiction",
    tabs: (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>
              Competitors are to submit an original work of fiction no longer
              than 10 pages that relates to the theme and can also be applied to
              a competitor-defined target audience. Illustrations are permitted
              for younger intended audiences
            </p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>Procedures:</h3>
              <p>
                The following is a list of rules and procedures for this
                category. Failure to fulfill these obligations and/or any
                violation of them may result in point loss.
              </p>
              <ol>
                <li>
                  A limit of two (2) students from each team may register for
                  this competition. Each student competes individually, so
                  collaboration is not permitted.
                </li>
                <li>
                  After registering, students are given a MIST ID Number, which
                  must be used to identify the student on the submission. Names
                  and other identifying information should not be written
                  anywhere on the final submission.
                </li>
                <li>
                  Competitors must identify a target audience on the title page.
                </li>
                <li>
                  All competitors are to submit a PDF version of their
                  submissions <strong>two (2) weeks</strong> prior&nbsp;to the
                  regional tournament. Late submissions will result in a point
                  deduction on your final score. Your region may have different
                  deadlines for this competition. Contact your Regional
                  Competitions Headquarters for more information.
                </li>
                <li>
                  All submissions must be a. Typed and double spaced b. Have a
                  cover page with the title, MIST ID, and intended audience age
                  group only. The contestant name or other identifying markers
                  must not appear anywhere on the submission. c. Typed on 8.5 X
                  11 inch paper, stapled in the left corner. d. No more than 10
                  pages, Times New Roman, 12 pt font.
                </li>
                <li>
                  If your region requires it, three copies of your story must
                  also be taken to the MIST tournament and turned in by the
                  competitor to the event section leader at the competitor’s
                  orientation.
                </li>
                <li>
                  Competitors will be judged according to the Short Fiction
                  Ballot.
                </li>
              </ol>
            </div>
          </div>
        </Tab>
        <Tab eventKey="three" title="Detailed Ballot">
          <div>
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/shortfictionballot.png")}
            />
            ADD
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/shortfictionballot2.png")}
            />
          </div>
        </Tab>
      </Tabs>
    )
  },

  spokenWord: {
    title: "Spoken Word",
    tabs: (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>
              If you’re more of the performer type of a poet, then spoken word
              is for you! Here’s your chance to convey your passion and
              originality, all while inspiring those around you.
            </p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>Procedures:</h3>
              <p>
                The following is a list of rules and procedures for this
                category. Failure to fulfill these obligations and/or any
                violation of them may result in point loss.
              </p>
              <ol>
                <li>
                  A limit of two (2) students from each team may register for
                  this competition. Each student competes individually, so
                  collaboration is not permitted.
                </li>
                <li>
                  The competitor must provide 3 COPIES of his/her piece to be
                  turned in during the competition orientation. MIST will not
                  photocopy any pieces. Contestants must come prepared with
                  their copies. The competitor must compete with the piece that
                  is submitted at that time.
                </li>
                <li>
                  Orations must be labeled with the MIST ID ONLY. The contestant
                  name must not appear anywhere on the work.
                </li>
                <li>
                  MIST ID and order of competition will be pre-assigned on a
                  random selection basis.
                </li>
                <li>
                  All competitors are to report to the competition room at the
                  same time, which will be designated in the competition
                  schedule.
                </li>
                <li>
                  Spoken word pieces will be judged based on the following
                  criteria: writing, performance, originality, sincerity, and
                  inspiration.
                </li>
                <li>
                  The performance should not exceed more than six (6) minutes.
                  Points will be deducted from the total score if the
                  performance exceeds the allotted time when visible time
                  signals have been given by the judge or by the authorized
                  timekeeper.
                </li>
                <li>No instruments can be used for the performance.</li>
              </ol>
            </div>
          </div>
        </Tab>
        <Tab eventKey="three" title="Detailed Ballot">
          <div>
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/spokenwordballot.png")}
            />
          </div>
        </Tab>
      </Tabs>
    )
  },

  debate: {
    title: "Debate",
    tabs: (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>
              Are you great at winning arguments? Do you have the poise of a
              public speaker and the convincing tone of a scholar? Join debate
              to compete with others who are just like you.
            </p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>Procedures:</h3>
              <p>
                The following is a list of rules and procedures for this
                category. Failure to fulfill these obligations and/or any
                violation of them may result in point loss.
              </p>
              <p>
                Parliamentary Debate is a Bracket Competition, which stipulates
                that it is an elimination competition. There are two rounds of
                Preliminaries, one Quarterfinal Round (top 8 teams), one
                Semifinal Round (top 4 teams) and one Final Round. [In the event
                that an odd number of teams are present at the very first
                preliminary round of the Parliamentary Debate Tournament,
                even-numbered pairs will be made, with a randomized odd team
                given an automatic advancement to the 2nd preliminary round.]
                All teams regardless of round results advance to Round 2.
              </p>
              <ol>
                <li>
                  This competition is a team effort. Only two (2) people may
                  register for this competition, and they must compete as a
                  team. No substitutions are allowed.{" "}
                </li>
                <li>
                  The moderator of a Parliamentary debate is called the
                  “Speaker” and all debaters must address themselves to “Mr. [or
                  Madam] Speaker” at the outset of their speeches. The
                  affirmative side is called the “Government” while the
                  “Opposition” represents the negative. Participants in the
                  debate and members of the audience are referred to
                  collectively as the “House” while the resolution is simply
                  termed the “Bill”. Debaters must always refer to one another
                  in the third person (for example, “the Prime Minister”,
                  “Leader of the Opposition”). They must not call other debaters
                  by their real names.{" "}
                </li>
                <li>
                  Members will speak only when called upon by the Speaker or
                  when allowed a ‘Point of Information’.
                </li>
                <li>
                  Only one debater may hold the floor of the House at a time.{" "}
                </li>
                <li>Debaters shall not use profane or offensive language. </li>
                <li>
                  During the final rebuttal speeches presented by the Leader of
                  the Opposition and the Prime Minister, debaters may not bring
                  up any new arguments or new evidence except in direct
                  refutation of material which has already been presented.{" "}
                </li>
                <li>
                  Competitors are allowed to bring in notes and outlines on the
                  Resolution and may refer to them at any point during the
                  debate. If needed, they will also be provided with scrap paper
                  for tracking their opponent’s arguments.
                </li>
                <li>
                  Competitors may not have access to blank debate ballots, nor
                  are they allowed to view ballots at any point during the
                  tournament. They are only allowed to access the Debater
                  Feedback page of the ballot upon conclusion of the tournament.{" "}
                </li>
                <li>
                  Parliamentary Debate topics are available at
                  www.getmistified.com
                </li>
              </ol>
            </div>
          </div>
        </Tab>
        <Tab eventKey="three" title="Prompts">
          <div className="tabContent">
            <h4><a href="https://static1.squarespace.com/static/5610f7bce4b033aa91249ccd/t/5e1f2e82408e262d959a6d61/1579101827552/Debate+Prompts.pdf" target="_blank" without rel="noopener noreferrer">Debate Prompts</a></h4>
          </div>
        </Tab>
      </Tabs>
    )
  },

  mathOlympics: {
    title: "Math Olympics",
    tabs: (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>
              Think you have what it takes for the olympics? Earn the title of
              true Math Olympian in this intense battle of numbers.
            </p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>Procedures:</h3>
              <p>
                The following is a list of rules and procedures for this
                category. Failure to fulfill these obligations and/or any
                violation of them may result in point loss.
              </p>
              <ol>
                <li>
                  A limit of two (2) students from each team may register for
                  this competition. Each student competes individually, so
                  collaboration is not permitted.
                </li>
                <li>
                  This competition will test students’ ability to think
                  critically and apply arithmetic to solve word problems.
                </li>
                <li>
                  No knowledge of Trigonometry or Calculus is required. An
                  understanding of only Geometry, Algebra I &amp; II and
                  Statistics &amp; Probability are sufficient for a student.
                </li>
                <li>A number 2 pencil is required.</li>
                <li>
                  Basic scientific calculators are allowed. Calculators with
                  graphing ability, such as the TI-83 or higher, are NOT
                  allowed.
                </li>
                <li>
                  Students will a get a set of problems in different rounds. The
                  student with the highest number of points moves on to the next
                  round.
                </li>
                <li>
                  A ballot is not provided for this competition, as scoring will
                  be based solely on test performance.
                </li>
              </ol>
              <h3>Layout:</h3>
              <p>
                The competition will be split up into three portions. The first
                portion will be the MIST Math Olympics Pretest, the second will
                be the Ciphering Round I, and the last portion will be the
                Ciphering Round II. If two or more competitors tie by the end of
                Ciphering Round II, then the competitors will go into the
                Ciphering Bonus Round. The Pretest will consist of 30 different
                questions ranging from Geometry and Algebra and will be one hour
                long. The two Ciphering Rounds will both contain 10 questions.
                The ciphering round questions are not only designed to be
                difficult but also put the competitor under time pressure by
                giving him/her only a couple minutes to answer each question.
              </p>
            </div>
          </div>
        </Tab>
      </Tabs>
    )
  },

  mistQuizBowl: {
    title: "MIST Quiz Bowl",
    tabs: (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>
              Does the sound of a quiz bowl buzzer and recalling knowledge in
              seconds give you an adrenaline rush? Are you the kid that knows a
              little bit of everything, from the geography of China, to the
              poetry of Rumi? Then MIST Quiz Bowl is the competition for you!
            </p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>Procedures:</h3>
              <p>
                The following is a list of rules and procedures for this
                category. Failure to fulfill these obligations and/or any
                violation of them may result in point loss.
              </p>
              <ol>
                <li>
                  Teams will consist of a minimum of two (2) members and a
                  maximum of six (6). At any given time, only a maximum of four
                  (4) students can play. A student can substitute for another
                  student ONLY between rounds.{" "}
                </li>
                <li>
                  If your team has six (6) students, there will be four (4)
                  starters and two (2) people on the bench. The more students
                  you have on your bowl team, the better it is for your team.
                  This way, each student can study one of the six scholastic
                  bowl categories.{" "}
                </li>
                <li>
                  Scores will not released to the competitors after the end of
                  the rounds.{" "}
                </li>
                <li>
                  A preliminary/quarterfinals/semifinal competition consists of
                  three rounds, with a total of 42 questions. A round consists
                  of 7 questions each from 2 categories, with a total of 6
                  categories covered by the end of competition. Questions for
                  the entire competition are printed in one packet, with each
                  round clearly marked. Appropriate point values are
                  pre-assigned.{" "}
                </li>
                <li>
                  Each team is allowed 6 members, with no more than 4 members
                  participating per round. Teams are allowed to shuffle their
                  players ONLY between rounds. Judges should announce which two
                  categories are being played in each round so that each team
                  may arrange itself accordingly.{" "}
                </li>
                <li>
                  The competition begins with the judges explaining the rules of
                  Round 1 to the competitors. Judges will tell the teams which
                  two categories are represented in Round 1. This round begins
                  with the judge reading the point value of the question first,
                  and then proceeding to read the question aloud. Only after the
                  judge has finished reading the ENTIRE question may the
                  competitors buzz in, which will be signaled by the judge
                  saying “Done”. The “Done” rule will only be applicable for
                  Round 1, and will be dropped for the rest of the rounds. If a
                  team buzzes in before the entire question is read, then they
                  will not have the opportunity to answer that question. It is
                  up to the judges’ discretion to select whether or not teams
                  have adhered to the done rule.The first team to buzz in after
                  the judge has said “Done” must begin to answer within 10
                  seconds and must finish answering within 30 seconds. This
                  means that you have a total of 30 seconds to provide a
                  complete answer. If judges suspect that you are stalling on a
                  question or are “buying time,” they have the right to penalize
                  you accordingly. A correct answer wins points and an incorrect
                  answer does not penalize the team. If an incorrect answer is
                  given, then the floor is reopened once the judge has said
                  “incorrect.” The question may now be answered by the next team
                  to buzz in for half of its original point value, with a 10
                  second limit given on the response. Only two teams can attempt
                  to answer any single question, after which, if both teams are
                  unsuccessful, the judge will give the answer and proceed to
                  the next question. The entire round consists of 14 questions
                  from two categories. Scores will not be released to the
                  competitors after the end of any round.{" "}
                </li>
                <li>
                  Round 2 follows with the next two categories of questions
                  which follow in the packet, which will be mentioned at the
                  beginning of the round. The rules for Round 2 are identical to
                  the rules in Round 1, except the “Done” rule will be dropped
                  for Rounds 2 and 3. Judges will read the point-value of the
                  question firstly, and then proceed to read the question to
                  completion. If a competitor believes that they can anticipate
                  the answer from the current question, they may buzz in early
                  and answer the question. If the student interrupts the
                  moderator to give an answer, the student should immediately
                  give the answer. The competitor must respond within the 10
                  second limit of buzzing in, and if incorrect, the question
                  will be opened to the floor for all other teams. For example,
                  if a team were to respond incorrectly to a 200 point question,
                  then 200 points are deducted from their running total. The
                  question point value would be halved to 100 and be open for
                  any other team to answer. If another team were to then respond
                  to this same question incorrectly, then that team is penalized
                  100 points.{" "}
                </li>
                <li>
                  Round 3 then follows in the same fashion as Round 2: incorrect
                  answers are to be penalized. Judges will mention which two
                  categories are being represented in Round 3.
                </li>
              </ol>
            </div>
          </div>
        </Tab>
        <Tab eventKey="three" title="Topics">
          <div className="tabContent">
            <h3 style={{"margin-bottom" : ".6em"}}>2020 MIST Quiz Bowl Topics</h3>
            <ol>
              <li><p><a target="_blank" rel="noopener noreferrer" href="https://static1.squarespace.com/static/5610f7bce4b033aa91249ccd/t/5e1cfdece3d43f03ae8f73b0/1578958320411/MIST+Bowl+Topic+I.pdf">Topic I: Predicting &amp; Preventing Islamophobia</a> with <a href="https://www.ispu.org/"><span>ISPU</span></a></p></li>
              <li><p ><a rel="noopener noreferrer" href="https://static1.squarespace.com/static/5610f7bce4b033aa91249ccd/t/5e1f2c1bf7c6f25343ba7023/1579101212743/MIST+Bowl+Topic+II.pdf" target="_blank">Topic II: The Firsts, the Forerunners of Islam</a> with <a href="https://yaqeeninstitute.org/"><span>Yaqeen Institute</span></a></p></li>
              <li><p ><a rel="noopener noreferrer" href="https://static1.squarespace.com/static/5610f7bce4b033aa91249ccd/t/5e1f692a8be38876070abf69/1579116844183/MIST+Bowl+Topic+III.pdf" target="_blank">Topic III: Black Muslim History Foundations</a> with <a href="https://yaqeeninstitute.org/"><span>Yaqeen Institute</span></a></p></li>
              <li><p ><a target="_blank" rel="noopener noreferrer" href="https://static1.squarespace.com/static/5610f7bce4b033aa91249ccd/t/5e1f2cdc87f6675d68995ed5/1579101413147/MIST+Bowl+Topic+IV.pdf">Topic IV: Muslim Youth &amp; Mental Health</a></p></li>
              <li><p ><a target="_blank" rel="noopener noreferrer" href="https://static1.squarespace.com/static/5610f7bce4b033aa91249ccd/t/5e1f2d6e24911f3b79a726f8/1579101551572/MIST+Bowl+Topic+V.pdf">Topic V: The Rise of the Far Right</a></p></li>
              <li><p>Topic VI: Current Events (Starting January 1st, 2020)</p></li>
            </ol>
          </div>
        </Tab>
      </Tabs>
    )
  },

  improv: {
    title: "Improv",
    tabs: (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>
              This competition is a fun way to display your creativity under
              spontaneous and timed circumstances. Each team must impress the
              judges in various hypothetical scenarios while under pressure to
              think on their feet and make the audience laugh!
            </p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>Procedures:</h3>
              <p>
                The following is a list of rules and procedures for this
                category. Failure to fulfill these obligations and/or any
                violation of them may result in point loss.
              </p>
              <ol>
                <li>
                  Each school may bring a brothers’ team (consisting of a
                  maximum of six brothers) as well as a sisters’ team
                  (consisting of a maximum of six sisters).{" "}
                </li>
                <li>
                  This competition is a team effort. Teams may consist of a
                  minimum of four (4) members and a maximum of six (6) members.{" "}
                </li>
                <li>
                  MIST ID and order of competition will be pre-assigned on a
                  random selection basis.{" "}
                </li>
                <li>
                  Competitors shall report at the appropriate time to the
                  designated place. Competitors shall be introduced to the
                  judges by their MIST IDs.{" "}
                </li>
                <li>
                  This competition consists of three (3) rounds with two (2)
                  games each. Each team will perform the first game, and once
                  all teams have performed, we will move on to the second game.
                  At the end of each game, judges will take a moment to write
                  their scores, and they will also be allowed 2 minutes per team
                  to ask questions if necessary. Then, the subsequent game will
                  begin.{" "}
                </li>
                <li>
                  All teams will have equal playing time, and they will all play
                  the same games.{" "}
                </li>
                <li>
                  This competition will be moderated by a host. The host will
                  make introductions, announce the rules and explain the game.
                  The rules for each game will differ. For examples of improv
                  games, see: http://improvencyclopedia. org. For example, the
                  host may say, “The game is called Questions, and the rule is
                  that players must only speak in questions. No sentences ending
                  with a period and no fragments – just questions. If the actor
                  says something that is not a question, or if they continually
                  repeat questions (“What did you say?” “What did you say
                  again?”), then a judge sounds the buzzer and the game is over
                  for the presenting team. The limits for this game are: Three
                  (3) players, 30 second prep time, two (2) minute
                  presentation.”{" "}
                </li>
                <li>
                  The host will then randomly pick a team to come up to the
                  stage. This team will be asked to pick one situation out of a
                  hat. For example, using the game described above, the
                  situation might be: “At the theme park,” and so the players
                  might act out a situation like this: a tourist asks, “How do I
                  get to the water ride?” and the ride operator replies, “First
                  time at Gatorland?” In response, the tourist says, “How can
                  you tell?”...and so on.{" "}
                </li>
                <li>
                  Teams must adhere to the time limit. 7 5 7 5 official MIST
                  rulebook 2016{" "}
                </li>
                <li>
                  If a team violates any of the game rules, a judge will sound
                  the buzzer. Alternatively, the buzzer will sound once time is
                  up. Once the buzzer has sounded, all players must stop their
                  performances, and exit the stage.{" "}
                </li>
                <li>
                  Once a team has presented, the next team will be called up to
                  the stage to play the same game, but with a different
                  situation.{" "}
                </li>
                <li>
                  Judging is based on improvisation, projection, articulation,
                  wit, intelligence, believability, body language and ability to
                  create your environment. Competitors will be judged according
                  to the Improv Ballot.
                </li>
                <li>
                  All competitors must adhere to Islamic principles and
                  appropriate language. Points will be deducted for
                  inappropriate actions or comments.&nbsp;
                </li>
              </ol>
            </div>
          </div>
        </Tab>
        <Tab eventKey="three" title="Detailed Ballot">
          <div>
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/improvballot.png")}
            />
          </div>
        </Tab>
      </Tabs>
    )
  },

  businessVenture: {
    title: "Business Venture",
    tabs: (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>
              This competition encourages you to think about the business world,
              become a philanthropist, and market your own products. Familiarize
              yourself with modern trends and market values, while developing
              your own fantastic product or service!
            </p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>Procedures:</h3>
              <p>
                The following is a list of rules and procedures for this
                category. Failure to fulfill these obligations and/or any
                violation of them may result in point loss.
              </p>
              <ol>
                <li>
                  The Business Venture competition is a team effort. A{" "}
                  <strong>
                    minimum of one (1)&nbsp;and a maximum of six (6) people
                  </strong>{" "}
                  can register for this competition. One submission per MIST
                  team.
                </li>
                <li>
                  Each participating team must prepare a business venture
                  project that reflects this year’s theme.
                </li>
                <li>
                  This competition consists of a) a written Business Venture
                  outline and b) a 7-10 minute presentation.
                </li>
                <li>
                  Each team must have a student leader, but all team members
                  should be involved in developing the written outline as well
                  as the presentation of the project.
                </li>
                <li>
                  Competitors must submit a proposal of their desired project{" "}
                  <strong>two (2) weeks</strong> prior to the date of the MIST
                  tournament for approval by your Regional Competitions
                  Headquarters. Your region may have different deadlines for
                  this competition. Contact them for more information.
                </li>
                <li>
                  Competitors must submit three (3) copies of a typed Business
                  Venture outline on the first day of the tournament.
                </li>
                <li>
                  Each team must present to a panel of judges for 7-10 minutes.
                  The presentation will be followed by a two (2) minute question
                  and answer session. The focus of the presentation will be to
                  pitch your idea with the goal of convincing judges to invest
                  in your venture.
                </li>
                <li>
                  The presentation should include supplemental materials, such
                  as product samples, pictures or other visual or video aids
                  (ex. PowerPoint, display board, television advertisement,
                  etc.).
                </li>
                <li>
                  Project ideas must be original and innovative. Submissions
                  must be the entrepreneur’s original idea - proof of
                  origination should be available if requested by the judges.
                  The business idea may be new or already implemented.
                </li>
                <li>
                  Judging criteria will be based on the official MIST ballot for
                  the Business Venture competition.
                </li>
                <li>
                  The primary criterion the judges will use in evaluating the
                  business venture will be: “Would I invest in this company?”
                </li>
              </ol>
              <h3>Outline Details:</h3>
              <p>
                The following is a list of requirements for the Business Venture
                Outline:
              </p>
              <ul>
                <li>Typed, double-spaced, Times New Roman 12 point font.</li>
                <li>
                  Cover page with the title of the project and MIST IDs only,
                  stapled on the left side.
                </li>
                <li>
                  The project outline should include visual aids, such as
                  pictures, charts and graphs. Do not include any physical
                  samples.
                </li>
                <li>
                  Executive Summary: A summary of your business venture project,
                  description of your project, market analysis, marketing plan
                  and financial plan. No more than a few paragraphs long.
                </li>
                <li>
                  Introduction: Describe your product/service in detail. What is
                  the business? How does it work and how does it make money?
                  What is the value of your product/service in the industry?
                  What is the industry like?
                </li>
                <li>
                  Market Analysis: Who are your customers (i.e. the targeted
                  market) and what are they like? Who are your competitors and
                  what are they doing? What are the market characteristics and
                  size? Is it a growing market? Is there a demand for your
                  product/service?
                </li>
                <li>
                  Marketing Plan: How can you reach this market? What is your
                  overall strategy? What competitive advantage(s) do you have
                  over your competitors? How will you test your product/service
                  against your targeted market? Ensure that you detail the
                  specifics of your marketing plan, including timelines, and
                  specific marketing strategies.
                </li>
                <li>
                  Financial Plan: What does your budget look like and how will
                  you monitor costs? How much startup funding would you need and
                  what would you do with the money? What is your profit
                  potential? What key financial considerations do you need to
                  take into account?
                </li>
                <li>
                  Project Viability: What are the biggest threats to your
                  business venture and how will you address them? Is the venture
                  stable and growth oriented or speculative and risky? What are
                  your risk factors and how will you address them?
                </li>
                <li>
                  Discussion: How will the project contribute to the Muslim
                  community and the community at large? How does it relate to
                  this&nbsp;year’s MIST theme? What are some ways you can expand
                  this project in the future?
                </li>
                <li>
                  Please note that the questions above are simply a guide. Teams
                  do not need to answer all of the questions, however all topics
                  (market analysis, marketing plan, financial plan...etc.) must
                  be addressed.&nbsp;
                </li>
              </ul>
              <h3>Checklist:</h3>
              <ol>
                <li>Business Venture Outline</li>
                <li>Supplemental materials for group presentation.</li>
                <li>
                  The submission should be clearly labeled with:
                  <ul>
                    <li>MIST IDs</li>
                    <li>Name of Competition</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </Tab>
        <Tab eventKey="three" title="Detailed Ballot">
          <div>
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/businessventureballot.png")}
            />
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/businessventureballot2.png")}
            />
          </div>
        </Tab>
      </Tabs>
    )
  },

  humanitarianService: {
    title: "Humanitarian Service",
    tabs: (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>
              A new competition that is a combination of Research Methods and
              Community Service; Show us your next great research idea by
              focusing on your community. How can you improve your community?
              Conduct a research project that demonstrates your intellectual and
              critical thinking capabilities. Come up with a creative and
              effective plan of action to serve a need.
            </p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>Procedures:</h3>
              <p>
                The following is a list of rules and procedures for this
                category. Failure to fulfill these obligations and/or any
                violation of them may result in point loss.
              </p>
              <ol>
                <li>
                  The Community Service competition is a team effort. A{" "}
                  <strong>minimum of&nbsp;</strong>
                  <strong>one (1)&nbsp;</strong>
                  <strong> and a maximum of six (6) people</strong> can register
                  for this competition. One submission per MIST team.
                </li>
                <li>
                  After registering, each student is given a MIST ID Number,
                  which must be used to identify each registered student on
                  their submissions. Names and other identifying information
                  should not be included anywhere on the final submissions.
                </li>
                <li>
                  Students are expected to email their regional headquarters
                  with their topic abstract at least{" "}
                  <strong>four (4) weeks</strong> in advance of the regional
                  tournament.
                </li>
                <li>
                  Students are required to submit three copies of a research
                  paper (1,500 - 2,000 words), and at least one visual aid, such
                  as a three-paneled display board (min. of 36” x 48”), videos
                  or slideshow presentations.
                </li>
                <li>
                  The paper should be typed with 12-point Times New Roman font,
                  double-spaced, with 1” margins, including a Title Page with an
                  abstract (max. 250 words), Table of Contents, and
                  Bibliography.
                </li>
                <li>
                  The content of both the presentation and the paper should
                  identify the problem (with proper supporting evidence),
                  relevant research of possible solutions, an explanation of the
                  chosen activity, and the results of the activity. If the
                  results are hard to measure by the time of submission,
                  potential impact may be presented, as long as all calculations
                  are properly justified.
                </li>
                <li>
                  At least three primary sources (non-fiction books, academic
                  papers, studies, scientific surveys/polls, etc.) must be cited
                  accurately, according to MLA format. News articles are not
                  considered primary sources, but may be helpful in finding more
                  appropriate primary sources. Students are free to conduct
                  their own primary research (in the form of surveys,
                  interviews, etc.) as long as the research is done based on
                  standards of scientific integrity, in which case the methods
                  and raw data should be adequately documented in an Appendix.
                </li>
                <li>
                  All competitors are to report to the competition room on time,
                  which will be designated in the competition schedule.
                </li>
                <li>
                  Students will be allotted 5-7 minutes to present their project
                  and approximately 3 minutes to field questions from the
                  judges.
                </li>
                <li>
                  Not all students are required to participate in speaking
                  during the presentation, but all registered students must be
                  present in order to answer questions about their participation
                  in the project.
                </li>
              </ol>
            </div>
          </div>
        </Tab>
        <Tab eventKey="three" title="Detailed Ballot">
          <div>
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/humanitarianserviceballot.png")}
            />
          </div>
        </Tab>
      </Tabs>
    )
  },

  nasheed: {
    title: "Nasheed/Rap",
    tabs: (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>
              Calling all aspiring singers! The Nasheed/Rap category is ideal
              for anyone who desires to write unique lyrics and use their
              singing skills to capture people’s attention about topics they are
              passionate about.
            </p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>Procedures:</h3>
              <p>
                The following is a list of rules and procedures for this
                category. Failure to fulfill these obligations and/or any
                violation of them may result in point loss.
              </p>
              <ol>
                <li>
                  The Nasheed/Rap competition is a team effort. A{" "}
                  <strong>
                    minimum of one (1) and a maximum of six (6) people
                  </strong>{" "}
                  can register for this competition. One submission per MIST
                  team. There will be a separate competition for brothers and
                  for sisters. Hence, each team must either be all male or all
                  female.
                </li>
                <li>
                  The performance should not exceed more than 5 minutes. Points
                  will be deducted from the total score if the performance
                  exceeds the allotted time.
                </li>
                <li>
                  The Nasheed/Rap competition is different from the Spoken Word
                  competition. Therefore, if a competitor registers for both
                  competitions, they may not use the same piece.
                </li>
                <li>
                  The only instrument that can be used for the performance is a
                  drum with an open end (daf). Full drum kits, floor drums, etc.
                  will not be allowed. Drums will not be supplied by MIST. Each
                  group is responsible for bringing their own drums. Other
                  methods used for rhythm may be explored such as vocal
                  percussion (beatboxing), etc. Groups cannot use digitally
                  enhanced sounds for their performance.
                </li>
                <li>
                  Groups must perform in front of an audience. No repeat
                  performances from previous years are allowed.
                </li>
                <li>
                  The competitors must submit three hard copies of their Nasheed
                  lyrics to the MIST Nasheed judges before they perform.
                </li>
                <li>
                  Judging Criteria will be based upon the official MIST
                  Nasheed/Rap Ballot
                </li>
              </ol>
            </div>
          </div>
        </Tab>
        <Tab eventKey="three" title="Detailed Ballot">
          <div>
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/nasheedballot.png")}
            />
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/nasheedballot2.png")}
            />
          </div>
        </Tab>
      </Tabs>
    )
  },

  scienceFair: {
    title: "Science Fair",
    tabs: (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>
              Are you an aspiring scientist? Do you love research? Then this
              competition is for you! Design, conduct and share the results of
              your own study to a panel of esteemed judges. Don’t forget to use
              the scientific method!
            </p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>Procedures:</h3>
              <p>
                The following is a list of rules and procedures for this
                category. Failure to fulfill these obligations and/or any
                violation of them may result in point loss.
              </p>
              <ol>
                <li>
                  The Science Fair competition is a team effort. A{" "}
                  <strong>
                    minimum of <strong>one (1)&nbsp;</strong>​ and a maximum of
                    six (6)
                  </strong>{" "}
                  people can register for this competition. One submission per
                  MIST team.
                </li>
                <li>
                  Competitors must submit an abstract (250 words or less) of
                  their desired science fair project <strong>two</strong>{" "}
                  <strong>(2) weeks</strong> prior to the date of the MIST
                  tournament to your Regional Competitions Headquarters.
                </li>
                <li>
                  The presentation must be a minimum of 7 minutes and not exceed
                  the maximum of 10 minutes.
                </li>
                <li>
                  &nbsp;Science Fair projects may not be used if they were
                  presented at previous MIST tournaments/other competitions.
                </li>
                <li>
                  Visual Aids are required along with the speech. Visual Aids
                  can vary anywhere from a PowerPoint presentation to posters,
                  pictures, props, and video clips.
                </li>
                <li>
                  Each team must turn in a typed research paper with all of
                  their findings:
                  <ul>
                    <li>
                      In order for the science fair project to be complete each
                      team must do their own active research. The active
                      research should be comprised of experiments, surveys,
                      questionnaires, etc. and the results must be compiled and
                      analyzed within the research paper. If surveys and
                      questionnaires have been conducted, they must be attached
                      to the research paper and all surveys/questionnaires must
                      be anonymous. The research paper will serve as a typed
                      report of all findings and conclusions.
                    </li>
                    <li>
                      A scientific research question should be presented at the
                      beginning of the paper. The question should then be
                      answered throughout the writing.
                    </li>
                    <li>
                      At least three sources must be cited accurately within the
                      paper and a works cited page must be provided separate
                      from the bibliography page that is required with the
                      speech and visual aids. (Research paper and all citations
                      must adhere toMLA format).
                    </li>
                    <li>
                      The paper must be five pages minimum and seven pages
                      maximum including works cited page (5-7 pages).
                    </li>
                  </ul>
                </li>
                <li>
                  This science fair project should consist of four components,
                  so the each team must prepare the following things:
                  <ul>
                    <li>Speech</li>
                    <li>Visual Aids</li>
                    <li>Bibliography</li>
                    <li>Research Paper (with active research included).</li>
                  </ul>
                </li>
                <li>
                  Judging Criteria will be based upon the official MIST Science
                  Fair Ballot.
                </li>
              </ol>
            </div>
          </div>
        </Tab>
        <Tab eventKey="three" title="Detailed Ballot">
          <div>
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/sciencefairballot.png")}
            />
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/sciencefairballot2.png")}
            />
          </div>
        </Tab>
      </Tabs>
    )
  },

  shortFilm: {
    title: "Short Film",
    tabs: (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>
              Showcase your editing, directing, and acting skills! Make a
              documentary, drama, comedy, thriller or animation to convey a
              particular message to the audience while relating your film to the
              MIST theme.
            </p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>Procedures:</h3>
              <p>
                The following is a list of rules and procedures for this
                category. Failure to fulfill these obligations and/or any
                violation of them may result in point loss.
              </p>
              <p>
                Films entered may be of any genre, fiction, documentary,
                animation, art or experimental. Film groups may contain between
                1 and 6 members working as a collaborative effort or as part of
                a school project. More than 6 people may work on the project,
                but only up to 6 can be registered for it. Each group will
                submit no more than one typed page explanation of the film. The
                Film group will be allowed 3 minutes to explain: how they made
                the film, what the purpose behind the film is, and what inspired
                them. The following is a list of rules and procedures for this
                category. Failure to fulfill these obligations and/or any
                violation of them may result in point loss.
              </p>
              <ol>
                <li>All videos must be in a 4:3 or 16:9 Aspect Ratio.</li>
                <li>
                  An unlisted YouTube link must be submitted to your Regional
                  Competitions Headquarters <strong>two (2) weeks</strong> prior
                  to the MIST competition. Competitors will be notified of
                  submission receipt via email only. Your region may have
                  different deadlines for this competition. Contact your
                  Regional Competitions Headquarters for more information.
                </li>
                <li>
                  The title and the competitors’ MIST ID must be clearly
                  identified on your submission.
                </li>
                <li>
                  A complete list of Crew Members, Cast, and Equipment must be
                  submitted with the short film.
                </li>
                <li>
                  Competitors MUST include the Short Film Entry Form.
                  Contestants who do not turn in this form with their submission
                  will lose points towards their final competition score.
                </li>
                <li>
                  A typewritten statement of the short film, no more than one
                  (1) page (500 words max.) must be included with the film. The
                  explanation will include what the short is about and what
                  inspired the contestant to make it, as well as specific
                  answers to the interview questions (Section D: Application of
                  Theme). Please note that the written statement is an integral
                  component of qualifying for an interview in the top ten.
                </li>
                <li>All films MUST relate to this year’s theme.</li>
                <li>
                  Films may NOT exceed 7 minutes in length (excluding opening
                  and closing credits).
                </li>
                <li>Films must NOT contain inappropriate audio content.</li>
                <li>
                  Please note that if there are more than 15 entries for this
                  competition, only the top 10 entries (based on short film and
                  written statement) will be interviewed. In this case, a
                  preliminary judging round will take place ahead of the
                  tournament weekend, and all entries will be judged according
                  to the Short Film Ballot. The top 10 that advance will have a
                  five (5) to ten (10) minute interview with the Judges’ Panel.
                </li>
                <li>
                  Entries MUST be original works that has not been previously
                  distributed/ awarded/recognized or publicly exhibited as of
                  the submission date. Entrant must be the creator of the
                  submitted work, holding the full copyright ownership therein.
                </li>
                <li>
                  Judging Criteria will be based upon the official MIST National
                  Short Film ballot.
                </li>
              </ol>
              <h3>Checklist:</h3>
              <ul>
                <li>
                  An unlisted YouTube link of your short film sent 2 weeks prior
                  to the date of the regional tournament to your Regional
                  Competition Headquarters.
                </li>
                <li>Short Film Entry Form</li>
                <li>
                  A 500 word maximum written statement about the short film and
                  that answers questions under Section D: Application of Theme
                </li>
                <li>
                  A complete list of cast, crew members and equipment used
                </li>
                <li>The submission should be clearly labeled with:</li>
                <ul>
                  <li>MIST IDs</li>
                  <li>Name of Competition</li>
                </ul>
              </ul>
            </div>
          </div>
        </Tab>
        <Tab eventKey="three" title="Detailed Ballot">
          <div>
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/shortfilmballot.png")}
            />
          </div>
        </Tab>
      </Tabs>
    )
  },

  socialMedia: {
    title: "Social Media",
    tabs: (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>
              Have media platforms such as Facebook or Twitter taken over your
              life? Have you started either reading or seeing more blogs? Take
              your online social habits to the next level by creating a social
              media presence for your MIST team!
            </p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>Procedures:</h3>
              <p>
                The following is a list of rules and procedures for this
                category. Failure to fulfill these obligations and/or any
                violation of them may result in point loss.
              </p>
              <p>
                The Social Media competition is a team effort. A minimum of one
                (1) ​ and a maximum of six (6) people can register for this
                competition. One submission per MIST team.
              </p>
              <ol>
                <li>
                  MIST ID and order of competition will be pre-assigned on a
                  random selection basis.
                </li>
                <li>
                  Competitors shall report at the appropriate time and place
                  designated. Competitors shall be introduced to the judges by
                  their MIST IDs.
                </li>
                <li>
                  Only one submission is allowed per school. Hence, if two
                  students register from the same school, they must work as a
                  team.
                </li>
                <li>
                  The team name may appear on your blog and social profiles.
                </li>
                <li>
                  The competitor must create a blog for their MSA or MIST team.
                  This blog should include blog posts that relate to the MIST
                  theme, with five posts minimum. These posts can come in a
                  variety of forms – text, images, video, etc. However, two
                  posts must be written pieces, with one being a pure news
                  story. The blog content should then be shared through a social
                  media platform of choice, such as Facebook or Twitter.
                </li>
                <li>
                  The social media platform selected should be updated based on
                  the competitor’s assessment of what publishing frequency is
                  appropriate for that chosen platform. The content shared on
                  the chosen social platform can be about more than just posts
                  from the blog (although the updates should include blog
                  posts). These updates can come in a variety of forms – text,
                  images, video, etc.
                </li>
                <li>
                  Competitors are encouraged to use content management systems
                  such as WordPress or Blogger rather than making the site from
                  scratch. You are welcome to use pre-made templates as this
                  competition is about the overall execution of the project and
                  not coding work behind it.
                </li>
                <li>
                  Contestants must email their submission
                  <strong> two weeks</strong> prior to the tournament. All
                  submissions will be viewed on a computer.
                </li>
                <li>
                  Students are responsible for asking questions about rules that
                  they don’t understand before the competition and not during
                  it. No excuses will be accepted during the competition or
                  tournament weekend.
                </li>
                <li>
                  A typed explanation of the website and its content, no more
                  than three (3) pages (1000 words maximum double spaced and
                  12-point font) must be included with the submission. The
                  explanation should detail the blog and social platform’s
                  content, what inspired the participant to choose their
                  particular blog or social media platforms, what content
                  strategy was employed, how each team member contributed to the
                  project, and any other pertinent information related to the
                  creation of the social media accounts. Judging will be based
                  on the explanation provided in the interview and the site
                  itself. The interview will be no longer than 5 minutes.
                </li>
                <li>
                  Blogs must have the following items somewhere on the site:
                  <ul>
                    <li>Information about the MIST team</li>
                    <li>&nbsp;Prayer times</li>
                    <li>Names and contact information</li>
                    <li>Information about MIST meetings or events</li>
                    <li>
                      A link to MIST’s National website
                      (http://www.getmistified.com)
                    </li>
                    <li>A link to your MIST Regional’s website</li>
                    <li>Meeting time/place for the next MIST meeting</li>
                    <li>Information on how to join the MIST team</li>
                    <li>Team’s Mission statement</li>
                    <li>
                      At least one Islamic article that adolescents can relate
                      to.
                    </li>
                    <li>
                      Any other information or additional features such as video
                      clips, search facility, animation…etc.
                    </li>
                  </ul>
                </li>
                <li>
                  Competitors will be judged according to the Social Media
                  Ballot
                </li>
              </ol>
            </div>
          </div>
        </Tab>
        <Tab eventKey="three" title="Detailed Ballot">
          <div>
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/socialmediaballot.png")}
            />
            <Image
              alt="Ballot picture"
              src={require("./ballotPictures/socialmediaballot2.png")}
            />
          </div>
        </Tab>
      </Tabs>
    )
  },

  basketball: {
    title: "Basketball",
    tabs: (
      <Tabs className="tabText" defaultActiveKey="overview" id="tab">
        <Tab eventKey="one" title="Overview">
          <div className="tabContent">
            <p>
              Standard high school 5 v. 5, with a maximum of 10 players per team
              allowed.
            </p>
            <p>1 Sisters' team & 1 Brothers' team allowed per school.</p>
          </div>
        </Tab>
        <Tab eventKey="two" title="Rules and Regulations">
          <div className="tabContent">
            <div>
              <h3>Procedures:</h3>
              <p>
                MIST follows standard high school basketball rules which are
                readily available online and are commonly known among those who
                play basketball. Standard rules for offense (e.g. traveling,
                double dribbling, charging, etc.) and defense (e.g.
                goal-tending, blocking, pushing, etc.) will apply. If one is
                unaware of these basics, some due diligence in education through
                tutorials and familiarity with the game is required before
                taking on the responsibility of running a tournament.
              </p>
              <p>
                A maximum of ten (10) people can register for the Brothers’
                Basketball team, and a maximum of ten (10) can register for the
                Sisters’ Basketball team. Basketball requires a minimum of five
                (5) team members. If your school cannot register at least 5 boys
                or 5 girls for a team, your school may collaborate with another
                school and compete together for this competition. All points and
                awards for this competition would be shared equally between
                collaborating schools (termed “coalitions”). Please check with
                your Regional Competitions Headquarters for more information.
              </p>
              <p>
                Only one Brothers’ team and one Sisters’ team are allowed for
                each school.
              </p>
              <p>
                In addition to the regulations of high school basketball, the
                following rules of MIST also apply:
              </p>
              <ol>
                <li>
                  All high school rules will govern play with exception of the
                  following:{" "}
                </li>
                <li>
                  All MIST rules and regulations, including dress code, apply.{" "}
                </li>
                <li>
                  Failure to participate in MIST competitions and/or workshops
                  will result in immediate disqualification.{" "}
                </li>
                <li>
                  The game will consist of two 15-minute halves. If the score is
                  tied after regulation, except for playoffs schedule, no
                  overtime will be given. It will be recorded as a tie game.{" "}
                </li>
                <li>
                  If the score is tied after regulation for a playoff game, a
                  series of 5-minute overtime periods will be played until a
                  winner is determined after the end of such a period.{" "}
                </li>
                <li>
                  The clock will run non-stop until the final two minutes of
                  each half. During the last two minutes, the clock will stop on
                  all whistles. An official or team time-out will stop the clock
                  during the first 18 minutes.{" "}
                </li>
                <li>
                  Each team may be required to have one person sitting at the
                  scorer’s table to operate the clock and to keep score. A
                  forfeit may result if a team does not comply with this rule.{" "}
                </li>
                <li>
                  Each team MUST have matching, numbered jerseys for every
                  player. Legal numbers are expanded to include 0-99. A
                  non-numbered jersey will not be allowed as a “00”. Your team
                  captain will specify your team’s color at the time of
                  registration. The colors of other teams in your league will
                  also be listed. There will be no “Shirts vs. Skins” or
                  taped-on numbers. Your team will forfeit if it fails to have
                  the proper jersey at game time.{" "}
                </li>
                <li>
                  No basket may be scored on a player control (offensive) foul,
                  regardless of when the ball is released.{" "}
                </li>
                <li>
                  Time-outs will last one minute and half-time will last two
                  minutes. Teams have three (3) time-outs per game.{" "}
                </li>
                <li>
                  Two technical fouls on a player or coach will result in an
                  automatic ejection from the game. The ejected player must also
                  leave the playing area.{" "}
                </li>
                <li>
                  Only one coach and assistant coach per team are permitted on
                  the team bench.{" "}
                </li>
                <li>
                  Teams will enter the bonus (one and one) on the 7th team foul.
                  On a team’s 10th foul, all fouls will result in two free
                  throws. Any player fouled on a 3-point attempt who does not
                  make the basket will be allowed to shoot three free throws.{" "}
                </li>
                <li>
                  There will be a 35-point mercy rule after 10 minutes in the
                  second half. In the judgment of the officials and supervisor,
                  if a team is dragging or allows the team behind to make up
                  baskets so the game will not be stopped, the game will be
                  stopped immediately.
                </li>
                <li>
                  Substitutes must report to the score table and beckoned in by
                  the officials. Illegal substitutions will result in a
                  technical foul.{" "}
                </li>
                <li>
                  Slapping the backboard is not a technical in itself, but
                  intentionally hitting the backboard hard enough to alter the
                  flight of the ball will result in a technical.{" "}
                </li>
                <li>
                  Unsportsmanlike conduct will not be tolerated. The following
                  behaviors will result in a technical foul and the possibility
                  of a game suspension:
                  <ol>
                    <li>
                      Cursing at the officials, supervisors, or opposing players
                    </li>
                    <li>
                      Insulting the officials, supervisors, or opposing players.
                    </li>
                    <li>Participating in a fight (AUTOMATIC EJECTION).</li>
                    <li>
                      COther unsportsmanlike acts will also earn a technical
                      foul. All unsportsmanlike fouls result in two free throws
                      and possession of the ball, regardless of whether the foul
                      is on a player or the bench.
                    </li>
                  </ol>
                </li>
                <li>
                  The top three regional teams are eligible to compete at the
                  National tournament. All competitors must have registered and
                  competed at regionals in order to be eligible to compete at
                  Nationals.
                </li>
              </ol>
            </div>
          </div>
        </Tab>
      </Tabs>
    )
  }
};

export { competitions };
