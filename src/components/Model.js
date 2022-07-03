import { useMediaQuery } from '@mui/material';
import Spline from '@splinetool/react-spline';

export default function Model() {
  const isMobile = useMediaQuery("(max-width:500px)");

  const pcLink = "https://prod.spline.design/nRrL2sn6r0lG8YIY/scene.splinecode"

  const mobileLink = "https://prod.spline.design/EE2qmzpAO1ru0VR3/scene.splinecode"

  return (
    <div className="threemodel">
      <div className="modelContainer">
        {isMobile ? <Spline scene={mobileLink} />:
          <Spline scene={pcLink} />}
      </div>
    </div>
  );
}
