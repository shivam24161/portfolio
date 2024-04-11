import React, { useRef, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import "./contacts.scss";

const Contacts = () => {
  const form = useRef();
  const [msgSend, setMsgSend] = useState(false);

  const sendEmail = (e) => {
    setMsgSend(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jgiiqew",
        "template_nkddjhg",
        form.current,
        "N3KuNFnrG46zOYrKE"
      )
      .then(
        (res) => {
          setMsgSend(false);
          console.log("message sent");
          toast.success("Message Sent", {
            style: { minWidth: "200px", fontSize: "18px", fontWeight: "bold" },
          });
        },
        (err) => {
          setMsgSend(false);
          console.log("FAILED...", err.text);
          toast.error("something went wrong", {
            style: { minWidth: "200px", fontSize: "18px", fontWeight: "bold" },
          });
        }
      );
    e.target.reset();
  };

  return (
    <section id="contacts">
      <h2 className="text-size-24">Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" size={24} />
            <h4 className="text-size-14">Email</h4>
            <h5 className="text-size-10">shivam24161@gmail.com</h5>
            <a href="mailto:shivam24161@gmail.com" className="text-size-10">
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Full Name"
            required
          />{" "}
          {/* client side validation */}
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
           {msgSend ? "Sending...":"Send Message"}
          </button>
        </form>
      </div>
      <Toaster />
    </section>
  );
};

export default Contacts;
