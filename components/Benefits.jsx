import Image from 'next/image';
import '../styles/Benefits.scss';
import China from '../public/China.jpeg';
import Zim from '../public/Zim.jpeg';
import Map from '../public/Map.jpeg'; 

const Benefits = () => {
  return (
    <div className="benefitsSection">
      <div className="flags">
        <Image src={China} alt="China Flag" width={80} height={40} className="flagflag-left" />
        <Image src={Zim} alt="Zimbabwe Flag" width={110} height={40} className="flag flag-right" />
      </div>

      <div className="content">
        <div className="leftSide">
          <h2>Benefits of using our service</h2>
          <ul className="benefitsList">
            <li>Fast and secure deliveries</li>
            <li>Transparent pricing</li>
            <li>Global reach (Zimbabwe & China)</li>
            <li>24/7 customer support</li>
          </ul>
        </div>

        <div className="rightSide">
          <Image src={Map} alt="Service Benefits" fill className="benefitsImage" />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
