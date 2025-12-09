import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { QuickAction } from './types';

type Props = {
  actions: QuickAction[];
  onActionPress?: (action: QuickAction) => void;
};

const iconMap: Record<QuickAction['icon'], React.ComponentProps<typeof Feather>['name']> = {
  'scissors': 'scissors',
  'map-pin': 'map-pin',
  'calendar': 'calendar',
  'star': 'star',
  'clock': 'clock',
  'search': 'search',
};

export function QuickActionRow({ actions, onActionPress }: Props) {
  return (
    <View style={styles.row}>
      {actions.map(action => (
        <Pressable
          key={action.id}
          style={[styles.card, { backgroundColor: action.accent }]}
          onPress={() => onActionPress?.(action)}
          android_ripple={{ color: '#FF6B35', borderless: false }}>
          <View style={styles.icon}>
            <Feather name={iconMap[action.icon]} size={18} color="#FF6B35" />
          </View>
            <Text style={styles.label}>{action.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  card: {
    flex: 1,
    padding: 12,
    borderRadius: 18,
  },
  icon: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    shadowColor: '#FF6B35',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  label: {
    fontWeight: '600',
    color: '#1A1A1A',
  },
});

