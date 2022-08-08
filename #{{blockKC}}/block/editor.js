
import blockName from '../constants';

/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
import { Fragment } from '@wordpress/element';
import { useBlockProps, InnerBlocks, getColorClassName } from '@wordpress/block-editor';

/**
 * Internal Dependencies
 */
import Controls from './controls';


// this goes to "exit" prop while registering block (represntation of what u see on gutenberg side)
const Editor = ( props ) => {
	const { className, attributes: { exampleAttribute, exampleAttribute2 } } = props;

	const classes = classnames(
		className,
		`block-${blockName}`,
	);
	// this is only class of the main div
	const blockProps = useBlockProps( {
		className: classes,
	} );

	// example of how to add styles
	const blockStyle = {
		backgroundImage: 'url("/example/url/")',
		backgroundColor: 'blue'
	};

	return (
		<Fragment>
			{/* controls component / element holds all inputs and controllers of attributes Component is created with html and some javascript functions states etc*/}
			<Controls
				{ ...{ ...props } }
			/>
			<div { ...blockProps } style={ blockStyle }>
				<div>
					
				</div>
			</div>
		</Fragment>
	);
};

export default Editor;
