/* =============================================
   洛克王国攻略站 - 主脚本
   Roco Kingdom Guide - Main JS
   ============================================= */

// =============================================
// DATA STORE
// =============================================

const guidesData = [
  {
    id: 'pvp-tier-2026',
    title: '2026最新PVP天梯排名——T0精灵全解析',
    category: 'pvp',
    tag: 'PVP天梯',
    icon: '⚔️',
    excerpt: '盘点当前版本天梯最强精灵，从技能搭配到实战思路，助你轻松上分！',
    author: '洛克老司机',
    date: '2026-05-28',
    views: 35280,
    likes: 1286,
    featured: true,
    content: `
<h2>📊 天梯环境总览</h2>
<p>2026年5月天梯环境发生了较大变化，随着新精灵的加入和部分技能的调整，T0梯队出现了洗牌。本文将为大家详细解析当前版本的顶级PVP精灵。</p>

<h2>🏆 T0 级别</h2>

<h3>1. 圣光龙王</h3>
<p><strong>属性：</strong>龙/光 | <strong>种族值总和：</strong>680</p>
<p>圣光龙王凭借其超高的速度种族值（130）和出色的双防（110/105），在当前版本中占据统治地位。其专属技能「圣龙裁决」具有先制+1的效果，配合「龙威」特性，可以在首回合就建立巨大优势。</p>

<div class="table-wrap">
<table>
  <tr><th>能力</th><th>种族值</th><th>个体值</th><th>努力值</th></tr>
  <tr><td>HP</td><td>100</td><td>31</td><td>0</td></tr>
  <tr><td>攻击</td><td>120</td><td>31</td><td>252</td></tr>
  <tr><td>防御</td><td>110</td><td>31</td><td>0</td></tr>
  <tr><td>特攻</td><td>95</td><td>31</td><td>0</td></tr>
  <tr><td>特防</td><td>105</td><td>31</td><td>4</td></tr>
  <tr><td>速度</td><td>130</td><td>31</td><td>252</td></tr>
</table>
</div>

<p><strong>推荐配招：</strong>圣龙裁决 + 光之庇护 + 龙息 + 护盾反射</p>
<p><strong>推荐性格：</strong>开朗（+速度 -特攻）或 固执（+攻击 -特攻）</p>

<h3>2. 暗影魔君</h3>
<p><strong>属性：</strong>暗/幽灵 | <strong>种族值总和：</strong>670</p>
<p>暗影魔君拥有极强的特攻端输出能力，其专属技能「暗影裂隙」可以穿透对手的防御强化，是当前版本最强的破盾手之一。</p>
<p><strong>推荐配招：</strong>暗影裂隙 + 灵魂汲取 + 暗夜帷幕 + 影分身</p>

<h3>3. 冰雪女王</h3>
<p><strong>属性：</strong>冰/妖精 | <strong>种族值总和：</strong>660</p>
<p>冰雪女王凭借「极寒领域」技能可以封锁对手的回复能力，在持久战中优势巨大。其妖精属性副属性使其免疫龙系攻击，环境适应性极强。</p>

<h2>⚡ T1 级别</h2>
<h3>4. 烈焰战神</h3>
<p>火/格斗属性，高攻高速的典型代表。大招「烈焰突袭」配合「火焰之躯」特性，伤害溢出可以转化为护盾。</p>

<h3>5. 翠绿守护者</h3>
<p>草/地面属性，防御型精灵的标杆。「根深蒂固」技能回复量惊人，配合「光合作用」在晴天队中几乎不可击杀。</p>

<h2>📝 天梯上分技巧</h2>
<ul>
  <li><strong>阵容搭配：</strong>至少配备1个T0核心输出 + 1个辅助 + 1个联防精灵</li>
  <li><strong>属性联防：</strong>确保队伍覆盖主流攻击属性的抗性，避免被单一属性贯穿全队</li>
  <li><strong>速度线：</strong>当前环境速度种族120以上才算高速，低于100的精灵不要考虑先手</li>
  <li><strong>Ban/Pick策略：</strong>优先Ban掉对自己核心精灵克制的对手，而非盲目Ban T0</li>
</ul>

<blockquote>
💡 <strong>小编提示：</strong>天梯环境每周都在变化，建议持续关注本站获取最新的版本分析！
</blockquote>
    `
  },
  {
    id: 'newbie-guide-2026',
    title: '新手入坑全攻略——从零开始的洛克冒险',
    category: 'newbie',
    tag: '新手必看',
    icon: '🌱',
    excerpt: '刚进入洛克王国不知道从哪开始？这篇攻略带你从选初始精灵到组队通关一条龙！',
    author: '攻略组小雪',
    date: '2026-05-25',
    views: 56890,
    likes: 2341,
    featured: true,
    content: `
<h2>🎮 创建角色与初始选择</h2>
<p>进入洛克王国后，首先要在三大初始精灵中选择一只作为你的伙伴。每只精灵都有各自的特点和成长路线。</p>

<h3>🔥 火花（火系）</h3>
<p><strong>推荐指数：★★★★☆</strong></p>
<p>高攻击高速度，前期推图效率极高。进化路线：火花 → 焰火 → 烈焰龙。后期在PVP中也有不错的表现。</p>
<ul><li>优点：输出高，练级快</li><li>缺点：防御偏低，被水系克制</li></ul>

<h3>💧 水蓝蓝（水系）</h3>
<p><strong>推荐指数：★★★★★</strong></p>
<p>均衡发展的水系精灵，进化后获得冰系副属性，克制面广泛。进化路线：水蓝蓝 → 水灵 → 冰晶水兽。</p>
<ul><li>优点：属性优秀，克制面广，双防可观</li><li>缺点：速度中等</li></ul>

<h3>🌿 喵喵（草系）</h3>
<p><strong>推荐指数：★★★☆☆</strong></p>
<p>防御型精灵，前期推图较慢但续航能力强。进化路线：喵喵 → 喵呜 → 森林守护者。</p>
<ul><li>优点：血厚防高，有回复技能</li><li>缺点：输出偏低，推图效率慢</li></ul>

<blockquote>
💡 <strong>新手建议：</strong>首推水蓝蓝！水系克制面广，进化后冰/水双属性覆盖面极佳，无论PVE还是PVP都是万金油选择。
</blockquote>

<h2>📈 1-50级快速升级路线</h2>
<div class="table-wrap">
<table>
  <tr><th>等级段</th><th>推荐地图</th><th>经验获取</th><th>建议</th></tr>
  <tr><td>1-15级</td><td>王国城堡周边</td><td>基础经验</td><td>跟随主线任务</td></tr>
  <tr><td>15-25级</td><td>天空城</td><td>中等经验</td><td>刷飞行系精灵</td></tr>
  <tr><td>25-35级</td><td>拉布朗矿山</td><td>较高经验</td><td>组队效率更高</td></tr>
  <tr><td>35-45级</td><td>龙之秘境</td><td>高经验</td><td>注意属性克制</td></tr>
  <tr><td>45-50级</td><td>威廉古堡</td><td>最高经验</td><td>组满队伍刷</td></tr>
</table>
</div>

<h2>💰 新手必做日常任务</h2>
<ol>
  <li><strong>每日签到：</strong>连续签到7天送稀有精灵蛋</li>
  <li><strong>日常副本：</strong>经验副本 + 金币副本 + 技能石副本</li>
  <li><strong>竞技场每日3场：</strong>无论输赢都有奖励</li>
  <li><strong>探险任务：</strong>挂机即可获得经验和道具</li>
  <li><strong>矿石采集：</strong>每天采集上限记得采满</li>
</ol>

<h2>🎯 中期目标（50级以后）</h2>
<p>到达50级后，建议按照以下优先级推进：</p>
<ul>
  <li>组建一支6属性齐全的队伍</li>
  <li>至少培养3只满级精灵用于PVP</li>
  <li>完成所有主线剧情（解锁关键地图）</li>
  <li>收集传说精灵（圣光龙王、暗影魔君等）</li>
</ul>
    `
  },
  {
    id: 'boss-dark-lord',
    title: '暗影魔君副本通关攻略——零失误打法详解',
    category: 'boss',
    tag: 'BOSS攻略',
    icon: '👾',
    excerpt: '暗影魔君副本卡关了？详解Boss技能机制、推荐阵容和走位技巧，手把手带你通关！',
    author: '攻略组阿杰',
    date: '2026-05-22',
    views: 42350,
    likes: 1876,
    featured: true,
    content: `
<h2>👾 Boss基本信息</h2>
<div class="table-wrap">
<table>
  <tr><th>属性</th><td>暗影魔君（暗/幽灵）</td></tr>
  <tr><th>等级</th><td>80级</td></tr>
  <tr><th>HP</th><td>约50,000</td></tr>
  <tr><th>推荐挑战等级</th><td>75级以上</td></tr>
  <tr><th>副本位置</th><td>威廉古堡 · 暗影大厅</td></tr>
</table>
</div>

<h2>⚡ Boss技能机制</h2>
<h3>阶段一（HP 100%-50%）</h3>
<ul>
  <li><strong>暗影波（每3回合）：</strong>对全体造成中等暗系伤害，概率附加「恐惧」效果（1回合无法行动）</li>
  <li><strong>影分身（每5回合）：</strong>召唤2个暗影分身，分身HP为Boss的10%，会使用弱化版暗影波</li>
  <li><strong>暗夜帷幕（常驻被动）：</strong>每回合回复1%最大HP</li>
</ul>

<h3>阶段二（HP 50%以下）</h3>
<ul>
  <li><strong>暗影裂隙（每2回合）：</strong>无视防御强化，造成真实伤害，伤害量为目标最大HP的30%</li>
  <li><strong>灵魂汲取（每4回合）：</strong>吸取所有玩家精灵10%当前HP，回复自身5%最大HP</li>
  <li><strong>暗夜帷幕·强化：</strong>回复量提升至2%最大HP</li>
</ul>

<h2>🛡️ 推荐阵容</h2>
<div class="table-wrap">
<table>
  <tr><th>位置</th><th>推荐精灵</th><th>作用</th></tr>
  <tr><td>主力输出</td><td>圣光龙王 / 光辉使者</td><td>光系技能对暗系双倍伤害</td></tr>
  <tr><td>副输出</td><td>烈焰战神</td><td>火系无视暗影分身的闪避</td></tr>
  <tr><td>辅助</td><td>翠绿守护者 / 治愈天使</td><td>群体回复+解除异常状态</td></tr>
  <tr><td>控制位</td><td>冰雪女王</td><td>封锁Boss的回复技能</td></tr>
  <tr><td>坦克位</td><td>岩石巨兽</td><td>吸收暗影裂隙的单体高伤</td></tr>
  <tr><td>替补位</td><td>任意高等级光系精灵</td><td>补充输出</td></tr>
</table>
</div>

<h2>📋 通关流程</h2>
<ol>
  <li><strong>开局Buff：</strong>使用防御药水和速度药水，确保坦克先手</li>
  <li><strong>优先清分身：</strong>Boss召唤分身时第一时间清理，分身存在会大幅增加团灭风险</li>
  <li><strong>阶段转换准备：</strong>Boss HP接近50%时，提前使用回血道具拉满队伍血量</li>
  <li><strong>二阶段集火：</strong>全力输出，不要省技能PP，越快结束战斗越好</li>
  <li><strong>注意暗影裂隙：</strong>当Boss使用暗影裂隙时，切换坦克精灵吃伤害</li>
</ol>

<blockquote>
⚠️ <strong>关键提醒：</strong>如果队伍中没有光系精灵，暗影魔君的难度会翻倍！一定要带上至少一只光系主力！
</blockquote>
    `
  },
  {
    id: 'team-builder-guide',
    title: '最强阵容搭配指南——六精灵联防体系',
    category: 'team',
    tag: '阵容搭配',
    icon: '👥',
    excerpt: '单点强不算强，阵容搭配才是王道！详解联防体系、属性互补和常见阵容模板。',
    author: '战术大师K',
    date: '2026-05-20',
    views: 28900,
    likes: 1567,
    content: `
<h2>🔗 什么是联防体系？</h2>
<p>联防是洛克王国PVP的核心概念——通过精灵之间的属性互补，当一只精灵面对不利对位时可以切换到能抵抗对方攻击的精灵，从而减少伤害并寻找反击机会。</p>

<h2>📊 三大经典阵容模板</h2>

<h3>1. 天气队——晴天体系</h3>
<p><strong>核心精灵：</strong>烈日凤凰（开晴天）+ 烈焰战神（主C）</p>
<p><strong>搭配精灵：</strong>翠绿守护者（草系受晴天加成）+ 圣光龙王（联防）+ 岩石巨兽（扛水系）+ 治愈天使（辅助）</p>
<p><strong>思路：</strong>利用晴天提升火系50%伤害，同时为草系精灵的「光合作用」技能提供最大回复量。</p>

<h3>2. 雨天队——暴雨水系</h3>
<p><strong>核心精灵：</strong>暴风海龙（开雨天）+ 冰晶水兽（水系主C）</p>
<p><strong>搭配精灵：</strong>雷霆鸟（电系100%命中）+ 钢铁堡垒（扛草系）+ 暗影魔君（破盾）+ 冰雪女王（联防）</p>

<h3>3. 平衡队——全面联防</h3>
<p><strong>核心精灵：</strong>圣光龙王 + 暗影魔君（双核输出）</p>
<p><strong>搭配精灵：</strong>翠绿守护者（辅助）+ 岩石巨兽（坦克）+ 冰雪女王（控制）+ 烈焰战神（速度线压制）</p>
<p><strong>思路：</strong>没有明显弱点，适应各种对手阵容，是最稳定的上分选择。</p>

<h2>✅ 阵容检查清单</h2>
<ul>
  <li>是否至少有2个不同属性的输出点？</li>
  <li>是否有应对水系/火系/草系这三个最常见属性的抗性？</li>
  <li>是否有至少一个回复/辅助技能？</li>
  <li>队伍速度线是否合理？（至少2只速度种族>110）</li>
  <li>是否过于依赖单一精灵？（如果是，Ban掉=崩盘）</li>
</ul>
    `
  },
  {
    id: 'event-summer-2026',
    title: '2026夏日庆典活动全攻略——奖励最大化路线',
    category: 'event',
    tag: '活动攻略',
    icon: '🎪',
    excerpt: '夏日庆典活动已上线！教你如何用最少的时间拿满全部奖励，附每日任务清单。',
    author: '攻略组小雪',
    date: '2026-05-18',
    views: 67320,
    likes: 3120,
    featured: true,
    content: `
<h2>🎪 活动概览</h2>
<p>2026夏日庆典活动于5月15日正式开启，持续至6月30日。本次活动包含多个子活动，奖励丰厚——包括限定精灵「夏日水精灵」、专属技能石、大量经验糖果和金币。</p>

<h2>📋 每日必做清单</h2>
<ol>
  <li><strong>夏日签到（1分钟）：</strong>在活动页面签到，累计7天送限定家具</li>
  <li><strong>海滩寻宝（5分钟）：</strong>每天3次，用探测器找宝藏，产出金币和道具</li>
  <li><strong>水上竞技（10分钟）：</strong>完成3场水系精灵对战，获得「夏日徽章」</li>
  <li><strong>冰品收集（5分钟）：</strong>在各地图收集材料制作冰淇淋，兑换稀有道具</li>
</ol>

<h2>🎁 奖励兑换优先级</h2>
<div class="table-wrap">
<table>
  <tr><th>优先级</th><th>道具</th><th>所需徽章</th></tr>
  <tr><td>⭐⭐⭐⭐⭐</td><td>夏日水精灵召唤券</td><td>200徽章</td></tr>
  <tr><td>⭐⭐⭐⭐</td><td>专属技能石「海浪滔天」</td><td>150徽章</td></tr>
  <tr><td>⭐⭐⭐</td><td>夏日限定服装套装</td><td>100徽章</td></tr>
  <tr><td>⭐⭐</td><td>经验糖果×50</td><td>30徽章</td></tr>
  <tr><td>⭐</td><td>金币袋×10</td><td>20徽章</td></tr>
</table>
</div>
    `
  },
  {
    id: 'dungeon-dragon',
    title: '龙之秘境副本全通指南——隐藏房间揭秘',
    category: 'dungeon',
    tag: '副本通关',
    icon: '🏚️',
    excerpt: '龙之秘境隐藏房间入口在哪？所有宝箱位置一览，还有隐藏Boss触发条件！',
    author: '探险家风风',
    date: '2026-05-15',
    views: 19870,
    likes: 934,
    content: `
<h2>🗺️ 副本概览</h2>
<p>龙之秘境是60级开启的高级副本，共有5层。每层都有隐藏房间和宝箱，最终Boss「远古龙神」掉落龙系传说精灵碎片。</p>

<h2>🔍 各层隐藏房间位置</h2>
<ul>
  <li><strong>第一层：</strong>入口左侧岩壁有一个隐藏裂缝，使用「岩石粉碎」技能打开</li>
  <li><strong>第二层：</strong>中央水池下方有水下通道，需要水系精灵带队</li>
  <li><strong>第三层：</strong>击败3只巡逻龙守卫后，Boss房间前的地板会出现传送阵</li>
  <li><strong>第四层：</strong>地图西北角有一个伪装的墙壁，对话选择「敲击」3次</li>
  <li><strong>第五层：</strong>在Boss房间使用「探测」技能，可以发现密室</li>
</ul>
    `
  },
  {
    id: 'pet-training-master',
    title: '精灵培养终极指南——从入门到满配',
    category: 'pet',
    tag: '精灵培养',
    icon: '🐾',
    excerpt: '个体值、努力值、性格修正、技能搭配——精灵培养全系统深度解析',
    author: '数据帝老王',
    date: '2026-05-12',
    views: 31200,
    likes: 1456,
    content: `
<h2>📊 精灵属性系统详解</h2>
<p>每只精灵的能力由四个要素决定：种族值（固定）、个体值（随机0-31）、努力值（后天训练）、性格修正（±10%）。</p>

<h2>🎯 个体值（IV）</h2>
<p>个体值是精灵出生时随机生成的，范围0-31。31为完美个体值（俗称"6V"指6项全31）。</p>
<p><strong>刷个体值的方法：</strong></p>
<ul>
  <li>使用「黄金王冠」道具直接提升一项个体值至31</li>
  <li>孵蛋时携带「不变之石」遗传父母的个体值</li>
  <li>参与活动获取的「大师球」捕捉的精灵个体值下限为20</li>
</ul>

<h2>🏋️ 努力值（EV）</h2>
<p>努力值通过击败特定精灵获得，单项上限252，总和上限510。</p>
<p><strong>推荐训练分配：</strong>攻击手：252攻 + 252速 + 4HP；坦克：252HP + 252对应防 + 4另一防</p>
    `
  },
  {
    id: 'secret-quests',
    title: '洛克王国隐藏任务大全——99%玩家不知道的秘密',
    category: 'dungeon',
    tag: '隐藏任务',
    icon: '🔮',
    excerpt: '盘点洛克王国各大地图中的隐藏任务和彩蛋，有些奖励稀有精灵！',
    author: '探险家风风',
    date: '2026-05-08',
    views: 89200,
    likes: 4521,
    content: '<p>洛克王国中有许多不为人知的隐藏任务，完成后可以获得稀有道具和精灵...</p>'
  },
  {
    id: 'water-spirit-analysis',
    title: '夏日水精灵深度测评——值得培养吗？',
    category: 'pet',
    tag: '精灵培养',
    icon: '💧',
    excerpt: '活动限定精灵「夏日水精灵」全面分析：种族值、技能池、PVP/PVE表现',
    author: '数据帝老王',
    date: '2026-05-05',
    views: 15870,
    likes: 723,
    content: '<p>夏日水精灵是2026夏日庆典的限定精灵，让我们来看看它到底值不值得投入资源...</p>'
  }
];

