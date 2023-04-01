function News({ articles }){
    return (
        <>
            <h1>List of News</h1>
            {
                articles.map(article => {
                    return(
                        <div key={article.id}>
                            <span>User ID: {article.userId}</span>
                            <h2>{article.id} {article.title}</h2>
                            <hr></hr>
                        </div>
                    )
                })
            }
        </>
    )
}

export default News

export async function getServerSideProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()

    return{
        props: {
            articles: data,
        }
    }
}