const teams = {
  mexico: team("mexico", "墨西哥", "Mexico", "mx", "哈维尔·阿吉雷", ["吉列尔莫·奥乔亚", "埃德松·阿尔瓦雷斯", "圣地亚哥·希门尼斯"]),
  southAfrica: team("southAfrica", "南非", "South Africa", "za", "雨果·布罗斯", ["罗恩文·威廉姆斯", "特博霍·莫科埃纳", "珀西·陶"]),
  southKorea: team("southKorea", "韩国", "South Korea", "kr", "洪明甫", ["孙兴慜", "金玟哉", "李刚仁"]),
  czechia: team("czechia", "捷克", "Czechia", "cz", "伊万·哈谢克", ["托马什·绍切克", "帕特里克·希克", "亚当·赫洛热克"]),
  canada: team("canada", "加拿大", "Canada", "ca", "杰西·马什", ["阿方索·戴维斯", "乔纳森·戴维", "塔琼·布坎南"]),
  qatar: team("qatar", "卡塔尔", "Qatar", "qa", "洛佩斯", ["阿克拉姆·阿菲夫", "阿尔莫埃兹·阿里", "佩德罗·米格尔"]),
  switzerland: team("switzerland", "瑞士", "Switzerland", "ch", "穆拉特·雅金", ["格拉尼特·扎卡", "曼努埃尔·阿坎吉", "布雷尔·恩博洛"]),
  bosnia: team("bosnia", "波黑", "Bosnia and Herzegovina", "ba", "谢尔盖·巴巴雷茨", ["埃丁·哲科", "拉德·克鲁尼奇", "阿内尔·艾哈迈德霍季奇"]),
  brazil: team("brazil", "巴西", "Brazil", "br", "卡洛·安切洛蒂", ["维尼修斯", "罗德里戈", "布鲁诺·吉马良斯"]),
  morocco: team("morocco", "摩洛哥", "Morocco", "ma", "瓦利德·雷格拉吉", ["阿什拉夫·哈基米", "索菲安·阿姆拉巴特", "优素福·恩内斯里"]),
  scotland: team("scotland", "苏格兰", "Scotland", "gb-sct", "史蒂夫·克拉克", ["安迪·罗伯逊", "约翰·麦金", "斯科特·麦克托米奈"]),
  haiti: team("haiti", "海地", "Haiti", "ht", "塞巴斯蒂安·米涅", ["杜肯斯·纳宗", "让-里卡纳·贝尔加德", "约翰尼·普拉西德"]),
  usa: team("usa", "美国", "United States", "us", "毛里西奥·波切蒂诺", ["克里斯蒂安·普利西奇", "泰勒·亚当斯", "韦斯顿·麦肯尼"]),
  turkey: team("turkey", "土耳其", "Turkiye", "tr", "文琴佐·蒙特拉", ["哈坎·恰尔汗奥卢", "阿尔达·居莱尔", "凯南·伊尔迪兹"]),
  paraguay: team("paraguay", "巴拉圭", "Paraguay", "py", "古斯塔沃·阿尔法罗", ["米格尔·阿尔米隆", "古斯塔沃·戈麦斯", "胡利奥·恩西索"]),
  australia: team("australia", "澳大利亚", "Australia", "au", "托尼·波波维奇", ["马修·瑞安", "杰克逊·欧文", "克雷格·古德温"]),
  germany: team("germany", "德国", "Germany", "de", "尤利安·纳格尔斯曼", ["约书亚·基米希", "贾马尔·穆西亚拉", "弗洛里安·维尔茨"]),
  ivoryCoast: team("ivoryCoast", "科特迪瓦", "Cote d'Ivoire", "ci", "埃梅尔斯·法埃", ["塞巴斯蒂安·阿莱", "弗兰克·凯西", "西蒙·阿丁格拉"]),
  curacao: team("curacao", "库拉索", "Curacao", "cw", "迪克·阿德沃卡特", ["莱安德罗·巴库纳", "容·尤斯廷", "朱尼尼奥·巴库纳"]),
  ecuador: team("ecuador", "厄瓜多尔", "Ecuador", "ec", "塞巴斯蒂安·贝卡塞塞", ["莫伊塞斯·凯塞多", "皮耶罗·因卡皮耶", "恩纳·瓦伦西亚"]),
  netherlands: team("netherlands", "荷兰", "Netherlands", "nl", "罗纳德·科曼", ["维吉尔·范戴克", "弗兰基·德容", "科迪·加克波"]),
  japan: team("japan", "日本", "Japan", "jp", "森保一", ["三笘薰", "久保建英", "远藤航"]),
  tunisia: team("tunisia", "突尼斯", "Tunisia", "tn", "萨米·特拉贝尔西", ["埃利耶斯·斯希里", "瓦赫比·哈兹里", "蒙塔萨尔·塔尔比"]),
  sweden: team("sweden", "瑞典", "Sweden", "se", "乔恩·达尔·托马森", ["亚历山大·伊萨克", "德扬·库卢塞夫斯基", "维克托·林德洛夫"]),
  belgium: team("belgium", "比利时", "Belgium", "be", "鲁迪·加西亚", ["凯文·德布劳内", "罗梅卢·卢卡库", "杰里米·多库"]),
  iran: team("iran", "伊朗", "Iran", "ir", "阿米尔·加莱诺伊", ["迈赫迪·塔雷米", "萨达尔·阿兹蒙", "阿里雷扎·贾汉巴赫什"]),
  newZealand: team("newZealand", "新西兰", "New Zealand", "nz", "达伦·巴兹利", ["克里斯·伍德", "萨普里特·辛格", "乔·贝尔"]),
  egypt: team("egypt", "埃及", "Egypt", "eg", "霍萨姆·哈桑", ["穆罕默德·萨拉赫", "奥马尔·马尔穆什", "穆罕默德·埃尔内尼"]),
  spain: team("spain", "西班牙", "Spain", "es", "路易斯·德拉富恩特", ["罗德里", "佩德里", "拉明·亚马尔"]),
  capeVerde: team("capeVerde", "佛得角", "Cape Verde", "cv", "佩德罗·布里托", ["贝贝", "瑞安·门德斯", "洛甘·科斯塔"]),
  saudiArabia: team("saudiArabia", "沙特", "Saudi Arabia", "sa", "罗伯托·曼奇尼", ["萨利姆·多萨里", "菲拉斯·布赖坎", "穆罕默德·奥韦斯"]),
  uruguay: team("uruguay", "乌拉圭", "Uruguay", "uy", "马塞洛·贝尔萨", ["费德里科·巴尔韦德", "达尔文·努涅斯", "罗纳德·阿劳霍"]),
  france: team("france", "法国", "France", "fr", "迪迪埃·德尚", ["基利安·姆巴佩", "安托万·格列兹曼", "奥雷利安·楚阿梅尼"]),
  senegal: team("senegal", "塞内加尔", "Senegal", "sn", "帕普·蒂亚乌", ["萨迪奥·马内", "卡利杜·库利巴利", "尼古拉斯·雅克松"]),
  norway: team("norway", "挪威", "Norway", "no", "斯托勒·索尔巴肯", ["埃尔林·哈兰德", "马丁·厄德高", "亚历山大·瑟洛特"]),
  iraq: team("iraq", "伊拉克", "Iraq", "iq", "赫苏斯·卡萨斯", ["艾曼·侯赛因", "阿里·贾西姆", "易卜拉欣·巴耶什"]),
  argentina: team("argentina", "阿根廷", "Argentina", "ar", "利昂内尔·斯卡洛尼", ["利昂内尔·梅西", "劳塔罗·马丁内斯", "恩佐·费尔南德斯"]),
  algeria: team("algeria", "阿尔及利亚", "Algeria", "dz", "弗拉基米尔·佩特科维奇", ["里亚德·马赫雷斯", "伊斯梅尔·本纳塞尔", "拉米·本塞拜尼"]),
  austria: team("austria", "奥地利", "Austria", "at", "拉尔夫·朗尼克", ["大卫·阿拉巴", "马塞尔·萨比策", "克里斯托夫·鲍姆加特纳"]),
  jordan: team("jordan", "约旦", "Jordan", "jo", "贾迈勒·塞拉米", ["穆萨·塔马里", "亚赞·奈马特", "努尔·拉瓦布德"]),
  portugal: team("portugal", "葡萄牙", "Portugal", "pt", "罗伯托·马丁内斯", ["克里斯蒂亚诺·罗纳尔多", "布鲁诺·费尔南德斯", "贝尔纳多·席尔瓦"]),
  drCongo: team("drCongo", "民主刚果", "DR Congo", "cd", "塞巴斯蒂安·德萨布尔", ["约安·维萨", "塞德里克·巴坎布", "尚塞尔·姆本巴"]),
  uzbekistan: team("uzbekistan", "乌兹别克斯坦", "Uzbekistan", "uz", "斯雷奇科·卡塔内茨", ["埃尔多尔·肖穆罗多夫", "阿博斯别克·法伊祖拉耶夫", "阿卜杜科迪尔·胡萨诺夫"]),
  colombia: team("colombia", "哥伦比亚", "Colombia", "co", "内斯托尔·洛伦索", ["路易斯·迪亚斯", "哈梅斯·罗德里格斯", "杰斐逊·莱尔马"]),
  england: team("england", "英格兰", "England", "gb-eng", "托马斯·图赫尔", ["哈里·凯恩", "裘德·贝林厄姆", "布卡约·萨卡"]),
  croatia: team("croatia", "克罗地亚", "Croatia", "hr", "兹拉特科·达利奇", ["卢卡·莫德里奇", "马特奥·科瓦契奇", "约什科·格瓦迪奥尔"]),
  ghana: team("ghana", "加纳", "Ghana", "gh", "奥托·阿多", ["穆罕默德·库杜斯", "托马斯·帕尔特伊", "乔丹·阿尤"]),
  panama: team("panama", "巴拿马", "Panama", "pa", "托马斯·克里斯蒂安森", ["阿尼巴尔·戈多伊", "何塞·法哈多", "迈克尔·穆里略"])
};

