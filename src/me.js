import image from "./assets/images/landing-page.jpg";
import article1 from "./assets/images/flu-shot-and-vaccine.jpeg";
import article2 from "./assets/images/netflix.jpeg";
import article3 from "./assets/images/gaming.jpeg";

export default {
  name: {
    normal: "Bennett K. Bett",
    caps: "BENNETT",
  },
  whoAmI: ["Writer.", "Editor.", "Content and SEO Strategist."],
  projects: [
    {
      id: 1,
      title: "The Difference Between A Flu Shot And A Vaccine?",
      image: article1,
      description:
        "Should I get one? Is it safe? Over the years, there has been controversy surrounding vaccines. How were they made, whether or not they are effective against the disease? More so, the last year emphasizes the need for clarity on this issue ...",
      url:
        "https://www.linkedin.com/pulse/difference-between-flu-shot-vaccine-bennett-bett/?trackingId=LeSbEkCBTPug0GEYTkUOGw%3D%3D",
    },
    {
      id: 2,
      title: "Netflix Is Getting More Expensive. Is It Still Worth It?",
      image: article2,
      description:
        "This decade is characterized by a simple statement Netflix. With an explosive rise in high-quality tv shows, movies, and a binging culture. Netflix has taken over our homes, quickly becoming an industry standard. But with a sharp rise in its monthly plans, inconvenient streaming options, is it still worth it?",
      url:
        "https://www.linkedin.com/pulse/netflix-getting-more-expensive-still-worth-bennett-bett/?trackingId=eDiHi0tcSZqzynVIBVuGAA%3D%3D",
    },
    {
      id: 3,
      title: "What Is The Future Of Gaming Consoles?",
      image: article3,
      description:
        "Re-IMAGINE THE FUTURE! Where are we going? Click, click, click, is the sound we are all accustomed to by now. The gaming industry has been growing steadily over the last ten years, with 2.7 billion gamers worldwide active on various platforms. Regardless of which platform you prefer, things are changing.",
      url:
        "https://www.linkedin.com/pulse/what-future-gaming-consoles-bennett-bett/?trackingId=Sf%2BecZXrTayBGR2vJWYNzw%3D%3D",
    },
  ],
  socials: {
    twitter: {
      icon: "twitter",
      url: "https://twitter.com/bett_bennett",
      title: "Twitter",
      image,
      handle: "bett_bennett",
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
