import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>JD</Text>
      </View>

      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>john@example.com</Text>

      <View style={styles.card}>
        <Text style={styles.item}>👤  Edit Profile</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.item}>🔔  Notifications</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.item}>⚙️  Settings</Text>
      </View>

      <Text style={styles.footer}>Version 1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    alignItems: 'center',
    padding: 25,
    paddingTop: 90,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#635BDF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 26,
    fontWeight: '800',
    color: '#171B36',
    marginTop: 15,
  },
  email: {
    color: '#858BA3',
    marginTop: 5,
    marginBottom: 35,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 12,
  },
  item: {
    fontSize: 16,
    color: '#171B36',
    fontWeight: '600',
  },
  footer: {
    color: '#9298AD',
    marginTop: 20,
  },
});