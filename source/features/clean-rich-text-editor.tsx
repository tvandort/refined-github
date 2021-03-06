import './clean-rich-text-editor.css';
import select from 'select-dom';
import features from '../libs/features';

function hideButtons(): void {
	document.body.classList.add('rgh-clean-rich-text-editor');
}

function hideTextareaTooltip(): void {
	for (const textarea of select.all('.comment-form-textarea')) {
		textarea.title = '';
	}
}

features.add({
	id: __featureName__,
	description: 'Hides unnecessary comment field tooltips and toolbar items.',
	screenshot: 'https://user-images.githubusercontent.com/1402241/53629083-a4fe8900-3c47-11e9-8211-bfe2d254ffcb.png'
}, {
	include: [
		features.hasRichTextEditor
	],
	load: features.onAjaxedPages,
	init: hideTextareaTooltip
}, {
	include: [
		features.isRepo
	],
	load: features.onDocumentStart,
	init: hideButtons
});
