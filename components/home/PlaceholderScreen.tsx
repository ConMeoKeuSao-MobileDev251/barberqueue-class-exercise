import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
  message: string;
  icon?: React.ComponentProps<typeof Feather>['name'];
};

export function PlaceholderScreen({ title, message, icon = 'scissors' }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Feather name={icon} size={48} color="#FF6B35" />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#FFF8F5',
    gap: 12,
  },
  iconWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFF3E6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  message: {
    textAlign: 'center',
    color: '#666666',
    fontSize: 16,
    lineHeight: 24,
  },
});

