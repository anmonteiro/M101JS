# Homework Assignment 5.3 Solution

This homework is a multiple choice question; you can find the answer to the question by running the following command in the hands-on shell in the homework page itself.

```javascript
db.grades.aggregate([ {
  $unwind : "$scores"
}, {
  $match : {
  	"scores.type" : {
  	  $ne : "quiz"
  	}
  }
}, {
  $group : {
  	"_id" : {
  	  "class_id" : "$class_id",
  	  "stu_id" : "$student_id"
  	},
  	"avg_scores" : {
  	  $avg : "$scores.score"
  	}
  }
}, {
  $group : {
  	"_id" : "$_id.class_id",
  	"avg_class_scores" : {
  	  $avg : "$avg_scores"
  	}
  }
}, {
  $sort : {
  	"avg_class_scores" : -1
  }
}, {
  $limit : 5
}
]);
```

