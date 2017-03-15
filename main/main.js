function versionCompare(v1, v2) {

    var v1Num = v1.split('');
    var v2Num = v2.split('');
    var tag = 0;
    for (var i = 0; i < v1.length;) {
        if (v1Num[i] === v2Num[i]) {
            i++;
        } else if (parseInt(v1Num[i]) > parseInt(v2Num[i])) {
            console.log(1);
            tag = 1;
            break;
        } else {
            console.log(2);
            tag = 1;
            break;

        }
    }
    if (tag === 0) {
        console.log('=');
    }

}
// versionCompare('1.1.b', '1.1.a')