const groups = [
  group("A", ["mexico", "southKorea", "czechia", "southAfrica"], [[2, 2, 0, 0, 3, 0, 6], [2, 1, 0, 1, 2, 2, 3], [1, 0, 1, 0, 1, 1, 1], [1, 0, 0, 1, 0, 3, 0]]),
  group("B", ["canada", "switzerland", "bosnia", "qatar"], [[2, 2, 0, 0, 8, 0, 6], [1, 0, 1, 0, 1, 1, 1], [1, 0, 1, 0, 1, 1, 1], [2, 0, 0, 2, 0, 8, 0]]),
  group("C", ["brazil", "morocco", "scotland", "haiti"], [[1, 1, 0, 0, 2, 0, 3], [1, 0, 1, 0, 1, 1, 1], [1, 0, 1, 0, 1, 1, 1], [1, 0, 0, 1, 0, 2, 0]]),
  group("D", ["usa", "turkey", "paraguay", "australia"], [[1, 1, 0, 0, 2, 1, 3], [1, 1, 0, 0, 1, 0, 3], [1, 0, 0, 1, 0, 1, 0], [1, 0, 0, 1, 1, 2, 0]]),
  group("E", ["germany", "ivoryCoast", "ecuador", "curacao"], [[1, 1, 0, 0, 4, 0, 3], [1, 0, 1, 0, 1, 1, 1], [1, 0, 1, 0, 1, 1, 1], [1, 0, 0, 1, 0, 4, 0]]),
  group("F", ["netherlands", "japan", "sweden", "tunisia"], [[1, 1, 0, 0, 2, 0, 3], [1, 1, 0, 0, 1, 0, 3], [1, 0, 0, 1, 0, 1, 0], [1, 0, 0, 1, 0, 2, 0]]),
  group("G", ["belgium", "egypt", "iran", "newZealand"], [[1, 1, 0, 0, 3, 1, 3], [1, 1, 0, 0, 1, 0, 3], [1, 0, 0, 1, 0, 1, 0], [1, 0, 0, 1, 1, 3, 0]]),
  group("H", ["spain", "uruguay", "saudiArabia", "capeVerde"], [[1, 1, 0, 0, 3, 0, 3], [1, 1, 0, 0, 2, 1, 3], [1, 0, 0, 1, 1, 2, 0], [1, 0, 0, 1, 0, 3, 0]]),
  group("I", ["france", "norway", "senegal", "iraq"], [[1, 1, 0, 0, 2, 0, 3], [1, 0, 1, 0, 1, 1, 1], [1, 0, 1, 0, 1, 1, 1], [1, 0, 0, 1, 0, 2, 0]]),
  group("J", ["argentina", "austria", "algeria", "jordan"], [[1, 1, 0, 0, 3, 1, 3], [1, 0, 1, 0, 1, 1, 1], [1, 0, 1, 0, 1, 1, 1], [1, 0, 0, 1, 1, 3, 0]]),
  group("K", ["portugal", "colombia", "uzbekistan", "drCongo"], [[1, 1, 0, 0, 2, 0, 3], [1, 1, 0, 0, 1, 0, 3], [1, 0, 0, 1, 0, 1, 0], [1, 0, 0, 1, 0, 2, 0]]),
  group("L", ["england", "croatia", "ghana", "panama"], [[1, 1, 0, 0, 2, 0, 3], [1, 1, 0, 0, 2, 1, 3], [1, 0, 0, 1, 1, 2, 0], [1, 0, 0, 1, 0, 2, 0]])
];

