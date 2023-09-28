import{_ as e,o as r,c as t,Q as a}from"./chunks/framework.879a0371.js";const _=JSON.parse('{"title":"版本说明","description":"","frontmatter":{},"headers":[],"relativePath":"others/版本说明.md","filePath":"others/版本说明.md"}'),o={name:"others/版本说明.md"},i=a('<h1 id="版本说明" tabindex="-1">版本说明 <a class="header-anchor" href="#版本说明" aria-label="Permalink to &quot;版本说明&quot;">​</a></h1><h2 id="_0-2-3-2023-09-28" tabindex="-1">0.2.3(2023-09-28) <a class="header-anchor" href="#_0-2-3-2023-09-28" aria-label="Permalink to &quot;0.2.3(2023-09-28)&quot;">​</a></h2><h3 id="new-features" tabindex="-1">New Features <a class="header-anchor" href="#new-features" aria-label="Permalink to &quot;New Features&quot;">​</a></h3><ul><li><strong>system:</strong> 软件更名为AI-Vision-Studio</li><li><strong>system:</strong> 增加软件使用说明&quot;AI-Vision-Studio Helper.exe&quot;，存放在安装目录的docs文件夹下</li><li><strong>system:</strong> 增加安装过程中webview环境的检测与自动安装支持</li><li><strong>operator:</strong> 增加算子编辑界面中结果列表的显示使能功能</li><li><strong>operator:</strong> 删除算子编辑界面图像显示模式中的旋转模式</li><li><strong>ui:</strong> 增加对测量输出值渲染的支持，例如3D高度算子的输出结果</li><li><strong>ui:</strong> 修改图像显示界面按钮和IM显示的样式</li></ul><h3 id="bug-fixes" tabindex="-1">Bug Fixes <a class="header-anchor" href="#bug-fixes" aria-label="Permalink to &quot;Bug Fixes&quot;">​</a></h3><ul><li><strong>ui:</strong> 修复软件界面最大化最小化不能切换的bug</li><li><strong>ui:</strong> 修复矩阵寄存器列表上下拉后显示内容不全的bug</li></ul><h2 id="_0-2-2-2023-09-26" tabindex="-1">0.2.2(2023-09-26) <a class="header-anchor" href="#_0-2-2-2023-09-26" aria-label="Permalink to &quot;0.2.2(2023-09-26)&quot;">​</a></h2><h3 id="new-features-1" tabindex="-1">New Features <a class="header-anchor" href="#new-features-1" aria-label="Permalink to &quot;New Features&quot;">​</a></h3><ul><li><strong>system:</strong> 增加合并打包功能，所有文件都合并到安装exe中</li><li><strong>operator:</strong> 优化3D斑点算子的执行速度</li><li><strong>operator:</strong> 增加相对路径的使用，可以在需要选择路径的算子及Lua脚本中使用，相对位置为工程文件目录</li><li><strong>ui:</strong> 修改图像显示栏、结果输出栏的样式</li><li><strong>project:</strong> 增加平面度测量示例工程</li></ul><h3 id="bug-fixes-1" tabindex="-1">Bug Fixes <a class="header-anchor" href="#bug-fixes-1" aria-label="Permalink to &quot;Bug Fixes&quot;">​</a></h3><ul><li><strong>system:</strong> 修复部分算子翻译不完整的bug</li><li><strong>operator-editor:</strong> 修复标记算子输入内容重复时，跳转错误的bug</li><li><strong>operator-editor:</strong> 修复区域算子测试后region消失的bug</li><li><strong>operator-editor:</strong> 修复Lua语言脚本算子设置输出文字的颜色和大小失败的bug</li></ul><h2 id="_0-2-1-2023-09-22" tabindex="-1">0.2.1(2023-09-22) <a class="header-anchor" href="#_0-2-1-2023-09-22" aria-label="Permalink to &quot;0.2.1(2023-09-22)&quot;">​</a></h2><h3 id="new-features-2" tabindex="-1">New Features <a class="header-anchor" href="#new-features-2" aria-label="Permalink to &quot;New Features&quot;">​</a></h3><ul><li><strong>operator:</strong> 增加&quot;保存点云&quot;算子的支持</li><li><strong>ui:</strong> 修改程序执行栏显示样式</li><li><strong>project:</strong> 增加SDM40示例工程</li><li><strong>language:</strong> 补全算子工具的中英文语言支持</li><li><strong>operator-editor:</strong> 修改算子编辑界面的样式，添加参数依赖的显示，默认展开所有可见参数项</li><li><strong>system:</strong> 添加用户操作后的结果弹窗提示</li><li><strong>system:</strong> 增加算子执行后返回结果类型的划分，OK/WARN/NG</li></ul><h3 id="bug-fixes-2" tabindex="-1">Bug Fixes <a class="header-anchor" href="#bug-fixes-2" aria-label="Permalink to &quot;Bug Fixes&quot;">​</a></h3><ul><li><strong>system:</strong> 修复算子中文件路径含有中文报错的bug，当前版本支持中文路径</li><li><strong>operator-editor:</strong> 修复算子编辑界面结果显示框显示内容错位的bug</li><li><strong>operator-editor:</strong> 修复Lua脚本界面取消按钮点击无效的bug</li></ul><h2 id="_0-2-0-2023-09-19" tabindex="-1">0.2.0(2023-09-19) <a class="header-anchor" href="#_0-2-0-2023-09-19" aria-label="Permalink to &quot;0.2.0(2023-09-19)&quot;">​</a></h2><h3 id="new-features-3" tabindex="-1">New Features <a class="header-anchor" href="#new-features-3" aria-label="Permalink to &quot;New Features&quot;">​</a></h3><ul><li><strong>system:</strong> 优化算子运行速度</li><li><strong>ui:</strong> 修改ui显示样式</li><li><strong>operator:</strong> 支持的算子 <ol><li>取图：Gocator、加载点云</li><li>预处理：3D裁切、点云下采样、孔洞填补、3D离群点滤波、3D变换</li><li>几何：平面度、3D高度、3D平面、3D位置调整、3D方形探针、3D区域</li><li>物体：3D斑点、3D孔</li><li>文件：加载配置文件</li><li>逻辑：跳转、标记</li><li>脚本：Lua语言脚本</li></ol></li></ul><h2 id="_0-1-0-2023-08-04" tabindex="-1">0.1.0(2023-08-04) <a class="header-anchor" href="#_0-1-0-2023-08-04" aria-label="Permalink to &quot;0.1.0(2023-08-04)&quot;">​</a></h2><h3 id="new-features-4" tabindex="-1">New Features <a class="header-anchor" href="#new-features-4" aria-label="Permalink to &quot;New Features&quot;">​</a></h3><p>此为AI-Vision的第一个demo版本，提供了基础的软件操作功能，和基于pin针应用相关的3D算子。</p>',22),s=[i];function l(n,u,g,h,d,c){return r(),t("div",null,s)}const f=e(o,[["render",l]]);export{_ as __pageData,f as default};
