import React, { useEffect, useState } from "react";
import { auth, provider } from "../../../firebase";
import { signInWithPopup } from "firebase/auth";
import Drive from "../Drive";
import "./SignIn.css";
import "../../../App.css";
import "../../../index.css";
import "../../Header/Header.css";
import HeroSignIn from "./HeroSignIn";
import { motion } from "framer-motion";

const SignIn = () => {
  const [user, setUser] = useState();

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setUser(data.user.email);
      console.log(data)
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setUser(localStorage.getItem("email"));
  });

  return (
    <>
      {user ? (
        <Drive />
      ) : (
        <>
          <section className="hero-wrapper" style={{ paddingBottom: "0" }}>
            <div className="App ">
              <div
                style={{
                  display: "flex",
                  height: "100vh",
                  background: "black",
                  padding:'4rem'
                }}
              >
                <div className="white-gradient" />

                <div className="paddings innerWidth hero-container">
                  {/* left side */}

                  <div className="flexColStart hero-left">
                    <div className="hero-title ">
                      <div className="orange-circle" />
                      <motion.h1
                        initial={{ y: "2rem", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 2,
                          type: "ease-in",
                        }}
                      >
                        Welcome to <br />
                        DataWiz
                        <br /> Drive
                      </motion.h1>
                    </div>

                    <div className="flexColStart secondaryText flexhero-des">
                      <span>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium estro
                      </span>
                      <span>
                        doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis
                      </span>
                      <span>
                        et quasi architecto beatae vitae dicta sunt explicabo.
                        Nemo enim ipsam voluptatem quia
                      </span>
                      <span>
                        voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos
                      </span>
                      <span>
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum
                      </span>
                      <span>
                        sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium.
                      </span>
                    </div>
                    <button onClick={handleClick}> Sign in with Google</button>
                  </div>
                </div>
                <div className="flexCenter hero-right">
                  <motion.div
                    initial={{ x: "7rem", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 2,
                      type: "ease-in",
                    }}
                    className="image-container"
                  >
                    <img src="ai.jpg" alt="houses" />
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default SignIn;