let standingsSource = {
  updatedAt: "",
  isLive: false,
  message: "实时积分待接入"
};

const schedules = {
  A: [["墨西哥", "南非", "6月11日"], ["韩国", "捷克", "6月12日"], ["墨西哥", "韩国", "6月18日"], ["南非", "捷克", "6月19日"], ["墨西哥", "捷克", "6月24日"], ["南非", "韩国", "6月24日"]],
  B: [["加拿大", "卡塔尔", "6月12日"], ["瑞士", "波黑", "6月13日"], ["加拿大", "瑞士", "6月18日"], ["卡塔尔", "波黑", "6月19日"], ["加拿大", "波黑", "6月24日"], ["卡塔尔", "瑞士", "6月24日"]],
  C: [["巴西", "海地", "6月13日"], ["摩洛哥", "苏格兰", "6月14日"], ["巴西", "摩洛哥", "6月19日"], ["海地", "苏格兰", "6月20日"], ["巴西", "苏格兰", "6月25日"], ["海地", "摩洛哥", "6月25日"]],
  D: [["美国", "澳大利亚", "6月13日"], ["土耳其", "巴拉圭", "6月14日"], ["美国", "土耳其", "6月19日"], ["澳大利亚", "巴拉圭", "6月20日"], ["美国", "巴拉圭", "6月25日"], ["澳大利亚", "土耳其", "6月25日"]],
  E: [["德国", "库拉索", "6月14日"], ["科特迪瓦", "厄瓜多尔", "6月15日"], ["德国", "科特迪瓦", "6月20日"], ["库拉索", "厄瓜多尔", "6月21日"], ["德国", "厄瓜多尔", "6月26日"], ["库拉索", "科特迪瓦", "6月26日"]],
  F: [["荷兰", "突尼斯", "6月15日"], ["日本", "瑞典", "6月16日"], ["荷兰", "日本", "6月21日"], ["突尼斯", "瑞典", "6月22日"], ["荷兰", "瑞典", "6月27日"], ["突尼斯", "日本", "6月27日"]],
  G: [["比利时", "新西兰", "6月15日"], ["伊朗", "埃及", "6月16日"], ["比利时", "伊朗", "6月21日"], ["新西兰", "埃及", "6月22日"], ["比利时", "埃及", "6月27日"], ["新西兰", "伊朗", "6月27日"]],
  H: [["西班牙", "佛得角", "6月16日"], ["沙特", "乌拉圭", "6月17日"], ["西班牙", "沙特", "6月21日"], ["佛得角", "乌拉圭", "6月21日"], ["西班牙", "乌拉圭", "6月26日"], ["佛得角", "沙特", "6月26日"]],
  I: [["法国", "塞内加尔", "6月16日"], ["伊拉克", "挪威", "6月16日"], ["法国", "伊拉克", "6月22日"], ["挪威", "塞内加尔", "6月22日"], ["挪威", "法国", "6月26日"], ["塞内加尔", "伊拉克", "6月26日"]],
  J: [["阿根廷", "阿尔及利亚", "6月16日"], ["奥地利", "约旦", "6月16日"], ["阿根廷", "奥地利", "6月22日"], ["约旦", "阿尔及利亚", "6月22日"], ["阿尔及利亚", "奥地利", "6月27日"], ["约旦", "阿根廷", "6月27日"]],
  K: [["葡萄牙", "民主刚果", "6月18日"], ["乌兹别克斯坦", "哥伦比亚", "6月18日"], ["葡萄牙", "乌兹别克斯坦", "6月23日"], ["哥伦比亚", "民主刚果", "6月23日"], ["葡萄牙", "哥伦比亚", "6月27日"], ["民主刚果", "乌兹别克斯坦", "6月27日"]],
  L: [["英格兰", "克罗地亚", "6月17日"], ["加纳", "巴拿马", "6月17日"], ["英格兰", "加纳", "6月23日"], ["巴拿马", "克罗地亚", "6月23日"], ["巴拿马", "英格兰", "6月27日"], ["克罗地亚", "加纳", "6月27日"]]
};

