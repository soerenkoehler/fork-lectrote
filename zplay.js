'use strict';

var all_options = {
  container: '#parchment',
  lib_path: 'parchment/',
  lock_story: true,
  lock_option: true,
  page_title: false
};

/* Short string which will (hopefully) be unique per game. We don't need
   this until autosave exists, so we just define a dummy value. */
var signature = 'zcode_dummy';

/* Launch the game. The buf argument must be a Node Buffer.
 */
function load_run(optobj, buf)
{
    if (!optobj)
        optobj = window.game_options;
    if (optobj)
        jQuery.extend(all_options, optobj);

    all_options.default_story = [ buf ];

    /* Now we perform a simplified version of the code from Parchment's
       src/parchment/outro.js. (The intro.js stuff is baked into
       zplay.html.) */

    parchment.options = all_options;
    var library = new parchment.lib.Library();
    parchment.library = library;
    library.load();
}

function get_game_signature()
{
    return signature;
}

function get_metadata(key)
{
    return null;
}

window.GiLoad = {
    load_run: load_run,
    get_metadata: get_metadata,
    get_game_signature: get_game_signature,
};
