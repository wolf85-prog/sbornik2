import { Link, Stack, Href } from 'expo-router';
import { StyleSheet, View } from 'react-native';

// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

const HOME = "/" as Href

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      {/* <ThemedView style={styles.container}>
        <ThemedText type="title">This screen doesn't exist.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
      </ThemedView> */}
      <View style={styles.container}>
        <Link href={HOME} style={styles.button}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
