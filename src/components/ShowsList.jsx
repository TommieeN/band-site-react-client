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
    <div>
      <h2 className="font-medium text-[1.5rem] p-[1rem] pb-0">Shows</h2>
      <ul>
        {shows.map((show) => {
          return (
            <li className="border-b p-[1rem] text-[0.8rem]" key={show.id}>
              <div className="py-[1rem]">
                <h3 className="shows-text">DATE</h3>
                <p className="text-[0.8rem] font-semibold">
                  {showsTimeStampConverter(show.date)}
                </p>
              </div>
              <div className="pb-[1rem]">
                <h3 className="shows-text">VENUE</h3>
                <p>{show.place}</p>
              </div>
              <div className="pb-[1rem]">
                <h3 className="shows-text">LOCATION</h3>
                <p>{show.location}</p>
              </div>
              <div className="flex">
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
