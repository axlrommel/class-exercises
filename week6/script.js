{
  /* <div class="card col-lg-4 col-md-6 col-sm-12 text-center">
          <div class="card-body">
            <p>Show #201 May 03, 2007</p>
            <audio controls>
              <source
                src="https://s3.amazonaws.com/music.rommelvillagomez.com/Rogues-20070503.mp3"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div> */
}

var rowDiv = document.querySelector("#cards");

function buildCard(songData) {
  var cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "card col-lg-4 col-md-6 col-sm-12 text-center");
  var cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  var paragraph = document.createElement("p");
  paragraph.textContent = songData.song;
  var audio = document.createElement("audio");
  audio.setAttribute("controls", "");
  var source = document.createElement("source");
  source.setAttribute("src", songData.url);
  source.setAttribute("type", "audio/mpeg");
  audio.textContent = "Your browser does not support the audio element.";
  audio.appendChild(source);
  cardBody.appendChild(paragraph);
  cardBody.appendChild(audio);
  cardDiv.appendChild(cardBody);
  rowDiv.appendChild(cardDiv);
}

function initialize() {
  //call url to get music list: fetch
  //build the cards with the data
  fetch("https://band-backend-obmzk.ondigitalocean.app/music")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        buildCard(data[i]);
      }
    })
    .catch((err) => console.log(err));
}

initialize();
