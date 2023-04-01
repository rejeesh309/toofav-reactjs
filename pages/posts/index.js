import Link from "next/link"

function ListPosts({posts}){
    return(
        <>
            <h1>List Of Posts</h1>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <Link href={`posts/${post.id}`} passHref>
                            <h3>{post.id} {post.title}</h3>
                        </Link>
                        {/* <hr></hr> */}
                    </div>
                )
            })}
        </>
    )
}

export default ListPosts

export async function getStaticProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()

    return{
        props:{
            posts: data
            // posts: data.slice(0, 5)
        },
        revalidate: 10
    }
}