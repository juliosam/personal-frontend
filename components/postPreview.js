import Link from "next/link"

const PostPreview = ({post}) => {
  return (
    <Link href={`/posts/${post.id}`}>  
      <div className="px-10 py-3 mx-44 my-6 border-solid border-2 border-indigo-300 rounded-md test">
        <h3 className="text-xl">{post.attributes.title}</h3>
        <p>{post.attributes.description}</p>
      </div>
    </Link>
  )
}

export default PostPreview
