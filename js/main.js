$(document).ready(function() {
    var plinks = [
       	       	{
            name: 'shy',
            plink: 'http://steamcommunity.com/profiles/76561198263666801'
        },
		{
            name: 'winter',
            plink: 'http://steamcommunity.com/id/analyse/'
       },       
	   {
            name: 'c.j',
            plink: 'http://steamcommunity.com/profiles/76561198079434058/'
        },
		{
            name: 'russian',
            plink: 'http://steamcommunity.com/id/russialife_/'
		},
        {
            name: 'david',
            plink: 'http://steamcommunity.com/id/davidwut'
        },
        {
            name: 'stanlay',
            plink: 'http://steamcommunity.com/id/stanlay-/'
        },
	{
            name: 'forge',
            plink: 'http://steamcommunity.com/id/1waybaim/'

        },   
		];    
	
    for (var i in plinks) {
        var plink = plinks[i];
        $('#marquee').append('<a href="' + plink.plink + '" target="_blank">' + plink.name + '</a>');
        var plink = $('#marquee').children('a').last();
        if (i != plinks.length - 1) {
            $('#marquee').append(' - ')
        }
    }
    $('#marquee').marquee({
        duration: 7000,
        gap: 310,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    })

	window.SetVolume = function(val)
	{
    var player = document.getElementById('video');
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
	}
	
	});
