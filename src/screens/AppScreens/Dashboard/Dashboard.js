import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../../constants/colors';
import {homeIcon, homeIconActive, user} from '../../../constants/imagePath';
import {AuthContext} from '../../../context/AuthContext';
import History from '../History/History';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Setting from '../Setting/Setting';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
//9708542193
function MyTabBar({state, descriptors, navigation}) {
  //console.log('PROPS---------0' + JSON.stringify(props));
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        elevation: 10,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        console.log('OPTIONS--' + JSON.stringify(descriptors[route.key]));
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        console.log('FOCUSED--' + isFocused);
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center'}}>
            <Image
              // source={isFocused ? homeIconActive : homeIcon}
              source={
                label == 'Home' && isFocused
                  ? homeIconActive
                  : homeIcon
                  ? label == 'History' && isFocused
                  : homeIconActive
              }
              style={{height: 20, width: 20}}
            />
            <Text style={{color: isFocused ? COLORS.primary : '#222'}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'History') {
            iconName = focused ? 'time' : 'time-outline';
          } else if (route.name === 'Profile') {
            iconName = focused
              ? 'md-person-circle'
              : 'md-person-circle-outline';
          } else if (route.name === 'Mall') {
            iconName = focused ? 'basket' : 'basket-outline';
          }

          // You can return any component that you like here!
          return <Ionicons color={COLORS.primary} size={25} name={iconName} />;
        },

        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          marginHorizontal: 10,
          borderRadius: 30,
          height: 60,
        },
        tabBarLabelStyle: {fontSize: 12, position: 'relative', bottom: 10},
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarIconStyle: {backfaceVisibility: COLORS.primary},
      })}>
      <Tab.Screen name={'Home'} component={Home} />
      <Tab.Screen name="Mall" component={Setting} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
}

const CustomDrawer = () => {
  const {logout} = useContext(AuthContext);
  return (
    <View style={drawerStyle.mainContainer}>
      <View style={drawerStyle.header}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 30,
            alignItems: 'center',
            paddingTop: 10,
          }}>
          <Text>{'ABc XTZ'}</Text>
          <Image
            source={user}
            style={{height: 50, width: 50, borderRadius: 25}}
          />
        </View>
      </View>

      <View style={drawerStyle.footer}>
        <Text
          onPress={logout}
          style={{
            padding: 10,
            textAlign: 'center',
            backgroundColor: '#2535aa',
            fontSize: 18,
            color: 'white',
          }}>
          Logout
        </Text>
      </View>
    </View>
  );
};

const DrawerComponent = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="MyTabs" component={MyTabs} />
    </Drawer.Navigator>
  );
};

const Dashboard = () => {
  return (
    <>
      <DrawerComponent />
    </>
  );
};

const Stack = createNativeStackNavigator();

const drawerStyle = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    height: 200,
    backgroundColor: '#dfdfdf',
  },
  footer: {},
});

export const TopStacks = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="history" component={History} />
    </Stack.Navigator>
  );
};

export default Dashboard;
