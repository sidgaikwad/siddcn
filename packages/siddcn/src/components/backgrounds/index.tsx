import React, { useState, useEffect } from 'react';
import { Box, Text } from 'ink';
import { getTheme } from '../../utils/theme';

export interface Star {
  x: number;
  y: number;
  char: string;
  speed: number;
  brightness: 'bright' | 'dim' | 'faint';
}

export interface AnimatedStarsProps {
  width?: number;
  height?: number;
  starCount?: number;
  fps?: number;
}

const STAR_CHARS = ['*', '.', '+', 'o', '`', "'", ','];
const BRIGHT_CHARS = ['*', '+', 'o'];
const DIM_CHARS = ['.', '`'];
const FAINT_CHARS = ["'", ','];

function createStar(width: number, height: number, fromTop = false): Star {
  const charType = Math.random();
  let char: string;
  let brightness: 'bright' | 'dim' | 'faint';
  
  if (charType < 0.2) {
    char = BRIGHT_CHARS[Math.floor(Math.random() * BRIGHT_CHARS.length)];
    brightness = 'bright';
  } else if (charType < 0.5) {
    char = DIM_CHARS[Math.floor(Math.random() * DIM_CHARS.length)];
    brightness = 'dim';
  } else {
    char = FAINT_CHARS[Math.floor(Math.random() * FAINT_CHARS.length)];
    brightness = 'faint';
  }

  return {
    x: Math.floor(Math.random() * width),
    y: fromTop ? 0 : Math.floor(Math.random() * height),
    char,
    speed: 0.1 + Math.random() * 0.3, // Variable falling speed
    brightness,
  };
}

export const AnimatedStars: React.FC<AnimatedStarsProps> = ({
  width = 80,
  height = 24,
  starCount = 30,
  fps = 10,
}) => {
  const theme = getTheme();
  const [stars, setStars] = useState<Star[]>(() => 
    Array.from({ length: starCount }, () => createStar(width, height))
  );
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(f => f + 1);
      setStars(prevStars => 
        prevStars.map(star => {
          const newY = star.y + star.speed;
          // If star falls off screen, create a new one at the top
          if (newY >= height) {
            return createStar(width, height, true);
          }
          return { ...star, y: newY };
        })
      );
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [width, height, fps]);

  // Create a 2D grid for rendering
  const grid: (Star | null)[][] = Array.from({ length: height }, () => 
    Array.from({ length: width }, () => null)
  );

  // Place stars on the grid
  stars.forEach(star => {
    const y = Math.floor(star.y);
    const x = Math.floor(star.x);
    if (y >= 0 && y < height && x >= 0 && x < width) {
      grid[y][x] = star;
    }
  });

  const getStarColor = (star: Star) => {
    switch (star.brightness) {
      case 'bright':
        return theme.colors.primary;
      case 'dim':
        return theme.colors.secondary;
      case 'faint':
        return theme.colors.dimText;
    }
  };

  return (
    <Box flexDirection="column" position="absolute" marginTop={0} marginLeft={0}>
      {grid.map((row, rowIndex) => (
        <Box key={rowIndex}>
          {row.map((cell, colIndex) => (
            <Text 
              key={colIndex} 
              color={cell ? getStarColor(cell) : undefined}
              dimColor={!cell}
            >
              {cell ? cell.char : ' '}
            </Text>
          ))}
        </Box>
      ))}
    </Box>
  );
};

// Simpler falling stars that work better in terminal
export const FallingStars: React.FC<{ enabled?: boolean }> = ({ enabled = true }) => {
  const theme = getTheme();
  const [starLine, setStarLine] = useState('');

  useEffect(() => {
    if (!enabled) return;

    const updateStars = () => {
      const width = 60;
      const line = Array.from({ length: width }, () => {
        const rand = Math.random();
        if (rand < 0.03) return { char: '*', color: 'bright' };
        if (rand < 0.06) return { char: '.', color: 'dim' };
        if (rand < 0.08) return { char: '+', color: 'accent' };
        return { char: ' ', color: 'none' };
      });
      setStarLine(line.map(s => s.char).join(''));
    };

    updateStars();
    const interval = setInterval(updateStars, 300);
    return () => clearInterval(interval);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <Box>
      <Text dimColor>{starLine}</Text>
    </Box>
  );
};

// Matrix-style falling characters
export const MatrixRain: React.FC<{ width?: number; height?: number }> = ({ 
  width = 60, 
  height = 5 
}) => {
  const theme = getTheme();
  const [columns, setColumns] = useState<number[]>(() => 
    Array.from({ length: width }, () => Math.floor(Math.random() * height))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setColumns(prev => 
        prev.map(y => (y + 1) % height)
      );
    }, 150);
    return () => clearInterval(interval);
  }, [height]);

  const chars = '01';

  return (
    <Box flexDirection="column">
      {Array.from({ length: height }).map((_, row) => (
        <Box key={row}>
          {columns.map((activeRow, col) => {
            const isActive = row === activeRow;
            const isFading = row === (activeRow - 1 + height) % height;
            return (
              <Text 
                key={col}
                color={isActive ? theme.colors.primary : isFading ? theme.colors.success : theme.colors.dimText}
                bold={isActive}
              >
                {isActive || isFading ? chars[Math.floor(Math.random() * chars.length)] : ' '}
              </Text>
            );
          })}
        </Box>
      ))}
    </Box>
  );
};

