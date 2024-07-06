//This script contains the structure of the dynamical content 
//that will be fetched from the variable json data        


//Prvi layer - info about Croatia
        croatia_polygon_2.on('click', function (e) {
	        if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
			sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		   					  '<br><p id = "event">' + String(e.layer.feature.properties.date1) +
                              '<br><p id = "event">' + String(e.layer.feature.properties.questions) + 
							  '<br><p id = "event">' + String(e.layer.feature.properties.question1) +	
                              '<br><p id = "event">' + String(e.layer.feature.properties.question2) +	
							  '<br><p id = "event">' + String(e.layer.feature.properties.date2) +
							  '<br><p id = "event">' + String(e.layer.feature.properties.date3) +
							  '<br><p id = "event">' + String(e.layer.feature.properties.date4) +
							  '<br><p id = "event">' + String(e.layer.feature.properties.date5) +
							  '<br><p id = "event">' + String(e.layer.feature.properties.date6) + '<hr>' +
		   					  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source1) + '</small>');
		   					  });

//Drugi layer - info about Yugoslavia
		yugoslavia_polygon.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
			sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +							  
							  '<br><p id = "event">' + String(e.layer.feature.properties.census) +
							  '<br><p id = "event">' + String(e.layer.feature.properties.photo) + '<hr>' +
		   					  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>'  + 
							  '<br><small>' + String(e.layer.feature.properties.source2) + '</small>')});
	
//Treći layer - info about the idea of Great Serbia

		srbija_polygon.on('click', function (e) {
		  if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +							  
							  '<br><p id = "event">' + String(e.layer.feature.properties.table) +
							  '<br><p id = "event">' + String(e.layer.feature.properties.photo) + '<hr>' +
                              '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source1) + '</small>'  + 
							  '<br><small>' + String(e.layer.feature.properties.source2) + '</small>')});	

//MIROVNI PREGOVORI U BiH Cutileirov plan CRO
		hrvatske_opcine.on('click', function (e) {
		  if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
							  '<br><p id = "event">' + String(e.layer.feature.properties.time) + '<hr>' +							  
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +							  
                              '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>')}); 
//MIROVNI PREGOVORI U BiH Cutileirov plan MUSLIM
		muslimanske_opcine.on('click', function (e) {
		  if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
					     	  '<br><p id = "event">' + String(e.layer.feature.properties.time) + '<hr>' +							  
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +							  
                              '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>')}); 
//MIROVNI PREGOVORI U BiH Cutileirov plan SERB
		srpske_opcine.on('click', function (e) {
		  if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
							  '<br><p id = "event">' + String(e.layer.feature.properties.time) + '<hr>' +							  
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +							  
                              '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>')}); 
//MIROVNI PREGOVORI U BiH Vance - Owenov plan CRO
		hrv_provincije.on('click', function (e) {
		  if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
							  '<br><p id = "event">' + String(e.layer.feature.properties.time) + '<hr>' +							  
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +							  
                              '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>')}); 							  
//MIROVNI PREGOVORI U BiH Vance - Owenov plan MUSLIM
		mus_provincije.on('click', function (e) {
		  if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
							  '<br><p id = "event">' + String(e.layer.feature.properties.time) + '<hr>' +							  
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +							  
                              '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>')}); 
//MIROVNI PREGOVORI U BiH Vance - Owenov plan SERB
		ser_provincije.on('click', function (e) {
		  if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
							  '<br><p id = "event">' + String(e.layer.feature.properties.time) + '<hr>' +							  
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +							  
                              '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>')}); 		
//MIROVNI PREGOVORI U BiH Vance - Owenov plan SARAJEVO
		sarajevo_provincija.on('click', function (e) {
		  if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
							  '<br><p id = "event">' + String(e.layer.feature.properties.time) + '<hr>' +							  
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +							  
                              '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>')}); 
//MIROVNI PREGOVORI U BiH Owen - Stoltenberg plan CRO
		hrv_republika.on('click', function (e) {
		  if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
							  '<br><p id = "event">' + String(e.layer.feature.properties.time) + '<hr>' +							  
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +							  
                              '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>')}); 
//MIROVNI PREGOVORI U BiH Owen - Stoltenberg plan MUSLIM
		mus_republika.on('click', function (e) {
		  if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
							  '<br><p id = "event">' + String(e.layer.feature.properties.time) + '<hr>' +							  
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +							  
                              '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>')}); 
//MIROVNI PREGOVORI U BiH Owen - Stoltenberg plan SERB
		ser_republika.on('click', function (e) {
		  if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
							  '<br><p id = "event">' + String(e.layer.feature.properties.time) + '<hr>' +							  
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +							  
                              '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>')}); 
