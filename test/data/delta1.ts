var delta1 = {
  ops: [
    { insert: 'link', attributes: { link: 'http://a.com/?x=a&b=()' } },
    { insert: 'This ' },
    { attributes: { font: 'monospace' }, insert: 'is' },
    { insert: ' a ' },
    { attributes: { size: 'large' }, insert: 'test' },
    { insert: ' ' },
    { attributes: { italic: true, bold: true }, insert: 'data' },
    { insert: ' ' },
    { attributes: { underline: true, strike: true }, insert: 'that' },
    { insert: ' is ' },
    { attributes: { color: '#e60000' }, insert: 'will' },
    { insert: ' ' },
    { attributes: { background: '#ffebcc' }, insert: 'test' },
    { insert: ' ' },
    { attributes: { script: 'sub' }, insert: 'the' },
    { insert: ' ' },
    { attributes: { script: 'super' }, insert: 'rendering' },
    { insert: ' of ' },
    { attributes: { link: 'http://yahoo' }, insert: 'inline' },
    { insert: ' ' },
    { insert: { formula: 'x=data' } },
    { insert: ' formats.\n' },
    { insert: 'list' },
    { insert: '\n', attributes: { list: 'bullet' } },
    { insert: 'list' },
    { insert: '\n', attributes: { list: 'checked' } },
    { insert: 'some code', attributes: { code: true, bold: true } },
    { attributes: { italic: true, link: '#top', code: true }, insert: 'Top' },
    { insert: '\n' },
  ],
  html: [
    '<p>',
    '<a href="http://a.com/?x=a&amp;b=&#40;&#41;" target="_blank">link</a>',
    'This ',
    '<span class="noz-font-monospace">is</span>',
    ' a ',
    '<span class="noz-size-large">test</span>',
    ' ',
    '<strong><em>data</em></strong>',
    ' ',
    '<s><u>that</u></s>',
    ' is ',
    '<span style="color:#e60000">will</span>',
    ' ',
    '<span style="background-color:#ffebcc">test</span>',
    ' ',
    '<sub>the</sub>',
    ' ',
    '<sup>rendering</sup>',
    ' of ',
    '<a href="http://yahoo" target="_blank">inline</a>',
    ' ',
    '<span class="noz-formula">x=data</span>',
    ' formats.</p>',
    '<ul><li>list</li></ul>',
    '<ul><li data-checked="true">list</li></ul>',
    '<p><code><strong>some code</strong>',
    '<a href="#top" target="_blank"><em>Top</em></a></code></p>',
  ].join(''),
};

export { delta1 };
