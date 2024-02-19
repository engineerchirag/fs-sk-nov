fs.readFile('f1.txt', function(f1Err, f1Data){
    // based on err or data handle business use case
    if (f1Err) {
        console.log('Error while reading f1.txt', f1Err);
    } else {
        console.log('F1.txt data >> ', f1Data);
        fs.readFile('f2.txt', function(f2Err, f2Data){
            if (f2Err) {
                console.log('Error while reading f2.txt', f2Err);
            } else {
                console.log('F2.txt data >> ', f2Data);
                fs.readFile('f3.txt', function(f3Err, f3Data){
                    if (f3Err) {
                        console.log('Error while reading f3.txt', f3Err);
                    } else {
                        console.log('F3.txt data >> ', f3Data);
                        fs.readFile('f4.txt', function(f3Err, f4Data){
                            if (f4Err) {
                                console.log('Error while reading f4.txt', f4Err);
                            } else {
                                console.log('F4.txt data >> ', f4Data);
                            }
                        })
                    }
                })
            }
        })
    }
})