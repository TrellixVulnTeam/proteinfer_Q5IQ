
    function selectRandomb() {
        $('#group1').show();
        $('#group2').hide();
      }
  
      function selectClusteredb() {
        $('#group1').hide();
        $('#group2').show();
      }
  
   
  
  
  
      var figure = JSON.parse(json);
      var figure2 = JSON.parse(clustered_json);
  
      Plotly.newPlot('method_graph', figure.data, figure.layout);
      Plotly.newPlot('method_graph2', figure2.data, figure2.layout);