// Twinkling stars (static position, varying brightness)
export const TwinklingStars: React.FC<{ width?: number; density?: number }> = ({ 
  width = 60, 
  density = 0.15 
}) => {
  const theme = getTheme();
  const [stars, setStars] = useState<{ char: string; bright: boolean }[]>([]);

  useEffect(() => {
    // Initialize stars
    const initialStars = Array.from({ length: width }, () => {
      if (Math.random() < density) {
        return { 
          char: STAR_CHARS[Math.floor(Math.random() * STAR_CHARS.length)], 
          bright: Math.random() > 0.5 
        };
      }
      return { char: ' ', bright: false };
    });
    setStars(initialStars);

    // Twinkle effect
    const interval = setInterval(() => {
      setStars(prev => prev.map(star => {
        if (star.char !== ' ') {
          return { ...star, bright: Math.random() > 0.3 };
        }
        return star;
      }));
    }, 400);

    return () => clearInterval(interval);
  }, [width, density]);

  return (
    <Box>
      {stars.map((star, i) => (
        <Text 
          key={i}
          color={star.bright ? theme.colors.primary : theme.colors.dimText}
          bold={star.bright}
        >
          {star.char}
        </Text>
      ))}
    </Box>
  );
};

// Diagonal Falling Stars - creates shooting star trails from top-left to bottom-right
export interface DiagonalStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  brightness: number;
}

export interface DiagonalFallingStarsProps {
  width?: number;
  height?: number;
  starCount?: number;
  fps?: number;
}

function createDiagonalStar(width: number, height: number, fromEdge = false): DiagonalStar {
  // Stars start from top edge or left edge
  const startFromTop = Math.random() > 0.5;
  
  return {
    x: fromEdge 
      ? (startFromTop ? Math.floor(Math.random() * width * 0.7) : 0)
      : Math.floor(Math.random() * width),
    y: fromEdge 
      ? (startFromTop ? 0 : Math.floor(Math.random() * height * 0.5))
      : Math.floor(Math.random() * height),
    length: 3 + Math.floor(Math.random() * 8), // Trail length 3-10
    speed: 0.3 + Math.random() * 0.5, // Variable diagonal speed
    brightness: Math.random(),
  };
}

export const DiagonalFallingStars: React.FC<DiagonalFallingStarsProps> = ({
  width = 100,
  height = 30,
  starCount = 15,
  fps = 12,
}) => {
  const theme = getTheme();
  const [stars, setStars] = useState<DiagonalStar[]>(() => 
    Array.from({ length: starCount }, () => createDiagonalStar(width, height))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setStars(prevStars => 
        prevStars.map(star => {
          const newX = star.x + star.speed;
          const newY = star.y + star.speed * 0.6; // Move diagonally (more horizontal than vertical)
          
          // If star goes off screen (right or bottom), create new one from top-left area
          if (newX >= width || newY >= height) {
            return createDiagonalStar(width, height, true);
          }
          return { ...star, x: newX, y: newY };
        })
      );
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [width, height, fps]);

  // Create a 2D grid for rendering
  const grid: { char: string; intensity: number }[][] = Array.from({ length: height }, () => 
    Array.from({ length: width }, () => ({ char: ' ', intensity: 0 }))
  );

  // Trail characters from brightest to dimmest
  const trailChars = ['*', '+', '.', '`', "'", ',', ' '];

  // Place stars and their trails on the grid
  stars.forEach(star => {
    for (let i = 0; i < star.length; i++) {
      const trailX = Math.floor(star.x - i * 0.8);
      const trailY = Math.floor(star.y - i * 0.5);
      
      if (trailY >= 0 && trailY < height && trailX >= 0 && trailX < width) {
        const charIndex = Math.min(Math.floor(i / 1.5), trailChars.length - 1);
        const intensity = Math.max(0, 1 - (i / star.length));
        
        if (grid[trailY][trailX].intensity < intensity) {
          grid[trailY][trailX] = { 
            char: trailChars[charIndex], 
            intensity: intensity * star.brightness 
          };
        }
      }
    }
  });

  const getColor = (intensity: number) => {
    if (intensity > 0.7) return theme.colors.primary;
    if (intensity > 0.4) return theme.colors.secondary;
    if (intensity > 0.2) return theme.colors.dimText;
    return theme.colors.border;
  };

  return (
    <Box flexDirection="column">
      {grid.map((row, rowIndex) => (
        <Box key={rowIndex}>
          {row.map((cell, colIndex) => (
            <Text 
              key={colIndex} 
              color={cell.intensity > 0 ? getColor(cell.intensity) : undefined}
              bold={cell.intensity > 0.7}
              dimColor={cell.intensity === 0}
            >
              {cell.char}
            </Text>
          ))}
        </Box>
      ))}
    </Box>
  );
};