const petsData = [
  { id:'pet-001', no:'001', name:'火花', types:['fire'], icon:'🔥', hp:45, atk:60, def:40, spa:50, spd:45, sp:65, evolution:'焰火(Lv.16) → 烈焰龙(Lv.36)', desc:'初始精灵之一，性格活泼，尾部的火焰代表它的生命力。' },
  { id:'pet-002', no:'002', name:'水蓝蓝', types:['water'], icon:'💧', hp:50, atk:45, def:55, spa:55, spd:60, sp:50, evolution:'水灵(Lv.16) → 冰晶水兽(Lv.36)', desc:'初始精灵之一，性格温和，可以在水中自由穿梭。' },
  { id:'pet-003', no:'003', name:'喵喵', types:['grass'], icon:'🌿', hp:55, atk:48, def:58, spa:52, spd:55, sp:45, evolution:'喵呜(Lv.16) → 森林守护者(Lv.36)', desc:'初始精灵之一，头顶的叶子可以感知周围的危险。' },
  { id:'pet-004', no:'004', name:'圣光龙王', types:['dragon','fairy'], icon:'🐉', hp:100, atk:120, def:110, spa:95, spd:105, sp:130, evolution:'无进化（传说精灵）', desc:'传说中的龙王，拥有神圣的光之力量，是洛克王国最强的精灵之一。' },
  { id:'pet-005', no:'005', name:'暗影魔君', types:['dark','ghost'], icon:'👻', hp:95, atk:90, def:85, spa:135, spd:110, sp:115, evolution:'无进化（传说精灵）', desc:'来自暗影世界的君主，掌控着黑暗与幽灵的双重力量。' },
  { id:'pet-006', no:'006', name:'冰雪女王', types:['ice','fairy'], icon:'❄️', hp:90, atk:70, def:100, spa:130, spd:120, sp:105, evolution:'无进化（传说精灵）', desc:'统治极寒之地的女王，她的吐息可以冻结一切。' },
  { id:'pet-007', no:'007', name:'烈焰战神', types:['fire','fighting'], icon:'🔥', hp:85, atk:135, def:75, spa:85, spd:80, sp:120, evolution:'焰火(Lv.36进化)', desc:'以火焰为武器的战神，近战能力在火系精灵中首屈一指。' },
  { id:'pet-008', no:'008', name:'翠绿守护者', types:['grass','ground'], icon:'🌿', hp:120, atk:70, def:130, spa:75, spd:115, sp:50, evolution:'森林守护者(Lv.40进化)', desc:'森林的守护神，拥有无穷的生命力和最强的防御能力。' },
  { id:'pet-009', no:'009', name:'雷霆鸟', types:['electric','flying'], icon:'⚡', hp:75, atk:65, def:70, spa:125, spd:85, sp:140, evolution:'电击鸟(Lv.22) → 雷霆鸟(Lv.42)', desc:'速度最快的精灵之一，翅膀扇动时能产生十万伏特的电流。' },
  { id:'pet-010', no:'010', name:'岩石巨兽', types:['rock'], icon:'🪨', hp:140, atk:105, def:140, spa:40, spd:85, sp:35, evolution:'岩石怪(Lv.25) → 岩石巨兽(Lv.45)', desc:'拥有最坚硬的外壳，是队伍中不可或缺的防御核心。' },
  { id:'pet-011', no:'011', name:'暴风海龙', types:['water','dragon'], icon:'🌊', hp:100, atk:85, def:95, spa:125, spd:95, sp:100, evolution:'海龙(Lv.30) → 暴风海龙(Lv.50)', desc:'呼风唤雨的海洋霸主，在雨天队中拥有核心地位。' },
  { id:'pet-012', no:'012', name:'治愈天使', types:['fairy'], icon:'✨', hp:110, atk:40, def:90, spa:100, spd:130, sp:80, evolution:'无进化', desc:'最优秀的辅助精灵，能够治愈队友的伤势并解除异常状态。' },
  { id:'pet-013', no:'013', name:'光辉使者', types:['psychic','fairy'], icon:'💫', hp:80, atk:60, def:75, spa:140, spd:110, sp:110, evolution:'无进化（传说精灵）', desc:'来自天界的使者，拥有纯净的光之力，对暗系精灵有致命威胁。' },
  { id:'pet-014', no:'014', name:'钢铁堡垒', types:['rock','ice'], icon:'🛡️', hp:130, atk:90, def:150, spa:40, spd:110, sp:30, evolution:'钢铁兽(Lv.28) → 钢铁堡垒(Lv.48)', desc:'防御力最强悍的精灵，据说没有任何攻击能一击击倒它。' },
  { id:'pet-015', no:'015', name:'暗夜猎手', types:['dark'], icon:'🌑', hp:75, atk:130, def:60, spa:70, spd:65, sp:130, evolution:'暗影猫(Lv.20) → 暗夜猎手(Lv.40)', desc:'暗夜中的猎手，以超高的速度和攻击力在黑暗中收割猎物。' },
  { id:'pet-016', no:'016', name:'夏日水精灵', types:['water','fairy'], icon:'🏖️', hp:85, atk:55, def:80, spa:115, spd:100, sp:95, evolution:'无进化（活动限定）', desc:'2026夏日庆典限定精灵，拥有水与妖精的双重属性。' }
];

