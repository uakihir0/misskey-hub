import{_ as e,o as t,c as o,e as i}from"./app.0e5415dd.js";const n={},a=i('<h1 id="word-mute" tabindex="-1"><a class="header-anchor" href="#word-mute" aria-hidden="true">#</a> Word Mute</h1><p>Through setting up word mutes, you can make notes matching certain conditions not appear on your timeline anymore.</p><p>There are two types of word mutes: soft and hard. Below is an explanation of the setup process and effect of both.</p><h2 id="soft-word-mute" tabindex="-1"><a class="header-anchor" href="#soft-word-mute" aria-hidden="true">#</a> Soft Word Mute</h2><p>With soft mutes, the word mute is processed within the client (app) you are using.</p><p>When a note meets the set conditions, it will be hidden behind text stating &quot;(username) said something&quot;.<br> You can display the hidden note contents by clicking on this text.</p><h2 id="hard-word-mute" tabindex="-1"><a class="header-anchor" href="#hard-word-mute" aria-hidden="true">#</a> Hard Word Mute</h2><p>With hard mutes, the server judges whether the content of a new incoming note meets the set conditions similar to antennas, and will completely exclude it from your timeline if so.</p><p>To summarize, a hard word mute has the following features:</p><ul><li>Only new notes created after configuration will be affected by the mute.</li><li>If the conditions are changed, previously hard muted notes will still remain muted.</li><li>Timelines will not be filled with &quot;(...) said something&quot;.</li><li>Hard mutes will function even for apps without functionality for soft mutes.</li></ul>',10),r=[a];function s(d,h){return t(),o("div",null,r)}var u=e(n,[["render",s],["__file","word-mute.html.vue"]]);export{u as default};
