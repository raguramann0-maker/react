import Sidebar from "../components/Sidebar";

function Contact() {

  return (
    <div className="container">

      <Sidebar />

      <div className="contact">

        <h1>Contact Us</h1>

        <input type="text" placeholder="Name" />
        <br />
        <input type="email" placeholder="Email" />
        <br />
        <textarea placeholder="Message"></textarea>
        <br />

        <button>Send</button>

      </div>

    </div>
  );
}

export default Contact;