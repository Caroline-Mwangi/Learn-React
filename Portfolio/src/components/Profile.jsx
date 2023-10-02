function Profile() {
  return (
    <>
      <div className="container-fluid bg-black">
        <div className="row">
          <div className="col-md-6 p-5 text-start">
            <h1 className="text-white fw-bold fs-1">ABOUT ME</h1>
            <p className="text-secondary mt-5 mb-4 fs-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias atque autem facilis ea beatae dolorem, quo minus et est
              veritatis incidunt eaque officia perferendis laboriosam vero
              deserunt fugiat culpa optio. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Maiores quod quibusdam reprehenderit
              adipisci harum porro, tempora reiciendis optio fugit?
            </p>
            <a href="about/" className="link-offset-2 fs-5">
              READ MORE
            </a>
          </div>
          <div className="col-md-6 p-5 text-center">
            <img
              src="profile.jpg"
              width="500"
              height="500"
              className="img-responsive rounded"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
