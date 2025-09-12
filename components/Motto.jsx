import Image from 'next/image';
import '../styles/Motto.scss';
import mottoImg from '../public/motto-img.png';

const Motto = () => {
  return (
    <div className="mottoSection">
      <div className="contentContainer">
        <div className="textContent">
          <h1>Our Motto & Values</h1>
          <p className="motto">"We always leave customers with smiling faces"</p>
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
          <Image 
            src={mottoImg} 
            alt="Motto Image" 
            className="mottoImage"
            priority={true}
            fill
            sizes="(max-width: 768px) 80vw, 40vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
      </div>
    </div>
  );
};

export default Motto;