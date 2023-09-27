function Profile (props) {
    return (
        <>
            <h2>Hello User</h2>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </>
    );
}

export default Profile;