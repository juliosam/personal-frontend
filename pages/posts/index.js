import PostPreview from "../../components/postPreview"


const Posts = ({posts}) => {
  console.log(posts)
  return (
    <>
      <ul className="pt-5">
       {posts.map(post => {
        return (
          <li key={post.id}>
            <PostPreview post={post}/>
          </li>
        )
        })}
      </ul>
    </>
  )
}
export default Posts

export const getStaticProps = async () =>{
  const res = await fetch("http://localhost:1337/api/posts");
  const json = await res.json();
  return{
    props:{
      posts: json.data
    }
  }
}
