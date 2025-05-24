import { useState, useEffect, useRef } from 'react';
import { Howl, Howler } from 'howler';
import styled from 'styled-components';

// Using styled-components for cleaner CSS
const FloatingSoundscapeContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 8px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  canvas {
    display: block;
  }

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    padding: 6px;
  }
`;

const FloatingSoundscape = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const soundRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Mixed ambient sound (mood + work)
  const soundscapeUrl = '/sounds/mixed-ambient.mp3';

  useEffect(() => {
    // Initialize sound
    soundRef.current = new Howl({
      src: [soundscapeUrl],
      loop: true,
      volume: 0.4,
      autoplay: true,
      onplay: () => {
        setIsPlaying(true);
        animateWave();
      },
      onloaderror: (id, error) => {
        console.error('Sound load error:', error);
      },
      onplayerror: (id, error) => {
        console.error('Sound play error:', error);
        soundRef.current.once('unlock', () => {
          soundRef.current.play();
        });
      }
    });

    // Handle browser autoplay policies
    const handleFirstInteraction = () => {
      if (soundRef.current && !isPlaying) {
        soundRef.current.play();
      }
      document.removeEventListener('click', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);

    return () => {
      if (soundRef.current) {
        soundRef.current.stop();
      }
      cancelAnimationFrame(animationRef.current);
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  const animateWave = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    const draw = () => {
      animationRef.current = requestAnimationFrame(draw);
      
      if (!Howler.ctx || !soundRef.current || !soundRef.current.playing()) return;
      
      try {
        const analyser = Howler.ctx.createAnalyser();
        Howler.masterGain.connect(analyser);
        analyser.fftSize = 64;
        
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(dataArray);
        
        ctx.clearRect(0, 0, width, height);
        
        // Draw smooth wave
        ctx.beginPath();
        ctx.moveTo(0, height/2);
        
        for (let i = 0; i < bufferLength; i++) {
          const x = (i / bufferLength) * width;
          const y = (1 - (dataArray[i] / 255)) * height;
          ctx.lineTo(x, y);
        }
        
        ctx.strokeStyle = '#008080';
        ctx.lineWidth = 2;
        ctx.stroke();
      } catch (error) {
        console.error('Animation error:', error);
        cancelAnimationFrame(animationRef.current);
      }
    };
    
    draw();
  };

  const toggleSound = () => {
    if (!soundRef.current) return;
    
    if (isPlaying) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <FloatingSoundscapeContainer onClick={toggleSound}>
      <canvas 
        ref={canvasRef} 
        width={80} 
        height={30}
        title={isPlaying ? "Click to pause soundscape" : "Click to play soundscape"}
      />
    </FloatingSoundscapeContainer>
  );
};

export default FloatingSoundscape;