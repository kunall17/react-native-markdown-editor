import { replaceBetween } from './utils';

export default ({ getState, item, setState }) => {
  let { text } = getState();
  const { selection } = getState();
  text = text || '';
  let newText;
  let newSelection;
  if (selection.start !== selection.end) {
    newText = replaceBetween(
      text,
      selection,
      `${item.prefix} ${text.substring(selection.start, selection.end)}\n`,
    );
    newSelection = { start: selection.end + 1 + item.prefix.length, end: selection.end + 1 + item.prefix.length };
  } else if (
    selection.start === selection.end &&
    text.substring(selection.end - 1, selection.end) === '\n'
  ) {
    newText = replaceBetween(text, selection, `${item.prefix} `);
    newSelection = { start: selection.start + 1 + item.prefix.length, end: selection.start + 1 + item.prefix.length };
  } else {
    newText = replaceBetween(text, selection, `\n${item.prefix} `);
    newSelection = { start: selection.start + 2 + item.prefix.length, end: selection.start + 2 + item.prefix.length };
  }

  setState({ text: newText }, () => {
    setTimeout(() => {
      setState({ selection: newSelection });
    }, 300);
  });
};
