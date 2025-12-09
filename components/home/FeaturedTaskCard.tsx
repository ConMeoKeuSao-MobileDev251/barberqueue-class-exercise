import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type { FeaturedAppointment } from './types';

type Props = {
  task: FeaturedAppointment;
};

export function FeaturedTaskCard({ task }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>Lịch hẹn sắp tới</Text>
        <View style={styles.countdownBadge}>
          <Ionicons name="time-outline" size={14} color="#FF6B35" />
          <Text style={styles.countdownText}>{task.countdown}</Text>
        </View>
      </View>
      <Text style={styles.title}>{task.shopName}</Text>
      <View style={styles.metaRow}>
        <Meta icon="person-outline" label={task.barberName} />
        <Meta icon="cut-outline" label={task.service} />
      </View>
      <View style={styles.metaRow}>
        <Meta icon="calendar-outline" label={task.date} />
        <Meta icon="time-outline" label={task.time} />
      </View>
      <View style={styles.addressRow}>
        <Ionicons name="location-outline" size={16} color="#FF6B35" />
        <Text style={styles.addressText}>{task.shopAddress}</Text>
      </View>
    </View>
  );
}

function Meta({ icon, label }: { icon: React.ComponentProps<typeof Ionicons>['name']; label: string }) {
  return (
    <View style={styles.meta}>
      <Ionicons name={icon} size={16} color="#666666" />
      <Text style={styles.metaLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 20,
    shadowColor: '#FF6B35',
    shadowOpacity: 0.12,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 12 },
    elevation: 6,
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B35',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  subtitle: {
    color: '#8E8E93',
    fontSize: 14,
  },
  countdownBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF3E6',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  countdownText: {
    color: '#FF6B35',
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 12,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    flexWrap: 'wrap',
    gap: 8,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaLabel: {
    color: '#666666',
    fontSize: 13,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: '#FFF8F5',
    padding: 10,
    borderRadius: 12,
    gap: 6,
  },
  addressText: {
    color: '#666666',
    fontSize: 12,
    flex: 1,
  },
});

