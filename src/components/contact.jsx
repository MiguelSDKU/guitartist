import "./contact.css";
import { useState } from "react";

function Contact() {
  const [contact, setContact] = useState({
    u_name: "",
    email: "",
    message: "",
  });

  function handleContact(e) {
    const text = e.target.value;
    const name = e.target.name;
    console.log(name, text);

    //copy,modify the copy, set the copy
    const copy = { ...contact };
    copy[name] = text;

    setContact(copy);
  }

  function saveContact() {
    console.log(contact);
  }

  return (
    <div className="contactw">
      <h1 className="h1color">Contact Us!</h1>
      <div className="contact-form">
        {" "}
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label labelz">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            onChange={handleContact}
            name="u-name"
          ></input>
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label labelz">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="formGroupExampleInput2"
            onChange={handleContact}
            name="email"
          ></input>
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label labelz">
            Message
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            onChange={handleContact}
            name="message"
          ></input>
        </div>
        <button onClick={saveContact}>Send</button>
      </div>
    </div>
  );
}

export default Contact;
