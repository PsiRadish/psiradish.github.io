
//// Weird things happen with portals when height not explicitly defined
function arcaneResize()
{
    $('.portal').each(function()
    {
        var $this = $(this);
        
        $this.removeAttr('style');
        // console.log("Portal height", $this.outerHeight(false));
        $this.height($this.outerHeight(false));
    });
}

$(document).ready(function()
{
    //// Do resize things on resize
    $(window).on('resize', arcaneResize);
    // and when the page finishes loading
    $('body')[0].onload = arcaneResize;
    
    
    //// Immediately remove focus from clicked links and buttons
    $('a, button, input[type="button"], input[type="reset"], input[type="submit"], .button').on("click", function()
    {
        $(this).blur();
    });
    
    
    //// Select box
    /*$('select').on("click", function(e)
    {
        e.preventDefault();
        
        
    });*/
});
