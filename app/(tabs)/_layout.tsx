import { Tabs } from 'expo-router';
import React from 'react';

import { HomeTabBar } from '@/components/home/HomeTabBar';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      tabBar={props => <HomeTabBar {...props} />}>
      <Tabs.Screen name="index" options={{ title: 'Trang chủ' }} />
      <Tabs.Screen name="calendar" options={{ title: 'Lịch hẹn' }} />
      <Tabs.Screen name="tasks" options={{ title: 'Tiệm tóc' }} />
      <Tabs.Screen name="profile" options={{ title: 'Tài khoản' }} />
    </Tabs>
  );
}
