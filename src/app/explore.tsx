import { View, Text, StyleSheet } from 'react-native';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🌎</Text>
      <Text style={styles.title}>Explore</Text>
      <Text style={styles.description}>
        Discover new places, ideas, and experiences.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🏔️ Adventure</Text>
        <Text>Find your next adventure.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎨 Creativity</Text>
        <Text>Explore your creative side.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>💡 Inspiration</Text>
        <Text>Get inspired to do more.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    padding: 25,
    paddingTop: 80,
  },
  emoji: {
    fontSize: 50,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#171B36',
    marginTop: 12,
  },
  description: {
    color: '#858BA3',
    fontSize: 15,
    marginTop: 8,
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 18,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#635BDF',
  },
});