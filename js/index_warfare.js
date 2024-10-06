//Center of the map
        var center = [44.50, 16.4];
		
//Basemaps
        var osmBw = L.tileLayer(
		    'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', 
		    {attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>',
		    opacity: 0.9
		});
		
        var  Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	         attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	         subdomains: 'abcd',
	         minZoom: 1,
	         maxZoom: 16,
	         ext: 'jpg',
			 opacity: 0.35
        });
		
        var Stamen_TerrainBackground = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.{ext}', {
	        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	        subdomains: 'abcd',
	        minZoom: 0,
	        maxZoom: 18,
	        ext: 'png',
			opacity: 0.8
		});		
		
		var Esri_WorldShadedRelief = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}', {
	        attribution: 'Tiles &copy; Esri &mdash; Source: Esri',
	        maxZoom: 13,
			opacity: 0.2

        });		
        var Stamen_TonerBackground = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.{ext}', {
	        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	        subdomains: 'abcd',
	        minZoom: 0,
	        maxZoom: 20,
	        ext: 'png',
			opacity: 0.6
        });		
        var Stamen_TerrainLabels = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-labels/{z}/{x}/{y}{r}.{ext}', {
	        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	        subdomains: 'abcd',
	        minZoom: 0,
	        maxZoom: 18,
	        ext: 'png'
        });

// The map                                                              
        var map = L.map('map', {
          zoomControl: false,
		  layers: [osmBw],
          center: center,
          zoom: 6,
		  minZoom: 4 // Set the maximum zoom level here

        });
		
//Home control
        var zoomHome = L.Control.zoomHome({            position: 'bottomright'  // This ensures the control is added to the bottom-right corner
});
        zoomHome.addTo(map);
		
//Base layer
       croatia_polygon_1 = L.geoJSON([croatiaPolygon], {style: croPolygonStyle1}).addTo(map);

//Zooming on press of radio button, ovaj L.featureGroup.subGroup(parentGroup) služi za zooming on click on radio button
	   var parentGroup = L.featureGroup().addTo(map)
	   
//Layer koji je mamac za zoom
//Prvi layer Croatia
	    croatia_polygon_2 = L.featureGroup.subGroup(parentGroup);	
//Drugi layer Yugoslavia		
		yugoslavia_polygon = L.featureGroup.subGroup(parentGroup);
//Treći layer Velika Srbija		
		srbija_polygon = L.featureGroup.subGroup(parentGroup);				
//Prvi layer Croatia
		L.geoJSON([croatiaPolygon], {style: croPolygonStyle2}).addTo(croatia_polygon_2);
//Drugi layer Yugoslavia		
		L.geoJSON([yugoslaviaPolygon], {style: yugoPolygonStyle}).addTo(yugoslavia_polygon);
//Treći layer Velika Srbija			   
	   L.geoJSON([greatserbiaPolygon], {style: serbPolygonStyle}).addTo(srbija_polygon);	
	   
//	   mamac_juga = L.featureGroup.subGroup(parentGroup);//ovo su mamci kada ovako završava na .subGroup
//Vukovar		
		mamac_25_09_91 = L.featureGroup.subGroup(parentGroup);//ovo su mamci kada ovako završava na .subGroup
		mamac_10_11_91 = L.featureGroup.subGroup(parentGroup);
//Zapadna Slavonija
		mamac_zap_slavonija = L.featureGroup.subGroup(parentGroup);
//Banovina Kordun
        mamac_ban_kordun = L.featureGroup.subGroup(parentGroup);
//Lika		
        mamac_lika = L.featureGroup.subGroup(parentGroup);
        mamac_slunj = L.featureGroup.subGroup(parentGroup);
//Zadar		
        mamac_Zadar = L.featureGroup.subGroup(parentGroup);
//Dalmacija
        mamac_Dalmacija = L.featureGroup.subGroup(parentGroup);
//Južno bojište     
		mamac_jug = L.featureGroup.subGroup(parentGroup);
//      mamacdub = L.featureGroup.subGroup(parentGroup);
//Sarajevski sporazum     
	    mamac_Sarajevo = L.featureGroup.subGroup(parentGroup);
//Srpske enklave koje su razoružane u srpnju 1992.
        mamac_srpske_enklave = L.featureGroup.subGroup(parentGroup);
//Šibenik
		mamac_nos_kalik = L.featureGroup.subGroup(parentGroup);
		mamac_miljevacki_plato = L.featureGroup.subGroup(parentGroup);
//Zadar brdo Križ
		mamac_brdo_kriz = L.featureGroup.subGroup(parentGroup);
//UNPA, mamac
		mamac_unpa_sektori = L.featureGroup.subGroup(parentGroup);
//JNA plan napada
		smjer_napada = L.featureGroup.subGroup(parentGroup);
//Operacija Maslenica 1993
		mamac_Maslenica = L.featureGroup.subGroup(parentGroup);
//Oslobađanje Cavtata 1992
		mamac_cavtat = L.featureGroup.subGroup(parentGroup);
//Oslobađanje brane Peruča 1993
		mamac_Peruca = L.featureGroup.subGroup(parentGroup);
//Oslobađanje Medačkog džepa 1993		
		mamac_Medak = L.featureGroup.subGroup(parentGroup);
//Operacija Bljesak 1995		
		mamac_bljesak = L.featureGroup.subGroup(parentGroup);
//Operacija Oluja 1995
		mamac_svk_04_05_95 = L.featureGroup.subGroup(parentGroup);
//Operacija Oluja 1995 Kordun Banovina	
		mamac_ban_kordun_03_08_95 = L.featureGroup.subGroup(parentGroup);
//Operacija Oluja 1995 Lika
		mamac_lika_03_08_95 = L.featureGroup.subGroup(parentGroup);
//Operacija Oluja 1995 Dalmacija	    
		mamac_dalmacija_03_08_95 = L.featureGroup.subGroup(parentGroup);
//Operacija Oluja 1995 Lika	    		
		mamac_lika_06_08_95 = L.featureGroup.subGroup(parentGroup);
//Operacija Oluja 1995 Lika	    
		mamac_lika_07_08_95 = L.featureGroup.subGroup(parentGroup);
//Operacija Oluja 1995 Kordun Banovina	
		mamac_ban_kordun_08_08_95 = L.featureGroup.subGroup(parentGroup);
//Kraj operacije Oluja 		
		croatia_polygon_3 = L.featureGroup.subGroup(parentGroup);
//Rat niskog intenziteta
		mamac_low_conflict = L.featureGroup.subGroup(parentGroup);
//Rat niskog intenziteta	   
		low_Conflict = L.featureGroup.subGroup(parentGroup);
//Balvan revolucija
		balvan_revolucija = L.featureGroup.subGroup(parentGroup);
//		logrevolution = L.featureGroup.subGroup(parentGroup);
//Proglašenje SAO krajine
		proglasenje_sao_krajina = L.featureGroup.subGroup(parentGroup);
//Srbi zauzimaju policijske postaje		
		srbi_postaje = L.featureGroup.subGroup(parentGroup);
//BiH
		mamac_Bih = L.featureGroup.subGroup(parentGroup);
		mamac_kupres = L.featureGroup.subGroup(parentGroup);
		mamac_ist_hercegovina = L.featureGroup.subGroup(parentGroup);
		mamac_Ist_Bosna = L.featureGroup.subGroup(parentGroup);
		mamac_jajce = L.featureGroup.subGroup(parentGroup);
		mamac_Posavina = L.featureGroup.subGroup(parentGroup);
		mamac_Sarajevo = L.featureGroup.subGroup(parentGroup);
		mamac_boskrajina = L.featureGroup.subGroup(parentGroup);
		mamac_Uskoplje = L.featureGroup.subGroup(parentGroup);
		mamac_Sred_Bosna = L.featureGroup.subGroup(parentGroup);
		mamac_Jablanica = L.featureGroup.subGroup(parentGroup);
		mamac_Zepce = L.featureGroup.subGroup(parentGroup);
		mamac_Mostar = L.featureGroup.subGroup(parentGroup);
		mamac_Bihac = L.featureGroup.subGroup(parentGroup);
		mamac_Cincar = L.featureGroup.subGroup(parentGroup);
//Operacija Skok 1 2 Zima 94				
		mamac_Skok = L.featureGroup.subGroup(parentGroup);
//Operacija Maetral				
		mamac_Maestral = L.featureGroup.subGroup(parentGroup);
//Events Hrvatska
        hr_polit_31_08_90 = L.featureGroup.subGroup(parentGroup);
		ser_polit_31_08_90 = L.featureGroup.subGroup(parentGroup);

        hr_polit_31_12_90 = L.featureGroup.subGroup(parentGroup);
		ser_polit_31_12_90 = L.featureGroup.subGroup(parentGroup);

        hr_polit_28_02_91 = L.featureGroup.subGroup(parentGroup);
		ser_polit_28_02_91 = L.featureGroup.subGroup(parentGroup);

		hr_polit_30_06_91 = L.featureGroup.subGroup(parentGroup);
		ser_polit_30_06_91 = L.featureGroup.subGroup(parentGroup);
		ser_napad_30_06_91 = L.featureGroup.subGroup(parentGroup);

		hr_polit_26_08_91 = L.featureGroup.subGroup(parentGroup);
		hr_napad_26_08_91 = L.featureGroup.subGroup(parentGroup);
		ser_polit_26_08_91 = L.featureGroup.subGroup(parentGroup);
		ser_napad_26_08_91 = L.featureGroup.subGroup(parentGroup);
		
		hr_polit_26_09_91 = L.featureGroup.subGroup(parentGroup);
		hr_napad_26_09_91 = L.featureGroup.subGroup(parentGroup);
		ser_napad_26_09_91 = L.featureGroup.subGroup(parentGroup);
		
		hr_polit_listopad_91 = L.featureGroup.subGroup(parentGroup);
		hr_napad_listopad_91 = L.featureGroup.subGroup(parentGroup);
		ser_napad_listopad_91 = L.featureGroup.subGroup(parentGroup);
		
		hr_polit_studeni_91 = L.featureGroup.subGroup(parentGroup);
		hr_napad_studeni_91 = L.featureGroup.subGroup(parentGroup);
		ser_napad_studeni_91 = L.featureGroup.subGroup(parentGroup);
		
		hr_napad_prosinac_91 = L.featureGroup.subGroup(parentGroup);
		ser_polit_prosinac_91 = L.featureGroup.subGroup(parentGroup);
		ser_napad_prosinac_91 = L.featureGroup.subGroup(parentGroup);
        
		hr_polit_1992 = L.featureGroup.subGroup(parentGroup);
		hr_napad_1992 = L.featureGroup.subGroup(parentGroup);
		ser_napad_1992 = L.featureGroup.subGroup(parentGroup);
		
		hr_napad_1993 = L.featureGroup.subGroup(parentGroup);
		ser_polit_1993 = L.featureGroup.subGroup(parentGroup);
		ser_napad_1993 = L.featureGroup.subGroup(parentGroup);
		
		hr_polit_1994 = L.featureGroup.subGroup(parentGroup);
		hr_napad_1994 = L.featureGroup.subGroup(parentGroup);
		
		hr_polit_1995 = L.featureGroup.subGroup(parentGroup);
		hr_napad_1995 = L.featureGroup.subGroup(parentGroup);
		ser_polit_1995 = L.featureGroup.subGroup(parentGroup);
		ser_napad_1995 = L.featureGroup.subGroup(parentGroup);

    for (var i = 0; i < 10; i += 1) {  

//Juga mamac
	    //L.geoJSON([mamacJuga], {style: mamacStyle}).addTo(mamac_juga);
//Prvi layer Croatia
		L.geoJSON([croatiaPolygon], {style: croPolygonStyle2}).addTo(croatia_polygon_2);
//Drugi layer Yugoslavia		
		L.geoJSON([yugoslaviaPolygon], {style: yugoPolygonStyle}).addTo(yugoslavia_polygon);
//Treći layer Velika Srbija			   
	   L.geoJSON([greatserbiaPolygon], {style: serbPolygonStyle}).addTo(srbija_polygon);
//Vukovar layer koji je mamac, ali nije cijeli prikaz sloja bitke već samo nevidljivi poligon
	    L.geoJSON([mamacVukovar260991], {style: mamacStyle}).addTo(mamac_25_09_91);
	    L.geoJSON([mamacVukovar101191], {style: mamacStyle}).addTo(mamac_10_11_91);
//Zapadna Slavonija, layer koji je mamac, ali i prikaz jednog sloja bitke
	    L.geoJSON([mamacZapSla], {style: mamacStyle}).addTo(mamac_zap_slavonija);
//Banovina Kordun
	    L.geoJSON([mamacBanKordun], {style: mamacStyle}).addTo(mamac_ban_kordun);
//Lika
	    L.geoJSON([mamacLika], {style: mamacStyle}).addTo(mamac_lika);
	    L.geoJSON([mamacSlunj], {style: mamacStyle}).addTo(mamac_slunj);
//Zadar	
	    L.geoJSON([mamacZadar], {style: mamacStyle}).addTo(mamac_Zadar);
//Dalmacija	
	    L.geoJSON([mamacDalmacija], {style: mamacStyle}).addTo(mamac_Dalmacija);
//Južno bojište		
	    L.geoJSON([mamacJug], {style: mamacStyle}).addTo(mamac_jug);
//Sarajevski sporazum
	    L.geoJSON([mamacsarajevoagr], {style: mamacStyle}).addTo(mamac_Sarajevo);
//Srpske enklave koje su razoružane u srpnju 1992.
		L.geoJSON([srpskeEnklaveLika], {style: mamacStyle}).addTo(mamac_srpske_enklave);
//Šibenik		
	    L.geoJSON([mamacNosKalik], {style: mamacStyle}).addTo(mamac_nos_kalik);
	    L.geoJSON([mamacMiljevackiPlato], {style: mamacStyle}).addTo(mamac_miljevacki_plato);
//Zadar brdo Križ
	    L.geoJSON([mamacBrdoKriz], {style: mamacStyle}).addTo(mamac_brdo_kriz);
//UNPA, mamac
	    L.geoJSON([mamacUnpaSektori], {style: mamacStyle}).addTo(mamac_unpa_sektori);
//Operacija Maslenica 1993
	    L.geoJSON([mamacMaslenica], {style: mamacStyle}).addTo(mamac_Maslenica);
//Oslobađanje Cavtata 1992
	    L.geoJSON([mamacCavtat], {style: mamacStyle}).addTo(mamac_cavtat);
//Oslobađanje brane Peruča 1993
	    L.geoJSON([mamacPeruca], {style: mamacStyle}).addTo(mamac_Peruca);
//Oslobađanje Medačkog džepa 1993
	    L.geoJSON([mamacMedak], {style: mamacStyle}).addTo(mamac_Medak);
//Operacija Bljesak 1995			    
		L.geoJSON([mamacBljesak], {style: mamacStyle}).addTo(mamac_bljesak);
//Operacija Oluja 1995
	    L.geoJSON([mamacOluja030895], {style: mamacStyle}).addTo(mamac_svk_04_05_95);
//Operacija Oluja 1995 Kordun Banovina	
	    L.geoJSON([mamacBanKordun030895], {style: mamacStyle}).addTo(mamac_ban_kordun_03_08_95);
//Operacija Oluja 1995 Lika	    
		L.geoJSON([mamacLika030895], {style: mamacStyle}).addTo(mamac_lika_03_08_95);
//Operacija Oluja 1995 Dalmacija	    
	    L.geoJSON([mamaDalmacija030895], {style: mamacStyle}).addTo(mamac_dalmacija_03_08_95);
//Operacija Oluja 1995 Lika	    
	    L.geoJSON([mamacLika060895], {style: mamacStyle}).addTo(mamac_lika_06_08_95);
//Operacija Oluja 1995 Lika	    
		L.geoJSON([mamacLika070895], {style: mamacStyle}).addTo(mamac_lika_07_08_95);
//Operacija Oluja 1995 Kordun Banovina	
	    L.geoJSON([mamacBanKordun080895], {style: mamacStyle}).addTo(mamac_ban_kordun_08_08_95);
//Kraj operacije Oluja 		
	    L.geoJSON([croatiaPolygon], {style: mamacStyle}).addTo(croatia_polygon_3);
//Rat niskog intenziteta	   
	   L.geoJSON([mamacLowConflict], {style: mamacStyle}).addTo(mamac_low_conflict);
//JNA plan napada
	    L.geoJSON([jnaSmjerNapada], {style: smjernapadaStyle}).addTo(smjer_napada);	   
//BiH mamci
        L.geoJSON([bih20031992], {style: mamacStyle}).addTo(mamac_Bih);	 
        L.geoJSON([mamacKupres], {style: mamacStyle}).addTo(mamac_kupres);	
        L.geoJSON([mamacIstHercegovina], {style: mamacStyle}).addTo(mamac_ist_hercegovina);	 
        L.geoJSON([mamacIstBosna], {style: mamacStyle}).addTo(mamac_Ist_Bosna);	
 		L.geoJSON([mamacJajce], {style: mamacStyle}).addTo(mamac_jajce);	
		L.geoJSON([mamacPosavina], {style: mamacStyle}).addTo(mamac_Posavina);	
		L.geoJSON([mamacSarajevo], {style: mamacStyle}).addTo(mamac_Sarajevo);	
		L.geoJSON([mamacBosKrajina], {style: mamacStyle}).addTo(mamac_boskrajina);	
		L.geoJSON([mamacUskoplje], {style: mamacStyle}).addTo(mamac_Uskoplje);	
		L.geoJSON([mamacSredBosna], {style: mamacStyle}).addTo(mamac_Sred_Bosna);	
		L.geoJSON([mamacJablanica], {style: mamacStyle}).addTo(mamac_Jablanica);	
		L.geoJSON([mamacZepce], {style: mamacStyle}).addTo(mamac_Zepce);	
		L.geoJSON([mamacMostar], {style: mamacStyle}).addTo(mamac_Mostar);	
		L.geoJSON([mamacBihac], {style: mamacStyle}).addTo(mamac_Bihac);	
		L.geoJSON([mamacCincar], {style: mamacStyle}).addTo(mamac_Cincar);	
//Operacija Skok 1 2 Zima 1994	    		
		L.geoJSON([mamacSkok], {style: mamacStyle}).addTo(mamac_Skok);	
//Operacija Maestral    		
		L.geoJSON([mamacMaestral], {style: mamacStyle}).addTo(mamac_Maestral);	
	   }
	   
//Rat niskog intenziteta	   
var low_period = L.geoJSON(lowConflict, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'yt' property
        var ytType = feature.properties.yt;
        var icon;
        // Assign the appropriate icon based on the ytType
        if (ytType === 'no') {
            icon = incident1;
        } else if (ytType === 'yes') {
            icon = cet2;
        } 
        // Add more conditions as needed for other types of 'yt'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });
        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var ytType = feature.properties.yt;
            var icon;

            // Determine which icon to use based on the ytType
            if (ytType === 'no') {
                icon = incident2; // Change to the appropriate icon for 'hos'
            } else if (ytType === 'yes') {
                icon = incident2; // Change to the appropriate icon for 'zng'
            } 
            // Add more conditions as needed for other types of 'yt'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var ytType = feature.properties.yt;
            var icon;

            // Determine which icon to use based on the ytType
            if (ytType === 'no') {
                icon = incident1; // Change to the appropriate icon for 'hos'
            } else if (ytType === 'yes') {
                icon = cet2; // Change to the appropriate icon for 'zng'
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
		layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
    }
});		
		low_period.addTo(low_Conflict);		
		
//Balvan revolucija
	var balvan_Revolucija = L.geoJSON(balvanrevolucija,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: stopIcon, riseOnHover: true, zIndexOffset: 1000});
		},
				onEachFeature: function(feature,layer)
            {
            layer.on("mouseover",function(e){
                layer.setIcon(stopIcon2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(stopIcon)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.datum))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  });
		balvan_Revolucija.addTo(balvan_revolucija);
//Proglašenje SAO krajine
    var sao_krajina = L.geoJSON(saoKrajina, {
		             style: saoStyle,
					 onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.NAME_2) {
                layer.bindPopup('<p id = "popup">' + feature.properties.NAME_2, {closeButton: false, offset: L.point(0, -10)});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });
				layer.on('mouseover mousemove', function (e) {
	        	var layer = e.target;
            
	        	layer.setStyle({
	        		weight: 1,
	        		color: '#7f0000',
	        		fillOpacity: 0.5,
	        		fillColor: '#fc9272'
	        	});
	        	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        		layer.bringToFront();
	        	}
	          });
              }
			   layer.on('mouseout', function (e) {
				  sao_krajina.resetStyle(e.target);
	          });
              }
		  });
		sao_krajina.addTo(proglasenje_sao_krajina);
//Srbi zauzimaju policijske postaje		
	var srpske_postaje = L.geoJSON(serbPolicPostaje,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: serbgrbIcon, riseOnHover: true, zIndexOffset: 1000});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(serbgrbIcon2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(serbgrbIcon)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(5,-30), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  });			
	srpske_postaje.addTo(srbi_postaje);
//JNA plan napada
	var jna_plan = L.geoJSON(jnavojarne,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: jna3, riseOnHover: true, zIndexOffset: 1000});
		},
				onEachFeature: function(feature,layer)
            {
            layer.on("mouseover",function(e){
                layer.setIcon(jna4);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(jna3)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-22), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  });
//Open popup on hover for serb enclaves, stavljeno samo za njih za bolju razumljivost
		function serb_enclaves(feature, layer) {
            if (feature.properties && feature.properties.place) {
                layer.bindPopup('<p id = "popup">' + feature.properties.place, {closeButton: false, offset: L.point(0, -10)});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });
            }
        }						
//UNPA sektori, ružičaste zone 
	  var unpa_pink = L.geoJSON(unPinkZones, {
		             style: pinkStyle,
					 onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.title) {
               layer.bindPopup('<p id = "popup">' + feature.properties.title, {closeButton: false});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });
				layer.on('mouseover mousemove', function (e) {
	        	var layer = e.target;
	        	layer.setStyle({
	        		weight: 1,
	        		color: '#800026',
	        		fillOpacity: 0.5,
	        		fillColor: '#fcc5c0'
	        	});
	        	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        		layer.bringToFront();
	        	}
	          });
              }
			   layer.on('mouseout', function (e) {
				  unpa_pink.resetStyle(e.target);
	          });
              }
		  });
//UNPA sektori
    var unpa_sektori = L.geoJSON(unpaSektori, {
		             style: unpaStyle,
					 onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.title) {
               layer.bindPopup('<p id = "popup">' + feature.properties.title, {closeButton: false});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });
				layer.on('mouseover mousemove', function (e) {
	        	var layer = e.target;          
	        	layer.setStyle({
	        		weight: 1,
	        		color: '#800026',
	        		fillOpacity: 0.5,
	        		fillColor: '#d9f0a3'
	        	});           
	        	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        		layer.bringToFront();
	        	}
	          });				
              }
			   layer.on('mouseout', function (e) {
				  unpa_sektori.resetStyle(e.target);
	          });
              }
		  });  
//UNPA zone under control of Croats
    var unpa_cro = L.geoJSON(unpaSektorCro, {
		             style: unpacroStyle,
					 onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.title) {
               layer.bindPopup('<p id = "popup">' + feature.properties.title, {closeButton: false});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });
				layer.on('mouseover mousemove', function (e) {
	        	var layer = e.target;         
	        	layer.setStyle({
	        		weight: 1,
	        		color: '#800026',
	        		fillOpacity: 0.5,
	        		fillColor: '#74a9cf'
	        	});          
	        	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        		layer.bringToFront();
	        	}
	          });			
              }
			   layer.on('mouseout', function (e) {
				  unpa_cro.resetStyle(e.target);
	          });
              }
		  });
//Mirovni pregovori - Cutileirov plan CRO
    var hrvatske_opcine = L.geoJSON(hrvatskeOpcine, {
		             style: hvoStyle,
					 onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.title) {
               layer.bindPopup('<p id = "popup">' + feature.properties.title, {closeButton: false});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });
				layer.on('mouseover mousemove', function (e) {
	        	var layer = e.target;          
	        	layer.setStyle({
	        		weight: 1,
	        		color: '#800026',
	        		fillOpacity: 0.5,
	        		fillColor: '#d9f0a3'
	        	});           
	        	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        		layer.bringToFront();
	        	}
	          });				
              }
			   layer.on('mouseout', function (e) {
				  hrvatske_opcine.resetStyle(e.target);
	          });
              }
		  });		
//Mirovni pregovori - Cutileirov plan MUSLIM
    var muslimanske_opcine = L.geoJSON(muslimanskeOpcine, {
		             style: abihStyle,
					 onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.title) {
               layer.bindPopup('<p id = "popup">' + feature.properties.title, {closeButton: false});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });
				layer.on('mouseover mousemove', function (e) {
	        	var layer = e.target;          
	        	layer.setStyle({
	        		weight: 1,
	        		color: '#800026',
	        		fillOpacity: 0.5,
	        		fillColor: '#d9f0a3'
	        	});           
	        	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        		layer.bringToFront();
	        	}
	          });				
              }
			   layer.on('mouseout', function (e) {
				  muslimanske_opcine.resetStyle(e.target);
	          });
              }
		  });	
//Mirovni pregovori - Cutileirov plan SERB
    var srpske_opcine = L.geoJSON(srpskeOpcine, {
		             style: serbStyle,
					 onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.title) {
               layer.bindPopup('<p id = "popup">' + feature.properties.title, {closeButton: false});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });
				layer.on('mouseover mousemove', function (e) {
	        	var layer = e.target;          
	        	layer.setStyle({
	        		weight: 1,
	        		color: '#800026',
	        		fillOpacity: 0.5,
	        		fillColor: '#d9f0a3'
	        	});           
	        	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        		layer.bringToFront();
	        	}
	          });				
              }
			   layer.on('mouseout', function (e) {
				  srpske_opcine.resetStyle(e.target);
	          });
              }
		  });	
//MIROVNI PREGOVORI U BiH Vance - Owenov plan CRO
var hrv_provincije = L.geoJSON(hrvProvincije, {
		             style: hvoStyle,
					 onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.title) {
               layer.bindPopup('<p id = "popup">' + feature.properties.title, {closeButton: false});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });
				layer.on('mouseover mousemove', function (e) {
	        	var layer = e.target;          
	        	layer.setStyle({
	        		weight: 1,
	        		color: '#800026',
	        		fillOpacity: 0.5,
	        		fillColor: '#d9f0a3'
	        	});           
	        	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        		layer.bringToFront();
	        	}
	          });				
              }
			   layer.on('mouseout', function (e) {
				  hrv_provincije.resetStyle(e.target);
	          });
              }
		  });
//MIROVNI PREGOVORI U BiH Vance - Owenov plan MUSLIM
var mus_provincije = L.geoJSON(musProvincije, {
		             style: abihStyle,
					 onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.title) {
               layer.bindPopup('<p id = "popup">' + feature.properties.title, {closeButton: false});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });
				layer.on('mouseover mousemove', function (e) {
	        	var layer = e.target;          
	        	layer.setStyle({
	        		weight: 1,
	        		color: '#800026',
	        		fillOpacity: 0.5,
	        		fillColor: '#d9f0a3'
	        	});           
	        	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        		layer.bringToFront();
	        	}
	          });				
              }
			   layer.on('mouseout', function (e) {
				  mus_provincije.resetStyle(e.target);
	          });
              }
		  });
//MIROVNI PREGOVORI U BiH Vance - Owenov plan SERB
var ser_provincije = L.geoJSON(serProvincije, {
		             style: serbStyle,
					 onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.title) {
               layer.bindPopup('<p id = "popup">' + feature.properties.title, {closeButton: false});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });
				layer.on('mouseover mousemove', function (e) {
	        	var layer = e.target;          
	        	layer.setStyle({
	        		weight: 1,
	        		color: '#800026',
	        		fillOpacity: 0.5,
	        		fillColor: '#d9f0a3'
	        	});           
	        	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        		layer.bringToFront();
	        	}
	          });				
              }
			   layer.on('mouseout', function (e) {
				  ser_provincije.resetStyle(e.target);
	          });
              }
		  });
//MIROVNI PREGOVORI U BiH Vance - Owenov plan SARAJEVO
var sarajevo_provincija = L.geoJSON(sarajevoProvincija, {
		             style: sarajStyle,
					 onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.title) {
               layer.bindPopup('<p id = "popup">' + feature.properties.title, {closeButton: false});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });
				layer.on('mouseover mousemove', function (e) {
	        	var layer = e.target;          
	        	layer.setStyle({
	        		weight: 1,
	        		color: '#800026',
	        		fillOpacity: 0.5,
	        		fillColor: '#d9f0a3'
	        	});           
	        	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        		layer.bringToFront();
	        	}
	          });				
              }
			   layer.on('mouseout', function (e) {
				  sarajevo_provincija.resetStyle(e.target);
	          });
              }
		  });	
//MIROVNI PREGOVORI U BiH Owen - Stoltenberg plan CRO
var hrv_republika = L.geoJSON(hrvRepublika, {
		             style: hvoStyle,
					 onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.title) {
               layer.bindPopup('<p id = "popup">' + feature.properties.title, {closeButton: false});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });
				layer.on('mouseover mousemove', function (e) {
	        	var layer = e.target;          
	        	layer.setStyle({
	        		weight: 1,
	        		color: '#800026',
	        		fillOpacity: 0.5,
	        		fillColor: '#d9f0a3'
	        	});           
	        	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        		layer.bringToFront();
	        	}
	          });				
              }
			   layer.on('mouseout', function (e) {
				  hrv_republika.resetStyle(e.target);
	          });
              }
		  });	
//MIROVNI PREGOVORI U BiH Owen - Stoltenberg plan MUSLIM
var mus_republika = L.geoJSON(musRepublika, {
		             style: abihStyle,
					 onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.title) {
               layer.bindPopup('<p id = "popup">' + feature.properties.title, {closeButton: false});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });
				layer.on('mouseover mousemove', function (e) {
	        	var layer = e.target;          
	        	layer.setStyle({
	        		weight: 1,
	        		color: '#800026',
	        		fillOpacity: 0.5,
	        		fillColor: '#d9f0a3'
	        	});           
	        	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        		layer.bringToFront();
	        	}
	          });				
              }
			   layer.on('mouseout', function (e) {
				  mus_republika.resetStyle(e.target);
	          });
              }
		  });	
//MIROVNI PREGOVORI U BiH Owen - Stoltenberg plan SERB
var ser_republika = L.geoJSON(serRepublika, {
		             style: serbStyle,
					 onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.title) {
               layer.bindPopup('<p id = "popup">' + feature.properties.title, {closeButton: false});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });
				layer.on('mouseover mousemove', function (e) {
	        	var layer = e.target;          
	        	layer.setStyle({
	        		weight: 1,
	        		color: '#800026',
	        		fillOpacity: 0.5,
	        		fillColor: '#d9f0a3'
	        	});           
	        	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        		layer.bringToFront();
	        	}
	          });				
              }
			   layer.on('mouseout', function (e) {
				  ser_republika.resetStyle(e.target);
	          });
              }
		  });	
//MIROVNI PREGOVORI U BiH Owen - Stoltenberg plan SARAJEVO
var sarajevo_republika = L.geoJSON(sarajevoRepublika, {
		             style: sarajStyle,
					 onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.title) {
               layer.bindPopup('<p id = "popup">' + feature.properties.title, {closeButton: false});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });
				layer.on('mouseover mousemove', function (e) {
	        	var layer = e.target;          
	        	layer.setStyle({
	        		weight: 1,
	        		color: '#800026',
	        		fillOpacity: 0.5,
	        		fillColor: '#d9f0a3'
	        	});           
	        	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        		layer.bringToFront();
	        	}
	          });				
              }
			   layer.on('mouseout', function (e) {
				  sarajevo_republika.resetStyle(e.target);
	          });
              }
		  });		  
//sarajevo agreement layer
var sarajevo_hover = L.geoJSON(sarajevoAgreement, {
		             style: sarStyle,
					 onEachFeature: function(feature, layer) {
               /* layer.bindPopup('<p id = "popup">' + feature.properties.title, {closeButton: false});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });*/
				layer.on('mouseover mousemove', function (e) {
	        	var layer = e.target;           
	        	layer.setStyle({
	        		weight: 1,
	        		color: '#800026',
	        		fillOpacity: 0.5,
	        		fillColor: '#ff0000'
	        	});         
	        	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        		layer.bringToFront();
	        	}
	          });		  
			   layer.on('mouseout', function (e) {
				  sarajevo_hover.resetStyle(e.target);
	          });
              }
		  });
//Croatia Independence day		
var independence_day = L.geoJSON(independenceDay,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: hrgrbIcon1, riseOnHover: true, zIndexOffset: 1});			
		},
				onEachFeature: function(feature,layer)
            {
            layer.on("mouseover",function(e){
                layer.setIcon(hrgrbIcon2);	
            });			
            layer.on("mouseout",function(e){
                layer.setIcon(hrgrbIcon1)
            });				
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-30), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  });
//Proglašenje SAO u BiH
var sao_krajine_bih = L.geoJSON(saoKrajineBih, {
		             style: saoStyle,
					 onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.NAME_2) {
                layer.bindPopup('<p id = "popup">' + feature.properties.NAME_2, {closeButton: false, offset: L.point(0, -10)});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });
				layer.on('mouseover mousemove', function (e) {
	        	var layer = e.target;
            
	        	layer.setStyle({
	        		weight: 1,
	        		color: '#7f0000',
	        		fillOpacity: 0.5,
	        		fillColor: '#fc9272'
	        	});
	        	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        		layer.bringToFront();
	        	}
	          });
              }
			   layer.on('mouseout', function (e) {
				  sao_krajina.resetStyle(e.target);
	          });
              }
		  });
//Proglašenje hrvatskih zajednica BiH
var hr_Zajednice_Bih = L.geoJSON(hrZajedniceBih, {
		             style: hzStyle,
					 onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.NAME_2) {
                layer.bindPopup('<p id = "popup">' + feature.properties.NAME_2, {closeButton: false, offset: L.point(0, -10)});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });
				layer.on('mouseover mousemove', function (e) {
	        	var layer = e.target;
            
	        	layer.setStyle({
	        		weight: 1,
	        		color: '#3579b5',
	        		fillOpacity: 0.5,
	        		fillColor: '#65a3db'
	        	});
	        	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        		layer.bringToFront();
	        	}
	          });
              }
			   layer.on('mouseout', function (e) {
				  hr_Zajednice_Bih.resetStyle(e.target);
	          });
              }
		  });
//Proglašenje hrvatskih zajednica BiH Usora i Srednja Bosna(Žepče)
var hr_Zajednice_Bih1992 = L.geoJSON(hrZajedniceBih1992, {
		             style: hzStyle,
					 onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.NAME_2) {
                layer.bindPopup('<p id = "popup">' + feature.properties.NAME_2, {closeButton: false, offset: L.point(0, -10)});
                layer.on('mouseover mousemove', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });
				layer.on('mouseover mousemove', function (e) {
	        	var layer = e.target;
            
	        	layer.setStyle({
	        		weight: 1,
	        		color: '#3579b5',
	        		fillOpacity: 0.5,
	        		fillColor: '#65a3db'
	        	});
	        	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        		layer.bringToFront();
	        	}
	          });
              }
			   layer.on('mouseout', function (e) {
				  hr_Zajednice_Bih1992.resetStyle(e.target);
	          });
              }
		  });
