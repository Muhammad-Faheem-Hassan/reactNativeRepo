import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "./redux/action";
import { FlatList } from "react-native";

export default function UserList() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.reducer2);
  console.log("data======>", userList);

  useEffect(() => {
    if (!userList.length) {
      dispatch(getUserList());
    }
  }, []);

  return (
    <FlatList
      data={userList}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <>
          <Text>Page {item.skip / item.limit + 1}</Text>
          {item.users.map((user) => (
            <View key={user.id} style={{backgroundColor: "black", display:"flex", flexDirection:'column', justifyContent:"space-between",}}>
              <Text style={{ fontSize: 24, color: "white", }}>{user.firstName} {user.lastName}</Text>
             
              <Text style={{ fontSize: 24, color: "lightgreen", }}> Age{user.hair.color}</Text>
              <Text style={{ fontSize: 24, color: "lightgreen", }}>{user.phone}</Text>
              <Text style={{ fontSize: 18, color: "yellow", }}>{user.email}</Text>
            </View>
          ))}
        </>
      )}
    />
  );
}
