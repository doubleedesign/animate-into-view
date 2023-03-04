// See custom.css for some additional overrides that I haven't been able to work out how to do here
module.exports = {
	plain: {
		color: '#F8F8F2',
		backgroundColor: '#2a2a2d'
	},
	styles: [
		{
			types: ['prolog', 'builtin', 'punctuation', 'symbol', 'string'],
			style: {
				color: 'rgb(255,255,255)',
			}
		},
		{
			types: ['constant', 'literal-property', 'atrule'],
			style: {
				color: 'rgb(246, 78, 212)'
			}
		},
		{
			types: ['number', 'unit'],
			style: {
				color: 'rgb(0, 255, 247)'
			}
		},
		{
			types: ['parameter'],
			style: {
				color: 'rgb(252, 173, 221)',
				textDecorationLine: 'underline'
			}
		},
		{
			types: ['dom'],
			style: {
				color: 'rgb(246, 78, 212)',
				fontStyle: 'italic',
				textDecorationLine: 'underline'
			}
		},
		{
			types: ['variable'],
			style: {
				color: 'rgb(189, 147, 249)'
			}
		},
		{
			types: ['property', 'attr-name'],
			style: {
				color: 'rgb(189, 147, 249)'
			}
		},
		{
			types: ['operator'],
			style: {
				color: 'rgb(255,224,30)'
			}
		},
		{
			types: ['tag', 'selector'],
			style: {
				color: 'rgb(144, 227, 255)',
			}
		},
		{
			types: ['keyword'],
			languages: ['javascript'],
			style: {
				color: 'rgb(141,168,255)'
			}
		},
		{
			types: ['comment'],
			style: {
				color: 'rgb(119,119,119)'
			}
		},
		{
			types: ['attr-value', 'inserted', 'char', 'class-name', 'known-class-name', 'maybe-class-name'],
			style: {
				color: 'rgb(137, 255, 162)'
			}
		},
		{
			types: ['function'],
			style: {
				color: 'rgb(255, 255, 115)',
				fontStyle: 'italic'
			}
		},
		{
			types: ['function-variable', 'method'],
			style: {
				color: 'rgb(255,195,107)'
			}
		},
		{
			types: ['deleted'],
			style: {
				color: 'rgb(255, 85, 85)'
			}
		},
		{
			types: ['changed'],
			style: {
				color: 'rgb(255, 184, 108)'
			}
		},
	]
};
