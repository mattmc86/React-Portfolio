import React from "react";
import GitHub from "../assets/contactImages/gitHub.png"
import Linkedin from "../assets/contactImages/linkedin.png";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer({ currentPage }) {
  return (
    <div>
      <footer>
        <br></br>
        <br></br>
        <p> this is a footer</p>
        <a href="https://github.com/mattmc86" target="blank">
          <img src={GitHub}></img>
        </a>
        <a
          href="https://www.linkedin.com/in/matthew-mckenna-aa7b29152?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3zzWqHs9QZ2gTBoPpPV%2F8w%3D%3D"
          target="blank"
        >
          <img src={Linkedin}></img>
        </a>
      </footer>
    </div>
  );
}

export default Footer;
