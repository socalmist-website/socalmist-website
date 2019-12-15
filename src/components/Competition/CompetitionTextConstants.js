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
          <div className="tabContent">2020 books to be added</div>
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
            <Image alt="Ballot picture" src={require("./ballotPictures/2dartballot.png")} />
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
            <Image alt="Ballot picture" src={require("./ballotPictures/3dartballot.png")} />
            <Image alt="Ballot picture" src={require("./ballotPictures/3dartballot2.png")} />
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
            <Image alt="Ballot picture" src={require("./ballotPictures/fashiondesignballot.png")} />
            <Image alt="Ballot picture" src={require("./ballotPictures/fashiondesignballot2.png")} />
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
            <Image alt="Ballot picture" src={require("./ballotPictures/graphicdesignballot.png")} />
            <Image alt="Ballot picture" src={require("./ballotPictures/graphicdesignballot2.png")} />
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
            <Image alt="Ballot picture" src={require("./ballotPictures/photographyballot.png")} />
            <Image alt="Ballot picture" src={require("./ballotPictures/photographyballot2.png")} />
          </div>
        </Tab>
      </Tabs>
    )
  },

  extemporaneousEssay: {
    title: "Extemporaneous Essay",
    tabs: <h3 style={{ "text-align": "center" }}>Details coming soon!</h3>
  },

  extemporaneousSpeaking: {
    title: "Extemporaneous Speaking",
    tabs: <h3 style={{ "text-align": "center" }}>Details coming soon!</h3>
  },

  originalOratory: {
    title: "Original Oratory",
    tabs: <h3 style={{ "text-align": "center" }}>Details coming soon!</h3>
  },

  poetry: {
    title: "Poetry",
    tabs: <h3 style={{ "text-align": "center" }}>Details coming soon!</h3>
  },

  preparedEssay: {
    title: "Prepared Essay",
    tabs: <h3 style={{ "text-align": "center" }}>Details coming soon!</h3>
  },

  shortFiction: {
    title: "Short Fiction",
    tabs: <h3 style={{ "text-align": "center" }}>Details coming soon!</h3>
  },

  spokenWord: {
    title: "Spoken Word",
    tabs: <h3 style={{ "text-align": "center" }}>Details coming soon!</h3>
  },

  debate: {
    title: "Debate",
    tabs: <h3 style={{ "text-align": "center" }}>Details coming soon!</h3>
  },

  mathOlympics: {
    title: "Math Olympics",
    tabs: <h3 style={{ "text-align": "center" }}>Details coming soon!</h3>
  },

  mistQuizBowl: {
    title: "MIST Quiz Bowl",
    tabs: <h3 style={{ "text-align": "center" }}>Details coming soon!</h3>
  },

  improv: {
    title: "Improv",
    tabs: <h3 style={{ "text-align": "center" }}>Details coming soon!</h3>
  },

  businessVenture: {
    title: "Business Venture",
    tabs: <h3 style={{ "text-align": "center" }}>Details coming soon!</h3>
  },

  humanitarianService: {
    title: "Humanitarian Service",
    tabs: <h3 style={{ "text-align": "center" }}>Details coming soon!</h3>
  },

  nasheed: {
    title: "Nasheed/Rap",
    tabs: <h3 style={{ "text-align": "center" }}>Details coming soon!</h3>
  },

  scienceFair: {
    title: "Science Fair",
    tabs: <h3 style={{ "text-align": "center" }}>Details coming soon!</h3>
  },

  shortFilm: {
    title: "Short Film",
    tabs: <h3 style={{ "text-align": "center" }}>Details coming soon!</h3>
  },

  socialMedia: {
    title: "Social Media",
    tabs: <h3 style={{ "text-align": "center" }}>Details coming soon!</h3>
  },

  basketball: {
    title: "Basketball",
    tabs: <h3 style={{ "text-align": "center" }}>Details coming soon!</h3>
  }
};

export { competitions };
