import Image from 'next/image';
import '../styles/Motto.scss';
import mottoImg from '../public/motto-img.png';

const Motto = () => {
  return (
    <div className="mottoSection">
      <div className="contentContainer">
        <div className="textContent">
          <h1>Our Motto & Values</h1>
          <p className="motto">"To leave a customer with a smiling face"</p>
          <ul className="customList">
            <li>To deliver goods safe</li>
            <li>Time conscious</li>
            <li>Communication and alerts to the client</li>
          </ul>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
            Officiis nihil necessitatibus cupiditate, odit exercitationem blanditiis nam numquam neque <br />
            architecto magni at culpa temporibus optio pariatur! Beatae?
          </p>
        </div>

        <div className="imageContainer">
          <Image src={mottoImg} alt="Motto Image" className="mottoImage" />
        </div>
      </div>
    </div>
  );
};

export default Motto;
