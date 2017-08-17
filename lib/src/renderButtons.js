import React from 'react';
import { FlatList, Button } from 'react-native';

import Formats from './Formats';

const FOREGROUND_COLOR = 'rgba(82, 194, 175, 1)';
const inlinePadding = { padding: 8 };

const defaultRenderButton = ({ item, getState, setState }) =>
  <Button
    title={item.key}
    onPress={() => item.onPress({ getState, setState, item })}
    color={FOREGROUND_COLOR}
    style={inlinePadding}
  />;

export const renderFormatButtons = ({ getState, setState }, formats, renderButton) => {
  const list = (
    <FlatList
      data={formats ? formats : Formats}
      keyboardShouldPersistTaps="always"
      renderItem={({ item, index }) => (renderButton) ? renderButton({ item, getState, setState })  : defaultRenderButton({ item, getState, setState })}
      horizontal
    />
  );
  return list;
};
