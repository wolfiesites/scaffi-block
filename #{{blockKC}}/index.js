import blockName from './constants';
/**
 * External dependencies
 */
import { cloneDeep } from 'lodash';
import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import { registerBlockType } from '@wordpress/blocks';
import { createBlock, withColors } from '@wordpress/block-editor';
/**
  * Internal dependencies
  */
import Editor from './block/editor';
import Renderer from './block/renderer';
import './style/style.scss';

const settings = {
	apiVersion: 2,
	title: __( '#{{block}} ' ),
	icon: 'megaphone',
	description: __( '' ),
	category: 'common',
	support: {
		inserter: false,
		alignment: [ 'left', 'right', 'center' ],
	},
	attributes: {
		exampleAttribute: {
			type: 'string',
			default: '',
		},
		exampleAttribute2: {
			type: 'number',
			default: '',
		},
	},
	edit: Editor,

	save: Renderer,
	transform: [

	],
};

/**
  * Register block
  */
registerBlockType( `frontkom/${blockName}`, settings );

/**
  * Register deprecated block
  */
const deprecatedSettings = cloneDeep( settings );
deprecatedSettings.parent = [ `frontkomco/${blockName}` ];
delete deprecatedSettings.transform;
registerBlockType( `frontkomco/${blockName}`, deprecatedSettings );

