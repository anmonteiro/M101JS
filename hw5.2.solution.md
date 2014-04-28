# Homework Assignment 5.2 Solution

This homework is a multiple choice question; you can find the answer to the question by running the following command in the hands-on shell in the homework page itself.

```javascript
db.zips.aggregate([ {
  $match : {
    pop : {
      $gt : 25000
    },
    state : {
      $in : ["NY","CA"]
    }
  }
}, {
  $group : {
    "_id" : "",
    "avg_pop" : {
      $avg : "$pop"
    }
  }
}
]);
```
