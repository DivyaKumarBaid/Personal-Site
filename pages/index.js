import React from 'react'
import Old from '../src/portfolios/Old';
import New from '../src/portfolios/New';

export default function HomePage() {

  const [width, setWidth] = React.useState(null);

  // listen to window resize for mobile view
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  // listen to window resize for mobile view
  return (
    width > 900 ? <New /> : <Old />
  );
}
