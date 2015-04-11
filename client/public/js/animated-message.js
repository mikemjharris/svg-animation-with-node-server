var a = ['0 100','40 0','60 0','50 20','42 40','58 40','50 20','60 0','100 100','80 100','60 60','40 60','20 100'];
var b= ['20 100','20 0','80 0','90 20','40 20','40 40','70 40','70 20','90 20','90 30','70 50','90 70','70 60','40 60','40 80','70 80','70 60','90 70','90 80','70 100'];
var c = ['20 100','20 0','80 0','80 20','40 20','40 80','80 80','80 100'];
var d = ['20 100','20 0','80 0','90 20','40 20','40 80','70 80','70 20','90 20','90 80','80 100','80 100'];
var e = ['10 100','10 0','70 0','70 20','30 20','30 40','70 40','70 60','30 60','30 80','70 80','70 100'];
var f = ['20 100','20 0','80 0','80 20','40 20','40 20','40 40','80 40','80 60','40 60','40 100'];
var g= ['20 100','20 0','80 0','80 20','40 20','40 80','60 80','60 60','50 60','50 40','80 40','80 60','80 60','80 100'];
var h= ['10 100 ','10 0 ','30 0 ','30 40 ','70 40 ','70 0 ','90 0 ',' 90 100 ','70 100 ','70 60 ','30 60 ','30 100'];
var i = ['20 100','20 80','40 80','40 20','20 20','20 0','80 0','80 20','60 20','60 80','80 80','80 100'];
var j = ['20 100','20 80','40 80','40 20','20 20','20 0','80 0','80 20','60 20','60 100'];
var k = ['20 100','20 0','40 0','40 40','60 0','80 0','55 50','80 100','60 100','40 60','40 100'];
var l = ['20 100','20 0','40 0','40 80','80 80','80 100'];
var m = ['0 100','0 0','20 0','50 30','80 0','100 0','100 100','80 100','80 30','50 60','20 30','20 100'];
var n = ['10 100','10 0','30 0','60 70','60 0','80 0','80 100','60 100','30 40','30 100'];
var o = ['20 100','20 0','40 0','40 80','60 80','60 20','40 20','40 0','80 0','80 100'];
var p= ['20 100','20 0','80 0','80 20','40 20','40 20','40 40','60 40','60 20','80 20','80 60','40 60','40 100'];
var q = ['20 100','20 0','40 0','40 80','55 80','45 60','55 60','60 70','60 20','40 20','40 0','80 0','80 100'];
var r = ['20 100','20 0','80 0','80 20','40 20','40 20','40 40','60 40','60 20','80 20','80 60','60 60','80 100','60 100','40 70','40 100'];
var s = ['20 100','20 80','60 80','60 60','20 60','20 0','80 0','80 20','40 20','40 40','80 40','80 100'];
var t = ['40 100','40 20','20 20','20 0','80 0','80 20','60 20','60 100'];
var u = ['20 100','20 0','40 0','40 80','60 80','60 0','80 0','80 100'];
var v = ['40 100','20 0','40 0','50 70','60 0','80 0','60 100'];
var w = ['15 100','0 0','15 0','25 60','40 0','60 0','75 60','80 0','100 0','85 100','70 100','50 20','30 100' ];
var x = ['20 100','40 50','20 0','40 0','50 35','60 0','80 0','60 50','80 100','60 100','50 60','40 100'];
var y = ['40 100','40 50','20 0','40 0','50 35','60 0','80 0','60 50','60 100'];
var z= ['20 100','55 20','20 20','20 0','80 0','45 80','80 80','80 100'];
var space = ['0 100', '100 100'];

var alphabet = {
  a: a, b: b, c: c, d: d, e: e, f:f, g: g, h: h, i: i, j: j, k: k, l: l, m: m, n: n, o: o, p: p, q: q, r: r, s: s, t: t, u: u, v: v, w: w, x: x, y: y, z: z, space: space
};
var letters = [a,a,b,b,c,c,d,d,e,e,f,f,g,g,h,h,i,i,j,j,k,k,l,l,m,m,n,n,o,o,p,p,q,q,r,r,s,s,t,t,u,u,v,v,w,w,x,x,y,y,z,z];

// * at moment hard coded previous messages - to do is link into database
var paragraph = 'It was the third of June another sleepy dusty Delta day I was out choppin cotton and my brother was balin hay And at dinner time we stopped and walked back to the house to eat And Mama hollered out the back door y all remember to wipe your feet And then she said I got some news this mornin from Choctaw Ridge  Today Billie Joe MacAllister jumped off the Tallahatchie Bridge  And Papa said to Mama as he passed around the blackeyed peas Well Billie Joe never had a lick of sense pass the biscuits please  There s five more acres in the lower forty I ve got to plow And Mama said it was shame about Billie Joe anyhow Seems like nothin ever comes to no good up on Choctaw Ridge And now Billie Joe MacAllister s jumped off the Tallahatchie Bridge And Brother said he recollected when he and Tom and Billie Joe Put a frog down my back at the Carroll County picture show And wasn t I talkin to him after church last Sunday night? I ll have another piece of apple pie you know it dont seem right I saw him at the sawmill yesterday on Choctaw Ridge  And now you tell me Billie Joe s jumped off the Tallahatchie Bridge  And Mama said to me Child what s happened to your appetite?  I ve been cookin all morning and you haven t touched a single bite  That nice young preacher Brother Taylor dropped by today  Said he d be pleased to have dinner on Sunday oh by the way  He said he saw a girl that looked a lot like you up on Choctaw Ridge  And she and Billie Joe was throwing somethin off the Tallahatchie Bridge  A year has come gone since we heard the news bout Billie Joe And Brother married Becky Thompson they bought a store in Tupelo There was a virus going round Papa caught it and he died last Spring And now Mama doesn t seem to wanna do much of anything And me I spend a lot of time pickin flowers up on Choctaw Ridge And drop them into the muddy water off the Tallahatchie Bridge';

