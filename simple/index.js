(
    function(){
        Content.print(new Date().getTime())
        Content.println("script start");
        setTimeout(function() {
            Content.print(new Date().getTime())
            Content.println('setTimeout');
        }, 0)


        // for(var i=0; i<999; i++){
        //     Content.println(i);
        // }

        Content.print(new Date().getTime())
        Content.println("script end");
    }
)()