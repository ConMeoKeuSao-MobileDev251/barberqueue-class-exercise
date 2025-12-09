import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  userName: string;
};

export function HomeHeader({ userName }: Props) {
  const handleSearch = () => Alert.alert('Tìm kiếm', 'Đang mở tìm kiếm tiệm tóc…');
  const handleBell = () => Alert.alert('Thông báo', 'Bạn có 1 lịch hẹn sắp tới!');

  return (
    <View style={styles.header}>
      <View style={styles.profile}>
        <Image source={require('@/assets/images/onboarding1.png')} style={styles.avatar} />
        <View>
          <Text style={styles.subtitle}>Xin chào,</Text>
          <Text style={styles.title}>{userName}</Text>
        </View>
      </View>
      <View style={styles.actions}>
        <IconButton icon={<Feather name="search" size={20} color="#FF6B35" />} onPress={handleSearch} />
        <IconButton icon={<Feather name="bell" size={20} color="#FF6B35" />} onPress={handleBell} />
      </View>
    </View>
  );
}

type IconButtonProps = {
  icon: React.ReactNode;
  onPress?: () => void;
};

function IconButton({ icon, onPress }: IconButtonProps) {
  return (
    <Pressable style={styles.iconWrapper} onPress={onPress}>
      {icon}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 16,
  },
  subtitle: {
    fontSize: 14,
    color: '#8E8E93',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1B1B33',
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFE4D6',
    backgroundColor: '#FFF8F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

