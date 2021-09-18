import React from "react";
import TestContainer from "../TestContainer/TestContainer";

import './ChallengeSection.css';

const ChallengeSection = ({selectedParagraph,testInfo,onInputChange,words,characters,wpm,timeRemaining,timerStarted,startAgain}) => {
    return(
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take a speed test NOW!!
            </h1>
            <TestContainer testInfo={testInfo} startAgain={startAgain} selectedParagraph={selectedParagraph} onInputChange={onInputChange} words={words} characters={characters} wpm={wpm} timeRemaining={timeRemaining} timerStarted={timerStarted}/>
        </div>
    );
}

export default ChallengeSection;