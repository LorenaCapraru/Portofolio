import "./Feedback.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Feedback = () => {
  const testimonialData = [
    {
      name: "Jemima Villanueva",
      role: "Personal Development Trainer",
      text: "I was a 'Personal Development' trainer at Code Your Future and Lorena impressed me from our very first meeting. She is bright, buttoned up and very hard working. During the length of the course she proved to be a great team player who stayed away from conflict and engaged enthusiastically in group tasks. A real joy to work with.",
    },
    {
      name: "Alex Withington-Smith",
      role: "Technical Trainer",
      text: "I had the pleasure of mentoring Lorena technically throughout her time at CodeYourFuture. I found her diligence and good-humoured perseverance throughout the course incredibly infectious - she would often almost savour the challenges presented to her. The technical understanding this gave her made her a great asset to the final project team. I have been very proud to see Lorena's growth and determination throughout the course, and I have no doubt that she will be an asset to any technical team she joins. I'm looking forward to watching the brilliant things she will achieve throughout her tech career.",
    },
    {
      name: "Farnoosh Moayeri",
      role: "Peer Developer",
      text: "I must emphasize that Lorena is an exceptional teammate. Her remarkable sense of responsibility and problem-solving skills truly stand out, showcasing her cleverness and creativity. She’s both efficient and incredibly supportive, rendering her an invaluable asset to any team. I firmly believe that she elevates the performance of any group significantly. Furthermore, her genuine kindness, considerate nature, and ability to swiftly find solutions to problems are truly admirable. Having someone of Lorena’s calibre on the team is a tremendous asset.",
    },
  ];

  return (
    <main className="feedbackF">
      <div className="titleContainer">
        <h1 className="headerH">Testimonials</h1>
        <h2 className="header2H">Feedback</h2>
      </div>

      <div class="container">
        <input type="radio" name="slider" id="item-1" checked />
        <input type="radio" name="slider" id="item-2" />
        <input type="radio" name="slider" id="item-3" />
        <div class="cards">
          <label class="card" for="item-1" id="song-1">
            <div className="testimonial-card">
              <p className="testimonial-text">
                <span className="quote">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </span>
                {testimonialData[0].text}
                <span className="quote">
                  <FontAwesomeIcon icon={faQuoteRight} />
                </span>
              </p>
              <p className="testimonial-name">- {testimonialData[0].name}</p>
              <p className="testimonial-company">{testimonialData[0].role}</p>
            </div>
          </label>
          <label class="card" for="item-2" id="song-2">
            <div className="testimonial-card">
              <p className="testimonial-text">
                {" "}
                <span className="quote">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </span>
                {testimonialData[1].text}{" "}
                <span className="quote">
                  {" "}
                  <FontAwesomeIcon icon={faQuoteRight} />
                </span>
              </p>
              <p className="testimonial-name">- {testimonialData[1].name}</p>
              <p className="testimonial-company">{testimonialData[1].role}</p>
            </div>
          </label>
          <label class="card" for="item-3" id="song-3">
            <div className="testimonial-card">
              <p className="testimonial-text">
                <span className="quote">
                  {" "}
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </span>
                {testimonialData[2].text}{" "}
                <span className="quote">
                  {" "}
                  <FontAwesomeIcon icon={faQuoteRight} />
                </span>
              </p>
              <p className="testimonial-name">- {testimonialData[2].name}</p>
              <p className="testimonial-company">{testimonialData[2].role}</p>
            </div>
          </label>
        </div>
      </div>
    </main>
  );
};

export default Feedback;
