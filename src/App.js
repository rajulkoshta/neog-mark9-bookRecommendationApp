import React, { useState } from "react";
import "./styles.css";

//  book database
const bookDb = {
  comics: [
    { name: "Watchmen", writer: " by Alan Moore", rating: "⭐⭐⭐⭐" },
    {
      name: "The Walking Dead: Compendium One",
      writer: " by Robert Kirkman",
      rating: "⭐⭐⭐"
    },
    {
      name: "The Boy, the Mole, the Fox and the Horse",
      writer: " by Charlie Mackesy",
      rating: "⭐⭐"
    }
  ],
  Mystery: [
    {
      name: "The Night Fire",
      writer: " by Michael Connelly",
      rating: "⭐⭐⭐"
    },
    {
      name: "The Adventures of Sherlock Holmes",
      writer: " by Arthur Conan Doyle",
      rating: "⭐⭐"
    },
    {
      name: "And Then There Were None",
      writer: " by Agatha Christie",
      rating: "⭐⭐⭐⭐⭐"
    }
  ],
  business: [
    {
      name: "Never Split the Difference",
      writer: " by Christopher Voss and Tahl Raz",
      rating: "⭐⭐"
    },
    {
      name: "Loonshots",
      writer: " by Safi Bahcall",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "The Perfect Day to Boss Up",
      writer: " by Rick Ross and Neil Martinez-Belkin",
      rating: "⭐⭐⭐⭐"
    }
  ],
  fantasy: [
    {
      name: "The Water Dancer",
      writer: " by Ta-Nehisi Coates",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Ninth House",
      writer: " by Leigh Bardugo",
      rating: "⭐⭐⭐"
    },
    {
      name: "Circe",
      writer: " by Madeline Miller",
      rating: "⭐⭐⭐⭐⭐"
    }
  ],
  horror: [
    {
      name: "Carrie",
      writer: " by Stephen King",
      rating: "⭐⭐"
    },
    {
      name: "The Haunting of Hill House",
      writer: " by Shirley Jackson",
      rating: "⭐⭐⭐"
    },
    {
      name: "Bird Box",
      writer: " by Josh Malerman",
      rating: "⭐⭐⭐⭐"
    }
  ]
};

// main app function
export default function App() {
  // usestate
  const [selectedGenre, setGenre] = useState("business");

  // click handler function
  function clickGenreHandler(genre) {
    setGenre(genre);
  }

  //app function return
  return (
    <div className="App">
      {/* nav */}
      <nav className="navigation container">
        <div className="nav-brand">📚 All Time Greatbooks 📚</div>
      </nav>

      {/* header */}
      <header className="hero">
        <h1 className="hero-heading">
          📖 Goodbooks{" "}
          <span className="heading-inverted">Book Recommendation App 📖</span>
        </h1>
      </header>

      {/* section */}
      <section className="section">
        <div className="container container-center">
          {/* genre button click */}
          {Object.keys(bookDb).map((genre) => (
            <button class="btn" onClick={() => clickGenreHandler(genre)}>
              {genre}
            </button>
          ))}
        </div>
      </section>

      <hr />

      <section className="section">
        <div className="container container-center">
          <ul class="list-non-bullet">
            {/* dafault genre to diplay and other will be mapped accordingly */}
            {bookDb[selectedGenre].map((books) => (
              <li key={books.name} className="list-item">
                <div className="list-item-first">{books.name}</div>
                <div className="list-item-second">{books.writer}</div>
                <div className="list-item-third">{books.rating}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-header"> Connect with me </div>
        <ul className="social-links list-non-bullet">
          <li className="list-item-inline">
            <a
              target="_blank"
              className="link"
              href="https://github.com/rajulkoshta"
            >
              github
            </a>
          </li>
          <li className="list-item-inline">
            <a
              target="_blank"
              className="link"
              href="https://twitter.com/RajulKoshta"
            >
              twitter
            </a>
          </li>
          <li className="list-item-inline">
            <a
              target="_blank"
              className="link"
              href="https://www.linkedin.com/in/rajulkoshta/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