const newsData = [
  { title:'「夏日庆典」活动正式上线！', date:'2026-05-15', category:'活动', excerpt:'限时活动开启，参与即送限定精灵夏日水精灵，还有大量福利等你来拿！', icon:'🎪' },
  { title:'6月版本更新预告——新精灵登场', date:'2026-05-30', category:'公告', excerpt:'下月将新增3只传说精灵，同时调整天梯平衡性，圣光龙王技能微调。', icon:'📢' },
  { title:'PVP天梯赛S15赛季结算公告', date:'2026-05-10', category:'PVP', excerpt:'S15赛季将于5月31日结算，赛季奖励包括限定皮肤和称号。', icon:'🏆' },
  { title:'「暗影魔君」副本难度下调', date:'2026-05-08', category:'更新', excerpt:'官方回应玩家反馈，暗影魔君副本二阶段伤害降低15%，通关更容易了！', icon:'⚙️' },
  { title:'新手福利升级——登录7天送传说精灵', date:'2026-05-01', category:'福利', excerpt:'新注册玩家连续登录7天即可获得随机传说精灵一只，快来邀请好友吧！', icon:'🎁' },
  { title:'洛克王国×神秘IP联动预告', date:'2026-04-28', category:'联动', excerpt:'官方放出联动剪影图，引发玩家热议，猜测可能是热门国漫IP。', icon:'🤝' }
];

