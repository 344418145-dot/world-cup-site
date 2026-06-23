const teams = {
  mexico: team("mexico", "澧ㄨタ��", "Mexico", "mx", "�缁村�路�垮��", ["��灏��峰ゥ涔浜", "�寰锋韭烽垮��﹂锋�", "�ｅ颁��ヂ峰��ㄥ凹��"]),
  southAfrica: team("southAfrica", "��", "South Africa", "za", "�ㄦ路甯缃��", ["缃�╂路濞寤濮��", "�瑰�路����绾�", "�ü瑗柯烽�"]),
  southKorea: team("southKorea", "�╁�", "South Korea", "kr", "娲���", ["瀛�存", "���", "��浠"]),
  czechia: team("czechia", "�峰", "Czechia", "cz", "浼涓路�璋㈠", ["�椹��ü路缁��", "甯�归�路甯�", "浜褰路璧����"]),
  canada: team("canada", "� �垮ぇ", "Canada", "ca", "�拌タ路椹��ü", ["�挎圭储路�寸淮��", "涔绾虫．路�寸淮", "濉�悸峰���"]),
  qatar: team("qatar", "�″�灏", "Qatar", "qa", "娲浣╂�", ["�垮�濮路�胯插か", "�垮����孤烽块", "浣╁痉缃路绫虫 煎�"]),
  switzerland: team("switzerland", "�澹�", "Switzerland", "ch", "绌��孤烽�", ["� 兼灏肩孤锋��", "�煎�灏路�垮�", "甯�峰�路�╁娲"]),
  bosnia: team("bosnia", "娉㈤�", "Bosnia and Herzegovina", "ba", "璋㈠��路宸村反�疯�", ["�涓路�茬�", "�寰仿峰椴灏煎�", "�垮灏路�惧杩寰烽瀛ｅ�"]),
  brazil: team("brazil", "宸磋タ", "Brazil", "br", "�℃�路瀹�娲�", ["缁村凹淇��", "缃寰烽�", "甯椴璇郝峰椹���"]),
  morocco: team("morocco", "�╂���", "Morocco", "ma", "�﹀╁痉路�锋 兼�", ["�夸�ü�澶�峰�虹背", "绱㈣插�路�垮��宸寸�", "浼绱 绂路�╁��"]),
  scotland: team("scotland", "�� 煎�", "Scotland", "gb-sct", "�茶澶�峰��", ["瀹杩�风�浼�ü", "绾︾堪路楹﹂", "����孤烽害��绫冲�"]),
  haiti: team("haiti", "娴峰�", "Haiti", "ht", "濉宸存�瀹路绫虫�", ["����风撼瀹", "璁�-��＄撼路璐灏� 寰�", "绾︾堪灏悸锋�瑗垮痉"]),
  usa: team("usa", "缇��", "United States", "us", "姣�瑗垮ゥ路娉㈠�璇�", ["����瀹路��╄タ濂", "娉板路浜褰��", "�︽�】路楹﹁�凹"]),
  turkey: team("turkey", "��ü冲�", "Turkiye", "tr", "��翠�路��规", ["��路�板�姹濂ュ�", "�垮�杈韭峰��卞�", "��路浼灏杩��"]),
  paraguay: team("paraguay", "宸存��", "Paraguay", "py", "�ゆ��娌路�垮�娉缃", ["绫虫 煎�路�垮�绫抽", "�ゆ��娌路�楹︽�", "�″╁ゥ路�╄タ绱�"]),
  australia: team("australia", "婢冲ぇ�╀�", "Australia", "au", "�灏悸锋尝娉㈢淮濂", ["椹�慨路�瀹", "�板�ü路娆ф", "��锋 悸峰ゅ痉娓�"]),
  germany: team("germany", "寰峰�", "Germany", "de", "灏ゅ╁�路绾虫 煎����", ["绾︿功浜路�虹背甯", "璐鹃┈灏路绌瑗夸��", "寮娲�瀹路缁村���"]),
  ivoryCoast: team("ivoryCoast", "绉�硅开��", "Cote d'Ivoire", "ci", "�姊灏��锋��", ["濉宸存�瀹路�胯�", "寮�板路��タ", "瑗胯路�夸�� 兼"]),
  curacao: team("curacao", "搴�绱�", "Curacao", "cw", "杩�路�垮痉娌�＄�", ["�卞�寰风�路宸村�绾�", "瀹孤峰挨��环", "�卞凹灏煎ゥ路宸村�绾�"]),
  ecuador: team("ecuador", "��澶灏", "Ecuador", "ec", "濉宸存�瀹路璐�″�濉", ["���濉��峰��澶", "��ü剁�路� �＄�ü�", "�╃撼路�︿鸡瑗夸�"]),
  netherlands: team("netherlands", "�峰�", "Netherlands", "nl", "缃绾冲痉路绉��", ["缁村灏路��村", "寮�板郝峰痉瀹�", "绉杩�峰 �娉�"]),
  japan: team("japan", "�ユ�", "Japan", "jp", "妫��涓ü", ["涓绗��", "涔淇寤鸿�", "杩�よ�"]),
  tunisia: team("tunisia", "绐灏兼�", "Tunisia", "tn", "�ㄧ背路�规璐灏瑗�", ["��╄ü舵�锋���", "�﹁但姣路��归", "�濉�ㄥ�路濉灏姣"]),
  sweden: team("sweden", "���", "Sweden", "se", "涔�┞疯揪灏路�椹�．", ["浜�灞卞ぇ路浼�ㄥ", "寰锋�峰��㈠�澶���", "缁村�路�寰锋�澶�"]),
  belgium: team("belgium", "姣�╂�", "Belgium", "be", "椴杩�峰 瑗夸�", ["��路寰峰��冲", "缃姊�⒙峰㈠″�", "�伴绫陈峰�搴"]),
  iran: team("iran", "浼�", "Iran", "ir", "�跨背灏路� �辫�浼", ["杩璧�开路濉�风背", "�ㄨ揪灏路�垮硅", "�块�锋路璐炬�宸磋但浠ü"]),
  newZealand: team("newZealand", "�拌タ��", "New Zealand", "nz", "杈句鸡路宸村瑰�", ["����蜂�寰�", "�ㄦ��孤疯�� �", "涔路璐灏"]),
  egypt: team("egypt", "��", "Egypt", "eg", "��ㄥ�路�妗", ["绌缃榛寰仿疯ㄦ璧�", "濂ラ┈灏路椹��绌浠ü", "绌缃榛寰仿峰灏�灏�"]),
  spain: team("spain", "瑗跨�", "Spain", "es", "璺���峰痉�瀵�╃�", ["缃寰烽", "浣╁痉�", "��路浜椹��"]),
  capeVerde: team("capeVerde", "浣寰瑙", "Cape Verde", "cv", "浣╁痉缃路甯��", ["璐璐", "�瀹路�ㄥ痉��", "娲�路绉���"]),
  saudiArabia: team("saudiArabia", "娌��", "Saudi Arabia", "sa", "缃浼�路�煎�灏�", ["�ㄥ╁�路澶�ㄩ", "�叉��峰�璧�", "绌缃榛寰仿峰ゥ�︽�"]),
  uruguay: team("uruguay", "涔���", "Uruguay", "uy", "椹��娲路璐灏��", ["璐瑰痉�绉路宸村��﹀痉", "杈惧��路�����", "缃绾冲痉路�垮抽"]),
  france: team("france", "娉��", "France", "fr", "杩�开�路寰峰�", ["�哄╁�路濮宸翠僵", "瀹�涓路� 煎�规�", "濂ラ峰╁�路妤�挎�灏�"]),
  senegal: team("senegal", "濉�� 灏", "Senegal", "sn", "甯��疯浜涔", ["�ㄨ开濂ヂ烽┈�", "�″╂路搴�╁反��", "灏煎ゆ��烽���"]),
  norway: team("norway", "���", "Norway", "no", "���路绱㈠�宸磋�", ["�灏�路��板痉", "椹��路�寰烽�", "浜�灞卞ぇ路�娲��"]),
  iraq: team("iraq", "浼��", "Iraq", "iq", "璧���峰¤ㄦ�", ["�炬悸蜂警璧� ", "�块路璐捐タ濮", "���娆Ｂ峰反�ü朵�ü"]),
  argentina: team("argentina", "�挎 瑰环", "Argentina", "ar", "�╂�灏路��℃�灏�", ["�╂�灏路姊瑗�", "�冲�缃路椹�����", "�╀�路璐瑰��寰锋�"]),
  algeria: team("algeria", "�垮���╀�", "Algeria", "dz", "寮��虹背灏路浣╃圭�缁村�", ["�浜寰仿烽┈璧�锋�", "浼���灏路��撼濉灏", "�绫陈锋���灏�"]),
  austria: team("austria", "濂ュ板�", "Austria", "at", "�灏澶�锋灏煎", ["澶у�烽挎宸�", "椹��灏路�ㄦ�绛", "����澶�烽�濮� �圭撼"]),
  jordan: team("jordan", "绾︽�", "Jordan", "jo", "璐捐��路濉�绫�", ["绌��峰�椹�", "浜璧路濂椹��", "���路��﹀�寰�"]),
  portugal: team("portugal", "�¤�", "Portugal", "pt", "缃浼�路椹�����", ["����浜璇郝风�绾冲�澶", "甯椴璇郝疯垂灏�寰锋�", "璐灏绾冲�路甯����"]),
  drCongo: team("drCongo", "姘涓诲�", "DR Congo", "cd", "濉宸存�瀹路寰疯ㄥ�灏", ["绾﹀�路缁磋�", "濉寰烽�路宸村甯", "灏濉灏路濮��反"]),
  uzbekistan: team("uzbekistan", "涔�瑰����", "Uzbekistan", "uz", "��峰�绉路�″����", ["�灏澶灏路�绌缃澶澶�", "�垮���路娉浼绁��ü跺か", "�垮�绉杩��路�¤ㄨ�澶�"]),
  colombia: team("colombia", "�ヤ鸡姣浜", "Colombia", "co", "���灏路娲浼︾储", ["璺���疯开浜��", "�姊��风�寰烽� 兼�", "�版�ü路�卞�椹�"]),
  england: team("england", "�辨 煎�", "England", "gb-eng", "�椹��峰捐但灏", ["��路���", "瑁寰仿疯���濮", "甯�＄害路�ㄥ�"]),
  croatia: team("croatia", "�缃�颁�", "Croatia", "hr", "�规�圭�路杈惧╁�", ["�㈠÷疯�痉�濂", "椹�瑰ゥ路绉�﹀�濂", "绾︿�ü绉路� 肩﹁开濂ュ�"]),
  ghana: team("ghana", "� 绾�", "Ghana", "gh", "濂ユ路�垮�", ["绌缃榛寰仿峰����", "�椹��峰�灏�逛�", "涔涓孤烽垮挨"]),
  panama: team("panama", "宸存块┈", "Panama", "pa", "�椹��峰���瀹妫�", ["�垮凹宸村�路�澶浼", "浣濉路娉�澶", "杩�灏路绌���"])
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
  message: "瀹�剁Н�寰�ュ�"
};

