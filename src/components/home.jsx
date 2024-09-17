import "./home.css";

function Home() {
  return (
    <div className="home">
      <h2>Welcome to Guiartist!</h2>
      <h4>Theres an artist in all of us.</h4>
      <div className="banner-container">
        {" "}
        <img
          className="home-img"
          src="/images/636004615158608595-guitarcenter.webp"
        ></img>
      </div>
    </div>
  );
}

export default Home;