// =============================================
// UTILITY FUNCTIONS
// =============================================

function getQueryParam(param) {
  const url = new URL(window.location.href);
  return url.searchParams.get(param);
}

function formatNumber(n) {
  if (n >= 10000) return (n / 10000).toFixed(1) + '万';
  return n.toString();
}

function timeAgo(dateStr) {
  const date = new Date(dateStr);
  const now = new Date();
  const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24));
  if (diff === 0) return '今天';
  if (diff < 7) return diff + '天前';
  if (diff < 30) return Math.floor(diff / 7) + '周前';
  return dateStr;
}

// =============================================
// NAVBAR SEARCH
// =============================================
function initNavSearch() {
  const input = document.getElementById('searchInput');
  const btn = document.getElementById('searchBtn');
  if (!input || !btn) return;

  function doSearch() {
    const q = input.value.trim();
    if (q) window.location.href = 'guides.html?search=' + encodeURIComponent(q);
  }
  btn.addEventListener('click', doSearch);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
}

// =============================================
// HOME PAGE
// =============================================
function renderHomePage() {
  // Hot guides (featured + top by views)
  const hotGrid = document.getElementById('hotGuides');
  if (!hotGrid) return;

  const hot = [...guidesData].filter(g => g.featured).slice(0, 3);
  hotGrid.innerHTML = hot.map(g => `
    <article class="card">
      <div class="card-img">
        <span>${g.icon}</span>
        <span class="card-badge">${g.tag}</span>
      </div>
      <div class="card-body">
        <span class="card-tag">${g.tag}</span>
        <h3><a href="guide-detail.html?id=${g.id}">${g.title}</a></h3>
        <p>${g.excerpt}</p>
      </div>
      <div class="card-footer">
        <span class="author">👤 ${g.author}</span>
        <span class="stats">👀 ${formatNumber(g.views)} · ❤️ ${formatNumber(g.likes)}</span>
      </div>
    </article>
  `).join('');

  // Latest news
  const newsContainer = document.getElementById('latestNews');
  newsContainer.innerHTML = newsData.slice(0, 5).map(n => `
    <div class="news-item">
      <div class="news-date"><span>${n.date.split('-')[2]}</span>${n.date.split('-')[1]}月</div>
      <div class="news-info">
        <h4><a href="guides.html?search=${encodeURIComponent(n.title)}">${n.title}</a></h4>
        <p>${n.category} · ${n.excerpt}</p>
      </div>
    </div>
  `).join('');

  // Current events (sidebar)
  const eventsContainer = document.getElementById('currentEvents');
  eventsContainer.innerHTML = newsData.filter(n => n.category === '活动' || n.category === '福利').slice(0, 3).map(n => `
    <div class="news-item">
      <div class="news-date"><span>${n.date.split('-')[2]}</span>${n.date.split('-')[1]}月</div>
      <div class="news-info">
        <h4>${n.title}</h4>
        <p>${n.excerpt}</p>
      </div>
    </div>
  `).join('');

  // Weekly pet picks
  const petContainer = document.getElementById('weeklyPet');
  const topPets = petsData.slice(0, 3);
  petContainer.innerHTML = topPets.map(p => `
    <div class="news-item">
      <div class="news-date" style="font-size:1.8rem;">${p.icon}</div>
      <div class="news-info">
        <h4>${p.name} <span style="font-size:0.78rem;color:var(--text-muted);">No.${p.no}</span></h4>
        <p>${p.types.map(t => t).join(' / ')} · ${p.desc.substring(0, 30)}...</p>
      </div>
    </div>
  `).join('');
}

