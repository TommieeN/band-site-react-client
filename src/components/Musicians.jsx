import BandLogo from "../assets/images/band.jpg";

const Musicians = () => {
  return (
    <div>
      <div className="p-4">
        <h2 className="pb-2 text-[1.5rem] font-medium text-primary-dark md:text-[2.4rem] md:px-[1.6rem]">
          About the Musicians
        </h2>
        <img className="md:px-[5rem] md:py-[1rem]" src={BandLogo} />
      </div>
      <section>
        <p className="text-[0.85rem] leading-6 font-semibold text-primary-dark px-4 md:text-[1.4rem] md:font-medium md:leading-[2rem] md:px-[6rem] ">
          "We push each other to be the best. It's not uncommon for one of us to
          say 'this needs to be better, back to the drawing board'
        </p>
        <p className="text-[0.85rem] leading-6 font-semibold text-primary-dark px-4 md:px-[6rem] md:py-[1rem]">
          - Bryan Teddy, lead vocalist of The Bees Knees
        </p>
        <div className="p-4 md:px-[6rem]">
          <h2 className="pb-3 font-normal md:text-[1.5rem] md:font-medium">The Bees Knees</h2>
          <div className="flex flex-col gap-4 font-light md:flex md:flex-row md:gap-[2rem]">
            <p className="text-[0.8rem]">
              The Bees Knees is a pop rock band originating from San Francisco,
              California. The band consists of lead vocalist Bryan Teddy,
              guitarist Mack Tolkens, guitarist Andrew Green, bassist Kent
              Zulkee and drummer Freddie Fischer. The band achieved its first
              commercial success as an unsigned act, drawing attention from
              manager Cam Adams. Having worked with other popular acts (The
              Elephant In The Room, One Trick Pony, The Cat’s Meow), Adams was
              confident the band could succeed even further, pushing them to
              sign with Magenta Records.{" "}
            </p>
            <p className="text-[0.8rem]">
              From there, the band has soared, gaining international recognition
              and ranking in the top 10 on the Poster Charts. New fans
              immediately fell in love with the band’s original and organic
              attitude, solidifying their place as one of the hottest and
              fastest up and coming acts of this century. Fans affectionately
              refer to themselves as “The Hive” and are drawn to their candid
              and authentic performances on stage. Looking forward to touring in
              the future, The Bees Knees are currently recording their second
              studio album, looking to be released in late 2021.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Musicians;
