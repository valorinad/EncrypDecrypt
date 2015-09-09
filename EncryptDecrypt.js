function kriptimi(str, n) {
    n = parseInt(n);
    console.log('plaintext:', str);
    var output = '',
        alfabeti = 'abcdefghijklmnopqrstuvwxyz';
    for (i = 0; i < str.length; i++) {
        var index = alfabeti.indexOf(str[i]);

        if (index + n >= alfabeti.length) {
            console.log('po ekzekutohet:');
            var diferenca = alfabeti.length - index;
            output += alfabeti[n - diferenca];
        } else {
            output += alfabeti[index + n];

        }
    }
    return output;
}
function dekript(str, n) {
    n = parseInt(n);
    var output = '',
        alfabeti = 'abcdefghijklmnopqrstuvwxyz';

    for (i = 0; i < str.length; i++) {
        var index = alfabeti.indexOf(str[i]);
        if (index - n < 0) {
            console.log('po ekzekutohet:');
            var diferenca = Math.abs(index - n);
            output += alfabeti[alfabeti.length - diferenca];
        } else {
            output += alfabeti[index - n];
            
        }
    }
    return output;
}
var n = prompt();
var c = kriptimi('valorina', n);
var d = dekript(c, n);
console.log('kriptimi:', c);
console.log('dekriptimi:', d);