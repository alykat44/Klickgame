import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Navbar from "./components/Navbar";
import "./App.css";

// Sets state to 0 /empty

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clickedFriend: [],
    score: 0
  };


  imageClick = event => {
    const currentFriend = event.target.alt;
    const FriendAlreadyClicked =
    this.state.clickedFriend.indexOf(currentFriend) > -1;
    console.log(currentFriend);
    console.log(FriendAlreadyClicked);


    if (FriendAlreadyClicked) {
      this.setState({
        friends: this.state.friends.sort(function (a, b) {
          return 0.5 - Math.random();

        }),
        clickedFriend: [],
        score: 0
      });
      alert("You lose, Play again?")


    } else {
      this.setState(


        {
          friends: this.state.friends.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedFriend: this.state.clickedFriend.concat(
            currentFriend
          ),
          score: this.state.score + 1

        },
        () => {
          if (this.state.score === 12) {
            alert("Good Job, You Won!!!!");
            this.setState({
              friends: this.state.friends.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedFriends: [],
              score: 0
            });
          }
        }
      );
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
      <div>
        <Navbar
        score={this.state.score}
        />
      <Wrapper>
        <Title>LIGHTHOUSES</Title>
        <h2>Click on any image to earn a point, but don't click on the same picture more than once. Click all 12 pics, and you win.</h2>
        {this.state.friends.map(friends => (
          <FriendCard
            imageClick={this.imageClick}
            id={friends.id}
            key={friends.id}
            image={friends.image}

          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
