import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Gift } from "lucide-react";

import "./test.css";
import img1 from "./assets/images/img1.jpg";
import img2 from "./assets/images/img2.jpg";
import birthdaySong from "./assets/music/nastelbom-happy-birthday-471481.mp3";

function App() {
  const [showMemories, setShowMemories] = useState(false);
  // const [showFinalSurprise, setShowFinalSurprise] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPasswordScreen, setShowPasswordScreen] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showFriendshipStory, setShowFriendshipStory] = useState(false);
  const [currentStoryStep, setCurrentStoryStep] = useState(1);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();

      setIsPlaying(false);
    } else {
      audioRef.current.play();

      setIsPlaying(true);
    }
  };
  const checkPassword = () => {
    if (password === "raj123") {
      setShowPasswordScreen(false);
      setShowFriendshipStory(true);
      setPasswordError("");
    } else {
      setPasswordError("Hmm... that's not the secret password 💭");
    }
  };
  const nextStoryStep = () => {
    if (currentStoryStep < 4) {
      setCurrentStoryStep(currentStoryStep + 1);
    }
  };

  const previousStoryStep = () => {
    if (currentStoryStep > 1) {
      setCurrentStoryStep(currentStoryStep - 1);
    }
  };
  return (
    <main className="birthday-page">
      <div className="floating-hearts-container">
        <span className="floating-heart heart-1">💖</span>
        <span className="floating-heart heart-2">💕</span>
        <span className="floating-heart heart-3">💗</span>
        <span className="floating-heart heart-4">💞</span>
        <span className="floating-heart heart-5">💓</span>
        <span className="floating-heart heart-6">💖</span>
        <span className="floating-heart heart-7">💕</span>
        <span className="floating-heart heart-8">💗</span>
      </div>
      <audio
        ref={audioRef}
        src={birthdaySong}
        loop
      />
      <motion.button
        className="music-button"
        onClick={toggleMusic}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isPlaying ? "🔊" : "🎵"}
      </motion.button>
      {/* HERO SECTION */}
      <section className="hero-section">

        {/* Floating Hearts */}
        <motion.div
          className="floating-heart heart-one"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity
          }}
        >
          💖
        </motion.div>

        <motion.div
          className="floating-heart heart-two"
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 10, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity
          }}
        >
          💕
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="small-title">
            <Sparkles size={18} />
            A LITTLE SURPRISE FOR YOU
            <Sparkles size={18} />
          </div>

          <h1>
            Happy Birthday
            <span>Raj 💖</span>
          </h1>

          <p>
            Because someone as special as you deserves
            something beautiful ✨
          </p>

          <motion.button
            className="surprise-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowMemories(true)}
          >
            <Gift size={20} />
            Open Your Surprise
            <Heart size={18} fill="currentColor" />
          </motion.button>

        </motion.div>

        <div className="scroll-text">
          ✨ Click the button for your surprise ✨
        </div>

      </section>

      {/* MEMORIES SECTION */}
      {showMemories && (
        <motion.section
          className="memories-section"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="section-heading">
            <span>📸</span>

            <h2>
              A Little Collection
              <strong>Of Memories 💕</strong>
            </h2>

            <p>
              Some moments become memories,
              and some memories become priceless ✨
            </p>
          </div>

          <div className="memory-list">

            <motion.div
              className="memory-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="memory-photo">
                <img src={img1} alt="Raj memory 1" />
              </div>

              <div className="memory-quote">
                <span>“</span>

                <p>
                  Some people come into our lives and make
                  ordinary moments feel special. 💖
                </p>

                <small>
                  — A beautiful memory with Raj ✨
                </small>
              </div>
            </motion.div>


            <motion.div
              className="memory-item reverse"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="memory-photo">
                <img src={img2} alt="Raj memory 2" />
              </div>

              <div className="memory-quote">
                <span>“</span>

                <p>
                  The best memories are the ones that make
                  us smile every time we remember them. 💕
                </p>

                <small>
                  — Moments worth remembering ✨
                </small>
              </div>
            </motion.div>


            <motion.div
              className="memory-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="memory-photo">
                <img src={img1} alt="Raj memory 3" />
              </div>

              <div className="memory-quote">
                <span>“</span>

                <p>
                  Life is a little more beautiful when
                  shared with someone special. 🌸
                </p>

                <small>
                  — More memories, more smiles 💖
                </small>
              </div>
            </motion.div>

            <motion.div
              className="memory-item reverse"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="memory-photo">
                <img src={img2} alt="Raj memory 2" />
              </div>

              <div className="memory-quote">
                <span>“</span>

                <p>
                  The best memories are the ones that make
                  us smile every time we remember them. 💕
                </p>

                <small>
                  — Moments worth remembering ✨
                </small>
              </div>
            </motion.div>

          </div>

        </motion.section>
      )}
      {/* BIRTHDAY MESSAGE SECTION */}

      <motion.section
        className="birthday-message-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="birthday-message-card">

          <div className="message-icon">
            💌
          </div>

          <p className="message-label">
            A LITTLE MESSAGE FOR YOU
          </p>

          <h2>
            Dear Raj,
          </h2>

          <p className="birthday-message">
            Some people make life brighter just by being
            themselves. You are one of those special people
            who bring laughter, happiness, and beautiful
            memories wherever you go. 💖
          </p>

          <p className="birthday-message">
            I hope this birthday brings you everything you
            deserve — happiness, success, countless smiles,
            and many more beautiful memories. ✨
          </p>

          <p className="birthday-message">
            Keep smiling, keep shining, and always stay the
            amazing person you are. 💕
          </p>

          <div className="message-signature">
            With lots of love 💖
          </div>

        </div>
      </motion.section>
      {/* FINAL SURPRISE SECTION */}

      <section className="final-surprise-section">

        {!showPasswordScreen && !showFriendshipStory && (

          <motion.div
            className="final-surprise-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <div className="final-gift">
              🎁
            </div>

            <h2>
              One Secret Surprise
            </h2>

            <p>
              There is something special waiting
              just for you, Raj 💖
            </p>

            <motion.button
              className="final-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPasswordScreen(true)}
            >
              ✨ Open Secret Surprise ✨
            </motion.button>

          </motion.div>

        )}

        {showPasswordScreen && (

          <motion.div
            className="password-card"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
          >

            <div className="password-icon">
              🔐
            </div>

            <h2>
              A Secret Is Waiting...
            </h2>

            <p>
              Only someone special knows the password 💕
            </p>

            <input
              type="password"
              placeholder="Enter the secret password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  checkPassword();
                }
              }}
            />

            <button
              className="final-button"
              onClick={checkPassword}
            >
              🔓 Unlock Our Story
            </button>

            {passwordError && (
              <p className="password-error">
                {passwordError}
              </p>
            )}

          </motion.div>

        )}

        {showFriendshipStory && (

          <motion.div
            className="friendship-story-card"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >

            {/* PROGRESS INDICATOR */}

            <div className="story-progress">

              {[1, 2, 3, 4].map((step) => (

                <div
                  key={step}
                  className={
                    currentStoryStep >= step
                      ? "progress-dot active"
                      : "progress-dot"
                  }
                >
                  {step}
                </div>

              ))}

            </div>


            {/* STEP 1 */}

            {currentStoryStep === 1 && (

              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >

                <div className="final-hearts">
                  💖 ✨ 💕
                </div>

                <p className="story-label">
                  STEP ONE
                </p>

                <h1>
                  How It Started
                </h1>

                <p className="friendship-story-text">
                  Every beautiful friendship begins somewhere.
                  Maybe with a simple conversation, a random
                  moment, or something we never expected. ✨
                </p>

                <p className="friendship-story-text">
                  And somehow, that small beginning became
                  the start of something really special. 💖
                </p>

              </motion.div>

            )}


            {/* STEP 2 */}

            {currentStoryStep === 2 && (

              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >

                <div className="final-hearts">
                  📸 😂 💕
                </div>

                <p className="story-label">
                  STEP TWO
                </p>

                <h1>
                  The Memories
                </h1>

                <p className="friendship-story-text">
                  From random conversations to endless laughter,
                  from silly moments to unforgettable memories,
                  every moment slowly became part of our story. ✨
                </p>

                <p className="friendship-story-text">
                  Some memories may seem small,
                  but they are the ones that make us smile
                  whenever we remember them. 💕
                </p>

              </motion.div>

            )}


            {/* STEP 3 */}

            {currentStoryStep === 3 && (

              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >

                <div className="final-hearts">
                  🤝 💖 ✨
                </div>

                <p className="story-label">
                  STEP THREE
                </p>

                <h1>
                  Our Friendship
                </h1>

                <p className="friendship-story-text">
                  The best part about friendship is having
                  someone with whom you can be completely
                  yourself. 💖
                </p>

                <p className="friendship-story-text">
                  Through laughter, random moments, and
                  everything in between, this friendship has
                  become something I truly value. 💕
                </p>

              </motion.div>

            )}


            {/* STEP 4 */}

            {currentStoryStep === 4 && (

              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >

                <div className="final-hearts">
                  🎂 🎉 💖
                </div>

                <p className="story-label">
                  STEP FOUR
                </p>

                <h1>
                  Today Is Your Day
                </h1>

                <p className="friendship-story-text">
                  Raj, I hope your birthday is filled with
                  happiness, laughter, love, and everything
                  that makes you smile. ✨
                </p>

                <p className="friendship-story-text">
                  Thank you for being such a wonderful friend
                  and for being a part of so many beautiful
                  memories. 💖
                </p>

                <div className="story-ending">
                  Happy Birthday, Raj! 🎂✨
                </div>

              </motion.div>

            )}


            {/* NAVIGATION BUTTONS */}

            <div className="story-navigation">

              {currentStoryStep > 1 && (

                <button
                  className="story-button secondary"
                  onClick={previousStoryStep}
                >
                  ← Back
                </button>

              )}

              {currentStoryStep < 4 ? (

                <button
                  className="story-button"
                  onClick={nextStoryStep}
                >
                  Next Chapter ✨ →
                </button>

              ) : (

                <button
                  className="story-button"
                  onClick={() => {
                    setCurrentStoryStep(1);
                    setShowFriendshipStory(false);
                  }}
                >
                  💖 Close Story
                </button>

              )}

            </div>

          </motion.div>

        )}

      </section>

    </main>
  );
}

export default App;