//EVENTS	
//01.01.1990. do 17.08.1990.
var hrpolit_31_08_90 = L.geoJSON(hrpolit310890,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: hr_politika1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(hr_politika2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(hr_politika1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		hrpolit_31_08_90.addTo(hr_polit_31_08_90);

var serpolit_31_08_90 = L.geoJSON(serpolit310890,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: ser_politika1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(ser_politika2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(ser_politika1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		serpolit_31_08_90.addTo(ser_polit_31_08_90);
		
//17.08.1990. do 31.12.1990.
var hrpolit_31_12_90 = L.geoJSON(hrpolit311290,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: hr_politika1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(hr_politika2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(hr_politika1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		hrpolit_31_12_90.addTo(hr_polit_31_12_90);
		
var serpolit_31_12_90 = L.geoJSON(serpolit311290,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: ser_politika1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(ser_politika2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(ser_politika1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		serpolit_31_12_90.addTo(ser_polit_31_12_90);

//01.01.1991. do 28.02.1991.
var hrpolit_28_02_91 = L.geoJSON(hrpolit280291,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: hr_politika1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(hr_politika2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(hr_politika1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		hrpolit_28_02_91.addTo(hr_polit_28_02_91);
		
var serpolit_28_02_91 = L.geoJSON(serpolit280291,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: ser_politika1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(ser_politika2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(ser_politika1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		serpolit_28_02_91.addTo(ser_polit_28_02_91);
	
//01.03.1991. do 30.06.1991.
hrpolit_01_05_91 = L.geoJSON(hrpolit260891,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: hr_politika1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(hr_politika2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(hr_politika1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		hrpolit_01_05_91.addTo(hr_polit_26_08_91);
		
var serpolit_01_05_91 = L.geoJSON(serpolit260891,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: ser_politika1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(ser_politika2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(ser_politika1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		serpolit_01_05_91.addTo(ser_polit_26_08_91);
		
	   
var hrpolit_30_06_91 = L.geoJSON(hrpolit300691,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: hr_politika1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(hr_politika2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(hr_politika1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		hrpolit_30_06_91.addTo(hr_polit_30_06_91);
		
var serpolit_30_06_91 = L.geoJSON(serpolit300691,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: ser_politika1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(ser_politika2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(ser_politika1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		serpolit_30_06_91.addTo(ser_polit_30_06_91);
		
var sernapad_30_06_91 = L.geoJSON(sernapad300691,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: ser_napad1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(ser_napad2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(ser_napad1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		sernapad_30_06_91.addTo(ser_napad_30_06_91);
	
//01.07.1991. do 26.08.1991.	   
var hrpolit_26_08_91 = L.geoJSON(hrpolit260891,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: hr_politika1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(hr_politika2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(hr_politika1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		hrpolit_26_08_91.addTo(hr_polit_26_08_91);
		
var hrnapad_26_08_91 = L.geoJSON(hrnapad260891,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: hr_napad1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(hr_napad2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(hr_napad1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		hrnapad_26_08_91.addTo(hr_napad_26_08_91);
		
var serpolit_26_08_91 = L.geoJSON(serpolit260891,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: ser_politika1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(ser_politika2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(ser_politika1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		serpolit_26_08_91.addTo(ser_polit_26_08_91);
		
var sernapad_26_08_91 = L.geoJSON(sernapad260891,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: ser_napad1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(ser_napad2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(ser_napad1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		sernapad_26_08_91.addTo(ser_napad_26_08_91);

//27.08.1991. do 26.09.1991.	   
var hrpolit_26_09_91 = L.geoJSON(hrpolit260991,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: hr_politika1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(hr_politika2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(hr_politika1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		hrpolit_26_09_91.addTo(hr_polit_26_09_91);
		
var hrnapad_26_09_91 = L.geoJSON(hrnapad260991,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: hr_napad1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(hr_napad2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(hr_napad1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		hrnapad_26_09_91.addTo(hr_napad_26_09_91);
		
var sernapad_26_09_91 = L.geoJSON(sernapad260991,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: ser_napad1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(ser_napad2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(ser_napad1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		sernapad_26_09_91.addTo(ser_napad_26_09_91);
		
//27.09.1991. i cijeli listopad	   
var hrpolit_listopad_91 = L.geoJSON(hrpolitlistopad91,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: hr_politika1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(hr_politika2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(hr_politika1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		hrpolit_listopad_91.addTo(hr_polit_listopad_91);
		
var hrnapad_listopad_91 = L.geoJSON(hrnapadlistopad91,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: hr_napad1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(hr_napad2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(hr_napad1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		hrnapad_listopad_91.addTo(hr_napad_listopad_91);
		
var sernapad_listopad_91 = L.geoJSON(sernapadlistopad91,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: ser_napad1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(ser_napad2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(ser_napad1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		  
		sernapad_listopad_91.addTo(ser_napad_listopad_91);
//studeni
var hrpolit_studeni_91 = L.geoJSON(hrpolitstudeni91,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: hr_politika1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(hr_politika2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(hr_politika1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		hrpolit_studeni_91.addTo(hr_polit_studeni_91);
		
var hrnapad_studeni_91 = L.geoJSON(hrnapadstudeni91,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: hr_napad1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(hr_napad2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(hr_napad1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		hrnapad_studeni_91.addTo(hr_napad_studeni_91);
		
var sernapad_studeni_91 = L.geoJSON(sernapadstudeni91,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: ser_napad1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(ser_napad2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(ser_napad1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		sernapad_studeni_91.addTo(ser_napad_studeni_91);
		
//prosinac
var hrnapad_prosinac_91 = L.geoJSON(hrnapadprosinac91,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: hr_napad1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(hr_napad2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(hr_napad1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		hrnapad_prosinac_91.addTo(hr_napad_prosinac_91);

var serpolit_prosinac_91 = L.geoJSON(serpolitprosinac91,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: ser_politika1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(ser_politika2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(ser_politika1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		serpolit_prosinac_91.addTo(ser_polit_prosinac_91);

var sernapad_prosinac_91 = L.geoJSON(sernapadprosinac91,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: ser_napad1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(ser_napad2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(ser_napad1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		sernapad_prosinac_91.addTo(ser_napad_prosinac_91);
		
//1992
var hrpolit_1992 = L.geoJSON(hrpolit1992,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: hr_politika1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(hr_politika2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(hr_politika1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		hrpolit_1992.addTo(hr_polit_1992);
		
var hrnapad_1992 = L.geoJSON(hrnapad1992,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: hr_napad1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(hr_napad2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(hr_napad1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		hrnapad_1992.addTo(hr_napad_1992);
		
var sernapad_1992 = L.geoJSON(sernapad1992,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: ser_napad1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(ser_napad2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(ser_napad1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		sernapad_1992.addTo(ser_napad_1992);		
//1993
var hrnapad_1993 = L.geoJSON(hrnapad1993,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: hr_napad1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(hr_napad2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(hr_napad1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		hrnapad_1993.addTo(hr_napad_1993);	
		
var serpolit_1993 = L.geoJSON(serpolit1993,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: ser_politika1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(ser_politika2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(ser_politika1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		serpolit_1993.addTo(ser_polit_1993);

var sernapad_1993 = L.geoJSON(sernapad1993,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: ser_napad1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(ser_napad2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(ser_napad1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		sernapad_1993.addTo(ser_napad_1993);
		
//studeni
var hrpolit_1994 = L.geoJSON(hrpolit1994,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: hr_politika1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(hr_politika2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(hr_politika1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		hrpolit_1994.addTo(hr_polit_1994);

var hrnapad_1994 = L.geoJSON(hrnapad1994,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: hr_napad1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(hr_napad2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(hr_napad1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		hrnapad_1994.addTo(hr_napad_1994);
//1995	   
var hrpolit_1995 = L.geoJSON(hrpolit1995,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: hr_politika1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(hr_politika2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(hr_politika1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		hrpolit_1995.addTo(hr_polit_1995);
		
var hrnapad_1995 = L.geoJSON(hrnapad1995,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: hr_napad1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(hr_napad2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(hr_napad1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		hrnapad_1995.addTo(hr_napad_1995);
		
var serpolit_1995 = L.geoJSON(serpolit1995,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: ser_politika1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(ser_politika2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(ser_politika1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		serpolit_1995.addTo(ser_polit_1995);
		
var sernapad_1995 = L.geoJSON(sernapad1995,{
                pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: ser_napad1, riseOnHover: true, zIndexOffset: 1});
		},
				onEachFeature: function(feature,layer)
            {
           layer.on("mouseover",function(e){
                layer.setIcon(ser_napad2);	
            });
            layer.on("mouseout",function(e){
                layer.setIcon(ser_napad1)
            });
			layer.on('mouseover mousemove', function(e){
            var hover_bubble = new L.Rrose({ offset: new L.Point(2.5,-25), closeButton: false, autoPan: true })
           .setContent('<p id = "popup">' + String(feature.properties.title) + '<br>' + String(feature.properties.date))
           .setLatLng(e.latlng).openOn(map);
          });
          layer.on('mouseout', function(e){map.closePopup() });
          }
		  })	
		sernapad_1995.addTo(ser_napad_1995);
		

//Ovo služi za stajl poligona da ne bude jednobojni već prugasti	
	var myPattern = new L.StripePattern({
              angle: 135,
              weight: 1,
              color: '#1c478c',
              opacity: 1,
			  height: 36,
			  weight: 18,
			  spaceWeight: 18,
              spaceColor: '#137d05',
              spaceOpacity: 1,
        });
        myPattern.addTo(map);
	
//Layers of occupied territory
//Vukovar
//	var cro_26_08_91 = L.geoJSON([cro260891], {style: croPolygonStyle3});
	var sao_01_05_91 = L.geoJSON([sao010591], {style: serbStyle});
	var sao_01_06_91 = L.geoJSON([sao010691], {style: serbStyle});
	var sao_01_07_91 = L.geoJSON([sao010791], {style: serbStyle});
	var sao_01_08_91 = L.geoJSON([sao010891], {style: serbStyle});
	var sao_26_08_91 = L.geoJSON([sao260891], {style: serbStyle});
	var sao_12_09_91 = L.geoJSON([sao120991], {style: serbStyle});
	var sao_21_09_91 = L.geoJSON([sao210991], {style: serbStyle});
	var sao_25_09_91 = L.geoJSON([sao250991], {style: serbStyle});
	var sao_05_10_91 = L.geoJSON([sao051091], {style: serbStyle});
	var sao_26_10_91 = L.geoJSON([sao261091], {style: serbStyle});	
	var sao_10_11_91 = L.geoJSON([sao101191], {style: serbStyle});	
	var sao_15_11_91 = L.geoJSON([sao151191], {style: serbStyle});	
	var sao_17_11_91 = L.geoJSON([sao171191], {style: serbStyle});	
	var sao_19_11_91 = L.geoJSON([sao191191], {style: serbStyle});	
	var sao_21_11_91 = L.geoJSON([sao211191], {style: serbStyle});	
	var sao_28_11_91 = L.geoJSON([sao281191], {style: serbStyle});	
	var sao_17_12_91 = L.geoJSON([sao171291], {style: serbStyle});	
	var sao_03_01_92 = L.geoJSON([sao030192], {style: serbStyle});	
//Istočna Slavonija
	var sao_11_08_95 = L.geoJSON([sao110895], {style: serbStyle});
//Srpske enklave u Lici
	var srpske_enklave = L.geoJSON([srpskeEnklaveLika], {style: serbStyle, onEachFeature: serb_enclaves});
//Sarajevski sporazum
	var sarajevo_sporazum_2 = L.geoJSON([sarajevoAgreement2], {style: serbStyle});
	var sarajevo_sporazum_3 = L.geoJSON([sarajevoAgreement3], {style: serbStyle});
	var sarajevo_sporazum_4 = L.geoJSON([sarajevoAgrDubrovnik070592], {style: serbStyle});
	var sarajevo_sporazum_5 = L.geoJSON([sarajevoBrdoKriz1], {style: serbStyle});
	var sarajevo_sporazum_6 = L.geoJSON([sarajevoAgrDubrovnik220592], {style: serbStyle});
	var sarajevo_sporazum_7 = L.geoJSON([sarajevoBrdoKriz2], {style: serbStyle});
	var sarajevo_sporazum_8 = L.geoJSON([sarajevoAgrDubrovnik250592], {style: serbStyle});	
	var sarajevo_sporazum_9 = L.geoJSON([sarajevoAgrDubrovnik260592], {style: serbStyle});
	var sarajevo_sporazum_10 = L.geoJSON([sarajevoAgrDubrovnik280592], {style: serbStyle});
	var sarajevo_sporazum_11 = L.geoJSON([sarajevoAgrMiljPlato], {style: serbStyle});
	var sarajevo_sporazum_12 = L.geoJSON([sarajevoAgrDubrovnik211092], {style: serbStyle});
	var sarajevo_sporazum_13 = L.geoJSON([sarajevoAgrDubrovnik241092], {style: serbStyle});
//Operacija Maslenica	
	var sao_22_01_93 = L.geoJSON([sao220193], {style: serbStyle});
	var sao_27_01_93 = L.geoJSON([sao270193], {style: serbStyle});
//Oslobađanje brane Peruča 1993
	var sao_28_01_93 = L.geoJSON([sao280193], {style: serbStyle});
//Oslobođen Medački džep
	var sao_09_09_93 = L.geoJSON([sao090993], {style: serbStyle});
//Operacija Skok 1 2 Zima 94'
	var sao_20_11_94 = L.geoJSON([sao201194], {style: serbStyle});
	var sao_01_12_94 = L.geoJSON([sao011294], {style: serbStyle});
	var sao_05_12_94 = L.geoJSON([sao051294], {style: serbStyle});
	var sao_10_12_94 = L.geoJSON([sao101294], {style: serbStyle});
	var sao_25_12_94 = L.geoJSON([sao251294], {style: serbStyle});
//Operacija Skok 1
	var sao_14_04_95 = L.geoJSON([sao140495], {style: serbStyle});
//Operacija Bljesak 95'
	var sao_04_05_95 = L.geoJSON([sao040595], {style: serbStyle});
//Operacija Ljeto 95'
	var sao_30_07_95 = L.geoJSON([sao300795], {style: serbStyle});
//Operacija Oluja 95'
	var sao_04_08_95 = L.geoJSON([sao040895], {style: serbStyle});
	var sao_05_08_95 = L.geoJSON([sao050895], {style: serbStyle});
	var sao_06_08_95 = L.geoJSON([sao060895], {style: serbStyle});
	var sao_07_08_95 = L.geoJSON([sao070895], {style: serbStyle});
	var sao_08_08_95 = L.geoJSON([sao080895], {style: serbStyle});
    var sao_09_08_95 = L.geoJSON([sao090895], {style: serbStyle});
//Rat u BiH
	var hvo_abih_20_03_92 = L.geoJSON([hvoabih200392], 
	    {style: 
		{fillPattern: myPattern,
				color: "green",
				weight: 1,
				fillopacity: 1
		}});
	var vrs_20_03_92 = L.geoJSON([vrs200392], {style: serbStyle});
    
	var hvo_abih_04_04_92 = L.geoJSON([hvoabih040492], 
	    {style: 
		{fillPattern: myPattern,
				color: "green",
				weight: 1,
				fillopacity: 1
		}});
	var vrs_04_04_92 = L.geoJSON([vrs040492], {style: serbStyle});

	var hvo_abih_06_04_92 = L.geoJSON([hvoabih060492], 
	    {style: 
		{fillPattern: myPattern,
				color: "green",
				weight: 1,
				fillopacity: 1
		}});
	var vrs_06_04_92 = L.geoJSON([vrs060492], {style: serbStyle});

    var hvo_abih_07_04_92 = L.geoJSON([hvoabih070492], 
	    {style: 
		{fillPattern: myPattern,
				color: "green",
				weight: 1,
				fillopacity: 1
		}});
	var vrs_07_04_92 = L.geoJSON([vrs070492], {style: serbStyle});

    var hvo_abih_11_04_92 = L.geoJSON([hvoabih110492], 
	    {style: 
		{fillPattern: myPattern,
				color: "green",
				weight: 1,
				fillopacity: 1
		}});
	var vrs_11_04_92 = L.geoJSON([vrs110492], {style: serbStyle});

    var hvo_abih_05_05_92 = L.geoJSON([hvoabih050592], 
	    {style: 
		{fillPattern: myPattern,
				color: "green",
				weight: 1,
				fillopacity: 1
		}});
	var vrs_05_05_92 = L.geoJSON([vrs050592], {style: serbStyle});

    var hvo_abih_07_05_92 = L.geoJSON([hvoabih070592], 
	    {style: 
		{fillPattern: myPattern,
				color: "green",
				weight: 1,
				fillopacity: 1
		}});
	var vrs_07_05_92 = L.geoJSON([vrs070592], {style: serbStyle});
	
	var hvo_abih_08_05_92 = L.geoJSON([hvoabih080592], 
	    {style: 
		{fillPattern: myPattern,
				color: "green",
				weight: 1,
				fillopacity: 1
		}});
	var vrs_08_05_92 = L.geoJSON([vrs080592], {style: serbStyle});

    var hvo_abih_11_05_92 = L.geoJSON([hvoabih110592], 
	    {style: 
		{fillPattern: myPattern,
				color: "green",
				weight: 1,
				fillopacity: 1
		}});
	var vrs_11_05_92 = L.geoJSON([vrs110592], {style: serbStyle});
	
	var hvo_abih_20_05_92 = L.geoJSON([hvoabih200592], 
	    {style: 
		{fillPattern: myPattern,
				color: "green",
				weight: 1,
				fillopacity: 1
		}});
	var vrs_20_05_92 = L.geoJSON([vrs200592], {style: serbStyle});
	
	var hvo_abih_23_05_92 = L.geoJSON([hvoabih230592], 
	    {style: 
		{fillPattern: myPattern,
				color: "green",
				weight: 1,
				fillopacity: 1
		}});
	var vrs_23_05_92 = L.geoJSON([vrs230592], {style: serbStyle});
	
	var hvo_abih_25_05_92 = L.geoJSON([hvoabih250592], 
	    {style: 
		{fillPattern: myPattern,
				color: "green",
				weight: 1,
				fillopacity: 1
		}});
	var vrs_25_05_92 = L.geoJSON([vrs250592], {style: serbStyle});
	
	var hvo_abih_27_05_92 = L.geoJSON([hvoabih270592], 
	    {style: 
		{fillPattern: myPattern,
				color: "green",
				weight: 1,
				fillopacity: 1
		}});
	var vrs_27_05_92 = L.geoJSON([vrs270592], {style: serbStyle});
	
	var hvo_abih_28_05_92 = L.geoJSON([hvoabih280592], 
	    {style: 
		{fillPattern: myPattern,
				color: "green",
				weight: 1,
				fillopacity: 1
		}});
	var vrs_28_05_92 = L.geoJSON([vrs280592], {style: serbStyle});
	
	var hvo_abih_01_06_92 = L.geoJSON([hvoabih010692], 
	    {style: 
		{fillPattern: myPattern,
				color: "green",
				weight: 1,
				fillopacity: 1
		}});
	var vrs_01_06_92 = L.geoJSON([vrs010692], {style: serbStyle});
	
	var hvo_abih_09_06_92 = L.geoJSON([hvoabih090692], 
	    {style: 
		{fillPattern: myPattern,
				color: "green",
				weight: 1,
				fillopacity: 1
		}});
	var vrs_09_06_92 = L.geoJSON([vrs090692], {style: serbStyle});
	
	var hvo_abih_12_06_92 = L.geoJSON([hvoabih120692], 
	    {style: 
		{fillPattern: myPattern,
				color: "green",
				weight: 1,
				fillopacity: 1
		}});
	var vrs_12_06_92 = L.geoJSON([vrs120692], {style: serbStyle});
	
	var hvo_abih_13_06_92 = L.geoJSON([hvoabih130692], 
	    {style: 
		{fillPattern: myPattern,
				color: "green",
				weight: 1,
				fillopacity: 1
		}});
	var vrs_13_06_92 = L.geoJSON([vrs130692], {style: serbStyle});
	
	var hvo_16_06_92 = L.geoJSON([hvo160692], {style: hvoStyle});
	var abih_16_06_92 = L.geoJSON([abih160692], {style: abihStyle});
	var vrs_16_06_92 = L.geoJSON([vrs160692], {style: serbStyle});
	
	var hvo_20_06_92 = L.geoJSON([hvo200692], {style: hvoStyle});
	var abih_20_06_92 = L.geoJSON([abih200692], {style: abihStyle});
	var vrs_20_06_92 = L.geoJSON([vrs200692], {style: serbStyle});
	
	var hvo_26_06_92 = L.geoJSON([hvo260692], {style: hvoStyle});
	var abih_26_06_92 = L.geoJSON([abih260692], {style: abihStyle});
	var vrs_26_06_92 = L.geoJSON([vrs260692], {style: serbStyle});
	
	var hvo_28_06_92 = L.geoJSON([hvo280692], {style: hvoStyle});
	var abih_28_06_92 = L.geoJSON([abih280692], {style: abihStyle});
	var vrs_28_06_92 = L.geoJSON([vrs280692], {style: serbStyle});
	
	var hvo_01_07_92 = L.geoJSON([hvo010792], {style: hvoStyle});
	var abih_01_07_92 = L.geoJSON([abih010792], {style: abihStyle});
	var vrs_01_07_92 = L.geoJSON([vrs010792], {style: serbStyle});
	
	var hvo_05_07_92 = L.geoJSON([hvo050792], {style: hvoStyle});
	var abih_05_07_92 = L.geoJSON([abih050792], {style: abihStyle});
	var vrs_05_07_92 = L.geoJSON([vrs050792], {style: serbStyle});
	
	var hvo_12_07_92 = L.geoJSON([hvo120792], {style: hvoStyle});
	var abih_12_07_92 = L.geoJSON([abih120792], {style: abihStyle});
	var vrs_12_07_92 = L.geoJSON([vrs120792], {style: serbStyle});
	
	var hvo_15_07_92 = L.geoJSON([hvo150792], {style: hvoStyle});
	var abih_15_07_92 = L.geoJSON([abih150792], {style: abihStyle});
	var vrs_15_07_92 = L.geoJSON([vrs150792], {style: serbStyle});
	
    var hvo_19_07_92 = L.geoJSON([hvo190792], {style: hvoStyle});
	var abih_19_07_92 = L.geoJSON([abih190792], {style: abihStyle});
	var vrs_19_07_92 = L.geoJSON([vrs190792], {style: serbStyle});	
	
	var hvo_25_07_92 = L.geoJSON([hvo250792], {style: hvoStyle});
	var abih_25_07_92 = L.geoJSON([abih250792], {style: abihStyle});
	var vrs_25_07_92 = L.geoJSON([vrs250792], {style: serbStyle});	
	
	var hvo_01_08_92 = L.geoJSON([hvo010892], {style: hvoStyle});
	var abih_01_08_92 = L.geoJSON([abih010892], {style: abihStyle});
	var vrs_01_08_92 = L.geoJSON([vrs010892], {style: serbStyle});	
	
	var hvo_25_08_92 = L.geoJSON([hvo250892], {style: hvoStyle});
	var abih_25_08_92 = L.geoJSON([abih250892], {style: abihStyle});
	var vrs_25_08_92 = L.geoJSON([vrs250892], {style: serbStyle});	
	
	var hvo_28_08_92 = L.geoJSON([hvo280892], {style: hvoStyle});
	var abih_28_08_92 = L.geoJSON([abih280892], {style: abihStyle});
	var vrs_28_08_92 = L.geoJSON([vrs280892], {style: serbStyle});	
	
	var hvo_20_09_92 = L.geoJSON([hvo200992], {style: hvoStyle});
	var abih_20_09_92 = L.geoJSON([abih200992], {style: abihStyle});
	var vrs_20_09_92 = L.geoJSON([vrs200992], {style: serbStyle});
	
	var hvo_30_09_92 = L.geoJSON([hvo300992], {style: hvoStyle});
	var abih_30_09_92 = L.geoJSON([abih300992], {style: abihStyle});
	var vrs_30_09_92 = L.geoJSON([vrs300992], {style: serbStyle});
	
	var hvo_05_10_92 = L.geoJSON([hvo051092], {style: hvoStyle});
	var abih_05_10_92 = L.geoJSON([abih051092], {style: abihStyle});
	var vrs_05_10_92 = L.geoJSON([vrs051092], {style: serbStyle});
	
	var hvo_06_10_92 = L.geoJSON([hvo061092], {style: hvoStyle});
	var abih_06_10_92 = L.geoJSON([abih061092], {style: abihStyle});
	var vrs_06_10_92 = L.geoJSON([vrs061092], {style: serbStyle});
	
	var hvo_06_10_92 = L.geoJSON([hvo061092], {style: hvoStyle});
	var abih_06_10_92 = L.geoJSON([abih061092], {style: abihStyle});
	var vrs_06_10_92 = L.geoJSON([vrs061092], {style: serbStyle});
	
	var hvo_20_10_92 = L.geoJSON([hvo201092], {style: hvoStyle});
	var abih_20_10_92 = L.geoJSON([abih201092], {style: abihStyle});
	var vrs_20_10_92 = L.geoJSON([vrs201092], {style: serbStyle});
	
	var hvo_21_10_92 = L.geoJSON([hvo211092], {style: hvoStyle});
	var abih_21_10_92 = L.geoJSON([abih211092], {style: abihStyle});
	var vrs_21_10_92 = L.geoJSON([vrs211092], {style: serbStyle});
	
	var hvo_24_10_92 = L.geoJSON([hvo241092], {style: hvoStyle});
	var abih_24_10_92 = L.geoJSON([abih241092], {style: abihStyle});
	var vrs_24_10_92 = L.geoJSON([vrs241092], {style: serbStyle});
	
	var hvo_25_10_92 = L.geoJSON([hvo251092], {style: hvoStyle});
	var abih_25_10_92 = L.geoJSON([abih251092], {style: abihStyle});
	var vrs_25_10_92 = L.geoJSON([vrs251092], {style: serbStyle});
	
	var hvo_29_10_92 = L.geoJSON([hvo291092], {style: hvoStyle});
	var abih_29_10_92 = L.geoJSON([abih291092], {style: abihStyle});
	var vrs_29_10_92 = L.geoJSON([vrs291092], {style: serbStyle});
	
	var hvo_02_11_92 = L.geoJSON([hvo021192], {style: hvoStyle});
	var abih_02_11_92 = L.geoJSON([abih021192], {style: abihStyle});
	var vrs_02_11_92 = L.geoJSON([vrs021192], {style: serbStyle});
	
	var hvo_12_11_92 = L.geoJSON([hvo121192], {style: hvoStyle});
	var abih_12_11_92 = L.geoJSON([abih121192], {style: abihStyle});
	var vrs_12_11_92 = L.geoJSON([vrs121192], {style: serbStyle});
	
	var hvo_20_11_92 = L.geoJSON([hvo201192], {style: hvoStyle});
	var abih_20_11_92 = L.geoJSON([abih201192], {style: abihStyle});
	var vrs_20_11_92 = L.geoJSON([vrs201192], {style: serbStyle});
	
	var hvo_20_12_92 = L.geoJSON([hvo201292], {style: hvoStyle});
	var abih_20_12_92 = L.geoJSON([abih201292], {style: abihStyle});
	var vrs_20_12_92 = L.geoJSON([vrs201292], {style: serbStyle});

	var hvo_01_01_93 = L.geoJSON([hvoPocetakSijecanj93], {style: hvoStyle});
	var abih_01_01_93 = L.geoJSON([abihPocetakSijecanj93], {style: abihStyle});
	var vrs_01_01_93 = L.geoJSON([vrsPocetakSijecanj93], {style: serbStyle});

	var hvo_12_01_93 = L.geoJSON([hvo120193], {style: hvoStyle});
	var abih_12_01_93 = L.geoJSON([abih120193], {style: abihStyle});
	var vrs_12_01_93 = L.geoJSON([vrs120193], {style: serbStyle});
	
	var hvo_25_01_93 = L.geoJSON([hvo250193], {style: hvoStyle});
	var abih_25_01_93 = L.geoJSON([abih250193], {style: abihStyle});
	var vrs_25_01_93 = L.geoJSON([vrs250193], {style: serbStyle});	

	var hvo_28_01_93 = L.geoJSON([hvo280193], {style: hvoStyle});
	var abih_28_01_93 = L.geoJSON([abih280193], {style: abihStyle});
	var vrs_28_01_93 = L.geoJSON([vrs280193], {style: serbStyle});	

    var hvo_16_03_93 = L.geoJSON([hvo160393], {style: hvoStyle});
	var abih_16_03_93 = L.geoJSON([abih160393], {style: abihStyle});
	var vrs_16_03_93 = L.geoJSON([vrs160393], {style: serbStyle});
	
	var hvo_13_04_93 = L.geoJSON([hvo130493], {style: hvoStyle});
	var abih_13_04_93 = L.geoJSON([abih130493], {style: abihStyle});
	var vrs_13_04_93 = L.geoJSON([vrs130493], {style: serbStyle});
	
	var hvo_18_04_93 = L.geoJSON([hvo180493], {style: hvoStyle});
	var abih_18_04_93 = L.geoJSON([abih180493], {style: abihStyle});
	var vrs_18_04_93 = L.geoJSON([vrs180493], {style: serbStyle});
	
	var hvo_25_04_93 = L.geoJSON([hvo250493], {style: hvoStyle});
	var abih_25_04_93 = L.geoJSON([abih250493], {style: abihStyle});
	var vrs_25_04_93 = L.geoJSON([vrs250493], {style: serbStyle});
	
	var hvo_07_06_93 = L.geoJSON([hvo070693], {style: hvoStyle});
	var abih_07_06_93 = L.geoJSON([abih070693], {style: abihStyle});
	var vrs_07_06_93 = L.geoJSON([vrs070693], {style: serbStyle});

	var hvo_14_06_93 = L.geoJSON([hvo140693], {style: hvoStyle});
	var abih_14_06_93 = L.geoJSON([abih140693], {style: abihStyle});
	var vrs_14_06_93 = L.geoJSON([vrs140693], {style: serbStyle});
	
	var hvo_30_06_93 = L.geoJSON([hvo300693], {style: hvoStyle});
	var abih_30_06_93 = L.geoJSON([abih300693], {style: abihStyle});
	var vrs_30_06_93 = L.geoJSON([vrs300693], {style: serbStyle});
	
	var hvo_03_07_93 = L.geoJSON([hvo030793], {style: hvoStyle});
	var abih_03_07_93 = L.geoJSON([abih030793], {style: abihStyle});
	var vrs_03_07_93 = L.geoJSON([vrs030793], {style: serbStyle});
	
	var hvo_17_07_93 = L.geoJSON([hvo170793], {style: hvoStyle});
	var abih_17_07_93 = L.geoJSON([abih170793], {style: abihStyle});
	var vrs_17_07_93 = L.geoJSON([vrs170793], {style: serbStyle});
	
	var hvo_22_07_93 = L.geoJSON([hvo220793], {style: hvoStyle});
	var abih_22_07_93 = L.geoJSON([abih220793], {style: abihStyle});
	var vrs_22_07_93 = L.geoJSON([vrs220793], {style: serbStyle});
	
	var hvo_24_07_93 = L.geoJSON([hvo240793], {style: hvoStyle});
	var abih_24_07_93 = L.geoJSON([abih240793], {style: abihStyle});
	var vrs_24_07_93 = L.geoJSON([vrs240793], {style: serbStyle});
	
	var hvo_25_07_93 = L.geoJSON([hvo250793], {style: hvoStyle});
	var abih_25_07_93 = L.geoJSON([abih250793], {style: abihStyle});
	var vrs_25_07_93 = L.geoJSON([vrs250793], {style: serbStyle});
	
	var hvo_29_07_93 = L.geoJSON([hvo290793], {style: hvoStyle});
	var abih_29_07_93 = L.geoJSON([abih290793], {style: abihStyle});
	var vrs_29_07_93 = L.geoJSON([vrs290793], {style: serbStyle});
	
	var hvo_31_07_93 = L.geoJSON([hvo310793], {style: hvoStyle});
	var abih_31_07_93 = L.geoJSON([abih310793], {style: abihStyle});
	var vrs_31_07_93 = L.geoJSON([vrs310793], {style: serbStyle});
	
	var hvo_02_08_93 = L.geoJSON([hvo020893], {style: hvoStyle});
	var abih_02_08_93 = L.geoJSON([abih020893], {style: abihStyle});
	var vrs_02_08_93 = L.geoJSON([vrs020893], {style: serbStyle});
	
	var hvo_24_08_93 = L.geoJSON([hvo240893], {style: hvoStyle});
	var abih_24_08_93 = L.geoJSON([abih240893], {style: abihStyle});
	var vrs_24_08_93 = L.geoJSON([vrs240893], {style: serbStyle});
	
	var hvo_14_09_93 = L.geoJSON([hvo140993], {style: hvoStyle});
	var abih_14_09_93 = L.geoJSON([abih140993], {style: abihStyle});
	var vrs_14_09_93 = L.geoJSON([vrs140993], {style: serbStyle});
	
	var hvo_26_09_93 = L.geoJSON([hvo260993], {style: hvoStyle});
	var abih_26_09_93 = L.geoJSON([abih260993], {style: abihStyle});
	var vrs_26_09_93 = L.geoJSON([vrs260993], {style: serbStyle});
	
	var hvo_21_10_93 = L.geoJSON([hvo211093], {style: hvoStyle});
	var abih_21_10_93 = L.geoJSON([abih211093], {style: abihStyle});
	var vrs_21_10_93 = L.geoJSON([vrs211093], {style: serbStyle});
	var fabdic_21_10_93 = L.geoJSON([fabdic211093], {style: fabdicStyle});
	
	var hvo_02_11_93 = L.geoJSON([hvo021193], {style: hvoStyle});
	var abih_02_11_93 = L.geoJSON([abih021193], {style: abihStyle});
	var vrs_02_11_93 = L.geoJSON([vrs021193], {style: serbStyle});
	var fabdic_02_11_93 = L.geoJSON([fabdic021193], {style: fabdicStyle});

	var hvo_03_11_93 = L.geoJSON([hvo031193], {style: hvoStyle});
	var abih_03_11_93 = L.geoJSON([abih031193], {style: abihStyle});
	var vrs_03_11_93 = L.geoJSON([vrs031193], {style: serbStyle});
	var fabdic_03_11_93 = L.geoJSON([fabdic031193], {style: fabdicStyle});

	var hvo_30_11_93 = L.geoJSON([hvo301193], {style: hvoStyle});
	var abih_30_11_93 = L.geoJSON([abih301193], {style: abihStyle});
	var vrs_30_11_93 = L.geoJSON([vrs301193], {style: serbStyle});
	var fabdic_30_11_93 = L.geoJSON([fabdic301193], {style: fabdicStyle});	
	
    var hvo_28_02_94 = L.geoJSON([hvo280294], {style: hvoStyle});
	var abih_28_02_94 = L.geoJSON([abih280294], {style: abihStyle});
	var vrs_28_02_94 = L.geoJSON([vrs280294], {style: serbStyle});
	var fabdic_28_02_94 = L.geoJSON([fabdic280294], {style: fabdicStyle});		

	var hvo_06_04_94 = L.geoJSON([hvo060494], {style: hvoStyle});
	var abih_06_04_94 = L.geoJSON([abih060494], {style: abihStyle});
	var vrs_06_04_94 = L.geoJSON([vrs060494], {style: serbStyle});
	var fabdic_06_04_94 = L.geoJSON([fabdic060494], {style: fabdicStyle});	
	
	var hvo_07_04_94 = L.geoJSON([hvo070494], {style: hvoStyle});
	var abih_07_04_94 = L.geoJSON([abih070494], {style: abihStyle});
	var vrs_07_04_94 = L.geoJSON([vrs070494], {style: serbStyle});
	var fabdic_07_04_94 = L.geoJSON([fabdic070494], {style: fabdicStyle});
	
	var hvo_11_04_94 = L.geoJSON([hvo110494], {style: hvoStyle});
	var abih_11_04_94 = L.geoJSON([abih110494], {style: abihStyle});
	var vrs_11_04_94 = L.geoJSON([vrs110494], {style: serbStyle});
	var fabdic_11_04_94 = L.geoJSON([fabdic110494], {style: fabdicStyle});	
	
    var hvo_18_04_94 = L.geoJSON([hvo180494], {style: hvoStyle});
	var abih_18_04_94 = L.geoJSON([abih180494], {style: abihStyle});
	var vrs_18_04_94 = L.geoJSON([vrs180494], {style: serbStyle});
	var fabdic_18_04_94 = L.geoJSON([fabdic180494], {style: fabdicStyle});		
	
    var hvo_11_08_94 = L.geoJSON([hvo110894], {style: hvoStyle});
	var abih_11_08_94 = L.geoJSON([abih110894], {style: abihStyle});
	var vrs_11_08_94 = L.geoJSON([vrs110894], {style: serbStyle});
	var fabdic_11_08_94 = L.geoJSON([fabdic110894], {style: fabdicStyle});		
	
	var hvo_31_10_94 = L.geoJSON([hvo311094], {style: hvoStyle});
	var abih_31_10_94 = L.geoJSON([abih311094], {style: abihStyle});
	var vrs_31_10_94 = L.geoJSON([vrs311094], {style: serbStyle});
	
	var hvo_01_11_94 = L.geoJSON([hvo011194], {style: hvoStyle});
	var abih_01_11_94 = L.geoJSON([abih011194], {style: abihStyle});
	var vrs_01_11_94 = L.geoJSON([vrs011194], {style: serbStyle});
	
	var hvo_02_11_94 = L.geoJSON([hvo021194], {style: hvoStyle});
	var abih_02_11_94 = L.geoJSON([abih021194], {style: abihStyle});
	var vrs_02_11_94 = L.geoJSON([vrs021194], {style: serbStyle});
	
	var hvo_03_11_94 = L.geoJSON([hvo031194], {style: hvoStyle});
	var abih_03_11_94 = L.geoJSON([abih031194], {style: abihStyle});
	var vrs_03_11_94 = L.geoJSON([vrs031194], {style: serbStyle});
	
	var hvo_10_11_94 = L.geoJSON([hvo101194], {style: hvoStyle});
	var abih_10_11_94 = L.geoJSON([abih101194], {style: abihStyle});
	var vrs_10_11_94 = L.geoJSON([vrs101194], {style: serbStyle});
	
	var hvo_20_11_94 = L.geoJSON([hvo201194], {style: hvoStyle});
	var abih_20_11_94 = L.geoJSON([abih201194], {style: abihStyle});
	var vrs_20_11_94 = L.geoJSON([vrs201194], {style: serbStyle});
	
	var hvo_01_12_94 = L.geoJSON([hvo011294], {style: hvoStyle});
	var abih_01_12_94 = L.geoJSON([abih011294], {style: abihStyle});
	var vrs_01_12_94 = L.geoJSON([vrs011294], {style: serbStyle});	
	
	var hvo_05_12_94 = L.geoJSON([hvo051294], {style: hvoStyle});
	var abih_05_12_94 = L.geoJSON([abih051294], {style: abihStyle});
	var vrs_05_12_94 = L.geoJSON([vrs051294], {style: serbStyle});	
	
	var hvo_10_12_94 = L.geoJSON([hvo101294], {style: hvoStyle});
	var abih_10_12_94 = L.geoJSON([abih101294], {style: abihStyle});
	var vrs_10_12_94 = L.geoJSON([vrs101294], {style: serbStyle});	
	
	var hvo_25_12_94 = L.geoJSON([hvo251294], {style: hvoStyle});
	var abih_25_12_94 = L.geoJSON([abih251294], {style: abihStyle});
	var vrs_25_12_94 = L.geoJSON([vrs251294], {style: serbStyle});	

	var hvo_01_01_95 = L.geoJSON([hvo010195], {style: hvoStyle});
	var abih_01_01_95 = L.geoJSON([abih010195], {style: abihStyle});
	var vrs_01_01_95 = L.geoJSON([vrs010195], {style: serbStyle});		
	
	var hvo_07_04_95 = L.geoJSON([hvo070495], {style: hvoStyle});
	var abih_07_04_95 = L.geoJSON([abih070495], {style: abihStyle});
	var vrs_07_04_95 = L.geoJSON([vrs070495], {style: serbStyle});	
	
	var hvo_11_06_95 = L.geoJSON([hvo110695], {style: hvoStyle});
	var abih_11_06_95 = L.geoJSON([abih110695], {style: abihStyle});
	var vrs_11_06_95 = L.geoJSON([vrs110695], {style: serbStyle});
	
	var abih_25_07_95 = L.geoJSON([abih250795], {style: abihStyle});
	var vrs_25_07_95 = L.geoJSON([vrs250795], {style: serbStyle});

	var hvo_28_07_95 = L.geoJSON([hvo280795], {style: hvoStyle});
	var abih_28_07_95 = L.geoJSON([abih280795], {style: abihStyle});
	var vrs_28_07_95 = L.geoJSON([vrs280795], {style: serbStyle});
	
	var hvo_30_07_95 = L.geoJSON([hvo300795], {style: hvoStyle});
	var abih_30_07_95 = L.geoJSON([abih300795], {style: abihStyle});
	var vrs_30_07_95 = L.geoJSON([vrs300795], {style: serbStyle});
	
	var abih_06_08_95 = L.geoJSON([abih060895], {style: abihStyle});
	var vrs_06_08_95 = L.geoJSON([vrs060895], {style: serbStyle});

	var hvo_12_09_95 = L.geoJSON([hvo120995], {style: hvoStyle});
	var abih_12_09_95 = L.geoJSON([abih120995], {style: abihStyle});
	var vrs_12_09_95 = L.geoJSON([vrs120995], {style: serbStyle});
	
	var hvo_13_09_95 = L.geoJSON([hvo130995], {style: hvoStyle});
	var abih_13_09_95 = L.geoJSON([abih130995], {style: abihStyle});
	var vrs_13_09_95 = L.geoJSON([vrs130995], {style: serbStyle});

	var hvo_14_09_95 = L.geoJSON([hvo140995], {style: hvoStyle});
	var abih_14_09_95 = L.geoJSON([abih140995], {style: abihStyle});
	var vrs_14_09_95 = L.geoJSON([vrs140995], {style: serbStyle});	
	
	var hvo_22_09_95 = L.geoJSON([hvo220995], {style: hvoStyle});
	var abih_22_09_95 = L.geoJSON([abih220995], {style: abihStyle});
	var vrs_22_09_95 = L.geoJSON([vrs220995], {style: serbStyle});	
	
	var hvo_27_09_95 = L.geoJSON([hvo270995], {style: hvoStyle});
	var abih_27_09_95 = L.geoJSON([abih270995], {style: abihStyle});
	var vrs_27_09_95 = L.geoJSON([vrs270995], {style: serbStyle});	

	var hvo_15_10_95 = L.geoJSON([hvo201095], {style: hvoStyle});
	var abih_15_10_95 = L.geoJSON([abih201095], {style: abihStyle});
	var vrs_15_10_95 = L.geoJSON([vrs201095], {style: serbStyle});	
	
//Directions of military attack, arrows
var obrana_Hv_26_08_91 = L.geoJSON(obranaHv260891, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                obrana_Hv_26_08_91.removeLayer(hr);
            } else {
                obrana_Hv_26_08_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});	

var obrana_Hv_25_09_91 = L.geoJSON(obranaHv250991, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                obrana_Hv_25_09_91.removeLayer(hr);
            } else {
                obrana_Hv_25_09_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});	

var obrana_Hv_05_10_91 = L.geoJSON(obranaHv051091, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                obrana_Hv_05_10_91.removeLayer(hr);
            } else {
                obrana_Hv_05_10_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});	

var obrana_Hv_26_10_91 = L.geoJSON(obranaHv261091, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                obrana_Hv_26_10_91.removeLayer(hr);
            } else {
                obrana_Hv_26_10_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});	

var obrana_Hv_10_11_91 = L.geoJSON(obranaHv101191, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                obrana_Hv_10_11_91.removeLayer(hr);
            } else {
                obrana_Hv_10_11_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});	

var obrana_Hv_17_11_91 = L.geoJSON(obranaHv171191, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                obrana_Hv_17_11_91.removeLayer(hr);
            } else {
                obrana_Hv_17_11_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});	

var obrana_Hv_19_11_91 = L.geoJSON(obranaHv191191, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                obrana_Hv_19_11_91.removeLayer(hr);
            } else {
                obrana_Hv_19_11_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});	
var obrana_Hv_21_11_91 = L.geoJSON(obranaHv211191, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                obrana_Hv_21_11_91.removeLayer(hr);
            } else {
                obrana_Hv_21_11_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});	

var obrana_Hv_17_12_91 = L.geoJSON(obranaHv171291, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                obrana_Hv_17_12_91.removeLayer(hr);
            } else {
                obrana_Hv_17_12_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});	

var obrana_Hv_12_09_91 = L.geoJSON(obranaHv120991, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                obrana_Hv_12_09_91.removeLayer(hr);
            } else {
                obrana_Hv_12_09_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Hv_28_11_91 = L.geoJSON(obranaHv281191, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                obrana_Hv_28_11_91.removeLayer(hr);
            } else {
                obrana_Hv_28_11_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});	

var obrana_Hv_15_11_91 = L.geoJSON(obranaHv151191, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                obrana_Hv_15_11_91.removeLayer(hr);
            } else {
                obrana_Hv_15_11_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Hv_21_09_91 = L.geoJSON(obranaHv210991, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                obrana_Hv_21_09_91.removeLayer(hr);
            } else {
                obrana_Hv_21_09_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Hv_03_01_91 = L.geoJSON(obranaHv030192, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                obrana_Hv_03_01_91.removeLayer(hr);
            } else {
                obrana_Hv_03_01_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Hv_27_01_93 = L.geoJSON(obranaHv270193, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Hv_27_01_93.removeLayer(hr);
            } else {
                obrana_Hv_27_01_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_26_08_91 = L.geoJSON(napadSr260891, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                napad_Sr_26_08_91.removeLayer(hr);
            } else {
                napad_Sr_26_08_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});	

var napad_Sr_25_09_91 = L.geoJSON(napadSr250991, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                napad_Sr_25_09_91.removeLayer(hr);
            } else {
                napad_Sr_25_09_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
}); 

var napad_Sr_05_10_91 = L.geoJSON(napadSr051091, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                napad_Sr_05_10_91.removeLayer(hr);
            } else {
                napad_Sr_05_10_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
}); 

var napad_Sr_26_10_91 = L.geoJSON(napadSr261091, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                napad_Sr_26_10_91.removeLayer(hr);
            } else {
                napad_Sr_26_10_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
}); 

var napad_Sr_10_11_91 = L.geoJSON(napadSr101191, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                napad_Sr_10_11_91.removeLayer(hr);
            } else {
                napad_Sr_10_11_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
}); 

var napad_Sr_17_11_91 = L.geoJSON(napadSr171191, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                napad_Sr_17_11_91.removeLayer(hr);
            } else {
                napad_Sr_17_11_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
}); 

var napad_Sr_19_11_91 = L.geoJSON(napadSr191191, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                napad_Sr_19_11_91.removeLayer(hr);
            } else {
                napad_Sr_19_11_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
}); 

var napad_Sr_21_11_91 = L.geoJSON(napadSr211191, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                napad_Sr_21_11_91.removeLayer(hr);
            } else {
                napad_Sr_21_11_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
}); 

var napad_Sr_17_12_91 = L.geoJSON(napadSr171291, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                napad_Sr_17_12_91.removeLayer(hr);
            } else {
                napad_Sr_17_12_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
}); 

var napad_Sr_28_11_91 = L.geoJSON(napadSr281191, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                napad_Sr_28_11_91.removeLayer(hr);
            } else {
                napad_Sr_28_11_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
}); 

var napad_Sr_12_09_91 = L.geoJSON(napadSr120991, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                napad_Sr_12_09_91.removeLayer(hr);
            } else {
                napad_Sr_12_09_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
}); 

var napad_Sr_27_01_93 = L.geoJSON(napadSr270193, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_27_01_93.removeLayer(hr);
            } else {
                napad_Sr_27_01_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
}); 

var napad_Sr_21_09_91 = L.geoJSON(napadSr210991, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                napad_Sr_21_09_91.removeLayer(hr);
            } else {
                napad_Sr_21_09_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_15_11_91 = L.geoJSON(napadSr151191, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                napad_Sr_15_11_91.removeLayer(hr);
            } else {
                napad_Sr_15_11_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_03_01_92 = L.geoJSON(napadSr030192, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                napad_Sr_03_01_92.removeLayer(hr);
            } else {
                napad_Sr_03_01_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_21_09_91 = L.geoJSON(obranaSr210991, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                obrana_Sr_21_09_91.removeLayer(hr);
            } else {
                obrana_Sr_21_09_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_21_09_91 = L.geoJSON(napadHv210991, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                napad_Hv_21_09_91.removeLayer(hr);
            } else {
                napad_Hv_21_09_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_05_10_91 = L.geoJSON(napadHv051091, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                napad_Hv_05_10_91.removeLayer(hr);
            } else {
                napad_Hv_05_10_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_05_10_91 = L.geoJSON(obranaSr051091, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                obrana_Sr_05_10_91.removeLayer(hr);
            } else {
                obrana_Sr_05_10_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_26_10_91 = L.geoJSON(napadHv261091, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                napad_Hv_26_10_91.removeLayer(hr);
            } else {
                napad_Hv_26_10_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_26_10_91 = L.geoJSON(obranaSr261091, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                obrana_Sr_26_10_91.removeLayer(hr);
            } else {
                obrana_Sr_26_10_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_10_11_91 = L.geoJSON(napadHv101191, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                napad_Hv_10_11_91.removeLayer(hr);
            } else {
                napad_Hv_10_11_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_10_11_91 = L.geoJSON(obranaSr101191, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                obrana_Sr_10_11_91.removeLayer(hr);
            } else {
                obrana_Sr_10_11_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_17_12_91 = L.geoJSON(obranaSr171291, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                obrana_Sr_17_12_91.removeLayer(hr);
            } else {
                obrana_Sr_17_12_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_17_12_91 = L.geoJSON(napadHv171291, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                napad_Hv_17_12_91.removeLayer(hr);
            } else {
                napad_Hv_17_12_91.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_01_03_92 = L.geoJSON(obranaSr010392, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 12) {
                obrana_Sr_01_03_92.removeLayer(hr);
            } else {
                obrana_Sr_01_03_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_01_03_92 = L.geoJSON(napadHv010392, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 12) {
                napad_Hv_01_03_92.removeLayer(hr);
            } else {
                napad_Hv_01_03_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_17_05_92 = L.geoJSON(obranaSr170592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Sr_17_05_92.removeLayer(hr);
            } else {
                obrana_Sr_17_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_17_05_92 = L.geoJSON(napadHv170592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_17_05_92.removeLayer(hr);
            } else {
                napad_Hv_17_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_18_05_92 = L.geoJSON(obranaSr180592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Sr_18_05_92.removeLayer(hr);
            } else {
                obrana_Sr_18_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_18_05_92 = L.geoJSON(napadHv180592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_18_05_92.removeLayer(hr);
            } else {
                napad_Hv_18_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_22_05_92 = L.geoJSON(obranaSr220592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Sr_22_05_92.removeLayer(hr);
            } else {
                obrana_Sr_22_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_22_05_92 = L.geoJSON(napadHv220592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_22_05_92.removeLayer(hr);
            } else {
                napad_Hv_22_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_17_06_92 = L.geoJSON(obranaSr170692, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Sr_17_06_92.removeLayer(hr);
            } else {
                obrana_Sr_17_06_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_17_06_92 = L.geoJSON(napadHv170692, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_17_06_92.removeLayer(hr);
            } else {
                napad_Hv_17_06_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_06_05_92 = L.geoJSON(obranaSr060592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Sr_06_05_92.removeLayer(hr);
            } else {
                obrana_Sr_06_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_06_05_92 = L.geoJSON(napadHv060592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_06_05_92.removeLayer(hr);
            } else {
                napad_Hv_06_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_07_05_92 = L.geoJSON(obranaSr070592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Sr_07_05_92.removeLayer(hr);
            } else {
                obrana_Sr_07_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_07_05_92 = L.geoJSON(napadHv070592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_07_05_92.removeLayer(hr);
            } else {
                napad_Hv_07_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_25_05_92 = L.geoJSON(obranaSr250592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Sr_25_05_92.removeLayer(hr);
            } else {
                obrana_Sr_25_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_25_05_92 = L.geoJSON(napadHv250592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_25_05_92.removeLayer(hr);
            } else {
                napad_Hv_25_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_26_05_92 = L.geoJSON(obranaSr260592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Sr_26_05_92.removeLayer(hr);
            } else {
                obrana_Sr_26_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_26_05_92 = L.geoJSON(napadHv260592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_26_05_92.removeLayer(hr);
            } else {
                napad_Hv_26_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_28_05_92 = L.geoJSON(obranaSr280592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Sr_28_05_92.removeLayer(hr);
            } else {
                obrana_Sr_28_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_28_05_92 = L.geoJSON(napadHv280592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_28_05_92.removeLayer(hr);
            } else {
                napad_Hv_28_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_20_10_92 = L.geoJSON(obranaSr201092, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Sr_20_10_92.removeLayer(hr);
            } else {
                obrana_Sr_20_10_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_20_10_92 = L.geoJSON(napadHv201092, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_20_10_92.removeLayer(hr);
            } else {
                napad_Hv_20_10_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_21_10_92 = L.geoJSON(napadHv211092, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_21_10_92.removeLayer(hr);
            } else {
                napad_Hv_21_10_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_22_01_93 = L.geoJSON(obranaSr220193, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Sr_22_01_93.removeLayer(hr);
            } else {
                obrana_Sr_22_01_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_22_01_93 = L.geoJSON(napadHv220193, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_22_01_93.removeLayer(hr);
            } else {
                napad_Hv_22_01_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_27_01_93 = L.geoJSON(obranaSr270193, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Sr_27_01_93.removeLayer(hr);
            } else {
                obrana_Sr_27_01_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_27_01_93 = L.geoJSON(napadHv270193, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_27_01_93.removeLayer(hr);
            } else {
                napad_Hv_27_01_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_09_09_93 = L.geoJSON(obranaSr090993, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Sr_09_09_93.removeLayer(hr);
            } else {
                obrana_Sr_09_09_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_29_09_93 = L.geoJSON(napadHv090993, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_29_09_93.removeLayer(hr);
            } else {
                napad_Hv_29_09_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_01_05_95 = L.geoJSON(obranaSr010595, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Sr_01_05_95.removeLayer(hr);
            } else {
                obrana_Sr_01_05_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_01_05_95 = L.geoJSON(napadHv010595, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_01_05_95.removeLayer(hr);
            } else {
                napad_Hv_01_05_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_HvOluja_03_08_95 = L.geoJSON(napadHvOluja030895, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapadvelika,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 8) {
                napad_HvOluja_03_08_95.removeLayer(hr);
            } else {
                napad_HvOluja_03_08_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_03_08_95 = L.geoJSON(napadHv030895, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_03_08_95.removeLayer(hr);
            } else {
                napad_Hv_03_08_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_HvOluja_04_08_95 = L.geoJSON(napadHvOluja040895, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapadvelika,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 8) {
                napad_HvOluja_04_08_95.removeLayer(hr);
            } else {
                napad_HvOluja_04_08_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_04_08_95 = L.geoJSON(napadHv040895, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_04_08_95.removeLayer(hr);
            } else {
                napad_Hv_04_08_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_HvOluja_05_08_95 = L.geoJSON(napadHvOluja050895, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapadvelika,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 8) {
                napad_HvOluja_05_08_95.removeLayer(hr);
            } else {
                napad_HvOluja_05_08_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_05_08_95 = L.geoJSON(napadHv050895, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_05_08_95.removeLayer(hr);
            } else {
                napad_Hv_05_08_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_HvOluja_06_08_95 = L.geoJSON(napadHvOluja060895, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapadvelika,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 8) {
                napad_HvOluja_06_08_95.removeLayer(hr);
            } else {
                napad_HvOluja_06_08_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_06_08_95 = L.geoJSON(napadHv060895, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_06_08_95.removeLayer(hr);
            } else {
                napad_Hv_06_08_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_HvOluja_07_08_95 = L.geoJSON(napadHvOluja070895, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapadvelika,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 8) {
                napad_HvOluja_07_08_95.removeLayer(hr);
            } else {
                napad_HvOluja_07_08_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_07_08_95 = L.geoJSON(napadHv070895, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_07_08_95.removeLayer(hr);
            } else {
                napad_Hv_07_08_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_08_08_95 = L.geoJSON(napadHv080895, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_08_08_95.removeLayer(hr);
            } else {
                napad_Hv_08_08_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_09_08_95 = L.geoJSON(napadHv090895, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_09_08_95.removeLayer(hr);
            } else {
                napad_Hv_09_08_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Hv_03_08_95 = L.geoJSON(obranaHv030895, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Hv_03_08_95.removeLayer(hr);
            } else {
                obrana_Hv_03_08_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_04_04_92 = L.geoJSON(napadSr040492, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_04_04_92.removeLayer(hr);
            } else {
                napad_Sr_04_04_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
}); 

var obrana_HvBiH_04_04_92 = L.geoJSON(obranaHvBiH040492, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrbihobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_HvBiH_04_04_92.removeLayer(hr);
            } else {
                obrana_HvBiH_04_04_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
}); 

var napad_Sr_07_04_92 = L.geoJSON(napadSr070492, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_07_04_92.removeLayer(hr);
            } else {
                napad_Sr_07_04_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
}); 

var obrana_HvBiH_07_04_92 = L.geoJSON(obranaHvBiH070492, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrbihobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_HvBiH_07_04_92.removeLayer(hr);
            } else {
                obrana_HvBiH_07_04_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_11_04_92 = L.geoJSON(napadSr110492, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_11_04_92.removeLayer(hr);
            } else {
                napad_Sr_11_04_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
}); 

var obrana_HvBiH_11_04_92 = L.geoJSON(obranaHvBiH110492, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrbihobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_HvBiH_11_04_92.removeLayer(hr);
            } else {
                obrana_HvBiH_11_04_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_HvBiH_23_05_92 = L.geoJSON(napadHvBiH230592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrbihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_HvBiH_23_05_92.removeLayer(hr);
            } else {
                napad_HvBiH_23_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
}); 

var napad_Sr_05_05_92 = L.geoJSON(napadSr050592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_05_05_92.removeLayer(hr);
            } else {
                napad_Sr_05_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
}); 

var napad_Sr_23_05_92 = L.geoJSON(napadSr230592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_23_05_92.removeLayer(hr);
            } else {
                napad_Sr_23_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_HvBiH_05_05_92 = L.geoJSON(obranaHvBiH050592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrbihobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_HvBiH_05_05_92.removeLayer(hr);
            } else {
                obrana_HvBiH_05_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_25_05_92 = L.geoJSON(napadSr250592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_25_05_92.removeLayer(hr);
            } else {
                napad_Sr_25_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_HvBiH_25_05_92 = L.geoJSON(obranaHvBiH250592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrbihobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_HvBiH_25_05_92.removeLayer(hr);
            } else {
                obrana_HvBiH_25_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_01_06_92 = L.geoJSON(napadSr010692, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_01_06_92.removeLayer(hr);
            } else {
                napad_Sr_01_06_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_HvBiH_01_06_92 = L.geoJSON(obranaHvBiH010692, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrbihobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_HvBiH_01_06_92.removeLayer(hr);
            } else {
                obrana_HvBiH_01_06_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_HvBiH_01_06_92 = L.geoJSON(napadHvBiH010692, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrbihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_HvBiH_01_06_92.removeLayer(hr);
            } else {
                napad_HvBiH_01_06_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_13_06_92 = L.geoJSON(napadSr130692, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_13_06_92.removeLayer(hr);
            } else {
                napad_Sr_13_06_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_HvBiH_13_06_92 = L.geoJSON(obranaHvBiH130692, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrbihobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_HvBiH_13_06_92.removeLayer(hr);
            } else {
                obrana_HvBiH_13_06_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_HvBiH_13_06_92 = L.geoJSON(napadHvBiH130692, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrbihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_HvBiH_13_06_92.removeLayer(hr);
            } else {
                napad_HvBiH_13_06_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_HvBiH_28_05_92 = L.geoJSON(napadHvBiH280592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrbihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_HvBiH_28_05_92.removeLayer(hr);
            } else {
                napad_HvBiH_28_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_HvBiH_09_06_92 = L.geoJSON(napadHvBiH090692, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrbihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_HvBiH_09_06_92.removeLayer(hr);
            } else {
                napad_HvBiH_09_06_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_HvBiH_09_06_92 = L.geoJSON(obranaHvBiH090692, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrbihobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_HvBiH_09_06_92.removeLayer(hr);
            } else {
                obrana_HvBiH_09_06_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_09_06_92 = L.geoJSON(napadSr090692, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_09_06_92.removeLayer(hr);
            } else {
                napad_Sr_09_06_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_HvBiH_25_05_92 = L.geoJSON(napadHvBiH250592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrbihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_HvBiH_25_05_92.removeLayer(hr);
            } else {
                napad_HvBiH_25_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_12_06_92 = L.geoJSON(napadSr120692, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_12_06_92.removeLayer(hr);
            } else {
                napad_Sr_12_06_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_HvBiH_12_06_92 = L.geoJSON(obranaHvBiH120692, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrbihobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_HvBiH_12_06_92.removeLayer(hr);
            } else {
                obrana_HvBiH_12_06_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_BiH_16_06_92 = L.geoJSON(obranaBiH160692, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_BiH_16_06_92.removeLayer(hr);
            } else {
                obrana_BiH_16_06_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Hv_16_06_92 = L.geoJSON(obranaHv160692, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Hv_16_06_92.removeLayer(hr);
            } else {
                obrana_Hv_16_06_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_16_06_92 = L.geoJSON(napadSr160692, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_16_06_92.removeLayer(hr);
            } else {
                napad_Sr_16_06_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_16_06_92 = L.geoJSON(napadHv160692, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_16_06_92.removeLayer(hr);
            } else {
                napad_Hv_16_06_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_BiH_20_06_92 = L.geoJSON(obranaBiH200692, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_BiH_20_06_92.removeLayer(hr);
            } else {
                obrana_BiH_20_06_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Hv_20_06_92 = L.geoJSON(obranaHv200692, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Hv_20_06_92.removeLayer(hr);
            } else {
                obrana_Hv_20_06_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_20_06_92 = L.geoJSON(napadSr200692, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_20_06_92.removeLayer(hr);
            } else {
                napad_Sr_20_06_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_05_07_92 = L.geoJSON(napadHv050792, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_05_07_92.removeLayer(hr);
            } else {
                napad_Hv_05_07_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Hv_05_07_92 = L.geoJSON(obranaHv050792, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Hv_05_07_92.removeLayer(hr);
            } else {
                obrana_Hv_05_07_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_05_07_92 = L.geoJSON(napadSr050792, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_05_07_92.removeLayer(hr);
            } else {
                napad_Sr_05_07_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_HvBiH_05_05_92 = L.geoJSON(napadHvBiH050592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrbihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_HvBiH_05_05_92.removeLayer(hr);
            } else {
                napad_HvBiH_05_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_HvBiH_07_05_92 = L.geoJSON(napadHvBiH070592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrbihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_HvBiH_07_05_92.removeLayer(hr);
            } else {
                napad_HvBiH_07_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_20_03_92 = L.geoJSON(napadSr200392, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_20_03_92.removeLayer(hr);
            } else {
                napad_Sr_20_03_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_HvBiH_22_05_92 = L.geoJSON(obranaHvBiH220592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrbihobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_HvBiH_22_05_92.removeLayer(hr);
            } else {
                obrana_HvBiH_22_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_HvBiH_23_05_92 = L.geoJSON(obranaHvBiH230592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrbihobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_HvBiH_23_05_92.removeLayer(hr);
            } else {
                obrana_HvBiH_23_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_23_05_92 = L.geoJSON(obranaSr230592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Sr_23_05_92.removeLayer(hr);
            } else {
                obrana_Sr_23_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_HvBiH_22_05_92 = L.geoJSON(napadHvBiH220592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrbihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_HvBiH_22_05_92.removeLayer(hr);
            } else {
                napad_HvBiH_22_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_01_06_92 = L.geoJSON(obranaSr010692, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Sr_01_06_92.removeLayer(hr);
            } else {
                obrana_Sr_01_06_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_09_06_92 = L.geoJSON(obranaSr090692, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Sr_09_06_92.removeLayer(hr);
            } else {
                obrana_Sr_09_06_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_16_06_92 = L.geoJSON(obranaSr160692, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Sr_16_06_92.removeLayer(hr);
            } else {
                obrana_Sr_16_06_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_25_07_92 = L.geoJSON(napadBiH250792, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_25_07_92.removeLayer(hr);
            } else {
                napad_BiH_25_07_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_25_07_92 = L.geoJSON(napadSr250792, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_25_07_92.removeLayer(hr);
            } else {
                napad_Sr_25_07_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_01_08_92 = L.geoJSON(napadBiH010892, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_01_08_92.removeLayer(hr);
            } else {
                napad_BiH_01_08_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_BiH_01_08_92 = L.geoJSON(obranaBiH010892, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_BiH_01_08_92.removeLayer(hr);
            } else {
                obrana_BiH_01_08_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_01_08_92 = L.geoJSON(napadSr010892, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_01_08_92.removeLayer(hr);
            } else {
                napad_Sr_01_08_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_25_08_92 = L.geoJSON(napadBiH250892, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_25_08_92.removeLayer(hr);
            } else {
                napad_BiH_25_08_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_BiH_25_08_92 = L.geoJSON(obranaBiH250892, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_BiH_25_08_92.removeLayer(hr);
            } else {
                obrana_BiH_25_08_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Hv_25_08_92 = L.geoJSON(obranaHv250892, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Hv_25_08_92.removeLayer(hr);
            } else {
                obrana_Hv_25_08_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_25_08_92 = L.geoJSON(napadSr250892, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_25_08_92.removeLayer(hr);
            } else {
                napad_Sr_25_08_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_20_09_92 = L.geoJSON(napadSr200992, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_20_09_92.removeLayer(hr);
            } else {
                napad_Sr_20_09_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_30_09_92 = L.geoJSON(napadSr300992, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_30_09_92.removeLayer(hr);
            } else {
                napad_Sr_30_09_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_BiH_30_09_92 = L.geoJSON(obranaBiH300992, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_BiH_30_09_92.removeLayer(hr);
            } else {
                obrana_BiH_30_09_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_07_05_92 = L.geoJSON(napadSr070592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_07_05_92.removeLayer(hr);
            } else {
                napad_Sr_07_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_08_05_92 = L.geoJSON(napadSr080592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_08_05_92.removeLayer(hr);
            } else {
                napad_Sr_08_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_26_06_92 = L.geoJSON(napadSr260692, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_26_06_92.removeLayer(hr);
            } else {
                napad_Sr_26_06_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_28_06_92 = L.geoJSON(napadSr280692, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_28_06_92.removeLayer(hr);
            } else {
                napad_Sr_28_06_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_01_07_92 = L.geoJSON(napadSr010792, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_01_07_92.removeLayer(hr);
            } else {
                napad_Sr_01_07_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_12_07_92 = L.geoJSON(napadSr120792, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_12_07_92.removeLayer(hr);
            } else {
                napad_Sr_12_07_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_15_07_92 = L.geoJSON(napadSr150792, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_15_07_92.removeLayer(hr);
            } else {
                napad_Sr_15_07_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_19_07_92 = L.geoJSON(napadSr190792, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_19_07_92.removeLayer(hr);
            } else {
                napad_Sr_19_07_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_01_08_92 = L.geoJSON(napadSr010892, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_01_08_92.removeLayer(hr);
            } else {
                napad_Sr_01_08_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_05_10_92 = L.geoJSON(napadSr051092, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_05_10_92.removeLayer(hr);
            } else {
                napad_Sr_05_10_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_06_10_92 = L.geoJSON(napadSr061092, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_06_10_92.removeLayer(hr);
            } else {
                napad_Sr_06_10_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_HvBiH_07_05_92 = L.geoJSON(obranaHvBiH070592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrbihobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_HvBiH_07_05_92.removeLayer(hr);
            } else {
                obrana_HvBiH_07_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_HvBiH_08_05_92 = L.geoJSON(napadHvBiH080592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrbihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_HvBiH_08_05_92.removeLayer(hr);
            } else {
                napad_HvBiH_08_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_HvBiH_11_05_92 = L.geoJSON(napadHvBiH110592, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrbihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_HvBiH_11_05_92.removeLayer(hr);
            } else {
                napad_HvBiH_11_05_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Hv_01_07_92 = L.geoJSON(obranaHv010792, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Hv_01_07_92.removeLayer(hr);
            } else {
                obrana_Hv_01_07_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Hv_15_07_92 = L.geoJSON(obranaHv150792, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Hv_15_07_92.removeLayer(hr);
            } else {
                obrana_Hv_15_07_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_19_07_92 = L.geoJSON(napadBiH190792, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_19_07_92.removeLayer(hr);
            } else {
                napad_BiH_19_07_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Hv_06_10_92 = L.geoJSON(obranaHv061092, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Hv_06_10_92.removeLayer(hr);
            } else {
                obrana_Hv_06_10_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_29_10_92 = L.geoJSON(napadSr291092, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_29_10_92.removeLayer(hr);
            } else {
                napad_Sr_29_10_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_12_11_92 = L.geoJSON(napadSr121192, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_12_11_92.removeLayer(hr);
            } else {
                napad_Sr_12_11_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Hv_12_11_92 = L.geoJSON(obranaHv121192, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Hv_12_11_92.removeLayer(hr);
            } else {
                obrana_Hv_12_11_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_02_11_92 = L.geoJSON(napadSr021192, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_02_11_92.removeLayer(hr);
            } else {
                napad_Sr_02_11_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_20_11_92 = L.geoJSON(napadBiH201192, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_20_11_92.removeLayer(hr);
            } else {
                napad_BiH_20_11_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_20_11_92 = L.geoJSON(napadSr201192, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_20_11_92.removeLayer(hr);
            } else {
                napad_Sr_20_11_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_BiH_20_11_92 = L.geoJSON(obranaBiH201192, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_BiH_20_11_92.removeLayer(hr);
            } else {
                obrana_BiH_20_11_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_02_11_92 = L.geoJSON(napadHv021192, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_02_11_92.removeLayer(hr);
            } else {
                napad_Hv_02_11_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_20_10_92 = L.geoJSON(napadSr201092, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_20_10_92.removeLayer(hr);
            } else {
                napad_Sr_20_10_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_21_10_92 = L.geoJSON(obranaSr211092, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Sr_21_10_92.removeLayer(hr);
            } else {
                obrana_Sr_21_10_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_24_10_92 = L.geoJSON(obranaSr241092, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Sr_24_10_92.removeLayer(hr);
            } else {
                obrana_Sr_24_10_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_24_10_92 = L.geoJSON(napadHv241092, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_24_10_92.removeLayer(hr);
            } else {
                napad_Hv_24_10_92.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_01_01_93 = L.geoJSON(napadHvpocetak93, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_01_01_93.removeLayer(hr);
            } else {
                napad_Hv_01_01_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_01_01_93 = L.geoJSON(napadBiHpocetak93, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_01_01_93.removeLayer(hr);
            } else {
                napad_BiH_01_01_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_12_01_93 = L.geoJSON(napadSr120193, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_12_01_93.removeLayer(hr);
            } else {
                napad_Sr_12_01_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_12_01_93 = L.geoJSON(napadHv120193, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_12_01_93.removeLayer(hr);
            } else {
                napad_Hv_12_01_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_12_01_93 = L.geoJSON(napadBiH120193, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_12_01_93.removeLayer(hr);
            } else {
                napad_BiH_12_01_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_25_01_93 = L.geoJSON(napadHv250193, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_25_01_93.removeLayer(hr);
            } else {
                napad_Hv_25_01_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_28_01_93 = L.geoJSON(napadSr280193, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_28_01_93.removeLayer(hr);
            } else {
                napad_Sr_28_01_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_16_03_93 = L.geoJSON(napadBiH160393, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_16_03_93.removeLayer(hr);
            } else {
                napad_BiH_16_03_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_16_03_93 = L.geoJSON(napadHv160393, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_16_03_93.removeLayer(hr);
            } else {
                napad_Hv_16_03_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_13_04_93 = L.geoJSON(napadSr130493, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_13_04_93.removeLayer(hr);
            } else {
                napad_Sr_13_04_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_13_04_93 = L.geoJSON(napadHv130493, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_13_04_93.removeLayer(hr);
            } else {
                napad_Hv_13_04_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_13_04_93 = L.geoJSON(napadBiH130493, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_13_04_93.removeLayer(hr);
            } else {
                napad_BiH_13_04_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_18_04_93 = L.geoJSON(napadBiH180493, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_18_04_93.removeLayer(hr);
            } else {
                napad_BiH_18_04_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_18_04_93 = L.geoJSON(napadHv180493, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_18_04_93.removeLayer(hr);
            } else {
                napad_Hv_18_04_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_25_04_93 = L.geoJSON(napadSr250493, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_25_04_93.removeLayer(hr);
            } else {
                napad_Sr_25_04_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_25_04_93 = L.geoJSON(napadBiH250493, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_25_04_93.removeLayer(hr);
            } else {
                napad_BiH_25_04_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_25_04_93 = L.geoJSON(napadHv250493, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_25_04_93.removeLayer(hr);
            } else {
                napad_Hv_25_04_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_07_06_93 = L.geoJSON(napadBiH070693, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_07_06_93.removeLayer(hr);
            } else {
                napad_BiH_07_06_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_07_06_93 = L.geoJSON(napadHv070693, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_07_06_93.removeLayer(hr);
            } else {
                napad_Hv_07_06_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_28_01_93 = L.geoJSON(napadHv280193, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_28_01_93.removeLayer(hr);
            } else {
                napad_Hv_28_01_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_14_06_93 = L.geoJSON(napadBiH140693, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_14_06_93.removeLayer(hr);
            } else {
                napad_BiH_14_06_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_14_06_93 = L.geoJSON(napadHv140693, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_14_06_93.removeLayer(hr);
            } else {
                napad_Hv_14_06_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_30_06_93 = L.geoJSON(napadBiH300693, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_30_06_93.removeLayer(hr);
            } else {
                napad_BiH_30_06_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_03_07_93 = L.geoJSON(napadSr030793, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_03_07_93.removeLayer(hr);
            } else {
                napad_Sr_03_07_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_03_07_93 = L.geoJSON(napadBiH030793, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_03_07_93.removeLayer(hr);
            } else {
                napad_BiH_03_07_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_17_07_93 = L.geoJSON(napadBiH170793, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_17_07_93.removeLayer(hr);
            } else {
                napad_BiH_17_07_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_17_07_93 = L.geoJSON(napadHv170793, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_17_07_93.removeLayer(hr);
            } else {
                napad_Hv_17_07_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_22_07_93 = L.geoJSON(napadBiH220793, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_22_07_93.removeLayer(hr);
            } else {
                napad_BiH_22_07_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_24_07_93 = L.geoJSON(napadBiH240793, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_24_07_93.removeLayer(hr);
            } else {
                napad_BiH_24_07_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_25_07_93 = L.geoJSON(napadSr250793, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_25_07_93.removeLayer(hr);
            } else {
                napad_Sr_25_07_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_25_07_93 = L.geoJSON(napadBiH250793, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_25_07_93.removeLayer(hr);
            } else {
                napad_BiH_25_07_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_29_07_93 = L.geoJSON(napadBiH290793, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_29_07_93.removeLayer(hr);
            } else {
                napad_BiH_29_07_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_25_07_93 = L.geoJSON(napadHv250793, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_25_07_93.removeLayer(hr);
            } else {
                napad_Hv_25_07_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_31_07_93 = L.geoJSON(napadSr310793, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_31_07_93.removeLayer(hr);
            } else {
                napad_Sr_31_07_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_31_07_93 = L.geoJSON(napadBiH310793, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_31_07_93.removeLayer(hr);
            } else {
                napad_BiH_31_07_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_02_08_93 = L.geoJSON(napadBiH020893, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_02_08_93.removeLayer(hr);
            } else {
                napad_BiH_02_08_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_24_08_93 = L.geoJSON(napadBiH240893, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_24_08_93.removeLayer(hr);
            } else {
                napad_BiH_24_08_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_24_08_93 = L.geoJSON(napadHv240893, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_24_08_93.removeLayer(hr);
            } else {
				napad_Hv_24_08_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_02_08_93 = L.geoJSON(napadHv020893, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_02_08_93.removeLayer(hr);
            } else {
				napad_Hv_02_08_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_31_07_93 = L.geoJSON(napadHv310793, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_31_07_93.removeLayer(hr);
            } else {
				napad_Hv_31_07_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});


var napad_BiH_24_08_93 = L.geoJSON(napadBiH240893, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_24_08_93.removeLayer(hr);
            } else {
                napad_BiH_24_08_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_24_08_93 = L.geoJSON(napadHv240893, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_24_08_93.removeLayer(hr);
            } else {
				napad_Hv_24_08_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});


var napad_BiH_14_09_93 = L.geoJSON(napadBiH140993, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_14_09_93.removeLayer(hr);
            } else {
                napad_BiH_14_09_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_14_09_93 = L.geoJSON(napadHv140993, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_14_09_93.removeLayer(hr);
            } else {
				napad_Hv_14_09_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_26_09_93 = L.geoJSON(napadHv260993, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_26_09_93.removeLayer(hr);
            } else {
				napad_Hv_26_09_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_26_09_93 = L.geoJSON(napadBiH260993, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_26_09_93.removeLayer(hr);
            } else {
                napad_BiH_26_09_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Fabdic_26_09_93 = L.geoJSON(napadFabdic260993, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: fabdicnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Fabdic_26_09_93.removeLayer(hr);
            } else {
                napad_Fabdic_26_09_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_21_10_93 = L.geoJSON(napadHv211093, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_21_10_93.removeLayer(hr);
            } else {
				napad_Hv_21_10_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_21_10_93 = L.geoJSON(napadBiH211093, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_21_10_93.removeLayer(hr);
            } else {
                napad_BiH_21_10_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Fabdic_21_10_93 = L.geoJSON(napadFabdic211093, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: fabdicnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Fabdic_21_10_93.removeLayer(hr);
            } else {
                napad_Fabdic_21_10_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_02_11_93 = L.geoJSON(napadSr021193, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_02_11_93.removeLayer(hr);
            } else {
                napad_Sr_02_11_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_02_11_93 = L.geoJSON(napadBiH021193, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_02_11_93.removeLayer(hr);
            } else {
                napad_BiH_02_11_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Fabdic_02_11_93 = L.geoJSON(napadFabdic021193, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: fabdicnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Fabdic_02_11_93.removeLayer(hr);
            } else {
                napad_Fabdic_02_11_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_03_11_93 = L.geoJSON(napadBiH031193, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_03_11_93.removeLayer(hr);
            } else {
                napad_BiH_03_11_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_06_04_94 = L.geoJSON(napadSr060494, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_06_04_94.removeLayer(hr);
            } else {
                napad_Sr_06_04_94.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_02_11_93 = L.geoJSON(napadHv021193, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_02_11_93.removeLayer(hr);
            } else {
				napad_Hv_02_11_93.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_07_04_94 = L.geoJSON(napadSr070494, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_07_04_94.removeLayer(hr);
            } else {
                napad_Sr_07_04_94.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_11_04_94 = L.geoJSON(napadSr110494, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_11_04_94.removeLayer(hr);
            } else {
                napad_Sr_11_04_94.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_11_08_94 = L.geoJSON(napadBiH110894, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_11_08_94.removeLayer(hr);
            } else {
                napad_BiH_11_08_94.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_01_11_94 = L.geoJSON(napadBiH011194, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_01_11_94.removeLayer(hr);
            } else {
                napad_BiH_01_11_94.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_01_11_94 = L.geoJSON(napadSr011194, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_01_11_94.removeLayer(hr);
            } else {
                napad_Sr_01_11_94.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_10_11_94 = L.geoJSON(napadSr101194, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_10_11_94.removeLayer(hr);
            } else {
                napad_Sr_10_11_94.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_20_11_94 = L.geoJSON(napadSr201194, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Sr_20_11_94.removeLayer(hr);
            } else {
                napad_Sr_20_11_94.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_31_10_94 = L.geoJSON(napadBiH311094, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_31_10_94.removeLayer(hr);
            } else {
                napad_BiH_31_10_94.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_31_10_94 = L.geoJSON(napadHv311094, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_31_10_94.removeLayer(hr);
            } else {
				napad_Hv_31_10_94.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_01_11_94 = L.geoJSON(napadHv011194, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_01_11_94.removeLayer(hr);
            } else {
				napad_Hv_01_11_94.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_02_11_94 = L.geoJSON(napadHv021194, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_02_11_94.removeLayer(hr);
            } else {
				napad_Hv_02_11_94.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_29_11_94 = L.geoJSON(napadHv291194, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_29_11_94.removeLayer(hr);
            } else {
				napad_Hv_29_11_94.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_01_12_94 = L.geoJSON(napadHv011294, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_01_12_94.removeLayer(hr);
            } else {
				napad_Hv_01_12_94.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_05_12_94 = L.geoJSON(napadHv051294, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_05_12_94.removeLayer(hr);
            } else {
				napad_Hv_05_12_94.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_10_12_94 = L.geoJSON(napadHv101294, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_10_12_94.removeLayer(hr);
            } else {
				napad_Hv_10_12_94.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_29_11_94 = L.geoJSON(obranaSr291194, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Sr_29_11_94.removeLayer(hr);
            } else {
                obrana_Sr_29_11_94.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_31_10_94 = L.geoJSON(obranaSr311094, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Sr_31_10_94.removeLayer(hr);
            } else {
                obrana_Sr_31_10_94.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_06_04_95 = L.geoJSON(napadHv060495, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_06_04_95.removeLayer(hr);
            } else {
				napad_Hv_06_04_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_07_04_95 = L.geoJSON(napadHv070495, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_07_04_95.removeLayer(hr);
            } else {
				napad_Hv_07_04_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_04_06_95 = L.geoJSON(napadHv040695, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_04_06_95.removeLayer(hr);
            } else {
				napad_Hv_04_06_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_25_07_95 = L.geoJSON(napadHv250795, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_25_07_95.removeLayer(hr);
            } else {
				napad_Hv_25_07_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_28_07_95 = L.geoJSON(obranaSr280795, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Sr_28_07_95.removeLayer(hr);
            } else {
                obrana_Sr_28_07_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_28_07_95 = L.geoJSON(napadHv280795, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_Hv_28_07_95.removeLayer(hr);
            } else {
				napad_Hv_28_07_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_30_07_95 = L.geoJSON(obranaSr300795, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                obrana_Sr_30_07_95.removeLayer(hr);
            } else {
                obrana_Sr_30_07_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_05_08_95 = L.geoJSON(napadBiH050895, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 10) {
                napad_BiH_05_08_95.removeLayer(hr);
            } else {
                napad_BiH_05_08_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_08_09_95 = L.geoJSON(napadHv080995, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 9) {
                napad_Hv_08_09_95.removeLayer(hr);
            } else {
				napad_Hv_08_09_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_12_09_95 = L.geoJSON(napadHv120995, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 9) {
                napad_Hv_12_09_95.removeLayer(hr);
            } else {
				napad_Hv_12_09_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_12_09_95 = L.geoJSON(napadBiH120995, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 9) {
                napad_BiH_12_09_95.removeLayer(hr);
            } else {
                napad_BiH_12_09_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_13_09_95 = L.geoJSON(napadHv130995, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 9) {
                napad_Hv_13_09_95.removeLayer(hr);
            } else {
				napad_Hv_13_09_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_13_09_95 = L.geoJSON(napadBiH130995, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 9) {
                napad_BiH_13_09_95.removeLayer(hr);
            } else {
                napad_BiH_13_09_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_14_09_95 = L.geoJSON(napadBiH140995, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 9) {
                napad_BiH_14_09_95.removeLayer(hr);
            } else {
                napad_BiH_14_09_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_22_09_95 = L.geoJSON(napadHv220995, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 9) {
                napad_Hv_22_09_95.removeLayer(hr);
            } else {
				napad_Hv_22_09_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_22_09_95 = L.geoJSON(napadBiH220995, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 9) {
                napad_BiH_22_09_95.removeLayer(hr);
            } else {
                napad_BiH_22_09_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Hv_27_09_95 = L.geoJSON(napadHv270995, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: hrvnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 9) {
                napad_Hv_27_09_95.removeLayer(hr);
            } else {
				napad_Hv_27_09_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_BiH_27_09_95 = L.geoJSON(napadBiH270995, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: bihnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 9) {
                napad_BiH_27_09_95.removeLayer(hr);
            } else {
                napad_BiH_27_09_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var napad_Sr_27_09_95 = L.geoJSON(napadSr270995, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srnapad,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 9) {
                napad_Sr_27_09_95.removeLayer(hr);
            } else {
                napad_Sr_27_09_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_08_09_95 = L.geoJSON(obranaSr080995, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 9) {
                obrana_Sr_08_09_95.removeLayer(hr);
            } else {
                obrana_Sr_08_09_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

var obrana_Sr_14_09_95 = L.geoJSON(obranaSr140995, {
    pointToLayer: function (feature, latlng) {
        // Access the rotation angle property from GeoJSON properties
        const rotationAngle = feature.properties.angle || 0; // Default to 0 if angle property is missing
        // Create a marker with rotation angle and icon
        var hr = L.marker(latlng, {
            icon: srbobrana,
            zIndexOffset: 1,
            rotationAngle: rotationAngle // Set rotation angle
        });
        map.on('zoomend', function () {
            if (map.getZoom() < 9) {
                obrana_Sr_14_09_95.removeLayer(hr);
            } else {
                obrana_Sr_14_09_95.addLayer(hr);
            }
        });
        return hr; // Return the marker
    }
});

//OZNAKE POSTROJBI
var zng_26_08_91 = L.geoJSON(zng260891, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'zng') {
            icon = zng_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_26_08_91.removeLayer(marker);
            } else {
                zng_26_08_91.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'zng') {
                icon = zng2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'zng') {
                icon = zng_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet_sjena; // Change to the appropriate icon for 'mup'
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});

var zng_25_09_91 = L.geoJSON(zng250991, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'zng') {
            icon = zng_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_25_09_91.removeLayer(marker);
            } else {
                zng_25_09_91.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'zng') {
                icon = zng2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'zng') {
                icon = zng_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet_sjena; // Change to the appropriate icon for 'mup'
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});

var zng_26_10_91 = L.geoJSON(zng261091, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'zng') {
            icon = zng_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_26_10_91.removeLayer(marker);
            } else {
                zng_26_10_91.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'zng') {
                icon = zng2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'zng') {
                icon = zng_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to_sjena;
            } else if (vojskaType === 'jna') {
                icon = jna_sjena;
            } else if (vojskaType === 'cet') {
                icon = cet_sjena;
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});

var zng_11_11_91 = L.geoJSON(zng111191, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'hv') {
            icon = hv_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_11_11_91.removeLayer(marker);
            } else {
                zng_11_11_91.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to_sjena;
            } else if (vojskaType === 'jna') {
                icon = jna_sjena;
            } else if (vojskaType === 'cet') {
                icon = cet_sjena;
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});

var zng_17_11_91 = L.geoJSON(zng171191, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'hv') {
            icon = hv_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_17_11_91.removeLayer(marker);
            } else {
                zng_17_11_91.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to_sjena;
            } else if (vojskaType === 'jna') {
                icon = jna_sjena;
            } else if (vojskaType === 'cet') {
                icon = cet_sjena;
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});


var zng_19_11_91 = L.geoJSON(zng191191, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'hv') {
            icon = hv_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_19_11_91.removeLayer(marker);
            } else {
                zng_19_11_91.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to_sjena;
            } else if (vojskaType === 'jna') {
                icon = jna_sjena;
            } else if (vojskaType === 'cet') {
                icon = cet_sjena;
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});


var zng_01_01_92 = L.geoJSON(zng010192, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'hv') {
            icon = hv_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        } else if (vojskaType === 'hvo') {
            icon = hvo_sjena;
        } else if (vojskaType === 'abih') {
            icon = abih_sjena;
        } else if (vojskaType === 'svk') {
            icon = svk_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_01_01_92.removeLayer(marker);
            } else {
                zng_01_01_92.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

             // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'hvo') {
                icon = hvo2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'abih') {
                icon = abih2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'svk') {
                icon = svk2;
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena;
            } else if (vojskaType === 'hv') {
                icon = hv_sjena;
            } else if (vojskaType === 'mup') {
                icon = mup_sjena;
            } else if (vojskaType === 'to') {
                icon = to_sjena;
            } else if (vojskaType === 'jna') {
                icon = jna_sjena;
            } else if (vojskaType === 'cet') {
                icon = cet_sjena;
            } else if (vojskaType === 'hvo') {
                icon = hvo_sjena;
            } else if (vojskaType === 'abih') {
                icon = abih_sjena;
            } else if (vojskaType === 'svk') {
                icon = svk_sjena;
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});

var zng_12_09_91 = L.geoJSON(zng120991, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'zng') {
            icon = zng_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_12_09_91.removeLayer(marker);
            } else {
                zng_12_09_91.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'zng') {
                icon = zng2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'zng') {
                icon = zng_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to_sjena;
            } else if (vojskaType === 'jna') {
                icon = jna_sjena;
            } else if (vojskaType === 'cet') {
               icon = cet_sjena;
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});

var zng_Vu_26_08_91 = L.geoJSON(zngVu260891, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'zng') {
            icon = zng_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 13) {
                zng_Vu_26_08_91.removeLayer(marker);
            } else {
                zng_Vu_26_08_91.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'zng') {
                icon = zng2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'zng') {
                icon = zng_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});

var zng_Vu_11_11_91 = L.geoJSON(zngVu111191, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'hv') {
            icon = hv_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 13) {
                zng_Vu_11_11_91.removeLayer(marker);
            } else {
                zng_Vu_11_11_91.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});

var zng_01_03_92 = L.geoJSON(zng010392, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'hv') {
            icon = hv_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        } else if (vojskaType === 'hvo') {
            icon = hvo_sjena;
        } else if (vojskaType === 'abih') {
            icon = abih_sjena;
        } else if (vojskaType === 'svk') {
            icon = svk_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_01_03_92.removeLayer(marker);
            } else {
                zng_01_03_92.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'hvo') {
                icon = hvo2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'abih') {
                icon = abih2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'svk') {
                icon = svk2;
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to_sjena;
            } else if (vojskaType === 'jna') {
                icon = jna_sjena;
            } else if (vojskaType === 'cet') {
                icon = cet_sjena;
            } else if (vojskaType === 'hvo') {
                icon = hvo_sjena;
            } else if (vojskaType === 'abih') {
                icon = abih_sjena;
            } else if (vojskaType === 'svk') {
               icon = svk_sjena;
            }
       
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});

var zng_04_04_92 = L.geoJSON(zng040492, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'hv') {
            icon = hv_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        } else if (vojskaType === 'hvo') {
            icon = hvo_sjena;
        } else if (vojskaType === 'abih') {
            icon = abih_sjena;
        } else if (vojskaType === 'svk') {
            icon = svk_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_04_04_92.removeLayer(marker);
            } else {
                zng_04_04_92.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'hvo') {
                icon = hvo2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'abih') {
                icon = abih2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'svk') {
                icon = svk2;
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to_sjena;
            } else if (vojskaType === 'jna') {
                icon = jna_sjena;
            } else if (vojskaType === 'cet') {
                icon = cet_sjena;
            } else if (vojskaType === 'hvo') {
                icon = hvo_sjena;
            } else if (vojskaType === 'abih') {
                icon = abih_sjena;
            } else if (vojskaType === 'svk') {
               icon = svk_sjena;
            }
       
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});

var zng_07_04_92 = L.geoJSON(zng070492, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'hv') {
            icon = hv_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        } else if (vojskaType === 'hvo') {
            icon = hvo_sjena;
        } else if (vojskaType === 'abih') {
            icon = abih_sjena;
        } else if (vojskaType === 'svk') {
            icon = svk_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_07_04_92.removeLayer(marker);
            } else {
                zng_07_04_92.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'hvo') {
                icon = hvo2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'abih') {
                icon = abih2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'svk') {
                icon = svk2;
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to_sjena;
            } else if (vojskaType === 'jna') {
                icon = jna_sjena;
            } else if (vojskaType === 'cet') {
                icon = cet_sjena;
            } else if (vojskaType === 'hvo') {
                icon = hvo_sjena;
            } else if (vojskaType === 'abih') {
                icon = abih_sjena;
            } else if (vojskaType === 'svk') {
               icon = svk_sjena;
            }
       
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});

var zng_05_05_92 = L.geoJSON(zng050592, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'hv') {
            icon = hv_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        } else if (vojskaType === 'hvo') {
            icon = hvo_sjena;
        } else if (vojskaType === 'abih') {
            icon = abih_sjena;
        } else if (vojskaType === 'svk') {
            icon = svk_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_05_05_92.removeLayer(marker);
            } else {
                zng_05_05_92.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'hvo') {
                icon = hvo2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'abih') {
                icon = abih2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'svk') {
                icon = svk2;
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to_sjena;
            } else if (vojskaType === 'jna') {
                icon = jna_sjena;
            } else if (vojskaType === 'cet') {
                icon = cet_sjena;
            } else if (vojskaType === 'hvo') {
                icon = hvo_sjena;
            } else if (vojskaType === 'abih') {
                icon = abih_sjena;
            } else if (vojskaType === 'svk') {
               icon = svk_sjena;
            }
       
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});


var zng_20_05_92 = L.geoJSON(zng200592, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'hv') {
            icon = hv_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        } else if (vojskaType === 'hvo') {
            icon = hvo_sjena;
        } else if (vojskaType === 'abih') {
            icon = abih_sjena;
        } else if (vojskaType === 'svk') {
            icon = svk_sjena;
        } else if (vojskaType === 'vrs') {
            icon = vrs_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_20_05_92.removeLayer(marker);
            } else {
                zng_20_05_92.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'hvo') {
                icon = hvo2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'abih') {
                icon = abih2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'svk') {
                icon = svk2;
            } else if (vojskaType === 'vrs') {
                icon = vrs2;
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to_sjena;
            } else if (vojskaType === 'jna') {
                icon = jna_sjena;
            } else if (vojskaType === 'cet') {
                icon = cet_sjena;
            } else if (vojskaType === 'hvo') {
                icon = hvo_sjena;
            } else if (vojskaType === 'abih') {
                icon = abih_sjena;
            } else if (vojskaType === 'svk') {
               icon = svk_sjena;
            } else if (vojskaType === 'vrs') {
               icon = vrs_sjena;
            }
       
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});

var zng_16_06_92 = L.geoJSON(zng160692, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'hv') {
            icon = hv_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        } else if (vojskaType === 'hvo') {
            icon = hvo_sjena;
        } else if (vojskaType === 'abih') {
            icon = abih_sjena;
        } else if (vojskaType === 'svk') {
            icon = svk_sjena;
        } else if (vojskaType === 'vrs') {
            icon = vrs_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_16_06_92.removeLayer(marker);
            } else {
                zng_16_06_92.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'hvo') {
                icon = hvo2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'abih') {
                icon = abih2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'svk') {
                icon = svk2;
            } else if (vojskaType === 'vrs') {
                icon = vrs2;
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to_sjena;
            } else if (vojskaType === 'jna') {
                icon = jna_sjena;
            } else if (vojskaType === 'cet') {
                icon = cet_sjena;
            } else if (vojskaType === 'hvo') {
                icon = hvo_sjena;
            } else if (vojskaType === 'abih') {
                icon = abih_sjena;
            } else if (vojskaType === 'svk') {
               icon = svk_sjena;
            } else if (vojskaType === 'vrs') {
               icon = vrs_sjena;
            }
       
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});

var zng_15_07_92 = L.geoJSON(zng150792, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'hv') {
            icon = hv_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        } else if (vojskaType === 'hvo') {
            icon = hvo_sjena;
        } else if (vojskaType === 'abih') {
            icon = abih_sjena;
        } else if (vojskaType === 'svk') {
            icon = svk_sjena;
        } else if (vojskaType === 'vrs') {
            icon = vrs_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_15_07_92.removeLayer(marker);
            } else {
                zng_15_07_92.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'hvo') {
                icon = hvo2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'abih') {
                icon = abih2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'svk') {
                icon = svk2;
            } else if (vojskaType === 'vrs') {
                icon = vrs2;
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to_sjena;
            } else if (vojskaType === 'jna') {
                icon = jna_sjena;
            } else if (vojskaType === 'cet') {
                icon = cet_sjena;
            } else if (vojskaType === 'hvo') {
                icon = hvo_sjena;
            } else if (vojskaType === 'abih') {
                icon = abih_sjena;
            } else if (vojskaType === 'svk') {
               icon = svk_sjena;
            } else if (vojskaType === 'vrs') {
               icon = vrs_sjena;
            }
       
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});

var zng_20_09_92 = L.geoJSON(zng200992, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'hv') {
            icon = hv_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        } else if (vojskaType === 'hvo') {
            icon = hvo_sjena;
        } else if (vojskaType === 'abih') {
            icon = abih_sjena;
        } else if (vojskaType === 'svk') {
            icon = svk_sjena;
        } else if (vojskaType === 'vrs') {
            icon = vrs_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_20_09_92.removeLayer(marker);
            } else {
                zng_20_09_92.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'hvo') {
                icon = hvo2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'abih') {
                icon = abih2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'svk') {
                icon = svk2;
            } else if (vojskaType === 'vrs') {
                icon = vrs2;
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to_sjena;
            } else if (vojskaType === 'jna') {
                icon = jna_sjena;
            } else if (vojskaType === 'cet') {
                icon = cet_sjena;
            } else if (vojskaType === 'hvo') {
                icon = hvo_sjena;
            } else if (vojskaType === 'abih') {
                icon = abih_sjena;
            } else if (vojskaType === 'svk') {
               icon = svk_sjena;
            } else if (vojskaType === 'vrs') {
               icon = vrs_sjena;
            }
       
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});

var zng_02_11_92 = L.geoJSON(zng021192, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'hv') {
            icon = hv_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        } else if (vojskaType === 'hvo') {
            icon = hvo_sjena;
        } else if (vojskaType === 'abih') {
            icon = abih_sjena;
        } else if (vojskaType === 'svk') {
            icon = svk_sjena;
        } else if (vojskaType === 'vrs') {
            icon = vrs_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_02_11_92.removeLayer(marker);
            } else {
                zng_02_11_92.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'hvo') {
                icon = hvo2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'abih') {
                icon = abih2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'svk') {
                icon = svk2;
            } else if (vojskaType === 'vrs') {
                icon = vrs2;
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to_sjena;
            } else if (vojskaType === 'jna') {
                icon = jna_sjena;
            } else if (vojskaType === 'cet') {
                icon = cet_sjena;
            } else if (vojskaType === 'hvo') {
                icon = hvo_sjena;
            } else if (vojskaType === 'abih') {
                icon = abih_sjena;
            } else if (vojskaType === 'svk') {
               icon = svk_sjena;
            } else if (vojskaType === 'vrs') {
               icon = vrs_sjena;
            }
       
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});

var zng_14_06_93 = L.geoJSON(zng140693, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'hv') {
            icon = hv_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        } else if (vojskaType === 'hvo') {
            icon = hvo_sjena;
        } else if (vojskaType === 'abih') {
            icon = abih_sjena;
        } else if (vojskaType === 'svk') {
            icon = svk_sjena;
        } else if (vojskaType === 'vrs') {
            icon = vrs_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_14_06_93.removeLayer(marker);
            } else {
                zng_14_06_93.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'hvo') {
                icon = hvo2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'abih') {
                icon = abih2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'svk') {
                icon = svk2;
            } else if (vojskaType === 'vrs') {
                icon = vrs2;
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to_sjena;
            } else if (vojskaType === 'jna') {
                icon = jna_sjena;
            } else if (vojskaType === 'cet') {
                icon = cet_sjena;
            } else if (vojskaType === 'hvo') {
                icon = hvo_sjena;
            } else if (vojskaType === 'abih') {
                icon = abih_sjena;
            } else if (vojskaType === 'svk') {
               icon = svk_sjena;
            } else if (vojskaType === 'vrs') {
               icon = vrs_sjena;
            }
       
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});

var zng_30_11_93 = L.geoJSON(zng301193, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'hv') {
            icon = hv_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        } else if (vojskaType === 'hvo') {
            icon = hvo_sjena;
        } else if (vojskaType === 'abih') {
            icon = abih_sjena;
        } else if (vojskaType === 'svk') {
            icon = svk_sjena;
        } else if (vojskaType === 'vrs') {
            icon = vrs_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_30_11_93.removeLayer(marker);
            } else {
                zng_30_11_93.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'hvo') {
                icon = hvo2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'abih') {
                icon = abih2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'svk') {
                icon = svk2;
            } else if (vojskaType === 'vrs') {
                icon = vrs2;
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to_sjena;
            } else if (vojskaType === 'jna') {
                icon = jna_sjena;
            } else if (vojskaType === 'cet') {
                icon = cet_sjena;
            } else if (vojskaType === 'hvo') {
                icon = hvo_sjena;
            } else if (vojskaType === 'abih') {
                icon = abih_sjena;
            } else if (vojskaType === 'svk') {
               icon = svk_sjena;
            } else if (vojskaType === 'vrs') {
               icon = vrs_sjena;
            }
       
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});

var zng_01_05_95 = L.geoJSON(zng010595, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'hv') {
            icon = hv_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        } else if (vojskaType === 'hvo') {
            icon = hvo_sjena;
        } else if (vojskaType === 'abih') {
            icon = abih_sjena;
        } else if (vojskaType === 'svk') {
            icon = svk_sjena;
        } else if (vojskaType === 'vrs') {
            icon = vrs_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_01_05_95.removeLayer(marker);
            } else {
                zng_01_05_95.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'hvo') {
                icon = hvo2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'abih') {
                icon = abih2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'svk') {
                icon = svk2;
            } else if (vojskaType === 'vrs') {
                icon = vrs2;
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to_sjena;
            } else if (vojskaType === 'jna') {
                icon = jna_sjena;
            } else if (vojskaType === 'cet') {
                icon = cet_sjena;
            } else if (vojskaType === 'hvo') {
                icon = hvo_sjena;
            } else if (vojskaType === 'abih') {
                icon = abih_sjena;
            } else if (vojskaType === 'svk') {
               icon = svk_sjena;
            } else if (vojskaType === 'vrs') {
               icon = vrs_sjena;
            }
       
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});

var zng_11_07_95 = L.geoJSON(zng110795, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'hv') {
            icon = hv_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        } else if (vojskaType === 'hvo') {
            icon = hvo_sjena;
        } else if (vojskaType === 'abih') {
            icon = abih_sjena;
        } else if (vojskaType === 'svk') {
            icon = svk_sjena;
        } else if (vojskaType === 'vrs') {
            icon = vrs_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_11_07_95.removeLayer(marker);
            } else {
                zng_11_07_95.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'hvo') {
                icon = hvo2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'abih') {
                icon = abih2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'svk') {
                icon = svk2;
            } else if (vojskaType === 'vrs') {
                icon = vrs2;
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to_sjena;
            } else if (vojskaType === 'jna') {
                icon = jna_sjena;
            } else if (vojskaType === 'cet') {
                icon = cet_sjena;
            } else if (vojskaType === 'hvo') {
                icon = hvo_sjena;
            } else if (vojskaType === 'abih') {
                icon = abih_sjena;
            } else if (vojskaType === 'svk') {
               icon = svk_sjena;
            } else if (vojskaType === 'vrs') {
               icon = vrs_sjena;
            }
       
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});

var zng_05_08_95 = L.geoJSON(zng050895, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'hv') {
            icon = hv_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        } else if (vojskaType === 'hvo') {
            icon = hvo_sjena;
        } else if (vojskaType === 'abih') {
            icon = abih_sjena;
        } else if (vojskaType === 'svk') {
            icon = svk_sjena;
        } else if (vojskaType === 'vrs') {
            icon = vrs_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_05_08_95.removeLayer(marker);
            } else {
                zng_05_08_95.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'hvo') {
                icon = hvo2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'abih') {
                icon = abih2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'svk') {
                icon = svk2;
            } else if (vojskaType === 'vrs') {
                icon = vrs2;
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to_sjena;
            } else if (vojskaType === 'jna') {
                icon = jna_sjena;
            } else if (vojskaType === 'cet') {
                icon = cet_sjena;
            } else if (vojskaType === 'hvo') {
                icon = hvo_sjena;
            } else if (vojskaType === 'abih') {
                icon = abih_sjena;
            } else if (vojskaType === 'svk') {
               icon = svk_sjena;
            } else if (vojskaType === 'vrs') {
               icon = vrs_sjena;
            }
       
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});

var zng_06_08_95 = L.geoJSON(zng060895, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'hv') {
            icon = hv_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        } else if (vojskaType === 'hvo') {
            icon = hvo_sjena;
        } else if (vojskaType === 'abih') {
            icon = abih_sjena;
        } else if (vojskaType === 'svk') {
            icon = svk_sjena;
        } else if (vojskaType === 'vrs') {
            icon = vrs_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_06_08_95.removeLayer(marker);
            } else {
                zng_06_08_95.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'hvo') {
                icon = hvo2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'abih') {
                icon = abih2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'svk') {
                icon = svk2;
            } else if (vojskaType === 'vrs') {
                icon = vrs2;
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to_sjena;
            } else if (vojskaType === 'jna') {
                icon = jna_sjena;
            } else if (vojskaType === 'cet') {
                icon = cet_sjena;
            } else if (vojskaType === 'hvo') {
                icon = hvo_sjena;
            } else if (vojskaType === 'abih') {
                icon = abih_sjena;
            } else if (vojskaType === 'svk') {
               icon = svk_sjena;
            } else if (vojskaType === 'vrs') {
               icon = vrs_sjena;
            }
       
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});

var zng_08_08_95 = L.geoJSON(zng080895, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'hv') {
            icon = hv_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        } else if (vojskaType === 'hvo') {
            icon = hvo_sjena;
        } else if (vojskaType === 'abih') {
            icon = abih_sjena;
        } else if (vojskaType === 'svk') {
            icon = svk_sjena;
        } else if (vojskaType === 'vrs') {
            icon = vrs_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_08_08_95.removeLayer(marker);
            } else {
                zng_08_08_95.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'hvo') {
                icon = hvo2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'abih') {
                icon = abih2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'svk') {
                icon = svk2;
            } else if (vojskaType === 'vrs') {
                icon = vrs2;
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to_sjena;
            } else if (vojskaType === 'jna') {
                icon = jna_sjena;
            } else if (vojskaType === 'cet') {
                icon = cet_sjena;
            } else if (vojskaType === 'hvo') {
                icon = hvo_sjena;
            } else if (vojskaType === 'abih') {
                icon = abih_sjena;
            } else if (vojskaType === 'svk') {
               icon = svk_sjena;
            } else if (vojskaType === 'vrs') {
               icon = vrs_sjena;
            }
       
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});

var zng_12_09_95 = L.geoJSON(zng120995, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'hv') {
            icon = hv_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        } else if (vojskaType === 'hvo') {
            icon = hvo_sjena;
        } else if (vojskaType === 'abih') {
            icon = abih_sjena;
        } else if (vojskaType === 'svk') {
            icon = svk_sjena;
        } else if (vojskaType === 'vrs') {
            icon = vrs_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_12_09_95.removeLayer(marker);
            } else {
                zng_12_09_95.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'hvo') {
                icon = hvo2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'abih') {
                icon = abih2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'svk') {
                icon = svk2;
            } else if (vojskaType === 'vrs') {
                icon = vrs2;
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to_sjena;
            } else if (vojskaType === 'jna') {
                icon = jna_sjena;
            } else if (vojskaType === 'cet') {
                icon = cet_sjena;
            } else if (vojskaType === 'hvo') {
                icon = hvo_sjena;
            } else if (vojskaType === 'abih') {
                icon = abih_sjena;
            } else if (vojskaType === 'svk') {
               icon = svk_sjena;
            } else if (vojskaType === 'vrs') {
               icon = vrs_sjena;
            }
       
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});

var zng_14_09_95 = L.geoJSON(zng140995, {
    pointToLayer: function (feature, latlng) {
        // Determine which icon to use based on the 'vojska' property
        var vojskaType = feature.properties.vojska;
        var icon;

        // Assign the appropriate icon based on the vojskaType
        if (vojskaType === 'hos') {
            icon = hos_sjena;
        } else if (vojskaType === 'hv') {
            icon = hv_sjena;
        } else if (vojskaType === 'mup') {
            icon = mup_sjena;
        } else if (vojskaType === 'to') {
            icon = to_sjena;
        } else if (vojskaType === 'jna') {
            icon = jna_sjena;
        } else if (vojskaType === 'cet') {
            icon = cet_sjena;
        } else if (vojskaType === 'hvo') {
            icon = hvo_sjena;
        } else if (vojskaType === 'abih') {
            icon = abih_sjena;
        } else if (vojskaType === 'svk') {
            icon = svk_sjena;
        } else if (vojskaType === 'vrs') {
            icon = vrs_sjena;
        }
        // Add more conditions as needed for other types of 'vojska'

        // Create a marker with the selected icon
        var marker = L.marker(latlng, {
            icon: icon,
            riseOnHover: true,
            zIndexOffset: 1
        });

        map.on('zoomend', function () {
            if (map.getZoom() < 11) {
                zng_14_09_95.removeLayer(marker);
            } else {
                zng_14_09_95.addLayer(marker);
            }
        });

        return marker; // Return the marker
    },
    onEachFeature: function (feature, layer) {
        layer.on("mouseover", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos2; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv2; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'jna') {
                icon = jna2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'cet') {
                icon = cet2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'hvo') {
                icon = hvo2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'abih') {
                icon = abih2; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'svk') {
                icon = svk2;
            } else if (vojskaType === 'vrs') {
                icon = vrs2;
            }
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });

        layer.on("mouseout", function (e) {
            var vojskaType = feature.properties.vojska;
            var icon;

            // Determine which icon to use based on the vojskaType
            if (vojskaType === 'hos') {
                icon = hos_sjena; // Change to the appropriate icon for 'hos'
            } else if (vojskaType === 'hv') {
                icon = hv_sjena; // Change to the appropriate icon for 'zng'
            } else if (vojskaType === 'mup') {
                icon = mup_sjena; // Change to the appropriate icon for 'mup'
            } else if (vojskaType === 'to') {
                icon = to_sjena;
            } else if (vojskaType === 'jna') {
                icon = jna_sjena;
            } else if (vojskaType === 'cet') {
                icon = cet_sjena;
            } else if (vojskaType === 'hvo') {
                icon = hvo_sjena;
            } else if (vojskaType === 'abih') {
                icon = abih_sjena;
            } else if (vojskaType === 'svk') {
               icon = svk_sjena;
            } else if (vojskaType === 'vrs') {
               icon = vrs_sjena;
            }
       
            // Add more conditions as needed for other types of 'vojska'

            layer.setIcon(icon);
        });
    }
});

//FLAGS --- positions of the armies
var sr_zast_26_08_91 = L.geoJSON(srSnage260891,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            sr_zast_26_08_91.removeLayer(hr);
    }
    else {
            sr_zast_26_08_91.addLayer(hr);
        }
});		
		}
		  })
	
var sr_zast_17_12_91 = L.geoJSON(srSnage171291,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            sr_zast_17_12_91.removeLayer(hr);
    }
    else {
            sr_zast_17_12_91.addLayer(hr);
        }
});		
		}
		  })
		 
var srzas_genol_4_8 = L.geoJSON(srSnagegen040595,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <8){
            srzas_genol_4_8.removeLayer(hr);
    }
    else {
            srzas_genol_4_8.addLayer(hr);
        }
});		
		}
		  })
		  
var srzas_genol_7_8 = L.geoJSON(srSnagegen070595,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <8){
            srzas_genol_7_8.removeLayer(hr);
    }
    else {
            srzas_genol_7_8.addLayer(hr);
        }
});		
		}
		  })		  

var sr_zast_05_08_95 = L.geoJSON(srSnage050595,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            sr_zast_05_08_95.removeLayer(hr);
    }
    else {
            sr_zast_05_08_95.addLayer(hr);
        }
});		
		}
		  })
		  
var sr_zast_07_08_95 = L.geoJSON(srSnage070595,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            sr_zast_07_08_95.removeLayer(hr);
    }
    else {
            sr_zast_07_08_95.addLayer(hr);
        }
});		
		}
		  })

var sr_zast_08_08_95 = L.geoJSON(srSnage080595,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            sr_zast_08_08_95.removeLayer(hr);
    }
    else {
            sr_zast_08_08_95.addLayer(hr);
        }
});		
		}
		  })	

var sr_zast_12_09_95 = L.geoJSON(srSnage120995,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            sr_zast_12_09_95.removeLayer(hr);
    }
    else {
            sr_zast_12_09_95.addLayer(hr);
        }
});		
		}
		  })		  

var sr_zast_14_09_95 = L.geoJSON(srSnage140995,{
                pointToLayer: function (feature, latlng) {
			 var hr = L.marker(latlng, {icon: srzastava, zIndexOffset: 1000});
			 	map.on('zoomend', function() {
    if (map.getZoom() <10){
            sr_zast_14_09_95.removeLayer(hr);
    }
    else {
            sr_zast_14_09_95.addLayer(hr);
        }
});		
		}
		  })	


        var overlaysTree = {
            label: "<big><b style='line-height:200%' class='sidebar-text'>The Homeland war</big></b>",
            children: [
                {label: "<big><b style='line-height:200%'class='sidebar-text'>Territories</b></big>", children: [
                    {label: '<span style=line-height:200% class="layer-text">Republic of Croatia <i>(click on polygon)<i></span>', layer: croatia_polygon_2, radioGroup: 'bc'},
                    {label: '<span style=line-height:200% class="layer-text">Former Yugoslavia <i>(click on polygon)<i></span>', layer: L.featureGroup ([yugoslavia_polygon]), radioGroup: 'bc'},
                    {label: '<span style=line-height:200% class="layer-text">The idea of Great Serbia <i>(click on polygon)<i></span>', layer: L.featureGroup ([srbija_polygon]), radioGroup: 'bc'},

                ]},
	             {label: "<big><b style='line-height:200%' class='sidebar-text'>Warfare</b></big>", children: [
				 
				 {label: "<big><b style='line-height:200%' class='sidebar-text'>1990</b></big>", children: [
					{label: '<div id="onlysel" class="sidebar-text"><hr>● By the fall of the Berlin Wall the democratic changes that began all over the Europe has also caused changes in Yugoslavia. With the political program of establishing the Croatian state, the Croatian Democratic Union (HDZ), led by Franjo Tuđman, won at the first multiparty elections held in late April and early May 1990. Most of Serbs in Croatia, under the influence of propaganda and Serbian agressive nationalist rallies held since the mid - 80s throughout Yugoslavia, could not reconciled with that victory and therefore announced a referendum on Serbian autonomy and their determination towards Yugoslavia. Croatian authorities have said that they will prevent it, so the rebel Serbs blocked the roads a few the days before the planned referendum and started setting up checkpoints with armed guards on the approaches to the areas where they had the most of population.' + '<hr></div>'},
	                {label: "17.08.1990. - <b style='line-height:150%' class='layer-text'>'Log revolution' in the areas with  Serbian population majority</b>", layer: L.featureGroup ([balvan_revolucija, hrpolit_31_08_90, serpolit_31_08_90]), radioGroup: 'bc'},
					{label: '<div id="onlysel" class="sidebar-text"><hr>● After the referendum on which only Serbs voted and expressed their commitment to Yugoslavia, so-called "Serbian Autonomous Oblast (SAO) Krajina" was proclaimed and almost all municipalities with a Serb majority were soon included to it. Then, the rest of the Serbian population which have lived near by, but in the municipalities with Croatian majority, start to separate their local communities and join to so-called SAO Krajina.' + '<hr></div>'},
 					{label: "21.12.1990. - <b style='line-height:150%' class='layer-text'>The proclamation of the so-called Serbian Autonomous Area (SAO) Krajina</b><hr style='height:0.5em; background-color:gray'>", layer: L.featureGroup ([proglasenje_sao_krajina, hrpolit_31_12_90, serpolit_31_12_90]), radioGroup: 'bc'},
                  
				  {label: "<big><b style='line-height:200%' class='sidebar-text'>1991</b></big><hr>", children: [
                    {label: '<div id="onlysel" class="sidebar-text">● After seizing weapons from police warehouses and canceling obedience to most police stations in places with a Serbian majority, the leadership of so-called SAO Krajina has established an autonomous Secretariat of the Internal Affairs of SAO Krajina. The Ministry of Internal Affairs (MUP) of the Republic of Croatia has been informed that its police patrols will not be tolerated. After that the regular contact with MUP of Croatia was interrupted.' + '<hr></div>'},
                    {label: "04.01.1991 - <b style='line-height:150%' class='layer-text'>The establishment of an autonomous 'Secretariat of the of Internal Affairs of SAO Krajina</b>", layer: L.featureGroup ([srbi_postaje, hrpolit_28_02_91, serpolit_28_02_91]), radioGroup: 'bc'},
    	            {label: '<div id="onlysel" class="sidebar-text"><hr>● From 1 March 1991 and the first armed conflict between the rebel Serbs and the Croatian police in Pakrac, Croatia has been in a low-intensity conflict. This situation deteriorated from month to month, so to protect the Croatian population in rebel areas the Croatian police has established police stations in settlements with the majority Croat population, for which JNA was openly opposed. At the same time, the JNA has established a buffer zones between the conflicting sides under the guise of establishing order and peace. Their presence and provocations of the Croatian police, who at that time were ordered not to cause conflicts with them, has encouraged rebel Serbs for further attacks. The real purpose of these zones was to prevent Croatian authorities from stifling the Serbian rebellion and thereby spreading the borders of so-called SAO Krajina.' + '<hr></div>'},
                    {label: 'March - July 1991 - <b style="line-height:150%" class="layer-text">Low-intensity conflict</b>', layer: L.featureGroup ([mamac_low_conflict, independence_day, low_Conflict]), radioGroup: 'bc'},
    	            {label: '<div id="onlysel" class="sidebar-text"><hr>● Following the proclamation of Croatian independence, the rebel Serbs strengthened their armed actions on almost all the areas in which they were in large numbers. In the second half of August, the JNA begins to take over the primacy of causing conflicts and abducting Croatian territory. On these events, the Croatian government responded by blocking and attacking most of the JNA barracks and warehouses on its territory. The JNA thus received the excuse for even more open enemy activities on the Croatian state, presenting it as a justified response to the attacks. On the order of Croatian leadership from 12 September 1991 for the blockade of military facilities, the JNA reacted by activating the war plan that was agreed upon the end of July 1991. By the mid - October, the penetration of the JNA into the depths of the Croatian territory was mostly halted and their plan was only partially realized.' + '<hr></div>'},
                    {label: 'July 1991 - <b style="line-height:150%" class="layer-text">The plan of the Yugoslav Peoples Army (JNA) to attack Croatia</b><hr>', layer: L.featureGroup ([smjer_napada, jna_plan]), radioGroup: 'bc'},
                    {label: '<div id="onlysel" class="group"></div>'},
                    {label: '01.05.1991. <b style="line-height:200%" class="layer-text">', layer: L.featureGroup ([mamac_Sarajevo, sao_01_05_91, sr_zast_26_08_91, hvo_abih_20_03_92, vrs_20_03_92, hrpolit_01_05_91, serpolit_01_05_91]), radioGroup: 'bc'},
                    {label: '01.06.1991. <b style="line-height:200%" class="layer-text">', layer: L.featureGroup ([mamac_Sarajevo, sao_01_06_91, sr_zast_26_08_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					{label: '01.07.1991. <b style="line-height:200%" class="layer-text">', layer: L.featureGroup ([mamac_Sarajevo, sao_01_07_91, sr_zast_26_08_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					{label: '01.08.1991. <b style="line-height:200%" class="layer-text">', layer: L.featureGroup ([mamac_Sarajevo, sao_01_07_91, sr_zast_26_08_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},

					{label: '<div id="onlysel" class="group"></div>'},

					{label: '<big><b class="sidebar-text">Eastern Slavonia front</b></big><hr>', children: [ 
					   {label: '26.08.1991. - <b style="line-height:200%" class="layer-text">Battle of Vukovar</b>', layer: L.featureGroup ([zng_26_08_91, zng_Vu_26_08_91, mamac_25_09_91, sao_26_08_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_26_08_91, napad_Sr_26_08_91, hrpolit_26_08_91, hrnapad_26_08_91, serpolit_26_08_91, sernapad_26_08_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '26.09.1991. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_25_09_91, zng_Vu_26_08_91, mamac_25_09_91, sao_25_09_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_25_09_91, napad_Sr_25_09_91, hrpolit_26_09_91, hrnapad_26_09_91, sernapad_26_09_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '05.10.1991. - <b style="line-height:200%" class="layer-text">Fall of Marinci</b>', layer: L.featureGroup ([zng_25_09_91, zng_Vu_26_08_91, mamac_25_09_91, sao_05_10_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_05_10_91, napad_Sr_05_10_91, napad_Hv_05_10_91, obrana_Sr_05_10_91, hrpolit_listopad_91, hrnapad_listopad_91, sernapad_listopad_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '26.10.1991. - <b style="line-height:200%" class="layer-text">End of connection Bogdanovci - Vukovar</b>', layer: L.featureGroup ([zng_26_10_91, zng_Vu_26_08_91, mamac_10_11_91, sao_26_10_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_26_10_91, napad_Sr_26_10_91, napad_Hv_26_10_91, obrana_Sr_26_10_91, hrpolit_listopad_91, hrnapad_listopad_91, sernapad_listopad_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '11.11.1991. - <b style="line-height:200%" class="layer-text">Fall of Bogdanovci</b>', layer: L.featureGroup ([zng_11_11_91, zng_Vu_11_11_91, mamac_10_11_91, sao_10_11_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_10_11_91, napad_Sr_10_11_91, napad_Hv_10_11_91, obrana_Sr_10_11_91, hrpolit_studeni_91, hrnapad_studeni_91, sernapad_studeni_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '17.11.1991. - <b style="line-height:200%" class="layer-text">Vukovar before surrender</b>', layer: L.featureGroup ([zng_17_11_91, zng_Vu_11_11_91, mamac_10_11_91, sao_17_11_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_17_11_91, napad_Sr_17_11_91, napad_Hv_10_11_91, obrana_Sr_10_11_91, hrpolit_studeni_91, hrnapad_studeni_91, sernapad_studeni_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '19.11.1991. - <b style="line-height:200%" class="layer-text">Fall of Vukovar</b>', layer: L.featureGroup ([zng_19_11_91, mamac_25_09_91, sao_19_11_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_19_11_91, napad_Sr_19_11_91, napad_Hv_10_11_91, obrana_Sr_10_11_91, hrpolit_studeni_91, hrnapad_studeni_91, sernapad_studeni_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '21.11.1991. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_19_11_91, mamac_25_09_91, sao_21_11_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_21_11_91, napad_Sr_21_11_91, napad_Hv_10_11_91, obrana_Sr_10_11_91, hrpolit_studeni_91, hrnapad_studeni_91, sernapad_studeni_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '17.12.1991. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_19_11_91, mamac_25_09_91, sao_17_12_91, srpske_enklave, sr_zast_17_12_91, obrana_Hv_17_12_91, napad_Sr_17_12_91, napad_Hv_17_12_91, obrana_Sr_17_12_91, hrnapad_prosinac_91, serpolit_prosinac_91, sernapad_prosinac_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
				]},
                    {label: '<div id="onlysel" class="group"></div>'},
					{label: '<big><b class="sidebar-text">Western Slavonia front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
					   {label: '26.08.1991. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_26_08_91, zng_Vu_26_08_91, mamac_zap_slavonija, sao_26_08_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_26_08_91, napad_Sr_26_08_91, hrpolit_26_08_91, hrnapad_26_08_91, serpolit_26_08_91, sernapad_26_08_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '26.09.1991. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_25_09_91, zng_Vu_26_08_91, mamac_zap_slavonija, sao_25_09_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_25_09_91, napad_Sr_25_09_91, hrpolit_26_09_91, hrnapad_26_09_91, sernapad_26_09_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '06.10.1991. - <b style="line-height:200%" class="layer-text">Serbs tried to block Pakrac</b>', layer: L.featureGroup ([zng_25_09_91, zng_Vu_26_08_91, mamac_zap_slavonija, sao_05_10_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_05_10_91, napad_Sr_05_10_91, napad_Hv_05_10_91, obrana_Sr_05_10_91, hrpolit_listopad_91, hrnapad_listopad_91, sernapad_listopad_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '<div id="onlysel" class="layer-text"><hr>' + '● The first liberation of Croatian territories by the Croatian Army' + '<hr></div>'},
					   {label: "29.10.1991. - <b style='line-height:150%' class='layer-text'>Operation 'Swath 10' and 'Hurricane 91'</b>", layer: L.featureGroup ([zng_26_10_91, zng_Vu_26_08_91, mamac_zap_slavonija, sao_26_10_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_26_10_91, napad_Sr_26_10_91, napad_Hv_26_10_91, obrana_Sr_26_10_91, hrpolit_listopad_91, hrnapad_listopad_91, sernapad_listopad_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: "11.11.1991. - <b style='line-height:200%' class='layer-text'>Operation 'Hurricane 91'</b>", layer: L.featureGroup ([zng_11_11_91, zng_Vu_11_11_91, mamac_zap_slavonija, sao_10_11_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_10_11_91, napad_Sr_10_11_91, napad_Hv_10_11_91, obrana_Sr_10_11_91, hrpolit_studeni_91, hrnapad_studeni_91, sernapad_studeni_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: "19.11.1991. - <b style='line-height:200%' class='layer-text'>Operation 'Hurricane 91'</b>", layer: L.featureGroup ([zng_19_11_91, mamac_zap_slavonija, sao_19_11_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_19_11_91, napad_Sr_19_11_91, napad_Hv_10_11_91, obrana_Sr_10_11_91, hrpolit_studeni_91, hrnapad_studeni_91, sernapad_studeni_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '28.11.1991. - <b style="line-height:200%" class="layer-text">Serbs occupied almost the entire Lipik</b>', layer: L.featureGroup ([zng_19_11_91, mamac_zap_slavonija, sao_28_11_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_28_11_91, napad_Sr_28_11_91, napad_Hv_10_11_91, obrana_Sr_10_11_91, hrpolit_studeni_91, hrnapad_studeni_91, sernapad_studeni_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},					   
					   {label: "17.12.1991. - <b style='line-height:200%' class='layer-text'>Operation 'Hurricane 91'</b>", layer: L.featureGroup ([zng_19_11_91, mamac_zap_slavonija, sao_17_12_91, srpske_enklave, sr_zast_17_12_91, obrana_Hv_17_12_91, napad_Sr_17_12_91, napad_Hv_17_12_91, obrana_Sr_17_12_91, hrnapad_prosinac_91, serpolit_prosinac_91, sernapad_prosinac_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},					 
			    ]},
           	        {label: '<div id="onlysel" class="group"></div>'},
					{label: '<big><b class="sidebar-text">Banovina and Kordun front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
					   {label: '26.08.1991. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_26_08_91, zng_Vu_26_08_91, mamac_ban_kordun, sao_26_08_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_26_08_91, napad_Sr_26_08_91, hrpolit_26_08_91, hrnapad_26_08_91, serpolit_26_08_91, sernapad_26_08_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '11.09.1991. - <b style="line-height:200%" class="layer-text">Day before the fall of Topusko and Hrvatska Kostajnica</b>', layer: L.featureGroup ([zng_12_09_91, zng_Vu_26_08_91, mamac_ban_kordun, sao_12_09_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_12_09_91, napad_Sr_12_09_91, hrpolit_26_09_91, hrnapad_26_09_91, sernapad_26_09_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
				       {label: '21.09.1991. - <b style="line-height:200%" class="layer-text">Fall of Petrinja</b>', layer: L.featureGroup ([zng_12_09_91, zng_Vu_26_08_91, mamac_ban_kordun, sao_21_09_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_21_09_91, napad_Sr_21_09_91, obrana_Sr_21_09_91, napad_Hv_21_09_91, hrpolit_26_09_91, hrnapad_26_09_91, sernapad_26_09_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '26.09.1991. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_25_09_91, zng_Vu_26_08_91, mamac_ban_kordun, sao_25_09_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_25_09_91, napad_Sr_25_09_91, hrpolit_26_09_91, hrnapad_26_09_91, sernapad_26_09_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '05.10.1991. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_25_09_91, zng_Vu_26_08_91, mamac_ban_kordun, sao_05_10_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_05_10_91, napad_Sr_05_10_91, napad_Hv_05_10_91, obrana_Sr_05_10_91, hrpolit_listopad_91, hrnapad_listopad_91, sernapad_listopad_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '26.10.1991. - <b style="line-height:200%" class="layer-text">Fall of Hrvatski Blagaj</b>', layer: L.featureGroup ([zng_26_10_91, zng_Vu_26_08_91, mamac_ban_kordun, sao_26_10_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_26_10_91, napad_Sr_26_10_91, napad_Hv_26_10_91, obrana_Sr_26_10_91, hrpolit_listopad_91, hrnapad_listopad_91, sernapad_listopad_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '11.11.1991. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_11_11_91, zng_Vu_11_11_91, mamac_ban_kordun, sao_10_11_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_10_11_91, napad_Sr_10_11_91, napad_Hv_10_11_91, obrana_Sr_10_11_91, hrpolit_studeni_91, hrnapad_studeni_91, sernapad_studeni_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '17.11.1991. - <b style="line-height:200%" class="layer-text">Fall of Slunj </b>', layer: L.featureGroup ([zng_17_11_91, zng_Vu_11_11_91, mamac_ban_kordun, sao_17_11_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_17_11_91, napad_Sr_17_11_91, napad_Hv_10_11_91, obrana_Sr_10_11_91, hrpolit_studeni_91, hrnapad_studeni_91, sernapad_studeni_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '28.11.1991. - <b style="line-height:200%" class="layer-text">Fall of Cetingrad</b>', layer: L.featureGroup ([zng_19_11_91, mamac_ban_kordun, sao_28_11_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_28_11_91, napad_Sr_28_11_91, napad_Hv_10_11_91, obrana_Sr_10_11_91, hrpolit_studeni_91, hrnapad_studeni_91, sernapad_studeni_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
                ]},
					{label: '<div id="onlysel" class="group"></div>'},
                    {label: '<big><b class="sidebar-text">Lika front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
					   {label: '26.08.1991. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_26_08_91, zng_Vu_26_08_91, mamac_lika, sao_26_08_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_26_08_91, napad_Sr_26_08_91, hrpolit_26_08_91, hrnapad_26_08_91, serpolit_26_08_91, sernapad_26_08_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '12.09.1991. - <b style="line-height:200%" class="layer-text">Serbian attacks on Gospić </b>', layer: L.featureGroup ([zng_12_09_91, zng_Vu_26_08_91, mamac_lika, sao_12_09_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_12_09_91, napad_Sr_12_09_91, hrpolit_26_09_91, hrnapad_26_09_91, sernapad_26_09_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '26.09.1991. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_25_09_91, zng_Vu_26_08_91, mamac_lika, sao_25_09_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_25_09_91, napad_Sr_25_09_91, hrpolit_26_09_91, hrnapad_26_09_91, sernapad_26_09_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '26.10.1991. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_26_10_91, zng_Vu_26_08_91, mamac_lika, sao_26_10_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_26_10_91, napad_Sr_26_10_91, napad_Hv_26_10_91, obrana_Sr_26_10_91, hrpolit_listopad_91, hrnapad_listopad_91, sernapad_listopad_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '12.11.1991. - <b style="line-height:200%" class="layer-text">Fall of Saborsko</b>', layer: L.featureGroup ([zng_11_11_91, zng_Vu_11_11_91, mamac_lika, sao_10_11_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_10_11_91, napad_Sr_10_11_91, napad_Hv_10_11_91, obrana_Sr_10_11_91, hrpolit_studeni_91, hrnapad_studeni_91, sernapad_studeni_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '17.11.1991. - <b style="line-height:200%" class="layer-text">Fall of Slunj </b>', layer: L.featureGroup ([zng_17_11_91, zng_Vu_11_11_91, mamac_slunj, sao_17_11_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_17_11_91, napad_Sr_17_11_91, napad_Hv_10_11_91, obrana_Sr_10_11_91, hrpolit_studeni_91, hrnapad_studeni_91, sernapad_studeni_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '28.11.1991. - <b style="line-height:200%" class="layer-text">Fall of Cetingrad</b>', layer: L.featureGroup ([zng_19_11_91, mamac_slunj, sao_28_11_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_28_11_91, napad_Sr_28_11_91, napad_Hv_10_11_91, obrana_Sr_10_11_91, hrpolit_studeni_91, hrnapad_studeni_91, sernapad_studeni_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
                ]},
			        {label: '<div id="onlysel" class="group"></div>'},
		            {label: '<big><b class="sidebar-text">Dalmacija front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
					   {label: '26.08.1991. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_26_08_91, zng_Vu_26_08_91, mamac_Dalmacija, sao_26_08_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_26_08_91, napad_Sr_26_08_91, hrpolit_26_08_91, hrnapad_26_08_91, serpolit_26_08_91, sernapad_26_08_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '12.09.1991. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_12_09_91, zng_Vu_26_08_91, mamac_Dalmacija, sao_12_09_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_12_09_91, napad_Sr_12_09_91, hrpolit_26_09_91, hrnapad_26_09_91, sernapad_26_09_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
				       {label: '21.09.1991. - <b style="line-height:200%" class="layer-text">Serbian attacks on Šibenik</b>', layer: L.featureGroup ([zng_12_09_91, zng_Vu_26_08_91, mamac_Dalmacija, sao_21_09_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_21_09_91, napad_Sr_21_09_91, obrana_Sr_21_09_91, napad_Hv_21_09_91, hrpolit_26_09_91, hrnapad_26_09_91, sernapad_26_09_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '26.09.1991. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_25_09_91, zng_Vu_26_08_91, mamac_Dalmacija, sao_25_09_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_25_09_91, napad_Sr_25_09_91, hrpolit_26_09_91, hrnapad_26_09_91, sernapad_26_09_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '05.10.1991. - <b style="line-height:200%" class="layer-text">Serbian attacks on Zadar</b>', layer: L.featureGroup ([zng_25_09_91, zng_Vu_26_08_91, mamac_Dalmacija, sao_05_10_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_05_10_91, napad_Sr_05_10_91, napad_Hv_05_10_91, obrana_Sr_05_10_91, hrpolit_listopad_91, hrnapad_listopad_91, sernapad_listopad_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '19.11.1991. - <b style="line-height:200%" class="layer-text">Fall of Škabrnja and Nadin</b>', layer: L.featureGroup ([zng_19_11_91, mamac_Dalmacija, sao_19_11_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_19_11_91, napad_Sr_19_11_91, napad_Hv_10_11_91, obrana_Sr_10_11_91, hrpolit_studeni_91, hrnapad_studeni_91, sernapad_studeni_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
                ]}, 
	                {label: '<div id="onlysel" class="group"></div>'},
					{label: '<big><b class="sidebar-text">South front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
					   {label: '01.10.1991. - <b style="line-height:200%" class="layer-text">JNA attacked Dubrovnik area</b>', layer: L.featureGroup ([zng_25_09_91, zng_Vu_26_08_91, mamac_jug, sao_25_09_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_25_09_91, napad_Sr_25_09_91, hrpolit_listopad_91, hrnapad_listopad_91, sernapad_listopad_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '05.10.1991. - <b style="line-height:200%" class="layer-text">Serbian attacks on Dubrovnik area</b>', layer: L.featureGroup ([zng_25_09_91, zng_Vu_26_08_91, mamac_jug, sao_05_10_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_05_10_91, napad_Sr_05_10_91, napad_Hv_05_10_91, obrana_Sr_05_10_91, hrpolit_listopad_91, hrnapad_listopad_91, sernapad_listopad_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
				       {label: '26.10.1991. - <b style="line-height:200%" class="layer-text">Serbian attacks on Dubrovnik area</b>', layer: L.featureGroup ([zng_26_10_91, mamac_jug, sao_26_10_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_26_10_91, napad_Sr_26_10_91, napad_Hv_26_10_91, obrana_Sr_26_10_91, hrpolit_listopad_91, hrnapad_listopad_91, sernapad_listopad_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '15.11.1991. - <b style="line-height:200%" class="layer-text">The siege of the Dubrovnik </b>', layer: L.featureGroup ([zng_11_11_91, zng_Vu_11_11_91, mamac_jug, sao_15_11_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_15_11_91, napad_Sr_15_11_91, napad_Hv_10_11_91, obrana_Sr_10_11_91, hrpolit_studeni_91, hrnapad_studeni_91, sernapad_studeni_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
					   {label: '21.11.1991. - <b style="line-height:200%" class="layer-text">Fall of Mokošica</b>', layer: L.featureGroup ([zng_19_11_91, mamac_jug, sao_21_11_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_21_11_91, napad_Sr_21_11_91, napad_Hv_10_11_91, obrana_Sr_10_11_91, hrpolit_studeni_91, hrnapad_studeni_91, sernapad_studeni_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
                       {label: '17.12.1991. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_19_11_91, mamac_jug, sao_17_12_91, srpske_enklave, sr_zast_17_12_91, obrana_Hv_17_12_91, napad_Sr_17_12_91, napad_Hv_17_12_91, obrana_Sr_17_12_91, hrnapad_prosinac_91, serpolit_prosinac_91, sernapad_prosinac_91, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
				]},
                    {label: '<div id="onlysel" class="group"></div>'},
					{label: '<big><b class="sidebar-text">Bosnia and Herzegovina</b></big> <i>(zoom to feature)</i><hr>', children: [ 
                       {label: '12./18.11.1991. - <b style="line-height:200%" class="layer-text">The proclamation of the Croatian communities</b>', layer: L.featureGroup ([mamac_Bih, hr_Zajednice_Bih, sao_19_11_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_19_11_91, napad_Sr_19_11_91, napad_Hv_10_11_91, obrana_Sr_10_11_91, hrpolit_studeni_91, hrnapad_studeni_91, sernapad_studeni_91]), radioGroup: 'bc'},   
				       {label: '21.11.1991. - <b style="line-height:200%" class="layer-text">The proclamation of the so-called Serbian Autonomous Areas (SAO)</b>', layer: L.featureGroup ([mamac_Bih, sao_krajine_bih, sao_21_11_91, srpske_enklave, sr_zast_26_08_91, obrana_Hv_21_11_91, napad_Sr_21_11_91, napad_Hv_10_11_91, obrana_Sr_10_11_91, hrpolit_studeni_91, hrnapad_studeni_91, sernapad_studeni_91]), radioGroup: 'bc'}, 
				]},   			 
			]},
			{label: '<div id="onlysel" class="group"></div>'},
            {label: '<small style="line-height:150%" class="source-text">Source:' + '<br>' + '1. Central Intelligence Agency (2002-2003) Balkan battlegrounds. Washington, DC: Central Intelligence Agency, Office of Russian and European Analysis.' + '<br>' +  
				            '2. Marijan, D.(2016) The Homeland War. Zagreb: Croatian Institute of History and Despot infinitus.</small><hr style="height:0.5em; background-color:gray">'},	
           
		   {label: "<big><b style='line-height:200%' class='sidebar-text'>1992</b></big><hr>", children: [
                {label: '<div id="onlysel" class="sidebar-text">● On the begining of the new year a new termination of all armed conflicts has been agreed. This time the ceasefire was successful and that was a provisofor the arrival of the UN peacekeeping force.' + '<hr></div>'},
				{label: '03.01.1992. - <big><b style="line-height:150%" class="layer-text">Sarajevo Ceasefire</b></big> <i>(click on polygon)</i>', layer: L.featureGroup ([mamac_Sarajevo, sarajevo_hover, hrpolit_1992, hrnapad_1992, sernapad_1992, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
                {label: '<div id="onlysel" class="sidebar-text"><hr>● On 21 February 1992 the UN Security Council adopted resolution 743 on the start of a peacekeeping operation and deployment of international peacekeeping forces in the Republic of Croatia for the period of 12 months. Four security zones were established: East, West, North and South. The Western zone was divided into two parts, one under the control of rebel Serbs and the other under the control of Croats. Outside the protected zones were parts of municipalities' + "with the majority Croatian population occupied by the JNA called 'pink zones'." + '<hr></div>'},
				{label: '<big><b style="line-height:150%" class="layer-text">UNPA sectors</b><big>', layer: L.featureGroup ([mamac_unpa_sektori, unpa_pink, unpa_sektori, unpa_cro, hrpolit_1992, hrnapad_1992, sernapad_1992, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
                {label: '<div id="onlysel" class="group"></div>'},
		            {label: '<big><b style="line-height:200%" class="layer-text">Western Slavonia front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
					      {label: '03.01.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_01_01_92, mamac_zap_slavonija, sao_03_01_92, srpske_enklave, sr_zast_17_12_91, obrana_Hv_03_01_91, napad_Sr_03_01_92, hrpolit_1992, hrnapad_1992, sernapad_1992, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
                    ]},
		            {label: '<div id="onlysel" class="group"></div>'},
		            {label: '<big><b style="line-height:200%" class="layer-text">Dalmacija front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
		            		{label: '01.01.1992. - <b style="line-height:200%" class="layer-text">Fall of Pridraga, Novigrad and Nos Kalik</b>', layer: L.featureGroup ([zng_01_01_92, mamac_Zadar, sao_03_01_92, srpske_enklave, sr_zast_17_12_91, obrana_Hv_03_01_91, napad_Sr_03_01_92, hrpolit_1992, hrnapad_1992, sernapad_1992, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
		            		{label: '<b style="line-height:200%" class="layer-text">The operation to liberate Nos Kalik</b>', children: [ 
		            			    {label: '01.03.1992. - <b style="line-height:200%" class="layer-text">Occupied Nos Kalik</b>', layer: L.featureGroup ([zng_01_03_92, mamac_nos_kalik, sarajevo_sporazum_2, srpske_enklave, obrana_Sr_01_03_92, napad_Hv_01_03_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992, hvo_abih_20_03_92, vrs_20_03_92, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},
		            			    {label: '02.03.1992. - <b style="line-height:200%" class="layer-text">The Croatian Army liberated Nos Kalik</b>', layer: L.featureGroup ([zng_01_03_92, mamac_nos_kalik,sarajevo_sporazum_3, srpske_enklave, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992, hvo_abih_20_03_92, vrs_20_03_92, hvo_abih_20_03_92, vrs_20_03_92]), radioGroup: 'bc'},    						
		            		]},
		            		{label: '<b style="line-height:200%" class="layer-text">The operation to capture hill Križ</b>', children: [ 
		            			    {label: '17.05.1992. - <b style="line-height:200%" class="layer-text">Start of the operation</b>', layer: L.featureGroup ([zng_05_05_92, mamac_brdo_kriz, sarajevo_sporazum_4, srpske_enklave, obrana_Sr_17_05_92, napad_Hv_17_05_92, napad_Sr_08_05_92, obrana_HvBiH_22_05_92, napad_HvBiH_22_05_92, sr_zast_17_12_91,vrs_11_05_92, hvo_abih_11_05_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},
		            				{label: '18.05.1992. - <b style="line-height:200%" class="layer-text">Blocade of Križ bunker</b>', layer: L.featureGroup ([zng_05_05_92, mamac_brdo_kriz, sarajevo_sporazum_5, srpske_enklave, obrana_Sr_18_05_92, napad_Hv_18_05_92, napad_Sr_08_05_92, obrana_HvBiH_22_05_92, napad_HvBiH_22_05_92, sr_zast_17_12_91, vrs_11_05_92, hvo_abih_11_05_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},
		            			    {label: '23.05.1992. - <b style="line-height:200%" class="layer-text">The Croatian Army captured the hill Križ above Zadar</b>', layer: L.featureGroup ([zng_20_05_92, mamac_brdo_kriz, sarajevo_sporazum_7, srpske_enklave, napad_Hv_22_05_92, obrana_Sr_23_05_92, obrana_Sr_22_05_92, napad_Sr_23_05_92, obrana_HvBiH_23_05_92, napad_HvBiH_23_05_92, sr_zast_17_12_91, vrs_23_05_92, hvo_abih_23_05_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
		            		]},
		            		{label: "<b style='line-height:200%' class='layer-text'>Operation on Miljevci plateau</b>", children: [ 
		            			    {label: '17.06.1992. - <b style="line-height:200%" class="layer-text">Start of the operation on Miljevci plateau</b>', layer: L.featureGroup ([zng_16_06_92, mamac_miljevacki_plato,sarajevo_sporazum_10, srpske_enklave, obrana_Sr_17_06_92, napad_Hv_17_06_92, obrana_Sr_16_06_92, obrana_BiH_16_06_92, obrana_Hv_16_06_92, napad_Sr_16_06_92, napad_Hv_16_06_92, sr_zast_17_12_91, vrs_16_06_92, hvo_16_06_92, abih_16_06_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},
		            			    {label: '22.06.1992. - <b style="line-height:200%" class="layer-text">The Croatian Army liberated villages on the Miljevci plateau</b>', layer: L.featureGroup ([zng_16_06_92, mamac_miljevacki_plato, sarajevo_sporazum_11, srpske_enklave, obrana_BiH_20_06_92, obrana_Hv_20_06_92, napad_Sr_20_06_92, sr_zast_17_12_91, vrs_20_06_92, hvo_20_06_92, abih_20_06_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
		            		]},
							]},
					{label: '<div id="onlysel" class="group"></div>'},
		            {label: '<big><b style="line-height:200%" class="layer-text">Lika front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
                            {label: '<b style="line-height:200%" class="layer-text">Serb enclaves Jasenak, Gomirje, Moravice and Drežnica</b>', layer: L.featureGroup ([mamac_srpske_enklave, srpske_enklave, sarajevo_sporazum_11, napad_Hv_05_07_92, napad_Sr_05_07_92, obrana_Hv_05_07_92, obrana_BiH_20_06_92, sr_zast_17_12_91, vrs_05_07_92, hvo_05_07_92, abih_05_07_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},
				            {label: '06.07.1992. - <b style="line-height:200%" class="layer-text">Disarmament of Serb enclaves</b>', layer: L.featureGroup ([zng_16_06_92, mamac_srpske_enklave, sarajevo_sporazum_11, napad_Hv_05_07_92, napad_Sr_05_07_92, obrana_Hv_05_07_92, obrana_BiH_20_06_92, sr_zast_17_12_91, vrs_05_07_92, hvo_05_07_92, abih_05_07_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
				    ]},
                	{label: '<div id="onlysel" class="group"></div>'},
                    {label: '<big><b style="line-height:200%" class="layer-text">South front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
                            {label: '06.05.1992. - <b style="line-height:200%" class="layer-text">Start of actions to deblock Dubrovnik</b>', layer: L.featureGroup ([zng_05_05_92, mamac_jug, sarajevo_sporazum_3, srpske_enklave, obrana_Sr_06_05_92, napad_Hv_06_05_92, napad_Sr_05_05_92, obrana_HvBiH_07_05_92, napad_HvBiH_05_05_92, sr_zast_17_12_91, vrs_05_05_92, hvo_abih_05_05_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},
                		    {label: '07.05.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_05_05_92, mamac_jug, sarajevo_sporazum_4, srpske_enklave, obrana_Sr_07_05_92, napad_Hv_07_05_92, napad_Sr_07_05_92, obrana_HvBiH_07_05_92, napad_HvBiH_07_05_92, sr_zast_17_12_91, vrs_07_05_92, hvo_abih_07_05_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},   
                		    {label: '22.05.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_20_05_92, mamac_jug, sarajevo_sporazum_6, srpske_enklave, obrana_Sr_22_05_92, napad_Hv_22_05_92, napad_Sr_08_05_92, obrana_HvBiH_22_05_92, napad_HvBiH_22_05_92, sr_zast_17_12_91, vrs_20_05_92, hvo_abih_20_05_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'}, 
                		    {label: '25.05.1992. - <b  style="line-height:200%" class="layer-text">The Croatian Army liberated area around Slano</b>', layer: L.featureGroup ([zng_20_05_92, mamac_jug, sarajevo_sporazum_8, srpske_enklave, obrana_Sr_25_05_92, napad_Hv_25_05_92, napad_HvBiH_25_05_92, napad_Sr_25_05_92, obrana_HvBiH_25_05_92, obrana_Sr_23_05_92, sr_zast_17_12_91, vrs_25_05_92, hvo_abih_25_05_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
                		    {label: '27.05.1992. - <b style="line-height:200%" class="layer-text">The Croatian Army deblocked Dubrovnik</b>', layer: L.featureGroup ([zng_20_05_92, mamac_jug, sarajevo_sporazum_9, srpske_enklave, obrana_Sr_26_05_92, napad_Hv_26_05_92, napad_HvBiH_25_05_92, napad_Sr_25_05_92, obrana_HvBiH_25_05_92, obrana_Sr_23_05_92, sr_zast_17_12_91, vrs_27_05_92, hvo_abih_27_05_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
                		    {label: '28.05.1992. - <b style="line-height:200%" class="layer-text">The Croatian Army liberated Dubrovnik area</b>', layer: L.featureGroup ([zng_20_05_92, mamac_jug, sarajevo_sporazum_10, srpske_enklave, obrana_Sr_28_05_92, napad_Hv_28_05_92, napad_HvBiH_28_05_92, napad_Sr_25_05_92, obrana_HvBiH_25_05_92, obrana_Sr_23_05_92, sr_zast_17_12_91, vrs_28_05_92, hvo_abih_28_05_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
                		   	{label: '08.07.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_16_06_92, mamac_jug, vrs_05_07_92, hvo_05_07_92, abih_05_07_92, sarajevo_sporazum_11, srpske_enklave, napad_Hv_05_07_92, napad_Sr_05_07_92, obrana_Hv_05_07_92, obrana_BiH_20_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '12.07.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_16_06_92, mamac_jug, vrs_12_07_92, hvo_12_07_92, abih_12_07_92, sarajevo_sporazum_11, napad_Sr_12_07_92, obrana_Hv_05_07_92, obrana_BiH_20_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
							{label: '20.10.1992. - <b style="line-height:200%" class="layer-text">Start of actions to liberate Konavle area</b>', layer: L.featureGroup ([zng_20_09_92, mamac_jug, sarajevo_sporazum_11, obrana_Sr_20_10_92, napad_Hv_20_10_92, napad_Sr_20_10_92, obrana_BiH_30_09_92, obrana_Hv_06_10_92, sr_zast_17_12_91, vrs_20_10_92, hvo_20_10_92, abih_20_10_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
                		    {label: '21.10.1992. - <b style="line-height:200%" class="layer-text">The Croatian Army liberated Cavtat</b>', layer: L.featureGroup ([zng_20_09_92, mamac_jug, sarajevo_sporazum_12, obrana_Sr_21_10_92, napad_Hv_21_10_92, napad_Sr_20_10_92, obrana_BiH_30_09_92, obrana_Hv_06_10_92, sr_zast_17_12_91, vrs_21_10_92, hvo_21_10_92, abih_21_10_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
                		    {label: '24.10.1992. - <b style="line-height:200%" class="layer-text">The Croatian Army liberated Konavle area</b>', layer: L.featureGroup ([zng_20_09_92, mamac_jug, sarajevo_sporazum_13, obrana_Sr_24_10_92, napad_Hv_24_10_92, napad_Sr_20_10_92, obrana_BiH_30_09_92, obrana_Hv_06_10_92, sr_zast_17_12_91, vrs_24_10_92, hvo_24_10_92, abih_24_10_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                					
                    		{label: '25.10.1992. - <b style="line-height:200%" class="layer-text">Croat liberated Dubrovnik hinterland</b>', layer: L.featureGroup ([zng_20_09_92, mamac_jug, vrs_25_10_92, hvo_25_10_92, abih_25_10_92, sarajevo_sporazum_13, napad_Sr_20_10_92, obrana_BiH_30_09_92, obrana_Hv_06_10_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					

					]},
					{label: '<div id="onlysel" class="group"></div>'},
		            {label: '<big><b style="line-height:200%" class="layer-text">Bosnia and Herzegovina</b></big> <i>(zoom to feature)</i><hr>', children: [ 
					        {label: '14. - 27.01.1992. - <b style="line-height:200%" class="layer-text">The proclamation of the Croatian communities Usora and Central Bosnia</b>', layer: L.featureGroup ([mamac_Bih, hr_Zajednice_Bih1992, sao_03_01_92, srpske_enklave, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},   
                            {label: '18.03.1992. - <b style="line-height:200%" class="layer-text">Carrington - Cutileiro peace plan</b>', layer: L.featureGroup ([mamac_Bih, srpske_opcine, muslimanske_opcine, hrvatske_opcine, sao_03_01_92, srpske_enklave, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},
							{label: '20.03.1992. - <b style="line-height:200%" class="layer-text">Deployment of forces before the war</b>', layer: L.featureGroup ([zng_01_03_92, mamac_Bih, sarajevo_sporazum_3, srpske_enklave, napad_Sr_20_03_92, sr_zast_17_12_91, hvo_abih_20_03_92, vrs_20_03_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},
				            {label: '04.04.1992. - <b style="line-height:200%" class="layer-text">Start of serbian attack on Bosnia and Herzegovina (Kupres, Banja Luka, Bijeljina)</b>', layer: L.featureGroup ([zng_04_04_92, mamac_Bih, vrs_04_04_92, hvo_abih_04_04_92, sarajevo_sporazum_3, srpske_enklave, napad_Sr_04_04_92, obrana_HvBiH_04_04_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},   				         
							{label: '<div id="onlysel" class="group"></div>'},
						{label: '<big><b style="line-height:200%" class="layer-text">Bosanska Krajina front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
						    {label: '20.03.1992. - <b style="line-height:200%" class="layer-text">Deployment of forces before the war</b>', layer: L.featureGroup ([zng_01_03_92, mamac_boskrajina, sarajevo_sporazum_3, srpske_enklave, napad_Sr_20_03_92, sr_zast_17_12_91, hvo_abih_20_03_92, vrs_20_03_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},
                            {label: '04.04.1992. - <b style="line-height:200%" class="layer-text">Start of serbian attack on Bosnia and Herzegovina</b>', layer: L.featureGroup ([zng_04_04_92, mamac_boskrajina, vrs_04_04_92, hvo_abih_04_04_92, sarajevo_sporazum_3, srpske_enklave, napad_Sr_04_04_92, obrana_HvBiH_04_04_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},
						    {label: '05.05.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_05_05_92, mamac_boskrajina, vrs_05_05_92, hvo_abih_05_05_92, sarajevo_sporazum_3, srpske_enklave, obrana_HvBiH_05_05_92, napad_Sr_05_05_92, obrana_Sr_06_05_92, napad_Hv_06_05_92, napad_HvBiH_05_05_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
                		    {label: '25.05.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_20_05_92, mamac_boskrajina, sarajevo_sporazum_8, srpske_enklave, obrana_Sr_25_05_92, napad_Hv_25_05_92, napad_HvBiH_25_05_92, napad_Sr_25_05_92, obrana_HvBiH_25_05_92, obrana_Sr_23_05_92, sr_zast_17_12_91, vrs_25_05_92, hvo_abih_25_05_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
                		 	{label: '01.06.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_20_05_92, mamac_boskrajina, vrs_01_06_92, hvo_abih_01_06_92, sarajevo_sporazum_10, srpske_enklave, napad_Sr_01_06_92, obrana_HvBiH_01_06_92, napad_HvBiH_01_06_92, obrana_Sr_01_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '13.06.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_20_05_92, mamac_boskrajina, vrs_13_06_92, hvo_abih_13_06_92, sarajevo_sporazum_10, srpske_enklave, napad_Sr_13_06_92, obrana_HvBiH_13_06_92, napad_HvBiH_13_06_92, obrana_Sr_09_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				  ]},
							{label: '<div id="onlysel" class="group"></div>'},
						{label: '<big><b style="line-height:200%" class="layer-text">Kupres front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
                            {label: '04.04.1992. - <b style="line-height:200%" class="layer-text">Start of serbian attack on Bosnia and Herzegovina</b>', layer: L.featureGroup ([zng_04_04_92, mamac_kupres, vrs_04_04_92, hvo_abih_04_04_92, sarajevo_sporazum_3, srpske_enklave, napad_Sr_04_04_92, obrana_HvBiH_04_04_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},
				            {label: '06.04.1992. - <b style="line-height:200%" class="layer-text">Serbian attacks on Kupres</b>', layer: L.featureGroup ([zng_04_04_92, mamac_kupres, vrs_06_04_92, hvo_abih_06_04_92, sarajevo_sporazum_3, srpske_enklave, napad_Sr_04_04_92, obrana_HvBiH_04_04_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
				   		    {label: '07.04.1992. - <b style="line-height:200%" class="layer-text">Serbs occupied Kupres</b>', layer: L.featureGroup ([zng_07_04_92, mamac_kupres, vrs_07_04_92, hvo_abih_07_04_92, sarajevo_sporazum_3, srpske_enklave, napad_Sr_07_04_92, obrana_HvBiH_07_04_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
				         	{label: '11.04.1992. - <b style="line-height:200%" class="layer-text">Serbian attacks on Šuica</b>', layer: L.featureGroup ([zng_07_04_92, mamac_kupres, vrs_11_04_92, hvo_abih_11_04_92, sarajevo_sporazum_3, srpske_enklave, napad_Sr_11_04_92, obrana_HvBiH_11_04_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
                            {label: '23.05.1992. - <b style="line-height:200%" class="layer-text">Serbs occupied Donji Vakuf</b>', layer: L.featureGroup ([zng_20_05_92, mamac_kupres, vrs_23_05_92, hvo_abih_23_05_92, sarajevo_sporazum_7, srpske_enklave, obrana_Sr_22_05_92, napad_Hv_22_05_92, napad_Sr_23_05_92, obrana_HvBiH_23_05_92, napad_HvBiH_23_05_92, obrana_Sr_23_05_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				  	        {label: '28.05.1992. - <b style="line-height:200%" class="layer-text">Serbs retreated from Bugojno</b>', layer: L.featureGroup ([zng_20_05_92, mamac_kupres, vrs_28_05_92, hvo_abih_28_05_92, sarajevo_sporazum_10, srpske_enklave, obrana_Sr_28_05_92, napad_Hv_28_05_92, napad_HvBiH_28_05_92, napad_Sr_25_05_92, obrana_HvBiH_25_05_92, obrana_Sr_23_05_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					

				  ]},
				   			{label: '<div id="onlysel" class="group"></div>'},
				        {label: '<big><b style="line-height:200%" class="layer-text">Eastern Herzegovina front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
				   		    {label: '07.04.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_07_04_92, mamac_ist_hercegovina, vrs_07_04_92, hvo_abih_07_04_92, sarajevo_sporazum_3, srpske_enklave, napad_Sr_07_04_92, obrana_HvBiH_07_04_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
				         	{label: '11.04.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_07_04_92, mamac_ist_hercegovina, vrs_11_04_92, hvo_abih_11_04_92, sarajevo_sporazum_3, srpske_enklave, napad_Sr_11_04_92, obrana_HvBiH_11_04_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
						    {label: '05.05.1992. - <b style="line-height:200%" class="layer-text">Croats began to liberate Dubrovnik hinterland</b>', layer: L.featureGroup ([zng_05_05_92, mamac_ist_hercegovina, vrs_05_05_92, hvo_abih_05_05_92, sarajevo_sporazum_3, srpske_enklave, napad_Sr_05_05_92, obrana_Sr_06_05_92, obrana_HvBiH_05_05_92, napad_Hv_06_05_92, napad_HvBiH_05_05_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
                            {label: '07.05.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_05_05_92, mamac_ist_hercegovina, sarajevo_sporazum_4, srpske_enklave, obrana_Sr_07_05_92, napad_Hv_07_05_92, napad_Sr_07_05_92, obrana_HvBiH_07_05_92, napad_HvBiH_07_05_92, sr_zast_17_12_91, vrs_07_05_92, hvo_abih_07_05_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},   
                		    {label: '22.05.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_20_05_92, mamac_ist_hercegovina, sarajevo_sporazum_6, srpske_enklave, obrana_Sr_22_05_92, napad_Hv_22_05_92, napad_Sr_08_05_92, obrana_HvBiH_22_05_92, napad_HvBiH_22_05_92, sr_zast_17_12_91, vrs_20_05_92, hvo_abih_20_05_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'}, 
                		    {label: '25.05.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_20_05_92, mamac_ist_hercegovina, sarajevo_sporazum_8, srpske_enklave, obrana_Sr_25_05_92, napad_Hv_25_05_92, napad_HvBiH_25_05_92, napad_Sr_25_05_92, obrana_HvBiH_25_05_92, obrana_Sr_23_05_92, sr_zast_17_12_91, vrs_25_05_92, hvo_abih_25_05_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
                		 	{label: '01.06.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_20_05_92, mamac_ist_hercegovina, vrs_01_06_92, hvo_abih_01_06_92, sarajevo_sporazum_10, srpske_enklave, napad_Sr_01_06_92, obrana_HvBiH_01_06_92, napad_HvBiH_01_06_92, obrana_Sr_01_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
						 {label: "<b style='line-height:200%' class='layer-text'>Operation 'Jackal'</b>", children: [ 
	                        {label: '09.06.1992. - <b style="line-height:200%" class="layer-text">Croats liberated places in Herzegovina</b>', layer: L.featureGroup ([zng_20_05_92, mamac_ist_hercegovina, vrs_09_06_92, hvo_abih_09_06_92, sarajevo_sporazum_10, srpske_enklave, napad_HvBiH_09_06_92, obrana_HvBiH_09_06_92, napad_Sr_09_06_92, obrana_Sr_09_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
							{label: '12.06.1992. - <b style="line-height:200%" class="layer-text">Croats deblocked Mostar</b>', layer: L.featureGroup ([zng_20_05_92, mamac_ist_hercegovina, vrs_12_06_92, hvo_abih_12_06_92, sarajevo_sporazum_10, srpske_enklave, napad_Sr_12_06_92, obrana_HvBiH_12_06_92, napad_HvBiH_13_06_92, obrana_Sr_09_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '13.06.1992. - <b style="line-height:200%" class="layer-text">Croats liberated outskirts of Mostar</b>', layer: L.featureGroup ([zng_20_05_92, mamac_ist_hercegovina, vrs_13_06_92, hvo_abih_13_06_92, sarajevo_sporazum_10, srpske_enklave, napad_Sr_13_06_92, obrana_HvBiH_13_06_92, napad_HvBiH_13_06_92, obrana_Sr_09_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '16.06.1992. - <b style="line-height:200%" class="layer-text">Croats liberated places in Herzegovina</b>', layer: L.featureGroup ([zng_16_06_92, mamac_ist_hercegovina, vrs_16_06_92, hvo_16_06_92, abih_16_06_92, sarajevo_sporazum_10, srpske_enklave, obrana_Sr_16_06_92, obrana_BiH_16_06_92, obrana_Hv_16_06_92, napad_Sr_16_06_92, napad_Hv_16_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '20.06.1992. - <b style="line-height:200%" class="layer-text">Croats liberated places in Herzegovina</b>', layer: L.featureGroup ([zng_16_06_92, mamac_ist_hercegovina, vrs_20_06_92, hvo_20_06_92, abih_20_06_92, sarajevo_sporazum_11, srpske_enklave, obrana_BiH_20_06_92, obrana_Hv_20_06_92, napad_Sr_20_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},							         	
				         	{label: '08.07.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_16_06_92, mamac_ist_hercegovina, vrs_05_07_92, hvo_05_07_92, abih_05_07_92, sarajevo_sporazum_11, srpske_enklave, napad_Hv_05_07_92, napad_Sr_05_07_92, obrana_Hv_05_07_92, obrana_BiH_20_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '12.11.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_ist_hercegovina, vrs_12_11_92, hvo_12_11_92, abih_12_11_92, sarajevo_sporazum_13, napad_Sr_12_11_92, obrana_Hv_12_11_92, obrana_BiH_30_09_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '20.11.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_ist_hercegovina, vrs_20_11_92, hvo_20_11_92, abih_20_11_92, sarajevo_sporazum_13, napad_Sr_20_11_92, obrana_Hv_12_11_92, obrana_BiH_20_11_92, napad_BiH_20_11_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
						 ]},  
				  ]},	
				   			{label: '<div id="onlysel" class="group"></div>'},
				        {label: '<big><b style="line-height:200%" class="layer-text">Eastern Bosnia front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
				         	{label: '11.04.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_07_04_92, mamac_Ist_Bosna, vrs_11_04_92, hvo_abih_11_04_92, sarajevo_sporazum_3, srpske_enklave, napad_Sr_11_04_92, obrana_HvBiH_11_04_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
						    {label: '05.05.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_05_05_92, mamac_Ist_Bosna, vrs_05_05_92, hvo_abih_05_05_92, sarajevo_sporazum_3, srpske_enklave, obrana_HvBiH_05_05_92, napad_Sr_05_05_92, obrana_Sr_06_05_92, napad_Hv_06_05_92, napad_HvBiH_05_05_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
                            {label: '07.05.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_05_05_92, mamac_Ist_Bosna, sarajevo_sporazum_4, srpske_enklave, obrana_Sr_07_05_92, napad_Hv_07_05_92, napad_Sr_07_05_92, obrana_HvBiH_07_05_92, napad_HvBiH_07_05_92, sr_zast_17_12_91, vrs_07_05_92, hvo_abih_07_05_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},   
				         	{label: '08.05.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_05_05_92, mamac_Ist_Bosna, vrs_08_05_92, hvo_abih_08_05_92, sarajevo_sporazum_4, srpske_enklave, obrana_Sr_07_05_92, napad_Hv_07_05_92, napad_Sr_08_05_92, obrana_HvBiH_07_05_92, napad_HvBiH_08_05_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
				   	     	{label: '11.05.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_05_05_92, mamac_Ist_Bosna, vrs_11_05_92, hvo_abih_11_05_92, sarajevo_sporazum_4, srpske_enklave, obrana_Sr_07_05_92, napad_Hv_07_05_92, napad_Sr_08_05_92, obrana_HvBiH_07_05_92, napad_HvBiH_11_05_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},  
                            {label: '25.05.1992. - <b style="line-height:200%" class="layer-text">Muslims captured Bradina</b>', layer: L.featureGroup ([zng_20_05_92, mamac_Ist_Bosna, vrs_25_05_92, hvo_abih_25_05_92, sarajevo_sporazum_8, srpske_enklave, obrana_Sr_25_05_92, napad_Hv_25_05_92, napad_HvBiH_25_05_92, napad_Sr_25_05_92, obrana_HvBiH_25_05_92, obrana_Sr_23_05_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
                		 	{label: '01.06.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_20_05_92, mamac_Ist_Bosna, vrs_01_06_92, hvo_abih_01_06_92, sarajevo_sporazum_10, srpske_enklave, napad_Sr_01_06_92, obrana_HvBiH_01_06_92, napad_HvBiH_01_06_92, obrana_Sr_01_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '12.06.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_20_05_92, mamac_Ist_Bosna, vrs_12_06_92, hvo_abih_12_06_92, sarajevo_sporazum_10, srpske_enklave, napad_Sr_12_06_92, obrana_HvBiH_12_06_92, napad_HvBiH_13_06_92, obrana_Sr_09_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '25.07.1992. - <b style="line-height:200%" class="layer-text">Muslims deblocked Goražde</b>', layer: L.featureGroup ([zng_15_07_92, mamac_Ist_Bosna, vrs_25_07_92, hvo_25_07_92, abih_25_07_92, sarajevo_sporazum_11, napad_Sr_25_07_92, napad_BiH_25_07_92, obrana_BiH_20_06_92, obrana_Hv_15_07_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '01.08.1992. - <b style="line-height:200%" class="layer-text">Muslims liberated places near Goražde</b>', layer: L.featureGroup ([mamac_Ist_Bosna, vrs_01_08_92, hvo_01_08_92, abih_01_08_92, sarajevo_sporazum_11, napad_Sr_01_08_92, napad_BiH_01_08_92, obrana_Hv_15_07_92, obrana_BiH_01_08_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '25.08.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_15_07_92, mamac_Ist_Bosna, vrs_25_08_92, hvo_25_08_92, abih_25_08_92, sarajevo_sporazum_11, napad_BiH_25_08_92, obrana_BiH_25_08_92, obrana_Hv_25_08_92, napad_Sr_25_08_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '20.09.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_20_09_92, mamac_Ist_Bosna, vrs_20_09_92, hvo_20_09_92, abih_20_09_92, sarajevo_sporazum_11, napad_Sr_20_09_92, obrana_BiH_25_08_92, obrana_Hv_25_08_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '20.12.1992. - <b style="line-height:200%" class="layer-text">Muslims liberated places in eastern Bosnia</b>', layer: L.featureGroup ([zng_02_11_92, mamac_Ist_Bosna, vrs_20_12_92, hvo_20_12_92, abih_20_12_92, sarajevo_sporazum_13, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					

				   ]},
				   		    {label: '<div id="onlysel" class="group"></div>'},
				        {label: '<big><b style="line-height:200%" class="layer-text">Kotor Varoš and Jajce front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
	                        {label: '28.05.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_20_05_92, mamac_jajce, vrs_28_05_92, hvo_abih_28_05_92, sarajevo_sporazum_10, srpske_enklave, obrana_Sr_28_05_92, napad_Hv_28_05_92, napad_HvBiH_28_05_92, napad_Sr_25_05_92, obrana_HvBiH_25_05_92, obrana_Sr_23_05_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
	                        {label: '01.06.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_20_05_92, mamac_jajce, vrs_01_06_92, hvo_abih_01_06_92, sarajevo_sporazum_10, srpske_enklave, napad_Sr_01_06_92, obrana_HvBiH_01_06_92, napad_HvBiH_01_06_92, obrana_Sr_01_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '12.06.1992. - <b style="line-height:200%" class="layer-text">Serbs occupied Kotor  Varoš</b>', layer: L.featureGroup ([zng_20_05_92, mamac_jajce, vrs_12_06_92, hvo_abih_12_06_92, sarajevo_sporazum_10, srpske_enklave, napad_Sr_12_06_92, obrana_HvBiH_12_06_92, napad_HvBiH_13_06_92, obrana_Sr_09_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '13.06.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_20_05_92, mamac_jajce, vrs_13_06_92, hvo_abih_13_06_92, sarajevo_sporazum_10, srpske_enklave, napad_Sr_13_06_92, obrana_HvBiH_13_06_92, napad_HvBiH_13_06_92, obrana_Sr_09_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '25.08.1992. - <b style="line-height:200%" class="layer-text">Serbs atacked Jajce</b>', layer: L.featureGroup ([zng_15_07_92, mamac_jajce, vrs_25_08_92, hvo_25_08_92, abih_25_08_92, sarajevo_sporazum_11, napad_BiH_25_08_92, obrana_BiH_25_08_92, obrana_Hv_25_08_92, napad_Sr_25_08_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '20.09.1992. - <b style="line-height:200%" class="layer-text">Serbs are atacking Jajce</b>', layer: L.featureGroup ([zng_20_09_92, mamac_jajce, vrs_20_09_92, hvo_20_09_92, abih_20_09_92, sarajevo_sporazum_11, napad_Sr_20_09_92, obrana_BiH_25_08_92, obrana_Hv_25_08_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '29.10.1992. - <b style="line-height:200%" class="layer-text">Serbs are atacking Jajce</b>', layer: L.featureGroup ([zng_20_09_92, mamac_jajce, vrs_29_10_92, hvo_29_10_92, abih_29_10_92, sarajevo_sporazum_13, napad_Sr_29_10_92, obrana_BiH_30_09_92, obrana_Hv_06_10_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '02.11.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_jajce, vrs_02_11_92, hvo_02_11_92, abih_02_11_92, sarajevo_sporazum_13, napad_Sr_02_11_92, obrana_Hv_06_10_92, obrana_BiH_30_09_92, napad_Hv_02_11_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '12.11.1992. - <b style="line-height:200%" class="layer-text">Serbs occupied Jajce</b>', layer: L.featureGroup ([zng_02_11_92, mamac_jajce, vrs_12_11_92, hvo_12_11_92, abih_12_11_92, sarajevo_sporazum_13, sr_zast_17_12_91, napad_Sr_12_11_92, obrana_Hv_12_11_92, obrana_BiH_30_09_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
                            {label: '20.11.1992. - <b style="line-height:200%" class="layer-text">Serbian occupied places near Jajce</b>', layer: L.featureGroup ([zng_02_11_92, mamac_jajce, vrs_20_11_92, hvo_20_11_92, abih_20_11_92, sarajevo_sporazum_13, napad_Sr_20_11_92, obrana_Hv_12_11_92, obrana_BiH_20_11_92, napad_BiH_20_11_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '20.12.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_jajce, vrs_20_12_92, hvo_20_12_92, abih_20_12_92, sarajevo_sporazum_13, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				    
				  ]},
				  		    {label: '<div id="onlysel" class="group"></div>'},
				        {label: '<big><b style="line-height:200%" class="layer-text">Posavina front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
                            {label: '04.04.1992. - <b style="line-height:200%" class="layer-text">Start of serbian attack on Bosnia and Herzegovina</b>', layer: L.featureGroup ([zng_04_04_92, mamac_Posavina, vrs_04_04_92, hvo_abih_04_04_92, sarajevo_sporazum_3, srpske_enklave, napad_Sr_04_04_92, obrana_HvBiH_04_04_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},
				         	{label: '11.04.1992. - <b style="line-height:200%" class="layer-text">Serbs occupied Modriča</b>', layer: L.featureGroup ([zng_07_04_92, mamac_Posavina, vrs_11_04_92, hvo_abih_11_04_92, sarajevo_sporazum_3, srpske_enklave, napad_Sr_11_04_92, obrana_HvBiH_11_04_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
						    {label: '05.05.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_05_05_92, mamac_Posavina, vrs_05_05_92, hvo_abih_05_05_92, sarajevo_sporazum_3, srpske_enklave, obrana_HvBiH_05_05_92, napad_Sr_05_05_92, obrana_Sr_06_05_92, napad_Hv_06_05_92, napad_HvBiH_05_05_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
				         	{label: '07.05.1992. - <b style="line-height:200%" class="layer-text">Serbian atacks in Bosnian Posavina</b>', layer: L.featureGroup ([zng_05_05_92, mamac_Posavina, vrs_07_05_92, hvo_abih_07_05_92, sarajevo_sporazum_4, obrana_Sr_07_05_92, napad_Hv_07_05_92, napad_Sr_07_05_92, obrana_HvBiH_07_05_92, napad_HvBiH_07_05_92, srpske_enklave, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
				         	{label: '08.05.1992. - <b style="line-height:200%" class="layer-text">Serbian atacks in Posavina</b>', layer: L.featureGroup ([zng_05_05_92, mamac_Posavina, vrs_08_05_92, hvo_abih_08_05_92, sarajevo_sporazum_4, srpske_enklave, obrana_Sr_07_05_92, napad_Hv_07_05_92, napad_Sr_08_05_92, obrana_HvBiH_07_05_92, napad_HvBiH_08_05_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
				         	{label: '11.05.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_05_05_92, mamac_Posavina, vrs_11_05_92, hvo_abih_11_05_92, sarajevo_sporazum_4, srpske_enklave, obrana_Sr_07_05_92, napad_Hv_07_05_92, napad_Sr_08_05_92, obrana_HvBiH_07_05_92, napad_HvBiH_11_05_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},  
                            {label: '20.05.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_20_05_92, mamac_Posavina, vrs_20_05_92, hvo_abih_20_05_92, sarajevo_sporazum_5, srpske_enklave, obrana_Sr_07_05_92, napad_Hv_07_05_92, napad_Sr_08_05_92, napad_HvBiH_22_05_92, obrana_HvBiH_22_05_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
                            {label: '25.05.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_20_05_92, mamac_Posavina, vrs_25_05_92, hvo_abih_25_05_92, sarajevo_sporazum_8, srpske_enklave, obrana_Sr_25_05_92, napad_Hv_25_05_92, napad_HvBiH_25_05_92, napad_Sr_25_05_92, obrana_HvBiH_25_05_92, obrana_Sr_23_05_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
	                        {label: '01.06.1992. - <b style="line-height:200%" class="layer-text">Croats liberated Modriča</b>', layer: L.featureGroup ([zng_20_05_92, mamac_Posavina, vrs_01_06_92, hvo_abih_01_06_92, sarajevo_sporazum_10, srpske_enklave, napad_Sr_01_06_92, obrana_HvBiH_01_06_92, napad_HvBiH_01_06_92, obrana_Sr_01_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
	                        {label: '09.06.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_20_05_92, mamac_Posavina, vrs_09_06_92, hvo_abih_09_06_92, sarajevo_sporazum_10, srpske_enklave, napad_HvBiH_09_06_92, obrana_HvBiH_09_06_92, napad_Sr_09_06_92, obrana_Sr_09_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '13.06.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_20_05_92, mamac_Posavina, vrs_13_06_92, hvo_abih_13_06_92, sarajevo_sporazum_10, srpske_enklave, napad_Sr_13_06_92, obrana_HvBiH_13_06_92, napad_HvBiH_13_06_92, obrana_Sr_09_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '16.06.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_16_06_92, mamac_Posavina, vrs_16_06_92, hvo_16_06_92, abih_16_06_92, sarajevo_sporazum_10, srpske_enklave, obrana_Sr_16_06_92, obrana_BiH_16_06_92, obrana_Hv_16_06_92, napad_Sr_16_06_92, napad_Hv_16_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '20.06.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_16_06_92, mamac_Posavina, vrs_20_06_92, hvo_20_06_92, abih_20_06_92, sarajevo_sporazum_11, srpske_enklave, obrana_BiH_20_06_92, obrana_Hv_20_06_92, napad_Sr_20_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '26.06.1992. - <b style="line-height:200%" class="layer-text">Serbs joined forces in Posavina</b>', layer: L.featureGroup ([zng_16_06_92, mamac_Posavina, vrs_26_06_92, hvo_26_06_92, abih_26_06_92, sarajevo_sporazum_11, srpske_enklave, napad_Sr_26_06_92, obrana_BiH_20_06_92, obrana_Hv_20_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '28.06.1992. - <b style="line-height:200%" class="layer-text">Serbs again occupied Modriča</b>', layer: L.featureGroup ([zng_16_06_92, mamac_Posavina, vrs_28_06_92, hvo_28_06_92, abih_28_06_92, sarajevo_sporazum_11, srpske_enklave, napad_Sr_28_06_92, obrana_BiH_20_06_92, obrana_Hv_20_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '01.07.1992. - <b style="line-height:200%" class="layer-text">Serbs atacked Derventa</b>', layer: L.featureGroup ([zng_16_06_92, mamac_Posavina, vrs_01_07_92, hvo_01_07_92, abih_01_07_92, sarajevo_sporazum_11, napad_Sr_01_07_92, obrana_BiH_20_06_92, obrana_Hv_01_07_92, srpske_enklave, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '05.07.1992. - <b style="line-height:200%" class="layer-text">Serbs occupied Derventa</b>', layer: L.featureGroup ([zng_16_06_92, mamac_Posavina, vrs_05_07_92, hvo_05_07_92, abih_05_07_92, sarajevo_sporazum_11, srpske_enklave, sr_zast_17_12_91, napad_Hv_05_07_92, napad_Sr_05_07_92, obrana_Hv_05_07_92, obrana_BiH_20_06_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '12.07.1992. - <b style="line-height:200%" class="layer-text">Serbian atacks in Posavina</b>', layer: L.featureGroup ([zng_16_06_92, mamac_Posavina, vrs_12_07_92, hvo_12_07_92, abih_12_07_92, sarajevo_sporazum_11, napad_Sr_12_07_92, obrana_Hv_05_07_92, obrana_BiH_20_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '15.07.1992. - <b style="line-height:200%" class="layer-text">Serbs occupied Odžak</b>', layer: L.featureGroup ([zng_15_07_92, mamac_Posavina, vrs_15_07_92, hvo_15_07_92, abih_15_07_92, sarajevo_sporazum_11, napad_Sr_15_07_92, obrana_BiH_20_06_92, obrana_Hv_15_07_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '19.07.1992. - <b style="line-height:200%" class="layer-text">Serbian atacks on Bosanski Brod</b>', layer: L.featureGroup ([zng_15_07_92, mamac_Posavina, vrs_19_07_92, hvo_19_07_92, abih_19_07_92, sarajevo_sporazum_11, napad_Sr_19_07_92, napad_BiH_19_07_92, obrana_BiH_20_06_92, obrana_Hv_15_07_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '01.08.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_15_07_92, mamac_Posavina, vrs_01_08_92, hvo_01_08_92, abih_01_08_92, sarajevo_sporazum_11, sr_zast_17_12_91, napad_Sr_01_08_92, napad_BiH_01_08_92, obrana_BiH_01_08_92, obrana_Hv_15_07_92, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '25.08.1992. - <b style="line-height:200%" class="layer-text">Serbs atacked Jajce</b>', layer: L.featureGroup ([zng_15_07_92, mamac_Posavina, vrs_25_08_92, hvo_25_08_92, abih_25_08_92, sarajevo_sporazum_11, napad_BiH_25_08_92, obrana_BiH_25_08_92, obrana_Hv_25_08_92, napad_Sr_25_08_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '20.09.1992. - <b style="line-height:200%" class="layer-text">Serbian atacks on Bosanski Brod and Jajce</b>', layer: L.featureGroup ([zng_20_09_92, mamac_Posavina, vrs_20_09_92, hvo_20_09_92, abih_20_09_92, sarajevo_sporazum_11, napad_Sr_20_09_92, obrana_BiH_25_08_92, obrana_Hv_25_08_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '30.09.1992. - <b style="line-height:200%" class="layer-text">Serbian atacks on Bosanski Brod</b>', layer: L.featureGroup ([zng_20_09_92, mamac_Posavina, vrs_30_09_92, hvo_30_09_92, abih_30_09_92, sarajevo_sporazum_11, napad_Sr_30_09_92, obrana_BiH_30_09_92, obrana_Hv_25_08_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '05.10.1992. - <b style="line-height:200%" class="layer-text">Serbian atacks on Bosanski Brod</b>', layer: L.featureGroup ([zng_20_09_92, mamac_Posavina, vrs_05_10_92, hvo_05_10_92, abih_05_10_92, sarajevo_sporazum_11, napad_Sr_05_10_92,  obrana_BiH_30_09_92, obrana_Hv_25_08_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '06.10.1992. - <b style="line-height:200%" class="layer-text">Serbs occupied Bosanski Brod</b>', layer: L.featureGroup ([zng_20_09_92, mamac_Posavina, vrs_06_10_92, hvo_06_10_92, abih_06_10_92, sarajevo_sporazum_11, napad_Sr_06_10_92, obrana_BiH_30_09_92, obrana_Hv_06_10_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					

				  ]},
				  		    {label: '<div id="onlysel" class="group"></div>'},
				        {label: '<big><b style="line-height:200%" class="layer-text">Sarajevo front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
                            {label: '04.04.1992. - <b style="line-height:200%" class="layer-text">Start of serbian attack on Bosnia and Herzegovina</b>', layer: L.featureGroup ([zng_04_04_92, mamac_Sarajevo, vrs_04_04_92, hvo_abih_04_04_92, sarajevo_sporazum_3, srpske_enklave, napad_Sr_04_04_92, obrana_HvBiH_04_04_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},
				            {label: '06.04.1992. - <b style="line-height:200%" class="layer-text">Serbs atacks on Kupres</b>', layer: L.featureGroup ([zng_04_04_92, mamac_Sarajevo, vrs_06_04_92, hvo_abih_06_04_92, sarajevo_sporazum_3, srpske_enklave, napad_Sr_04_04_92, obrana_HvBiH_04_04_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
						    {label: '05.05.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_05_05_92, mamac_Sarajevo, vrs_05_05_92, hvo_abih_05_05_92, sarajevo_sporazum_3, srpske_enklave, obrana_HvBiH_05_05_92, napad_Sr_05_05_92, obrana_Sr_06_05_92, napad_Hv_06_05_92, napad_HvBiH_05_05_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},                
                            {label: '23.05.1992. - <b style="line-height:200%" class="layer-text">Serbs occupied Donji Vakuf</b>', layer: L.featureGroup ([zng_20_05_92, mamac_Sarajevo, vrs_23_05_92, hvo_abih_23_05_92, sarajevo_sporazum_7, srpske_enklave, napad_Sr_23_05_92, obrana_HvBiH_23_05_92, napad_HvBiH_23_05_92, obrana_Sr_23_05_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
	                        {label: '09.06.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_20_05_92, mamac_Sarajevo, vrs_09_06_92, hvo_abih_09_06_92, sarajevo_sporazum_10, srpske_enklave, napad_HvBiH_09_06_92, obrana_HvBiH_09_06_92, napad_Sr_09_06_92, obrana_Sr_09_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				         	{label: '16.06.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_16_06_92, mamac_Sarajevo, vrs_16_06_92, hvo_16_06_92, abih_16_06_92, sarajevo_sporazum_10, srpske_enklave, obrana_Sr_16_06_92, obrana_BiH_16_06_92, obrana_Hv_16_06_92, napad_Sr_16_06_92, napad_Hv_16_06_92, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
							{label: '20.12.1992. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_Sarajevo, vrs_20_12_92, hvo_20_12_92, abih_20_12_92, sarajevo_sporazum_13, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},					
				    
				  ]},
				  ]},
				  	    {label: '<div id="onlysel" class="group"></div>'},
				   {label: '<big><b style="line-height:200%" class="layer-text">Bosnia and Herzegovina</b></big> <i>(zoom to feature)</i><hr>', children: [ 
					        {label: 'End of 1992 <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_Bih, vrs_01_01_93, hvo_01_01_93, abih_01_01_93, sarajevo_sporazum_13, sr_zast_17_12_91, hrpolit_1992, hrnapad_1992, sernapad_1992]), radioGroup: 'bc'},   				  
					]},
                    ]},				
        	        {label: '<div id="onlysel" class="group"></div>'},
                    {label: '<small style="line-height:150%" class="source-text">Source:' + '<br>' + '1. Marijan, D.(2016) The Homeland War. Zagreb: Croatian Institute of History and Despot infinitus.' + '<br>' +  				            
				            '2. Nazor, A.(2011) A Greater-Serbian aggression against Croatia in 1990s. Zagreb: Croatian Homeland War Memorial and Documentation Centre.' + '<br>' + 
							'3. Marijan, D., Nazor, A., Jelić, Z. M., Kolakušić, P.(2020) The Croatian War of Independence and crimes commited against Croats in Bosnia and Herzegovina 1991 - 1995. Zagreb: Croatian Homeland War Memorial and Documentation Centre and Croatian bells association.</small><hr style="height:0.5em; background-color:gray">'},	
                  
				{label: '<big><b style="line-height:200%" class="sidebar-text">1993</b></big><hr>', children: [ 
		            {label: '<div id="onlysel" class="group"></div>'},
		            {label: '<big><b style="line-height:200%" class="layer-text">Dalmacija front</b></big> <i>(zoom to feature)</i>', children: [ 
				        {label: "<b style='line-height:200%' class='layer-text'>Operation 'Pirate'(Maslenica)</b>", children: [ 
					        {label: "22.01.1993. - <b style='line-height:200%' class='layer-text'>Start of operation</b>", layer: L.featureGroup ([zng_02_11_92, mamac_Zadar, sao_22_01_93, vrs_12_01_93, hvo_12_01_93, abih_12_01_93, obrana_Sr_22_01_93, napad_Hv_22_01_93, napad_Sr_12_01_93, napad_Hv_12_01_93, napad_BiH_12_01_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},
					        {label: '27.01.1993. - <b style="line-height:200%" class="layer-text">The Croatian Army cleaned the area from Zadar to Maslenica</b>', layer: L.featureGroup ([zng_02_11_92, mamac_Zadar, sao_27_01_93, vrs_25_01_93, hvo_25_01_93, abih_25_01_93, sr_zast_17_12_91, obrana_Hv_27_01_93, napad_Sr_27_01_93, napad_Hv_25_01_93, napad_Sr_28_01_93, obrana_Sr_27_01_93, napad_Hv_27_01_93, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},                
				            ]},
				        {label: '<b>Peruća dam</b>', children: [ 
					        {label: '27.01.1993. - <b style="line-height:200%" class="layer-text">Croatian forces move into action to take the control over the Peruća dam</b>', layer: L.featureGroup ([zng_02_11_92, mamac_Peruca, sao_27_01_93, vrs_25_01_93, hvo_25_01_93, abih_25_01_93, obrana_Hv_27_01_93, napad_Sr_27_01_93, napad_Hv_25_01_93, napad_Sr_28_01_93, obrana_Sr_27_01_93, napad_Hv_27_01_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},
						    {label: '28.01.1993. - <b style="line-height:200%" class="layer-text">Croatian forces seized the Peruća dam</b>', layer: L.featureGroup ([zng_02_11_92, mamac_Peruca, sao_28_01_93, vrs_28_01_93, hvo_28_01_93, abih_28_01_93, napad_Sr_28_01_93, obrana_Hv_27_01_93, napad_Sr_27_01_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},
				        ]}, 
				    ]},
			        {label: '<div id="onlysel" class="group"></div>'},
		            {label: '<big><b style="line-height:200%" class="layer-text">Lika front</b></big> <i>(zoom to feature)</i>', children: [ 
                        {label: "<b style='line-height:200%' class='layer-text'>Operation 'Medak pocket'</b>", children: [ 
					        {label: "Dawn, 09.09.1993. - <b style='line-height:200%' class='layer-text'>Start of the operation</b>", layer: L.featureGroup ([mamac_Medak, sao_28_01_93, vrs_24_08_93, hvo_24_08_93, abih_24_08_93, obrana_Sr_09_09_93, napad_Hv_29_09_93, napad_BiH_24_08_93, napad_Hv_24_08_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},
					        {label: 'End of the day, 09.09.1993. - <b style="line-height:200%" class="layer-text">The Croatian Army liberated villages in Gospić area</b>', layer: L.featureGroup ([mamac_Medak, sao_09_09_93, vrs_24_08_93, hvo_24_08_93, abih_24_08_93, napad_BiH_24_08_93, napad_Hv_24_08_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},                
				        ]},
						]},
						{label: '<div id="onlysel" class="group"></div>'},
						{label: '<big><b style="line-height:200%" class="layer-text">Bosnia and Herzegovina</b></big> <i>(zoom to feature)</i><hr>', children: [ 
					        {label: 'Beginning of 1993 - <b style="line-height:200%" class="layer-text">Situation on the battlefield</b>', layer: L.featureGroup ([mamac_Bih, vrs_01_01_93, hvo_01_01_93, abih_01_01_93, sarajevo_sporazum_13, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
                            {label: 'Beginning of 1993 - <b style="line-height:200%" class="layer-text">Vance - Owen peace plan</b>', layer: L.featureGroup ([mamac_Bih, hrv_provincije, mus_provincije, ser_provincije, sarajevo_provincija, sarajevo_sporazum_13, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
                            {label: '20.08.1993. - <b style="line-height:200%" class="layer-text">Owen - Stoltenberg  peace plan</b>', layer: L.featureGroup ([mamac_Bih, hrv_republika, mus_republika, ser_republika, sarajevo_republika, sao_28_01_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							 {label: '<div id="onlysel" class="group"></div>'},
							  {label: '<big><b style="line-height:200%" class="layer-text">Uskoplje (Gornji Vakuf) front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
					            {label: 'Beginning of 1993 <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_Uskoplje, vrs_01_01_93, hvo_01_01_93, abih_01_01_93, sarajevo_sporazum_13, napad_Hv_01_01_93, napad_BiH_01_01_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
				                {label: '12.01.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_Uskoplje, vrs_12_01_93, hvo_12_01_93, abih_12_01_93, sarajevo_sporazum_13, napad_Sr_12_01_93, napad_Hv_12_01_93, napad_BiH_12_01_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
				                {label: '25.01.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_Uskoplje, vrs_25_01_93, hvo_25_01_93, abih_25_01_93, sao_22_01_93, napad_Hv_25_01_93, napad_Sr_28_01_93, obrana_Sr_22_01_93, napad_Hv_22_01_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
				   				{label: '07.06.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_Uskoplje, vrs_07_06_93, hvo_07_06_93, abih_07_06_93, sao_28_01_93, napad_BiH_07_06_93, napad_Hv_07_06_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
 				                {label: '03.07.1993. - <b style="line-height:200%" class="layer-text">Muslims cut off connection Busovača - Uskoplje</b>', layer: L.featureGroup ([zng_14_06_93, mamac_Uskoplje, vrs_03_07_93, hvo_03_07_93, abih_03_07_93, sao_28_01_93, napad_Sr_03_07_93, napad_BiH_03_07_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '22.07.1993. - <b style="line-height:200%" class="layer-text">Muslims attack Bugojno</b>', layer: L.featureGroup ([zng_14_06_93, mamac_Uskoplje, vrs_22_07_93, hvo_22_07_93, abih_22_07_93, sao_28_01_93, napad_BiH_22_07_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '24.07.1993. - <b style="line-height:200%" class="layer-text">Muslims attack Bugojno</b>', layer: L.featureGroup ([zng_14_06_93, mamac_Uskoplje, vrs_24_07_93, hvo_24_07_93, abih_24_07_93, sao_28_01_93, napad_BiH_24_07_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '25.07.1993. - <b style="line-height:200%" class="layer-text">Muslims attack Bugojno</b>', layer: L.featureGroup ([zng_14_06_93, mamac_Uskoplje, vrs_25_07_93, hvo_25_07_93, abih_25_07_93, sao_28_01_93, napad_Sr_25_07_93, napad_BiH_25_07_93, napad_Hv_25_07_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '29.07.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Uskoplje, vrs_29_07_93, hvo_29_07_93, abih_29_07_93, sao_28_01_93, napad_BiH_29_07_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '31.07.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Uskoplje, vrs_31_07_93, hvo_31_07_93, abih_31_07_93, sao_28_01_93, napad_Sr_31_07_93, napad_BiH_31_07_93, napad_Hv_31_07_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '02.08.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Uskoplje, vrs_02_08_93, hvo_02_08_93, abih_02_08_93, sao_28_01_93, napad_BiH_02_08_93, napad_Hv_02_08_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '21.10.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Uskoplje, vrs_21_10_93, hvo_21_10_93, abih_21_10_93, fabdic_21_10_93, sao_09_09_93, napad_Hv_21_10_93, napad_BiH_21_10_93, napad_Fabdic_21_10_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '02.11.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Uskoplje, vrs_02_11_93, hvo_02_11_93, abih_02_11_93, fabdic_02_11_93, sao_09_09_93, napad_Sr_02_11_93, napad_BiH_02_11_93, napad_Fabdic_02_11_93, napad_Hv_02_11_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '30.11.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_30_11_93, mamac_Uskoplje, vrs_30_11_93, hvo_30_11_93, abih_30_11_93, fabdic_30_11_93, sao_09_09_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
				   ]},
					          {label: '<div id="onlysel" class="group"></div>'},
					          {label: '<big><b style="line-height:200%" class="layer-text">Middle Bosnia front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
				                {label: '12.01.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_Sred_Bosna, vrs_12_01_93, hvo_12_01_93, abih_12_01_93, sarajevo_sporazum_13, napad_Sr_12_01_93, napad_Hv_12_01_93, napad_BiH_12_01_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
				                {label: '25.01.1993. - <b style="line-height:200%" class="layer-text">Muslims cut off connection Busovača - Kiseljak</b>', layer: L.featureGroup ([zng_02_11_92, mamac_Sred_Bosna, vrs_25_01_93, hvo_25_01_93, abih_25_01_93, sao_22_01_93, napad_Hv_25_01_93, obrana_Sr_22_01_93, napad_Hv_22_01_93, napad_Sr_28_01_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
				                {label: '28.01.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_Sred_Bosna, vrs_28_01_93, hvo_28_01_93, abih_28_01_93, sao_28_01_93, napad_Sr_28_01_93, obrana_Hv_27_01_93, napad_Sr_27_01_93, napad_Hv_28_01_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
				    	        {label: '13.04.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_Sred_Bosna, vrs_13_04_93, hvo_13_04_93, abih_13_04_93, sao_28_01_93, napad_Sr_13_04_93, napad_Hv_13_04_93, napad_BiH_13_04_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
				                {label: '18.04.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_Sred_Bosna, vrs_18_04_93, hvo_18_04_93, abih_18_04_93, sao_28_01_93, napad_BiH_18_04_93, napad_Hv_18_04_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
				                {label: '25.04.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_Sred_Bosna, vrs_25_04_93, hvo_25_04_93, abih_25_04_93, sao_28_01_93, napad_Sr_25_04_93, napad_BiH_25_04_93, napad_Hv_25_04_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
				                {label: '07.06.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_Sred_Bosna, vrs_07_06_93, hvo_07_06_93, abih_07_06_93, sao_28_01_93, napad_BiH_07_06_93, napad_Hv_07_06_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
				                {label: '14.06.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Sred_Bosna, vrs_14_06_93, hvo_14_06_93, abih_14_06_93, sao_28_01_93, napad_BiH_14_06_93, napad_Hv_14_06_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
				                {label: '30.06.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Sred_Bosna, vrs_30_06_93, hvo_30_06_93, abih_30_06_93, sao_28_01_93, napad_BiH_30_06_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
				                {label: '03.07.1993. - <b style="line-height:200%" class="layer-text">Muslims cut off connection Busovača - Uskoplje</b>', layer: L.featureGroup ([zng_14_06_93, mamac_Sred_Bosna, vrs_03_07_93, hvo_03_07_93, abih_03_07_93, sao_28_01_93, napad_Sr_03_07_93, napad_BiH_03_07_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '17.07.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Sred_Bosna, vrs_17_07_93, hvo_17_07_93, abih_17_07_93, sao_28_01_93, napad_BiH_17_07_93, napad_Hv_17_07_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '29.07.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Sred_Bosna, vrs_29_07_93, hvo_29_07_93, abih_29_07_93, sao_28_01_93, napad_BiH_29_07_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '24.08.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Sred_Bosna, vrs_24_08_93, hvo_24_08_93, abih_24_08_93, sao_28_01_93, napad_BiH_24_08_93, napad_Hv_24_08_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '14.09.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Sred_Bosna, vrs_14_09_93, hvo_14_09_93, abih_14_09_93, sao_09_09_93, napad_BiH_14_09_93, napad_Hv_14_09_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '21.10.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Sred_Bosna, vrs_21_10_93, hvo_21_10_93, abih_21_10_93, fabdic_21_10_93, sao_09_09_93, napad_Hv_21_10_93, napad_BiH_21_10_93, napad_Fabdic_21_10_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '02.11.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Sred_Bosna, vrs_02_11_93, hvo_02_11_93, abih_02_11_93, fabdic_02_11_93, sao_09_09_93, napad_Sr_02_11_93, napad_BiH_02_11_93, napad_Fabdic_02_11_93, napad_Hv_02_11_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '03.11.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Sred_Bosna, vrs_03_11_93, hvo_03_11_93, abih_03_11_93, fabdic_03_11_93, sao_09_09_93, napad_Sr_02_11_93, napad_Fabdic_02_11_93, napad_BiH_03_11_93, napad_Hv_02_11_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   

					]},
					          {label: '<div id="onlysel" class="group"></div>'},
					          {label: '<big><b style="line-height:200%" class="layer-text">Eastern Bosnia front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
				                {label: 'Beginning of 1993 <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_Ist_Bosna, vrs_01_01_93, hvo_01_01_93, abih_01_01_93, sarajevo_sporazum_13, napad_Hv_01_01_93, napad_BiH_01_01_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
								{label: '12.01.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_Ist_Bosna, vrs_12_01_93, hvo_12_01_93, abih_12_01_93, sarajevo_sporazum_13, napad_Sr_12_01_93, napad_Hv_12_01_93, napad_BiH_12_01_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
				                {label: '25.01.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_Ist_Bosna, vrs_25_01_93, hvo_25_01_93, abih_25_01_93, sao_22_01_93, napad_Hv_25_01_93, napad_Sr_28_01_93, obrana_Sr_22_01_93, napad_Hv_22_01_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
				                {label: '16.03.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_Ist_Bosna, vrs_16_03_93, hvo_16_03_93, abih_16_03_93, sao_28_01_93, napad_Hv_16_03_93, napad_BiH_16_03_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
				                {label: '18.04.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_Ist_Bosna, vrs_18_04_93, hvo_18_04_93, abih_18_04_93, sao_28_01_93, napad_BiH_18_04_93, napad_Hv_18_04_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
				                {label: '07.06.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_Ist_Bosna, vrs_07_06_93, hvo_07_06_93, abih_07_06_93, sao_28_01_93, napad_BiH_07_06_93, napad_Hv_07_06_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '17.07.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Ist_Bosna, vrs_17_07_93, hvo_17_07_93, abih_17_07_93, sao_28_01_93, napad_BiH_17_07_93, napad_Hv_17_07_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '02.08.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Ist_Bosna, vrs_02_08_93, hvo_02_08_93, abih_02_08_93, sao_28_01_93, napad_BiH_02_08_93, napad_Hv_02_08_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '24.08.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Ist_Bosna, vrs_24_08_93, hvo_24_08_93, abih_24_08_93, sao_28_01_93, napad_BiH_24_08_93, napad_Hv_24_08_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '30.11.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_30_11_93, mamac_Ist_Bosna, vrs_30_11_93, hvo_30_11_93, abih_30_11_93, fabdic_30_11_93, sao_09_09_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   

					]},
					          {label: '<div id="onlysel" class="group"></div>'},
					          {label: '<big><b style="line-height:200%" class="layer-text">Rama - Jablanica - Konjic front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
				                {label: '16.03.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_Jablanica, vrs_16_03_93, hvo_16_03_93, abih_16_03_93, sao_28_01_93, napad_Hv_16_03_93, napad_BiH_16_03_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
								{label: '13.04.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_Jablanica, vrs_13_04_93, hvo_13_04_93, abih_13_04_93, sao_28_01_93, napad_Sr_13_04_93, napad_Hv_13_04_93, napad_BiH_13_04_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
				                {label: '18.04.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_Jablanica, vrs_18_04_93, hvo_18_04_93, abih_18_04_93, sao_28_01_93, napad_BiH_18_04_93, napad_Hv_18_04_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
				                {label: '25.04.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_Jablanica, vrs_25_04_93, hvo_25_04_93, abih_25_04_93, sao_28_01_93, napad_Sr_25_04_93, napad_BiH_25_04_93, napad_Hv_25_04_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
			                    {label: '07.06.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_02_11_92, mamac_Jablanica, vrs_07_06_93, hvo_07_06_93, abih_07_06_93, sao_28_01_93, napad_BiH_07_06_93, napad_Hv_07_06_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
                                {label: '14.06.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Jablanica, vrs_14_06_93, hvo_14_06_93, abih_14_06_93, sao_28_01_93, napad_BiH_14_06_93, napad_Hv_14_06_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '30.06.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Jablanica, vrs_30_06_93, hvo_30_06_93, abih_30_06_93, sao_28_01_93, napad_BiH_30_06_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '17.07.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Jablanica, vrs_17_07_93, hvo_17_07_93, abih_17_07_93, sao_28_01_93, napad_BiH_17_07_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '29.07.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Jablanica, vrs_29_07_93, hvo_29_07_93, abih_29_07_93, sao_28_01_93, napad_BiH_29_07_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '26.09.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Jablanica, vrs_26_09_93, hvo_26_09_93, abih_26_09_93, sao_09_09_93, napad_Hv_26_09_93, napad_BiH_26_09_93, napad_Fabdic_26_09_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   

					]},
					          {label: '<div id="onlysel" class="group"></div>'},
					          {label: '<big><b style="line-height:200%" class="layer-text">Žepče front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
				                {label: '14.06.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Zepce, vrs_14_06_93, hvo_14_06_93, abih_14_06_93, sao_28_01_93, napad_BiH_14_06_93, napad_Hv_14_06_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '30.06.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Zepce, vrs_30_06_93, hvo_30_06_93, abih_30_06_93, sao_28_01_93, napad_BiH_30_06_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '22.07.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Zepce, vrs_22_07_93, hvo_22_07_93, abih_22_07_93, sao_28_01_93, napad_BiH_22_07_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '24.08.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Zepce, vrs_24_08_93, hvo_24_08_93, abih_24_08_93, sao_28_01_93, napad_BiH_24_08_93, napad_Hv_24_08_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '26.09.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Zepce, vrs_26_09_93, hvo_26_09_93, abih_26_09_93, sao_09_09_93, napad_Hv_26_09_93, napad_BiH_26_09_93, napad_Fabdic_26_09_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   

					]},
					          {label: '<div id="onlysel" class="group"></div>'},
					          {label: '<big><b style="line-height:200%" class="layer-text">Mostar front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
				                {label: '14.06.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Mostar, vrs_14_06_93, hvo_14_06_93, abih_14_06_93, sao_28_01_93, napad_BiH_14_06_93, napad_Hv_14_06_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '30.06.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Mostar, vrs_30_06_93, hvo_30_06_93, abih_30_06_93, sao_28_01_93, napad_BiH_30_06_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '25.07.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Mostar, vrs_25_07_93, hvo_25_07_93, abih_25_07_93, sao_28_01_93, napad_Sr_25_07_93, napad_BiH_25_07_93, napad_Hv_25_07_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
								{label: '29.07.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Mostar, vrs_29_07_93, hvo_29_07_93, abih_29_07_93, sao_28_01_93, napad_BiH_29_07_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
								{label: '24.08.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Mostar, vrs_24_08_93, hvo_24_08_93, abih_24_08_93, sao_28_01_93, napad_BiH_24_08_93, napad_Hv_24_08_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
								{label: '14.09.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Mostar, vrs_14_09_93, hvo_14_09_93, abih_14_09_93, sao_09_09_93, napad_BiH_14_09_93, napad_Hv_14_09_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '26.09.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Mostar, vrs_26_09_93, hvo_26_09_93, abih_26_09_93, sao_09_09_93, napad_Hv_26_09_93, napad_BiH_26_09_93, napad_Fabdic_26_09_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   

					]},
					          {label: '<div id="onlysel" class="group"></div>'},
					          {label: '<big><b style="line-height:200%" class="layer-text">Bihać front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
							    {label: '26.09.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Bihac, vrs_26_09_93, hvo_26_09_93, abih_26_09_93, sao_09_09_93, napad_Hv_26_09_93, napad_BiH_26_09_93, napad_Fabdic_26_09_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
								{label: '21.10.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Bihac, vrs_21_10_93, hvo_21_10_93, abih_21_10_93, fabdic_21_10_93, sao_09_09_93, napad_Hv_21_10_93, napad_BiH_21_10_93, napad_Fabdic_21_10_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '02.11.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_06_93, mamac_Bihac, vrs_02_11_93, hvo_02_11_93, abih_02_11_93, fabdic_02_11_93, sao_09_09_93, napad_Sr_02_11_93, napad_BiH_02_11_93, napad_Fabdic_02_11_93, napad_Hv_02_11_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   
							    {label: '30.11.1993. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_30_11_93, mamac_Bihac, vrs_30_11_93, hvo_30_11_93, abih_30_11_93, fabdic_30_11_93, sao_09_09_93, sr_zast_17_12_91, hrnapad_1993, serpolit_1993, sernapad_1993]), radioGroup: 'bc'},   

					]},					
				    ]},									
                ]},
				    {label: '<div id="onlysel" class="group"></div>'},
                    {label: '<small style="line-height:150%" class="source-text">Source:' + '<br>' + '1.Marijan, D.(2016) The Homeland War. Zagreb: Croatian Institute of History and Despot infinitus.' + '<br>' + 
							'2. Marijan, D., Nazor, A., Jelić, Z. M., Kolakušić, P.(2020) The Croatian War of Independence and crimes commited against Croats in Bosnia and Herzegovina 1991 - 1995. Zagreb: Croatian Homeland War Memorial and Documentation Centre and Croatian bells association.</small><hr style="height:0.5em; background-color:gray">'},
				
				{label: '<big><b style="line-height:200%" class="sidebar-text">1994</b></big><hr>', children: [ 		           
							  {label: '<div id="onlysel" class="group"></div>'},
						      {label: '<big><b style="line-height:200%" class="layer-text">Bosnia and Herzegovina</b></big> <i>(zoom to feature)</i><hr>', children: [ 
                                {label: '<div id="onlysel" class="sidebar-text">● <b>Washington Agreement</b> - The Muslim - Croat war in Bosnia and Herzegovina ended with a peace agreement and not with a decisive clash of arms. After the initial political steps regarding a Bosnian - Herzegovinian union (that have been made in Zagreb back in January 1994) and a considerable amount of pressure by the USA, both side have signed the final agreement on 18 March 1994, which marked the ceasefire and the end of the war.' + '<hr></div>'},
							  {label: '<div id="onlysel" class="group"></div>'},
							  {label: '<big><b style="line-height:200%" class="layer-text">Uskoplje (Gornji Vakuf) front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
							    {label: '28.02.1994. - <b style="line-height:200%" class="layer-text">The situation before the Washington Agreement</b>', layer: L.featureGroup ([zng_30_11_93, mamac_Uskoplje, vrs_28_02_94, hvo_28_02_94, abih_28_02_94, fabdic_28_02_94, sao_09_09_93, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},   
				    ]},
					
					          {label: '<div id="onlysel" class="group"></div>'},
					          {label: '<big><b style="line-height:200%" class="layer-text">Middle Bosnia front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
							    {label: '28.02.1994. - <b style="line-height:200%" class="layer-text">The situation before the Washington Agreement</b>', layer: L.featureGroup ([zng_30_11_93, mamac_Sred_Bosna, vrs_28_02_94, hvo_28_02_94, abih_28_02_94, fabdic_28_02_94, sao_09_09_93, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},   
	   					        {label: '11.08.1994. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_30_11_93, mamac_Sred_Bosna, vrs_11_08_94, hvo_11_08_94, abih_11_08_94, fabdic_11_08_94, sao_09_09_93, napad_BiH_11_08_94, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},   

					]},
					          {label: '<div id="onlysel" class="group"></div>'},
					          {label: '<big><b style="line-height:200%" class="layer-text">Eastern Bosnia front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
							    {label: '28.02.1994. - <b style="line-height:200%" class="layer-text">The situation before the Washington Agreement</b>', layer: L.featureGroup ([zng_30_11_93, mamac_Ist_Bosna, vrs_28_02_94, hvo_28_02_94, abih_28_02_94, fabdic_28_02_94, sao_09_09_93, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},   
								{label: '06.04.1994. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_30_11_93, mamac_Ist_Bosna, vrs_06_04_94, hvo_06_04_94, abih_06_04_94, fabdic_06_04_94, sao_09_09_93, napad_Sr_06_04_94, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},   
								{label: '07.04.1994. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_30_11_93, mamac_Ist_Bosna, vrs_07_04_94, hvo_07_04_94, abih_07_04_94, fabdic_07_04_94, sao_09_09_93, napad_Sr_07_04_94, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},   
								{label: '11.04.1994. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_30_11_93, mamac_Ist_Bosna, vrs_11_04_94, hvo_11_04_94, abih_11_04_94, fabdic_11_04_94, sao_09_09_93, napad_Sr_11_04_94, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},   
								{label: '18.04.1994. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_30_11_93, mamac_Ist_Bosna, vrs_18_04_94, hvo_18_04_94, abih_18_04_94, fabdic_18_04_94, sao_09_09_93, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},   
	   					        {label: '11.08.1994. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_30_11_93, mamac_Ist_Bosna, vrs_11_08_94, hvo_11_08_94, abih_11_08_94, fabdic_11_08_94, sao_09_09_93, napad_BiH_11_08_94, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},   
							    {label: '01.11.1994. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_30_11_93, mamac_Ist_Bosna, vrs_01_11_94, hvo_01_11_94, abih_01_11_94, sao_09_09_93, napad_BiH_01_11_94, napad_Sr_01_11_94, napad_Hv_01_11_94, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},   

					]},
					          {label: '<div id="onlysel" class="group"></div>'},
					          {label: '<big><b style="line-height:200%" class="layer-text">Rama - Jablanica - Konjic front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
							    {label: '28.02.1994. - <b style="line-height:200%" class="layer-text">The situation before the Washington Agreement</b>', layer: L.featureGroup ([zng_30_11_93, mamac_Jablanica, vrs_28_02_94, hvo_28_02_94, abih_28_02_94, fabdic_28_02_94, sao_09_09_93, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},   
							    {label: '01.11.1994. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_30_11_93, mamac_Jablanica, vrs_01_11_94, hvo_01_11_94, abih_01_11_94, sao_09_09_93, napad_BiH_01_11_94, napad_Sr_01_11_94, napad_Hv_01_11_94, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},   

					]},
					          {label: '<div id="onlysel" class="group"></div>'},
					          {label: '<big><b style="line-height:200%" class="layer-text">Žepče front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
							    {label: '28.02.1994. - <b style="line-height:200%" class="layer-text">The situation before the Washington Agreement</b>', layer: L.featureGroup ([zng_30_11_93, mamac_Zepce, vrs_28_02_94, hvo_28_02_94, abih_28_02_94, fabdic_28_02_94, sao_09_09_93, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},   
							   
					]},					         
					          {label: '<div id="onlysel" class="group"></div>'},
					          {label: '<big><b style="line-height:200%" class="layer-text">Bihać front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
							    {label: '28.02.1994. - <b style="line-height:200%" class="layer-text">The situation before the Washington Agreement</b>', layer: L.featureGroup ([zng_30_11_93, mamac_Bihac, vrs_28_02_94, hvo_28_02_94, abih_28_02_94, fabdic_28_02_94, sao_09_09_93, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},   
							    {label: '11.08.1994. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_30_11_93, mamac_Bihac, vrs_11_08_94, hvo_11_08_94, abih_11_08_94, fabdic_11_08_94, sao_09_09_93, napad_BiH_11_08_94, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},   
							    {label: '01.11.1994. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_30_11_93, mamac_Bihac, vrs_01_11_94, hvo_01_11_94, abih_01_11_94, sao_09_09_93, napad_BiH_01_11_94, napad_Sr_01_11_94, napad_Hv_01_11_94, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},   
              				    {label: '10.11.1994. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_30_11_93, mamac_Bihac, vrs_10_11_94, hvo_10_11_94, abih_10_11_94, sao_09_09_93, napad_Sr_10_11_94, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},   
              				    {label: '20.11.1994. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_30_11_93, mamac_Bihac, vrs_20_11_94, hvo_20_11_94, abih_20_11_94, sao_09_09_93, napad_Sr_20_11_94, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},   
					            {label: "01.12.1994. <b style='line-height:200%' class='layer-text'></b>", layer: L.featureGroup ([zng_30_11_93, mamac_Bihac, vrs_01_12_94, hvo_01_12_94, abih_01_12_94, sao_01_12_94, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},

					]},	
					          {label: '<div id="onlysel" class="group"></div>'},
					          {label: '<big><b style="line-height:200%" class="layer-text">Operation "Cincar"</b></big> <i>(zoom to feature)</i><hr>', children: [ 
							    {label: '31.10.1994. <b style="line-height:200%" class="layer-text">Situation before operation</b>', layer: L.featureGroup ([mamac_Cincar, vrs_31_10_94, hvo_31_10_94, abih_31_10_94, sao_09_09_93, napad_BiH_01_11_94, napad_Sr_01_11_94, napad_BiH_31_10_94, napad_Hv_31_10_94, obrana_Sr_31_10_94, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},   
							    {label: '01.11.1994. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_30_11_93, mamac_Cincar, vrs_01_11_94, hvo_01_11_94, abih_01_11_94, sao_09_09_93, napad_BiH_01_11_94, napad_Sr_01_11_94, napad_Hv_01_11_94, obrana_Sr_31_10_94, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},   
                    		    {label: '02.11.1994. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_30_11_93, mamac_Cincar, vrs_02_11_94, hvo_02_11_94, abih_02_11_94, sao_09_09_93, napad_Hv_02_11_94, napad_Sr_01_11_94, obrana_Sr_31_10_94, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},   
                    		    {label: '03.11.1994. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_30_11_93, mamac_Cincar, vrs_03_11_94, hvo_03_11_94, abih_03_11_94, sao_09_09_93, napad_Sr_01_11_94, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},   

					]},	
					        {label: '<div id="onlysel" class="group"></div>'},
							  {label: '<big><b style="line-height:200%" class="layer-text">Operation "Winter 94"</b></big> <i>(zoom to feature)</i><hr>', children: [ 
					            {label: "29.11.1994. - <b style='line-height:200%' class='layer-text'>Start of operation</b>", layer: L.featureGroup ([zng_30_11_93, mamac_Skok, vrs_20_11_94, hvo_20_11_94, abih_20_11_94, sao_20_11_94, napad_Sr_20_11_94, napad_Hv_29_11_94, obrana_Sr_29_11_94, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},
					            {label: "01.12.1994. <b style='line-height:200%' class='layer-text'></b>", layer: L.featureGroup ([zng_30_11_93, mamac_Skok, vrs_01_12_94, hvo_01_12_94, abih_01_12_94, sao_01_12_94, napad_Hv_01_12_94, obrana_Sr_29_11_94, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},
					            {label: "05.12.1994. <b style='line-height:200%' class='layer-text'></b>", layer: L.featureGroup ([zng_30_11_93, mamac_Skok, vrs_05_12_94, hvo_05_12_94, abih_05_12_94, sao_05_12_94, napad_Hv_05_12_94, obrana_Sr_29_11_94, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},
					            {label: "10.12.1994. <b style='line-height:200%' class='layer-text'></b>", layer: L.featureGroup ([zng_30_11_93, mamac_Skok, vrs_10_12_94, hvo_10_12_94, abih_10_12_94, sao_10_12_94, napad_Hv_10_12_94, obrana_Sr_29_11_94, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},
								{label: '25.12.1994. - <b style="line-height:200%" class="layer-text">The Croatian Army in Knin hinterland</b>', layer: L.featureGroup ([zng_30_11_93, mamac_Skok, vrs_25_12_94, hvo_25_12_94, abih_25_12_94, sao_25_12_94, obrana_Sr_29_11_94, sr_zast_17_12_91, hrpolit_1994, hrnapad_1994]), radioGroup: 'bc'},                
				    ]},					
				    ]},	
				    
	                {label: '<div id="onlysel" class="group"></div>'},
		            {label: '<small style="line-height:150%" class="source-text">Source:' + '<br>' + '1.Marijan, D.(2016) The Homeland War. Zagreb: Croatian Institute of History and Despot infinitus.' + '<br>' + 
							'2. Marijan, D., Nazor, A., Jelić, Z. M., Kolakušić, P.(2020) The Croatian War of Independence and crimes commited against Croats in Bosnia and Herzegovina 1991 - 1995. Zagreb: Croatian Homeland War Memorial and Documentation Centre and Croatian bells association.</small><hr style="height:0.5em; background-color:gray">'},


                ]},
                ]},
                
				    {label: '<big><b style="line-height:200%" class="sidebar-text">1995</b></big><hr>', children: [ 
		                    {label: '<div id="onlysel" class="group"></div>'},
					          {label: '<big><b style="line-height:200%" class="layer-text">Bihać front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
							    {label: '01.01.1995. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_30_11_93, mamac_Bihac, vrs_01_01_95, hvo_01_01_95, abih_01_01_95, sao_25_12_94, obrana_Sr_29_11_94, sr_zast_17_12_91, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},   					
								{label: "07.04.1995. <b style='line-height:200%' class='layer-text'></b>", layer: L.featureGroup ([zng_30_11_93, mamac_Bihac, vrs_07_04_95, hvo_07_04_95, abih_07_04_95, sao_25_12_94, obrana_Sr_29_11_94, napad_Hv_07_04_95, sr_zast_17_12_91, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
					            {label: "11.06.1995. <b style='line-height:200%' class='layer-text'></b>", layer: L.featureGroup ([zng_01_05_95, mamac_Bihac, vrs_11_06_95, hvo_11_06_95, abih_11_06_95, sao_04_05_95, sr_zast_17_12_91, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
					            {label: "28.07.1995. <b style='line-height:200%' class='layer-text'></b>", layer: L.featureGroup ([zng_11_07_95, mamac_Bihac, vrs_28_07_95, hvo_28_07_95, abih_28_07_95, sao_04_05_95, sr_zast_17_12_91, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},

					]},	
                            {label: '<div id="onlysel" class="group"></div>'},
					          {label: '<big><b style="line-height:200%" class="layer-text">Middle Bosnia front</b></big> <i>(zoom to feature)</i><hr>', children: [ 
								{label: "07.04.1995. <b style='line-height:200%' class='layer-text'></b>", layer: L.featureGroup ([zng_30_11_93, mamac_Sred_Bosna, vrs_07_04_95, hvo_07_04_95, abih_07_04_95, sao_25_12_94, obrana_Sr_29_11_94, napad_Hv_07_04_95, sr_zast_17_12_91, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},

					]},
				  {label: '<div id="onlysel" class="group"></div>'},
		            {label: '<big><b style="line-height:200%" class="layer-text">Operation "Jump - 1"</b></big> <i>(zoom to feature)</i><hr>', children: [ 
					        {label: "06.04.1995. - <b style='line-height:200%' class='layer-text'>Start of operation</b>", layer: L.featureGroup ([zng_30_11_93, mamac_Skok, vrs_01_01_95, hvo_01_01_95, abih_01_01_95, sao_25_12_94, napad_Hv_06_04_95, obrana_Sr_29_11_94, sr_zast_17_12_91, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
					        {label: "07.04.1995. <b style='line-height:200%' class='layer-text'></b>", layer: L.featureGroup ([zng_30_11_93, mamac_Skok, vrs_07_04_95, hvo_07_04_95, abih_07_04_95, sao_25_12_94, obrana_Sr_29_11_94, napad_Hv_07_04_95, sr_zast_17_12_91, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
							{label: '14.04.1995. - <b style="line-height:200%" class="layer-text">The Croatian Army capture better locations on Dinara mountain</b>', layer: L.featureGroup ([zng_30_11_93, mamac_Skok, vrs_07_04_95, hvo_07_04_95, abih_07_04_95, sao_14_04_95, obrana_Sr_29_11_94, sr_zast_17_12_91, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},                				      
				    ]},
	                {label: '<div id="onlysel" class="group"></div>'},
		            {label: '<big><b style="line-height:200%" class="layer-text">Operation "Flash"</b></big> <i>(zoom to feature)</i><hr>', children: [ 
					        {label: "01.05.1995. - <b style='line-height:200%' class='layer-text'>Start of operation</b>", layer: L.featureGroup ([zng_30_11_93, mamac_bljesak, vrs_07_04_95, hvo_07_04_95, abih_07_04_95, sao_14_04_95, obrana_Sr_01_05_95, napad_Hv_01_05_95, obrana_Sr_29_11_94, sr_zast_17_12_91, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
					        {label: '04.05.1995. - <b style="line-height:200%" class="layer-text">The Croatian Army liberated Western Slavonia</b>', layer: L.featureGroup ([zng_01_05_95, mamac_bljesak, vrs_07_04_95, hvo_07_04_95, abih_07_04_95, sao_04_05_95, obrana_Sr_29_11_94, sr_zast_17_12_91, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},                
					   ]},					  
                    {label: '<div id="onlysel" class="group"></div>'},
		            {label: '<big><b style="line-height:200%" class="layer-text">Operation "Jump - 2"</b></big> <i>(zoom to feature)</i><hr>', children: [ 
					        {label: "04.06.1995. - <b style='line-height:200%' class='layer-text'>Start of operation</b>", layer: L.featureGroup ([zng_01_05_95, mamac_Skok, vrs_07_04_95, hvo_07_04_95, abih_07_04_95, sao_04_05_95, napad_Hv_04_06_95, obrana_Sr_29_11_94, sr_zast_17_12_91, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
					        {label: "11.06.1995. <b style='line-height:200%' class='layer-text'></b>", layer: L.featureGroup ([zng_01_05_95, mamac_Skok, vrs_11_06_95, hvo_11_06_95, abih_11_06_95, sao_04_05_95, obrana_Sr_29_11_94, sr_zast_17_12_91, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
				    ]},
                    {label: '<div id="onlysel" class="group"></div>'},
		            {label: '<big><b style="line-height:200%" class="layer-text">Operation "Summer 95"</b></big> <i>(zoom to feature)</i><hr>', children: [ 
					        {label: "25.07.1995. - <b style='line-height:200%' class='layer-text'>Start of operation</b>", layer: L.featureGroup ([zng_11_07_95, mamac_Skok, vrs_25_07_95, hvo_11_06_95, abih_25_07_95, sao_04_05_95, napad_Hv_25_07_95, obrana_Sr_29_11_94, sr_zast_17_12_91, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
					        {label: "28.07.1995. <b style='line-height:200%' class='layer-text'></b>", layer: L.featureGroup ([zng_11_07_95, mamac_Skok, vrs_28_07_95, hvo_28_07_95, abih_28_07_95, sao_04_05_95, napad_Hv_28_07_95, obrana_Sr_28_07_95, sr_zast_17_12_91, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
							{label: "30.07.1995. <b style='line-height:200%' class='layer-text'></b>", layer: L.featureGroup ([zng_11_07_95, mamac_Skok, vrs_30_07_95, hvo_30_07_95, abih_30_07_95, sao_30_07_95, obrana_Sr_30_07_95, sr_zast_17_12_91, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
				    ]},
				    {label: '<div id="onlysel" class="sidebar-text"><hr>● After years of waiting, a good moment for the liberation of all Croatian territories finally came. Because of the crimes against humanity of the Army of Republika Srpska in eastern Bosnia and Herzegovina in Srebrenica at the mid - July, Croatia has been given a tacit support of the influential part of the international community to solve the problem of Republika Srpska Krajina in a short time. After several successful military operations Croatia gained better tactical positions on the battlefield, but also in front of the international community demonstrated its strength and efficiency in the liberation of its own territory. Thereby, the Croatian Army was ready for the final and complete reintegration of the occupied territories.' + '<hr></div>'},
				
	    {label: '<div id="onlysel" class="group"></div>'},
		{label: "<big><b style='line-height:200%' class='layer-text'>Operation 'Storm'</b></big><i>(zoom to feature)</i>", children: [ 
			   {label: "<b style='line-height:200%' class='layer-text'>Dawn, 04.08.1995. - Start of operation</b>", children: [
					    {label: '<b style="line-height:200%" class="layer-text">General view</b>', layer: L.featureGroup ([zng_11_07_95, mamac_svk_04_05_95, vrs_30_07_95, hvo_30_07_95, abih_30_07_95, sao_04_05_95, napad_HvOluja_03_08_95, obrana_Hv_03_08_95, srzas_genol_4_8, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
					    {label: '<b style="line-height:200%" class="layer-text">Kordun and Banovina</b>', layer: L.featureGroup ([zng_11_07_95, mamac_ban_kordun_03_08_95, vrs_30_07_95, hvo_30_07_95, abih_30_07_95, sao_04_05_95, napad_Hv_03_08_95, obrana_Hv_03_08_95, sr_zast_17_12_91, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
					    {label: '<b style="line-height:200%" class="layer-text">Lika</b>', layer: L.featureGroup ([zng_11_07_95, mamac_lika_03_08_95, vrs_30_07_95, hvo_30_07_95, abih_30_07_95, sao_04_05_95, napad_Hv_03_08_95, obrana_Hv_03_08_95, sr_zast_17_12_91, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
					    {label: '<b style="line-height:200%" class="layer-text">Dalmacija</b>', layer: L.featureGroup ([zng_11_07_95, mamac_dalmacija_03_08_95, vrs_30_07_95, hvo_30_07_95, abih_30_07_95, sao_04_05_95, napad_Hv_03_08_95, obrana_Hv_03_08_95, sr_zast_17_12_91, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
						]},
                {label: '<b style="line-height:200%" class="layer-text">End of the day, 04.08.1995.</b>', children: [
					    {label: '<b style="line-height:200%" class="layer-text">General view</b>', layer: L.featureGroup ([zng_11_07_95, mamac_svk_04_05_95, vrs_30_07_95, hvo_30_07_95, abih_30_07_95, sao_04_08_95, napad_HvOluja_04_08_95, obrana_Hv_03_08_95, napad_BiH_05_08_95, srzas_genol_4_8, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
					    {label: '<b style="line-height:200%" class="layer-text">Kordun and Banovina</b>', layer: L.featureGroup ([zng_11_07_95, mamac_ban_kordun_03_08_95, vrs_30_07_95, hvo_30_07_95, abih_30_07_95, sao_04_08_95, napad_Hv_04_08_95, obrana_Hv_03_08_95, napad_BiH_05_08_95, sr_zast_17_12_91, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
					    {label: '<b style="line-height:200%" class="layer-text">Lika</b>', layer: L.featureGroup ([zng_11_07_95, mamac_lika_03_08_95, vrs_30_07_95, hvo_30_07_95, abih_30_07_95, sao_04_08_95, napad_Hv_04_08_95, obrana_Hv_03_08_95, napad_BiH_05_08_95, sr_zast_17_12_91, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
					    {label: '<b style="line-height:200%" class="layer-text">Dalmacija</b>', layer: L.featureGroup ([zng_11_07_95, mamac_dalmacija_03_08_95, vrs_30_07_95, hvo_30_07_95, abih_30_07_95, sao_04_08_95, napad_Hv_04_08_95, obrana_Hv_03_08_95, napad_BiH_05_08_95, sr_zast_17_12_91, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
						]},
			    {label: '<b style="line-height:200%" class="layer-text">05.08.1995.</b>', children: [
					    {label: '<b style="line-height:200%" class="layer-text">General view</b>', layer: L.featureGroup ([zng_05_08_95, mamac_svk_04_05_95, vrs_30_07_95, hvo_30_07_95, abih_30_07_95, sao_05_08_95, napad_HvOluja_05_08_95, obrana_Hv_03_08_95, napad_BiH_05_08_95, srzas_genol_4_8, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
					    {label: '<b style="line-height:200%" class="layer-text">Kordun and Banovina</b>', layer: L.featureGroup ([zng_05_08_95, mamac_ban_kordun_03_08_95, vrs_30_07_95, hvo_30_07_95, abih_30_07_95, sao_05_08_95, napad_Hv_05_08_95, obrana_Hv_03_08_95, napad_BiH_05_08_95, sr_zast_05_08_95, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
					    {label: '<b style="line-height:200%" class="layer-text">Lika</b>', layer: L.featureGroup ([zng_05_08_95, mamac_lika_03_08_95, vrs_30_07_95, hvo_30_07_95, abih_30_07_95, sao_05_08_95, napad_Hv_05_08_95, obrana_Hv_03_08_95, napad_BiH_05_08_95, sr_zast_05_08_95, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
					    {label: '<b style="line-height:200%" class="layer-text">Dalmacija</b>', layer: L.featureGroup ([zng_05_08_95, mamac_dalmacija_03_08_95, vrs_30_07_95, hvo_30_07_95, abih_30_07_95, sao_05_08_95, napad_Hv_05_08_95, obrana_Hv_03_08_95, napad_BiH_05_08_95, sr_zast_05_08_95, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
						]},
			    {label: '<b style="line-height:200%" class="layer-text">06.08.1995.</b>', children: [
					    {label: '<b style="line-height:200%" class="layer-text">General view</b>', layer: L.featureGroup ([zng_06_08_95, mamac_svk_04_05_95, vrs_06_08_95, hvo_30_07_95, abih_06_08_95, sao_06_08_95, napad_HvOluja_06_08_95, obrana_Hv_03_08_95, srzas_genol_4_8, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
					    {label: '<b style="line-height:200%" class="layer-text">Kordun and Banovina</b>', layer: L.featureGroup ([zng_06_08_95, mamac_ban_kordun_03_08_95, vrs_06_08_95, hvo_30_07_95, abih_06_08_95, sao_06_08_95, napad_Hv_06_08_95, obrana_Hv_03_08_95, sr_zast_05_08_95, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
					    {label: '<b style="line-height:200%" class="layer-text">Lika</b>', layer: L.featureGroup ([zng_06_08_95, mamac_lika_06_08_95, vrs_06_08_95, hvo_30_07_95, abih_06_08_95, sao_06_08_95, napad_Hv_06_08_95, obrana_Hv_03_08_95, sr_zast_05_08_95, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
					    {label: '<b style="line-height:200%" class="layer-text">Dalmacija</b>', layer: L.featureGroup ([zng_06_08_95, mamac_dalmacija_03_08_95, vrs_06_08_95, hvo_30_07_95, abih_06_08_95, sao_06_08_95, napad_Hv_06_08_95, obrana_Hv_03_08_95, sr_zast_05_08_95, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
						]},
				{label: '<b style="line-height:200%" class="layer-text">07.08.1995.</b>', children: [
					    {label: '<b style="line-height:200%" class="layer-text">General view</b>', layer: L.featureGroup ([zng_06_08_95, mamac_svk_04_05_95, vrs_06_08_95, hvo_30_07_95, abih_06_08_95, sao_07_08_95, napad_HvOluja_07_08_95, obrana_Hv_03_08_95, srzas_genol_7_8, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
					    {label: '<b style="line-height:200%" class="layer-text">Kordun and Banovina</b>', layer: L.featureGroup ([zng_06_08_95, mamac_ban_kordun_03_08_95, vrs_06_08_95, hvo_30_07_95, abih_06_08_95, sao_07_08_95, napad_Hv_07_08_95, obrana_Hv_03_08_95, sr_zast_07_08_95, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
					    {label: '<b style="line-height:200%" class="layer-text">Lika</b>', layer: L.featureGroup ([zng_06_08_95, mamac_lika_07_08_95, vrs_06_08_95, hvo_30_07_95, abih_06_08_95, sao_07_08_95, napad_Hv_07_08_95, obrana_Hv_03_08_95, sr_zast_07_08_95, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
						]},
				{label: '<b style="line-height:200%" class="layer-text">08.08.1995.</b>', children: [
					    //{label: '<b>General view</b>', layer: L.featureGroup ([mamac_ban_kordun_08_08_95, sao_08_08_95, hrzas_genol_8_8])},
					    {label: '<b style="line-height:200%" class="layer-text">Kordun and Banovina</b>', layer: L.featureGroup ([zng_08_08_95, mamac_ban_kordun_03_08_95, vrs_06_08_95, hvo_30_07_95, abih_06_08_95, sao_08_08_95, napad_Hv_08_08_95, obrana_Hv_03_08_95, sr_zast_08_08_95, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
						]},
				{label: '<b style="line-height:200%" class="layer-text">09.08.1995.</b>', children: [
					    //{label: '<b>General view</b>', layer: L.featureGroup ([mamac_ban_kordun_08_08_95, sao_08_08_95, hrzas_genol_8_8])},
					    {label: '<b style="line-height:200%" class="layer-text">Kordun and Banovina</b>', layer: L.featureGroup ([zng_08_08_95, mamac_ban_kordun_08_08_95, vrs_06_08_95, hvo_30_07_95, abih_06_08_95, sao_09_08_95, napad_Hv_09_08_95, obrana_Hv_03_08_95, sr_zast_08_08_95, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
						]},
				{label: "<b style='line-height:200%' class='layer-text'>10.08.1995. - <b>End of the operation 'Storm'</b>", children: [
					    //{label: '<b>General view</b>', layer: L.featureGroup ([mamac_ban_kordun_08_08_95, sao_08_08_95, hrzas_genol_8_8])},
					    {label: '<b style="line-height:200%" class="layer-text">Croatia at the end of the war</b>', layer: L.featureGroup ([zng_08_08_95, croatia_polygon_3, vrs_06_08_95, hvo_30_07_95, abih_06_08_95, sao_11_08_95, sr_zast_08_08_95, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
						]},
				{label: "<div id='onlysel' class='sidebar-text'><hr>● By the end of the operation 'Storm', with some minor armed incidents, military conflicts ended in the Republic of Croatia. Before and during the operation, almost all Serbs from the liberated territory left Croatia. From the Serbian perspective it was ethnic cleansing, while from the Croatian perspective, they left voluntarily. Given the massive response to the referendum on Serbian autonomy and mass involvement in the armed rebellion, such an outcome was logical. International community have mostly demonstrated understanding of the operation being carried out. It was said that Croatia had left enough time for them to resolve the conflict by negotiations, and that Operation 'Storm was legal and established the balance of power in Bosnia and Herzegovina and thus created the conditions for conclusion of a peace agreement." + '<hr></div>'},
                {label: '<div id="onlysel" class="group"></div>'},
	                {label: '<div id="onlysel" class="group"></div>'},
		            {label: '<big><b style="line-height:200%" class="layer-text">Operation "Maestral and Southern move"</b></big> <i>(zoom to feature)</i><hr>', children: [ 
					        {label: "08.09.1995. - <b style='line-height:200%' class='layer-text'>Start of operation</b>", layer: L.featureGroup ([zng_08_08_95, mamac_Maestral, vrs_06_08_95, hvo_30_07_95, abih_06_08_95, sao_11_08_95, napad_Hv_08_09_95, obrana_Sr_08_09_95, sr_zast_08_08_95, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},
					        {label: '12.09.1995. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_12_09_95, mamac_Maestral, vrs_12_09_95, hvo_12_09_95, abih_12_09_95, sao_11_08_95, napad_Hv_12_09_95, napad_BiH_12_09_95, obrana_Sr_08_09_95, sr_zast_12_09_95, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},                
					   		{label: '13.09.1995. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_12_09_95, mamac_Maestral, vrs_13_09_95, hvo_13_09_95, abih_13_09_95, sao_11_08_95, napad_Hv_13_09_95, napad_BiH_13_09_95, obrana_Sr_08_09_95, sr_zast_12_09_95, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},                
					   		{label: '14.09.1995. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_09_95, mamac_Maestral, vrs_14_09_95, hvo_14_09_95, abih_14_09_95, sao_11_08_95, napad_BiH_14_09_95, obrana_Sr_14_09_95, hrpolit_1995, sr_zast_14_09_95, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},                
					   		{label: '22.09.1995. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_09_95, mamac_Maestral, vrs_22_09_95, hvo_22_09_95, abih_22_09_95, sao_11_08_95, napad_Hv_22_09_95, napad_BiH_22_09_95, obrana_Sr_14_09_95, sr_zast_14_09_95, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},                
					   		{label: '27.09.1995. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_09_95, mamac_Maestral, vrs_27_09_95, hvo_27_09_95, abih_27_09_95, sao_11_08_95, napad_Hv_27_09_95, napad_BiH_27_09_95, napad_Sr_27_09_95, obrana_Sr_14_09_95, sr_zast_14_09_95, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},                
					   		{label: '15.10.1995. <b style="line-height:200%" class="layer-text"></b>', layer: L.featureGroup ([zng_14_09_95, mamac_Maestral, vrs_15_10_95, hvo_15_10_95, abih_15_10_95, sao_11_08_95, sr_zast_14_09_95, hrpolit_1995, hrnapad_1995, serpolit_1995, sernapad_1995]), radioGroup: 'bc'},                

					   ]},				
				
				{label: '<div id="onlysel" class="sidebar-text"><hr>● After the "Storm", only 4.6% of the Croatian territory remained under Serbian occupation, on the far east of Croatia, in the Croatian Danube Region. Based on the Erdut Agreement signed on 12.11.1995., this area finally returned to the composition of the Republic of Croatia  on 15.01.1998. Thereby, the Croatian government has fully established its authority over the internationally recognized borders of the Republic of Croatia.' + '<hr></div>'},
				{label: '<div id="onlysel" class="group"></div>'},
                {label: '<small style="line-height:150%" class="source-text">Source:' + '<br>' + '1. Central Intelligence Agency (2002-2003) Balkan battlegrounds. Washington, DC: Central Intelligence Agency, Office of Russian and European Analysis.' + '<br>' + 
				        '2. Marijan, D.(2016) The Homeland War. Zagreb: Croatian Institute of History and Despot infinitus.' + '<br>' +
				        '3. Nazor, A.(2011) A Greater-Serbian aggression against Croatia in 1990s. Zagreb: Croatian Homeland War Memorial and Documentation Centre. ' + '<br>' + 
					    '4. Marijan, D., Nazor, A., Jelić, Z. M., Kolakušić, P.(2020) The Croatian War of Independence and crimes commited against Croats in Bosnia and Herzegovina 1991 - 1995. Zagreb: Croatian Homeland War Memorial and Documentation Centre and Croatian bells association.</small><hr style="height:0.5em; background-color:gray">'},

				
				
				]},
            ]},



	]},
            ]
        }
        var options = {
                        collapsed: false,
                        namedToggle: false,
                        selectorBack: false,
                        closedSymbol: '&#10148;',
                        openedSymbol: '&#10148;',
        
        };

//// Add the scale control to the map
        L.control.scale().addTo(map);

//// Add LEFT Sidebar V2 to the map
        var sidebarV2 = L.control.sidebarV2('sidebarV2').addTo(map);
// Open LEFT sidebar V2 on opening page
setTimeout(function () {
    sidebarV2.open('legend');
}, 150);

//// Use the custom grouped layer control, not "L.control.layers"
        var layerControl = L.control.layers.tree(null, overlaysTree, options);

        layerControl.addTo(map);

        var htmlObject = layerControl.getContainer();
        var a = document.getElementById('layers');

        function setParent(el, newParent) {
          newParent.appendChild(el);
        }
        setParent(htmlObject, a);

//Follow-up of zooming on press of radio button
map.on('overlayadd overlayremove', function () {
	var bounds = parentGroup.getBounds();
  if (bounds.isValid()) {
  	map.fitBounds(bounds);
  }
});		


//Sidebars V1(desni)		
		var sidebar = L.control.sidebarv1('sidebar', {
            closeButton: true,
            position: 'right',


        });
        map.addControl(sidebar);
		
		
		var sidebar2 = L.control.sidebarv1('sidebar2', {
            closeButton: true,
            position: 'right',

        });
        map.addControl(sidebar2);
		
		
		
        
//Open sidebar on onload, for now I don't need it
		/*
		setTimeout(function () {
            sidebar.show();
        }, 250);*/
        /*var marker = L.marker([51.2, 7]).addTo(map).on('click', function () {
            sidebar.toggle();
        });*/
				
    /*    map.on('click', function () {
            sidebar.hide();
        });
		*/
        sidebar.on('show', function () {
            console.log('Sidebar will be visible.');
        });
        sidebar.on('shown', function () {
            console.log('Sidebar is visible.');
        });
        sidebar.on('hide', function () {
            console.log('Sidebar will be hidden.');
        });
        sidebar.on('hidden', function () {
            console.log('Sidebar is hidden.');
        });
        L.DomEvent.on(sidebar.getCloseButton(), 'click', function () {
            console.log('Close button clicked.');
        });