// =============================================
// GUIDES PAGE
// =============================================
function renderGuidesPage() {
  const grid = document.getElementById('guidesGrid');
  if (!grid) return;

  let guides = [...guidesData];
  const searchQuery = getQueryParam('search');
  const catQuery = getQueryParam('cat');
  const tagQuery = getQueryParam('tag');

  // Apply URL filter
  let activeFilter = catQuery || tagQuery || 'all';
  if (activeFilter !== 'all') {
    guides = guides.filter(g => g.category === activeFilter || g.tag === activeFilter);
  }

  // Apply search
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    guides = guides.filter(g => g.title.toLowerCase().includes(q) || g.excerpt.toLowerCase().includes(q) || g.tag.toLowerCase().includes(q));
    document.getElementById('guideSearchInput').value = searchQuery;
  }

  document.getElementById('resultCount').textContent = guides.length;
  if (searchQuery) {
    document.getElementById('resultInfo').innerHTML = `搜索 "<strong>${searchQuery}</strong>" 找到 <span id="resultCount">${guides.length}</span> 篇攻略`;
  }

  // Set active filter button
  if (activeFilter !== 'all') {
    document.querySelectorAll('#filterBar .filter-btn').forEach(b => {
      b.classList.remove('active');
      if (b.dataset.filter === activeFilter) b.classList.add('active');
    });
  }

  // Render cards
  grid.innerHTML = guides.map(g => `
    <article class="card">
      <div class="card-img">
        <span>${g.icon}</span>
        <span class="card-badge">${g.tag}</span>
      </div>
      <div class="card-body">
        <span class="card-tag">${g.tag}</span>
        <h3><a href="guide-detail.html?id=${g.id}">${g.title}</a></h3>
        <p>${g.excerpt}</p>
      </div>
      <div class="card-footer">
        <span class="author">👤 ${g.author}</span>
        <span class="stats">👀 ${formatNumber(g.views)} · ❤️ ${formatNumber(g.likes)}</span>
      </div>
    </article>
  `).join('');

  // Filter button events
  document.querySelectorAll('#filterBar .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#filterBar .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      let filtered = filter === 'all' ? [...guidesData] : guidesData.filter(g => g.category === filter);
      document.getElementById('resultInfo').innerHTML = `共 <span id="resultCount">${filtered.length}</span> 篇攻略`;
      document.getElementById('guidesGrid').innerHTML = filtered.map(g => `
        <article class="card">
          <div class="card-img"><span>${g.icon}</span><span class="card-badge">${g.tag}</span></div>
          <div class="card-body">
            <span class="card-tag">${g.tag}</span>
            <h3><a href="guide-detail.html?id=${g.id}">${g.title}</a></h3>
            <p>${g.excerpt}</p>
          </div>
          <div class="card-footer">
            <span class="author">👤 ${g.author}</span>
            <span class="stats">👀 ${formatNumber(g.views)} · ❤️ ${formatNumber(g.likes)}</span>
          </div>
        </article>
      `).join('');
    });
  });

  // Search event
  const searchInput = document.getElementById('guideSearchInput');
  const searchBtn = document.getElementById('guideSearchBtn');
  function doGuideSearch() {
    const q = searchInput.value.trim();
    if (q) window.location.href = 'guides.html?search=' + encodeURIComponent(q);
  }
  searchBtn.addEventListener('click', doGuideSearch);
  searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') doGuideSearch(); });
}

