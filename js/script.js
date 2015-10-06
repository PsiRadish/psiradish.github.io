
$(function()
{
    function size()
    {
        $('.portal').each(function() // weird things happen with portals when height not explicitly defined
        {
            var $this = $(this);
            
            $this.removeAttr('style');
            $this.height($this.outerHeight(false));
        });
    }
    // call it all the time
    $(window).on('resize', size);
    // and right now
    size();
});
