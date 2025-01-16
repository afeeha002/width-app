import React,{ useState, useRef, useEffect,  } from 'react'


function Width() {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] =useState({width: 0, height: 0 });

  useEffect(() =>{
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  return (
    <div
    ref={containerRef}
    className="container"
  >
    <p>
      Width: {dimensions.width}px<br />
      Height: {dimensions.height}px
    </p>
  </div>
  )
}

export default Width