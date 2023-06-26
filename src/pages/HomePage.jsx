import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Musicians from "../components/Musicians";

const HomePage = () => {
  return (
    <div>
      <Musicians />
      <Gallery />
      <CommentForm />
      <CommentList />
      <Footer />
    </div>
  );
};

export default HomePage;
