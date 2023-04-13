import blockName from '../constants';

import { InnerBlocks, useBlockProps, getColorClassName } from '@wordpress/block-editor';

// very important dependency classnames, always use it!
import classnames from 'classnames';


// this goes to "save" prop while registering block, representation of what u see on fronted
const Renderer = ( { className, attributes: { exampleAttribute } } ) => {

	const classes = classnames(
		className,
		`frontkom-${blockName}`,
		{
			[ `${blockName}-custom-class-${ exampleAttribute }` ]: exampleAttribute !== '',
		},
	);

	// block props in this specific case is only className, className in react defines just "class" attribute
	const blockProps = useBlockProps.save( {
		className: classes,
	} );

	// example styling
	const blockStyle = {
		height: '100px',
		backgroundRepeat: 'no-repeat',
	};

	return (

		<div { ...blockProps } style={ blockStyle }>
			<div className="container">
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default Renderer;
