import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😂": "laughing",
  "🤣": "LOL",
  "😳": "disbelief",
  "😔": "sad",
  "😭": "crying",
  "😱": "exclaim",
  "😤": "frustrated",
  "🥡": "takeout box",
  "❤️": "love",
  "😍": "lovely",
  "🤩": "star-struck",
  "🥳": "party",
  "😙": "kissing",
  "🤯": "mind blowing",
  "😑": "annoyance",
  "😡": "angry",
  "🤤": "tasty",
  "😴": "sleeping",
  "🤑": "money",
  "🤒": "unhealthy",
  "🤔": "thinking"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    // processing
    //event.preventDefault();
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined && meaning != null) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning); // react call to show output
  }

  function emojiClickHandler(emoji) {
    // processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); // react call to show output
  }

  return (
    <div className="App">
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}>
        Inside Out!!
      </h1>
      <br />
      <div>
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>
          Your emoji:
        </span>{" "}
        <input onChange={emojiInputHandler} />
      </div>

      <br />
      <div>
        <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          Meaning :&nbsp;
        </span>
        <span style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
          {meaning}
        </span>
      </div>
      {/* Actual output set by React using useState */}
      <br />
      <h3> emojis we know </h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "43px",
              padding: "0rem 2rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
