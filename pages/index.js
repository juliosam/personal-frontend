import Header from "../components/header";
import HomeLatestPosts from "../components/homeLatestPosts";

const Home = ({posts}) => {
  
  return (
    <div>
      <Header/>
      <h2 className="text-2xl ml-36">Latest Posts</h2>
      <HomeLatestPosts posts={posts}/>
    </div>
  )
}
export default Home

export const getStaticProps = async () =>{
  const res = await fetch("http://localhost:1337/api/posts");
  const json = await res.json();
  return{
    props:{
      posts: json.data
    }
  }
}
