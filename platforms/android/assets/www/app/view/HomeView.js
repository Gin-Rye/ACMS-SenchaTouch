Ext.define('acms.view.HomeView', {
    extend: 'Ext.Panel',
    xtype: 'homeview',
    requires: [
    ],
    config: {
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
    	items: [{
    		xtype: 'titlebar',
	        title: 'Home',
	        docked: 'top',
	        ui: 'light',
	        items: [/*{
	        	xtype: 'button',
	        	text: 'File',
	        	handler: function() {
	        		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0,
	        			function(fileSystem) {
	        				var directoryReader = fileSystem.root.createReader();
	        				directoryReader.readEntries(
	        					function(entries) {
	        						alert(entries.length);
	        						for(var i = 0; i < entries.length; i++) {
	        							alert(entries[i].name);
	        						}
	        					},
	        					function(error) {
	        						alert("Fail!");
	        					}
	        				);
	        			},
	        			function() {
	        				alert("Fail!");
	        			}
	        		);
	        	}
	        }, {
	        	xtype: 'button',
	        	text: 'Open',
	        	handler: function() {
	        		navigator.PrinterShare.print("/storage/sdcard0/Download/MIAGFIYR.pdf");
	        	}
	        }*/]
        }, {
    		flex: 1,
            xtype: 'component',
            html: '<center> Welcome to ACMS-Mobile</center>',
            style: 'background:white'
        }]
    }
});