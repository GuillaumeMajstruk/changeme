// Écran carte (home)
import { useEffect, useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { supabase } from '../../lib/supabase';

export default function MapScreen() {
  const [connected, setConnected] = useState<boolean | null>(null);

    const signIn = useCallback(async () => {
        try {
            const signIn = await supabase.auth.signInAnonymously()
            console.log('sign in:', signIn) 
            if (signIn) setConnected(true)
        } catch (error) {
            setConnected(false)
        }
    }, [setConnected])

  useEffect(() => {
        signIn()
  }, [signIn]);

  if (connected === null) return null;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{connected ? 'OK' : 'NOK'}</Text>
    </View>
  );
}
