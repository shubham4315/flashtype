import React from "react"; 
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Nav from "../Nav/Nav";
import './App.css';
import { SAMPLE_PARAGRAPHS } from "../../data/sampleParagraphs";
import ChallengeSection from "../ChallengeSection/ChallengeSection";

const TotalTime = 60;
const ServiceUrl = "http://metaphorpsum.com/paragraphs/1/9";
const DefaultState = {
    selectedParagraph: "Hello World!",
    testInfo: [],
    timerStarted: false,
    timeRemaining: TotalTime,
    words: 0,
    characters: 0,
    wpm: 0,
  };


class App extends React.Component {
  state = DefaultState;

  fetchNewParagraphFallback = () => {
    const data =
      SAMPLE_PARAGRAPHS[Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)];

    const selectedParagraphArray = data.split("");
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted",
      };
    });

    // Update the testInfo in state
    this.setState({
      ...DefaultState,
      selectedParagraph: data,
      testInfo,
    });
  };

  fetchNewParagraph = () => {
    fetch(ServiceUrl)
      .then((response) => response.text())
      .then((data) => {
        const selectedParagraphArray = data.split("");
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
          return {
            testLetter: selectedLetter,
            status: "notAttempted",
          };
        });

        this.setState({
          ...DefaultState,
          testInfo: testInfo,
          selectedParagraph: data,
        });
      });
  };

  componentDidMount() {
    this.fetchNewParagraphFallback();
  }

  startAgain = () => {
    this.fetchNewParagraphFallback();
    window.location.reload(false);
  };

  handleUserInput = (inputValue) => {
    console.log(inputValue);
    if (!this.state.timerStarted) this.startTimer();

    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1;

    if (index < 0) {
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testInfo[0].testLetter,
            status: "notAttempted",
          },
          ...this.state.testInfo.slice(1),
        ],
        characters,
        words,
      });
      return;
    }

    if (index >= this.state.selectedParagraph.length) {
      this.setState({ characters, words });
      return;
    }

    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedParagraph.length - 1))
      testInfo[index + 1].status = "notAttempted";
    const isCorrect = inputValue[index] === testInfo[index].testLetter;
    testInfo[index].status = isCorrect ? "correct" : "incorrect";

    this.setState({ testInfo, words, characters });
  };

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        const timeSpent = TotalTime - this.state.timeRemaining;
        const wpm =
          timeSpent > 0 ? (this.state.words / timeSpent) * TotalTime : 0;

        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  render() {
    return (
      <div className="app">
        <Nav />
        <Landing />
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          testInfo={this.state.testInfo}
          onInputChange={this.handleUserInput}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
          startAgain={this.startAgain}
        />
        <Footer />
      </div>
    );
  }
}

export default App; 