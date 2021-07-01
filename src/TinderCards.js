// modules
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TinderCard from "react-tinder-card";

import "./App.css";
import axios from "./axios";

function TinderCards() {
  const [people, setPeople] = useState([]);
    
  useEffect(() => {
    async function fetchData(){
      const req = await axios.get('/tinder/cards')
      setPeople(req.data) 
      console.log(req.data)
      
    }

    fetchData()
  }, [])

  console.log(people)
  const onSwipe = (direction, name) => {
    console.log(`deleted ${name}`);
  };

  const outOfFrame = (name) => {
    console.log("person left", name);
  };

  return (
    <div>
      <TinderCardContainer__tinderCards>
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => onSwipe(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <Card style={{ backgroundImage: `url(${person.imgUrl})` }}>
                <H3>{person.name}</H3>
              </Card>
            </TinderCard>
          );
        })}
      </TinderCardContainer__tinderCards>
    </div>
  );
}

const Card = styled.div`
  position: relative;
  background-color: #fff;
  width: 600px;
  padding: 20px;
  max-width: 85vw;
  height: 50vh;
  box-shadow: 0 18px 53px 0 rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  background-size: cover;
  background-position: center;
`;

const H3 = styled.h3`
  position: absolute;
  bottom: 0;
  margin: 10px;
  color: #fff;
`;

const TinderCardContainer__tinderCards = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
  padding-bottom: 10vh;
`;

export default TinderCards;
