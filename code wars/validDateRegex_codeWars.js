var validDate = /\[(((02-(0[1-9]|1[0-9]|2[0-8]))|((04|06|09|11)-(0[1-9]|1[0-9]|2[0-9]|30)))|((01|03|05|07|08|10|12)-(0[1-9]|1[0-9]|2[0-9]|3[0-1])))\]/;




/*
BEST PRACTICE: 

1) 

// Valid Date Regex:
// Note: in general, OR pipes (|) are bad in a regex, they are hard to optimize
// and cause a lot of back-tracking.  This uses a lot more than would be preferential,
// but that's because this is a terrible, terrible idea.
// In the real world, you should simply match on /\[(\d\d)-(\d\d)\]/, then validate the date
// by passing it into a date object.
//
//  \[                       Start with an open bracket
//  (?:                      Non-capturing group for entire contents
//
//    (?:                    Non-capturing group for February
//      02-                  literal 0 2 -
//      (?:                  Non-capturing group for February days
//        0[1-9]             00-09
//        |                  OR
//        1\d                10-19
//        |                  OR
//        2[0-8]             20-28
//      )
//    )
//    |                      OR
//
//    (?:                    Non-capturing group for months with 31 days
//      (?:                  Non-capturing group for month
//        0[13578]           01, 03, 05, 07, 08
//        |                  OR
//        1[02]              10, 12
//      )
//      -                    literal -
//      (?:                  Non-capturing group for days
//        0[1-9]             00-09
//        |                  OR
//        [12]\d             10-29
//        |                  OR
//        3[01]              30, 31
//      )
//    )
//    |                      OR
//
//    (?:                    Non-capturing group for months with 30 days
//      (?:                  Non-capturing group for month
//        0[469]             04, 06, 09
//        |                  OR
//        11                 literal 1 1
//      )
//      -                    literal -
//      (?:                  Non-capturing group for days
//        0[1-9]             00-09
//        |                  OR
//        [12]\d             10-29
//        |                  OR
//        30                 literal 3 0
//      )
//    )
//  )
//  \]                       End with a closing bracket
//
var validDate = /\[(?:(?:02-(?:0[1-9]|1\d|2[0-8]))|(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01]))|(?:(?:0[469]|11)-(?:0[1-9]|[12]\d|30)))\]/;

-----------------------------------------------------------

2)

var days28 = /02-(0[1-9]|1\d|2[0-8])/
var days30 = /(?:0[469]|11)-(?:0[1-9]|[12]\d|30)/
var days31 = /(?:0[13578]|10|12)-(?:0[1-9]|[12]\d|3[01])/

var validDate = new RegExp(
  '\\[(' +
    '(?:' + days28.source + ')|' +
    '(?:' + days30.source + ')|' +
    '(?:' + days31.source + ')' +
  ')\\]'
)

-----------------------------------------------------------

3)

var validDate = new RegExp('\\[('

  // months with 31 days
  + '(0[13578]|1[02])-' 
  + '(0[1-9]|[1-2][0-9]|3[0-1])|'
  
  // months with 30 days
  + '(0[469]|11)-'
  + '(0[1-9]|[1-2][0-9]|30)|'
  
  // february (28 days)
  + '02-'
  + '(0[1-9]|1[0-9]|2[0-8])'
  
+ ')\\]');

*/