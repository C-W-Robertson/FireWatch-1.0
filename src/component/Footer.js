// The 'Footer' component displays the footer info.
// The copyright info is created, then called by the Footer function.
// The Footer is then available as a component for the app.


const Copyright = () => (
  
  <span class = "text-muted">
     2022 CW Robertson
  </span>
);

const Footer = () => (
  <footer className = "footer">
    <div class = "container">
      <Copyright />
    </div>
  </footer>
);

export default Footer;