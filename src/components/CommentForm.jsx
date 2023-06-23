import Avatar from "../assets/images/Mohan-muruge.jpg";

const CommentForm = () => {
  return (
    <section className="p-4">
      <h2 className="text-primary-dark text-[1.5rem] font-medium pb-4">
        Join the Conversation
      </h2>
      <div className="flex">
        <img
          className="w-[2.2rem] h-[2.2rem] rounded-full object-cover object-left mr-3 mt-6"
          src={Avatar}
          alt="user-avatar"
        />
        <form className="flex flex-col w-full">
          <div className="flex flex-col">
            <label className="text-[0.7rem] text-silver" for="name">
              NAME
            </label>
            <input
              className="mb-[1rem] mt-[0.5rem] p-[0.5rem] text-[0.8rem]
               placeholder-primary-dark bg-tertiary-light border border-secondary-light 
               rounded-[4px] font-light"
              placeholder="Enter your name"
              type="text"
              name="name"
            />
          </div>
          <label className="text-[0.7rem] text-silver">COMMENT</label>
          <textarea
            className=" my-[0.5rem] p-[0.5rem] text-[0.8rem] 
            placeholder-primary-dark bg-tertiary-light border border-secondary-light 
            rounded-[4px] font-light"
            placeholder="Add a new comment"
            name="comment"
            id="comment"
            cols="30"
            rows="5"
          ></textarea>
          <button className="bg-primary-dark rounded-[4px] text-primary-light p-2 my-2">
            COMMENT
          </button>
        </form>
      </div>
      {/* COMMENT LIST HERE MAYBE */}
    </section>
  );
};

export default CommentForm;
