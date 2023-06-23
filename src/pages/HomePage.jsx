import CommentForm from "../components/CommentForm"
import Gallery from "../components/Gallery"
import Musicians from "../components/Musicians"

const HomePage = () => {
  return (
    <div>
      <Musicians />
      <Gallery />
      <CommentForm />
    </div>
  )
}

export default HomePage