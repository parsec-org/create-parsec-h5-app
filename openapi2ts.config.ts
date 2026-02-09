export default {
  schemaPath: 'http://petstore.swagger.io/v2/swagger.json',
  serversPath: './src/services/',
  projectName: '', // 项目名称，会生成对应的文件夹
  requestLibPath: "import { request } from '@umijs/max'", //自定义请求方法路径
};
