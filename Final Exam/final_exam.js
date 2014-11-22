1.
db.messages.find({"headers.From":"andrew.fastow@enron.com","headers.To":"jeff.skilling@enron.com"}).count()

2.
db.messages.aggregate({
  $project : {
    "headers.To" : 1,
    "headers.From" : 1
  }}, {
  $unwind : "$headers.To"
  }, {
  $group : {
  	"_id" : {
  	  "from" : "$headers.From",
  	  "to" : "$headers.To"
    },
  	"countOfFrom" : {
  	  $sum : 1
  	}
  }}, {
  $match : {
  	"_id.from" : "susan.mara@enron.com",
  	"_id.to" : "jeff.dasovich@enron.com"
  }}
);

750
974
679
648
567
550

3.
db.messages.find({
  "headers.Message-ID" : "<8147308.1075851042335.JavaMail.evans@thyme>"
});

db.messages.update({
  "headers.Message-ID" : "<8147308.1075851042335.JavaMail.evans@thyme>"
}, {
  $addToSet : { "headers.To" : "mrpotatohead@mongodb.com" }
});

7.
var res = db.albums.aggregate({
  $unwind : "$images"
}, {
  $group : {
    _id : "$images"
  }
})
var ids = res.map(function( a ) {
  return a._id;
});
db.images.remove({_id:{$nin:ids}})

db.images.aggregate({
  $unwind : "$tags"
}, {
  $group : {
    _id : "$tags",
    count : {$sum : 1}
  }
});



