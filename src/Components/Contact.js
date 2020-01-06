import React from 'react';

export default class Contact extends React.Component {
   constructor(props) {
     super(props);
     this.submitForm = this.submitForm.bind(this);
     this.state = {
       status: ""
     };
   }

   render() {
     const { status } = this.state;
     return (
      <section class="contact">
       <form
         onSubmit={this.submitForm}
         action="https://formspree.io/myykylgq"
         method="POST"
       >
          <br></br> 
         <h3>Use this contact form to reach out and I will get back to you as soon as possible!</h3>
         <br></br>
         <div class='inputWrapper'>
            <label>Email:</label>
            </div>
            <div class='inputWrapper'>
            <input class="email" type="email" name="email" />
            </div>
            <div class='inputWrapper'>
            <label>Message:</label>
            </div>
            <div class='inputWrapper'>
            <input class="message" type="text" name="message" />
            </div>
         <div class="inputButton">
         {status === "SUCCESS" ? <p>Success! I will get back to you soon!</p> : <button>Submit</button>}
         {status === "ERROR" && <p>Ooops! There was an error. Try submitting the form again or reaching out to me directly at Contact@samkautz.com</p>}
         </div>
         </form>
       </section>
     );
   }
 
   submitForm(ev) {
     ev.preventDefault();
     const form = ev.target;
     const data = new FormData(form);
     const xhr = new XMLHttpRequest();
     xhr.open(form.method, form.action);
     xhr.setRequestHeader("Accept", "application/json");
     xhr.onreadystatechange = () => {
       if (xhr.readyState !== XMLHttpRequest.DONE) return;
       if (xhr.status === 200) {
         form.reset();
         this.setState({ status: "SUCCESS" });
       } else {
         this.setState({ status: "ERROR" });
       }
     };
     xhr.send(data);
   }
 }