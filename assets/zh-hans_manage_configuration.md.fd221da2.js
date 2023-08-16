import{_ as a,H as n,o as d,c,C as e,a as t,J as o,V as s}from"./chunks/framework.5a3bb230.js";const W=JSON.parse('{"title":"配置","description":"","frontmatter":{},"headers":[],"relativePath":"zh-hans/manage/configuration.md","filePath":"zh-hans/manage/configuration.md","lastUpdated":1687069487000}'),i={name:"zh-hans/manage/configuration.md"},r=s(`<h1 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h1><p><code>asdf</code> 配置既包括可共享的 <code>.tool-versions</code> 文件，也包括用户特定的自定义 <code>.asdfrc</code> 和环境变量。</p><h2 id="tool-versions" tabindex="-1"><code>.tool-versions</code> <a class="header-anchor" href="#tool-versions" aria-label="Permalink to &quot;\`.tool-versions\`&quot;">​</a></h2><p>无论何时 <code>.tool-versions</code> 出现在目录中，它所声明的工具版本将会被用于该目录和任意子目录。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>全局默认配置将设置在文件<code>$HOME/.tool-versions</code> 中</p></div><p>一个 <code>.tool-versions</code> 文件示例如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ruby 2.5.3</span></span>
<span class="line"><span style="color:#A6ACCD;">nodejs 10.15.0</span></span></code></pre></div><p>你也可以包含注释在里面：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ruby 2.5.3 # 这是一个注释</span></span>
<span class="line"><span style="color:#A6ACCD;"># 这是另一个注释</span></span>
<span class="line"><span style="color:#A6ACCD;">nodejs 10.15.0</span></span></code></pre></div><p>版本号可以有如下格式：</p><ul><li><code>10.15.0</code> - 实际的版本号。支持下载二进制文件的插件将会下载二进制文件。</li><li><code>ref:v1.0.2-a</code> 或者 <code>ref:39cb398vb39</code> - 指定标签/提交/分支从 github 下载并编译。</li><li><code>path:~/src/elixir</code> - 要使用的工具的自定义编译版本的路径。这种方式供语言开发者等使用。</li><li><code>system</code> - 此关键字会导致 asdf 传递系统上未由 asdf 管理的工具版本。</li></ul><div class="tip custom-block"><p class="custom-block-title">提示</p><p>多版本可以通过空格将它们分隔开来。比如，使用 Python <code>3.7.2</code> 回退到 Python <code>2.7.15</code> 最后回退到 <code>system</code> Python，可以将以下行的内容添加到 <code>.tool-versions</code> 文件中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">python 3.7.2 2.7.15 system</span></span></code></pre></div></div><p>为了安装 <code>.tool-versions</code> 文件中定义的所有工具，在包含 <code>.tool-versions</code> 文件的目录中不带其他参数执行 <code>asdf install</code> 命令。</p><p>为了安装 <code>.tool-versions</code> 文件中定义的某个工具，在包含 <code>.tool-versions</code> 文件的目录中运行 <code>asdf install &lt;name&gt;</code> 命令。这个工具将会安装 <code>.tool-versions</code> 文件所指定的版本。</p><p>可以直接编辑这个文件或者使用 <code>asdf local</code> （或者 <code>asdf global</code>）来更新工具版本。</p><h2 id="home-asdfrc" tabindex="-1"><code>$HOME/.asdfrc</code> <a class="header-anchor" href="#home-asdfrc" aria-label="Permalink to &quot;\`$HOME/.asdfrc\`&quot;">​</a></h2><p>给你的家目录添加一个 <code>.asdfrc</code> 文件然后 asdf 将会使用这个文件所指定的配置。下面的文件展示了所需的格式，其中包含用于演示的默认值：</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">legacy_version_file = no</span></span>
<span class="line"><span style="color:#A6ACCD;">use_release_candidates = no</span></span>
<span class="line"><span style="color:#A6ACCD;">always_keep_download = no</span></span>
<span class="line"><span style="color:#A6ACCD;">plugin_repository_last_check_duration = 60</span></span>
<span class="line"><span style="color:#A6ACCD;">disable_plugin_short_name_repository = no</span></span>
<span class="line"><span style="color:#A6ACCD;">concurrency = auto</span></span></code></pre></div><h3 id="legacy-version-file" tabindex="-1"><code>legacy_version_file</code> <a class="header-anchor" href="#legacy-version-file" aria-label="Permalink to &quot;\`legacy_version_file\`&quot;">​</a></h3><p>插件 <strong>支持</strong> 读取其他版本管理器使用的版本文件，比如，Ruby 的 <code>rbenv</code> 的 <code>.ruby-version</code> 文件。</p>`,20),p=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"选项"),e("th",{style:{"text-align":"left"}},"描述")])],-1),_={style:{"text-align":"left"}},h=e("code",null,"no",-1),u=e("td",{style:{"text-align":"left"}},[t("从 "),e("code",null,".tool-versions"),t(" 文件读取版本")],-1),f=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"yes")]),e("td",{style:{"text-align":"left"}},[t("如果可行的话，从传统版本文件读取版本（"),e("code",null,".ruby-versions"),t("）")])],-1),y=e("h3",{id:"use-release-candidates",tabindex:"-1"},[e("code",null,"use_release_candidates"),t(),e("a",{class:"header-anchor",href:"#use-release-candidates","aria-label":'Permalink to "`use_release_candidates`"'},"​")],-1),g=e("p",null,[t("配置 "),e("code",null,"asdf update"),t(" 命令以升级到最新的候选版本，而不是最新的语义版本。")],-1),b=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"选项"),e("th",{style:{"text-align":"left"}},"描述")])],-1),m={style:{"text-align":"left"}},v=e("code",null,"no",-1),x=e("td",{style:{"text-align":"left"}},"语义版本被使用",-1),A=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"yes")]),e("td",{style:{"text-align":"left"}},"候选版本被使用")],-1),C=e("h3",{id:"always-keep-download",tabindex:"-1"},[e("code",null,"always_keep_download"),t(),e("a",{class:"header-anchor",href:"#always-keep-download","aria-label":'Permalink to "`always_keep_download`"'},"​")],-1),k=e("p",null,[t("配置 "),e("code",null,"asdf install"),t(" 命令以保留或删除下载的源代码或二进制文件。")],-1),D=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"选项"),e("th",{style:{"text-align":"left"}},"描述")])],-1),P={style:{"text-align":"left"}},T=e("code",null,"no",-1),S=e("td",{style:{"text-align":"left"}},"在成功安装后删除源代码或二进制文件",-1),q=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"yes")]),e("td",{style:{"text-align":"left"}},"在成功安装后保留源代码或二进制文件")],-1),w=e("h3",{id:"plugin-repository-last-check-duration",tabindex:"-1"},[e("code",null,"plugin_repository_last_check_duration"),t(),e("a",{class:"header-anchor",href:"#plugin-repository-last-check-duration","aria-label":'Permalink to "`plugin_repository_last_check_duration`"'},"​")],-1),E=e("p",null,[t("配置自上次 asdf 插件存储库同步到下一次存储库同步的持续时间。命令 "),e("code",null,"asdf plugin add <name>"),t(" 或者 "),e("code",null,"asdf plugin list all"),t(" 将会触发持续时间的检查，如果持续时间已过，则进行同步。")],-1),I=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"选项"),e("th",{style:{"text-align":"left"}},"描述")])],-1),N={style:{"text-align":"left"}},V=e("code",null,"1",-1),F=e("code",null,"999999999",-1),O=e("br",null,null,-1),R=e("code",null,"60",-1),$=e("td",{style:{"text-align":"left"}},"如果已过自上次同步的持续时间，触发器事件发生时同步",-1),B=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"0")]),e("td",{style:{"text-align":"left"}},"每个触发器事件发生时同步")],-1),H=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"never")]),e("td",{style:{"text-align":"left"}},"从不同步")],-1),L=s('<h2 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h2><ul><li><code>ASDF_CONFIG_FILE</code> - 如上所述默认为 <code>~/.asdfrc</code> 文件。可以被设置在任何位置。</li><li><code>ASDF_DEFAULT_TOOL_VERSIONS_FILENAME</code> - 存储工具名称和版本的文件名。默认为 <code>.tool-versions</code>。可以是任何有效的文件名。通常，除非你知道你希望 asdf 忽略 <code>.tool-versions</code> 文件，否则不应该覆盖默认值。</li><li><code>ASDF_DIR</code> - 默认为 <code>~/.asdf</code> - <code>asdf</code> 脚本的位置。如果你把 <code>asdf</code> 安装到了其他目录，请设置该变量到那个目录。比如，如果通过 AUR 进行安装，则应设置该变量为 <code>/opt/asdf-vm</code>。</li><li><code>ASDF_DATA_DIR</code> - 默认为 <code>~/.asdf</code> - <code>asdf</code> 安装插件、垫片和安装器的位置。可以被设置在上一节提到的生效 <code>asdf.sh</code> 或者 <code>asdf.fish</code> 之间的任何位置。对于 Elvish，这可以设置在 <code>use asdf</code> 上面。</li></ul><h2 id="内部配置" tabindex="-1">内部配置 <a class="header-anchor" href="#内部配置" aria-label="Permalink to &quot;内部配置&quot;">​</a></h2><p>用户不必担心本节，因为它描述了对包管理器和集成者有用的 <code>asdf</code> 的内部配置。</p><ul><li><code>$ASDF_DIR/asdf_updates_disabled</code>：当此文件存在时（内容无关），通过 <code>asdf update</code> 命令进行的更新 将会被禁用。像 Pacman 或者 Homebrew 等包管理器使用它来确保个性化安装的正确的更新方法。</li></ul>',5);function M(z,U,j,J,G,K){const l=n("Badge");return d(),c("div",null,[r,e("table",null,[p,e("tbody",null,[e("tr",null,[e("td",_,[h,t(),o(l,{type:"tip",text:"默认",vertical:"middle"})]),u]),f])]),y,g,e("table",null,[b,e("tbody",null,[e("tr",null,[e("td",m,[v,t(),o(l,{type:"tip",text:"默认",vertical:"middle"})]),x]),A])]),C,k,e("table",null,[D,e("tbody",null,[e("tr",null,[e("td",P,[T,t(),o(l,{type:"tip",text:"默认",vertical:"middle"})]),S]),q])]),w,E,e("table",null,[I,e("tbody",null,[e("tr",null,[e("td",N,[t("从 "),V,t(" 到 "),F,t(" 的数字 "),O,t(),o(l,{type:"tip",text:"默认",vertical:"middle"}),t(" 为 "),R]),$]),B,H])]),L])}const X=a(i,[["render",M]]);export{W as __pageData,X as default};