// =============================================
// GUIDE DETAIL PAGE
// =============================================
function renderGuideDetailPage() {
  const guideId = getQueryParam('id');
  const titleEl = document.getElementById('guideTitle');
  if (!titleEl) return;

  // Special: about page
  if (guideId === 'about') {
    document.getElementById('guideTitle').textContent = '关于本站';
    document.getElementById('guideMeta').innerHTML = '<span>洛克王国玩家社区</span>';
    document.getElementById('breadcrumbCat').textContent = '关于';
    document.getElementById('guideContent').innerHTML = `
      <h2>🏰 关于洛克王国攻略站</h2>
      <p>本站是由洛克王国玩家自发创建的攻略资讯社区，致力于为所有小洛克提供最新、最全的游戏攻略和资讯。</p>
      <h2>📖 我们的内容</h2>
      <ul>
        <li>最新活动资讯和福利汇总</li>
        <li>精灵图鉴和培养指南</li>
        <li>PVP天梯排名和阵容推荐</li>
        <li>副本通关攻略和隐藏任务</li>
      </ul>
      <h2>⚠️ 免责声明</h2>
      <p>本站为玩家社区站点，与腾讯洛克王国官方无关。洛克王国及其相关商标、角色版权归腾讯公司所有。本站内容仅供玩家交流和参考。</p>
      <h2>📞 联系我们</h2>
      <p>如果你有任何建议或想投稿攻略，欢迎加入我们的玩家QQ群：123456789</p>
    `;
    document.getElementById('relatedGuides').innerHTML = '';
    return;
  }

  const guide = guidesData.find(g => g.id === guideId);
  if (!guide) {
    document.getElementById('guideTitle').textContent = '攻略未找到';
    document.getElementById('guideContent').innerHTML = '<p>抱歉，您查找的攻略不存在或已被移除。</p><a href="guides.html" class="btn btn-primary">返回攻略列表</a>';
    return;
  }

  document.getElementById('guideTitle').textContent = guide.title;
  document.getElementById('guideMeta').innerHTML = `
    <span>👤 ${guide.author}</span>
    <span>📅 ${guide.date}</span>
    <span>👀 ${formatNumber(guide.views)} 阅读</span>
    <span>❤️ ${guide.likes} 点赞</span>
  `;
  document.getElementById('breadcrumbCat').textContent = guide.tag;
  document.getElementById('guideContent').innerHTML = guide.content;

  // Related guides (same category)
  const related = guidesData.filter(g => g.category === guide.category && g.id !== guide.id).slice(0, 3);
  document.getElementById('relatedGuides').innerHTML = related.map(g => `
    <article class="card">
      <div class="card-img"><span>${g.icon}</span><span class="card-badge">${g.tag}</span></div>
      <div class="card-body">
        <span class="card-tag">${g.tag}</span>
        <h3><a href="guide-detail.html?id=${g.id}">${g.title}</a></h3>
        <p>${g.excerpt}</p>
      </div>
      <div class="card-footer">
        <span class="author">👤 ${g.author}</span>
        <span class="stats">👀 ${formatNumber(g.views)}</span>
      </div>
    </article>
  `).join('');

  document.title = guide.title + ' - 洛克王国攻略站';
}