const schedules = {
  A: [["澧ㄨタ��", "��", "6�11��"], ["�╁�", "�峰", "6�12��"], ["澧ㄨタ��", "�╁�", "6�18��"], ["��", "�峰", "6�19��"], ["澧ㄨタ��", "�峰", "6�24��"], ["��", "�╁�", "6�24��"]],
  B: [["� �垮ぇ", "�″�灏", "6�12��"], ["�澹�", "娉㈤�", "6�13��"], ["� �垮ぇ", "�澹�", "6�18��"], ["�″�灏", "娉㈤�", "6�19��"], ["� �垮ぇ", "娉㈤�", "6�24��"], ["�″�灏", "�澹�", "6�24��"]],
  C: [["宸磋タ", "娴峰�", "6�13��"], ["�╂���", "�� 煎�", "6�14��"], ["宸磋タ", "�╂���", "6�19��"], ["娴峰�", "�� 煎�", "6�20��"], ["宸磋タ", "�� 煎�", "6�25��"], ["娴峰�", "�╂���", "6�25��"]],
  D: [["缇��", "婢冲ぇ�╀�", "6�13��"], ["��ü冲�", "宸存��", "6�14��"], ["缇��", "��ü冲�", "6�19��"], ["婢冲ぇ�╀�", "宸存��", "6�20��"], ["缇��", "宸存��", "6�25��"], ["婢冲ぇ�╀�", "��ü冲�", "6�25��"]],
  E: [["寰峰�", "搴�绱�", "6�14��"], ["绉�硅开��", "��澶灏", "6�15��"], ["寰峰�", "绉�硅开��", "6�20��"], ["搴�绱�", "��澶灏", "6�21��"], ["寰峰�", "��澶灏", "6�26��"], ["搴�绱�", "绉�硅开��", "6�26��"]],
  F: [["�峰�", "绐灏兼�", "6�15��"], ["�ユ�", "���", "6�16��"], ["�峰�", "�ユ�", "6�21��"], ["绐灏兼�", "���", "6�22��"], ["�峰�", "���", "6�27��"], ["绐灏兼�", "�ユ�", "6�27��"]],
  G: [["姣�╂�", "�拌タ��", "6�15��"], ["浼�", "��", "6�16��"], ["姣�╂�", "浼�", "6�21��"], ["�拌タ��", "��", "6�22��"], ["姣�╂�", "��", "6�27��"], ["�拌タ��", "浼�", "6�27��"]],
  H: [["瑗跨�", "浣寰瑙", "6�16��"], ["娌��", "涔���", "6�17��"], ["瑗跨�", "娌��", "6�21��"], ["浣寰瑙", "涔���", "6�21��"], ["瑗跨�", "涔���", "6�26��"], ["浣寰瑙", "娌��", "6�26��"]],
  I: [["娉��", "濉�� 灏", "6�16��"], ["浼��", "���", "6�16��"], ["娉��", "浼��", "6�22��"], ["���", "濉�� 灏", "6�22��"], ["���", "娉��", "6�26��"], ["濉�� 灏", "浼��", "6�26��"]],
  J: [["�挎 瑰环", "�垮���╀�", "6�16��"], ["濂ュ板�", "绾︽�", "6�16��"], ["�挎 瑰环", "濂ュ板�", "6�22��"], ["绾︽�", "�垮���╀�", "6�22��"], ["�垮���╀�", "濂ュ板�", "6�27��"], ["绾︽�", "�挎 瑰环", "6�27��"]],
  K: [["�¤�", "姘涓诲�", "6�18��"], ["涔�瑰����", "�ヤ鸡姣浜", "6�18��"], ["�¤�", "涔�瑰����", "6�23��"], ["�ヤ鸡姣浜", "姘涓诲�", "6�23��"], ["�¤�", "�ヤ鸡姣浜", "6�27��"], ["姘涓诲�", "涔�瑰����", "6�27��"]],
  L: [["�辨 煎�", "�缃�颁�", "6�17��"], ["� 绾�", "宸存块┈", "6�17��"], ["�辨 煎�", "� 绾�", "6�23��"], ["宸存块┈", "�缃�颁�", "6�23��"], ["宸存块┈", "�辨 煎�", "6�27��"], ["�缃�颁�", "� 绾�", "6�27��"]]
};

