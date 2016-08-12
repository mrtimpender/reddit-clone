var app = angular.module('reddit-clone', ['ngAnimate']);
app.controller('RedditController', function($scope){
  $scope.view = {};
  $scope.view.sorts = ['votes', 'date', 'title'];
  $scope.view.showPostForm = false;
  $scope.view.sortBy = 'title';
  $scope.view.posts = [
    {
      title: 'Christian Bale Pale Ale',
      author: 'Johnny Sassafras',
      body: 'Stumptown celiac sustainable cornhole small batch. Normcore church-key portland franzen kitsch, kinfolk cray PBR&B kombucha poutine. Single-origin coffee church-key pug next level. Chartreuse mixtape cornhole, gluten-free knausgaard asymmetrical migas. Brooklyn gochujang celiac kombucha, sartorial sriracha venmo truffaut meggings godard readymade keffiyeh.',
      votes: 3,
      img: 'https://untappd.akamaized.net/photo/2015_11_01/b4beef29cdc006b3313b9806f95cb5c0_320x320.jpg',
      comments: [
        {
          commentAuthor: 'Christian Bale',
          commentBody: "Hmm, I see they've omitted the pork loin with lime Jell-O."
        },
        {
          commentAuthor: 'Patrick Bateman',
          commentBody: "I could do a thousand now."
        }
      ],
      commentsView: false,
      addCommentView: false,
      date: moment('2016-08-10T23:35:01').format('llll')
    },
    {
      title: "Doctor Phil's Pils",
      author: 'Oprah',
      body: 'Affogato try-hard gluten-free, crucifix etsy venmo helvetica selvage street art dreamcatcher fanny pack banjo kale chips. Pork belly tumblr photo booth meggings, jean shorts blog kale chips hella VHS selvage lomo skateboard +1 YOLO street art.',
      votes: -4,
      img: 'http://savourwinnipeg.com/wp-content/uploads/2012/07/Phils-Pils.jpg',
      comments: [],
      commentsView: false,
      addCommentView: false,
      date: moment('2016-03-28T10:20:01').format('llll')
    },
    {
    title: 'Doppelganger Doppelbock',
    author: 'Your Evil Twin',
    body: 'Scenester blue bottle tacos pinterest leggings lumbersexual, vegan photo booth irony offal. Retro affogato kickstarter jean shorts crucifix. Tilde sriracha lo-fi occupy organic, tattooed health goth readymade drinking vinegar put a bird on it 3 wolf moon tousled poutine cred disrupt. Fixie health goth tacos kickstarter, blue bottle hoodie shoreditch tattooed chia cliche. ',
    votes: 0,
    img: 'http://www.homebrewing.org/assets/images/doppelbock.jpg',
    comments: [],
    commentsView: false,
    addCommentView: false,
    date: moment('2016-06-04T08:45:01').format('llll')
  },
  {
  title: 'Harry Porter',
  author: 'Albus Dumblebored',
  body: 'Dark, twisted, and served in a Goblet of Fire!!',
  votes: 12,
  img: 'https://s-media-cache-ak0.pinimg.com/564x/05/3b/4a/053b4a92b6c441b551f1d268b255293c.jpg',
  comments: [],
  commentsView: false,
  addCommentView: false,
  date: moment(new Date()).format('llll')
  }
  ];
  $scope.upVote = function(post){
    post.votes++
  };
  $scope.downVote = function (post){
    post.votes--
  };
  $scope.voteCheck = function (post) {
    if (post.votes == 0) {
      return 'zero'
    } else if (post.votes > 0){
      return 'green'
    } else {
      return 'red'
    };
  };
  $scope.showComments = function(post){
    post.addCommentView = false;
    if (post.comments.length !== 0){
      post.commentsView = !post.commentsView;
    }
  };
  $scope.showAddComment = function(post){
    post.commentsView = false;
    post.addCommentView = !post.addCommentView;
  };
  $scope.showAddPost = function(){
    $scope.showPostForm = !$scope.showPostForm;
  }
  $scope.submitComment = function(post,commentAuthor,commentBody){
    var new_stuff = {
      commentAuthor: commentAuthor,
      commentBody: commentBody
    }
    post.comments.push(new_stuff);
    post.addCommentView = false;
  };
  $scope.submitPost = function(posts,title,author,body,img){
    var new_date = new Date();
    var new_stuff = {
    title: title,
    author: author,
    body: body,
    votes: 0,
    img: img,
    comments: [],
    commentsView: false,
    addCommentView: false,
    date: moment(new_date).format('llll')
  }
  posts.push(new_stuff);
  $scope.showPostForm = !$scope.showPostForm;
};
  $scope.sortIt = function(sortSelection) {
    console.log(sortSelection);
    if (sortSelection == 'votes' ) {
      $scope.view.sortBy = '-'+sortSelection;
    } else {
      $scope.view.sortBy = sortSelection
    }
  }

});
