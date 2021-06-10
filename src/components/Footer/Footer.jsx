import gitLogo from './git.png';

const Footer = () => {
  return (
    <footer className="container" style={{ borderTop: '1px solid #4b93da' }}>
      <a href="https://github.com/Nezvinskyi/references">
        <img src={gitLogo} alt="git-logo" style={{ height: 40 }} />
      </a>
    </footer>
  );
};

export default Footer;
