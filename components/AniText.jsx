import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoadingAnimation from './LoadingAnimation';

export default function AnimatedTypingText({
    text = "This won't take long!",
  speed = 60,
  style,
  loop = false,
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (loop) {
      // Restart animation if looping is enabled
      const restartTimeout = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, 1500);
      return () => clearTimeout(restartTimeout);
    }
  }, [index, text, speed, loop]);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, style]}>{displayedText} <LoadingAnimation /></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
  },
});
