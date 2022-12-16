import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Container, Row } from "react-bootstrap";
import * as Ai from "react-icons/ai";
import * as Bs from "react-icons/bs";
import "video.js/dist/video-js.css";
import IVSPlayer from "../Player/IvsPlayer";
import "./Live.css";

function Live(props) {
  return (
    <>
      <Header />
      <section className="allLives">
        <Container>
          <Row>
            <div className="col-lg-8 col-md-12 col-sm-12 ">
              <div className="screen">
                <IVSPlayer />
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="chat">
                <h3>
                  Live Chat <Ai.AiFillMessage />
                </h3>
                <div className="chat-btm">
                  <input
                    className="chat_input"
                    placeholder="Chat here.."
                  ></input>
                  <button className="upload">
                    <Ai.AiOutlinePaperClip />
                  </button>
                  <button className="emoji">
                    <Bs.BsFillEmojiSmileFill />
                  </button>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Live;
