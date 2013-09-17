Ext.define('FirsAapp.view.Play', {
    extend: 'Ext.Carousel',
    xtype: 'playpanel',
	fullscreen: true,
    
    config: {
        title: 'Play',
        iconCls: 'arrow_right',
		cls: 'play',
        styleHtmlContent: true,
		
		items: [
        {
            html : 'Item 1',
            style: 'background-color: #5E99CC'
        },
        {
            html : 'Item 2',
            style: 'background-color: #759E60'
        },
        {
            html : 'Item 3',
			style: 'background-color: #cccccc'
        }
    ]
		                
   }

});
