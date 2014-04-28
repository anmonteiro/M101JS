# Homework Assignment 5.1 Solution

This homework is a multiple choice question; you can find the answer to the question by running the following command in the hands-on shell in the homework page itself.

```javascript
db.posts.aggregate([ {
    $unwind: "$comments"
}, {
  $group : {
    "_id" : "$comments.author",
    "count" : {
      $sum:1
    }
  }
}, {
  $sort : {
    count:-1
  }
}, {
  $limit : 5
}
]);
```
