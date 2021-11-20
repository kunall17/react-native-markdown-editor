import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { MarkdownView } from 'react-native-markdown-view';

import { renderFormatButtons } from './renderButtons';

const FOREGROUND_COLOR = 'rgba(82, 194, 175, 1)';
const styles = StyleSheet.create({
  composeText: {
    borderColor: FOREGROUND_COLOR,
    borderWidth: 1,
    flexDirection: 'column',
    flex: 1,
    padding: 4,
    paddingLeft: 8,
    fontSize: 16,
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
  },
  inlinePadding: {
    padding: 8,
  },
  preview: {
    flex: 0.2,
    padding: 5,
    borderWidth: 1,
    borderColor: FOREGROUND_COLOR,
  },
  screen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
});

const markdownStyles = {
  heading1: {
    fontSize: 24,
    color: 'purple',
  },
  link: {
    color: 'pink',
  },
  mailTo: {
    color: 'orange',
  },
  text: {
    color: '#555555',
  },
};

export default class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.defaultText || '',
      selection: { start: 0, end: 0 },
      showPreview: props.showPreview ? props.showPreview : false,
    };
  }
  textInput: TextInput;

  changeText = (input: string) => {
    this.setState({ text: input });
    if (this.props.onMarkdownChange) this.props.onMarkdownChange(input);
  };

  onSelectionChange = event => {
    this.setState({
      selection: event.nativeEvent.selection,
    });
  };

  componentDidMount() {
    this.textInput.focus();
  }

  getState = () => {
    this.setState({
      selection: {
        start: 1,
        end: 1,
      },
    });
    return this.state;
  };

  convertMarkdown = () => {
    this.setState({ showPreview: !this.state.showPreview });
  };

  renderPreview = () => {
    return (
      <View style={styles.preview}>
        <ScrollView removeClippedSubviews>
          <MarkdownView styles={markdownStyles}>
            {this.state.text === '' ? 'Markdown preview here' : this.state.text}
          </MarkdownView>
        </ScrollView>
      </View>
    );
  };

  render() {
    const WrapperView = Platform.OS === 'ios' ? KeyboardAvoidingView : View;
    const { placeholder, Formats, markdownButton } = this.props;
    const { text, selection, showPreview } = this.state;
    return (
      <WrapperView behavior="padding" style={styles.screen}>
        <TextInput
          style={styles.composeText}
          multiline
          underlineColorAndroid="transparent"
          onChangeText={this.changeText}
          onSelectionChange={this.onSelectionChange}
          value={text}
          placeholder={placeholder}
          ref={textInput => (this.textInput = textInput)}
          selection={selection}
        />
        {showPreview ? this.renderPreview() : null}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={this.convertMarkdown}
            style={{ padding: 8, borderRightWidth: 1, borderColor: FOREGROUND_COLOR }}>
            <Image
              style={[styles.button, { tintColor: FOREGROUND_COLOR, padding: 8 }]}
              source={require('../static/visibility.png')}
              resizeMode={'cover'}
            />
          </TouchableOpacity>
          {renderFormatButtons(
            {
              getState: this.getState,
              setState: (state, callback) => {
                this.textInput.focus();
                this.setState(state, callback);
              },
            },
            Formats,
            markdownButton,
          )}
        </View>
      </WrapperView>
    );
  }
}
