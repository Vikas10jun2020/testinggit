import React, {useRef, useState} from 'react';
import {FlatList, Image, Modal, Pressable, TextInput, View} from 'react-native';
import {Text} from '../../components';
import {close} from '../../constants/imagePath';

const DATA = [
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Zoho'},

  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Zoho'},

  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Zoho'},

  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Zoho'},

  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Vikas'},
  {name: 'Akash'},
  {name: 'Ayansh'},
  {name: 'BOI'},
  {name: 'PNB'},
  {name: 'SBI'},
  {name: 'KOTAK'},
  {name: 'CANERA'},
  {name: 'ALU'},
  {name: 'PAYTM'},
  {name: 'Zoho'},
];
const Dropdown = ({data = DATA, label = 'Choose Option'}) => {
  const [visible, setVisible] = useState(false);
  const dropdownRef = useRef();
  const [masterData, setMasterData] = useState(DATA);

  const searchFilter = search => {
    let response;
    if (search != '') {
      const newData = data?.filter(item => {
        return Object?.values(item)
          .join('')
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      response = newData;
    } else {
      response = data;
    }
    setMasterData(response);
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={{padding: 10}}>
        <Text style={{textTransform: 'capitalize', fontSize: 15}} key={index}>
          {item.name}
        </Text>
      </View>
    );
  };

  const ItemSeparatorComponent = () => {
    return <View style={{height: 1, backgroundColor: '#dfdfdf'}}></View>;
  };
  return (
    <View>
      <Text
        style={{padding: 10, backgroundColor: 'red'}}
        ref={dropdownRef}
        onPress={() => {
          setVisible(true);
        }}>
        Select
      </Text>

      {/* MODAL STARTS HERE */}
      {masterData && (
        <Modal visible={visible}>
          <Pressable
            onPress={() => {
              setVisible(!visible);
            }}
            style={{position: 'absolute', right: 5, zIndex: 100}}>
            <Image style={{height: 25, width: 25}} source={close} />
          </Pressable>
          <View
            style={{
              margin: 10,
              flex: 1,
              borderWidth: 0.5,
              padding: 10,
              borderRadius: 5,
            }}>
            <TextInput
              onChangeText={txt => {
                searchFilter(txt);
              }}
              placeholder="Search Bank Name"
              style={{color: 'gray'}}
              placeholderTextColor={'gray'}
            />
            <FlatList
              data={masterData}
              renderItem={renderItem}
              ItemSeparatorComponent={ItemSeparatorComponent}
            />
          </View>
        </Modal>
      )}
    </View>
  );
};

export default Dropdown;
