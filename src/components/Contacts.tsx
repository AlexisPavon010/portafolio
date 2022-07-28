const CV_URL = 'https://export-download.canva.com/9vepk/DAEKlv9vepk/200/0/0001-31701518471.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20220728%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220728T063207Z&X-Amz-Expires=38150&X-Amz-Signature=673752168fb28b8a3d422a31bcf50bd898662031ba859f19112a2c4f0f8aa198&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Alexis%2520Pavon.png&response-expires=Thu%2C%2028%20Jul%202022%2017%3A07%3A57%20GMT'


export const Contacts = () => {
  return (
    <section id="contact" className="contact">
      <h3><span className="contact-highlight">Let's MAGIC!</span></h3>
      <div className="social">
        <a href="https://www.linkedin.com/in/alexispavon010/" className="social-link linkedin"></a>
        <a href="https://www.instagram.com/alexispavon010/" className="social-link instagram"></a>
        <a href="https://github.com/AlexisPavon010/" className="social-link github"></a>
        <a href='mailto:themaster034@gmail.com' className="social-link email" target='blank'></a>
        <a href={CV_URL} className="social-link cv" target='blank'></a>
      </div>
    </section >
  )
}
