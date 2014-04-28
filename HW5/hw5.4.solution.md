# Homework Assignment 5.4 Solution

This homework is a multiple choice question; you can find the answer to the question by running the following command in the mongoshell.
Be certain that you have downloaded the handout and ran the commands specified in the homework page.

```javascript
db.zips.aggregate([ {
  $project : {
    first_char: {
      $substr : [ "$city", 0, 1 ]
    },
    pop : 1
  }
}, {
  $match : {
  	"first_char" : {
  	  $regex : "\\d"
  	}
  }
}, {
  $group : {
  	"_id" : 1,
  	"count" : {
  	  $sum : "$pop"
  	}
  }
}
]);
```

