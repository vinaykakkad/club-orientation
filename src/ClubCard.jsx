import React from "react";
import { Col, Divider, Typography } from "antd";
import "./card.css";

const { Text } = Typography;

function ClubCard(props) {
  return (
    <Col
      className="clubcard"
      style={{
        width: "95%",
        cursor: "pointer",
        border: "2px solid gray",
        padding: "10px",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(5px)",
        height: "150px",
      }}
    >
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.instagram.com/${props.insta}/`}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              height: "fit-content",
              display: "flex",
              alignItems: "center",
              fontSize: "18px",
              fontWeight: "500",
              color: "whitesmoke"
            }}
          >
            {props.club}
          </Text>
          <Divider
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              borderColor: "#fff",
            }}
          />
          <Text style={{ margin: "", color: "#f5f5f5" }}>@{props.insta}</Text>
        </div>
      </a>
    </Col>
  );
}

export default ClubCard;
