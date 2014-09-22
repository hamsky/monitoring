Ext.define('monitoring.view.tabs.AllReports', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.allreports',
   // store: {},
    itemId: 'allReports',
      initComponent: function() {
        this.columns = [
            {
                text: 'Дата',
                flex: 1,
                dataIndex: 'date'
            },
            {
                text: 'Количество',
                flex: 1,
                dataIndex: 'value'
            },
            {
                text: 'Жалобы',
                flex: 1,
                dataIndex: 'complaints'
            }
        ];
        this.callParent(arguments);
    },
    tbar: [
        {
            xtype: 'label',
            text: 'ИОГВ/ОМСУ ',
            margin: '0 0 0 10px'
        },
        {
            xtype: 'combobox',
            margin: '0 0 0 10px',
            width: '400px',
            store: Ext.create('Ext.data.Store', {
                fields: ['id', 'iogv'],
                pageSize: 10,
                proxy: {
                    type: 'ajax',
                    url: 'app/php/actions/getrepiogv.php',
                    reader: {
                        type: 'json',
                        rootProperty: 'iogvs'
                    }
                }}),
            displayField: 'iogv',
            valueField: 'id',
            pageSize: 10,
            listeners: {
                change: function(elem, newValue, oldValue) {
                    var str = Ext.create('Ext.data.JsonStore', {
                        model: 'monitoring.model.AllReports',
                        fields: [/*'id',*/ 'date', 'service', 'value', 'complaints', 'gcompl', 'subdiv'],
                        groupField: 'service',
                        proxy: {
                            type: 'ajax',
                            url: 'inc/functions.php',
                            actionMethods: {create: "POST", read: "POST", update: "POST", destroy: "POST"},
                            extraParams: {
                                org: newValue,
                                action: 'getuserv'
                            },
                            reader: {
                                type: 'json',
                                rootProperty: 'services'
                            }
                        }
                    }).load();
                    Ext.ComponentQuery.query('#allReports')[0].getStore().group('service');
                    Ext.ComponentQuery.query('#allReports')[0].getView().bindStore(str);
               
                
                }}
        }
    ],
      features: [
        Ext.create('Ext.grid.feature.Grouping', {
            groupHeaderTpl: '{name}'
        })
    ]
//    plugins: [{
//            ptype: 'rowexpander',
//            rowBodyTpl: new Ext.XTemplate(
//                    '<p><b>Жалобы:</b> {complaints}</p>',
//                    '<p><b>Суть жалоб:</b> {gcompl}</p>',
//                    '<p><b>Подразделение оказывающее услугу:</b> {subdiv}</p>'
//                    )
//        }],
    
});