const dailyMatches = [
  match("2026-06-22", "argentina", "austria", "Group J", "10:00 PT", "�浜�堕� 2026骞�6�23�� 01:00", "杈炬��", {
    h2h: "杩 5 娆★��挎 瑰环 2 � 1 骞� 2 璐",
    form: "�挎 瑰环 W-W-W-D-W 路 濂ュ板� W-D-W-L-W",
    ranking: "�挎 瑰环 #1 路 濂ュ板� #25"
  }),
  match("2026-06-22", "france", "iraq", "Group I", "14:00 PT", "�浜�堕� 2026骞�6�23�� 05:00", "璐瑰", {
    h2h: "�� 姝ｅ�姣璧浜ら璁板�",
    form: "娉�� W-W-D-W-L 路 浼�� W-D-L-W-W",
    ranking: "娉�� #2 路 浼�� #58"
  }),
  match("2026-06-22", "norway", "senegal", "Group I", "17:00 PT", "�浜�堕� 2026骞�6�23�� 08:00", "绾界害/�版辰瑗�", {
    h2h: "杩 5 娆★���� 2 � 2 骞� 1 璐",
    form: "��� W-W-D-L-W 路 濉�� 灏 W-D-W-L-D",
    ranking: "��� #44 路 濉�� 灏 #17"
  }),
  match("2026-06-22", "jordan", "algeria", "Group J", "20:00 PT", "�浜�堕� 2026骞�6�23�� 11:00", "�ч灞辨咕��", {
    h2h: "杩 3 娆★�绾︽� 0 � 1 骞� 2 璐",
    form: "绾︽� D-W-L-W-D 路 �垮���╀� W-W-D-L-W",
    ranking: "绾︽� #68 路 �垮���╀� #43"
  }),
  match("2026-06-23", "portugal", "uzbekistan", "Group K", "10:00 PT", "�浜�堕� 2026骞�6�24�� 01:00", "寰瀹", {
    h2h: "�� 姝ｅ�姣璧浜ら璁板�",
    form: "�¤� W-W-L-W-D 路 涔�瑰���� W-D-W-W-L",
    ranking: "�¤� #6 路 涔�瑰���� #64"
  }),
  match("2026-06-23", "england", "ghana", "Group L", "13:00 PT", "�浜�堕� 2026骞�6�24�� 04:00", "寰瀹", {
    h2h: "杩 3 娆★��辨 煎� 2 � 1 骞� 0 璐",
    form: "�辨 煎� W-D-W-L-W 路 � 绾� W-D-L-W-W",
    ranking: "�辨 煎� #4 路 � 绾� #60"
  }),
  match("2026-06-23", "panama", "croatia", "Group L", "16:00 PT", "�浜�堕� 2026骞�6�24�� 07:00", "寰瀹", {
    h2h: "�� 姝ｅ�姣璧浜ら璁板�",
    form: "宸存块┈ W-L-W-D-L 路 �缃�颁� W-W-D-L-W",
    ranking: "宸存块┈ #45 路 �缃�颁� #10"
  }),
  match("2026-06-23", "colombia", "drCongo", "Group K", "19:00 PT", "�浜�堕� 2026骞�6�24�� 10:00", "寰瀹", {
    h2h: "�� 姝ｅ�姣璧浜ら璁板�",
    form: "�ヤ鸡姣浜 W-W-D-W-L 路 姘涓诲� W-L-D-W-D",
    ranking: "�ヤ鸡姣浜 #12 路 姘涓诲� #61"
  }),
  match("2026-06-24", "mexico", "czechia", "Group A", "12:00", "�浜�堕� 2026骞�6�25�� 03:00", "寰瀹", {
    h2h: "杩 3 娆★�澧ㄨタ�� 1 � 1 骞� 1 璐",
    form: "澧ㄨタ�� W-W-D-L-W 路 �峰 D-W-L-W-D",
    ranking: "澧ㄨタ�� #14 路 �峰 #39"
  })
];

