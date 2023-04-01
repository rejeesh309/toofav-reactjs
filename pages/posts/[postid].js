import { useRouter } from 'next/router';

function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.id} {post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export async function getStaticPaths() {
  // Fetch data from an external API
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  // Generate paths based on the `postid` parameter
  const paths = posts.map(post => ({
    params: { postid: `${post.id}` }
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  // Fetch data for a single post based on the `postid` parameter
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postid}`
  );
  const post = await res.json();

  if(!post.id){
    return{
        notFound: true
    }
  }

  return { props: { post }, 
  revalidate: 10  };
}

export default Post;