// =============================================
// PETS PAGE
// =============================================
function renderPetsPage() {
  const grid = document.getElementById('petsGrid');
  if (!grid) return;

  let pets = [...petsData];
  document.getElementById('petResultCount').textContent = pets.length;

  const searchQuery = getQueryParam('search');

  function renderPetCards(list) {
    grid.innerHTML = list.map(p => `
      <div class="pet-card" data-id="${p.id}" onclick="openPetDetail('${p.id}')">
        <span class="pet-icon">${p.icon}</span>
        <div class="pet-no">No.${p.no}</div>
        <h3>${p.name}</h3>
        <div class="pet-type">
          ${p.types.map(t => `<span class="type-badge type-${t}">${t}</span>`).join('')}
        </div>
        <p style="font-size:0.82rem;color:var(--text-muted);">种族值总和: ${p.hp + p.atk + p.def + p.spa + p.spd + p.sp}</p>
      </div>
    `).join('');
    document.getElementById('petResultCount').textContent = list.length;
  }

  renderPetCards(pets);

  // Search
  document.getElementById('petSearchBtn').addEventListener('click', () => {
    const q = document.getElementById('petSearchInput').value.trim().toLowerCase();
    if (!q) { renderPetCards(petsData); return; }
    const filtered = petsData.filter(p => p.name.includes(q) || p.no.includes(q) || p.types.some(t => t.includes(q)));
    renderPetCards(filtered);
  });
  document.getElementById('petSearchInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('petSearchBtn').click();
  });

  // Type filter
  document.querySelectorAll('#petFilterBar .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#petFilterBar .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      const filtered = filter === 'all' ? petsData : petsData.filter(p => p.types.includes(filter));
      renderPetCards(filtered);
      document.getElementById('petSearchInput').value = '';
    });
  });

  // URL search
  if (searchQuery) {
    document.getElementById('petSearchInput').value = searchQuery;
    document.getElementById('petSearchBtn').click();
  }
}

