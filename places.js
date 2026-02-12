function Place(location, landmarks, year, notes) {
    this.location = location;
    this.landmarks = landmarks;
    this.year = year;
    this.notes = notes;
}
Place.prototype.addLandmark = function(landmark) {
    this.landmarks.push(landmark);
}
Place.prototype.getRating = function() {
    return 'Great';
}
Place.prototype.fullDescription = function() {
    return `Visited ${this.location} in ${this.year}. Landmarks: ${this.landmarks.join(', ')}. Notes: ${this.notes}`;
}
