import React from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';

import Formats from './Formats';

const FOREGROUND_COLOR = '#2c3e50';
const defaultStyles = { padding: 8, color: FOREGROUND_COLOR, fontSize: 16 };

const defaultMarkdownButton = ({ item, getState, setState }, disable) => {
  return (
    <TouchableOpacity onPress={() => {
      if (!disable) {
        item.onPress({ getState, setState, item })
      }
    }}>
      <Text style={[defaultStyles, item.style]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

export const renderFormatButtons = ({ getState, setState }, formats, markdownButton, disable) => {
  // const list = (
  //   <FlatList
  //     data={formats ? formats : Formats}
  //     keyboardShouldPersistTaps="always"
  //     renderItem={({ item, index }) =>
  //       markdownButton
  //         ? markdownButton({ item, getState, setState })
  //         : defaultMarkdownButton({ item, getState, setState })}
  //     horizontal
  //   />
  // );
  const data = formats ? formats : Formats;
  const tool = data.map(btn => {
    if (markdownButton) {
      return markdownButton({ item: btn, getState, setState }, disable)
    }
    return defaultMarkdownButton({ item: btn, getState, setState }, disable)
  })
  return tool;
};
