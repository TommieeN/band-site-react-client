const timeStampConverter = function (timeStamp) {
    const timeDisplay = new Date(timeStamp);
  
    //convert date to use this format of time mm/dd/year
    const dateformat = {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    };
    const newTimeDisplay = timeDisplay.toLocaleDateString("en-US", dateformat);
    return newTimeDisplay;
  };

const showsTimeStampConverter = function (timeStamp) {
    const timeDisplay = new Date(timeStamp);
  
    //convert date to use this format of time mm/dd/year
    const dateformat = {
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
    };
    const newTimeDisplay = timeDisplay.toLocaleDateString("en-US", dateformat);
    return newTimeDisplay;
  };

  export {timeStampConverter, showsTimeStampConverter}