function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
        <div class="container-fluid bg-black">
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
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link active text-secondary"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-secondary" href="about/">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-secondary" href="services/">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-secondary" href="contacts/">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
