// Constructor
function Place(location, landmarks, year, notes) {
  this.location = location;
  this.landmarks = landmarks || [];
  this.year = year;
  this.notes = notes;
  this.rating = null;
}

// Prototype methods
Place.prototype.fullDescription = function() {
  return `${this.location} (${this.year}) - Landmarks: ${this.landmarks.join(", ")}. Notes: ${this.notes}. Rating: ${this.rating ?? "Not rated"}`;
};

Place.prototype.addLandmark = function(landmark) {
  this.landmarks.push(landmark);
};

Place.prototype.setRating = function(rating) {
  this.rating = rating;
};

// Load from localStorage or use sample data
let places = JSON.parse(localStorage.getItem("places")) || [
  new Place("Paris", ["Eiffel Tower", "Louvre"], 2024, "Romantic trip"),
  new Place("Tokyo", ["Shibuya Crossing", "Tokyo Tower"], 2025, "Cherry blossoms"),
];

if (!localStorage.getItem("places")) {
  places[0].setRating(5);
  places[1].setRating(4);
  savePlaces();
}

function savePlaces() {
  localStorage.setItem("places", JSON.stringify(places));
}

// UI logic
const placeList = document.getElementById("place-list");
const details = document.getElementById("details");
const searchInput = document.getElementById("search");

function renderPlaces(filteredPlaces = places) {
  placeList.innerHTML = ""; // Clear existing list
  filteredPlaces.forEach((place, index) => {
    const item = document.createElement("div");
    item.className = "place-item";
    item.textContent = place.location;

    item.addEventListener("click", () => {
      details.innerHTML = `
        <h2>${place.location} (${place.year})</h2>
        <p><strong>Landmarks:</strong> ${place.landmarks.join(", ")}</p>
        <p><strong>Notes:</strong> ${place.notes}</p>
        <p><strong>Rating:</strong> ${place.rating ?? "Not rated"}</p>
        <div class="actions">
          <button onclick="deletePlace(${index})">Delete</button>
          <button onclick="editPlace(${index})">Edit</button>
        </div>
      `;
    });

    placeList.appendChild(item);
  });
}

renderPlaces();

// Delete function
function deletePlace(index) {
  places.splice(index, 1);
  savePlaces();
  renderPlaces();
  details.textContent = "Place deleted.";
}

// Edit function
function editPlace(index) {
  const place = places[index];
  document.getElementById("location").value = place.location;
  document.getElementById("landmarks").value = place.landmarks.join(", ");
  document.getElementById("year").value = place.year;
  document.getElementById("notes").value = place.notes;
  document.getElementById("rating").value = place.rating ?? "";

  places.splice(index, 1);
  savePlaces();
  renderPlaces();
  details.textContent = "Edit the form and resubmit to update.";
}

// Form logic
const form = document.getElementById("place-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const location = document.getElementById("location").value;
  const landmarks = document.getElementById("landmarks").value.split(",").map(l => l.trim()).filter(l => l);
  const year = parseInt(document.getElementById("year").value);
  const notes = document.getElementById("notes").value;
  const rating = parseInt(document.getElementById("rating").value);

  const newPlace = new Place(location, landmarks, year, notes);
  if (rating) newPlace.setRating(rating);

  places.push(newPlace);
  savePlaces();
  renderPlaces();

  form.reset();
});

// Search logic
searchInput.addEventListener("input", function() {
  const query = searchInput.value.toLowerCase();
  const filtered = places.filter(place =>
    place.location.toLowerCase().includes(query) ||
    place.landmarks.some(l => l.toLowerCase().includes(query))
  );
  renderPlaces(filtered);
});
