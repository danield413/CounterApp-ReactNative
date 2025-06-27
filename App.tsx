import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FAB from './components/FAB';

export default function App() {

  const [count, setCount] = useState(13);

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>

      {/* <Pressable
        style={styles.floatingButton}
        onPress={() => setCount(count + 1)} 
        onLongPress={() => setCount(0)}
      >
        <Text style={{ fontSize: 24, color: '#000000', fontWeight: 'bold' }}>
          +1
        </Text>
      </Pressable> */}

      <FAB 
      onPress={() => setCount(count + 1)}
      onLongPress={() => setCount(0)}
        label="+1"
        position="right"
      />

      <FAB 
        onPress={() => setCount(count - 1)}
        onLongPress={() => setCount(0)}
        label="-1"
        position="left"
      />

     {/* <Pressable
      onPress={() => setCount(count - 1)}
     >
        <Text  style={{ fontSize: 24, color: '#000000', fontWeight: 'bold' }}>
          -1
        </Text>
     </Pressable> */}

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a95eff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textHuge: {
    fontSize: 120,
    color: '#fff',
    fontWeight: 'bold',
  },

  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#00ffc8',
    padding: 20,
    borderRadius: 16,
  },
});
