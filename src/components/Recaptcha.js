"use client"
import ReCAPTCHA from "react-google-recaptcha";

const Recaptcha = ({ onChange }) => {
  return <ReCAPTCHA sitekey="6LeZWH0pAAAAAAAlOpzajsLLpV5A2mqlRw47WNNY" onChange={onChange} />;
};

export default Recaptcha;