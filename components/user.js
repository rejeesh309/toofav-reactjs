function User({ user }){
    return (
        <>
            <span>{user.id}</span>
            <h4>{user.name}</h4>
            <p>{user.email}</p>
            <p>{user.address.street}</p>
            <p>{user.address.zipcode}</p>
        </>
        )
}

export default User