import applyWrapFormat from './applyWrapFormat';
import applyWrapFormatNewLines from './applyWrapFormatNewLines';
import applyListFormat from './applyListFormat';
import applyWebLinkFormat from './applyWebLinkFormat';

export default [
  { key: 'B', wrapper: '**', onPress: applyWrapFormat },
  { key: 'I', wrapper: '*', onPress: applyWrapFormat },
  { key: 'U', wrapper: '__', onPress: applyWrapFormat },
  { key: 'S', wrapper: '~~', onPress: applyWrapFormat },
  { key: 'C', wrapper: '`', onPress: applyWrapFormat },
  { key: 'CC', wrapper: '```', onPress: applyWrapFormatNewLines },
  { key: 'L', prefix: '-', onPress: applyListFormat },
  { key: 'WEB', onPress: applyWebLinkFormat },
  { key: 'H1', prefix: '#', onPress: applyListFormat },
  { key: 'H2', prefix: '##', onPress: applyListFormat },
  { key: 'H3', prefix: '###', onPress: applyListFormat },
  { key: 'H4', prefix: '####', onPress: applyListFormat },
  { key: 'H5', prefix: '#####', onPress: applyListFormat },
  { key: 'H6', prefix: '######', onPress: applyListFormat },
];
