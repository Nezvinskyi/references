import gitLogo from './git.png';

const Footer = () => {
  return (
    <footer className="container">
      <a href="https://github.com/Nezvinskyi/references">
        <img src={gitLogo} alt="git-logo" style={{ height: 60 }} />
      </a>
    </footer>
  );
};

export default Footer;
