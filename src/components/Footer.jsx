import logos from "../assets/icons/index.js";

const Footer = () => {
  return (
    <footer className="px-[1rem] mt-[1rem] bg-primary-dark text-primary-light">
      <div>
        <h2 className="py-[1rem] text-[1.5rem] font-normal">Get in Touch</h2>
        <section className="flex gap-[2rem]">
          <a href="https://www.instagram.com/">
            <img src={logos.instagram} alt="instagram" />
          </a>
          <a href="https://www.facebook.com/">
            <img src={logos.facebook} alt="facebook" />
          </a>
          <a href="https://www.twitter.com/">
            <img src={logos.twitter} alt="twitter" />
          </a>
        </section>
        <a>
          <img className="hidden" src={logos.bandsite} alt="bandsite-logo" />
        </a>
      </div>
      <div>
        <section className="py-4">
          <div className="">
            <h4>Cam Adams</h4>
            <h4>The Bees Knees Management</h4>
          </div>
          <div>
            <p>503 Broadway Penthouse,</p>
            <p>New York, NY 10012, USA</p>
          </div>
          <p>info@thebeesknees.com</p>
        </section>
        <section>
          <div>
            <h4>Pearl Gregg</h4>
            <h4>Limitless Artist Group</h4>
          </div>
          <div>
            <p>Booking Agent for</p>
            <p>US / South America / Japan</p>
          </div>
          <p>pearl.gregg@limitlessag.com</p>
        </section>
        <section>
          <div>
            <h4>Carson Whyte</h4>
            <h4>ARCH Entertainment</h4>
          </div>
          <div>
            <p>Booking Agent for</p>
            <p>UK / EU / AU</p>
          </div>
          <p>cwhyte@archentertainment.com</p>
        </section>
      </div>
      <a>
        <img src={logos.bandsite} alt="bandsite-logo" />
      </a>
      <p>Copyright The Bees Knees © 2021 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
