'use strict'; 
var Logger = require('./lib.logger');
var Base = require('./lib.base');
var DeviceManager = require('./lib.manager.deviceManager');
var ZoneManager = require('./lib.manager.zoneManager');
var MediaListManager = require('./lib.manager.mediaListManager');

/**
 * this is the manager disposer class. 
 * it holds all available managers
 */
module.exports = class ManagerDisposer extends Base
{
    constructor()
    {
        super();
        this.deviceManager = null;
        this.zoneManager = null;
        this.mediaListManager = null;
    }
    
    additionalLogIdentifier()
    {
        return "ManagerDisposer";
    }
    
    createManagers()
    {
        this.createDeviceManager();
        this.createZoneManager();
        this.createMediaListManager();
    }

    createDeviceManager()
    {
        this.logVerbose("Creating device manager");
        this.deviceManager = new DeviceManager();
        this.deviceManager.parmLogger(this.parmLogger());
        this.deviceManager.parmManagerDisposer(this);
    }  

    createZoneManager()
    {
        this.logVerbose("Creating zone manager");
        this.zoneManager = new ZoneManager();
        this.zoneManager.parmLogger(this.parmLogger());
        this.zoneManager.parmManagerDisposer(this);
    }
    
    createMediaListManager()
    {
        this.logVerbose("Creating media list manager");
        this.mediaListManager = new MediaListManager();
        this.mediaListManager.parmLogger(this.parmLogger());
        this.mediaListManager.parmManagerDisposer(this);
    }

}