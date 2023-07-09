import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Musicians from "../components/Musicians";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";


const HomePage = () => {
  return (
    <div>
      <Hero />
      <Musicians />
      <Gallery />
      <CommentForm />
      <CommentList />
    </div>
  );
};

export default HomePage;
