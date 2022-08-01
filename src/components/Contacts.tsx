const CV_URL = 'https://www.canva.com/design/DAEKlv9vepk/5O5dai-_IYcdm9qAIsSmOA/view?utm_content=DAEKlv9vepk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'


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
