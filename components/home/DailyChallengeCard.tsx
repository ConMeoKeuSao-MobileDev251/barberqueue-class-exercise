import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { Promotion } from './types';

type Props = Promotion & {
  onDismiss?: () => void;
  onAction?: () => void;
};

export function DailyChallengeCard({ title, description, ctaLabel, onDismiss, onAction }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Pressable onPress={onDismiss}>
          <Feather name="x" size={18} color="#fff" />
        </Pressable>
      </View>
      <Text style={styles.body}>{description}</Text>
      <Pressable style={styles.button} onPress={onAction}>
        <Text style={styles.buttonLabel}>{ctaLabel}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    padding: 20,
    backgroundColor: '#FF6B35',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  body: {
    color: '#FFF8F5',
    fontSize: 14,
    marginBottom: 16,
    lineHeight: 20,
  },
  button: {
    alignSelf: 'flex-start',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#1A1A1A',
  },
  buttonLabel: {
    color: '#fff',
    fontWeight: '700',
  },
});

