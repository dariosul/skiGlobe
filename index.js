var planet = planetaryjs.planet();

planet.loadPlugin(planetaryjs.plugins.earth({
  topojson: { file: 'world-110m-withlakes.json' },
  oceans: { fill: '#000080' },
  land: { fill: '#339966' },
  borders: { fill: '#008000' }
}));

planet.loadPlugin(planetaryjs.plugins.zoom({
  scaleExtent: [100, 300]
}));

planet.loadPlugin(planetaryjs.plugins.drag({
}));

// Make the planet fit well in its canvas
planet.projection.scale(250).translate([250, 250]);
planet.draw(document.getElementById('globe'));
