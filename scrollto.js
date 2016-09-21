/**
 * scrollTo
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Diego S Mota http://diegosm.in
 */

(function( $ ){

    $.fn.scrollTo = function( velocity ) {

        if ( typeof velocity === "undefined") {
            velocity = 1000;
        }
        $('html, body').animate(
            {
                scrollTop: this.offset().top
            },
            {
                duration: velocity,
            }
        );

    };
})( jQuery );