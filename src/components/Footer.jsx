import logos from "../assets/icons/index.js";

const Footer = () => {
  return (
    <footer className="px-[1rem] mt-[1rem] bg-primary-dark text-primary-light text-[0.8rem] md:px-[2rem]">
      <div className="md:flex md:items-center md:justify-between md:gap-[1rem]">
        <h2 className="py-[1rem] text-[1.5rem] font-normal md:text-[2.5rem] md:w-[33%]">Get in Touch</h2>
        <section className="flex gap-[2rem] md:w-[50%]">
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
          <img className="hidden md:block" src={logos.bandsite} alt="bandsite-logo" />
        </a>
      </div>
      <div className="md:flex">
        <section className="py-4 md:p-0">
          <div className="font-semibold my-[1rem]">
            <h4>Cam Adams</h4>
            <h4>The Bees Knees Management</h4>
          </div>
          <div className="mb-[1rem]">
            <p>503 Broadway Penthouse,</p>
            <p>New York, NY 10012, USA</p>
          </div>
          <p>info@thebeesknees.com</p>
        </section>
        <section>
          <div className="font-semibold my-[1rem]">
            <h4>Pearl Gregg</h4>
            <h4>Limitless Artist Group</h4>
          </div>
          <div className="mb-[1rem]">
            <p>Booking Agent for</p>
            <p>US / South America / Japan</p>
          </div>
          <p>pearl.gregg@limitlessag.com</p>
        </section>
        <section>
          <div className="font-semibold my-[1rem]">
            <h4>Carson Whyte</h4>
            <h4>ARCH Entertainment</h4>
          </div>
          <div className="mb-[1rem]">
            <p>Booking Agent for</p>
            <p>UK / EU / AU</p>
          </div>
          <p className="mb-[4rem]">cwhyte@archentertainment.com</p>
        </section>
      </div>
      <a href="#">
        <img className="md:hidden" src={logos.bandsite} alt="bandsite-logo" />
      </a>
      <p className="text-[0.65rem] py-[1rem]">Copyright The Bees Knees © 2021 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
