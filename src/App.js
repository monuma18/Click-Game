import React, { Component } from "react";
import MatchCard from "./components/MatchCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import matches from "./Matches.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
 matches,
 correctGuesses:0,
 bestScore:0,
 score:0,
 clickMessage:"game over"
  };

  removeMatches = id => {
    // Filter this.state.friends for matches with an id not equal to the id being removed
   // const matches = this.state.matches.map(matche => matche.id !== id);
    
   const shuffled= this.state.matches.sort(()=>Math.random() -0.5)
    this.setState({ matches: shuffled });
  };

  // Make a copy this.state.Match and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} bestScore={this.state.bestScore}   >Clicky React FriendCard List</Title>

        {this.state.matches.map(matche => (
          <MatchCard
            removeMatches={this.removeMatches}
            id={matche.id}
            key={matche.id}
            name={matche.name}
            image={matche.image}
            occupation={matche.occupation}
            location={matche.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
