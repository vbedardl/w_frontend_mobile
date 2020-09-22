import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useQuery, gql, useMutation } from "@apollo/client";

const NewLoginScreen = (props) => {
  const [email, setEmail] = useState(props.user.email);
  const [password, setPassword] = useState("");
  const UPDATE_USER = gql`
    mutation($id: ID!, $email: String, $password: String) {
      updateUser(id: $id, email: $email, password: $password) {
        id
        name
        password
        email
      }
    }
  `;
  const [updatedUser, result] = useMutation(UPDATE_USER);
  const updateUser = () => {
    console.log(
      "before update:",
      props.user.id,
      props.user.email,
      props.user.password
    );
    const variables = { id: props.user.id };
    if (email) {
      variables.email = email;
    }
    if (password) {
      variables.password = password;
    }
    updatedUser({
      variables,
    });
  };
  useEffect(() => {
    if (result.data) {
      console.log("results from update:", result.data);
    }
  }, [result.data]);
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        {props.user.name} - Unit # {props.user.unit.name}
      </Text>
      <Text style={styles.label}>Update Email</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholderTextColor="#003f5c"
          onChangeText={(newEmail) => setEmail(newEmail)}
          value={email}
        />
      </View>
      <Text style={styles.label}>Update Password</Text>

      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={(newPassword) => setPassword(newPassword)}
          value={password}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => updateUser()}>
        <Text style={styles.label}>SAVE UPDATES</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.close()}>
        <Text style={styles.forgot}>Go back to my packages history</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgot: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  label: {
    color: "white",
  },
});

export default NewLoginScreen;
