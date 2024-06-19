import './Portofolio.css'
function Portofolio() {
  const imgg =
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg";

  return (
    <div className="text-container py-5">
      <div className="text-center">
        <h1>Portofolio</h1>
      </div>
      <div className="row mt-5 port justify-content-center align-items-center">
        <div className="col-3">
          <img src={ imgg } alt="1223" />
        </div>
        <div className="col-3">
          <img src={ imgg } alt="1223" />
        </div>
        <div className="col-3">
          <img src={ imgg } alt="1223" />
        </div>
      </div>
      <div className="row mt-5 port justify-content-center align-items-center">
        <div className="col-3">
          <img src={ imgg } alt="1223" />
        </div>
        <div className="col-3">
          <img src={ imgg } alt="1223" />
        </div>
        <div className="col-3">
          <img src={ imgg } alt="1223" />
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
