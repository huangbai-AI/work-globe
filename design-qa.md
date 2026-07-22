# Design QA

- 最终参考稿：`/var/folders/zn/896c9d3n7x1bv9tzsmkfvs880000gn/T/codex-clipboard-ce485315-02db-43f7-95a4-bb3d8ece0800.png`
- 国家浮雕边缘同尺寸对照：`output/design-qa/openwork-raised-paper-comparison.png`
- 首页最终截图：`output/design-qa/openwork-raised-paper-edge-final.png`
- 探索页最终截图：`output/design-qa/openwork-raised-paper-explore.png`
- 移动端最终截图：`output/design-qa/openwork-raised-paper-mobile.png`
- 宽屏位置微调截图：`output/design-qa/openwork-position-tune-2048x987.png`
- 参考与实现同尺寸对照：`output/design-qa/openwork-1536x1024-comparison-pass5.png`
- 标题与按钮局部对照：`output/design-qa/openwork-hero-comparison-pass5.png`
- 地球局部对照：`output/design-qa/openwork-globe-comparison-pass5.png`
- 探索页桌面截图：`output/design-qa/openwork-explore-1536x1024-pass5.png`
- 悬停卡片动效截图：`output/design-qa/openwork-explore-hover-pass5c.png`
- 移动端首页：`output/design-qa/openwork-mobile-390x844-pass5.png`
- 移动端探索页：`output/design-qa/openwork-mobile-explore-390x844-pass5.png`
- 对照尺寸：1536 × 1024，比例 3:2；移动端补充验收尺寸 390 × 844。

## 最终结果

- 首页保持两行大标题，标题字号、行高、字距和左侧位置均按最终参考稿校准。
- 入口按钮恢复为大圆角胶囊，文字、箭头圆钮、宽高和阴影比例与参考稿接近。
- 地球放大并移出画面，只展示局部；首页与探索页复用同一个实时三维地球，没有切换时重新出现。
- 海洋采用单一雾蓝色，大陆采用高明度莫兰迪色；两者明度差清晰。
- 国家之间使用直接贴住顶面的连续暖白上沿；灰色只来自板块自身的侧壁厚度，不再单独绘制错位灰线。
- 板块高度压低为克制的纸板浮雕，侧壁改成暖灰色；地球边缘保留白色高光和柔和光晕。
- 图钉保持默认小尺寸，悬停后放大；新增贴地浅影，不恢复会遮挡密集区域的白色圆环。
- 按最新宽屏标注，桌面端品牌标志向左上轻移，标题与入口按钮整体上移；地球和其他布局保持不变。

## 视觉问题闭环

1. P1：首页地球曾完整露出，构图偏平。现已放大并裁切为局部地球，左右重心与参考稿一致。
2. P1：标题曾偏小、偏细。现已提升字号和字重，并固定两行断句。
3. P1：国家边界曾错误地由悬空白线和错位灰线组成。现已删除灰色轮廓路径，只保留贴住顶面的暖白上沿，灰色层次改由国家板块真实侧壁产生。
4. P2：国家边界曾偏细且板块侧壁过厚。现已加宽暖白上沿、降低板块高度并减淡侧壁颜色，正视和斜视角度都保持连接。
5. P2：地球曾缺少层次。现补充环境光、方向光、地球边缘高光、大陆侧面层次和图钉落影。
6. P2：入口按钮曾被改成偏方轮廓。现已恢复圆角胶囊，并校准内部文字和箭头比例。
7. 最终同尺寸对照未发现新的 P0、P1 或 P2 视觉问题。

## 交互与兼容

- 点击“探索工作世界”后，标题和按钮连续退场，原地球平滑放大并转向欧洲中部。
- 探索页未选择岗位时不显示岗位卡片；底部只保留搜索框。
- 图钉默认状态保持小巧，悬停后在约 0.21 秒内明显放大。
- 悬停卡片使用约 0.3 秒缩放与透明度动效，普通卡片阴影，无黑色外框。
- 桌面 1536 × 1024 与移动端 390 × 844 均无横向滚动条。
- `npm run test:smoke` 通过。
- `npm run build:xhs` 通过，生成 `releases/openwork-xhs.zip`。
- `npm run validate:xhs` 通过，离线资源、脚本语法和包体校验均正常。

## 可接受差异

- P3：参考稿是静态生成图，纸张颗粒和阴影更重；网页为实时三维地球，保留较轻的动态纸张纹理，以保证旋转、悬停和移动端性能。
- P3：首页继续使用用户已经选定的蓝色 OpenWork 品牌标志，没有替换成参考稿中的黑色示意标志。
- P3：真实岗位数量多于参考稿示意点，首页通过聚合和缩小图钉控制密度。

final result: passed
