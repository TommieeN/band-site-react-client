import axios from "axios";
import { showsTimeStampConverter } from "../utilities/timeConverter";
import { useEffect, useState } from "react";

const ShowsList = () => {
  const [shows, setShows] = useState([]);
  const url = "http://localhost:8081/shows";

  useEffect(() => {
    axios.get(url).then((response) => {
      setShows(response.data);
    });
  }, []);

  return (
    <div className="md:px-[1.5rem] lg:ml-[5.5rem]">
      <div className="lg:flex lg:flex-1">
        <h2 className="font-medium text-[1.5rem] p-[1rem] pb-0 md:text-[2rem] md:font-semibold md:py-[2rem] lg:w-[23%]">
          Shows
        </h2>
        <div className="hidden md:flex md:justify-start md:px-[1rem] md:text-silver md:text-[0.7rem] md:font-semibold lg:w-[68%] lg:p-0 lg:items-center">
          <p className="md:w-[25%]">DATE</p>
          <p className="md:w-[25%]">VENUE</p>
          <p className="md:w-[25%]">LOCATION</p>
        </div>
      </div>
      <ul className="lg:ml-[15.5rem] lg:mr-[5rem]">
        {shows.map((show) => {
          return (
            <li
              className="border-b p-[1rem] text-[0.8rem] md:flex md:justify-around md:items-center md:flex-1 lg:pl-[1rem]"
              key={show.id}
            >
              <div className="py-[1rem] md:w-[25%]">
                <h3 className="shows-text">DATE</h3>
                <p className="text-[0.8rem] font-semibold">
                  {showsTimeStampConverter(show.date)}
                </p>
              </div>
              <div className="pb-[1rem] md:p-0 md:w-[25%]">
                <h3 className="shows-text">VENUE</h3>
                <p>{show.place}</p>
              </div>
              <div className="pb-[1rem] md:p-0 md:w-[25%]">
                <h3 className="shows-text">LOCATION</h3>
                <p>{show.location}</p>
              </div>
              <div className="flex md:w-[25%]">
                <button className="font-medium text-[1rem] w-[100%] p-[0.7rem] rounded bg-primary-dark text-primary-light">
                  BUY TICKETS
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShowsList;
