import React, { useState, useEffect } from "react";
import SlidingPage from "../../components/slidingPage/slidingPage";
import Facebook from "./contacts/facebookSection";
import Twitter from "./contacts/twitterSection";
import LinkedIn from "./contacts/linkedInSection";
import ContactPageContext from "./contactPageContext";
import { setPageTitle } from "../../utilities/helpers";

import "./contactPage.scss";

const ContactPage = () => {
  const [store, setStore] = useState({ selectedContact: null });

  const setSelectedContact = selectedContact => setStore({ ...store, selectedContact });

  useEffect(() => {
    setPageTitle("Contact");
  }, []);

  return (
    <ContactPageContext.Provider value={{ ...store, setSelectedContact }}>
      <SlidingPage
        className={`contact-page ${
          store.selectedContact ? "contact-page--selected" : ""
        }`}
      >
        <div className="contact-page__header"></div>
        <div className="contact-page__contacts">
          <Facebook index={1} />
          <LinkedIn index={2} />
          <Twitter index={3} />
        </div>
      </SlidingPage>
    </ContactPageContext.Provider>
  );
};

export default ContactPage;
