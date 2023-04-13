/**
 * WordPress Dependencies
 */

import { InspectorControls, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';


/**
 * custom components shared between blocks
 */
import BackgroundImagePanel from '../../components/BackgroundImagePanel';
/**
 *
 * @param {object} props component props
 * @returns {object} Component
 */

const Inspector = ( props ) => {
	return (
		<Fragment>
            {/* this one is toolbar above block */}
			<BlockControls>
				<AlignmentToolbar />
			</BlockControls>
            {/* this one is sidebar in editor block add some inputs and setAttrbutes based on the picking */}
			<InspectorControls>
				
			</InspectorControls>
		</Fragment>
	);
};

export default Inspector;
