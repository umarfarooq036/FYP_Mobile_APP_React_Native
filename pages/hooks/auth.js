import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import { setUser } from "../../data/userSlice";

const auth = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }

    const decodedToken = jwtDecode(token);
    const { user } = decodedToken;

    return user;
  } catch (error) {
    console.error("Authentication error:", error.message);
    return null;
  }
};

export default auth;
