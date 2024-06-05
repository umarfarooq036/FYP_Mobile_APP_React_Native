import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/user/userSlice";
import auth from "../pages/hooks/auth"; 

const UserProfileScreen = () => {
  const dispatch = useDispatch();
  const [user, setUserState] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const authenticate = async () => {
      try {
        const user = await auth();
        dispatch(setUser(user));
        setUserState(user);
      } catch (error) {
        setError(error.message || "An unexpected error occurred");
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
      {error ? ( 
        <Text style={styles.error}>{error}</Text>
      ) : (
        <>
          <Text style={styles.header}>Welcome, {user.name}!</Text>
          <Text style={styles.info}>Email: {user.email}</Text>
    
        </>
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
