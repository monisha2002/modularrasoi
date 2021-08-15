import React, { Component } from "react";
import emailjs from "emailjs-com";

export default class form extends Component {
  render() {
    function sendEmail(e) {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_c8m8pxh",
          "template_6239rcu",
          e.target,
          "user_aov3VWUPOrlJPJ76PF6VT"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    return (
      <div>
        <h1>Contact Form</h1>
        <form onSubmit={sendEmail}>
          <label>name</label>
          <input type="text" name="name"></input>
          <label>Email</label>
          <input type="email" name="user_email"></input>
          <label>Message</label>
          <textarea name="message" rows="4"></textarea>
          <input type="submit" value="Send"></input>
        </form>
      </div>
    );
  }
}
