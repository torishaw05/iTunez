// *************** VARIABLES! ****************\\



let search = document.getElementById('submit');
let player= document.getElementsByClassName('music-player')[0];
let results = document.getElementById('results');



// *************** EVENT LISTENER CREATED ! ****************\\


search.addEventListener('click', function(a) {
  let input = document.getElementById('field');
let info = input.value.split('').join('+');





// *************** FETCH CALL ! ****************\\

fetch("https://itunes.apple.com/search?term=" + info + "&entity=song")
  .then(
    function(response) {
      if (response.status !== 200) {
        return;
      }

      response.json().then(function(data) {
        songdisplay(data);
      });
    }
  )
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });
})


function songdisplay(data) {
  let template = '';

  for (var i = 0; i < data.results.length; i++) {




// *************** Make A Template for the SONG CLASS
    template +=
    `
    <div class="songs">
    <img src="${data.results[i].artworkUrl100}">
    <h3>${data.results[i].artistName}</h3>
    <h5>${data.results[i].trackName}</h5>
    </div>
    `;
    // *************** Make A Template for the SONG CLASS

  }
  results.innerHTML = template;
  let tune = document.getElementsByClassName('songs');
    for (var i = 0; i < tune.length; i++) {
      let result = i
      tune[i].addEventListener('click', function() {
        player.src = data.results[result].previewUrl;
      player.play();
      })
    }
}
