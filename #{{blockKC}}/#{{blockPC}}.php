<?php
// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}
// to init / activate the block go one directory higher and follow other blocks convention
class 
{
    function __construct()
    {
        add_action('init', [$this, 'register_block']);
    }

    function register_block()
    {
        /**
         * Register Gutenberg block on server-side.
         *
         * Register the block on server-side to ensure that the block
         * scripts and styles for both frontend and backend are
         * enqueued when the editor loads.
         *
         * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
         * @since 1.16.0
         */
        register_block_type(
            'frontkom/#{{blockKC}}',
            array(
                // Enqueue blocks.style.build.css on both frontend & backend.
                'style'         => 'blocks-style-css',
                // Enqueue blocks.build.js in the editor only.
                'editor_script' => 'editor-block-block-js',
                // Enqueue blocks.editor.build.css in the editor only.
                'editor_style'  => 'blocks-editor-css',
                // 'render_callback' => [$this, 'divider_block_renderer']
            )
        );
    }
}
