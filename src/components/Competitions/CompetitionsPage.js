import React from "react";
import { Col, Row } from "react-bootstrap";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import { Card, Container, Image } from "react-bootstrap";
import "./CompetitionsPage.css";

class CompetitionsPage extends React.Component {
  render() {
    const teamMembers = {
      Category_ICOLON_Knowledge_and_Quran: [
        {
          name: "Knowledge Tests",
          description:
            "Attention all bookworms and knowledge enthusiasts! Get ready to showcase your literary prowess in the upcoming Knowledge Test Competition! All tests will be equal in difficulty. You will be able to select from one of 4 books found on the “Rulebook” page.",
          imgSrc: "",
        },
        {
          name: "Quran Recitation",
          description:
            "Put your Quran Recitation & Tajweed skills to the test! This is only a recitation and tajweed competition, not a memorization one. Judges will select three passages from the Quran for you to recite. Competitors will also show their basic knowledge as they identify the tajweed rules at the end.",
          imgSrc: "",
        },
        {
          name: "Quran Memorization",
          description:
            "Prepare to flex your memory muscles as you prepare for the Quran Memorization competition! There are three separate levels to select from, so whether you are a beginner or a seasoned memorizer, there is a competition for you! Competitors will be tested on their memorization and tajweed based on three different passages from the Quran from the level they entered!",
          imgSrc: "",
        },
      ],
      Category_IICOLON_Arts: [
        {
          name: "2D Art",
          description:
            "This competition will be for students who excel in 2D art (like painting and drawing) who want to showcase their capabilities. They will be judged through three facets: the artwork (+ process pictures), the written statement, and the interview.",
          imgSrc: "",
        },
        {
          name: "3D Art",
          description:
            "3D Art competition is to spark the interests of the creative minds in our community who specifically dabble in physical three-dimensional mediums. This would include anything that conforms to the 3D world. They will be judged through three facets: the artwork, the written statement, and the interview.",
          imgSrc: "",
        },
        {
          name: "Digital Art",
          description:
            "The digital art competition takes our contest online, creating any sort of digital masterpiece to be presented to the judges. Virtual artwork should be contained in a singular image (so unfortunately videos, and animations aren't allowed). They will be judged through three facets: the artwork (+ process pictures), the written statement, and the interview.",
          imgSrc: "",
        },
        {
          name: "Fashion Design",
          description:
            "Fashion design gives all of the fashion forward high schoolers a chance to design and create a whole line of clothes. Whether it is 50/50 between men and women’s clothing, or 100% for one gender, the participant will be expected to create a line of 6 outfits and showcase it to the judges through a portfolio. Contestants will be judged through the portfolio and an interview.",
        },
        {
          name: "Photography",
          description:
            "For students with an eye for the best still, they will have a chance to showcase their favorite photos. Pick from your existing portfolio, or take some new snaps, and they can submit a portfolio to this portion of the arts category. 3 to 5 photos from each participant is required and they will be judged by their portfolio, written statement, and interview.",
          imgSrc: "",
        },
      ],
      Category_IIICOLON_Writing_AND_Oratory: [
        {
          name: "Extemporaneous Essay",
          description:
            "This competition allows for competitors to write about random, pre-chosen topics for the duration of an hour. Using their creativity, the competitors will compete based on the quality of their work and their application of MIST's 2024 theme.",
          imgSrc: "",
        },
        {
          name: "Prepared Essay",
          description:
            "Competitors draft an essay connected to the MIST 2024 theme.",
          imgSrc: "",
        },
        {
          name: "Extemporaneous Speaking",
          description:
            "This competition allows competitors to write about pre-chosen topics for a duration of 15 minutes. Then, they will have 7 minutes to present their topic engagingly and coherently.",
          imgSrc: "",
        },
        {
          name: "Original Oratory",
          description:
            "Competitors orate a memorized speech connected to the MIST 2024 theme. Competitors will be given 7 minutes for their piece.",
          imgSrc: "",
        },
        {
          name: "Poetry",
          description:
            "Competitors create a piece within a 40 line limit that gives perspective on the MIST 2024 theme.",
          imgSrc: "",
        },

        {
          name: "Short Fiction",
          description:
            "Competitors write a 10 paged fictional short story in relation to the MIST 2024 theme.",
          imgSrc: "",
        },
        {
          name: "Spoken Word",
          description:
            "Competitors use their words craftily in addressing the MIST 2024 theme for 6 minutes.",
          imgSrc: "",
        },
      ],
      Category_IVCOLON_Brackets: [
        {
          name: "Debate",
          description:
            "Teams of 2 competitors (although competitors do have the option of competing solo) will follow the parliamentary debate model; teams must debate one of the five topics pre-selected by MIST. There are a total of four rounds (two preliminaries, one quarterfinal, one semifinal, and one final) and competitors will be graded on the integrity of their arguments, their ability to deliver their information in a clear manner, and follow the competition structure.",
          imgSrc: "",
        },
        {
          name: "Improv",
          description:
            "This competition is based on an improvised performance where students have to act spontaneously and unscripted to the prompts provided by the judges. This is a gender-segregated competition where students are judged based on their acting/comedic skill, skit structure, and teamwork. This competition has three rounds, with two competitions/games per round.",
          imgSrc: "",
        },
        {
          name: "Math Olympics",
          description:
            "An individual competition with at most two students from each school/team. This is an elimination competition that will consist of three portions, four if there is a tie. The competition will start off with a pretest and then go into two or three Ciphering Rounds.",
          imgSrc: "",
        },
        {
          name: "MIST Quiz Bowl",
          description:
            "A team elimination competition. There are four main rounds in which all of the questions asked will be from the six MIST Quiz Bowl topics, using the material provided to competitors prior to the competition.",
          imgSrc: "",
        },
      ],
      Category_VCOLON_Group_Projects: [
        {
          name: "Business Venture",
          description:
            "The Business Venture competition is for competitors to come up with original and innovative (new or already implemented) business ideas. Each student will be interviewed on competition day about their project.",
          imgSrc: "",
        },
        {
          name: "Humanitarian Service",
          description:
            "Competitors create and implement a campaign plan as well as a crowdfunding site to raise funds, support, and awareness for a Non profit organization project. Following up to their service they will be presenting their findings about what they learned during this experience.",
          imgSrc: "",
        },
        {
          name: "Nasheed/Rap",
          description:
            "Brothers and sisters will create a Nasheed or Rap regarding this year's MIST theme. This group project will open up their creative and performance skills within the presentations.",
          imgSrc: "",
        },
        {
          name: "Science Fair",
          description:
            "The Science Fair competition allows students to explore a topic of their choice. Teams will test their various observations and theories created, and why it is important to them.",
          imgSrc: "",
        },
        {
          name: "Short Film",
          description:
            "Short film creations this year's MIST theme. This group project will open up their creativity to provide visuals and their inspiration to their work.",
          imgSrc: "",
        },
        {
          name: "Social Media",
          description:
            "Creating a social media platform relating to this year's MIST theme, and explaining what inspired them to make this page.  This Group project includes engagement/explanation with peers about the importance of teamwork.",
          imgSrc: "",
        },
      ],
      Category_VICOLON_Sports: [
        {
          name: "Basketball",
          description:
            "Compete in teams of 5 or more competitors until you get to the finals; coalition teams are available for those with less than 5 competitors per school, and subs in any team are allowed. In order to qualify, you must be registered in another competition during tournament weekend—in other words, you cannot be registered in sports alone. There will be a male and a female competition.",
          imgSrc: "",
        },
      ],
    };

    const getColumnSize = (competitions) => {  // To a future webmaster, I chose not to implement this because it honestly looked great without me dynamically setting it for this page :)
      return
    };

    return (
      <div className="competitions-page">
        <Header />
        <PageTitle pageTitle="Competitions" />
        <Container>
          {Object.entries(teamMembers).map(
            ([competition_group, competitions], index) => (
              <div key={index}>
                <h2 className="competition-group-title">
                  {competition_group
                    .replace(/_/g, " ")
                    .replace(/COLON/g, ":")
                    .replace(/AND/g, "&")}
                </h2>
                <Row className="competition-row">
                  {competitions.map((competition, idx) => (
                    <Col
                      md={getColumnSize(competitions, idx)}
                      key={idx}
                      className="mb-4 competition-col"
                    >
                      <Card className="text-center competition-card">
                        <Card.Body>
                          <Image
                            src={competition.imgSrc}
                            className="profile-image"
                          />
                          <Card.Title>{competition.name}</Card.Title>
                          <Card.Text>{competition.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            )
          )}
        </Container>
      </div>
    );
  }
}

export { CompetitionsPage };

// Category VI: Sports
// Basketball: Compete in teams of 5 or more competitors until you get to the finals. Coalition teams are available for those with less than 5 competitors per school. Subs in any team are allowed.
