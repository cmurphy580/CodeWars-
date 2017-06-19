function sc(a,b,c) {
  [a,b,c] = [a,b,c].sort((x,y) => x - y);
  if (a + b == c) return `${a}+${b}=${c}`;
  if (a * b == c) return `${a}*${b}=${c}`;
  return '';
}

/*
TESTS: 

Test.assertSimilar(sc(1,2,3)=="1+2=3"||sc(1,2,3)=="2+1=3"||sc(1,2,3)=="3-2=1"||sc(1,2,3)=="3-1=2", true, "good luck!");  
Test.assertSimilar(sc(2,2,4)=="2+2=4"||sc(2,2,4)=="2*2=4"||sc(2,2,4)=="4-2=2"||sc(2,2,4)=="4/2=2", true, "good luck!");  
Test.assertSimilar(sc(6,2,3)=="2*3=6"||sc(6,2,3)=="3*2=6"||sc(6,2,3)=="6/2=3"||sc(6,2,3)=="6/3=2", true, "good luck!");  
Test.assertSimilar(sc(6,5,4),"", "good luck!");  
Test.assertSimilar(sc(2,3,4),"", "good luck!"); 

*/