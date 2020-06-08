import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import Label from './label';
import theme from '../helper/theme';
const {style, colors} = theme;

/**
 * Input
 */
export default function Input(props) {
  /**
   * Render method
   * @return {Component}
   */
  const {
    style: stl,
    containerStyle,
    icon,
    multilines,
    labelIcon,
    label,
    mandatory,
  } = props;
  return (
    <View
      style={[
        styles.container,
        containerStyle,
        {
          borderColor: colors.silver,
        },
      ]}>
      <View style={[style.row, style.alignCenter]}>
        {labelIcon ? (
          <Icon name={icon} size={20} color={colors.primary} />
        ) : null}
        <Label style={styles.labelStyle}>{label}</Label>
        {mandatory ? <Label style={[style.xxs, style.danger]}>*</Label> : null}
      </View>
      <View
        style={[
          styles.inputContainer,
          multilines
            ? {height: multilines, alignItems: 'flex-start', paddingTop: 10}
            : null,
        ]}>
        {icon ? <Icon name={icon} size={20} color={colors.primary} /> : null}
        <TextInput
          textContentType="newPassword"
          style={[
            styles.input,
            multilines ? {height: multilines} : null,
            stl,
            {color: colors.black},
          ]}
          placeholderTextColor={colors.silver}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          multiline={!!multilines}
          inputAccessoryViewID={multilines ? 'multilineInput' : null}
          {...props}
        />
        {Platform.OS == 'ios' ? (
          <InputAccessoryView nativeID={'multilineInput'}>
            <View
              style={{
                justifyContent: 'space-between',
                paddingHorizontal: 15,
                paddingVertical: 10,
                width: '100%',
                flexDirection: 'row',
                backgroundColor: '#eee',
              }}>
              <TouchableOpacity onPress={() => Keyboard.dismiss()}>
                <Label style={[{color: 'dodgerblue'}, style.xxs]}>Cancel</Label>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Keyboard.dismiss()}>
                <Label style={[{color: 'dodgerblue'}, style.xxs]}>Done</Label>
              </TouchableOpacity>
            </View>
          </InputAccessoryView>
        ) : null}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: colors.silver,
    ...style.mbl,
  },
  labelStyle: {
    color: colors.primary,
    fontWeight: '600',
    ...style.xxs,
  },
  inputContainer: {
    ...style.row,
    ...style.alignCenter,
    height: 40,
  },
  input: {
    ...style.flex,
    height: 40,
    padding: 5,
    ...style.white,
  },
});

Input.propTypes = {
  style: PropTypes.any,
  containerStyle: PropTypes.object,
  icon: PropTypes.string,
  hintBtn: PropTypes.object,
  bordered: PropTypes.bool,
};
