var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DusunPadaanNgasem_1 = new ol.format.GeoJSON();
var features_DusunPadaanNgasem_1 = format_DusunPadaanNgasem_1.readFeatures(json_DusunPadaanNgasem_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DusunPadaanNgasem_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DusunPadaanNgasem_1.addFeatures(features_DusunPadaanNgasem_1);
var lyr_DusunPadaanNgasem_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DusunPadaanNgasem_1, 
                style: style_DusunPadaanNgasem_1,
                popuplayertitle: 'Dusun Padaan Ngasem',
                interactive: true,
    title: 'Dusun Padaan Ngasem<br />\
    <img src="styles/legend/DusunPadaanNgasem_1_0.png" /> 183571,671 - 365142,891 Rp/m2 (Rendah)<br />\
    <img src="styles/legend/DusunPadaanNgasem_1_1.png" /> 365142,891 - 480285,616 Rp/m2 (Sedang)<br />\
    <img src="styles/legend/DusunPadaanNgasem_1_2.png" /> 480285,616 - 741571,030 Rp/m2 (Tinggi)<br />' });
var format_BatasBidangTanah_2 = new ol.format.GeoJSON();
var features_BatasBidangTanah_2 = format_BatasBidangTanah_2.readFeatures(json_BatasBidangTanah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasBidangTanah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasBidangTanah_2.addFeatures(features_BatasBidangTanah_2);
var lyr_BatasBidangTanah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasBidangTanah_2, 
                style: style_BatasBidangTanah_2,
                popuplayertitle: 'Batas Bidang Tanah',
                interactive: true,
                title: '<img src="styles/legend/BatasBidangTanah_2.png" /> Batas Bidang Tanah'
            });
var format_BatasDusun_3 = new ol.format.GeoJSON();
var features_BatasDusun_3 = format_BatasDusun_3.readFeatures(json_BatasDusun_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDusun_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDusun_3.addFeatures(features_BatasDusun_3);
var lyr_BatasDusun_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDusun_3, 
                style: style_BatasDusun_3,
                popuplayertitle: 'Batas Dusun',
                interactive: true,
                title: '<img src="styles/legend/BatasDusun_3.png" /> Batas Dusun'
            });

lyr_OSMStandard_0.setVisible(true);lyr_DusunPadaanNgasem_1.setVisible(true);lyr_BatasBidangTanah_2.setVisible(true);lyr_BatasDusun_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DusunPadaanNgasem_1,lyr_BatasBidangTanah_2,lyr_BatasDusun_3];
lyr_DusunPadaanNgasem_1.set('fieldAliases', {'NUB': 'NUB', 'x': 'x', 'y': 'y', 'NUB_1': 'NUB_1', 'X_1': 'X_1', 'Y_1': 'Y_1', 'Kelompok': 'Kelompok', 'Dusun': 'Nama_Dusun', 'Nama_Pemil': 'Nama_Pemilik', 'ZNT': 'Zona_Nilai_Tanah', 'luas': 'Luas_m2', });
lyr_BatasBidangTanah_2.set('fieldAliases', {'fid': 'fid', });
lyr_BatasDusun_3.set('fieldAliases', {'Dusun_1': 'Dusun_1', 'DESA': 'DESA', });
lyr_DusunPadaanNgasem_1.set('fieldImages', {'NUB': 'TextEdit', 'x': 'Hidden', 'y': 'Hidden', 'NUB_1': 'Hidden', 'X_1': 'Hidden', 'Y_1': 'Hidden', 'Kelompok': 'Hidden', 'Dusun': 'TextEdit', 'Nama_Pemil': 'TextEdit', 'ZNT': 'TextEdit', 'luas': 'TextEdit', });
lyr_BatasBidangTanah_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_BatasDusun_3.set('fieldImages', {'Dusun_1': 'TextEdit', 'DESA': 'TextEdit', });
lyr_DusunPadaanNgasem_1.set('fieldLabels', {'NUB': 'inline label - always visible', 'Dusun': 'inline label - always visible', 'Nama_Pemil': 'inline label - always visible', 'ZNT': 'inline label - always visible', 'luas': 'inline label - always visible', });
lyr_BatasBidangTanah_2.set('fieldLabels', {'fid': 'no label', });
lyr_BatasDusun_3.set('fieldLabels', {'Dusun_1': 'no label', 'DESA': 'no label', });
lyr_BatasDusun_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});