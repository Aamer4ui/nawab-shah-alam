import React from "react";
import { ListGroup } from "react-bootstrap";
import AbMainBody from "../D-MainBody/AbMainBody";
import "./RightNevigation.css";

const RightNevigation = () => {
  return (
    <div>
      <div className="sidebars">
        <ListGroup>
          <ListGroup.Item className="anchor" action href="/Mainbody">
            ABOUT NSAKCET
          </ListGroup.Item>
          <ListGroup.Item className="anchor" action href="/HC">
            Honorary Chairman
          </ListGroup.Item>
          <ListGroup.Item className="anchor" action href="/HS">
            Honorary Secretrary
          </ListGroup.Item>
          <ListGroup.Item className="anchor" action href="/JS">
            Joint Secretrary
          </ListGroup.Item>
          <ListGroup.Item className="anchor" action href="/D">
            Director
          </ListGroup.Item>
          <ListGroup.Item className="anchor" action href="/P">
            Principle
          </ListGroup.Item>
          <ListGroup.Item className="anchor" action href="/EP">
            Eminent Proffessors
          </ListGroup.Item>
          <ListGroup.Item className="anchor" action href="/CVOI">
            Core Values Of Institute
          </ListGroup.Item>
          <ListGroup.Item className="anchor" action href="#">
            Code Of Conduct
          </ListGroup.Item>
          <ListGroup.Item className="anchor" action href="#">
            Plagiarism Code Of Ethices
          </ListGroup.Item>
          <ListGroup.Item className="anchor" action href="#">
            Service Rules
          </ListGroup.Item>
          <ListGroup.Item className="anchor" action href="#">
            Committes
          </ListGroup.Item>
          <ListGroup.Item className="anchor" action href="#">
            IPR Cell
          </ListGroup.Item>
          <ListGroup.Item className="anchor" action href="#">
            Proffessiional Code
          </ListGroup.Item>
          <ListGroup.Item className="anchor" action href="#">
            Organisation Code
          </ListGroup.Item>
          <ListGroup.Item className="anchor" action href="#">
            Organisation Chart
          </ListGroup.Item>
          <ListGroup.Item className="anchor" action href="#">
            Best Practice
          </ListGroup.Item>
        </ListGroup>
      </div>
      <AbMainBody />
    </div>
  );
};

export default RightNevigation;
