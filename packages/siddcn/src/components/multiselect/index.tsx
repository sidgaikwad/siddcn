import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';
import { getTheme } from '../../utils/theme';

export interface SelectItem {
  value: string;
  label: string;
  desc?: string;
}

export interface MultiSelectProps {
  items: SelectItem[];
  maxSelect?: number; // 0 = unlimited
  onConfirm?: (selected: string[]) => void;
  showProgress?: boolean;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({ 
  items, 
  maxSelect = 0,
  onConfirm,
  showProgress = true
}) => {
  const theme = getTheme();
  const [cursor, setCursor] = useState(0);
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [confirmed, setConfirmed] = useState(false);

  useInput((input, key) => {
    if (key.upArrow) {
      setCursor(prev => Math.max(0, prev - 1));
    } else if (key.downArrow) {
      setCursor(prev => Math.min(items.length - 1, prev + 1));
    } else if (input === ' ') {
      setChecked(prev => {
        const newSet = new Set(prev);
        if (newSet.has(cursor)) {
          newSet.delete(cursor);
        } else if (maxSelect === 0 || newSet.size < maxSelect) {
          newSet.add(cursor);
        }
        return newSet;
      });
      setConfirmed(false);
    } else if (input === 'a' || input === 'A') {
      if (maxSelect === 0) {
        setChecked(new Set(items.map((_, i) => i)));
      }
    } else if (input === 'n' || input === 'N') {
      setChecked(new Set());
    } else if (key.return) {
      setConfirmed(true);
      const selectedValues = items
        .filter((_, i) => checked.has(i))
        .map(item => item.value);
      onConfirm?.(selectedValues);
    }
  });

  const isLimitReached = maxSelect > 0 && checked.size >= maxSelect;
  const checkedCount = checked.size;

  return (
    <Box flexDirection="column">
      {/* Header with limit info */}
      {maxSelect > 0 && (
        <Box marginBottom={1} borderStyle={theme.borderStyle} borderColor={theme.colors.warning} paddingX={1}>
          <Text color={theme.colors.warning}>
            ⚠ Limit: Max {maxSelect} items
          </Text>
        </Box>
      )}

      {/* Selection count */}
      <Box marginBottom={1}>
        <Text dimColor>Selected: </Text>
        <Text color={isLimitReached ? theme.colors.error : theme.colors.primary} bold>
          {checkedCount}
        </Text>
        <Text dimColor> / {items.length}</Text>
      </Box>

      {/* Progress bar */}
      {showProgress && (
        <Box marginBottom={1}>
          {(() => {
            const barWidth = 30;
            const filled = Math.round((checkedCount / items.length) * barWidth);
            const empty = barWidth - filled;
            return (
              <Box>
                <Text dimColor>[</Text>
                <Text color={theme.colors.primary}>{'█'.repeat(filled)}</Text>
                <Text dimColor>{'░'.repeat(empty)}</Text>
                <Text dimColor>]</Text>
              </Box>
            );
          })()}
        </Box>
      )}

      <Box marginBottom={1}>
        <Text color={theme.colors.border}>{'─'.repeat(42)}</Text>
      </Box>

      {/* Items list */}
      <Box flexDirection="column">
        {items.map((item, index) => {
          const isCursor = index === cursor;
          const isChecked = checked.has(index);
          const isDisabled = isLimitReached && !isChecked;

          return (
            <Box key={index}>
              <Text color={isCursor ? theme.colors.primary : theme.colors.text} bold={isCursor}>
                {isCursor ? '▸ ' : '  '}
              </Text>
              <Text 
                color={
                  isDisabled ? theme.colors.error :
                  isChecked ? theme.colors.success : 
                  theme.colors.dimText
                }
              >
                {isChecked ? '☑' : isDisabled ? '✖' : '☐'}
              </Text>
              <Text> </Text>
              <Text 
                color={
                  isCursor ? 'white' : 
                  isChecked ? theme.colors.success : 
                  theme.colors.text
                }
              >
                {item.label.padEnd(18)}
              </Text>
              <Text dimColor>{item.desc || ''}</Text>
              {isDisabled && (
                <Text color={theme.colors.error}> (Limit reached)</Text>
              )}
            </Box>
          );
        })}
      </Box>

      {/* Confirmation message */}
      <Box marginTop={1}>
        <Text color={theme.colors.border}>{'─'.repeat(42)}</Text>
      </Box>

      {confirmed && checkedCount > 0 ? (
        <Box marginTop={1}>
          <Text color={theme.colors.success} bold>
            ✓ Confirmed: {items.filter((_, i) => checked.has(i)).map(i => i.label).join(', ')}
          </Text>
        </Box>
      ) : confirmed && checkedCount === 0 ? (
        <Box marginTop={1}>
          <Text color={theme.colors.warning} bold>⚠ Nothing selected</Text>
        </Box>
      ) : (
        <Box marginTop={1}>
          <Text dimColor>Press Enter to confirm selection</Text>
        </Box>
      )}

      {/* Controls help */}
      <Box marginTop={1}>
        <Text dimColor>
          Space Toggle   {maxSelect === 0 && 'a All   '}n None   Enter Confirm
        </Text>
      </Box>
    </Box>
  );
};
