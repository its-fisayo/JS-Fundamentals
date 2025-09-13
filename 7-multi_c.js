let message = "";

    const args = process.argv.slice(2);
    let x = parseInt(args[0]);
    if(args[0] == undefined) {
        message += "Missing number of occurrences";
    } else {
        for(i = 0; i < x; i++) {
            if(i == x-1) {
                message += "C is fun";
            } else {
                message += "C is fun\n";
            }
        }
    }
    console.log(message);