var randomSpeed = false;

function shuffle(o){ 
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function codeAString( words ) {
  var result = '';
  for ( var i = 0; i < words.length; i++ ){
    if ( words.substr(i,1) === ' '){
      result += '1';
    } else {
      result += String.fromCharCode( 97  - ( words.substr(i,1).charCodeAt(0) - 90 ) ) ;
    }
  }
  return result;
}

function decodeAString( words ) {
  var result = '';
  for ( var i = 0; i < words.length; i++ ){
    if ( words.substr(i,1) === '1'){
      result += ' ' ;
    } else {
      result += String.fromCharCode( 97  - ( words.substr(i,1).charCodeAt(0) - 90 ) ) ;
    }
  }
  return result;
 }

function createPath( points ) {
  return 'M' + points.join('L ') + ' Z';
}

function maxPointsInAllLetters( letters ) {
  return letters.reduce( function ( ret, letter ) {
     return Math.max( ret, letter.length);
  }, 0);
}

function createAnimate( letters ) {
  var result = letters.map( function ( letter ) {
    return createPath(letter);
  });
  result.push(result[0]);

  var speed = letters.length / 2;

  if (randomSpeed) {
    speed = speed * ( Math.random() * 3 + 0.5 );
  }
  return '<animate dur="' + speed + 's" repeatCount="indefinite" attributeName="d" values="' + result.join(';') +  '"/>';
}

function createSvg( letters , color ) {
  var maxLetters = maxPointsInAllLetters(letters);

  for (var i = 0; i < letters.length; i++ ) {
    if ( letters[i].length < maxLetters) {
      var extraPoints = maxLetters - letters[i].length;

      var startX = parseInt(letters[i][0].split(' ')[0],10);
      var startY = parseInt(letters[i][0].split(' ')[1],10);

      var endX = parseInt(letters[i][letters[i].length - 1].split(' ')[0],10);
      var endY = parseInt(letters[i][letters[i].length - 1].split(' ')[1],10);

      var toAdd = [];
      for ( var j = 0; j < extraPoints ; j++) {
        x = startX + (endX - startX) / (extraPoints + 1) * j;
        y = startY + (endY - startY) / (extraPoints + 1) * j;

        toAdd.push([x,y].join(' '));
      }
      letters[i] = letters[i].concat(toAdd);
    }
  }

  if ( !color ) {
    color = '#1EB287';
  }

  var pathToAppend = ( '<path d="M0 0 Z" stroke="#808600" stroke-width="0" stroke-linecap="round" fill="' + color + '">' + createAnimate( letters ));
  $('#svgcontainer').append('<svg version="1.1" baseProfile="full"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">' + pathToAppend + '</svg>');
}

function getUrlVars()
{
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for ( var i = 0; i < hashes.length; i++)
  {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = decodeURIComponent(hash[1]);
  }
  return vars;
}

function createMeassgeFromString( message ) {
  var messageLetters = [];
  for ( var i = 0; i < message.length; i++ ) {
    if (
      message.substr(i,1).toLowerCase().charCodeAt(0) >= 97 &&
      message.substr(i,1).toLowerCase().charCodeAt(0) <= 122
      ) {
      messageLetters.push(alphabet[message.substr(i,1).toLowerCase()]);
      messageLetters.push(alphabet[message.substr(i,1).toLowerCase()]);
    } else if ( message.substr(i,1).charCodeAt(0) === 32 ) {
      messageLetters.push(alphabet.space);
      messageLetters.push(alphabet.space);
    }
  }
  messageLetters.push(alphabet.space);
  messageLetters.push(alphabet.space);

  var color = Math.random() * 360;

  createSvg(messageLetters, 'hsl(' + color + ',60%,60%)');
}

function init() {
  $('form').on('submit', function (ev) {
    ev.preventDefault();
    var message = $('#message').val();
    window.location.href =  window.location.href   + '?message=' + codeAString(message);
  });

  $('input:first').focus();

  var queryParams = getUrlVars();

  if ( queryParams.message ) {
    createMeassgeFromString( decodeAString(queryParams.message));
    $('body').addClass('message');
    $('#share').attr('href', 'https://twitter.com/intent/tweet?&text=My animated message ' + window.location.href);
  } else {
    $('#svgcontainer').empty();
    randomSpeed = true;
    shuffle(paragraph.split(' ')).forEach(function( word , i ) {
        createMeassgeFromString(word);

    });

  }
}

init();
