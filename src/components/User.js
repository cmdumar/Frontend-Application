function User({ user }) {
  return (
    <div className="user-info">
      <div className="user-data">
        <img src={user?.profilePicture} alt="Profile" />
        <p>{`${user && user.firstName} ${user && user.lastName}`}</p>
      </div>
      <div className="map">
        map
      </div>
    </div>
  );
}

export default User;
