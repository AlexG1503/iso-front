import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const data = [
  {
    src: 'https://dynamobrand.co/cdn/shop/files/banner-s3-_1_-new-merch-hor.jpg?v=1695417596&width=750'
  },
  {
    src: 'https://dynamobrand.co/cdn/shop/files/BANNER-MYSTERY---2.jpg?v=1688500509&width=750'
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const navigate = (direction: string) => {
    if (direction === 'prev') {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Auto cambio de imagen
  React.useEffect(() => {
    const timer = setInterval(() => {
      navigate('next');
    }, 8000);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        py: 1,
        overflow: 'hidden',
        width: '100vw', 
        height: '75vh',
        '& > *': {
          flexShrink: 0,
          flexBasis: '100%',
        },
        position: 'relative', 
      }}
    >
      <IconButton
        onClick={() => navigate('prev')}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          background: '#001D3D',
          color: 'white',
          zIndex: 2,
        }}
      >
        <NavigateBeforeIcon />
      </IconButton>
      <IconButton
        onClick={() => navigate('next')}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          background: '#001D3D',
          color: 'white',
          zIndex: 2,
        }}
      >
        <NavigateNextIcon />
      </IconButton>
      <Card >
        <div
          style={{
            width: '100%',
            height: '100%', 
            overflow: 'hidden',
          }}
        >
          <img
            srcSet={`${data[currentIndex].src}?w=1920&h=768&fit=crop&auto=format&dpr=2 2x`}
            src={`${data[currentIndex].src}?w=1920&h=768&fit=crop&auto=format`}
            style={{ width: '100%', height: '100%', objectFit: 'cover'}}
          />
        </div>
      </Card>
      <div
        className="indicators"
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '16px',
        }}
      >
        {data.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: index === currentIndex ? '#001D3D' : '#CCCCCC',
              borderRadius: '50%',
              margin: '0 4px',
              cursor: 'pointer',
            }}
          ></div>
        ))}
      </div>
    </Box>
  );
}
