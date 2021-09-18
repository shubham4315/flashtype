import React from "react";
import './TryAgain.css';
import './../Nav/Nav.css'
const TryAgain = ({words, characters , wpm, startAgain}) => {
    return(
        <div className="try-again-container">
            <h1>Test Results</h1>
            <div className="result-container">
                <p>
                    <b>Characters : </b>{characters}
                </p>
                <p>
                    <b>Words : </b>{words}
                </p>
                <p>
                    <b>Speed : </b>{wpm} wpm
                </p>
            </div>
            <div>
                <button onClick={() => startAgain()} className="end-btns start-again-btn"><i class="fa fa-refresh fa_custom"></i>  Re-try</button>
                <button onClick={()=>{
                    window.open("https://www.facebook.com/sharer/sharer.php", 
                    "facebook-share-dialog" , 
                        "width=800,height=600");
                    }}
                    className="end-btns share-btn">
                        <i class="fa fa-facebook fa_custom"></i>  Share
                </button>
                <button onClick={()=>{
                    window.open("https://www.twitter.com/intent/tweet", 
                        "twitter" , 
                        "width=800,height=600");
                    }}
                
                    className="end-btns tweet-btn">
                        <i class="fa fa-twitter fa_custom"></i>  Tweet
                </button>
            </div>
        </div>
    );
}

export default TryAgain;