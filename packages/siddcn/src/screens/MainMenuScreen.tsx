import React, { useState, useEffect } from 'react';
import { Box, Text, useInput } from 'ink';
import { getCategories } from '../components/registry';
import { getTheme } from '../utils/theme';
import { AutumnLeaves } from '../components/backgrounds';
import type { ComponentCategory } from '../types';

interface MainMenuScreenProps {
  onSelect: (categoryId: string) => void;
}

export const MainMenuScreen: React.FC<MainMenuScreenProps> = ({ onSelect }) => {
  const categories = getCategories();
  const theme = getTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);
  
  // Screen dimensions for full screen background
  const screenWidth = 100;
  const screenHeight = 30;
  
  // Maximum visible items for scrolling
  const maxVisibleItems = 10;

  useInput((input, key) => {
    if (key.upArrow || input === 'k') {
      setSelectedIndex(prev => Math.max(0, prev - 1));
    } else if (key.downArrow || input === 'j') {
      setSelectedIndex(prev => Math.min(categories.length - 1, prev + 1));
    } else if (key.return) {
      onSelect(categories[selectedIndex].id);
    }
  });

  // Update scroll offset based on selection
  useEffect(() => {
    if (selectedIndex < scrollOffset) {
      setScrollOffset(selectedIndex);
    } else if (selectedIndex >= scrollOffset + maxVisibleItems) {
      setScrollOffset(selectedIndex - maxVisibleItems + 1);
    }
  }, [selectedIndex, scrollOffset]);

  // Calculate visible items
  const visibleStart = scrollOffset;
  const visibleEnd = Math.min(scrollOffset + maxVisibleItems, categories.length);
  const visibleCategories = categories.slice(visibleStart, visibleEnd);

  return (
    <Box flexDirection="column" width={screenWidth} minHeight={screenHeight}>
      {/* Full Screen Autumn Leaves Background - Static, no re-renders */}
      <Box position="absolute" marginTop={0} marginLeft={0}>
        <AutumnLeaves 
          width={screenWidth} 
          height={screenHeight} 
          leafCount={18}
        />
      </Box>
      
      {/* Content Layer */}
      <Box flexDirection="column" padding={2} position="relative">
        <Box marginBottom={1}>
          <Text color={theme.colors.primary} bold>
            Component Categories
          </Text>
        </Box>

        <Box marginBottom={2}>
          <Text dimColor>
            Navigate with arrow keys or j/k | Select with Enter | Exit with Ctrl+C or q
          </Text>
        </Box>

        {/* Scroll indicator - top */}
        {scrollOffset > 0 && (
          <Box marginBottom={1}>
            <Text color={theme.colors.primary}>--- More above (k/up) ---</Text>
          </Box>
        )}

        {/* Scrollable List */}
        <Box 
          flexDirection="column" 
          borderStyle="round" 
          borderColor={theme.colors.border} 
          paddingX={2} 
          paddingY={1}
        >
          {visibleCategories.map((category: ComponentCategory, idx) => {
            const actualIndex = visibleStart + idx;
            const isSelected = actualIndex === selectedIndex;
            
            return (
              <Box key={category.id} marginBottom={1}>
                <Text 
                  color={isSelected ? theme.colors.primary : theme.colors.text}
                  bold={isSelected}
                >
                  {isSelected ? '> ' : '  '}{category.icon}  {category.name}
                </Text>
                <Text dimColor> - {category.description}</Text>
              </Box>
            );
          })}
        </Box>

        {/* Scroll indicator - bottom */}
        {scrollOffset + maxVisibleItems < categories.length && (
          <Box marginTop={1}>
            <Text color={theme.colors.primary}>--- More below (j/down) ---</Text>
          </Box>
        )}

        <Box marginTop={2} borderStyle="single" borderColor={theme.colors.border} paddingX={2}>
          <Text dimColor>
            Total categories: {categories.length} | Selected: [{selectedIndex + 1}/{categories.length}]
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
