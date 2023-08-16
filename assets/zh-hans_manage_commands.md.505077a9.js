import{_ as s,o as a,c as n,V as l}from"./chunks/framework.5a3bb230.js";const f=JSON.parse('{"title":"所有命令","description":"","frontmatter":{},"headers":[],"relativePath":"zh-hans/manage/commands.md","filePath":"zh-hans/manage/commands.md","lastUpdated":1687069487000}'),e={name:"zh-hans/manage/commands.md"},t=l(`<h1 id="所有命令" tabindex="-1">所有命令 <a class="header-anchor" href="#所有命令" aria-label="Permalink to &quot;所有命令&quot;">​</a></h1><p><code>asdf</code> 中所有可用命令的列表。这个列表就是 <code>asdf help</code> 命令的打印内容。</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">MANAGE PLUGINS</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf plugin add &lt;name&gt; [&lt;git-url&gt;]      Add a plugin from the plugin repo OR,</span></span>
<span class="line"><span style="color:#A6ACCD;">                                        add a Git repo as a plugin by</span></span>
<span class="line"><span style="color:#A6ACCD;">                                        specifying the name and repo url</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf plugin list [--urls] [--refs]      List installed plugins. Optionally show</span></span>
<span class="line"><span style="color:#A6ACCD;">                                        git urls and git-ref</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf plugin list all                    List plugins registered on asdf-plugins</span></span>
<span class="line"><span style="color:#A6ACCD;">                                        repository with URLs</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf plugin remove &lt;name&gt;               Remove plugin and package versions</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf plugin update &lt;name&gt; [&lt;git-ref&gt;]   Update a plugin to latest commit on</span></span>
<span class="line"><span style="color:#A6ACCD;">                                        default branch or a particular git-ref</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf plugin update --all                Update all plugins to latest commit on</span></span>
<span class="line"><span style="color:#A6ACCD;">                                        default branch</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">MANAGE PACKAGES</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf current                            Display current version set or being</span></span>
<span class="line"><span style="color:#A6ACCD;">                                        used for all packages</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf current &lt;name&gt;                     Display current version set or being</span></span>
<span class="line"><span style="color:#A6ACCD;">                                        used for package</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf global &lt;name&gt; &lt;version&gt;            Set the package global version</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf global &lt;name&gt; latest[:&lt;version&gt;]   Set the package global version to the</span></span>
<span class="line"><span style="color:#A6ACCD;">                                        latest provided version</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf help &lt;name&gt; [&lt;version&gt;]            Output documentation for plugin and tool</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf install                            Install all the package versions listed</span></span>
<span class="line"><span style="color:#A6ACCD;">                                        in the .tool-versions file</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf install &lt;name&gt;                     Install one tool at the version</span></span>
<span class="line"><span style="color:#A6ACCD;">                                        specified in the .tool-versions file</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf install &lt;name&gt; &lt;version&gt;           Install a specific version of a package</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf install &lt;name&gt; latest[:&lt;version&gt;]  Install the latest stable version of a</span></span>
<span class="line"><span style="color:#A6ACCD;">                                        package, or with optional version,</span></span>
<span class="line"><span style="color:#A6ACCD;">                                        install the latest stable version that</span></span>
<span class="line"><span style="color:#A6ACCD;">                                        begins with the given string</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf latest &lt;name&gt; [&lt;version&gt;]          Show latest stable version of a package</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf latest --all                       Show latest stable version of all the</span></span>
<span class="line"><span style="color:#A6ACCD;">                                        packages and if they are installed</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf list &lt;name&gt; [version]              List installed versions of a package and</span></span>
<span class="line"><span style="color:#A6ACCD;">                                        optionally filter the versions</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf list all &lt;name&gt; [&lt;version&gt;]        List all versions of a package and</span></span>
<span class="line"><span style="color:#A6ACCD;">                                        optionally filter the returned versions</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf local &lt;name&gt; &lt;version&gt;             Set the package local version</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf local &lt;name&gt; latest[:&lt;version&gt;]    Set the package local version to the</span></span>
<span class="line"><span style="color:#A6ACCD;">                                        latest provided version</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf shell &lt;name&gt; &lt;version&gt;             Set the package version to</span></span>
<span class="line"><span style="color:#A6ACCD;">                                        \`ASDF_\${LANG}_VERSION\` in the current shell</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf uninstall &lt;name&gt; &lt;version&gt;         Remove a specific version of a package</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf where &lt;name&gt; [&lt;version&gt;]           Display install path for an installed</span></span>
<span class="line"><span style="color:#A6ACCD;">                                        or current version</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf which &lt;command&gt;                    Display the path to an executable</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">UTILS</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf exec &lt;command&gt; [args...]           Executes the command shim for current version</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf env &lt;command&gt; [util]               Runs util (default: \`env\`) inside the</span></span>
<span class="line"><span style="color:#A6ACCD;">                                        environment used for command shim execution.</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf info                               Print OS, Shell and ASDF debug information.</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf reshim &lt;name&gt; &lt;version&gt;            Recreate shims for version of a package</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf shim-versions &lt;command&gt;            List the plugins and versions that</span></span>
<span class="line"><span style="color:#A6ACCD;">                                        provide a command</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf update                             Update asdf to the latest stable release</span></span>
<span class="line"><span style="color:#A6ACCD;">asdf update --head                      Update asdf to the latest on the master branch</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">RESOURCES</span></span>
<span class="line"><span style="color:#A6ACCD;">GitHub: https://github.com/asdf-vm/asdf</span></span>
<span class="line"><span style="color:#A6ACCD;">Docs:   https://asdf-vm.com</span></span></code></pre></div>`,3),p=[t];function o(i,c,r,A,C,d){return a(),n("div",null,p)}const h=s(e,[["render",o]]);export{f as __pageData,h as default};
