# Harmony + TodoMVC

> 支持 API 6

## 鸿蒙config.json配置文件

```json
// 自定义标题栏
"metaData": {
  "customizeData": [
    {
      "name": "hwc-theme",
      "value": "androidhwext:style/Theme.Emui.NoTitleBar"
    }
  ]
},
// 配置权限
"reqPermissions": [
  {
    "name": "ohos.permission.INTERNET" // 配置网络权限，导航栏图片使用
  }
],
"js": [
  {
    "name": "default",
    "window": {
      "designWidth": 720,
      "autoDesignWidth": false // 适配样式
    },
    "pages": [
      "pages/index/index"
    ]
  }
]

```
