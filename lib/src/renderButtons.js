import React from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';

import Formats from './Formats';

const FOREGROUND_COLOR = 'rgba(82, 194, 175, 1)';
const defaultStyles = { padding: 8, color: FOREGROUND_COLOR, fontSize: 16 };

const defaultRenderButton = ({ item, getState, setState }) => {
  return (
    <TouchableOpacity onPress={() => item.onPress({ getState, setState, item })}>
      <Text style={[defaultStyles, item.style]}>
        {item.key}
      </Text>
    </TouchableOpacity>
  );
};

export const renderFormatButtons = ({ getState, setState }, formats, renderButton) => {
  const list = (
    <FlatList
      data={formats ? formats : Formats}
      keyboardShouldPersistTaps="always"
      renderItem={({ item, index }) =>
        renderButton
          ? renderButton({ item, getState, setState })
          : defaultRenderButton({ item, getState, setState })}
      horizontal
    />
  );
  return list;
};
