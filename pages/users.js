
import User from "@/components/user"

// posts will be populated at build time by getStaticProps()
function UserList({ users }) {
    return (
        <>
            <h1>List of Users</h1>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <User user={user}/>
                    </div>
                )
            })}

        </>
    )
  }
  
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries.
  export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        users: data,
      },
    }
  }
  
  export default UserList