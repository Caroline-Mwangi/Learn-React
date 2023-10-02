function Footer() {
  return (
    <>
      <footer class="navbar navbar-expand-lg bg-body-tertiary p-0">
        <div class="container-fluid bg-black p-5">
          <img
            src="../logo.jpg"
            width="40"
            height="40"
            className="img-responsive p-1 rounded-5"
          ></img>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse d-flex justify-content-center"
            id="navbarNav"
          >
            <p className="text-secondary mt-2">
              <i class="fa-regular fa-copyright"></i> 2023, Potfolio
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
