function sc(said,suspects){
  return String(suspects.filter(suspect => RegExp('^' + said.replace(/~/g, '.'), 'i').test(suspect)));
}

/*
TESTS: 

var testsuspects=['Bernard Deltheil','R Steell','Peter Gone','Peter Reeves','Roland Scorsini']
Test.assertSimilar(sc("b~~~~~~~~~~~~~~l",testsuspects), 'Bernard Deltheil' );
Test.assertSimilar(sc('p~t~r',testsuspects), 'Peter Gone,Peter Reeves' );
Test.assertSimilar(sc('PE~er~gOnE',testsuspects), 'Peter Gone' );
Test.assertSimilar(sc('a~b~c~~d',testsuspects), '');



*/