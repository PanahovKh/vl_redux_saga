import FetchedPosts from "./components/FetchedPosts";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

function App() {
  return (
    <div className="container pt-3">
      <div className='row'>
        <div className='col'>
          <PostForm />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h2>Синхронные Посты</h2>
          <Posts />
        </div>
        <div className='col'>
        <h2>Асинхронные Посты</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
