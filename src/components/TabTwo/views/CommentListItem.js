import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image, } from 'react-native';


import { CommentListStyle as styles } from '../styles/';

import {
  handleAnswers,
  getBeRepliedName,
} from '../data/';


import { TagBox } from '../../common/'


class CommentListItem extends PureComponent {
  render() {
    const { item, navigation, token, commentListSeq } = this.props;
    let name = null;
    if (item.reply_to) {
      name = getBeRepliedName(commentListSeq, item.reply_to);
    }
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemBox}>
          <View style={styles.leftBox}>
            {
              item.replier_avatar && (
                <Image source={{ uri: item.replier_avatar }} style={styles.avatar}  />
              )
            }
          </View>
          <View style={styles.rightBox}>
            <View style={styles.topBox}>
              <Text style={styles.name}>{item.replier_name}</Text>
              <Text style={styles.time}>{item.created}</Text>
            </View>
            <View style={styles.midBox}>
              <Text style={styles.body}>
                <Text style={styles.atBody}>
                  { name && `@${name} ` }
                </Text>
                {item.body}
              </Text>
            </View>
            <View style={styles.bottomBox}>
              <TagBox 
                comment={true} 
                item={item} 
                btnText={"回复"}
                handleAnswerBtn={this.props.handleAnswerBtn}
                navigation={navigation}
                token={token}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default CommentListItem;