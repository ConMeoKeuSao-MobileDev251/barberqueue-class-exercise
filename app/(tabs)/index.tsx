import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DailyChallengeCard } from '@/components/home/DailyChallengeCard';
import { FeaturedTaskCard } from '@/components/home/FeaturedTaskCard';
import { HomeHeader } from '@/components/home/HomeHeader';
import { QuickActionRow } from '@/components/home/QuickActionRow';
import { TabSelector } from '@/components/home/TabSelector';
import { TaskList } from '@/components/home/TaskList';
import { challenge, featuredTask, homeTabs, quickActions, tasksByTab } from '@/components/home/data';
import type { HomeTabId } from '@/components/home/types';
import { resetOnboarding } from '@/utils/onboarding';


export default function HomeTab() {
  const [activeTab, setActiveTab] = useState<HomeTabId>('upcoming');
  const router = useRouter();

  const handleResetOnboarding = async () => {
    await resetOnboarding();
    Alert.alert('Reset thành công', 'Onboarding sẽ xuất hiện lại ngay.', [
      {
        text: 'OK',
        onPress: () => router.replace('/onboarding'),
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <HomeHeader userName="Khách hàng" />
        <TabSelector tabs={homeTabs} activeTab={activeTab} onChange={setActiveTab} />
        <FeaturedTaskCard task={featuredTask} />
        <QuickActionRow
          actions={quickActions}
          onActionPress={(action) => {
            switch(action.id) {
              case 'book':
                Alert.alert('Đặt lịch', 'Chuyển đến màn hình đặt lịch cắt tóc.');
                break;
              case 'nearby':
                Alert.alert('Tiệm gần đây', 'Đang tìm các tiệm tóc xung quanh bạn...');
                break;
              case 'history':
                Alert.alert('Lịch sử', 'Xem lịch sử các lần đặt lịch của bạn.');
                break;
            }
          }}
        />
        <DailyChallengeCard
          {...challenge}
          onAction={() => Alert.alert('Đặt lịch ngay!', 'Chuyển đến màn hình tìm tiệm tóc.')}
          onDismiss={() => Alert.alert('Đã ẩn', 'Ưu đãi sẽ được ẩn tạm thời.')}
        />
        <TaskList
          title={homeTabs.find(tab => tab.id === activeTab)?.label ?? 'Lịch hẹn'}
          tasks={tasksByTab[activeTab]}
          onViewAll={() => Alert.alert('Xem thêm', 'Chuyển đến danh sách đầy đủ.')}
        />
        <TouchableOpacity style={styles.testButton} onPress={handleResetOnboarding}>
          <Text style={styles.testButtonText}>Test lại Onboarding</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF8F5',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 110,
    gap: 18,
  },
  testButton: {
    marginTop: 12,
    paddingVertical: 14,
    borderRadius: 16,
    backgroundColor: '#FF6B35',
    alignItems: 'center',
  },
  testButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
});
