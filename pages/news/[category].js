function ArticleListByCategory({ articles, category}){
    return (
        <>
            <h2>Showing news for category <i>{category}</i></h2>
            {
                articles.map((article) => {
                    return(
                        <div key={article.id}>
                            <h1>{article.id} {article.title}</h1>
                            <p>{article.body}</p>
                            <hr></hr>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ArticleListByCategory

export async function getServerSideProps(context){
    const {params} = context
    const {category} = params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${category}`)
    const data = await res.json()

    return{
        props:{
            articles: data,
            category
        }
    }
}