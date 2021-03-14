import image from "./assets/images/landing-page.jpg";
import neoUiImage from "./assets/images/neo-ui.png";

export default {
  name: {
    normal: "Bennett Bett",
    caps: "BENNETT",
  },
  whoAmI: ["Writer."],
  projects: [
    {
      id: 1,
      title: "Neo UI",
      image: neoUiImage,
      description:
        "This is a collection of React UI components personally developed. The documentation is maintained using the storybook documentation library.",
      url: "https://neo-ui-react.netlify.com",
    },
  ],
  socials: {
    twitter: {
      icon: "twitter",
      url: "https://twitter.com/bennett_bett",
      title: "Twitter",
      image,
      handle: "bennett_bett",
    },
    facebook: {
      icon: "facebook",
      url: "https://www.facebook.com/bennett.k.bett",
      title: "Facebook",
      image,
      handle: "bennett.k.bett",
    },
    linkedin: {
      icon: "linkedin",
      url: "https://linkedin.com/in/bennett-k-bett",
      title: "LinkedIn",
      image,
      handle: "bennett-k-bett",
    },
  },
};
