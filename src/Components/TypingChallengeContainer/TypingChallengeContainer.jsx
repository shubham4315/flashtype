import React from "react";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import './TypingChallengeContainer.css';
const TypingChallengeContainer = ({selectedParagraph,testInfo,onInputChange,words,characters,wpm,timeRemaining,timerStarted}) =>{
    return(
        <div className="typing-challenge-container">
            <div className="details-container">
                <ChallengeDetailsCard cardName = "Words" cardValue={words}/>
                <ChallengeDetailsCard cardName = "Characters" cardValue={characters}/>
                <ChallengeDetailsCard cardName = "Speed" cardValue={wpm}/>
            </div>
            <div className="typewriter-container">
                <TypingChallenge testInfo ={testInfo} timeRemaining={timeRemaining} timerStarted={timerStarted} selectedParagraph={selectedParagraph} onInputChange={onInputChange}/>
            </div>
        </div>
    );
}

export default TypingChallengeContainer;