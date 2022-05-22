import React from "react";

export const IntroInfo = () => {
  return (
    <>
      <p>
      I'm Ali Ercan Özgökçe, freshman in Electrical 
      & Electronics engineering and I'm also working 
      as a blockchain developer 
      <br />
      <br />
        "Trust me, I'm an <b>Engineer</b>"
      </p>
    </>
  );
};
export const AboutInfo = () => {
  const style = {
    textDecoration: "underline",
    fontWeight: "800",
    color: "rgb(255, 245, 232)",
  };
  return (
    <>
      <p>
        I'm a determined Programmer and Blokchain Developer.
        <br />
        <br />
          Currently, I'm looking for a part time web3 job remotely. 
          And also I trying to be a good engineer 😎.
        <br />
        <br />
          I used to studying about cyber security industry, 
          this is why i still obsessed with dark themes 👨🏻‍💻.
        <br />
        <br />
        At last, Feel free to{" "}
        <a href="/contact" style={style}>
          Contact ME.
        </a>{" "}
        We can create a good projects for Blockchain industry.
      </p>
    </>
  );
};
