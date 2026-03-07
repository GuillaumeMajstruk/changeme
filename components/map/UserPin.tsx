import { View, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  halo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 138, 96, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ring: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.neutral[0],
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.peach[500],
  },
});

export default function UserPin() {
  return (
    <View style={styles.halo} collapsable={false}>
      <View style={styles.ring}>
        <View style={styles.dot} />
      </View>
    </View>
  );
}
