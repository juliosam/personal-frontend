import { useEffect, useState } from "react"
import PostPreview from "./postPreview";

const HomeLatestPosts = ({posts}) => {
  const [latestPosts, setLatestPosts] = useState([])

  useEffect(() => {
    setLatestPosts( posts.slice(0, 3))
  },[posts]);

  return (
    <ul className="mt-5 ">
      { latestPosts.map(post => {
        return (
          <li key={post.id}>
            <PostPreview post={post}/>
          </li>
        )
      })}
    </ul>
  )
}

export default HomeLatestPosts
