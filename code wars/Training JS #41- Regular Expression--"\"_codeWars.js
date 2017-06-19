//PALINDROME REGEX

var regex=/\b(\w)?(\w)?(\w).?\3\2\1\b/gm







/*
TESTS: 

    Test.assertSimilar("aa bbb cccc ddddd eeeeee fffffff".match(regex), [ 'aa', 'bbb', 'cccc', 'ddddd', 'eeeeee', 'fffffff' ]);
    Test.assertSimilar("aaa bcccd".match(regex), [ 'aaa' ]);
    Test.assertSimilar("_x_x_ --- ~~|~~".match(regex), [ '_x_x_' ]);
    Test.assertSimilar("ABCDCBA ABABABA".match(regex), [ 'ABCDCBA', 'ABABABA' ]);
    Test.assertSimilar("121 1221 13577531 11211".match(regex) , [ '121', '1221', '11211' ]);
    Test.assertSimilar("aabbbcccc d".match(regex), null);
    Test.assertSimilar("abbA CdDc".match(regex), null);
    Test.assertSimilar("1    1".match(regex), null  );
    Test.assertSimilar("1231 12341 123451 1234561".match(regex), null  );
*/