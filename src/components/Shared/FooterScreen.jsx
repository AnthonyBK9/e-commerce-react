import './styles/footerScreen.css'

const FooterScreen = () => {
  return (
    <footer className="footer">
      <p className='footer__text'>&copy; Academlo 2022 Created by Antonio Bermúdez</p>
      <div className="social-buttons">
        <a href="https://www.facebook.com/AnthonyBK09/" className="social-buttons__button social-button social-button--facebook" aria-label="Facebook" target="_blank">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.linkedin.com/in/jes%C3%BAs-antonio-berm%C3%BAdez-orozco-b4043a1a3/" className="social-buttons__button social-button social-button--linkedin" aria-label="LinkedIn" target="_blank">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/AnthonyBK9" className="social-buttons__button social-button social-button--github" aria-label="GitHub" target="_blank">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default FooterScreen;
