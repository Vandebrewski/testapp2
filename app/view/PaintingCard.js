app.view.PaintingCard = Ext.extend(Ext.Panel, {
    initComponent: function(){
        Ext.apply(this, {

            layout: {
                type: 'vbox',
                align: 'stretch'
            },

            items: [
                {
                    flex: 3,
                    cls: 'painting ' + this.slug,
                },
                {
                    flex: 1,
                    styleHtmlContent: true,
                    html: "<h3>" + this.title + "</h3><p>by Dale Adcock</p>"
                }
            ]
        });

        app.view.PaintingCard.superclass.initComponent.call(this);
    }
});

Ext.reg('paintingcard', app.view.PaintingCard);