const rosterNames = {
  france: ["楹﹀路杩灏兼", "甯���锋�宸�", "�垮��规�烽块峰ゥ�", "��路瀛寰�", "濞寤路�ㄥ╁反", "杈剧害路涔甯姊�¤�", "���甯椹�风�绾崇�", "�瑰ゥ路�灏�寰锋�", "璐瑰奥烽ㄨ开", "�ョ撼�路�娲��", "�卞痉�澶路�¢┈�� ", "�垮痉�瀹路�姣濂�", "�╂娲路���", "娌浼β锋浼灏-�姊�", "灏ょ� 澶�风�娉绾�", "濂ラ峰╁�路妤�挎�灏�", "瀹�涓路� 煎�规�", "�哄╁�路濮宸翠僵", "濂ユ�悸风昏���", "椹����峰炬濮", "�板痉灏路绉娲路绌�垮凹", "濂ュ╃淮�ü堵峰椴", "甯�寰峰┞峰反灏绉�", "����寮路�╂搴", "���┞风���", "绌�垮凹"],
  argentina: ["�绫冲╀�璇郝烽┈涓���", "璧��灏艰�烽���", "寮��ヂ烽垮�椹�凹", "绾抽﹀�路��╃撼", "����瀹路缃姊缃", "灏煎ゆ��峰ゥ濉�ㄨ开", "�╂�寰风�路椹�����", "灏煎ゆ��峰��╀��茬�", "椹����烽垮�灏间�", "璐¤ㄦ�路��灏", "缃寰烽�路寰蜂�缃", "�╀�路璐瑰��寰锋�", "浜��瑗挎�烽害�″╂��", "�卞�寰风�路甯�峰痉��", "�濉�鸿ü跺�路甯�瑗垮ゥ��", "涔�﹀凹路娲濉灏绱�", "�╂�灏路姊瑗�", "瀹璧��路杩�┈�╀�", "�冲�缃路椹�����", "�卞╁�路�垮��﹂锋�", "灏煎ゆ��峰�ㄩ锋�", "浜���痉缃路� 绾充�", "淇缃路杩�反�", "�︿鸡涓路�″��灏�", "�㈠℃�峰ゥ�娉㈡�", "�浜�路�垮�椹�揪"],
  norway: ["濂ユ�峰凹�板痉", "椹�浜��疯开�╂ 煎�", "��灏路濉灏缁村", "����寮路�胯ü跺�", "�╁ゥ路濂ユ�� 寰�", "��瀹路� 奸锋 兼．", "椹����峰郊寰妫�", "�寸淮路娌灏澶�", "灏ゅ╁�路�灏妫�", "甯�归�路浼� �", "妗寰仿疯�� �", "���路����", "椹��路�寰烽�", "寮�峰痉��路濂ュ�����", "濂ユ�÷烽��", "瀹涓灏煎ゥ路���", "寤舵�疯豹� �", "绾﹀�� 孤锋妫�", "浜�灞卞ぇ路�娲��", "�灏�路��板痉", "濂ユ路绱㈠�宸磋�", "����瀹路绱㈠���︾�", "�ㄦ路缁寸硅辨．", "�夸鸡路涓���", "�绫冲�路甯�风淮�", "椹�浜��疯���"],
  senegal: ["�卞痉�路�ㄨ开", "濉灏悸疯开�", "��路杩�ゥ", "�″╂路搴�╁反��", "�垮�路杩��娲", "浼����路��甯��", "绂灏���烽ㄨ开", "绌��峰凹浜���", "甯��烽┈濉灏路�ㄥ�", "�甯�╂�烽ㄨ开", "浼寰烽��风�ü�", "璋㈠�路搴浜��", "甯�孤疯タ��", "��峰钩路杩��濉", "浼�╂悸锋╄开浜�ü�", "浼����路�ㄥ�", "�ㄨ开濂ヂ烽┈�", "灏煎ゆ��烽���", "甯�辫ü堵疯开浜", "�姣�路杩��娲", "��反路杩�", "甯浣┞风�ü�", "��路�¢┈�", "�垮���ü堵峰��", "璇洪柯锋�杩� ", "璋㈣但路�ㄥ反��"],
  austria: ["甯�归�路褰��", "娴峰 ��锋寰风撼", "灏煎���疯但寰峰�", "澶у�烽挎宸�", "��路涓圭储", "�插╂�锋���", "��瑰÷锋尝��", "�插╂�峰��﹀", "椹�瑗跨背�╁�路娌璐灏", "灏煎ゆ��峰��﹀�寰�", "搴锋寰仿疯遍�灏", "椹��灏路�ㄦ�绛", "����澶�烽�濮� �圭撼", "寮娲�瀹路� 奸�╁�", "缃椹��路�藉�寰�", "浜�灞卞ぇ路����", "绫冲��灏路� 奸锋�濂", "椹��绉路�跨�缁村�", "甯�归�路缁撮�灏", "瀹寰风浜��烽���", "�ㄦ�路�℃瀛ｅ�", "椹�浜��峰�寰峰�", "寮娲�瀹路��╄�", "��瑰÷疯辩撼", "椹�浜��锋�淮璐� �", "灏煎ゆ��烽���"],
  algeria: ["瀹涓灏悸锋煎痉�蜂�", "绌���娉路娉芥 煎反", "浜�灞卞ぇ路濂ュ鸿淳", "�绫陈锋���灏�", "�捐�锋艰开", "浼绱 绂路�垮�灏", "��路��诲����澶�", "绌缃榛寰仿烽挎路�剧", "�惧杩寰仿峰惧反", "浼���灏路��撼濉灏", "�绫冲孤锋辰椴��", "绾虫�灏路����卞�", "����疯�灏�甯�", "�¤ㄥ�路濂ヤ�灏", "娉�锋�锋�浼姣", "�浜寰仿烽┈璧�锋�", "璧涔寰仿锋�璧�┈", "灏ょ� 澶�疯��卞�", "浼��奥锋�╅┈灏�", "宸存 艰揪路甯�璐�", "�挎路�や��", "绌缃榛寰仿烽跨��", "浜杈路甯�甯绫�", "浜褰路娆х撼��", "姣�灏路甯�甯绫�", "绌缃榛寰仿锋��锋�"],
  iraq: ["璐炬�路�妗", "娉�寰仿峰��╁�", "�惧杩寰仿峰反瑗垮", "渚��� 路�块", "�峰�路����", "寮�版�锋�圭���", "绌���娉路绾抽�濮", "�块路�垮痉�", "�浼寰仿峰�璧��", "�跨背灏路�块┈�", "���娆Ｂ峰反�ü朵�ü", "宸存�灏路�锋�", "�ㄩ垮痉路绾宠�", "�跨背灏路�垮��璐惧反灏", "榻涓孤蜂��宸村�", "�块路璐捐タ濮", "灏ょ� 澶�烽挎", "渚��� 路�块", "�炬悸蜂警璧� ", "绌缃榛寰仿疯揪涔寰�", "绌缃绾冲痉路�块", "�挎路�垮反��", "椹��绉路娉灏�", "�块路�椹�开", "�垮″�路�甯濮", "椹�但杩�峰＄背灏"],
  jordan: ["浜榻寰仿烽垮��辨", "�垮��路娉�¢", "���涓路宸村凹�挎�ü�", "浜璧路�挎甯", "宸存路椹�蜂�", "�垮��路绾宠タ甯", "浼璧��路�杈惧痉", "绌缃榛寰仿烽垮��浠ü浠ü", "�ㄥ╁�路�胯淳�", "���路��﹀�寰�", "灏兼灏路�浠ü涓�", "�璐句�路�胯ü跺痉", "���娆Ｂ疯ㄥ痉璧�", "绌缃榛寰仿烽垮�娉介�", "椹��寰仿烽┈灏杩�", "绌��峰�椹�", "浜璧路濂椹��", "�块路濂ュ�涓", "�濮�路杈惧��灏", "�跨撼��峰反灏间�杈", "�惧杩寰仿疯ㄧ背灏", "�ㄥ╄但路��瑰�", "绌缃榛寰仿烽垮�娉板", "璐规��疯阿灏宸磋ü�", "濂ヨ�杈韭疯ㄩ┈�", "�块峰か路��"]
};

