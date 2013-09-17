Ext.define('FirsAapp.view.Info', {
    extend: 'Ext.Panel',
    xtype: 'infopanel',
    
    config: {
        title: 'Info',
        iconCls: 'info',
		cls: 'info',
        styleHtmlContent: true,
        scrollable: true,
			html: [
                       '<h2>Met de Kindergebaren App leer je je kind op speelse wijze een aantal gebaren.</h2>',
                        '<h3>Versie 1.0<br /><br />Gemaakt door</h3>',
						"<h3><img src='/resources/images/nimlogo.png' /></h3><br />",
						'<p>Deze app is gemaakt door Bas van New-impulse media voor zijn zoontje Kester.</p>',
						'<p><strong>Uitsluiting aansprakelijkheid</strong><br />',
						'Hoewel de informatie op deze App met uiterste zorg is samengesteld kunnen hieraan geen rechten worden ', 							'ontleend. Tarieven en voorwaarden kunnen aan verandering onderhevig zijn. New-impulse media aanvaardt geen aansprakelijkheid voor ','mogelijke fouten en tekortkomingen in deze App. Wijzigingen en correcties zijn voorbehouden.</p>',
						'<p><strong>Auteursrechten en intellectuele eigendomsrechten</strong><br />',
'Alle auteursrechten en andere intellectuele eigendomsrechten met betrekking tot de inhoud en de vormgeving van deze ',
'App komen toe aan New-impulse media en worden uitdrukkelijk voorbehouden.</p>'

                    ].join("")
                
        }

});
