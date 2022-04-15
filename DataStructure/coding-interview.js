/*
 Coding Requirement

*/

// %3  - Foo % 5 = Bar & Both FooBar

let i=1;
for (i; i<=100;i++) {
    if(i %3 == 0 && i %5 == 0){
        console.log("faoobar");
    } else if(i %5 == 0) {
        console.log("bar");
    } else if (i %3 == 0) {
        console.log("foo");
    } else {
        console.log(i);
    }
}