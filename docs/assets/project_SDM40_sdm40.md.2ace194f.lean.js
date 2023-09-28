import{_ as e,C as t,o as c,c as r,k as s,a as n,H as l,w as p,Q as o}from"./chunks/framework.879a0371.js";const y="/docs/assets/执行效果.cfb434d6.png",E="/docs/assets/执行效果2.f5276855.png",i="/docs/assets/执行效果3.6ddaa352.png",F="/docs/assets/0.全局定位.081d0aef.png",u="/docs/assets/1.位置调整.f6ec9ca7.png",_="/docs/assets/2.计算中心.a96058e8.png",C="/docs/assets/3.选择区域.8032df2c.png",d="/docs/assets/4.拟合平面.8fca528c.png",b="/docs/assets/5.点云裁切.4bf359a8.png",B="/docs/assets/6.离群点滤波.f566a95f.png",m="/docs/assets/7.粗定位找边缘点.4bd76a95.png",D="/docs/assets/8.最左列直线.681d4d2a.png",h="/docs/assets/9.最中间直线.76e57362.png",f="/docs/assets/10.找起始点.53b80da7.png",q="/docs/assets/11.高度测量.67fca035.png",Ms=JSON.parse('{"title":"SDN40 Mating端测量示例","description":"","frontmatter":{},"headers":[],"relativePath":"project/SDM40/sdm40.md","filePath":"project/SDM40/sdm40.md"}'),A={name:"project/SDM40/sdm40.md"},x=o("",4),P=s("br",null,null,-1),g=s("br",null,null,-1),z=s("br",null,null,-1),v=s("h2",{id:"三、mating端右半部分处理",tabindex:"-1"},[n("三、Mating端右半部分处理 "),s("a",{class:"header-anchor",href:"#三、mating端右半部分处理","aria-label":'Permalink to "三、Mating端右半部分处理"'},"​")],-1),S=s("h3",{id:"_1-图像定位",tabindex:"-1"},[n("1.图像定位 "),s("a",{class:"header-anchor",href:"#_1-图像定位","aria-label":'Permalink to "1.图像定位"'},"​")],-1),V=s("br",null,null,-1),T=s("img",{src:F,alt:"本地图片"},null,-1),L=s("br",null,null,-1),k=s("br",null,null,-1),G=s("img",{src:u,alt:"本地图片"},null,-1),I=s("br",null,null,-1),N=s("br",null,null,-1),O=s("br",null,null,-1),M=s("img",{src:_,alt:"本地图片"},null,-1),w=s("br",null,null,-1),K=s("br",null,null,-1),J=s("h3",{id:"_2-拟合平面",tabindex:"-1"},[n("2.拟合平面 "),s("a",{class:"header-anchor",href:"#_2-拟合平面","aria-label":'Permalink to "2.拟合平面"'},"​")],-1),R=s("br",null,null,-1),H=s("img",{src:C,alt:"本地图片"},null,-1),$=s("br",null,null,-1),j=s("br",null,null,-1),Y=s("img",{src:d,alt:"本地图片"},null,-1),Q=s("br",null,null,-1),X=s("h3",{id:"_3-裁切滤波",tabindex:"-1"},[n("3.裁切滤波 "),s("a",{class:"header-anchor",href:"#_3-裁切滤波","aria-label":'Permalink to "3.裁切滤波"'},"​")],-1),U=s("br",null,null,-1),W=s("img",{src:b,alt:"本地图片"},null,-1),Z=s("br",null,null,-1),ss=s("br",null,null,-1),ns=s("img",{src:B,alt:"本地图片"},null,-1),as=s("br",null,null,-1),ls=s("h3",{id:"_4-位置粗判断",tabindex:"-1"},[n("4.位置粗判断 "),s("a",{class:"header-anchor",href:"#_4-位置粗判断","aria-label":'Permalink to "4.位置粗判断"'},"​")],-1),ps=s("br",null,null,-1),os=s("img",{src:m,alt:"本地图片"},null,-1),es=s("br",null,null,-1),ts=s("br",null,null,-1),cs=o("",3),rs=s("br",null,null,-1),ys=s("br",null,null,-1),Es=s("br",null,null,-1),is=s("img",{src:D,alt:"本地图片"},null,-1),Fs=s("br",null,null,-1),us=s("img",{src:h,alt:"本地图片"},null,-1),_s=s("br",null,null,-1),Cs=s("br",null,null,-1),ds=s("img",{src:f,alt:"本地图片"},null,-1),bs=s("br",null,null,-1),Bs=s("h3",{id:"_6-循环测量每个pin",tabindex:"-1"},[n("6.循环测量每个pin "),s("a",{class:"header-anchor",href:"#_6-循环测量每个pin","aria-label":'Permalink to "6.循环测量每个pin"'},"​")],-1),ms=s("br",null,null,-1),Ds=o("",1),hs=s("br",null,null,-1),fs=o("",1),qs=s("br",null,null,-1),As=s("img",{src:q,alt:"本地图片"},null,-1),xs=s("br",null,null,-1),Ps=s("br",null,null,-1),gs=s("br",null,null,-1),zs=o("",1),vs=s("br",null,null,-1),Ss=o("",3);function Vs(Ts,Ls,ks,Gs,Is,Ns){const a=t("font");return c(),r("div",null,[x,s("p",null,[n("[00] 选择"),l(a,{color:"#00ff00"},{default:p(()=>[n("Lua脚本语言")]),_:1}),n("工具，对全局变量进行初始化。"),P,n(" [01] 选择"),l(a,{color:"#00ff00"},{default:p(()=>[n("加载点云")]),_:1}),n("工具，获取点云。"),g,n(" [02] 选择"),l(a,{color:"#00ff00"},{default:p(()=>[n("3D裁切预处理")]),_:1}),n("工具，将点云复制一份到IM1（IM0不动后面可以再次使用）。"),z]),v,S,s("p",null,[n("[03]选择"),l(a,{color:"#00ff00"},{default:p(()=>[n("3D方形探针")]),_:1}),n("工具，找到定位框，输出边框-Y方向的一条直线"),V,T,L]),s("p",null,[n("[04]选择"),l(a,{color:"#00ff00"},{default:p(()=>[n("3D位置调整")]),_:1}),n("工具，将Y方向的位置调整到上一步输出的直线上"),k,G,I]),s("p",null,[n("[05-10]选择"),l(a,{color:"#00ff00"},{default:p(()=>[n("3D方形探针")]),_:1}),n("工具，找到固定物体的边框，并将边框的各条边输出"),N]),s("p",null,[n("[11]选择"),l(a,{color:"#00ff00"},{default:p(()=>[n("Lua脚本语言")]),_:1}),n("工具，获取前6步生成的线的坐标，并计算其中心的坐标，作为Mating端右半部分的中心"),O,M,w]),s("p",null,[n("[12]选择"),l(a,{color:"#00ff00"},{default:p(()=>[n("3D位置调整")]),_:1}),n("工具，将上1步生成的中心点作为新的原点，调整X和Y的位置"),K]),J,s("p",null,[n("[13-14]选择"),l(a,{color:"#00ff00"},{default:p(()=>[n("区域")]),_:1}),n("工具，选择Mating端右半部分底面4块较平整的区域进行合并"),R,H,$]),s("p",null,[n("[15]选择"),l(a,{color:"#00ff00"},{default:p(()=>[n("3D平面")]),_:1}),n("工具，根据上1步生成的区域，拟合成一个平面"),j,Y,Q]),X,s("p",null,[n("[16]选择"),l(a,{color:"#00ff00"},{default:p(()=>[n("3D裁切预处理")]),_:1}),n("工具，选择要进行测量的pin的区域，并输出到新的IM2中进行处理"),U,W,Z]),s("p",null,[n("[17-18]选择"),l(a,{color:"#00ff00"},{default:p(()=>[n("3D离群点滤波")]),_:1}),n("工具，去除pin周围的一切干扰噪点"),ss,ns,as]),ls,s("p",null,[n("[19-21]选择"),l(a,{color:"#00ff00"},{default:p(()=>[n("3D方形探针")]),_:1}),n("工具，找到3排pin的第一个pin的中心点"),ps,os,es]),s("p",null,[n("[22]选择"),l(a,{color:"#00ff00"},{default:p(()=>[n("Lua脚本语言")]),_:1}),n("工具，判断找到的3个pin的位置是否在设定范围内，并将结果显示在IM2的窗口中"),ts]),cs,s("p",null,[n("[27]选择"),l(a,{color:"#00ff00"},{default:p(()=>[n("3D斑点")]),_:1}),n("工具，选择底层的所有pin脚。"),l(a,{color:"#ff0000"},{default:p(()=>[n("注：此行为判断找到的底层pin数量是否一致，本案例暂未处理，可以先禁用掉")]),_:1}),rs,n(" [28]选择"),l(a,{color:"#00ff00"},{default:p(()=>[n("3D裁切预处理")]),_:1}),n("工具，更加精确的选择要测量的区域，也可以手动滤除一些较大难以过滤的点，输出到IM3窗口"),ys]),s("p",null,[n("[29-32]选择"),l(a,{color:"#00ff00"},{default:p(()=>[n("3D方形探针")]),_:1}),n("工具，选择新区域中最左边一列，和中间一行，并输出两条直线，脚本计算两条线的交点，作为新原点进行位置调整"),Es,is,Fs,us,_s]),s("p",null,[n("[33-34]选择"),l(a,{color:"#00ff00"},{default:p(()=>[n("3D斑点")]),_:1}),n("工具，pin针最上边一排作为起点，找到每一列的第一个pin的位置，并保存在全局变量中"),Cs,ds,bs]),Bs,s("p",null,[n("[35-37]选择"),l(a,{color:"#00ff00"},{default:p(()=>[n("标记")]),_:1}),n("工具，标明循环的列和行，并在每列开始时，通过脚本获取该列的起始点位置"),ms]),Ds,s("p",null,[n("[38]选择"),l(a,{color:"#00ff00"},{default:p(()=>[n("Lua脚本")]),_:1}),n("工具，取出每个起始点的坐标，并根据pin的间隔，设置当前pin和下一个pin的box范围，绘制在IM3窗口"),hs]),fs,s("p",null,[n("[39]选择"),l(a,{color:"#00ff00"},{default:p(()=>[n("3D高度")]),_:1}),n("工具，选择上1步脚本中创建的box(寄存器中选择)，对该pin的高度进行测量"),qs,As,xs]),s("p",null,[n("[40-41]选择"),l(a,{color:"#00ff00"},{default:p(()=>[n("3D方形探针")]),_:1}),n("工具，选择第38步脚本中创建的box(寄存器中选择)，对该pin的位置进行测量，输出pin的位置坐标"),Ps]),s("p",null,[n("[42]选择"),l(a,{color:"#00ff00"},{default:p(()=>[n("Lua语言脚本")]),_:1}),n("工具，将前3步输出的位置和高度信息进行判断(本例暂未进行和配方文件的比较)，并保存到文件中"),gs]),zs,s("p",null,[n("[43]选择"),l(a,{color:"#00ff00"},{default:p(()=>[n("Lua语言脚本")]),_:1}),n("工具，循环次数判断，一列结束时，跳转到下一列，所有列都结束后，跳转到None标记，代表此半边pin检测完成"),vs]),Ss])}const ws=e(A,[["render",Vs]]);export{Ms as __pageData,ws as default};