const rosterRoles = ["�ㄥ�", "�ㄥ�", "�ㄥ�", "���", "���", "���", "���", "���", "���", "���", "涓��", "涓��", "涓��", "涓��", "涓��", "涓��", "涓��", "��", "��", "��", "��", "��", "��", "��", "涓��", "���"];

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
  const subtitle = type === "coach" ? "�缁" : "��";
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
    ...Array.from({ length: 26 - t.players.length }, (_, index) => `${t.cn}�� ${String(index + t.players.length + 1).padStart(2, "0")}`)
  ];
  const uniqueNames = [...new Set(names)];
  while (uniqueNames.length < 26) uniqueNames.push(`${t.cn}�� ${String(uniqueNames.length + 1).padStart(2, "0")}`);
  return uniqueNames.slice(0, 26).map((name, index) => ({
    name,
    number: index + 1,
    role: rosterRoles[index] || "��",
    teamId: t.id,
    featured: t.players.includes(name)
  }));
}

function beijingScheduleLabel(game, index) {
  const timeSlots = ["03:00", "06:00", "09:00", "12:00", "03:00", "06:00"];
  return `�浜�堕� 2026骞�${game[2]} ${game[3] || timeSlots[index % timeSlots.length]}`;
}

function allDailyMatches() {
  return [...dailyMatches].sort((a, b) => `${a.date}-${a.time}`.localeCompare(`${b.date}-${b.time}`));
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
    `�浜�堕� 2026骞�${game[2]} ${game[3] || beijingTimes[index % beijingTimes.length]}`,
    "寰瀹",
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
  const [, month, day] = label.match(/(\d+)�(\d+)��/) || [];
  return `2026-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function defaultMatchData(homeId, awayId) {
  const home = teams[homeId];
  const away = teams[awayId];
  return {
    h2h: "�� 瀹�翠氦��版�",
    form: `${home.cn} 寰�存� 路 ${away.cn} 寰�存�`,
    ranking: `${home.cn} 寰�存� 路 ${away.cn} 寰�存�`
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
      message: "瀹�剁Н�寰�ュ�"
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
    message: payload.source || "瀹�剁Н�"
  };
}

function renderGroups() {
  const groupsEl = document.querySelector("#groups");
  if (!groupsEl) return;
  groupsEl.innerHTML = groups.map(renderGroup).join("");

  const meta = document.querySelector("#standingsMeta");
  if (meta) {
    const label = standingsSource.isLive ? "瀹�剁Н�" : standingsSource.message;
    const time = standingsSource.updatedAt ? ` 路 �存颁� ${formatDateTime(standingsSource.updatedAt)}` : "";
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
              <button class="flag-button" data-team="${t.id}" aria-label="�ョ${t.cn}璇︽">
                <img src="${flagUrl(t.id)}" alt="${t.cn}�芥" loading="lazy">
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
        <h3>${groupData.name} 缁</h3>
        <span>� 2 �存ユ绾�</span>
      </div>
      <table class="standings">
        <thead>
          <tr>
            <th></th><th>��</th><th>璧</th><th>�</th><th>骞�</th><th>璐</th><th>�ü</th><th>�</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </article>
  `;
}

