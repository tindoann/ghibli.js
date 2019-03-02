var request = new XMLHttpRequest();

request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
request.onload = function() {
	// Begin accessing JSON data here
	var data = JSON.parse(this.response);

	if (request.status >= 200 && request.status < 400) {
		data.forEach(movie => {
			// Create a div with a card class
			const card = document.createElement("div");
			card.setAttribute("class", "card");

			// Create an h1 and set the text content to the film's title
			const h1 = document.createElement("h1");
			h1.textContent = movie.title;
			
			// Create a p and set the text content to the film's description
			const p = document.createElement('p');
			movie.description = movie.description.substring(0, 300); // Limit to 300 chars
			p.textContent = `${movie.description}...`; // End with an ellipses
			
			// Append the cards to the container element
  		container.appendChild(card);
			
			// Each card will contain an h1 and a p
			card.appendChild(h1);
			card.appendChild(p);
		});
	} else {
		console.log("error");
	}
};

request.send();

const app = document.getElementById("root");

const logo = document.createElement("img");
logo.src =
	"https://raw.githubusercontent.com/taniarascia/sandbox/master/ghibli/logo.png";

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(logo);
app.appendChild(container);


// https://www.w3schools.com/js/js_htmldom_nodes.asp
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_appendchild
// https://www.kirupa.com/html5/making_http_requests_js.htm
// https://www.youtube.com/watch?v=e0ihEHxd6vI