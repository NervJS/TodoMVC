const config = {
  projectName: "todo-list",
  date: "2018-7-9",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: "src",
  outputRoot: "dist",
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: "react",
  // 配置输出路径，输出到鸿蒙 JS FA 的对应目录下。(支持绝对路径、相对路径)
  // 例如鸿蒙应用名称为 MyApplication，JS FA 名称为默认的 default，那么 outputRoot 需要设置为：
  // 'MyApplication/entry/src/main/js/default'
  // outputRoot: "../../TodoMVCHarmony/entry/src/main/js/default",
  // 配置使用插件
  // plugins: ["@tarojs/plugin-platform-harmony"],
  mini: {
    // 如果使用开发者工具的预览器（previewer）进行预览的话，需要使用 development 版本的 react-reconciler。
    // 因为 previewer 对长串的压缩文本解析有问题。（真机/远程真机没有此问题）
    debugReact: true,
    // 如果需要真机断点调试，需要关闭 sourcemap 的生成
    enableSourceMap: false,
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    esnextModules: ["taro-ui"],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
