function Contacts() {
  return (
    <>
      <div className="container-fluid bg-black">
        <h1 className="text-white fw-bold fs-1 text-center p-3">CONTACT ME</h1>
        <div className="row p-5">
          <div className="col-md-6">
            <form className="">
              <input
                type="text"
                class="form-control bg-secondary border-0"
                placeholder="Name..."
              ></input>

              <input
                type="number"
                class="form-control mt-3 mb-3 bg-secondary border-0"
                placeholder="Phone..."
              ></input>

              <textarea
                class="form-control border-0 mb-3 bg-secondary"
                placeholder="Text..."
              ></textarea>

              <input
                type="submit"
                value="Send Message"
                class="btn btn-primary border-0"
              ></input>
            </form>
          </div>
          <div className="col-md-6 ps-5">
            <h5 className="text-secondary">Location:</h5>
            <p className="text-white ms-3">- Nairobi, Kenya</p>

            <h5 className="text-secondary">Phone:</h5>
            <p className="text-white ms-3"> +254 712345678</p>

            <h5 className="text-secondary">Email:</h5>
            <p className="text-white ms-3">- info@gmail.com</p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510564.65107988653!2d36.5177334104462!3d-1.3031873859975642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1696236531897!5m2!1sen!2ske"
          width="100%"
          height="650"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
export default Contacts;
