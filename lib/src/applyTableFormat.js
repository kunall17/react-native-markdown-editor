import { replaceBetween } from './utils';

export default ({ getState, item, setState }) => {
  const { text, selection } = getState();
  let newText;
  let newSelection;

  if (text.substring(selection.end - 1, selection.end) !== '\n') {
    newText = replaceBetween(text, selection, `\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text | Text | Text |\n`);
    newSelection = {
      start: selection.end + 4,
      end: selection.end + 12,
    };
  } else {
    newText = replaceBetween(text, selection, `\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text | Text | Text |\n`);
    newSelection = {
      start: selection.end + 3,
      end: selection.end + 11,
    };
  }
  
  const extra = {
    selection: newSelection,
  };
  setState({ text: newText }, () => {
    setTimeout(() => {
      setState({ ...extra });
    }, 25);
  });
};
