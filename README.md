# visited-places
Places I've been to
//TEST ONE:Can create new places with all properties
describe('Place', function() {
it('creates place object with correct properties', function() {let mlolongo = new Place('Mlolongo', ['African Heritage House'], '2024', 'Breathtaking!');

expect(Mlolongo.location).toEqual('Mlolongo');
expect(Mlolongo.landmarks).toEqual(['African Heritage House']);
expect(Mlolongo.year).toEqual('2024');
expect(Mlolongo.notes).toEqual('Breathtaking!');
});
});

