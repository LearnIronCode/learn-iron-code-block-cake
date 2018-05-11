( function( wp ) {
	/**
	 * Registers a new block provided a unique name and an object defining its behavior.
	 * @see https://github.com/WordPress/gutenberg/tree/master/blocks#api
	 */
	var registerBlockType = wp.blocks.registerBlockType;
	/**
	 * Returns a new element of given type. Element is an abstraction layer atop React.
	 * @see https://github.com/WordPress/gutenberg/tree/master/element#element
	 *
	 * TextControl Renders a text input field.
	 * @see https://github.com/WordPress/gutenberg/blob/master/components/text-control
	 */
	var el = wp.element.createElement,
		TextControl = wp.components.TextControl;
	/**
	 * Retrieves the translation of text.
	 * @see https://github.com/WordPress/gutenberg/tree/master/i18n#api
	 */
	var __ = wp.i18n.__;

	/**
	 * Every block starts by registering a new block type definition.
	 * @see https://wordpress.org/gutenberg/handbook/block-api/
	 */
	registerBlockType( 'learn-iron-code-block-cake/iron-code-cake', {
		/**
		 * This is the display title for your block, which can be translated with `i18n` functions.
		 * The block inserter will show this name.
		 */
		title: __( 'Iron Code Cake' ),

		/**
		 * Blocks are grouped into categories to help users browse and discover them.
		 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
		 */
		category: 'widgets',

		/**
		 * Optional block extended support features.
		 */
		supports: {
			// Removes support for an HTML mode.
			html: false,
		},
		/**
		 * The edit function describes the structure of your block in the context of the editor.
		 * This represents what the editor will render when the block is used.
		 * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit
		 *
		 * @param {Object} [props] Properties passed from the editor.
		 * @return {Element}       Element to render.
		 */
		edit: function( props ) {

			function onChangeMessage( newMessage ) {
				props.setAttributes( { message: newMessage } );
			}

			function onChangeName( newName ) {
				props.setAttributes( { name: newName } );
			}

			/**
			 * Render our block for the editor using our message attribute.
			 *
			 * Additionally, assign an onChange function for updating the attribute.
			 */
			return el(
				'div',
				{
					className: props.className,
				},
				[
					el(
						TextControl,
						{
							className: 'message',
							label: __('Message above cake.'),
							maxlength: 16,
							onChange: onChangeMessage,
							placeholder: __('Your message, e.g. Happy Birthday'),
							value: props.attributes.message
						}
					),
					el(
						TextControl,
						{
							className: 'name',
							label: __('Name on cake.'),
							maxlength: 20,
							onChange: onChangeName,
							placeholder: __('Name here'),
							value: props.attributes.name
						}
					)
				]
			);
		},
		/**
		 * The save function defines the way in which the different attributes should be combined
		 * into the final markup, which is then serialized by Gutenberg into `post_content`.
		 * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
		 *
		 * @param {Object} [props] Properties passed from the editor.
		 * @return {Element}       Element to render.
		 */
		save: function( props ) {

			return el(
				'div',
				{
					className: props.className,
				},
				[
					el( 'h3', { className: 'message' }, props.attributes.message ),
					el( 'div', { className: 'flame' } ),
					el( 'div', { className: 'candle' } ),
					el( 'div', { className: 'layer-top' },
						el( 'div', { className: 'icing' } ),
					),
					el( 'div', { className: 'icing-middle' } ),
					el( 'div', { className: 'piping-middle' } ),
					el( 'div', { className: 'layer-middle' },
						el( 'p', { className: 'name' }, props.attributes.name )
					),
					el( 'div', { className: 'icing-bottom' } ),
					el( 'div', { className: 'piping-bottom' } ),
					el( 'div', { className: 'layer-bottom' } )
				]
			);
		}
	} );
} )(
	window.wp
);
