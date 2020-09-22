import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { ListItem, Avatar, CheckBox } from "react-native-elements";
import chrono from "../../utils/Chrono";
import { useQuery, gql, useMutation } from "@apollo/client";

const NewPackagesScreen = (props) => {
  const [isChecked, setIsChecked] = useState(true);
  const GET_PACKAGES = gql`
    query($id: ID, $pickedUp: Boolean) {
      myPackages(id: $id, pickedUp: $pickedUp) {
        id
        pickedUp
        createdAt
      }
    }
  `;
  const { data, error, loading } = useQuery(GET_PACKAGES, {
    variables: { id: props.userId, pickedUp: isChecked },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Packages History</Text>
      <View style={styles.inputView}>
        {data && data.myPackages && (
          <>
            <FlatList
              data={data.myPackages}
              renderItem={({ item }) => {
                return (
                  <ListItem bottomDivider>
                    <Avatar rounded icon={{ name: "home" }} />
                    <ListItem.Content>
                      <ListItem.Title>
                        {chrono(new Date() - new Date(item.createdAt))}
                      </ListItem.Title>
                      <ListItem.Subtitle>
                        {item.pickedUp ? "Picked" : "Not picked"}
                      </ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
                );
              }}
              keyExtractor={(item) => item.id}
            />
            <CheckBox
              title="Show packages that need to be picked up"
              checked={isChecked}
              onPress={() => setIsChecked(!isChecked)}
            />
          </>
        )}
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => props.close()}>
        <Text style={styles.loginText}>USER SETTINGS</Text>
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
    width: "100%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 400,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
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
  loginText: {
    color: "white",
  },
});

export default NewPackagesScreen;
