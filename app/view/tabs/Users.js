Ext.define('monitoring.view.tabs.Users', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.users',
    store: 'UserStore',
    itemId: 'userGrid',
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2,
            clicksToMoveEditor: 1,
            autoCancel: false,
            listeners: {
                canceledit: function(editor, e, eOpts) {
                    console.log('cancel edit');
                },
                edit: function(editor, e, eOpts) {
                    Ext.Ajax.request({
                        url: 'app/php/actions/editusera.php',
                        params: e.record.getData(),
                        success: function(response, options) {
                         Ext.ComponentQuery.query('#userGrid')[0].getStore().reload();    
                        }

                    });
                }
            }

        })],
    initComponent: function() {
        this.columns = [
            {xtype: 'rownumberer'},
            {
                header: 'Логин',
                dataIndex: 'login',
                editor: {
                    xtype: 'textfield'
                },
                flex: 15 / 100
            },
            {
                header: 'Пароль',
                dataIndex: 'password',
                editor: {
                    xtype: 'textfield'
                },
                flex: 15 / 100
            },
            {
                header: 'E-mail',
                dataIndex: 'email',
                editor: {
                    xtype: 'textfield'
                },
                flex: 10 / 100
            },
            {
                xtype: 'booleancolumn',
                header: 'Активен',
                dataIndex: 'enabled',
                trueText: 'Да',
                falseText: 'Нет',
                editor: {
                    xtype: 'checkbox'
                },
                flex: 5 / 100
            },
            {
                header: 'ИОГВ',
                dataIndex: 'org',
                editor: {
                    xtype: 'combobox',
                    listWidth: 100,
                    store: 'OrgStore',
                    displayField: 'org',
                    valueField: 'id'

                },
                flex: 40 / 100
            },
            {
                header: 'Тип',
                dataIndex: 'ulevel',
                editor: {
                    xtype: 'combobox',
                    store: 'UserTypeStore',
                    displayField: 'name',
                    valueField: 'id'
                },
                flex: 5 / 100
            },
            {
                xtype: 'actioncolumn',
                flex: 5 / 100,
                header: 'Действия',
                items: [
                    {
                        iconCls: 'delete',
                        tooltip: 'Удалить',
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            grid.store.remove(rec);
                            grid.store.sync();
                        }
                    }]

            }

        ];
        this.callParent(arguments);
    },
    bbar: {
        xtype: 'pagingtoolbar',
        store: 'UserStore',
        displayInfo: true,
        displayMsg: 'Показано  {0} - {1} из {2}',
        emptyMsg: "Нет данных для отображения"
    },
    tbar: [
        {
            xtype: 'button',
            tooltip: 'Добавить нового пользователя',
            iconCls: 'userAdd',
            itemId: 'userAdd'
        }
    ]
});


