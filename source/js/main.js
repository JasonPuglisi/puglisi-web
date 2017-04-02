// Functions to run when page is loaded
getStars();

// getStars finds GitHub repo links and gets their star count
function getStars() {
  // Get main links (doesn't include services)
  var links = document.getElementsByClassName('link');
  // Search each url for a GitHub repository
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var url = link.getElementsByTagName('a')[0].getAttribute('href');
    var repoRegex = /github\.com\/(.*?\/.*)$/;
    var match = repoRegex.exec(url.toLowerCase());
    if (match) {
      // Get stars from GitHub
      var repo = match[1];
      getStarsRequest(link, repo);
    }
  }
}

// getStarsRequest sends a GitHub api request to fetch a repo's star count
function getStarsRequest(link, repo) {
    var apiUrl = "https://api.github.com/repos/";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        appendStars(link, xmlHttp.responseText);
      }
    }
    xmlHttp.open("GET", apiUrl + repo, true);
    xmlHttp.send(null);
}

// appendStars adds stars to GitHub repo links if there are any
function appendStars(link, response) {
  var stars = JSON.parse(response).stargazers_count;
  if (stars) {
    var starString = stars === 1 ? 'star' : 'stars';
    var starString = stars + ' ' + starString;
    link.innerHTML += ' <small>' + starString + '</small>';
  }
}