const dailyMatches = [
  match("2026-06-22", "argentina", "austria", "Group J", "10:00 PT", "北京时间 2026年6月23日 01:00", "达拉斯", {
    h2h: "近 5 次：阿根廷 2 胜 1 平 2 负",
    form: "阿根廷 W-W-W-D-W · 奥地利 W-D-W-L-W",
    ranking: "阿根廷 #1 · 奥地利 #25"
  }),
  match("2026-06-22", "france", "iraq", "Group I", "14:00 PT", "北京时间 2026年6月23日 05:00", "费城", {
    h2h: "暂无正式比赛交锋记录",
    form: "法国 W-W-D-W-L · 伊拉克 W-D-L-W-W",
    ranking: "法国 #2 · 伊拉克 #58"
  }),
  match("2026-06-22", "norway", "senegal", "Group I", "17:00 PT", "北京时间 2026年6月23日 08:00", "纽约/新泽西", {
    h2h: "近 5 次：挪威 2 胜 2 平 1 负",
    form: "挪威 W-W-D-L-W · 塞内加尔 W-D-W-L-D",
    ranking: "挪威 #44 · 塞内加尔 #17"
  }),
  match("2026-06-22", "jordan", "algeria", "Group J", "20:00 PT", "北京时间 2026年6月23日 11:00", "旧金山湾区", {
    h2h: "近 3 次：约旦 0 胜 1 平 2 负",
    form: "约旦 D-W-L-W-D · 阿尔及利亚 W-W-D-L-W",
    ranking: "约旦 #68 · 阿尔及利亚 #43"
  }),
  match("2026-06-23", "portugal", "uzbekistan", "Group K", "10:00 PT", "北京时间 2026年6月24日 01:00", "待定", {
    h2h: "暂无正式比赛交锋记录",
    form: "葡萄牙 W-W-L-W-D · 乌兹别克斯坦 W-D-W-W-L",
    ranking: "葡萄牙 #6 · 乌兹别克斯坦 #64"
  }),
  match("2026-06-23", "england", "ghana", "Group L", "13:00 PT", "北京时间 2026年6月24日 04:00", "待定", {
    h2h: "近 3 次：英格兰 2 胜 1 平 0 负",
    form: "英格兰 W-D-W-L-W · 加纳 W-D-L-W-W",
    ranking: "英格兰 #4 · 加纳 #60"
  }),
  match("2026-06-23", "panama", "croatia", "Group L", "16:00 PT", "北京时间 2026年6月24日 07:00", "待定", {
    h2h: "暂无正式比赛交锋记录",
    form: "巴拿马 W-L-W-D-L · 克罗地亚 W-W-D-L-W",
    ranking: "巴拿马 #45 · 克罗地亚 #10"
  }),
  match("2026-06-23", "colombia", "drCongo", "Group K", "19:00 PT", "北京时间 2026年6月24日 10:00", "待定", {
    h2h: "暂无正式比赛交锋记录",
    form: "哥伦比亚 W-W-D-W-L · 民主刚果 W-L-D-W-D",
    ranking: "哥伦比亚 #12 · 民主刚果 #61"
  }),
  match("2026-06-24", "mexico", "czechia", "Group A", "12:00", "北京时间 2026年6月25日 03:00", "待定", {
    h2h: "近 3 次：墨西哥 1 胜 1 平 1 负",
    form: "墨西哥 W-W-D-L-W · 捷克 D-W-L-W-D",
    ranking: "墨西哥 #14 · 捷克 #39"
  })
];

