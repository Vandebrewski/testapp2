Ext.define('FirsAapp.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homepanel',
    
    config: {
        title: 'Home',
        iconCls: 'home',
		cls: 'home',
        styleHtmlContent: true,
        scrollable: true,
				html: [
                        'Beginscherm'
                    ].join("")
                
        }

});
