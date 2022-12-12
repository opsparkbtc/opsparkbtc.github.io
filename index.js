
$(document).ready(() => {
  
  
  const $body = $('body');
  $body.html('');


//time setter
const nowVar = new Date()
const $relativeTime = $('<div>').text(moment().startOf('second').fromNow()).css('font-family', 'Helvetica')
  .css('font-size', '70%').css('padding-bottom', '40px')


let timeFunc = function() {
  let timerVar
  timerVar = $('<div>').text(moment().startOf('second').fromNow()).css('font-family', 'Helvetica')
  .css('font-size', '70%').css('padding-bottom', '40px')
  return timerVar
} 



//object for user tweet section
selectorObject = {
  mracus: function(event) {
  $('#user-tweets').prepend($('.mracus'))
  $('#tweet-zone').empty()
},
  shawndrost: function(event) {
  $('#user-tweets').prepend($('.shawndrost'))
  $('#tweet-zone').empty()
},
  douglascalhoun: function(event) {
  $('#user-tweets').prepend($('.douglascalhoun'))
  $('#tweet-zone').empty()
},
  sharksforcheap: function(event) {
  $('#user-tweets').prepend($('.sharksforcheap'))
  $('#tweet-zone').empty() 
}
}







//generates and formats the tweets
let generator = function(event) {
let $localTweets = streams.home.map((tweet) => {
    const $tweet = $('<div></div>').attr('class', tweet.user).attr('id', tweet.user)
    const text = `@${tweet.user}: ${tweet.message}`;
    
    $tweet.text(text).css('padding-bottom', '15px').css('font-family', 'Helvetica').css('font-size', '150%')
    
    
    $tweet
    return $tweet;

  });
//Sets up the tweet to be posted and establishes the time
const localSlice = $localTweets.slice(0,1)
const localTimeVar = new Date()
const localTime = $('<div>').text(localTimeVar)
const localRelativeTimeVar = moment().startOf('second').fromNow()
const localRelativeTime = $('<div>').text(localRelativeTimeVar)
if (streams.home.length > 0) {
$('#user-tweets').empty()
//$('#tweet-zone').prepend('<div>').attr('id', 
$('#tweet-zone').prepend((localRelativeTime).css('font-family', 'Helvetica').css('font-size', '70%').css('padding-bottom', '40px'))
$('#tweet-zone').prepend((localTime).css('font-family', 'Helvetica').css('font-size', '70%').css('padding-bottom', '5px'))
$('#tweet-zone').prepend(localSlice)


}

//Makes the users clickable
$('.mracus').on('click', selectorObject.mracus)
$('.shawndrost').on('click', selectorObject.shawndrost)
$('.douglascalhoun').on('click', selectorObject.douglascalhoun)
$('.sharksforcheap').on('click', selectorObject.sharksforcheap)

//Controls the flow of tweets
while (streams.home.length > 0) {
  streams.home.pop()
} 
}


//function for clearing the timeline
const emptier = function(event) {
  let emptyzone1 = $('#tweet-zone')
  let emptyzone2 = $('#user-tweets')
    emptyzone1.empty()
    emptyzone2.empty()
}



//Allows user to submit their tweets
function userSubmit(event) {
  const userName = document.getElementById('nameInput').value
  const userTweet = document.getElementById('tweetInput').value
  const text = `@${userName}: ${userTweet}`
  const formattedTweet = $('<div></div>')
  const finalTweet = formattedTweet.text(text).css('padding-bottom', '15px').css('font-family', 'Helvetica').css('font-size', '150%')
  const localTimeVar = new Date()
  const localTime = $('<div>').text(localTimeVar)
  const localRelativeTimeVar = moment().startOf('second').fromNow()
  const localRelativeTime = $('<div>').text(localRelativeTimeVar)
  $('#tweet-zone').prepend((localRelativeTime).css('font-family', 'Helvetica').css('font-size', '70%').css('padding-bottom', '40px'))
  $('#tweet-zone').prepend((localTime).css('font-family', 'Helvetica').css('font-size', '70%').css('padding-bottom', '5px'))
  $('#tweet-zone').prepend(finalTweet)
}




  

//main
$('body').append($('<div>').attr('id', 'main-contents'))
$('#main-contents').prepend($('<h1>').attr('id', 'main-header').text('Twiddler!')).css('color', 'silver')


//submissions
$('#main-contents').append($('<form>').attr('id', 'submission-zone'))
$('#submission-zone').append($('<input>').attr('type', 'text').attr('id', 'nameInput').attr('placeholder', 'Your name!')
  .css('color', 'silver'))
$('#submission-zone').append($('<input>').attr('type', 'text').attr('id', 'tweetInput').attr('placeholder', 'Your tweet!')
  .css('color', 'silver'))
$('#main-contents').append($('<button>').attr('id', 'poster').text('Post your tweet')
  .css('font-family', 'Helvetica').css('color', '#36454F'))
$('#poster').on('click', userSubmit)




//tweet area
$('#main-contents').append($('<section>').attr('id', 'tweets'))
$('#main-header').css('font-family', 'Helvetica').css('font-size', '350%')
$('#tweets').prepend($('<div>').attr('id', 'user-tweets'))
$('#tweets').append($('<div>').attr('id', 'tweet-zone'))
$('#tweets').prepend($('<button>').attr('id', 'emptier-button').attr('class', 'button').text('Take these tweets away!')
  .css('font-family', 'Helvetica').css('color', '#36454F'))
  $('#emptier-button').on('click', emptier)
$('#tweets').prepend($('<button>').attr('id', 'new-tweet-button').attr('class', 'button').text('Show someone\'s tweet!')
  .css('font-family', 'Helvetica').css('color', '#36454F'))
$('#new-tweet-button').on('click', generator)

//alignment
$('#main-contents').css('width', '50%').css('margin', 'auto').css('text-align', 'center')







//Main site css
//
//
//

$('body').css('background-color', '#36454F')
$('body').css('color', 'white')
$('#user-tweets').css('background-color', '#249D9F').css('padding-left', '30px').css('padding-right', '30px')
  .css('padding-bottom', '20px').css('padding-top', '20px').css('border-radius', '60px')

//tweet css
//
//
//
$('#tweet-zone').css('background-color', '#230820').css('padding-left', '30px').css('padding-right', '30px')
  .css('padding-bottom', '20px').css('padding-top', '20px').css('border-radius', '60px')
$('.button').css('background-color', '#8D918D').css('border-radius', '25px').css('padding-left', '20px').css('padding-right', '20px')
  .css('padding-bottom', '30px').css('padding-top', '30px'), 
$('#tweets').css('padding-bottom', '10px').css('padding-left', '10px').css('padding-right', '10px')
$('#nameInput').css('background-color', '#230820').css('border-radius', '25px').css('padding-left', '5px')
  .css('padding-bottom', '10px').css('padding-top', '10px')
$('#tweetInput').css('background-color', '#230820').css('border-radius', '25px').css('padding-left', '5px').css('padding-right', '5px')
  .css('padding-bottom', '10px').css('padding-top', '10px')
$('#poster').css('background-color', '#230820').css('border-radius', '25px').css('padding-left', '5px').css('padding-right', '5px')
  .css('padding-bottom', '10px').css('padding-top', '10px').css('color', 'grey')






});
