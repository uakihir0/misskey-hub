import{_ as i,o as d,c as r,a as e,b as n,w as t,d as s,e as l,r as o}from"./app.0e5415dd.js";const c={},h=e("h1",{id:"misskey-\u4E00\u952E\u5B89\u88C5\u811A\u672C-v3-0-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#misskey-\u4E00\u952E\u5B89\u88C5\u811A\u672C-v3-0-0","aria-hidden":"true"},"#"),s(" Misskey \u4E00\u952E\u5B89\u88C5\u811A\u672C v3.0.0")],-1),u=e("p",null,"\u4E00\u952E\u5B89\u88C5 Misskey\uFF01",-1),m=e("p",null,"\u9700\u8981 ubuntu \u7CFB\u7EDF\u3002",-1),p=e("p",null,[s("\u4E0B\u9762\u7684\u94FE\u63A5\u662F"),e("strong",null,"\u66F4\u65B0"),s(" Misskey \u7684\u811A\u672C\uFF1A")],-1),v=e("a",{href:"https://github.com/joinmisskey/bash-install/blob/a096e874f93d493aa68975a31be9ce12d644e767/README.en.md",target:"_blank",rel:"noopener noreferrer"},"For v12",-1),k=e("br",null,null,-1),b=e("strong",null,"\u65E5\u672C\u8A9E\u7248\u306F\u3053\u3061\u3089",-1),x=l(`<h2 id="\u4F7F\u7528\u8BB8\u53EF" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u8BB8\u53EF" aria-hidden="true">#</a> \u4F7F\u7528\u8BB8\u53EF</h2><p><a href="./LICENSE">MIT License</a></p><h2 id="\u9700\u8981\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u9700\u8981\u51C6\u5907" aria-hidden="true">#</a> \u9700\u8981\u51C6\u5907...</h2><ol><li>\u4E00\u4E2A\u57DF\u540D</li><li>ubuntu \u7CFB\u7EDF\u7684\u670D\u52A1\u5668\uFF08\u63A8\u835018.04\u53CA\u4EE5\u4E0A\u7684 LTS \u7248\u672C\uFF09</li><li>\u4E00\u4E2A Cloudflare \u5E10\u6237 (\u5982\u679C\u4F7F\u7528\u5176 CDN)</li></ol><div class="custom-container danger"><i class="fas fa-times"></i><p>\u8BF7\u6CE8\u610F\uFF0C\u4E00\u65E6 Misskey \u5F00\u59CB\u8FD0\u884C\uFF0C\u4E0D\u8981\u66F4\u6539\u57DF\u540D\u548C\u670D\u52A1\u5668\u7684\u4E3B\u673A\u540D\u3002</p></div><h2 id="\u914D\u7F6E-cloudflare" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-cloudflare" aria-hidden="true">#</a> \u914D\u7F6E Cloudflare</h2><p>\u5982\u679C DNS \u63D0\u4F9B\u5546\u4E3A Cloudflare\uFF0C\u8BF7\u5728\u5B89\u88C5\u4E4B\u524D\u5B8C\u6210\u5982\u4E0B\u8BBE\u5B9A\uFF1A</p><ul><li>\u8BBE\u7F6E\u57DF\u540D\u89E3\u6790 IP \u5730\u5740\u3002</li><li>\u5728 SSL/TLS \u8BBE\u7F6E\u754C\u9762, \u5C06\u52A0\u5BC6\u6A21\u5F0F\u8BBE\u7F6E\u4E3A &quot;\u5B8C\u5168&quot;\u3002</li></ul><p>\u8BF7\u786E\u4FDD\u57DF\u540D\u5DF2\u89E3\u6790\u5230\u8BE5\u670D\u52A1\u5668\u4E0A\uFF0C\u518D\u8FDB\u884C\u5B89\u88C5\u3002</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><h3 id="_1-\u8FDE\u63A5\u5230\u670D\u52A1\u5668-ssh" tabindex="-1"><a class="header-anchor" href="#_1-\u8FDE\u63A5\u5230\u670D\u52A1\u5668-ssh" aria-hidden="true">#</a> 1. \u8FDE\u63A5\u5230\u670D\u52A1\u5668 SSH</h3><p>\u901A\u8FC7 SSH \u8FDE\u63A5\u5230\u670D\u52A1\u5668\u3002 \u5982\u679C\u7CFB\u7EDF\u6709\u56FE\u5F62\u5316\u754C\u9762\uFF0C\u6253\u5F00\u7EC8\u7AEF\uFF08terminal\uFF09\u3002</p><h3 id="_2-\u66F4\u65B0\u8F6F\u4EF6\u5305" tabindex="-1"><a class="header-anchor" href="#_2-\u66F4\u65B0\u8F6F\u4EF6\u5305" aria-hidden="true">#</a> 2. \u66F4\u65B0\u8F6F\u4EF6\u5305</h3><p>\u786E\u4FDD\u6240\u6709\u8F6F\u4EF6\u4E3A\u6700\u65B0\u7248\u672C\u3002 \u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4\u6765\u66F4\u65B0\uFF0C\u66F4\u65B0\u5B8C\u6210\u540E\u5C06\u91CD\u542F\u670D\u52A1\u5668\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt update; sudo apt full-upgrade -y; sudo reboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-\u4E0B\u8F7D\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_3-\u4E0B\u8F7D\u811A\u672C" aria-hidden="true">#</a> 3. \u4E0B\u8F7D\u811A\u672C</h3><p>\u91CD\u65B0\u8FDE\u63A5\u5230\u670D\u52A1\u5668\uFF0C\u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4\u6765\u4E0B\u8F7D\u548C\u8FD0\u884C\u811A\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wget https://raw.githubusercontent.com/joinmisskey/bash-install/main/ubuntu.sh -O ubuntu.sh; sudo bash ubuntu.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E4B\u540E\uFF0C\u6309\u7167\u63D0\u793A\u8F93\u5165\u5185\u5BB9\u3002</p><h3 id="_4-\u66F4\u65B0-misskey" tabindex="-1"><a class="header-anchor" href="#_4-\u66F4\u65B0-misskey" aria-hidden="true">#</a> 4. \u66F4\u65B0 Misskey</h3><p>\u66F4\u65B0 Misskey \u4E5F\u662F\u6709\u4E00\u4E2A\u811A\u672C\u7684\u5462\u3002</p><p>\u8BF7\u6CE8\u610F\uFF0C\u66F4\u65B0 Misskey \u7684\u811A\u672C\u4E0D\u4F1A\u5347\u7EA7\u8FD0\u884C\u73AF\u5883\u3002 \u5BF9\u4E8E\u811A\u672C\u7684\u66F4\u65B0\u5185\u5BB9\uFF0C\u53E6\u8BF7\u53C2\u9605 \u201C\u66F4\u65B0\u65E5\u5FD7\u201D (\u65E5\u6587) \u4E0E <a href="https://github.com/joinmisskey/bash-install/releases" target="_blank" rel="noopener noreferrer">GitHub release \u5217\u8868 (\u82F1\u8BED)</a> \u3002</p><p>\u9996\u5148\uFF0C\u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4\u6765\u4E0B\u8F7D\u811A\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wget https://raw.githubusercontent.com/joinmisskey/bash-install/main/update.ubuntu.sh -O update.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4\u6765\u8FD0\u884C\u811A\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo bash update.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528 <strong>systemd</strong> \u7684\u5C0F\u4F19\u4F34, \u6DFB\u52A0 <code>-r</code> \u53EF\u4EE5\u66F4\u65B0\u5E76\u91CD\u542F\u7CFB\u7EDF\u3002</li><li>\u4F7F\u7528 <strong>docker</strong> \u7684\u5C0F\u4F19\u4F34, \u53EF\u4EE5\u7279\u5B9A\u8F6F\u4EF6\u5305\u7248\u672C repository:tag \u6765\u66F4\u65B0\u3002</li></ul><h2 id="\u6D4B\u8BD5\u901A\u8FC7\u7684\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u901A\u8FC7\u7684\u73AF\u5883" aria-hidden="true">#</a> \u6D4B\u8BD5\u901A\u8FC7\u7684\u73AF\u5883</h2><h3 id="oracle-cloud-\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#oracle-cloud-\u670D\u52A1\u5668" aria-hidden="true">#</a> Oracle Cloud \u670D\u52A1\u5668</h3><p>\u8BE5\u811A\u672C\u5728\u4EE5\u4E0B\u7684\u7532\u9AA8\u6587\u7684\u514D\u8D39\u670D\u52A1\u5668\u4E2D\u8FD0\u884C\u826F\u597D\uFF5E</p><ul><li>VM.Standard.E2.1.Micro (AMD)</li><li>VM.Standard.A1.Flex (ARM) [1OCPU RAM6GB \u6216\u66F4\u9AD8\u89C4\u683C]</li></ul><p>\u6216\u8BB8\u53EF\u4EE5\u8BD5\u4E00\u4E0B iptables\uFF0C\u5982\u679C\u51FA\u73B0\u95EE\u9898\u7684\u8BDD\u3002</p><h2 id="\u6B22\u8FCE\u63D0\u51FA-issue-\u548C-pull-request" tabindex="-1"><a class="header-anchor" href="#\u6B22\u8FCE\u63D0\u51FA-issue-\u548C-pull-request" aria-hidden="true">#</a> \u6B22\u8FCE\u63D0\u51FA issue \u548C pull request\uFF01</h2><p>\u5982\u679C\u5728\u4E0A\u8FF0\u73AF\u5883\u4E0B\u4E0D\u8D77\u4F5C\u7528\uFF0C\u53EF\u80FD\u662Fbug\u3002\u5982\u679C\u60A8\u80FD\u63CF\u8FF0\u5B89\u88C5\u65F6\u7684\u73AF\u5883\u5E76\u4F7F\u7528 GitHub \u7684 Issue \u6765\u62A5\u544A\u95EE\u9898\uFF0C\u6211\u4EEC\u4F1A\u975E\u5E38\u611F\u8C22\u7684\uFF01</p><p>\u5982\u679C\u95EE\u9898\u51FA\u5728\u4E0D\u662F\u4E0A\u8FF0\u6240\u63D0\u53CA\u7684\u8FD0\u884C\u73AF\u5883\uFF0C\u5904\u7406\u8D77\u6765\u4F1A\u6709\u4E00\u70B9\u70B9\u56F0\u96BE\uFF0C\u4F46\u662F\u5982\u679C\u60A8\u544A\u8BC9\u6211\u4EEC\u66F4\u591A\u6709\u5173\u60C5\u51B5\uFF0C\u6211\u4EEC\u4E5F\u8BB8\u53EF\u4EE5\u89E3\u51B3\u3002</p><p>\u6B22\u8FCE\u5C0F\u4F19\u4F34\u4EEC\u63D0\u51FA\u4EFB\u4F55\u610F\u89C1\u548C\u5EFA\u8BAE\u3002</p><h1 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h1><p>\u4E0B\u9762\u4E3A\u5B89\u88C5\u65F6\u53EF\u80FD\u9047\u5230\u7684\u95EE\u9898\u3002</p><h2 id="\u9009\u62E9-systemd-\u8FD8\u662F-docker-\u5462" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9-systemd-\u8FD8\u662F-docker-\u5462" aria-hidden="true">#</a> \u9009\u62E9 Systemd \u8FD8\u662F Docker \u5462?</h2><p>\u5982\u679C\u9009\u62E9 Dcoker \u7248\u672C\uFF08\u6CE8\u610F\u4E0D\u662F docker-compose\uFF09\u7684 Misskey\uFF0C\u5BBF\u4E3B\u673A\u4E2D\u4ECD\u987B\u5B89\u88C5 Redis \u548C Postgres\u3002\u63A8\u8350\u9009\u62E9 docker-compose \u65B9\u5F0F\u5B89\u88C5 Misskey\uFF0C\u8BE5\u65B9\u5F0F\u5C06 Redis\uFF0CPostgres \u548C Misskey \u90FD\u5B89\u88C5\u5728\u4E86 docker \u4E2D\uFF0C\u53E6\u8BF7\u53C2\u9605 \u5229\u7528 docker-compose \u5B89\u88C5 Misskey\uFF1A \u53E6\u5916\uFF0C\u8FD9\u91CC\u4E5F\u6709\u4E00\u7247\u6587\u7AE0\u8BB2\u8FF0\u4E86\u5229\u7528 docker-compose \u529F\u80FD\uFF1A <a href="https://gist.github.com/mamemomonga/5549bb69cad8e5618e5527593d4890e0" target="_blank" rel="noopener noreferrer">mamemononga \u7684\u8FD9\u7BC7\u6587\u7AE0\u88AB\u63A8\u8350\u7528\u4E8E\u5982\u4F55\u4F7F\u7528 docker-compose \u8FD0\u884C\u6240\u6709\u529F\u80FD\u3002</a></p><p>\u5982\u679C\u4F7F\u7528 Docker Hub \u955C\u50CF\uFF0C\u5219\u4E0D\u9700\u8981\u7F16\u8BD1 Misskey\u3002 \u5982\u679C\u60F3\u5BF9Misskey\u8FDB\u884C\u9AD8\u5EA6\u81EA\u5B9A\u4E49\uFF08\u4F8B\u5982fork\u5230\u672C\u5730\u4FEE\u6539\uFF09\uFF0C\u6211\u4EEC\u63A8\u8350\u9009\u62E9\u7F16\u8BD1\u5B89\u88C5 Misskey\uFF08systemd \u65B9\u5F0F\uFF09\uFF0C\u800C\u4E0D\u662Fdocker\u3002</p><p>\u4E09\u79CD\u65B9\u5F0F\u7684\u63A8\u8350\u5EA6\uFF08\u4ECE\u5927\u5230\u5C0F\u6392\u5217\uFF09\uFF1A</p><ol><li>Docker-compose (via docker hub)</li><li>systemd</li><li>Docker \u7F16\u8BD1</li></ol><h2 id="\u662F\u5426\u8981\u4F7F\u7528-nginx" tabindex="-1"><a class="header-anchor" href="#\u662F\u5426\u8981\u4F7F\u7528-nginx" aria-hidden="true">#</a> \u662F\u5426\u8981\u4F7F\u7528 Nginx\uFF1F</h2><p>\u5982\u679C\u60A8\u60F3\u4EC5\u7528\u4E00\u53F0\u670D\u52A1\u5668\u642D\u5EFA Misskey\uFF0C\u6211\u4EEC\u63A8\u8350\u4F7F\u7528 nginx\u3002</p><p>\u5982\u679C\u60A8\u60F3\u914D\u7F6E\u8D1F\u8F7D\u5747\u8861\u5668\uFF0C\u63A8\u8350\u4E0D\u8981\u4F7F\u7528 Nginx\u3002 \u53EF\u4EE5\u53C2\u8003<a href="https://github.com/misskey-dev/misskey/blob/develop/docs/examples/misskey.nginx" target="_blank" rel="noopener noreferrer">Misskey\u306Enginx\u8A2D\u5B9A</a>\u6765\u8BBE\u7F6E\u8D1F\u8F7D\u5747\u8861\u5668\u3002</p><h2 id="swap-\u5206\u533A" tabindex="-1"><a class="header-anchor" href="#swap-\u5206\u533A" aria-hidden="true">#</a> SWAP \u5206\u533A</h2><p>\u5982\u679C\u60A8\u8BBE\u7F6E\u4E86SWAP\uFF0C\u9664\u975E\u60A8\u7684\u603B\u5185\u5B58\u4E3A 3GB \u6216\u66F4\u591A\uFF0C\u5426\u5219\u8BE5\u811A\u672C\u5C06\u65E0\u6CD5\u8FD0\u884C\u3002</p><h2 id="\u5982\u679C\u5728\u9014\u4E2D\u5931\u8D25\u5E76\u518D\u6B21\u8FD0\u884C\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u5982\u679C\u5728\u9014\u4E2D\u5931\u8D25\u5E76\u518D\u6B21\u8FD0\u884C\u811A\u672C" aria-hidden="true">#</a> \u5982\u679C\u5728\u9014\u4E2D\u5931\u8D25\u5E76\u518D\u6B21\u8FD0\u884C\u811A\u672C</h2><p>\u5982\u679C\u4E2D\u9014\u5931\u8D25\u540E\u518D\u6B21\u8FD0\u884C\u811A\u672C\uFF0C\u8BF7\u6CE8\u610F\u4EE5\u4E0B\u4E8B\u9879\uFF1A</p><ul><li>\u5982\u679C\u60A8\u5DF2\u7ECF\u5B89\u88C5\u4E86 Redis \u6216 Postgres\uFF0C\u8BF7\u5C06\u201CInstall locally\u201D \u8BBE\u7F6E\u4E3A No\u3002 \u4FDD\u6301\u4E3B\u673A\u540D\u548C\u7AEF\u53E3\u8BBE\u7F6E\u4E0D\u53D8\uFF0C\u7136\u540E\u6309 Enter\u3002\u8F93\u5165\u4E0A\u6B21\u6267\u884C\u547D\u4EE4\u65F6\u6307\u5B9A\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u3002</li></ul><h2 id="\u5173\u4E8E-env-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E-env-\u6587\u4EF6" aria-hidden="true">#</a> \u5173\u4E8E .env \u6587\u4EF6</h2><p>\u5B89\u88C5\u811A\u672C\u521B\u5EFA\u4E86\u51E0\u4E2A .env \u6587\u4EF6\uFF0C\u8FD9\u4E9B\u6587\u4EF6\u5728\u66F4\u65B0\u65F6\u6709\u7528\u3002</p><h3 id="root-misskey-env" tabindex="-1"><a class="header-anchor" href="#root-misskey-env" aria-hidden="true">#</a> /root/.misskey.env</h3><p>\u8BB0\u4F4F\u8FD0\u884C Misskey \u7684\u7528\u6237\u3002</p><h3 id="home-misskey\u30E6\u30FC\u30B5\u3099\u30FC-misskey-env" tabindex="-1"><a class="header-anchor" href="#home-misskey\u30E6\u30FC\u30B5\u3099\u30FC-misskey-env" aria-hidden="true">#</a> /home/(misskey\u30E6\u30FC\u30B6\u30FC)/.misskey.env</h3><p>\u7531 systemd \u751F\u6210\uFF0C\u4E3B\u8981\u7528\u6765\u8BB0\u5F55\u8FD0\u884C\u76EE\u5F55\u3002</p><h3 id="home-misskey\u30E6\u30FC\u30B5\u3099\u30FC-misskey-docker-env" tabindex="-1"><a class="header-anchor" href="#home-misskey\u30E6\u30FC\u30B5\u3099\u30FC-misskey-docker-env" aria-hidden="true">#</a> /home/(misskey\u30E6\u30FC\u30B6\u30FC)/.misskey-docker.env</h3><p>\u7531 Docker \u751F\u6210\uFF0C\u5176\u4E2D\u5B58\u50A8\u6709\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668\u548C\u6620\u50CF\u7684\u7F16\u53F7\u3002 \u5BB9\u5668\u7F16\u53F7\u968F\u7740\u66F4\u65B0\u800C\u66F4\u65B0\uFF0C\u66F4\u65B0\u540E\uFF0C\u65E7\u7684\u6620\u50CF\u4F1A\u88AB\u5220\u9664\u3002</p><h2 id="\u81EA\u884C\u66F4\u6539\u914D\u7F6E\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u81EA\u884C\u66F4\u6539\u914D\u7F6E\u6587\u6863" aria-hidden="true">#</a> \u81EA\u884C\u66F4\u6539\u914D\u7F6E\u6587\u6863</h2><p>\u5728\u5B89\u88C5\u7ED3\u675F\u540E\uFF0C\u60A8\u53EF\u4EE5\u81EA\u884C\u63A2\u7D22\u672C\u9879\u76EE\u7684\u914D\u7F6E\u6587\u6863\uFF0C\u5E76\u4F9D\u636E\u81EA\u8EAB\u60C5\u51B5\u8FDB\u884C\u4FEE\u6539\u3002</p><h3 id="misskey-\u5B89\u88C5\u76EE\u5F55-\u8BE5\u90E8\u5206\u4E3A\u673A\u7FFB" tabindex="-1"><a class="header-anchor" href="#misskey-\u5B89\u88C5\u76EE\u5F55-\u8BE5\u90E8\u5206\u4E3A\u673A\u7FFB" aria-hidden="true">#</a> Misskey \u5B89\u88C5\u76EE\u5F55 \uFF08\u8BE5\u90E8\u5206\u4E3A\u673A\u7FFB\uFF09</h3><p>Misskey\u7684\u6E90\u4EE3\u7801\u4F1A\u88AB\u514B\u9686\u5230 /home/user/dictionary \u4E2D\u3002 \uFF08user\u548Cdictionary\u7684\u9ED8\u8BA4\u503C\u90FD\u662Fmisskey\u3002\uFF09</p><p>\u82E5\u8981\u8BBF\u95EE Misskey \u7684\u5B89\u88C5\u76EE\u5F55\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo -iu user
cd dictionary
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u8FD4\u56DE\u4E4B\u524D\u7684\u7528\u6237\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="systemd-\u4E2D\u7684-misskey-\u4EC5\u9650\u4F7F\u7528\u4E00\u952E\u5B89\u88C5\u811A\u672C\u5B89\u88C5\u7684-misskey" tabindex="-1"><a class="header-anchor" href="#systemd-\u4E2D\u7684-misskey-\u4EC5\u9650\u4F7F\u7528\u4E00\u952E\u5B89\u88C5\u811A\u672C\u5B89\u88C5\u7684-misskey" aria-hidden="true">#</a> systemd \u4E2D\u7684 Misskey \uFF08\u4EC5\u9650\u4F7F\u7528\u4E00\u952E\u5B89\u88C5\u811A\u672C\u5B89\u88C5\u7684 Misskey\uFF09</h3><p>Misskey \u5728 systemd \u4E2D\u7684\u8FDB\u7A0B\u540D\u79F0\u4E3A\u60A8\u8BBE\u5B9A\u7684\u57DF\u540D\uFF08\u4F8B\u5982\uFF0Cexmaple.com\uFF0C\u4EC5\u9650\u4F7F\u7528\u4E00\u952E\u5B89\u88C5\u811A\u672C\u5B89\u88C5\u7684 Misskey\uFF09<br> \u82E5\u8981\u91CD\u542F Misskey\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo systemctl restart example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u4F7F\u7528 journalctl \u67E5\u770B\u65E5\u5FD7\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>journalctl -t example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>systemd\u7684\u914D\u7F6E\u6587\u4EF6\u4E3A\uFF1A<code>/etc/systemd/system/example.com.service</code></p><h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h3><p>Docker \u8BA9 Misskey \u4EE5\u7B2C\u4E09\u8005\u7528\u6237\u8FD0\u884C</p><p>\u5982\u679C\u8981\u4F7F\u7528sudo\u8FDB\u5165Misskey\u7528\u6237\uFF0C\u5219\u9700\u8981\u66F4\u6539XDG_RUNTIME_DIR\u548CDOCKER_HOST\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo -iu user
export XDG_RUNTIME_DIR=/run/user/$UID
export DOCKER_HOST=unix://$XDG_RUNTIME_DIR/docker.sock

# \u663E\u793A\u8FDB\u7A0B\u5217\u8868
docker ps

# \u7F16\u8BD1\uFF08\u4ED3\u5E93: local/misskey:latest)
docker build -t local/misskey:latest ./misskey

# docker run
docker run -d -p 3000:3000 --add-host=docker_host:10.0.0.1 -v /home/misskey/misskey/files:/misskey/files -v &quot;/home/misskey/misskey/.config/default.yml&quot;:/misskey/.config/default.yml:ro --restart unless-stopped -t &quot;local/misskey:latest&quot;

# \u663E\u793A\u65E5\u5FD7
docker logs --tail 50 -f \u5BB9\u5668ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u7684\u547D\u4EE4\u4E3A\u4E0A\u9762\u7684\u547D\u4EE4\u4EEC\u7684\u7ED3\u5408\u4F53\uFF08\u9664\u4E86\u663E\u793A\u65E5\u5FD7\uFF09\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo -u user XDG_RUNTIME_DIR=/run/user/$(id -u user) DOCKER_HOST=unix:///run/user/$(id -u user)/docker.sock docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h3><p>Nginx \u7AD9\u70B9\u914D\u7F6E\u6587\u6863\u4E3A\uFF1A<code>/etc/nginx/conf.d/example.com.conf</code></p><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h3><p>\u5DF2\u7ECF\u5728 <code>/etc/redis/misskey.conf</code> \u8BBE\u5B9A\u4E86requirepass \u4E0E bind\u3002</p><h2 id="\u5347\u7EA7\u5B9E\u4F8B\u540E\u51FA\u73B0-502-\u65E0\u6CD5\u8BBF\u95EE\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u5347\u7EA7\u5B9E\u4F8B\u540E\u51FA\u73B0-502-\u65E0\u6CD5\u8BBF\u95EE\u9519\u8BEF" aria-hidden="true">#</a> \u5347\u7EA7\u5B9E\u4F8B\u540E\u51FA\u73B0 502 \u65E0\u6CD5\u8BBF\u95EE\u9519\u8BEF</h2><p>\u5982\u679C\u4F7F\u7528 Docker\uFF0C\u7531\u4E8E\u5347\u7EA7\u9700\u8981\u8FDB\u884C\u8FC1\u79FB\uFF0C\u6240\u4EE5\u65E0\u6CD5\u7ACB\u5373\u8BBF\u95EE\u3002\u8BF7\u68C0\u67E5\u8FC1\u79FB\u662F\u5426\u5B8C\u6210\u3002</p><p>\u5982\u679C\u4F7F\u7528 systemd\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0 pnpm install \u8FD0\u884C\u5931\u8D25\u7684\u60C5\u51B5\uFF1A</p><p>\u5728 Misskey \u7684\u5B89\u88C5\u76EE\u5F55\u4E2D\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u5E76\u518D\u6B21\u5C1D\u8BD5\u8FDB\u884C\u66F4\u65B0\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pnpm run clean-all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u67E5\u770B journalctl \u65E5\u5FD7\uFF0C\u901A\u5E38\u4F1A\u770B\u5230\u6709\u5173re2\u7684\u8BB0\u5F55\u3002</p><h2 id="\u53EF\u4EE5\u5728\u540C\u4E00\u53F0\u670D\u52A1\u5668\u4E0A\u518D\u5EFA\u7ACB\u4E00\u4E2Amisskey\u5B9E\u4F8B\u5417" tabindex="-1"><a class="header-anchor" href="#\u53EF\u4EE5\u5728\u540C\u4E00\u53F0\u670D\u52A1\u5668\u4E0A\u518D\u5EFA\u7ACB\u4E00\u4E2Amisskey\u5B9E\u4F8B\u5417" aria-hidden="true">#</a> \u53EF\u4EE5\u5728\u540C\u4E00\u53F0\u670D\u52A1\u5668\u4E0A\u518D\u5EFA\u7ACB\u4E00\u4E2AMisskey\u5B9E\u4F8B\u5417\uFF1F</h2><p>\u4E00\u952E\u5B89\u88C5\u811A\u672C\u4E0D\u9002\u7528\u4E8E\u5728\u540C\u4E00\u53F0\u670D\u52A1\u5668\u4E0A\u5B89\u88C5\u53E6\u4E00\u4E2AMisskey\u5B9E\u4F8B\u3002\u56E0\u4E3A\u67D0\u4E9B\u8BBE\u7F6E\u53EF\u80FD\u4F1A\u88AB\u8986\u76D6\uFF0C\u6216\u8005\u5728\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u53D1\u751F\u9519\u8BEF\u3002</p>`,91);function y(g,f){const a=o("RouterLink");return d(),r("div",null,[h,u,m,p,e("p",null,[v,k,n(a,{to:"/zh-CN/docs/install/"},{default:t(()=>[b]),_:1})]),x])}var M=i(c,[["render",y],["__file","bash.html.vue"]]);export{M as default};
