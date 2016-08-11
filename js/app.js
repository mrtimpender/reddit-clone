var app = angular.module('reddit-clone', []);
app.controller('RedditController', function($scope){
  $scope.view = {};
  $scope.view.posts = [
    {
      title: 'Christian Bale Ale',
      author: 'Johnny McSassafras',
      body: 'Stumptown celiac sustainable cornhole small batch. Normcore church-key portland franzen kitsch, kinfolk cray PBR&B kombucha poutine. Single-origin coffee church-key pug next level. Chartreuse mixtape cornhole, gluten-free knausgaard asymmetrical migas. Brooklyn gochujang celiac kombucha, sartorial sriracha venmo truffaut meggings godard readymade keffiyeh.',
      votes: 5,
      img: 'https://untappd.akamaized.net/photo/2015_11_01/b4beef29cdc006b3313b9806f95cb5c0_320x320.jpg',
      comments: 'comments',
      date: new Date()
    },
    {
      title: 'Doctor Philsner Pilsner',
      author: 'JRR Tolkien',
      body: 'Affogato try-hard gluten-free, crucifix etsy venmo helvetica selvage street art dreamcatcher fanny pack banjo kale chips. Pork belly tumblr photo booth meggings, jean shorts blog kale chips hella VHS selvage lomo skateboard +1 YOLO street art.',
      votes: -1,
      img: 'http://savourwinnipeg.com/wp-content/uploads/2012/07/Phils-Pils.jpg',
      comments: 'comments',
      date: new Date()
    }
  ];

});
