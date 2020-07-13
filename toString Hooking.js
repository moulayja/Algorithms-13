
/*
You have one job and one job only, to ruin the day of any unsuspecting victim using
the toString function. Hook the String prototype toString to instead 
return a string that isin reverse.
*/

String.prototype.toString = function () {
    let _=[];for(let e in this) {(this.hasOwnProperty(e))? _.push(this[e]):false};
    return _.reverse().join('')
};



