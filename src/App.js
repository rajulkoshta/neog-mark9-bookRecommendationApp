import React, { useState } from "react";
import "./styles.css";

//  book database
const bookDb = {
  comics: [
    { name: "Watchmen", rating: "4/5" },
    { name: "The Walking Dead: Compendium One", rating: "3.5/5" },
    { name: "The Boy, the Mole, the Fox and the Horse", rating: "3.5/5" }
  ],
  Mystery: [
    {
      name: "The Night Fire",
      rating: "5/5"
    },
    {
      name: "The Adventures of Sherlock Holmes",
      rating: "4.5/5"
    },
    {
      name: "And Then There Were None",
      rating: "4.5/5"
    }
  ],
  business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5"
    },
    {
      name: "Loonshots",
      rating: "5/5"
    },
    {
      name: "The Perfect Day to Boss Up",
      rating: "5/5"
    }
  ],
  fantasy: [
    {
      name: "The Water Dancer",
      rating: "3.5/5"
    },
    {
      name: "Ninth House",
      rating: "5/5"
    },
    {
      name: "Circe",
      rating: "5/5"
    }
  ],
  horror: [
    {
      name: "Carrie",
      rating: "3.5/5"
    },
    {
      name: "The Haunting of Hill House",
      rating: "5/5"
    },
    {
      name: "Bird Box",
      rating: "5/5"
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
                <div className="list-item-second">{books.rating}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-header"> Connect with me </div>
        <ul className="social-links list-non-bullet">
          <li className="list-item-inline">
            <a className="link" href="https://github.com/rajulkoshta">
              github
            </a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="https://twitter.com/RajulKoshta">
              twitter
            </a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="https://www.linkedin.com/in/rajulkoshta/">
              LinkedIn
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
