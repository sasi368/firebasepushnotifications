import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {
  requestUserPermission,
  NotificationListener,
} from './PushNotificationHelper';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationListener();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>firebase Notification</Text>
    </View>
  );
};
export default App;
