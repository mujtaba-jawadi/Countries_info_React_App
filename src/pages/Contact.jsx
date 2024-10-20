export const Contact = () => {

  const handleFormSubmit = (formData)=>{
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData)

  }


  return (
    <section className="contact-section">
      <div className="container">
      <h2 className="container-title">Contact Us</h2>
        <form action={handleFormSubmit}>
          <input
            type="text"
            name="username"
            required
            placeholder="Enter your name"
            className="form-control"
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            placeholder="Enter your Email"
            className="form-control"
          />
          <textarea name="message" required rows="10" placeholder="Write to US..." autoComplete="off" className="form-control"></textarea>
          <button type="submit" value="send" className="form-btn">Send</button>
        </form>
      </div>
    </section>
  );
};