// Full screen background wrapper with diagonal falling stars
export interface FullScreenBackgroundProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
  starCount?: number;
}

export const FullScreenBackground: React.FC<FullScreenBackgroundProps> = ({
  children,
  width = 100,
  height = 30,
  starCount = 12,
}) => {
  return (
    <Box flexDirection="column" width={width} minHeight={height}>
      {/* Background stars layer */}
      <Box position="absolute" marginTop={0} marginLeft={0}>
        <DiagonalFallingStars 
          width={width} 
          height={height} 
          starCount={starCount}
          fps={10}
        />
      </Box>
      {/* Content layer */}
      <Box flexDirection="column" position="relative">
        {children}
      </Box>
    </Box>
  );
};

// Autumn Leaves - Static falling leaves background (NO re-renders after initial render)
export interface AutumnLeaf {
  x: number;
  y: number;
  char: string;
  color: string;
}

export interface AutumnLeavesProps {
  width?: number;
  height?: number;
  leafCount?: number;
}

const LEAF_CHARS = ['🍂', '🍁', '🍃', '❦', '✿', '❀', '⚘'];
const LEAF_ASCII = ['@', '*', '%', '#', '&', 'o', '~', '^'];
const LEAF_COLORS = ['#D2691E', '#8B4513', '#CD853F', '#A0522D', '#B8860B', '#DAA520', '#F4A460'];

function createAutumnLeaf(width: number, height: number): AutumnLeaf {
  return {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
    char: LEAF_ASCII[Math.floor(Math.random() * LEAF_ASCII.length)],
    color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
  };
}

// Static autumn leaves - renders once, no animation/re-renders
export const AutumnLeaves: React.FC<AutumnLeavesProps> = ({
  width = 100,
  height = 30,
  leafCount = 25,
}) => {
  const theme = getTheme();
  
  // Create leaves once using useMemo - NO state, NO effects, NO re-renders
  const leaves = React.useMemo(() => 
    Array.from({ length: leafCount }, () => createAutumnLeaf(width, height)),
    [width, height, leafCount]
  );

  // Create a 2D grid for rendering
  const grid = React.useMemo(() => {
    const g: (AutumnLeaf | null)[][] = Array.from({ length: height }, () => 
      Array.from({ length: width }, () => null)
    );

    // Place leaves on the grid
    leaves.forEach(leaf => {
      if (leaf.y >= 0 && leaf.y < height && leaf.x >= 0 && leaf.x < width) {
        g[leaf.y][leaf.x] = leaf;
      }
    });
    
    return g;
  }, [leaves, width, height]);

  return (
    <Box flexDirection="column">
      {grid.map((row, rowIndex) => (
        <Box key={rowIndex}>
          {row.map((cell, colIndex) => (
            <Text 
              key={colIndex} 
              color={cell ? cell.color : undefined}
              dimColor={!cell}
            >
              {cell ? cell.char : ' '}
            </Text>
          ))}
        </Box>
      ))}
    </Box>
  );
};

// Static diagonal pattern - NO animations, NO re-renders
export interface StaticDiagonalPatternProps {
  width?: number;
  height?: number;
  density?: number;
}

export const StaticDiagonalPattern: React.FC<StaticDiagonalPatternProps> = ({
  width = 100,
  height = 30,
  density = 0.08,
}) => {
  const theme = getTheme();
  
  // Create pattern once using useMemo - completely static
  const grid = React.useMemo(() => {
    const chars = ['*', '+', '.', '`', "'", ',', '~', '^'];
    const g: { char: string; bright: boolean }[][] = Array.from({ length: height }, () => 
      Array.from({ length: width }, () => {
        if (Math.random() < density) {
          return { 
            char: chars[Math.floor(Math.random() * chars.length)], 
            bright: Math.random() > 0.5 
          };
        }
        return { char: ' ', bright: false };
      })
    );
    return g;
  }, [width, height, density]);

  return (
    <Box flexDirection="column">
      {grid.map((row, rowIndex) => (
        <Box key={rowIndex}>
          {row.map((cell, colIndex) => (
            <Text 
              key={colIndex} 
              color={cell.char !== ' ' ? (cell.bright ? theme.colors.primary : theme.colors.dimText) : undefined}
              dimColor={cell.char === ' '}
            >
              {cell.char}
            </Text>
          ))}
        </Box>
      ))}
    </Box>
  );
};
