import { useEffect, useCallback, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { supabase } from '../../lib/supabase';
import MapView from '../../components/map/MapView';

export default function MapScreen() {
  const [connected, setConnected] = useState<boolean | null>(null);

  const signIn = useCallback(async () => {
    try {
      const result = await supabase.auth.signInAnonymously();
      if (result) setConnected(true);
    } catch {
      setConnected(false);
    }
  }, []);

  useEffect(() => {
    signIn();
  }, [signIn]);

  if (connected === null) return null;

  return (
    <View style={styles.container}>
      <MapView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
