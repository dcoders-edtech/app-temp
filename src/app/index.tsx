import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>WELCOME BACK 👋</Text>
          <Text style={styles.title}>Discover.</Text>
        </View>

        <Text style={styles.avatar}>😎</Text>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerLabel}>YOUR NEXT ADVENTURE</Text>
        <Text style={styles.bannerTitle}>
          Make today{'\n'}amazing.
        </Text>
        <Text style={styles.bannerText}>
          Explore new ideas and discover something wonderful.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started →</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Your Dashboard</Text>

      <View style={styles.stats}>
        <View style={styles.card}>
          <Text style={styles.emoji}>🚀</Text>
          <Text style={styles.number}>12</Text>
          <Text style={styles.label}>Projects</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.emoji}>⭐</Text>
          <Text style={styles.number}>4.9</Text>
          <Text style={styles.label}>Your Rating</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <View style={styles.action}>
        <Text style={styles.actionEmoji}>🎨</Text>
        <View style={styles.actionInfo}>
          <Text style={styles.actionTitle}>Creative Studio</Text>
          <Text style={styles.label}>Bring your ideas to life</Text>
        </View>
        <Text style={styles.arrow}>›</Text>
      </View>

      <View style={styles.action}>
        <Text style={styles.actionEmoji}>📊</Text>
        <View style={styles.actionInfo}>
          <Text style={styles.actionTitle}>Analytics</Text>
          <Text style={styles.label}>Track your progress</Text>
        </View>
        <Text style={styles.arrow}>›</Text>
      </View>

      <Text style={styles.footer}>Made with ❤️ using Expo</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    paddingTop: 55,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  greeting: {
    color: '#858BA3',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#171B36',
    marginTop: 5,
  },
  avatar: {
    fontSize: 38,
    backgroundColor: '#E7E3FF',
    overflow: 'hidden',
    borderRadius: 30,
    padding: 7,
  },
  banner: {
    backgroundColor: '#635BDF',
    padding: 24,
    borderRadius: 25,
    marginBottom: 28,
  },
  bannerLabel: {
    color: '#DAD6FF',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 38,
    marginTop: 15,
  },
  bannerText: {
    color: '#E5E3FF',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 13,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  buttonText: {
    color: '#5548C8',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#171B36',
    marginBottom: 15,
  },
  stats: {
    flexDirection: 'row',
    gap: 14,
    marginBottom: 28,
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#ECEEF5',
  },
  emoji: {
    fontSize: 24,
  },
  number: {
    fontSize: 26,
    fontWeight: '800',
    color: '#171B36',
    marginTop: 10,
  },
  label: {
    fontSize: 12,
    color: '#858BA3',
    marginTop: 5,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 17,
    marginBottom: 12,
  },
  actionEmoji: {
    fontSize: 28,
    marginRight: 15,
  },
  actionInfo: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#171B36',
  },
  arrow: {
    fontSize: 28,
    color: '#635BDF',
  },
  footer: {
    textAlign: 'center',
    color: '#9298AD',
    fontSize: 12,
    marginTop: 20,
    marginBottom: 30,
  },
});