//MIROVNI PREGOVORI U BiH Owen - Stoltenberg plan SARAJEVO
		sarajevo_republika.on('click', function (e) {
		  if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
							  '<br><p id = "event">' + String(e.layer.feature.properties.time) + '<hr>' +							  
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +							  
                              '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>')}); 					  
 /* log_revolution.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
		   					  '<br>Date: ' + String(e.layer.feature.properties.datum) + '<hr>' +
		   					  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
		   					  '<br><small>Source: ' + String(e.layer.feature.properties.source) + '</small>');
		   					  });*/
		
	/*jas.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.NAME_2) + 
		   					  '<br>Date: ' + String(e.layer.feature.properties.datum) + '<hr>' +
		   					  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
		   					  '<br><small>Source: ' + String(e.layer.feature.properties.source) + '</small>');
		   					  });*/
	/*
   pink.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.NAME_2) + 
		   					  '<br>Date: ' + String(e.layer.feature.properties.datum) + '<hr>' +
		   					  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
		   					  '<br><small>Source: ' + String(e.layer.feature.properties.source) + '</small>');
		   					  });		  
	unpa.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.NAME_2) + 
		   					  '<br>Date: ' + String(e.layer.feature.properties.datum) + '<hr>' +
		   					  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
		   					  '<br><small>Source: ' + String(e.layer.feature.properties.source) + '</small>');
		   					  });
							  
	unpacro.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.NAME_2) + 
		   					  '<br>Date: ' + String(e.layer.feature.properties.datum) + '<hr>' +
		   					  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
		   					  '<br><small>Source: ' + String(e.layer.feature.properties.source) + '</small>');
		   					  });
							  */

//Sarajevo agreement
sarajevo_hover.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		   					  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
		   					  '<br><small>Source:' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
		   					  }); 
	/*						  
//Events content	
		events.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
            sidebar2.setContent('<h4 id = "title2">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.datum) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
*/

//Independence day							  
		independence_day.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
//Low conflict period
low_Conflict.on('click', function (e) {
    // Check if sidebar2 is already open (optional)
    if (sidebar2.isVisible()) {
        sidebar2.hide();
    }

    // Toggle sidebar visibility
    sidebar2.toggle();

    // Retrieve YouTube link
    var youtubeLink = e.layer.feature.properties?.youtube_link;

    // Template literal with classes for styling
    const sidebarContent = `
        <h4 id="title">${e.layer.feature.properties.title}</h4>
        <hr>
        <p id="content">
            Place: ${e.layer.feature.properties.place}<br>
            Date: ${e.layer.feature.properties.date}
        </p>
        <hr>
        <p id="event">${e.layer.feature.properties.event}</p>
        ${youtubeLink ? '<hr>' : ''} <!-- Conditionally include the <hr> element -->
        <div id="youtube-container">
            ${youtubeLink ? `<iframe width="100%" height="315" src="${youtubeLink}" frameborder="0" allowfullscreen></iframe>` : ''}
        </div>
        <hr>
        <small>Source: <br>${e.layer.feature.properties.source}</small>
    `;

    sidebar2.setContent(sidebarContent);

    // Stop video on sidebar close (optional)
    sidebar2.on('hide', function() {
        if (document.getElementById("youtube-container")) {
            // Reload iframe to stop video (assuming iframe exists)
            var iframe = document.getElementById("youtube-container").getElementsByTagName("iframe")[0];
            if (iframe) {
                iframe.src = iframe.src;
            }
        } else {
            console.warn("YouTube iframe not found");
        }
    });
});


				  
//Seized police stations							  
		srbi_postaje.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
//EVENTS
hr_polit_31_08_90.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
ser_polit_31_08_90.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
hr_polit_31_12_90.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
ser_polit_31_12_90.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });	
hr_polit_28_02_91.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
ser_polit_28_02_91.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });	
hr_polit_30_06_91.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
ser_polit_30_06_91.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });						  
ser_napad_30_06_91.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
hr_polit_26_08_91.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
hr_napad_26_08_91.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
ser_polit_26_08_91.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });						  
ser_napad_26_08_91.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });  
hr_polit_26_09_91.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
hr_napad_26_09_91.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });	  
ser_napad_26_09_91.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
hr_polit_listopad_91.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
hr_napad_listopad_91.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });	  
ser_napad_listopad_91.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
hr_polit_studeni_91.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
hr_napad_studeni_91.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });	  
ser_napad_studeni_91.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
hr_napad_prosinac_91.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
ser_polit_prosinac_91.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });						  
ser_napad_prosinac_91.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
hr_polit_1992.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
hr_napad_1992.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });					  
ser_napad_1992.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });  
hr_napad_1993.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });	
ser_polit_1993.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });						  
ser_napad_1993.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
hr_polit_1994.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
hr_napad_1994.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
hr_polit_1995.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
hr_napad_1995.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });
ser_polit_1995.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });						  
ser_napad_1995.on('click', function (e) {
		    if(sidebar2.isVisible())
            sidebar2.hide();
		    if(sidebar.isVisible())
            sidebar.hide();
            sidebar2.toggle();
		    sidebar2.setContent('<h4 id = "title">' + String(e.layer.feature.properties.title) + '</h4>' + '<hr>' + 
		                      '<br><p id = "content">Place: ' + String(e.layer.feature.properties.place) + 
							  '<br>Date: ' + String(e.layer.feature.properties.date) + '<hr>' +
							  '<br><p id = "event">' + String(e.layer.feature.properties.event) + '<hr>' +
							  '<br><small>Source: ' + '<br>' + String(e.layer.feature.properties.source) + '</small>');
							  });