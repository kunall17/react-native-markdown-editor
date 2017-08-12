import applyWrapFormat from './applyWrapFormat';
import applyWrapFormatNewLines from './applyWrapFormatNewLines';
import applyListFormat from './applyListFormat';
import applyWebLinkFormat from './applyWebLinkFormat';

export default [
  { key: 'B', wrapper: '**', onPress: applyWrapFormat, icon: 'format-bold' },
  { key: 'I', wrapper: '*', onPress: applyWrapFormat, icon: 'format-italic' },
  { key: 'U', wrapper: '__', onPress: applyWrapFormat, icon: 'format-underline' },
  { key: 'S', wrapper: '~~', onPress: applyWrapFormat, icon: 'format-strikethrough' },
  { key: 'C', wrapper: '`', onPress: applyWrapFormat, icon: 'code-tags' },
  { key: 'CC', wrapper: '```', onPress: applyWrapFormatNewLines, icon: 'code-braces' },
  { key: 'L', prefix: '-', onPress: applyListFormat, icon: 'format-list-bulleted' },
  { key: 'WEB', onPress: applyWebLinkFormat, icon: 'link' },
  { key: 'H1', prefix: '#', onPress: applyListFormat, icon: 'format-header-1' },
  { key: 'H2', prefix: '##', onPress: applyListFormat, icon: 'format-header-2' },
  { key: 'H3', prefix: '###', onPress: applyListFormat, icon: 'format-header-3' },
  { key: 'H4', prefix: '####', onPress: applyListFormat, icon: 'format-header-4' },
  { key: 'H5', prefix: '#####', onPress: applyListFormat, icon: 'format-header-5' },
  { key: 'H6', prefix: '######', onPress: applyListFormat, icon: 'format-header-6' },
];
