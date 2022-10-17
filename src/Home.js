import BlogList from "./Bloglist";
import useFetch from "./usefetch";

const Home = () => {
const {data:blogs, isPending, error} = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div className="home">
    {error && <div>{error}</div>}
    {isPending && <div>Loading...</div>}
    {blogs &&  <BlogList blogs={blogs} title='All Blogs'/>}

 
    </div>
  );
}
 
export default Home;