const rosterNames = {
  france: ["麦克·迈尼昂", "布里斯·桑巴", "阿尔方斯·阿雷奥拉", "儒勒·孔德", "威廉·萨利巴", "达约·乌帕梅卡诺", "易卜拉希马·科纳特", "特奥·埃尔南德斯", "费兰·门迪", "若纳唐·克洛斯", "爱德华多·卡马文加", "阿德里安·拉比奥", "恩戈洛·坎特", "沃伦·扎伊尔-埃梅里", "尤素夫·福法纳", "奥雷利安·楚阿梅尼", "安托万·格列兹曼", "基利安·姆巴佩", "奥斯曼·登贝莱", "马库斯·图拉姆", "兰德尔·科洛·穆阿尼", "奥利维耶·吉鲁", "布拉德利·巴尔科拉", "克里斯托弗·恩昆库", "金斯利·科曼", "穆阿尼"],
  argentina: ["埃米利亚诺·马丁内斯", "赫罗尼莫·鲁利", "弗朗哥·阿尔马尼", "纳韦尔·莫利纳", "克里斯蒂安·罗梅罗", "尼古拉斯·奥塔门迪", "利桑德罗·马丁内斯", "尼古拉斯·塔利亚菲科", "马科斯·阿库尼亚", "贡萨洛·蒙铁尔", "罗德里戈·德保罗", "恩佐·费尔南德斯", "亚历克西斯·麦卡利斯特", "莱安德罗·帕雷德斯", "埃塞基耶尔·帕拉西奥斯", "乔瓦尼·洛塞尔索", "利昂内尔·梅西", "安赫尔·迪马利亚", "劳塔罗·马丁内斯", "朱利安·阿尔瓦雷斯", "尼古拉斯·冈萨雷斯", "亚历杭德罗·加纳乔", "保罗·迪巴拉", "瓦伦丁·卡尔博尼", "卢卡斯·奥坎波斯", "蒂亚戈·阿尔马达"],
  norway: ["奥扬·尼兰德", "马蒂亚斯·迪恩格兰", "埃吉尔·塞尔维克", "克里斯托弗·阿耶尔", "利奥·奥斯蒂加德", "斯蒂安·格雷格森", "马库斯·彼得森", "戴维·沃尔夫", "尤利安·吕尔森", "帕特里克·伯格", "桑德·贝格", "莫滕·托斯比", "马丁·厄德高", "弗雷德里克·奥尔斯内斯", "奥斯卡·鲍勃", "安东尼奥·努萨", "延斯·豪格", "约尔根·拉森", "亚历山大·瑟洛特", "埃尔林·哈兰德", "奥拉·索尔巴肯", "克里斯蒂安·索尔斯韦特", "雨果·维特莱森", "阿伦·东努姆", "埃米尔·布雷维克", "马蒂亚斯·诺曼"],
  senegal: ["爱德华·门迪", "塞尼·迪昂", "莫里·迪奥", "卡利杜·库利巴利", "阿卜杜·迪亚洛", "伊斯梅拉·雅各布斯", "福尔莫斯·门迪", "穆萨·尼亚哈特", "帕普·马塔尔·萨尔", "南帕利斯·门迪", "伊德里萨·盖耶", "谢库·库亚特", "帕特·西斯", "克雷平·迪亚塔", "伊利曼·恩迪亚耶", "伊斯梅拉·萨尔", "萨迪奥·马内", "尼古拉斯·雅克松", "布莱耶·迪亚", "哈比卜·迪亚洛", "班巴·迪昂", "帕佩·盖耶", "拉明·卡马拉", "阿卜杜拉耶·塞克", "诺阿·法迪加", "谢赫·萨巴利"],
  austria: ["帕特里克·彭茨", "海因茨·林德纳", "尼克拉斯·赫德尔", "大卫·阿拉巴", "凯文·丹索", "菲利普·林哈特", "斯特凡·波施", "菲利普·姆韦内", "马克西米利安·沃贝尔", "尼古拉斯·塞瓦尔德", "康拉德·莱默尔", "马塞尔·萨比策", "克里斯托夫·鲍姆加特纳", "弗洛里安·格里利奇", "罗马诺·施密德", "亚历山大·普拉斯", "米夏埃尔·格雷戈里奇", "马尔科·阿瑙托维奇", "帕特里克·维默尔", "安德烈亚斯·魏曼", "萨沙·卡拉季奇", "马蒂亚斯·塞德尔", "弗洛里安·凯恩茨", "斯特凡·莱纳", "马蒂亚斯·斯维贝格", "尼古拉斯·魏曼"],
  algeria: ["安东尼·曼德雷亚", "穆斯塔法·泽格巴", "亚历山大·奥基贾", "拉米·本塞拜尼", "艾萨·曼迪", "优素福·阿塔尔", "凯文·范登凯尔克霍夫", "穆罕默德·阿明·图盖", "艾哈迈德·图巴", "伊斯梅尔·本纳塞尔", "拉米兹·泽鲁基", "纳比尔·本塔莱布", "哈里斯·贝尔克布拉", "胡萨姆·奥亚尔", "法雷斯·沙伊比", "里亚德·马赫雷斯", "赛义德·本拉赫马", "尤素夫·贝莱利", "伊斯兰·斯利马尼", "巴格达·布内贾", "阿明·古伊里", "穆罕默德·阿穆拉", "亚辛·布拉希米", "亚当·欧纳斯", "比拉尔·布拉希米", "穆罕默德·法雷斯"],
  iraq: ["贾拉勒·哈桑", "法哈德·塔利布", "艾哈迈德·巴西勒", "侯赛因·阿里", "雷宾·苏拉卡", "弗兰斯·普特罗斯", "穆斯塔法·纳齐姆", "阿里·阿德南", "扎伊德·塔赫辛", "阿米尔·阿马里", "易卜拉欣·巴耶什", "巴沙尔·雷桑", "萨阿德·纳蒂克", "阿米尔·阿卜杜勒贾巴尔", "齐丹·伊克巴尔", "阿里·贾西姆", "尤素夫·阿明", "侯赛因·阿里", "艾曼·侯赛因", "穆罕默德·达乌德", "穆罕纳德·阿里", "阿拉·阿巴斯", "马尔科·法尔吉", "阿里·哈马迪", "阿卡姆·哈希姆", "马赫迪·卡米尔"],
  jordan: ["亚齐德·阿布莱拉", "阿卜杜拉·法胡里", "努尔丁·巴尼阿提耶", "亚赞·阿拉布", "巴拉·马雷伊", "阿卜杜拉·纳西布", "伊赫桑·哈达德", "穆罕默德·阿布哈什什", "萨利姆·阿贾林", "努尔·拉瓦布德", "尼扎尔·拉什丹", "拉贾伊·阿耶德", "易卜拉欣·萨德赫", "穆罕默德·阿布泽里克", "马哈茂德·马尔迪", "穆萨·塔马里", "亚赞·奈马特", "阿里·奥尔万", "哈姆扎·达尔杜尔", "阿纳斯·巴尼亚辛", "艾哈迈德·萨米尔", "萨利赫·拉特布", "穆罕默德·阿布泰哈", "费拉斯·谢尔巴耶", "奥贝达·萨马里", "阿雷夫·哈吉"]
};

