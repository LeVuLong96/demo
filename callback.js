function abc(callback) {
        setTimeout(function() {
            console.log("a");
            callback();
        },1000)
        }
function bcd() {
    console.log("b");
        }
abc(bcd);