let activeMatches = [];
let activeDayMode = "tomorrow";

function baseDateKey() {
  const override = new URLSearchParams(location.search).get("date");
  if (override) return override;
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
}

function addDays(dateKey, days) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day + days));
  return date.toISOString().slice(0, 10);
}

function targetDateKey(mode = activeDayMode) {
  return mode === "today" ? baseDateKey() : addDays(baseDateKey(), 1);
}

function getDailyMatches(mode = activeDayMode) {
  const key = targetDateKey(mode);
  const records = allDailyMatches();
  const matches = records.filter((item) => beijingDateKey(item) === key);
  if (matches.length) return { key, matches, mode, isFallback: false };

  const next = records.find((item) => beijingDateKey(item) > key) || records[0];
  const nextKey = beijingDateKey(next);
  return {
    key: nextKey,
    matches: records.filter((item) => beijingDateKey(item) === nextKey),
    mode,
    isFallback: true
  };
}

function beijingDateKey(matchItem) {
  const match = matchItem.beijingTime.match(/2026骞�(\d+)�(\d+)��/);
  if (!match) return matchItem.date;
  return `2026-${String(match[1]).padStart(2, "0")}-${String(match[2]).padStart(2, "0")}`;
}

function renderTabs(activeIndex = 0) {
  const daily = getDailyMatches(activeDayMode);
  activeMatches = daily.matches;
  updateMatchTitle(daily);
  renderDaySwitch(daily);

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
          <div class="tab-meta">${m.groupName} 路 ${m.beijingTime}</div>
        </button>
      `;
    })
    .join("");

  document.querySelector("#matchTabs").innerHTML = tabs;
  renderMatch(activeIndex);
}

function renderDaySwitch(daily) {
  const switchEl = document.querySelector("#daySwitch");
  if (!switchEl) return;
  const options = [
    { mode: "tomorrow", label: "��ヨ�绋", date: targetDateKey("tomorrow") },
    { mode: "today", label: "浠�ヨ�绋", date: targetDateKey("today") }
  ];
  switchEl.innerHTML = options.map((item) => `
    <button class="day-switch-button" type="button" role="tab" aria-selected="${activeDayMode === item.mode}" data-day-mode="${item.mode}">
      <span>${item.label}</span>
      <strong>${formatDateLabel(item.date)}</strong>
    </button>
  `).join("");
  switchEl.setAttribute("aria-label", `${formatDateLabel(daily.key)}璧绋`);
}

function updateMatchTitle(daily) {
  const title = document.querySelector(".matches-title h2");
  const eyebrow = document.querySelector(".matches-title .eyebrow");
  if (!title) return;
  const label = activeDayMode === "today" ? "浠��" : "���";
  title.textContent = daily.isFallback ? `${formatDateLabel(daily.key)} 瀵归�` : `${label}瀵归典��版�`;
  if (eyebrow) eyebrow.textContent = activeDayMode === "today" ? "Today Matches" : "Tomorrow Matches";
}

function formatDateLabel(dateText) {
  const [, month, day] = dateText.split("-");
  return `${Number(month)}�${Number(day)}��`;
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
    document.querySelector("#matchPanel").innerHTML = `<div class="empty-state">浠�ユ� 姣璧�ü</div>`;
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
          <div class="data-box"><span>��蹭氦�</span><strong>${m.data.h2h}</strong></div>
          <div class="data-box"><span>杩 5 �烘缁�</span><strong>${m.data.form}</strong></div>
          <div class="data-box"><span>FIFA ��</span><strong>${m.data.ranking}</strong></div>
        </div>
      </div>
      <aside class="match-info">
        <div class="info-row"><span>灏缁</span><strong>${m.groupName}</strong></div>
        <div class="info-row"><span>�浜�堕�</span><strong>${m.beijingTime}</strong></div>
        <div class="info-row"><span>褰�板�ü�</span><strong>${m.time}</strong></div>
        <div class="info-row"><span>�扮�</span><strong>${m.venue}</strong></div>
      </aside>
    </div>
  `;
}

