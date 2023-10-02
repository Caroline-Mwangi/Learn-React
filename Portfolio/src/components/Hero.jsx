function Hero() {
  return (
    <>
      <div className="container-fluid p-0 position-relative">
        <p className="z-1 position-absolute text-white text-center start-50 top-50 translate-middle fs-1 fw-bold">
          CAROLINE MWANGI <br></br>{" "}
          <span className="text-secondary fs-5 font-monospace">
            Software Engineer
          </span>
        </p>
        <div className="z-0 position-absolute bg-success bg-black bg-opacity-75 w-100 h-100"></div>
        <img src="image.png" className="img-responsive w-100 z-2"></img>
      </div>
    </>
  );
}

export default Hero;
