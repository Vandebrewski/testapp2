Ext.define('FirsAapp.view.Main', {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar',],
    
	config: {
        tabBarPosition: 'bottom',

        items: [
            {
            xtype: 'homepanel'
			},
			{
            xtype: 'playpanel'
			},
			{
            xtype: 'infopanel'
			},
			{
            xtype: 'testpanel'
			}
			
		]
    }
});
