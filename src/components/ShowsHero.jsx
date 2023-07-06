const ShowsHero = () => {
  return (
    <div className="h-[45vh] bg-hero-shows hero">
      <div className="p-[1rem]">
        <p className="py-[1rem] text-[0.85rem] text-primary-light">Beautiful Beasts Album</p>
        <h1 className="text-[1.6rem] font-semibold text-primary-light">Queen of Yellow X For The Stings</h1>
      </div>
      <div className="px-[1rem]">
      <iframe
        width="100%"
        height="100"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/189364275&color=%23352c26&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      </div>
    </div>
  );
};

export default ShowsHero;
