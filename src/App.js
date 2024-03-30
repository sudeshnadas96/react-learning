const navData = [
  { text: "Home", src: "#home" },
  { text: "Gallery", src: "#gallery" },
  { text: "Blog", src: "#blog" },
  { text: "About", src: "#about" },
  { text: "Contact", src: "#contact" },
];

function Myheaderlogo(props) {
  return (
    <div>
      <h1 className={props.sitebrand}>
        {props.text1}
        <span>{props.text2}</span>
      </h1>
    </div>
  );
}

function NavBar(props) {
  const navItem = props.navData.map(({ text, src }) => (
    <li className="nav-item">
      <a href={src}>{text}</a>
    </li>
  ));
  return <ul className="navbar-nav">{navItem}</ul>;
}

export default function Header() {
  return (
    <>
      <header>
        <nav className="header">
          <div className="container-flex">
            <Myheaderlogo text1="Travel" text2="Guide" sitebrand="logo" />
            <NavBar navData={navData} />
          </div>
        </nav>
      </header>
    </>
  );
}
