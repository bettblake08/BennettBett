import React from "react";
import ContactSection from "../contactSection";
import Profile from "../../../me";

export default ({ index }) => {
  return (
    <ContactSection {...Profile.socials.github} index={index}>
    </ContactSection>
  );
};
