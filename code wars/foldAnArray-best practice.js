function foldArray(a, n) {
  const r = [], c = a.slice();
  while (c.length) r.push(c.pop() + (c.shift() || 0));
  return n - 1 ? foldArray(r, n - 1) : r;
}

//best practice


/*TESTS
describe("Solution", function(){
  it("basic tests", function(){
    var input = [ 1, 2, 3, 4, 5 ];
    var expected = [ 6, 6, 3 ];
    Test.assertSimilar(foldArray(input, 1), expected);

    expected = [ 9, 6 ];
    Test.assertSimilar(foldArray(input, 2), expected);

    expected = [ 15 ];
    Test.assertSimilar(foldArray(input, 3), expected);

    input = [ -9, 9, -8, 8, 66, 23 ];
    expected = [ 14, 75, 0 ];
    Test.assertSimilar(foldArray(input, 1), expected);
  });
});
*/
