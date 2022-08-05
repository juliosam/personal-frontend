import MarkdownIt from 'markdown-it/lib'
import ReactMarkdown from "react-markdown"

//dangerouslySetInnerHTML={{__html:htmlContent}}

const SinglePost = ({post}) => {
  //const md = new MarkdownIt();
  //const htmlContent = md.render(post.attributes.content)
  console.log(post)
  return (
    <article className='py-16 px-36'>
      <h1 className='text-3xl mb-5'>{post.attributes.title}</h1>
      <p className='text-xl my-5'>{post.attributes.description}</p>
      <section className='text-lg' >
        <ReactMarkdown source={post.attributes.content}  />
      </section>
    </article>
  )
}
export default SinglePost

export const getStaticProps = async ({params}) =>{

  const res = await fetch(`http://localhost:1337/api/posts/${params.id}`);
  const json = await res.json();
  return{
    props:{
      post: json.data
    }
  }
}

export const getStaticPaths = async () =>{

  const res = await fetch("http://localhost:1337/api/posts");
  const json = await res.json();

  const paths = json.data.map((post)=>{
    return{ params: {id: post.id.toString()}}
  })
  return{
    paths, 
    fallback: false,
    }
  }

