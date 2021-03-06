/* Front-end script */
// Stage the loading elements
jQuery(function($) {
    // Basic elements
    var overlay = document.createElement('div');
    var progstat = document.createElement('div');
    overlay.className = 'queerify-overlay';
    progstat.className = 'queerify-progstat';
    var image = document.createElement('img');
    image.className = 'atleast-one-image';
    // Queer elements
    var queerifyContainer = document.createElement('div');
    var flag = document.createElement('img');
    var flagCover = document.createElement('div');
    var neonCat = document.createElement('img');
    queerifyContainer.className = 'queerify-flag-container';
    flag.className = 'queerify-flag';
    flagCover.className= 'queerify-cover';
    neonCat.className = 'queerify-neon-cat'
    // Inserting elements in the DOM
    overlay.appendChild(queerifyContainer);
    overlay.appendChild(progstat);
    queerifyContainer.appendChild(flag);
    queerifyContainer.appendChild(flagCover);
    queerifyContainer.appendChild(neonCat);
    imageNumber = document.images;

    var bodyElement = document.getElementsByTagName('body')[0];
    if (typeof(bodyElement) != 'undefined' && bodyElement != null)
    {
        bodyElement.insertBefore(overlay, bodyElement.firstChild);
        if (imageNumber.length < 1) {
            bodyElement.appendChild(image);
        }
    }
    // plugin settings data
    var $phpData = phpData;
    var flagName = $phpData.flag;
    var flagPath = $phpData.imgPath + flagName + '.png';
    var neonCatPath = $phpData.imgPath + 'neon-cat.png';
    var backgroundImagePath = 'url(' + flagPath + ')';
    $(flag).attr('src', flagPath);
    $(neonCat).attr('src', neonCatPath);
    if ($phpData.flag == 'intersex') { // flags without stripes look streched otherwise
        $(queerifyContainer).css('background-color', '#ffd800');
    } else if ($phpData.flag == 'stars') {
        $(queerifyContainer).css('background-image', 'none');
    } else {
        $(queerifyContainer).css('background-image', backgroundImagePath);
    }
   
});
// Loading progress screen with percentage and bar
jQuery(function($) {
    function getElementByClass(el){ return document.getElementsByClassName(el)[0]; }
    function loadbar() {
        var bodyElement = document.getElementsByTagName('body')[0],
        // Basic elements
        overlay = getElementByClass('queerify-overlay'),
        progstat = getElementByClass('queerify-progstat'),
        img = document.images,
        start = 0,
        total = img.length,
        // Queer elements
        flagCover = getElementByClass('queerify-cover'),
        neonCat = getElementByClass('queerify-neon-cat');
        
        if(total == 0) return doneLoading();

        function imgLoaded(){
            start += 1;
            var percentage = ((100/total*start) << 0) +"%";
            setTimeout(function() {
                progstat.innerHTML = percentage;
                flagCover.style.left = percentage;
                neonCat.style.left = percentage;
                if(start===total) return doneLoading();
            }, 500);
        }
        function doneLoading(){
            bodyElement.style.opacity = 1;
            overlay.style.opacity = 0;
            setTimeout(function(){ 
                overlay.style.display = "none";
            }, 1200);
        }
        for(var i=0; i<total; i++) {
            var tImg     = new Image();
            tImg.onload  = imgLoaded;
            tImg.onerror = imgLoaded;
            tImg.src     = img[i].src;
        }    
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);

}());