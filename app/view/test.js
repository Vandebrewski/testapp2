Ext.define('FirsAapp.view.Test', {
    extend: 'Ext.Carousel',
    xtype: 'testpanel',
	fullscreen: true,
    
    config: {
        title: 'Test',
        iconCls: 'star',
		cls: 'test',
        styleHtmlContent: true,
				
		
		
		items: [
         {
			 layout: {
				 type: 'vbox',
				 align: 'stretch'
			 },
			 
			 dockedItems: [
			 	{ 
					dock: "top",
					xtype: 'toolbar',
					title: 'test',
					items: [{text: '<'}]
				}
				],
			 defaults: {flex: 1},
			 items : [
			 	{ cls : 'test Item1', },
			 	{
			 	styleHtmlContent: true,
             	html: "<h3>Asteroid</h3><p>by Dale Adcock</p>"
			},
			 ]
         },
		{
            cls : 'test Item1',
        },
        {
            cls : 'test Item2',
        },
        {
            cls : 'test Item3',
        }
    ]
                
        }

});

