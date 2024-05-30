import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useDispatch } from "react-redux";
import { setUser } from "../data/userSlice";
import auth from "../pages/hooks/auth"; // Assuming this is the path to your auth function

const UserProfileScreen = () => {
  const dispatch = useDispatch();
  const [user, setUserState] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // New state to handle errors

  useEffect(() => {
    const authenticate = async () => {
      try {
        const user = await auth();
        dispatch(setUser(user));
        setUserState(user);
      } catch (error) {
        setError(error.message); // Set error message if authentication fails
      }
      setLoading(false);
    };

    authenticate();
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {error ? ( // Render error message if error state is not null
        <Text style={styles.error}>{error}</Text>
      ) : (
        user && (
          <>
            <Text style={styles.header}>Welcome, {user.name}!</Text>
            <Text style={styles.info}>Email: {user.email}</Text>
            {/* Display more user info as needed */}
          </>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
  error: {
    fontSize: 18,
    color: "red",
  },
});

export default UserProfileScreen;
