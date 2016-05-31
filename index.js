var planet = planetaryjs.planet();

planet.loadPlugin(planetaryjs.plugins.earth({
  topojson: { file: 'world-110m-withlakes.json' }
}));

// Make the planet fit well in its canvas
planet.projection.scale(250).translate([250, 250]);
planet.draw(document.getElementById('globe'));
