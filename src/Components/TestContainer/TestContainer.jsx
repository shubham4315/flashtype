import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";
import './TestContainer.css';

const TestContainer = ({selectedParagraph,testInfo,onInputChange,words,characters,wpm,timeRemaining,timerStarted,startAgain}) => {

    return(
        <div className="test-container">
            {timeRemaining > 0 ? (
                <div data-aos="fade-up" className="typing-challenge-container">
                    <TypingChallengeContainer testInfo={testInfo} selectedParagraph={selectedParagraph} onInputChange={onInputChange} words={words} characters={characters} wpm={wpm} timeRemaining={timeRemaining} timerStarted={timerStarted}/>
                </div>
            ):(
                <div className="try-again-container">
                    <TryAgain startAgain={startAgain} words={words} characters={characters} wpm={wpm} />
                </div>
            )}  
        </div>
    );
}

export default TestContainer;