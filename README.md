# Jiayi Lyu 的个人学术主页

这是可以直接发布到 GitHub Pages 的静态网站，不需要安装 Node.js、运行构建命令或购买服务器。

- GitHub 用户名：`jiayilyu777-dzq`
- 仓库名称：`jiayilyu777-dzq.github.io`
- 发布后的网址：`https://jiayilyu777-dzq.github.io/`

## 第一步：创建仓库

1. 登录 GitHub，打开 https://github.com/new 。
2. 确认 Owner 是 `jiayilyu777-dzq`。
3. Repository name 填写：`jiayilyu777-dzq.github.io`。
4. 选择 **Public**，可以勾选 **Add a README file**。
5. 点击 **Create repository**。如果这个仓库已经存在，直接进入已有仓库，不要重新创建。

## 第二步：上传文件

1. 解压下载的网站压缩包。
2. 在仓库中选择 **Add file → Upload files**。空仓库也可能显示 **uploading an existing file** 链接。
3. 上传解压后文件夹里面的文件，而不是整个文件夹或 ZIP 文件。`index.html` 必须直接位于仓库最外层。
4. 点击 **Commit changes** 保存。如果 GitHub 要求先创建分支，则创建分支后把更改合并到 `main`。

正确结构：

```text
jiayilyu777-dzq.github.io/
├── index.html
├── research.html
├── style.css
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── README.md
└── .nojekyll
```

`.nojekyll` 是一个空的辅助文件。如果 Windows 隐藏了这个文件，可以在文件资源管理器中显示隐藏文件。即使没有上传它，这个网站也不需要额外的构建步骤。

## 第三步：开启 Pages

1. 打开仓库的 **Settings → Pages**。
2. 在 **Build and deployment** 中，把 **Source** 设置为 **Deploy from a branch**。
3. **Branch** 选择 `main`，目录选择 `/(root)`。
4. 点击 **Save**。
5. 等 GitHub 完成部署。可以到 **Actions** 查看是否成功。
6. 返回 **Settings → Pages**，点击 **Visit site**。网站地址应为：

   https://jiayilyu777-dzq.github.io/

创建仓库和上传文件本身不会自动开启 Pages；需要完成上面的 Pages 设置。

## 照片与简历

- 目前用 `JL` 字母作为头像，未虚构个人照片。
- 如需使用照片，把照片命名为 `photo.jpg`，与 `index.html` 一起上传。在 `index.html` 中找到 `class="portrait monogram"` 的 div，按照其上方注释替换为 img 标签即可。
- CV 目前是通过邮件索取的链接。本压缩包没有包含原始 CV PDF。
- 若想提供下载，先确认你希望公开的 CV 内容，然后上传 `Jiayi_CV.pdf`。把主页中的 `mailto:jiayi.lyu@siu.edu?subject=CV%20request` 改成 `Jiayi_CV.pdf`，并把 `Available on request` 改为 `Download PDF`。

## 后续修改

- 简介、联系方式、Ph.D. 申请计划：编辑 `index.html`。
- 论文、审稿状态、研究项目：编辑 `research.html`。
- 颜色、字号和布局：编辑 `style.css`。
- 论文状态根据用户提供的 2026 年 10 月版简历整理；录用后记得更新。
- 如果以后更改 GitHub 用户名或使用自己的域名，也要更新两个 HTML 文件中的 canonical / Open Graph URL、`robots.txt`、`sitemap.xml`。

## Google 搜索

本网站已经包含标题、网页描述、站点地图和允许抓取的 robots.txt。这些设置有助于搜索引擎理解网站，但不保证收录或排名。发布后可以使用 Google Search Console 验证这个网址并提交 `sitemap.xml`。

## 官方帮助

- GitHub Pages 入门：https://docs.github.com/en/pages/quickstart
- 文件上传：https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- 发布源设置：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Google 收录说明：https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl

页面代码从零编写，采用简洁的学术主页布局；没有复制其他学生的网页代码、照片或学校徽标。
