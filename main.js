var application = require('app'),
    BrowserWindow = require('browser-window');

application.on('ready', function() {
    var mainWindow = new BrowserWindow({
        width: 600,
        height: 300,
        center:true,
        title:"ElectronPowerMonitorDemo",
    }),
    PowerMonitor = require('power-monitor');
    PowerMonitor.on('on-battery',function(){
        mainWindow.webContents.send("changeTheme",{styleClass:'dark'});
    });
    PowerMonitor.on('on-ac',function(){
        mainWindow.webContents.send("changeTheme",{styleClass:'light'});
    });
    console.log("PowerMonitor",PowerMonitor);
    mainWindow.loadUrl('file://' + __dirname + '/main.html');
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});