const CV_URL = 'https://export-download.canva.com/9vepk/DAEKlv9vepk/200/0-31702953977.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20220728%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220728T003607Z&X-Amz-Expires=63184&X-Amz-Signature=e8a95935128caa4bfc4d09ffbdf95c1546c8ffe3d6fbca018d7e53bd2e927104&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Alexis%2520Pavon.pdf&response-expires=Thu%2C%2028%20Jul%202022%2018%3A09%3A11%20GMT'


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