function renderVersusTeam(t) {
  return `
    <div class="versus-team">
      <button class="flag-button detail-flag" data-team="${t.id}" aria-label="�ョ${t.cn}璇︽">
        <img src="${flagUrl(t.id)}" alt="${t.cn}�芥">
      </button>
      <strong>${t.cn}</strong>
      <a class="detail-link" href="#team-${t.id}">��璇︽</a>
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
      <span class="detail-flag"><img src="${flagUrl(t.id)}" alt="${t.cn}�芥"></span>
      <div>
        <p>${groupName} 缁 路 ${t.en}</p>
        <h2 id="teamName">${t.cn}</h2>
        <p>涓绘缁锛${t.coach}</p>
      </div>
    </div>
    <div class="detail-grid">
      <section class="detail-block">
        <h3>�缁缁</h3>
        <div class="coach-card">
          <img src="${avatarUrl(t.coach, "coach", "", t.id)}" alt="${t.coach}澶村">
          <div>
            <strong>${t.coach}</strong>
            <span>涓绘缁</span>
          </div>
        </div>
      </section>
      <section class="detail-block">
        <h3>灏缁璧绋</h3>
        <ul class="schedule-list">
          ${teamSchedule
            .map(({ game, index }) => `<li><strong>${game[0]} vs ${game[1]}</strong><span>${beijingScheduleLabel(game, index)}</span></li>`)
            .join("")}
        </ul>
      </section>
    </div>
    <section class="detail-block roster-block">
      <div class="roster-title">
        <h3>��澶у�</h3>
        <span>${roster.length} 浜�</span>
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
      <img src="${avatarUrl(player.name, "player", player.number, player.teamId)}" alt="${player.name}�琛ｅご�" loading="lazy">
      <div>
        <strong>${player.name}</strong>
        <span>${String(player.number).padStart(2, "0")} 路 ${player.role}${player.featured ? " 路 � 稿�" : ""}</span>
      </div>
    </article>
  `;
}

function initTakeBox() {
  const display = document.querySelector("#takeDisplay");
  const saved = localStorage.getItem("worldcup-match-take") || "";
  renderTakeDisplay(saved);

  function renderTakeDisplay(value) {
    display.textContent = value.trim() || "�� 瑙�广ü";
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
    return;
  }

  const dayTab = event.target.closest("[data-day-mode]");
  if (dayTab) {
    activeDayMode = dayTab.dataset.dayMode;
    renderTabs(0);
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
