import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type { Appointment } from './types';

type Props = {
  title: string;
  tasks: Appointment[];
  onViewAll?: () => void;
};

export function TaskList({ title, tasks, onViewAll }: Props) {
  const getStatusColor = (status: Appointment['status']) => {
    switch (status) {
      case 'confirmed': return '#4CAF50';
      case 'pending': return '#FFC107';
      case 'completed': return '#9E9E9E';
      case 'cancelled': return '#F44336';
      default: return '#9E9E9E';
    }
  };

  const getStatusText = (status: Appointment['status']) => {
    switch (status) {
      case 'confirmed': return 'Đã xác nhận';
      case 'pending': return 'Chờ xác nhận';
      case 'completed': return 'Hoàn thành';
      case 'cancelled': return 'Đã hủy';
      default: return '';
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.link} onPress={onViewAll}>
          Xem tất cả
        </Text>
      </View>
      <View style={styles.list}>
        {tasks.map(task => (
          <View key={task.id} style={styles.item}>
            <View style={[styles.statusDot, { backgroundColor: getStatusColor(task.status) }]} />
            <View style={styles.itemContent}>
              <View style={styles.itemTitleRow}>
                <Text style={styles.itemTitle}>{task.shopName}</Text>
                <Text style={styles.priceTag}>{task.price}</Text>
              </View>
              <Text style={styles.barberName}>{task.barberName} • {task.service}</Text>
              <View style={styles.itemFooter}>
                <Text style={styles.itemTime}>{task.date} - {task.time}</Text>
                <View style={[styles.statusBadge, { backgroundColor: `${getStatusColor(task.status)}20` }]}>
                  <Text style={[styles.statusText, { color: getStatusColor(task.status) }]}>
                    {getStatusText(task.status)}
                  </Text>
                </View>
              </View>
            </View>
            <Feather name="chevron-right" size={18} color="#A8A6AD" />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  link: {
    color: '#FF6B35',
    fontWeight: '600',
  },
  list: {
    gap: 12,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 18,
    gap: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  itemContent: {
    flex: 1,
  },
  itemTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    flex: 1,
  },
  priceTag: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FF6B35',
  },
  barberName: {
    fontSize: 13,
    color: '#666666',
    marginBottom: 6,
  },
  itemFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemTime: {
    fontSize: 12,
    color: '#8E8E93',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  statusText: {
    fontSize: 10,
    fontWeight: '600',
  },
});