const rosterRoles = ["门将", "门将", "门将", "后卫", "后卫", "后卫", "后卫", "后卫", "后卫", "后卫", "中场", "中场", "中场", "中场", "中场", "中场", "中场", "前锋", "前锋", "前锋", "前锋", "前锋", "前锋", "前锋", "中场", "后卫"];

function team(id, cn, en, flag, coach, players) {
  return { id, cn, en, flag, coach, players };
}

function group(name, ids, rows) {
  return { name, rows: ids.map((id, index) => ({ id, stats: rows[index] })) };
}

function match(date, home, away, groupName, time, beijingTime, venue, data) {
  return { date, home, away, groupName, time, beijingTime, venue, data };
}

function flagUrl(teamId) {
  const code = teams[teamId].flag;
  return `https://flagcdn.com/w160/${code}.png`;
}

function avatarUrl(name, type = "player", number = "", teamId = "") {
  const color = teamColor(teamId);
  const label = type === "coach" ? "COACH" : String(number).padStart(2, "0");
  const subtitle = type === "coach" ? "教练" : "球员";
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
      <rect width="160" height="160" rx="80" fill="#edf3f6"/>
      <circle cx="80" cy="52" r="28" fill="#d6e2e5"/>
      <path d="M38 142c5-35 25-53 42-53s37 18 42 53" fill="#d6e2e5"/>
      <path d="M42 97h76l-10 52H52L42 97Z" fill="${color}"/>
      <path d="M58 97l22 19 22-19" fill="none" stroke="rgba(255,255,255,.72)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="80" y="132" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" font-weight="800" fill="#fff">${label}</text>
      <text x="80" y="153" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#4c5b64">${subtitle}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function teamColor(teamId) {
  const palette = {
    argentina: "#4aa3df",
    france: "#1d4f9a",
    senegal: "#0f8d57",
    norway: "#c51f32",
    iraq: "#cf2e2e",
    algeria: "#16865a",
    austria: "#d12f2f",
    jordan: "#1f7a50",
    brazil: "#169b62",
    germany: "#20242b",
    spain: "#d52b1e",
    england: "#2457a6",
    portugal: "#006f49",
    netherlands: "#f36c21",
    belgium: "#2b2b2b",
    usa: "#274c9b",
    mexico: "#11865b",
    japan: "#bc002d",
    southKorea: "#2457a6"
  };
  return palette[teamId] || "#0f795e";
}

function getRoster(t) {
  const names = rosterNames[t.id] || [
    ...t.players,
    ...Array.from({ length: 26 - t.players.length }, (_, index) => `${t.cn}队员 ${String(index + t.players.length + 1).padStart(2, "0")}`)
  ];
  const uniqueNames = [...new Set(names)];
  while (uniqueNames.length < 26) uniqueNames.push(`${t.cn}队员 ${String(uniqueNames.length + 1).padStart(2, "0")}`);
  return uniqueNames.slice(0, 26).map((name, index) => ({
    name,
    number: index + 1,
    role: rosterRoles[index] || "球员",
    teamId: t.id,
    featured: t.players.includes(name)
  }));
}

function beijingScheduleLabel(game, index) {
  const timeSlots = ["03:00", "06:00", "09:00", "12:00", "03:00", "06:00"];
  return `北京时间 2026年${game[2]} ${game[3] || timeSlots[index % timeSlots.length]}`;
}

function allDailyMatches() {
  const explicitKeys = new Set(dailyMatches.map((item) => `${item.date}:${item.home}:${item.away}`));
  const generated = Object.entries(schedules).flatMap(([groupName, games]) =>
    games
      .map((game, index) => scheduleGameToMatch(groupName, game, index))
      .filter((item) => item && !explicitKeys.has(`${item.date}:${item.home}:${item.away}`))
  );

  return [...dailyMatches, ...generated].sort((a, b) => `${a.date}-${a.time}`.localeCompare(`${b.date}-${b.time}`));
}

function scheduleGameToMatch(groupName, game, index) {
  const home = teamIdFromChineseName(game[0]);
  const away = teamIdFromChineseName(game[1]);
  if (!home || !away) return null;

  const localTimes = ["12:00", "15:00", "18:00", "21:00", "12:00", "15:00"];
  const beijingTimes = ["03:00", "06:00", "09:00", "12:00", "03:00", "06:00"];
  return match(
    chineseDateToIso(game[2]),
    home,
    away,
    `Group ${groupName}`,
    localTimes[index % localTimes.length],
    `北京时间 2026年${game[2]} ${game[3] || beijingTimes[index % beijingTimes.length]}`,
    "待定",
    defaultMatchData(home, away)
  );
}

function teamIdFromChineseName(name) {
  return Object.values(teams).find((teamItem) => teamItem.cn === name)?.id;
}

function teamIdFromAnyName(name) {
  if (!name) return "";
  if (teams[name]) return name;
  const normalized = String(name).trim().toLowerCase();
  return Object.values(teams).find((teamItem) =>
    [teamItem.id, teamItem.cn, teamItem.en].some((value) => String(value).trim().toLowerCase() === normalized)
  )?.id || "";
}

function chineseDateToIso(label) {
  const [, month, day] = label.match(/(\d+)月(\d+)日/) || [];
  return `2026-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function defaultMatchData(homeId, awayId) {
  const home = teams[homeId];
  const away = teams[awayId];
  return {
    h2h: "暂无完整交锋数据",
    form: `${home.cn} 待更新 · ${away.cn} 待更新`,
    ranking: `${home.cn} 待更新 · ${away.cn} 待更新`
  };
}

async function loadLiveStandings() {
  try {
    const response = await fetch(`./data/standings.json?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("No standings feed");
    const payload = await response.json();
    applyStandingsPayload(payload);
  } catch (error) {
    standingsSource = {
      updatedAt: "",
      isLive: false,
      message: "实时积分待接入"
    };
  }
}

