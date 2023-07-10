import axios from "axios";
import avatar from "../assets/images/Mohan-muruge.jpg";
import { timeStampConverter } from "../utilities/timeConverter";

import { useState, useEffect } from "react";

const api = "http://localhost:8081/";

const CommentList = () => {

  const [commentList, setCommentList] = useState([]);

  // GET THE COMMENTS FROM THE API & SORT THEM BY TIMESTAMP
  useEffect(() => {
    axios.get(`${api}comments`).then((response) => {
      const comments = response.data;
      setCommentList(comments);
          comments.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });
    });
  }, [commentList]);


  return (
    <ul>
      {commentList &&
        commentList.map((commentItem) => {
          return (
            <li className="flex mx-4 border-secondary-light border-b-[1px] first:border-t-[1px] md:mx-[5.6rem] md:py-[1rem] md:pl-[0.4rem]" key={commentItem.id}>
              <img className="avatarStyle mt-[1.3rem] md:w-[3rem] md:h-[3rem]" src={avatar} alt="user-avatar" />
              <div className="w-[100%] flex flex-col py-2">
                <div className="flex justify-between py-2 text-[0.8rem]">
                  <p>{commentItem.name}</p>
                  <p className="text-silver font-light">{timeStampConverter(commentItem.timestamp)}</p>
                </div>
                <div>
                  <p className="text-[0.8rem] font-light md:leading-[1.3rem]">{commentItem.comment}</p>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default CommentList;