function openPetDetail(petId) {
  const pet = petsData.find(p => p.id === petId);
  if (!pet) return;

  const total = pet.hp + pet.atk + pet.def + pet.spa + pet.spd + pet.sp;
  document.getElementById('petModalContent').innerHTML = `
    <div style="text-align:center;margin-bottom:24px;">
      <span style="font-size:5rem;">${pet.icon}</span>
      <h2>${pet.name}</h2>
      <p style="color:var(--text-muted);">No.${pet.no} · ${pet.types.map(t => `<span class="type-badge type-${t}">${t}</span>`).join(' ')}</p>
    </div>
    <p style="margin-bottom:16px;">${pet.desc}</p>
    <div class="table-wrap">
      <table>
        <tr><th>能力</th><th>种族值</th><th>评级</th></tr>
        <tr><td>HP</td><td>${pet.hp}</td><td>${'⭐'.repeat(Math.ceil(pet.hp / 30))}</td></tr>
        <tr><td>攻击</td><td>${pet.atk}</td><td>${'⭐'.repeat(Math.ceil(pet.atk / 30))}</td></tr>
        <tr><td>防御</td><td>${pet.def}</td><td>${'⭐'.repeat(Math.ceil(pet.def / 30))}</td></tr>
        <tr><td>特攻</td><td>${pet.spa}</td><td>${'⭐'.repeat(Math.ceil(pet.spa / 30))}</td></tr>
        <tr><td>特防</td><td>${pet.spd}</td><td>${'⭐'.repeat(Math.ceil(pet.spd / 30))}</td></tr>
        <tr><td>速度</td><td>${pet.sp}</td><td>${'⭐'.repeat(Math.ceil(pet.sp / 30))}</td></tr>
        <tr style="font-weight:700;background:var(--bg);"><td>总和</td><td colspan="2">${total}</td></tr>
      </table>
    </div>
    <p style="margin-top:16px;"><strong>进化路线：</strong>${pet.evolution}</p>
  `;
  document.getElementById('petModal').classList.remove('hidden');
}

function closePetModal() {
  document.getElementById('petModal').classList.add('hidden');
}

// =============================================
// INIT - Detect page and render
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  initNavSearch();

  const path = window.location.pathname.replace(/^\/+/, '');
  if (path.includes('guide-detail')) {
    renderGuideDetailPage();
  } else if (path.includes('guides')) {
    renderGuidesPage();
  } else if (path.includes('pets')) {
    renderPetsPage();
  } else {
    // Default: index.html / home
    renderHomePage();
  }

  // Pet modal close
  const closeBtn = document.getElementById('closePetModal');
  if (closeBtn) {
    closeBtn.addEventListener('click', closePetModal);
  }
  const modal = document.getElementById('petModal');
  if (modal) {
    modal.addEventListener('click', e => { if (e.target === modal) closePetModal(); });
  }
});