function applyStandingsPayload(payload) {
  if (!payload?.groups?.length) return;

  payload.groups.forEach((sourceGroup) => {
    const groupData = groups.find((item) => item.name === sourceGroup.name);
    if (!groupData) return;

    const rows = sourceGroup.rows
      .map((sourceRow) => {
        const teamId = teamIdFromAnyName(sourceRow.id || sourceRow.team || sourceRow.name);
        if (!teamId) return null;
        return {
          id: teamId,
          stats: [
            Number(sourceRow.played || 0),
            Number(sourceRow.won || 0),
            Number(sourceRow.drawn || 0),
            Number(sourceRow.lost || 0),
            Number(sourceRow.gf || 0),
            Number(sourceRow.ga || 0),
            Number(sourceRow.points || 0)
          ]
        };
      })
      .filter(Boolean);

    if (rows.length) groupData.rows = rows;
  });

  standingsSource = {
    updatedAt: payload.updatedAt || "",
    isLive: true,
    message: payload.source || "实时积分"
  };
}

function renderGroups() {
  const groupsEl = document.querySelector("#groups");
  if (!groupsEl) return;
  groupsEl.innerHTML = groups.map(renderGroup).join("");

  const meta = document.querySelector("#standingsMeta");
  if (meta) {
    const label = standingsSource.isLive ? "实时积分" : standingsSource.message;
    const time = standingsSource.updatedAt ? ` · 更新于 ${formatDateTime(standingsSource.updatedAt)}` : "";
    meta.textContent = `${label}${time}`;
  }
}

function renderGroup(groupData) {
  const rows = groupData.rows
    .map((row, index) => {
      const t = teams[row.id];
      const [played, won, drawn, lost, gf, ga, pts] = row.stats;
      const gd = gf - ga;
      const status = index < 2 ? "auto" : index === 2 ? "third" : "";
      const values = standingsSource.isLive
        ? [played, won, drawn, lost, `${gd > 0 ? "+" : ""}${gd}`, pts]
        : ["-", "-", "-", "-", "-", "-"];
      return `
        <tr class="${status}">
          <td class="pos"></td>
          <td>
            <div class="team-cell">
              <button class="flag-button" data-team="${t.id}" aria-label="查看${t.cn}详情">
                <img src="${flagUrl(t.id)}" alt="${t.cn}国旗" loading="lazy">
              </button>
              <span class="team-name">${t.cn}</span>
            </div>
          </td>
          <td>${values[0]}</td>
          <td>${values[1]}</td>
          <td>${values[2]}</td>
          <td>${values[3]}</td>
          <td>${values[4]}</td>
          <td class="points">${values[5]}</td>
        </tr>
      `;
    })
    .join("");

  return `
    <article class="group-card">
      <div class="group-header">
        <h3>${groupData.name} 组</h3>
        <span>前 2 直接晋级</span>
      </div>
      <table class="standings">
        <thead>
          <tr>
            <th></th><th>球队</th><th>赛</th><th>胜</th><th>平</th><th>负</th><th>净</th><th>分</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </article>
  `;
}

let activeMatches = [];

function todayKey() {
  const override = new URLSearchParams(location.search).get("date");
  if (override) return override;
  const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(tomorrow);
}

function getDailyMatches() {
  const key = todayKey();
  const records = allDailyMatches();
  const matches = records.filter((item) => beijingDateKey(item) === key);
  if (matches.length) return { key, matches, isFallback: false };

  const next = records.find((item) => beijingDateKey(item) > key) || records[0];
  const nextKey = beijingDateKey(next);
  return {
    key: nextKey,
    matches: records.filter((item) => beijingDateKey(item) === nextKey),
    isFallback: true
  };
}

function beijingDateKey(matchItem) {
  const match = matchItem.beijingTime.match(/2026年(\d+)月(\d+)日/);
  if (!match) return matchItem.date;
  return `2026-${String(match[1]).padStart(2, "0")}-${String(match[2]).padStart(2, "0")}`;
}

function renderTabs(activeIndex = 0) {
  const daily = getDailyMatches();
  activeMatches = daily.matches;
  updateMatchTitle(daily);

  const tabs = activeMatches
    .map((m, index) => {
      const home = teams[m.home];
      const away = teams[m.away];
      return `
        <button class="match-tab" role="tab" aria-selected="${index === activeIndex}" data-match="${index}">
          <div class="tab-teams">
            <span class="mini-flag"><img src="${flagUrl(home.id)}" alt=""></span>
            <span>${home.cn}</span>
            <span>vs</span>
            <span class="mini-flag"><img src="${flagUrl(away.id)}" alt=""></span>
            <span>${away.cn}</span>
          </div>
          <div class="tab-meta">${m.groupName} · ${m.beijingTime}</div>
        </button>
      `;
    })
    .join("");

  document.querySelector("#matchTabs").innerHTML = tabs;
  renderMatch(activeIndex);
}

function updateMatchTitle(daily) {
  const title = document.querySelector(".matches-title h2");
  if (!title) return;
  title.textContent = daily.isFallback ? `${formatDateLabel(daily.key)} 对阵` : "明日对阵与数据";
}

function formatDateLabel(dateText) {
  const [, month, day] = dateText.split("-");
  return `${Number(month)}月${Number(day)}日`;
}

function formatDateTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function renderMatch(index) {
  const m = activeMatches[index];
  if (!m) {
    document.querySelector("#matchPanel").innerHTML = `<div class="empty-state">今日暂无比赛。</div>`;
    return;
  }
  const home = teams[m.home];
  const away = teams[m.away];
  document.querySelector("#matchPanel").innerHTML = `
    <div class="match-feature">
      <div>
        <div class="versus">
          ${renderVersusTeam(home)}
          <div class="vs-mark">VS</div>
          ${renderVersusTeam(away)}
        </div>
        <div class="data-grid">
          <div class="data-box"><span>历史交锋</span><strong>${m.data.h2h}</strong></div>
          <div class="data-box"><span>近 5 场战绩</span><strong>${m.data.form}</strong></div>
          <div class="data-box"><span>FIFA 排名</span><strong>${m.data.ranking}</strong></div>
        </div>
      </div>
      <aside class="match-info">
        <div class="info-row"><span>小组</span><strong>${m.groupName}</strong></div>
        <div class="info-row"><span>北京时间</span><strong>${m.beijingTime}</strong></div>
        <div class="info-row"><span>当地开球</span><strong>${m.time}</strong></div>
        <div class="info-row"><span>地点</span><strong>${m.venue}</strong></div>
      </aside>
    </div>
  `;
}

function renderVersusTeam(t) {
  return `
    <div class="versus-team">
      <button class="flag-button detail-flag" data-team="${t.id}" aria-label="查看${t.cn}详情">
        <img src="${flagUrl(t.id)}" alt="${t.cn}国旗">
      </button>
      <strong>${t.cn}</strong>
      <a class="detail-link" href="#team-${t.id}">球队详情</a>
    </div>
  `;
}

function openTeam(teamId) {
  const t = teams[teamId];
  if (!t) return;

  const groupData = groups.find((g) => g.rows.some((row) => row.id === teamId));
  const groupName = groupData.name;
  const teamSchedule = schedules[groupName]
    .map((game, index) => ({ game, index }))
    .filter(({ game }) => game[0] === t.cn || game[1] === t.cn);
  const roster = getRoster(t);
  document.querySelector("#teamDetail").innerHTML = `
    <div class="team-hero">
      <span class="detail-flag"><img src="${flagUrl(t.id)}" alt="${t.cn}国旗"></span>
      <div>
        <p>${groupName} 组 · ${t.en}</p>
        <h2 id="teamName">${t.cn}</h2>
        <p>主教练：${t.coach}</p>
      </div>
    </div>
    <div class="detail-grid">
      <section class="detail-block">
        <h3>教练组</h3>
        <div class="coach-card">
          <img src="${avatarUrl(t.coach, "coach", "", t.id)}" alt="${t.coach}头像">
          <div>
            <strong>${t.coach}</strong>
            <span>主教练</span>
          </div>
        </div>
      </section>
      <section class="detail-block">
        <h3>小组赛程</h3>
        <ul class="schedule-list">
          ${teamSchedule
            .map(({ game, index }) => `<li><strong>${game[0]} vs ${game[1]}</strong><span>${beijingScheduleLabel(game, index)}</span></li>`)
            .join("")}
        </ul>
      </section>
    </div>
    <section class="detail-block roster-block">
      <div class="roster-title">
        <h3>球员大名单</h3>
        <span>${roster.length} 人</span>
      </div>
      <div class="player-grid">
        ${roster.map(renderPlayerCard).join("")}
      </div>
    </section>
  `;

  document.querySelector("#teamOverlay").classList.add("is-open");
  document.querySelector("#teamOverlay").setAttribute("aria-hidden", "false");
  if (location.hash !== `#team-${teamId}`) location.hash = `team-${teamId}`;
}

function renderPlayerCard(player) {
  return `
    <article class="player-card ${player.featured ? "is-featured" : ""}">
      <img src="${avatarUrl(player.name, "player", player.number, player.teamId)}" alt="${player.name}球衣头像" loading="lazy">
      <div>
        <strong>${player.name}</strong>
        <span>${String(player.number).padStart(2, "0")} · ${player.role}${player.featured ? " · 核心" : ""}</span>
      </div>
    </article>
  `;
}

function initTakeBox() {
  const display = document.querySelector("#takeDisplay");
  const saved = localStorage.getItem("worldcup-match-take") || "";
  renderTakeDisplay(saved);

  function renderTakeDisplay(value) {
    display.textContent = value.trim() || "暂无观点。";
    display.classList.toggle("is-empty", !value.trim());
  }
}

function closeTeam() {
  document.querySelector("#teamOverlay").classList.remove("is-open");
  document.querySelector("#teamOverlay").setAttribute("aria-hidden", "true");
  if (location.hash.startsWith("#team-")) history.pushState("", document.title, location.pathname + location.search);
}

document.addEventListener("click", (event) => {
  const teamButton = event.target.closest("[data-team]");
  if (teamButton) {
    event.preventDefault();
    openTeam(teamButton.dataset.team);
    return;
  }

  const tab = event.target.closest("[data-match]");
  if (tab) {
    const index = Number(tab.dataset.match);
    document.querySelectorAll(".match-tab").forEach((button, buttonIndex) => {
      button.setAttribute("aria-selected", String(buttonIndex === index));
    });
    renderMatch(index);
  }
});

document.querySelector("#closeTeam").addEventListener("click", closeTeam);
document.querySelector("#teamOverlay").addEventListener("click", (event) => {
  if (event.target.id === "teamOverlay") closeTeam();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeTeam();
});
window.addEventListener("hashchange", () => {
  const teamId = location.hash.replace("#team-", "");
  if (teams[teamId]) openTeam(teamId);
});

renderTabs();
initTakeBox();
loadLiveStandings().finally(renderGroups);

const initialTeam = location.hash.replace("#team-", "");
if (teams[initialTeam]) openTeam(initialTeam);
