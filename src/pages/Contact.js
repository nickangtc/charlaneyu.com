import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="container px-40 py-10">
      <h1>Contact me</h1>

      <p>
        The best way to contact me is through a direct message on Instagram.{" "}
        <a
          href="https://www.instagram.com/charlane_yu/"
          alt="link to @charlane_yu Instagram profile"
        >
          Click here
        </a>{" "}
        to find my profile and send me a message.
      </p>
      <p>
        Note: If I have trips planned to certain cities for weddings, I will
        always add them to my Instagram bio. So check that out first if you're
        planning to engage me for a wedding/photoshoot in another city!
      </p>
    </div>
  );
}

export default Contact;
