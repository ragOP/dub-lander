import React, { useState, useEffect } from "react";
//@ts-ignore
import TagManager from "react-gtm-module";
import axios from "axios";
import "./styles.scss";

import { scrollTo } from "../utils";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head_bg from "../assets/emily.png";
import {  Link } from 'react-router-dom';
import Headline from "../assets/emily.png";

// google tag manager

const tagManagerArgs = {
  gtmId: "GTM-KZJBC3B",
};

// TagManager.initialize(tagManagerArgs);

export default function Tsf() {

  const SlideUp = cssTransition({
    enter: "toast-enter",
    exit: "toast-exit",
  });
  
  const messages = [
    "Emily A. Rodriguez from Miami, FL just qualified for a $3,900 Food Allowance.",
    "Michael D. Johnson from Dallas, TX just qualified for a $3,900 Food Allowance.",
    "Sophia L. Thompson from Los Angeles, CA just qualified for a $3,900 Food Allowance.",
    "Ethan M. Baker from Chicago, IL just qualified for a $3,900 Food Allowance.",
    "Ava K. Campbell from Seattle, WA just qualified for a $3,900 Food Allowance."
  ];
  
  // Function to shuffle array in place
  const shuffleArray = (array:any) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  
  shuffleArray(messages);
  
  const notify = (message:any) => {
    // Dismiss all existing toasts
    toast.dismiss();
    let boldedMessage = message;
  
    // Make the word "Allowance" bold in all lines
    boldedMessage = boldedMessage.replace(
      /\$3,900 Food Allowance/g,
      '<strong class="green-bold">$900 Food Allowance</strong>'
    );
  
    // Make specific dollar amounts bold only in specific lines
    const specialAmounts = ["$16,800", "$16,800", "$16,800", "$16,800"];
    specialAmounts.forEach((amount) => {
      if (message.includes(amount)) {
        boldedMessage = boldedMessage.replace(
          amount,
          `<strong class="green-bold">${amount}</strong>`
        );
      }
    });
  
    // Show new toast
    toast(<div dangerouslySetInnerHTML={{ __html: boldedMessage }} />, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      closeButton: false,
    });
  };
  
  useEffect(() => {
    const delayedEffect = setTimeout(() => {
      // Create a function to handle the logic
      const showRandomToast = () => {
        const randomTime = 20000;
        const randomMessage =
          messages[Math.floor(Math.random() * messages.length)];
        notify(randomMessage);
        return randomTime;
      };
  
      // Show the first toast
      let nextTime = showRandomToast();
  
      // Set up a recurring timer
      const timer = setInterval(() => {
        nextTime = showRandomToast();
      }, nextTime);
  
      // Cleanup
      return () => {
        clearInterval(timer);
      };
    }, 20000); // 6-second delay before the useEffect code runs
  
    // Cleanup for the setTimeout
    return () => {
      clearTimeout(delayedEffect);
    };
  }, []);

  useEffect(() => {
    window.document.title = "Senior's Allowance Program 2024";

  
  }, []);

  const handleCall = () => {
   
  };

  const [quiz, setQuiz] = useState("Are you over the age of 64?  ");
  const [step, setStep] = useState("process");
  const [min, setMin] = useState(3);
  const [second, setSecond] = useState<any>(0);
  const [yes,setYes]=useState("YES, I'M 65 OR OLDER")
  const [no,setNo]=useState("NO, I'M 64 OR YOUNGER")
  

  const stepProcess = () => {
    if (step === "Reviewing Your Answers...") {
      setTimeout(() => {
        setStep("Matching With Best Options...");
      }, 1500);
    }
    if (step === "Matching With Best Options...") {
      setTimeout(() => {
        setStep("Confirming Eligibility...");
      }, 1500);
    }
    if (step === "Confirming Eligibility...") {
      setTimeout(() => {
        setStep("completed");

      
      }, 1500);
    }

    if (step === "completed") {
      const startTime: any = new Date();
      const timer = setInterval(() => {
        const nowTime: any = new Date();
        setSecond((180 - Math.round((nowTime - startTime) / 1000)) % 60);
        setMin(
          Math.floor((180 - Math.round((nowTime - startTime) / 1000)) / 60)
        );
      }, 1000);
    }
  };

  useEffect(() => {
    stepProcess();
  }, [step]);

  const topScroll = (id: any) => {
    scrollTo({ id });
  };

  const handleQuizP = () => {
    topScroll("btn");
    if (quiz === "Are you over the age of 64?  ") {
      setYes("Yes")
      setNo("No")
      setQuiz("2. Do you live in the United States?");
    } else {
      setStep("Reviewing Your Answers...");
     
      topScroll("top");
    }

   
  };

  const handleQuizN = () => {
    topScroll("btn");
    if (quiz === "Are you over the age of 60?  ") {
      setYes("Yes")
      setNo("No")
      setQuiz("2. Do you live in the United States?");
    } else {
      setStep("Reviewing Your Answers...");
    
      topScroll("top");
    }

   
  };

  return (
    <div>
      <div style={{ marginBottom: '4px' }} className="top-sticky-blue-test2" id="top">
        Senior's Allowance Program 2024
      </div>
      {step === "process" ? (
        <>
          <div className="main-container-5">
            <div className="main-description-5-5">
              <div className="main-des-title-6-7">
                <b>
                  Americans Over 65 Can Now Qualify For The $900 Food Allowance Card Under 2024 Medicare Policy!
                </b>
              </div>
              <img className="topic-img-middle-z" src={Head_bg} alt="head" />
              <div style={{ marginTop: '14px' }} className="main-des-5">
                Americans over 65 years old can claim the 2024 Food Allowance Card that gives them up to $900. Americans can use the funds to fully cover their Food, Prescriptions at Walmart and thousands of other participating stores!
              </div>
              <div className="main-des-5" style={{ marginTop: '-5px' }}>
                If you have not yet claimed your monthly allowance then answer the questions below and once approved <b>you will have your $900 Food Allowance mailed to you within a few days ready for use!</b>
              </div>
            </div>
            <div style={{ marginTop: '-5px' }} className="survey">
              <div className="quiz-5" id="btn">
                {quiz}
              </div>
              <div className="answer">
                <div className="answer-btn-5" onClick={handleQuizP}>
                  {yes}
                </div>
                <div className="answer-btn-5" onClick={handleQuizN}>
                  {no}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : step !== "process" && step !== "completed" ? (
        <div className="checking" style={{ fontWeight: "700" }}>
          {step}
        </div>
      ) : (
        <div className="checking">
          <div className="congrats">Congratulations, You Qualify!</div>
          <div className="top-description-5">
            Make A <b>Quick Call</b> To Claim Your Food Allowance!
          </div>
          <div className="spots-count">Spots remaining: 4</div>
          <div className="tap-direction">👇 TAP BELOW TO CALL 👇</div>

          <a href="tel:+18444340339">
            <div className="call-btn" onClick={handleCall}>
              CALL (844) 434-0339
            </div>
          </a>
          <div className="sub-title">We Have Reserved Your Spot</div>
          <div className="sub-description">
            Due to high call volume, your official agent is waiting for only <b>3 minutes</b>, then your spot will not be reserved.
          </div>
          <div className="timer">
            <div className="timer-cell">{min}</div>
            <div className="timer-cell-s">:</div>
            <div className="timer-cell">
              {second < 10 ? `0${second}` : second}
            </div>
          </div>
        </div>
      )}
     
    </div>
  );
}