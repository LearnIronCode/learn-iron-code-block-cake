jQuery(document).ready( function($) {
	if ( ! $.isFunction( $.fn.arctext ) ) {
		// The jQuery arctext method is NOT defined.
		return;
	}

	// Apply ArcText to the .message in our block.
	var $message = $('.wp-block-learn-iron-code-block-cake-iron-code-cake>.message');
	$message.arctext({radius: 250});
});
