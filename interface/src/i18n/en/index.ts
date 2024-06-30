import type { Translation } from '../i18n-types';

const en: Translation = {
  LANGUAGE: 'Language',
  RETRY: 'Retry',
  LOADING: 'Loading',
  IS_REQUIRED: '{0} is required',
  SIGN_IN: 'Sign In',
  SIGN_OUT: 'Sign Out',
  USERNAME: 'Username',
  PASSWORD: 'Password',
  SU_PASSWORD: 'su Password',
  SETTINGS_OF: '{0} Settings',
  HELP_OF: '{0} Help',
  LOGGED_IN: 'Logged in as {name}',
  PLEASE_SIGNIN: 'Please sign in to continue',
  UPLOAD_SUCCESSFUL: 'Upload successful',
  DOWNLOAD_SUCCESSFUL: 'Download successful',
  INVALID_LOGIN: 'Invalid login details',
  NETWORK: 'Network',
  SECURITY: 'Security',
  ONOFF_CAP: 'ON/OFF',
  ONOFF: 'on/off',
  TYPE: 'Type',
  DESCRIPTION: 'Description',
  ENTITIES: 'entities',
  REFRESH: 'Refresh',
  EXPORT: 'Export',
  DEVICE_DETAILS: 'Device Details',
  ID_OF: '{0} ID',
  DEVICE: 'Device',
  PRODUCT: 'Product',
  VERSION: 'Version',
  BRAND: 'Brand',
  ENTITY_NAME: 'Entity Name',
  VALUE: '{{value|Value}}',
  DEVICES: 'Devices',
  SENSORS: 'Sensors',
  RUN_COMMAND: 'Call Command',
  CHANGE_VALUE: 'Change Value',
  CANCEL: 'Cancel',
  RESET: 'Reset',
  APPLY_CHANGES: 'Apply Changes ({0})',
  UPDATE: 'Update',
  EXECUTE: 'Execute',
  REMOVE: 'Remove',
  PROBLEM_UPDATING: 'Problem updating',
  PROBLEM_LOADING: 'Problem loading',
  ANALOG_SENSOR: 'Analog Sensor',
  ANALOG_SENSORS: 'Analog Sensors',
  SETTINGS: 'Settings',
  UPDATED_OF: '{0} Updated',
  UPDATE_OF: '{0} Update',
  REMOVED_OF: '{0} Removed',
  DELETION_OF: '{0} Deletion',
  OFFSET: 'Offset',
  FACTOR: 'Factor',
  FREQ: 'Frequency',
  DUTY_CYCLE: 'Duty Cycle',
  UNIT: 'UoM',
  STARTVALUE: 'Start Value',
  WARN_GPIO: 'Warning: be careful when assigning a GPIO!',
  EDIT: 'Edit',
  SENSOR: 'Sensor',
  TEMP_SENSOR: 'Temperature Sensor',
  TEMP_SENSORS: 'Temperature Sensors',
  WRITE_CMD_SENT: 'Write command sent',
  EMS_BUS_WARNING: 'EMS bus disconnected. If this warning still persists after a few seconds please check settings and board profile',
  EMS_BUS_SCANNING: 'Scanning for EMS devices...',
  CONNECTED: 'Connected',
  TX_ISSUES: 'Tx issues - check Tx Mode',
  DISCONNECTED: 'Disconnected',
  EMS_SCAN: 'Are you sure you want to initiate a full device scan of the EMS bus?',
  EMS_BUS_STATUS: 'EMS Bus Status',
  ACTIVE_DEVICES: 'Active Devices & Sensors',
  EMS_DEVICE: 'EMS Device',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
  QUALITY: 'QUALITY',
  SCAN_DEVICES: 'Scan for new devices',
  SCAN: 'Scan',
  STATUS_NAMES: [
    'EMS Telegrams Received (Rx)',
    'EMS Reads (Tx)',
    'EMS Writes (Tx)',
    'Temperature Sensor Reads',
    'Analog Sensor Reads',
    'MQTT Publishes',
    'API Calls',
    'Syslog Messages'
  ],
  NUM_DEVICES: '{num} Device{{s}}',
  NUM_TEMP_SENSORS: '{num} Temperature Sensor{{s}}',
  NUM_ANALOG_SENSORS: '{num} Analog Sensor{{s}}',
  NUM_DAYS: '{num} day{{s}}',
  NUM_SECONDS: '{num} second{{s}}',
  NUM_HOURS: '{num} hour{{s}}',
  NUM_MINUTES: '{num} minute{{s}}',
  APPLICATION: 'Application',
  CUSTOMIZATIONS: 'Customizations',
  APPLICATION_RESTARTING: 'EMS-ESP is restarting',
  INTERFACE_BOARD_PROFILE: 'Interface Board Profile',
  BOARD_PROFILE_TEXT: 'Select a pre-configured interface board profile from the list below or choose Custom to configure your own hardware settings',
  BOARD_PROFILE: 'Board Profile',
  CUSTOM: 'Custom',
  GPIO_OF: '{0} GPIO',
  BUTTON: 'Button',
  TEMPERATURE: 'Temperature',
  PHY_TYPE: 'Eth PHY Type',
  DISABLED: 'disabled',
  TX_MODE: 'Tx Mode',
  HARDWARE: 'Hardware',
  EMS_BUS: '{{BUS|EMS BUS}}',
  GENERAL_OPTIONS: 'General Options',
  LANGUAGE_ENTITIES: 'Language (for device entities)',
  HIDE_LED: 'Hide LED',
  ENABLE_TELNET: 'Enable Telnet Console',
  ENABLE_ANALOG: 'Enable Analog Sensors',
  CONVERT_FAHRENHEIT: 'Convert temperature values to Fahrenheit',
  BYPASS_TOKEN: 'Bypass Access Token authorization on API calls',
  READONLY: 'Enable read-only mode (blocks all outgoing EMS Tx Write commands)',
  UNDERCLOCK_CPU: 'Underclock CPU speed',
  REMOTE_TIMEOUT: 'Remote timeout',
  REMOTE_TIMEOUT_EN: 'Disable remote on missing roomtemperature',
  HEATINGOFF: 'Start boiler with forced heating off',
  MIN_DURATION: 'Time for detection shower',
  ENABLE_SHOWER_TIMER: 'Enable Shower Timer',
  ENABLE_SHOWER_ALERT: 'Enable Shower Alert',
  TRIGGER_TIME: 'Trigger Time',
  COLD_SHOT_DURATION: 'Cold Shot Duration',
  FORMATTING_OPTIONS: 'Formatting Options',
  BOOLEAN_FORMAT_DASHBOARD: 'Boolean Format Dashboard',
  BOOLEAN_FORMAT_API: 'Boolean Format API/MQTT',
  ENUM_FORMAT: 'Enum Format API/MQTT',
  INDEX: 'Index',
  ENABLE_PARASITE: 'Enable parasite power',
  LOGGING: 'Logging',
  LOG_HEX: 'Log EMS telegrams in hexadecimal',
  ENABLE_SYSLOG: 'Enable Syslog',
  LOG_LEVEL: 'Log Level',
  MARK_INTERVAL: 'Mark Interval',
  SECONDS: 'seconds',
  MINUTES: 'minutes',
  HOURS: 'hours',
  RESTART: 'Restart',
  RESTART_TEXT: 'EMS-ESP needs to be restarted to apply changed system settings',
  RESTART_CONFIRM: 'Are you sure you want to restart EMS-ESP?',
  COMMAND: 'Command',
  CUSTOMIZATIONS_RESTART: 'All customizations have been removed. Restarting...',
  CUSTOMIZATIONS_FULL: 'Selected entities exceeded limit. Please save in batches',
  CUSTOMIZATIONS_SAVED: 'Customizations saved',
  CUSTOMIZATIONS_HELP_1: 'Select a device and customize the entities options or click to rename',
  CUSTOMIZATIONS_HELP_2: 'mark as favorite',
  CUSTOMIZATIONS_HELP_3: 'disable write action',
  CUSTOMIZATIONS_HELP_4: 'exclude from MQTT and API',
  CUSTOMIZATIONS_HELP_5: 'hide from Dashboard',
  CUSTOMIZATIONS_HELP_6: 'remove from memory',
  SELECT_DEVICE: 'select a device',
  SET_ALL: 'set all',
  OPTIONS: 'Options',
  NAME: 'Name',
  CUSTOMIZATIONS_RESET: 'Are you sure you want remove all customizations including the custom settings of the Temperature and Analog sensors?',
  SUPPORT_INFORMATION: 'Support Information',
  HELP_INFORMATION_1: 'Visit the online wiki to get instructions on how to configure EMS-ESP',
  HELP_INFORMATION_2: 'For live community chat join our Discord server',
  HELP_INFORMATION_3: 'To request a feature or report a bug',
  HELP_INFORMATION_4: 'Download and attach your support information for a faster response when reporting an issue',
  HELP_INFORMATION_5: 'EMS-ESP is a free and open-source project. Please support its future development by giving it a star on GitHub!',
  UPLOAD: 'Upload',
  DOWNLOAD: '{{D|d|d}}ownload',
  ABORTED: 'aborted',
  FAILED: 'failed',
  SUCCESSFUL: 'successful',
  SYSTEM: 'System',
  LOG_OF: '{0} Log',
  STATUS_OF: '{0} Status',
  UPLOAD_DOWNLOAD: 'Upload/Download',
  VERSION_ON: 'You are currently on version',
  CLOSE: 'Close',
  USE: 'Use',
  FACTORY_RESET: 'Factory Reset',
  SYSTEM_FACTORY_TEXT: 'Device has been factory reset and will now restart',
  SYSTEM_FACTORY_TEXT_DIALOG: 'Are you sure you want to reset EMS-ESP to its factory defaults?',
  THE_LATEST: 'The latest',
  OFFICIAL: 'official',
  DEVELOPMENT: 'development',
  RELEASE_IS: 'release is',
  RELEASE_NOTES: 'release notes',
  EMS_ESP_VER: 'EMS-ESP Version',
  UPTIME: 'System Uptime',
  HEAP: 'Heap (Free / Max Alloc)',
  PSRAM: 'PSRAM (Size / Free)',
  FLASH: 'Flash Chip (Size / Speed)',
  APPSIZE: 'Application (Partition: Used / Free)',
  FILESYSTEM: 'File System (Used / Free)',
  BUFFER_SIZE: 'Max Buffer Size',
  COMPACT: 'Compact',
  DOWNLOAD_CUSTOMIZATION_TEXT: 'Download the entity customizations',
  DOWNLOAD_SCHEDULE_TEXT: 'Download Scheduler Events',
  DOWNLOAD_SETTINGS_TEXT: 'Download the application settings. Be careful when sharing your settings as this file contains passwords and other sensitive system information',
  UPLOAD_TEXT: 'Upload a new firmware (.bin) file, settings or customizations (.json) file below, for optional validation upload (.md5) first',
  UPLOADING: 'Uploading',
  UPLOAD_DROP_TEXT: 'Drop file or click here',
  ERROR: 'Unexpected Error, please try again',
  TIME_SET: 'Time set',
  MANAGE_USERS: 'Manage Users',
  IS_ADMIN: 'is Admin',
  USER_WARNING: 'You must have at least one admin user configured',
  ADD: 'Add',
  ACCESS_TOKEN_FOR: 'Access Token for',
  ACCESS_TOKEN_TEXT: 'The token below is used with REST API calls that require authorization. It can be passed either as a Bearer token in the Authorization header or in the access_token URL query parameter.',
  GENERATING_TOKEN: 'Generating token',
  USER: 'User',
  MODIFY: 'Modify',
  SU_TEXT: 'The su (super user) password is used to sign authentication tokens and also enable admin privileges within the Console.',
  NOT_ENABLED: 'Not enabled',
  ERRORS_OF: '{0} Errors',
  DISCONNECT_REASON: 'Disconnect Reason',
  ENABLE_MQTT: 'Enable MQTT',
  BROKER: 'Broker',
  CLIENT: 'Client',
  BASE_TOPIC: 'Base',
  OPTIONAL: 'optional',
  FORMATTING: 'Formatting',
  MQTT_FORMAT: 'Topic/Payload Format',
  MQTT_NEST_1: 'Nested in a single topic',
  MQTT_NEST_2: 'As individual topics',
  MQTT_RESPONSE: 'Publish command output to a `response` topic',
  MQTT_PUBLISH_TEXT_1: 'Publish single value topics on change',
  MQTT_PUBLISH_TEXT_2: 'Publish to command topics (ioBroker)',
  MQTT_PUBLISH_TEXT_3: 'Enable MQTT Discovery',
  MQTT_PUBLISH_TEXT_4: 'Prefix for the Discovery topics',
  MQTT_PUBLISH_TEXT_5: 'Discovery type',
  MQTT_PUBLISH_INTERVALS: 'Publish Intervals',
  MQTT_INT_BOILER: 'Boilers and Heat Pumps',
  MQTT_INT_THERMOSTATS: 'Thermostats',
  MQTT_INT_SOLAR: 'Solar Modules',
  MQTT_INT_MIXER: 'Mixer Modules',
  MQTT_INT_WATER: 'Water Modules',
  MQTT_QUEUE: 'MQTT Queue',
  DEFAULT: 'Default',
  MQTT_ENTITY_FORMAT: 'Entity ID format',
  MQTT_ENTITY_FORMAT_0: 'Single instance, long name (v3.4)',
  MQTT_ENTITY_FORMAT_1: 'Single instance, short name',
  MQTT_ENTITY_FORMAT_2: 'Multiple instances, short name',
  MQTT_CLEAN_SESSION: 'Set Clean Session',
  MQTT_RETAIN_FLAG: 'Always set Retain flag',
  INACTIVE: 'Inactive',
  ACTIVE: 'Active',
  UNKNOWN: 'Unknown',
  SET_TIME: 'Set Time',
  SET_TIME_TEXT: 'Enter local date and time below to set the time',
  LOCAL_TIME: 'Local Time',
  UTC_TIME: 'UTC Time',
  ENABLE_NTP: 'Enable NTP',
  NTP_SERVER: 'NTP Server',
  TIME_ZONE: 'Time Zone',
  ACCESS_POINT: 'Access Point',
  AP_PROVIDE: 'Enable Access Point',
  AP_PROVIDE_TEXT_1: 'always',
  AP_PROVIDE_TEXT_2: 'when WiFi is disconnected',
  AP_PROVIDE_TEXT_3: 'never',
  AP_PREFERRED_CHANNEL: 'Preferred Channel',
  AP_HIDE_SSID: 'Hide SSID',
  AP_CLIENTS: 'AP Clients',
  AP_MAX_CLIENTS: 'Max Clients',
  AP_LOCAL_IP: 'Local IP',
  NETWORK_SCAN: 'Scan WiFi Networks',
  IDLE: 'Idle',
  LOST: 'Lost',
  SCANNING: 'Scanning',
  SCAN_AGAIN: 'Scan again',
  NETWORK_SCANNER: 'Network Scanner',
  NETWORK_NO_WIFI: 'No WiFi networks found',
  NETWORK_BLANK_SSID: 'leave blank to disable WiFi and enable ETH',
  NETWORK_BLANK_BSSID: 'leave blank to use only SSID',
  TX_POWER: 'Tx Power',
  HOSTNAME: 'Hostname',
  NETWORK_DISABLE_SLEEP: 'Disable WiFi Sleep Mode',
  NETWORK_LOW_BAND: 'Use Lower WiFi Bandwidth',
  NETWORK_USE_DNS: 'Enable mDNS Service',
  NETWORK_ENABLE_CORS: 'Enable CORS',
  NETWORK_CORS_ORIGIN: 'CORS origin',
  NETWORK_FIXED_IP: 'Use Fixed IP address',
  NETWORK_GATEWAY: 'Gateway',
  NETWORK_SUBNET: 'Subnet Mask',
  NETWORK_DNS: 'DNS Servers',
  ADDRESS_OF: '{0} Address',
  ADMINISTRATOR: 'Administrator',
  GUEST: 'Guest',
  NEW: 'New',
  NEW_NAME_OF: 'New {0} name',
  ENTITY: 'entity',
  MIN: 'min',
  MAX: 'max',
  BLOCK_NAVIGATE_1: 'You have unsaved changes',
  BLOCK_NAVIGATE_2: 'If you navigate to a different page, your unsaved changes will be lost. Are you sure you want to leave this page?',
  STAY: 'Stay',
  LEAVE: 'Leave',
  SCHEDULER: 'Scheduler',
  SCHEDULER_HELP_1: 'Automate commands by adding scheduled events below. Set a unique Name to enable/disable activation via API/MQTT.',
  SCHEDULER_HELP_2: 'Use 00:00 to trigger once on start-up',
  SCHEDULE: 'Schedule',
  TIME: 'Time',
  TIMER: 'Timer',
  SCHEDULE_UPDATED: 'Schedule updated',
  SCHEDULE_TIMER_1: 'on startup',
  SCHEDULE_TIMER_2: 'every minute',
  SCHEDULE_TIMER_3: 'every hour',
  CUSTOM_ENTITIES: 'Custom Entities',
  ENTITIES_HELP_1: 'Define custom EMS entities or dynamic user variables',
  ENTITIES_UPDATED: 'Entities Updated',
  WRITEABLE: 'Writeable',
  SHOWING: 'Showing',
  SEARCH: 'Search',
  CERT: 'TLS root certificate (leave blank for insecure)',
  ENABLE_TLS: 'Enable TLS',
  ON: 'On',
  OFF: 'Off',
  POLARITY: 'Polarity',
  ACTIVEHIGH: 'Active High',
  ACTIVELOW: 'Active Low',
  UNCHANGED: 'Unchanged',
  ALWAYS: 'Always',
  ACTIVITY: 'Activity',
  CONFIGURE: 'Configure {0}',
  SYSTEM_MEMORY: 'System Memory',
  APPLICATION_SETTINGS_1: 'Modify EMS-ESP Application Settings',
  SECURITY_1: 'Add or remove users',
  UPLOAD_DOWNLOAD_1: 'Upload/Download Settings and Firmware',
  MODULES: 'Modules',
  MODULES_UPDATED: 'Modules updated',
  MODULES_DESCRIPTION: 'Click on the Module to activate or de-activate EMS-ESP library modules',
  MODULES_NONE: 'No external modules detected',
  RENAME: 'Rename',
  ENABLE_MODBUS: 'Enable Modbus'
};

export default en;
