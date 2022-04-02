(function() {
    "use strict";

    function init() {
        var header = document.createElement("h1");
        header.innerText = "Quiet Apocalypse";

        var subheader = document.createElement("h2");
        subheader.innerText = "Delay The Inevitable";

        var canvas = new LDBB.GFX.Canvas(320, 240, 2);

        document.body.appendChild(header);
        document.body.appendChild(subheader);
        document.body.appendChild(canvas.Root);

        canvas.Fill("#444");
    }

    window.addEventListener("load", function() {
        LDBB.DefaultLoader.Load("/ldbb/src", init);
    });
}());