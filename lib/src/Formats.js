import applyWrapFormat from './applyWrapFormat';
import applyWrapFormatNewLines from './applyWrapFormatNewLines';
import applyListFormat from './applyListFormat';
import applyWebLinkFormat from './applyWebLinkFormat';

export default [
  { key: 'B', wrapper: '**', onPress: applyWrapFormat, style: { fontWeight: 'bold' } },
  { key: 'I', wrapper: '*', onPress: applyWrapFormat, style: { fontStyle: 'italic' } },
  { key: 'U', wrapper: '__', onPress: applyWrapFormat, style: { textDecorationLine: 'underline' } },
  {
    key: 'S',
    wrapper: '~~',
    onPress: applyWrapFormat,
    style: { textDecorationLine: 'line-through' },
  },
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
