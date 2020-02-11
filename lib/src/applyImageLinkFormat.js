import { isStringImageLink, replaceBetween } from './utils';
import { writeTextHereString, writeUrlTextHere } from './placeholderStrings';

export default ({ getState, item, setState }) => {
  const { selection, text } = getState();
  let newText;
  let newSelection;
  const selectedText = text.substring(selection.start, selection.end);
  if (selection.start !== selection.end) {
    if (isStringImageLink(selectedText)) {
      newText = replaceBetween(text, selection, `![${writeTextHereString}](${selectedText})`);
      newSelection = {
        start: selection.start + 2,
        end: selection.start + 2 + writeTextHereString.length,
      };
    } else {
      newText = replaceBetween(text, selection, `![${selectedText}](${writeUrlTextHere})`);
      newSelection = {
        start: selection.end + 3,
        end: selection.end + 3 + writeUrlTextHere.length,
      };
    }
  } else {
    newText = replaceBetween(text, selection, `![${writeTextHereString}](${writeUrlTextHere})`);
    newSelection = {
      start: selection.start + 2,
      end: selection.start + 2 + writeTextHereString.length,
    };
  }
  setState({ text: newText }, () => {
    setTimeout(() => {
      setState({ selection: newSelection });
    }, 25);
  });
};
