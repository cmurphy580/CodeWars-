
function isolateIt(arr){
  return arr.map(s => {
    s = s.split(''); 
    (s.length % 2 === 0 ? s.splice(s.length / 2, 0, '|') : s.splice(s.length / 2, 1, '|')); 
    return s.join(''); 
  });  
}



/*
    Test.assertSimilar(isolateIt(["abcd","efgh"]) , ["ab|cd","ef|gh"]);
    Test.assertSimilar(isolateIt(["abcde","fghij"]) , ["ab|de","fg|ij"]);
    Test.assertSimilar(isolateIt(["1234","56789"]) , ["12|34","56|89"]);
*/