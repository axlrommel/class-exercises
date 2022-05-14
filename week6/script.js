/* <div class="card col-lg-4 col-md-6 col-sm-12 text-center">
  <div class="card-body">
    <p>music title</p>
    <audio controls>
      <source
        src="https://s3.amazonaws.com/music.rommelvillagomez.com/Rogues-20070503.mp3"
        type="audio/mpeg"
      />
      Your browser does not support the audio element.
    </audio>
  </div>
</div>; */

var rowDiv = document.querySelector("#cards");

function onload() {
  fetch("https://band-backend-obmzk.ondigitalocean.app/music")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        var cardDiv = document.createElement("div");
        cardDiv.setAttribute(
          "class",
          "card col-lg-4 col-md-6 col-sm-12 text-center"
        );
        var cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");
        var paragraph = document.createElement("p");
        paragraph.textContent = data[i].song;
        var audio = document.createElement("audio");
        audio.setAttribute("controls", "");
        audio.textContent = "Your browser does not support the audio element.";
        var source = document.createElement("source");
        source.setAttribute("src", data[i].url);
        source.setAttribute("type", "audio/mpeg");
        audio.appendChild(source);
        cardBody.appendChild(paragraph);
        cardBody.appendChild(audio);
        cardDiv.appendChild(cardBody);
        rowDiv.appendChild(cardDiv);
      }
    })
    .catch((err) => console.log(err));
}

onload();
