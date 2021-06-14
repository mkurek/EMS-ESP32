export enum EspPlatform {
  ESP8266 = 'esp8266',
  ESP32 = 'esp32'
}

interface ESPSystemStatus {
  emsesp_version: string;
  esp_platform: EspPlatform;
  max_alloc_heap: number;
  cpu_freq_mhz: number;
  free_heap: number;
  sdk_version: string;
  flash_chip_size: number;
  flash_chip_speed: number;
  fs_used: number;
  fs_total: number;
  uptime: string;
  free_mem: number;
}

export interface ESP32SystemStatus extends ESPSystemStatus {
  esp_platform: EspPlatform.ESP32;
  psram_size: number;
  free_psram: number;
}

export interface ESP8266SystemStatus extends ESPSystemStatus {
  esp_platform: EspPlatform.ESP8266;
  heap_fragmentation: number;
}

export type SystemStatus = ESP8266SystemStatus | ESP32SystemStatus;

export interface OTASettings {
  enabled: boolean;
  port: number;
  password: string;
}

export enum LogLevel {
  ERR = 3,
  NOTICE = 5,
  INFO = 6,
  DEBUG = 7
}

export interface LogEvent {
  time: string;
  level: LogLevel;
  message: string;
}
