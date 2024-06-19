
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";

// import { faSquareTwitter } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className=" bg-secondary p-5 text-center">
      <div className="row justify-content-between container align-items-center">
        <div className="col text-start ms-5">
          <h3>Get In Touch</h3>
          <div className="Contact-content ">
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> : omarrabdo00@gmail.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> : 01007126990
            </p>
          </div>
        </div>
        <div className="col">
          <button type="button" className="btn btn-dark my-3">
            Contact-Us
          </button>
        </div>
        <div className="col text-end me-5">
          <span className="me-3" ><FontAwesomeIcon icon={faPhone} /></span>
          <span className="me-3"><FontAwesomeIcon icon={faEnvelope} /></span>
          <span className="me-3" ><FontAwesomeIcon icon={faHashtag} /></span>
          <p>copyright &copy; 2024</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
