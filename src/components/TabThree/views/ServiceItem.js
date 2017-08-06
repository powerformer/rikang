import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  StatusBar,
  Animated,
  Image,
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import post style
import { ServiceItemStyle as styles } from '../styles/';



class ServiceItem extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      normalConv: [],
    }
  }

  handleBtn = () => {

  }

  getNormalConvs = () => {
    const { userId, LeanRT, navigation, item } = this.props;

    const doctorId = item.service_object.doctor;
    const clientId = userId;
    const imClient = LeanRT.imClient;
    return imClient.getQuery().withLastMessagesRefreshed().containsMembers([clientId, doctorId]).find();
  }

  getConversations = () => {
    const that = this;
    return this.getNormalConvs()
      .then(data => {
        that.setState({
          normalConv: data,
        });
      })
  }

  handleChat(doctorId) {
    const { navigation, myId, LeanRT, userId,  } = this.props;

    const clientId = userId;
    const imClient = LeanRT.imClient;
    
    return imClient.createConversation({
      members: [String(doctorId)],
      name: `${String(doctorId)} 和 ${imClient.id}的对话`,
      transient: false,
      unique: true,
    }).then(conversation => {

      navigation.navigate('TestRNIMUI', { clientId: userId, doctorId, imClient: imClient, conv: conversation })
    }).catch(console.error.bind(console));
  }

  render() {
    const { item, navigation, dispatch, LeanRT, userId } = this.props;

    const doctorId = item.service_object.doctor;

    console.log('doctorId', doctorId);


    let lastMessage = "每次洗完澡后记得局部要用护肤品哈哈哈哈或或";

    const { normalConv } = this.state;
    console.log('normalConv', normalConv);

    if (lastMessage.length > 13) {
      lastMessage = lastMessage.slice(0, 13) + '...';
    }

    const lastTime = '12:01';
    // item.avatar

    const remainTime = '剩余3小时';

    return (
      <TouchableOpacity onPress={() => { this.handleChat(doctorId) }}>
        <View style={styles.container}>
          <View style={styles.box}>
            <View style={styles.doctorAvatarBox}>
              <Image source={{ uri: item.avatar }} style={styles.doctorAvatar} />
            </View>
            <View style={styles.rightBox}>
                <View style={styles.nameBox}>
                  <View style={styles.remainContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.remainBox}><Text style={styles.remainTime}>{remainTime}</Text></View>
                  </View>
                  <Text style={styles.lastTime}>{lastTime}</Text>
                </View>
                <Text style={styles.lastMessage}>{lastMessage}</Text>
              </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default ServiceItem;