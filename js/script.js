
$(document).ready(function()
{
    // Set screenshots max size to source image dimensions
    $("img.screenshot").each(function()
    {   
        var screenshot = this;
        // console.log(this);
        
        // Make in memory copy of image to avoid css issues
        $("<img/>").attr("src", screenshot.getAttribute("src")).load(function()
        {
            screenshot.style.maxWidth = this.width+'px';
            screenshot.style.maxHeight = this.height+'px';
        });
    });
    
    /* Immediately remove focus from clicked links and buttons
    $('a, button, input[type="button"], input[type="reset"], input[type="submit"], .button').on("click", function()
    {
        $(this).blur();
    });*/
    
    // Emoji One
    $(".post-content > p, .post-content > ul > li").each(function()
    {
        var original = $(this).html();
        // use .shortnameToImage if only converting shortnames (for slightly better performance)
        var converted = emojione.toImage(original);
        $(this).html(converted);
    });
    
    // Gift List: create hidden print URLs
    $(".gift-list ol > li").each(function()
    {
        var url = $(this).children('a').attr('href');
        var newListItem = $('<li><code>' + url + '</code></li>');
        
        $(this).children('ul').append(newListItem);
    });
});
