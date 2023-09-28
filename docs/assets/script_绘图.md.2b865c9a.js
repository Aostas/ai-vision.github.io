import{_ as t,o as a,c as d,Q as e}from"./chunks/framework.879a0371.js";const y=JSON.parse('{"title":"绘图","description":"","frontmatter":{},"headers":[],"relativePath":"script/绘图.md","filePath":"script/绘图.md"}'),r={name:"script/绘图.md"},s=e('<h1 id="绘图" tabindex="-1">绘图 <a class="header-anchor" href="#绘图" aria-label="Permalink to &quot;绘图&quot;">​</a></h1><h2 id="点-point" tabindex="-1">点 Point <a class="header-anchor" href="#点-point" aria-label="Permalink to &quot;点 Point&quot;">​</a></h2><h3 id="drawpoint" tabindex="-1">DrawPoint <a class="header-anchor" href="#drawpoint" aria-label="Permalink to &quot;DrawPoint&quot;">​</a></h3><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">DrawPoint</span><span style="color:#E1E4E8;">(index, x, y, z)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">DrawPoint</span><span style="color:#24292E;">(index, x, y, z)</span></span></code></pre></div><p>在指定的图像寄存器上绘制一个点。</p><h4 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>index</td><td>Integer 整数</td><td>图像寄存器索引</td></tr><tr><td>x</td><td>Number 数字(双精度浮点数)</td><td>点的坐标的X轴坐标</td></tr><tr><td>y</td><td>Number 数字(双精度浮点数)</td><td>点的坐标的Y轴坐标</td></tr><tr><td>z</td><td>Number 数字(双精度浮点数)</td><td>点的坐标的Z轴坐标</td></tr></tbody></table><h2 id="直线-line" tabindex="-1">直线 Line <a class="header-anchor" href="#直线-line" aria-label="Permalink to &quot;直线 Line&quot;">​</a></h2><h3 id="drawline" tabindex="-1">DrawLine <a class="header-anchor" href="#drawline" aria-label="Permalink to &quot;DrawLine&quot;">​</a></h3><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">DrawLine</span><span style="color:#E1E4E8;">(index, x, y, z, vx, vy, vz)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">DrawLine</span><span style="color:#24292E;">(index, x, y, z, vx, vy, vz)</span></span></code></pre></div><p>在指定的图像寄存器上绘制一条直线。</p><h4 id="参数-1" tabindex="-1">参数 <a class="header-anchor" href="#参数-1" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>index</td><td>Integer 整数</td><td>图像寄存器索引</td></tr><tr><td>x</td><td>Number 数字(双精度浮点数)</td><td>直线的坐标的X轴坐标</td></tr><tr><td>y</td><td>Number 数字(双精度浮点数)</td><td>直线的坐标的Y轴坐标</td></tr><tr><td>z</td><td>Number 数字(双精度浮点数)</td><td>直线的坐标的Z轴坐标</td></tr><tr><td>vx</td><td>Number 数字(双精度浮点数)</td><td>直线的方向向量的X轴方向</td></tr><tr><td>vy</td><td>Number 数字(双精度浮点数)</td><td>直线的方向向量的Y轴方向</td></tr><tr><td>vz</td><td>Number 数字(双精度浮点数)</td><td>直线的方向向量的Z轴方向</td></tr></tbody></table><h2 id="平面-plane" tabindex="-1">平面 Plane <a class="header-anchor" href="#平面-plane" aria-label="Permalink to &quot;平面 Plane&quot;">​</a></h2><h3 id="drawplane" tabindex="-1">DrawPlane <a class="header-anchor" href="#drawplane" aria-label="Permalink to &quot;DrawPlane&quot;">​</a></h3><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">DrawPlane</span><span style="color:#E1E4E8;">(index, x, y, z, vx, vy, vz)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">DrawPlane</span><span style="color:#24292E;">(index, x, y, z, vx, vy, vz)</span></span></code></pre></div><p>在指定的图像寄存器上绘制一个平面。</p><h4 id="参数-2" tabindex="-1">参数 <a class="header-anchor" href="#参数-2" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>index</td><td>Integer 整数</td><td>图像寄存器索引</td></tr><tr><td>x</td><td>Number 数字(双精度浮点数)</td><td>平面的坐标的X轴坐标</td></tr><tr><td>y</td><td>Number 数字(双精度浮点数)</td><td>平面的坐标的Y轴坐标</td></tr><tr><td>z</td><td>Number 数字(双精度浮点数)</td><td>平面的坐标的Z轴坐标</td></tr><tr><td>vx</td><td>Number 数字(双精度浮点数)</td><td>平面的法向量的X轴方向</td></tr><tr><td>vy</td><td>Number 数字(双精度浮点数)</td><td>平面的法向量的Y轴方向</td></tr><tr><td>vz</td><td>Number 数字(双精度浮点数)</td><td>平面的法向量的Z轴方向</td></tr></tbody></table><h2 id="窗口-window-暂未实现" tabindex="-1">窗口 Window 暂未实现 <a class="header-anchor" href="#窗口-window-暂未实现" aria-label="Permalink to &quot;窗口 Window 暂未实现&quot;">​</a></h2><h3 id="drawwindow" tabindex="-1">DrawWindow <a class="header-anchor" href="#drawwindow" aria-label="Permalink to &quot;DrawWindow&quot;">​</a></h3><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">DrawWindow</span><span style="color:#E1E4E8;">(index, sx, sy, ex, ey)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">DrawWindow</span><span style="color:#24292E;">(index, sx, sy, ex, ey)</span></span></code></pre></div><p>在指定的图像寄存器上绘制一个窗口。</p><h4 id="参数-3" tabindex="-1">参数 <a class="header-anchor" href="#参数-3" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>index</td><td>Integer 整数</td><td>图像寄存器索引</td></tr><tr><td>sx</td><td>Number 数字(双精度浮点数)</td><td>窗口的起点坐标的X轴坐标</td></tr><tr><td>sy</td><td>Number 数字(双精度浮点数)</td><td>窗口的起点坐标的Y轴坐标</td></tr><tr><td>ex</td><td>Number 数字(双精度浮点数)</td><td>窗口的终点坐标的X轴坐标</td></tr><tr><td>ey</td><td>Number 数字(双精度浮点数)</td><td>窗口的终点坐标的Y轴坐标</td></tr></tbody></table><h2 id="圆形窗口-circlewindow-暂未实现" tabindex="-1">圆形窗口 CircleWindow 暂未实现 <a class="header-anchor" href="#圆形窗口-circlewindow-暂未实现" aria-label="Permalink to &quot;圆形窗口 CircleWindow 暂未实现&quot;">​</a></h2><h3 id="drawcirclewindow" tabindex="-1">DrawCircleWindow <a class="header-anchor" href="#drawcirclewindow" aria-label="Permalink to &quot;DrawCircleWindow&quot;">​</a></h3><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">DrawCircleWindow</span><span style="color:#E1E4E8;">(index, x, y, r)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">DrawCircleWindow</span><span style="color:#24292E;">(index, x, y, r)</span></span></code></pre></div><p>在指定的图像寄存器上绘制一个圆形窗口。</p><h4 id="参数-4" tabindex="-1">参数 <a class="header-anchor" href="#参数-4" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>index</td><td>Integer 整数</td><td>图像寄存器索引</td></tr><tr><td>x</td><td>Number 数字(双精度浮点数)</td><td>圆形窗口的圆心坐标的X轴坐标</td></tr><tr><td>y</td><td>Number 数字(双精度浮点数)</td><td>圆形窗口的圆心坐标的Y轴坐标</td></tr><tr><td>r</td><td>Number 数字(双精度浮点数)</td><td>圆形窗口的半径</td></tr></tbody></table><h2 id="盒子-box" tabindex="-1">盒子 Box <a class="header-anchor" href="#盒子-box" aria-label="Permalink to &quot;盒子 Box&quot;">​</a></h2><h3 id="drawbox" tabindex="-1">DrawBox <a class="header-anchor" href="#drawbox" aria-label="Permalink to &quot;DrawBox&quot;">​</a></h3><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">DrawBox</span><span style="color:#E1E4E8;">(index, sx, sy, sz, ex, ey, ez)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">DrawBox</span><span style="color:#24292E;">(index, sx, sy, sz, ex, ey, ez)</span></span></code></pre></div><p>在指定的图像寄存器上绘制一个盒子。</p><h4 id="参数-5" tabindex="-1">参数 <a class="header-anchor" href="#参数-5" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>index</td><td>Integer 整数</td><td>图像寄存器索引</td></tr><tr><td>sx</td><td>Number 数字(双精度浮点数)</td><td>盒子的起点坐标的X轴坐标</td></tr><tr><td>sy</td><td>Number 数字(双精度浮点数)</td><td>盒子的起点坐标的Y轴坐标</td></tr><tr><td>sz</td><td>Number 数字(双精度浮点数)</td><td>盒子的起点坐标的Z轴坐标</td></tr><tr><td>ex</td><td>Number 数字(双精度浮点数)</td><td>盒子的终点点坐标的X轴坐标</td></tr><tr><td>ey</td><td>Number 数字(双精度浮点数)</td><td>盒子的终点点坐标的Y轴坐标</td></tr><tr><td>ez</td><td>Number 数字(双精度浮点数)</td><td>盒子的终点点坐标的Z轴坐标</td></tr></tbody></table><h2 id="定向盒-orientedbox-暂未实现" tabindex="-1">定向盒 OrientedBox 暂未实现 <a class="header-anchor" href="#定向盒-orientedbox-暂未实现" aria-label="Permalink to &quot;定向盒 OrientedBox 暂未实现&quot;">​</a></h2><h3 id="draworientedbox" tabindex="-1">DrawOrientedBox <a class="header-anchor" href="#draworientedbox" aria-label="Permalink to &quot;DrawOrientedBox&quot;">​</a></h3><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">DrawOrientedBox</span><span style="color:#E1E4E8;">(index, cx, cy, cz, sx, sy, sz, rx, ry, rz)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">DrawOrientedBox</span><span style="color:#24292E;">(index, cx, cy, cz, sx, sy, sz, rx, ry, rz)</span></span></code></pre></div><p>在指定的图像寄存器上绘制一个定向盒。</p><h4 id="参数-6" tabindex="-1">参数 <a class="header-anchor" href="#参数-6" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>index</td><td>Integer 整数</td><td>图像寄存器索引</td></tr><tr><td>cx</td><td>Number 数字(双精度浮点数)</td><td>定向盒的中心点坐标的X轴坐标</td></tr><tr><td>cy</td><td>Number 数字(双精度浮点数)</td><td>定向盒的中心点坐标的Y轴坐标</td></tr><tr><td>cz</td><td>Number 数字(双精度浮点数)</td><td>定向盒的中心点坐标的Z轴坐标</td></tr><tr><td>sx</td><td>Number 数字(双精度浮点数)</td><td>定向盒的大小的X轴方向长度</td></tr><tr><td>sy</td><td>Number 数字(双精度浮点数)</td><td>定向盒的大小的Y轴方向长度</td></tr><tr><td>sz</td><td>Number 数字(双精度浮点数)</td><td>定向盒的大小的Z轴方向长度</td></tr><tr><td>rx</td><td>Number 数字(双精度浮点数)</td><td>定向盒绕X轴旋转的角度</td></tr><tr><td>ry</td><td>Number 数字(双精度浮点数)</td><td>定向盒绕Y轴旋转的角度</td></tr><tr><td>rz</td><td>Number 数字(双精度浮点数)</td><td>定向盒绕Z轴旋转的角度</td></tr></tbody></table><h2 id="overlay" tabindex="-1">Overlay <a class="header-anchor" href="#overlay" aria-label="Permalink to &quot;Overlay&quot;">​</a></h2><h3 id="drawoverlay" tabindex="-1">DrawOverlay <a class="header-anchor" href="#drawoverlay" aria-label="Permalink to &quot;DrawOverlay&quot;">​</a></h3><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">DrawOverlay</span><span style="color:#E1E4E8;">(index, x, y, z, size, color, text)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">DrawOverlay</span><span style="color:#24292E;">(index, x, y, z, size, color, text)</span></span></code></pre></div><p>在指定的图像寄存器上绘制Overlay。</p><h4 id="参数-7" tabindex="-1">参数 <a class="header-anchor" href="#参数-7" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>index</td><td>Integer 整数</td><td>图像寄存器索引</td></tr><tr><td>x</td><td>Number 数字(双精度浮点数)</td><td>overlay的位置坐标的X轴坐标</td></tr><tr><td>y</td><td>Number 数字(双精度浮点数)</td><td>overlay的位置坐标的Y轴坐标</td></tr><tr><td>z</td><td>Number 数字(双精度浮点数)</td><td>overlay的位置坐标的Z轴坐标</td></tr><tr><td>size</td><td>Number 数字(双精度浮点数)</td><td>overlay的字体大小</td></tr><tr><td>color</td><td>String 字符串</td><td>overlay的字体颜色</td></tr><tr><td>text</td><td>String 字符串</td><td>overlay的内容</td></tr></tbody></table>',49),l=[s];function o(n,i,h,c,p,b){return a(),d("div",null,l)}const x=t(r,[["render",o]]);export{y as __pageData,x as default};
