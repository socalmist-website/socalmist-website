import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { Header } from "../Header/Navbar";
import { PageTitle } from "../Header/PageTitle";
import "./BoardPage.css";

class BoardPage extends React.Component {
  render() {
    const MeraalAbutaha = require("../../public/BoardImages/MeraalAbutaha.jpeg");
    const RabaaKhan = require("../../public/BoardImages/RabaaKhan.jpg");
    const AyahHalabi = require("../../public/BoardImages/AyahHalabi.jpeg");
    const YousefKhan = require("../../public/BoardImages/YousefKhan.jpg");
    const RabiaAhmed = require("../../public/BoardImages/RabiaAhmed.png");
    const BouchraAlioua = require("../../public/BoardImages/BouchraAlioua.jpeg");
    const SawsanDibseh = require("../../public/BoardImages/SawsanDibseh.jpg");
    const YazanMoubayed = require("../../public/BoardImages/YazanMoubayed.JPG");
    const BoushraElHabbal = require("../../public/BoardImages/BoushraElHabbal.jpg");
    const AlinaRazi = require("../../public/BoardImages/AlinaRazi.jpeg");
    const LeenAlmahdi = require("../../public/BoardImages/LeenAlmahdi.JPG");
    const NoorBashir = require("../../public/BoardImages/NoorBashir.jpg");
    const SaaraHashim = require("../../public/BoardImages/SaaraHashim.jpeg");
    const AbdullahRafiq = require("../../public/BoardImages/AbdullahRafiq.jpg");
    const SamirYousef = require("../../public/BoardImages/SamirYousef.jpeg");
    const AraamAbutaha = require("../../public/BoardImages/AraamAbutaha.jpeg");
    const ImaadRana = require("../../public/BoardImages/ImaadRana.jpeg");
    const LujainAlmahdi = require("../../public/BoardImages/LujainAlmahdi.jpeg");
    const MaisamBarakat = require("../../public/BoardImages/MaisamBarakat.jpg");
    const MunaNaseer = require("../../public/BoardImages/MunaNaseer.png");
    const SummerKurdi = require("../../public/BoardImages/SummerKurdi.jpeg");
    const YosufMayar = require("../../public/BoardImages/YosufMayar.jpeg");

    const teamMembers = {
      Admin: [
        {
          name: "Meraal Abutaha",
          position: "Regional Director",
          imgSrc: MeraalAbutaha,
        },
      ],
      Marketing: [
        { name: "Rabaa Khan", position: "Chair", imgSrc: RabaaKhan },
        {
          name: "Yousef Khan",
          position: "Webmaster",
          imgSrc: YousefKhan,
        },
        {
          name: "Ayah Halabi",
          position: "Social Media & Communications",
          imgSrc: AyahHalabi,
        },
      ],
      Finance: [
        { name: "Rabia Ahmed", position: "Chair", imgSrc: RabiaAhmed },
        {
          name: "Bouchra Alioua",
          position: "Sponsorship Coordinator",
          imgSrc: BouchraAlioua,
        },
      ],
      Logistics: [
        { name: "Sawsan Dibseh", position: "Chair", imgSrc: SawsanDibseh },
        {
          name: "Yazan Moubayed",
          position: "Food Coordinator",
          imgSrc: YazanMoubayed,
        },
        {
          name: "Boushra El Habbal",
          position: "Venue Coordinator",
          imgSrc: BoushraElHabbal,
        },
        {
          name: "Alina Razi",
          position: "Volunteers Coordinator",
          imgSrc: AlinaRazi,
        },
      ],
      Program: [
        {
          name: "Leen Almahdi",
          position: "Chair",
          imgSrc: LeenAlmahdi,
        },
        {
          name: "Noor Bashir",
          position: "MISTChats Coordinator",
          imgSrc: NoorBashir,
        },
      ],
      Outreach_and_Registration: [
        { name: "Saara Hashim", position: "Chair", imgSrc: SaaraHashim },
        {
          name: "Abdullah Rafiq",
          position: "O/R Coordinator",
          imgSrc: AbdullahRafiq,
        },
        {
          name: "Samir Yousef",
          position: "O/R Coordinator",
          imgSrc: SamirYousef,
        },
        {
          name: "Yousef Khan",
          position: "O/R Coordinator",
          imgSrc: YousefKhan,
        },
      ],
      Competitions: [
        { name: "Araam Abutaha", position: "Chair", imgSrc: AraamAbutaha },
        {
          name: "Imaad Rana",
          position: "Category Head",
          imgSrc: ImaadRana,
        },
        {
          name: "Lujain Almahdi",
          position: "Category Head",
          imgSrc: LujainAlmahdi,
        },
        {
          name: "Maisam Barakat",
          position: "Category Head",
          imgSrc: MaisamBarakat,
        },
        {
          name: "Muna Naseer",
          position: "Category Head",
          imgSrc: MunaNaseer,
        },
        {
          name: "Summer Kurdi",
          position: "Category Head",
          imgSrc: SummerKurdi,
        },
        {
          name: "Yosuf Mayar",
          position: "Category Head",
          imgSrc: YosufMayar,
        },
      ],
      // Other committees
    };

    const getColumnSize = (members, memberIndex) => {
      const totalMembers = members.length;
      if (totalMembers === 1) {
        return 12; // Full width for one member
      } else if (totalMembers === 2) {
        return 6; // Half width for two members
      } else if (totalMembers > 2 && totalMembers % 3 === 1) {
        // For more than 2 members and if there's a straggler (1 mod 3),
        // make the first one full width, others as per normal logic
        if (memberIndex === 0) {
          // Check if it's the first member (usually the chair)
          return 12; // Full width for the first member
        } else {
          return 4; // One third for the rest
        }
      } else {
        return 4; // One third for three or more members without stragglers
      }
    };

    return (
      <div className="meet-the-team-page">
        <Header />
        <PageTitle pageTitle="Meet the Team" />
        <Container>
          {Object.entries(teamMembers).map(([committee, members], index) => (
            <div key={index}>
              <h2 className="committee-title">
                {committee.replace(/_/g, " ")}
              </h2>
              <Row>
                {members.map((member, idx) => (
                  <Col md={getColumnSize(members, idx)} key={idx} className="mb-4">
                    <Card className="text-center team-member-card">
                      <Card.Body>
                        <Image
                          src={member.imgSrc}
                          roundedCircle
                          className="profile-image"
                        />
                        <Card.Title>{member.name}</Card.Title>
                        <Card.Text>{member.position}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Container>
      </div>
    );
  }
}

export { BoardPage };
