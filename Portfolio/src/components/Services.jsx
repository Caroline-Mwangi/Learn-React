function Services() {
  return (
    <>
      <div className="container-fluid bg-black">
        <h1 className="text-white fw-bold fs-1 text-center p-5">SERVICES</h1>
        <div className="row">
          <div className="col-md-4">
            <div class="card bg-black p-5 hover-zoom">
              <img src="services.jpg" class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title text-white fs-3">Service 1</h5>
                <p class="card-text text-secondary fs-4 mt-4 mb-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="link-offset-2">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div class="card bg-black p-5">
              <img src="services.jpg" class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title text-white fs-3">Service 2</h5>
                <p class="card-text text-secondary fs-4 mt-4 mb-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="link-offset-2">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div class="card bg-black p-5">
              <img src="services.jpg" class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title text-white fs-3">Service 3</h5>
                <p class="card-text text-secondary fs-4 mt-4 mb-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="link-offset-2">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
