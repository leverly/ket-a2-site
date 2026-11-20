/* ==========================================================
   KET 语法题库 · 单项选择
   每题：topic（对应 data-grammar 的考点 id）｜ stem ｜ options ｜ answer ｜ why
   题型对齐 A2 Key Reading Part 4（三选一完形），全部为原创题
   ========================================================== */

let n = 0;
/* 选项按题号轮转，让正确答案均匀落在 A/B/C（保留选项相对顺序） */
const q = (topic, level, stem, options, answer, why) => {
  const id = 'q' + String(++n).padStart(3, '0');
  const shift = ((answer - n) % options.length + options.length) % options.length;
  const opts = options.slice(shift).concat(options.slice(0, shift));
  return { id, topic, level, stem, options: opts, answer: (answer - shift + options.length) % options.length, why };
};

export const QUESTIONS = [
  /* ---------------- 1. 时态 ---------------- */
  q('present-simple', 'A1', 'My sister ___ the piano every evening.', ['play', 'plays', 'playing'], 1, 'every evening 表示习惯；主语 my sister 是三单，动词加 -s。'),
  q('present-simple', 'A1', '___ your dad work in a bank?', ['Do', 'Does', 'Is'], 1, '主语 your dad 是三单，实义动词 work 的疑问句用 Does。'),
  q('present-simple', 'A1', 'We ___ have lessons on Saturdays.', ['don\'t', 'doesn\'t', 'aren\'t'], 0, '主语 we，否定用 don\'t + 动词原形。'),
  q('present-simple', 'A2', 'The last bus ___ at 11 p.m., so don\'t be late.', ['leave', 'leaves', 'is leave'], 1, '时刻表用一般现在时；the last bus 三单 → leaves。'),
  q('present-continuous', 'A1', 'Look! It ___ outside.', ['snows', 'is snowing', 'snowing'], 1, 'Look! 提示此刻正在发生，用现在进行时 is snowing。'),
  q('present-continuous', 'A1', 'What ___ you doing right now?', ['do', 'is', 'are'], 2, '现在进行时 be + V-ing，主语 you 用 are。'),
  q('present-continuous', 'A2', 'I ___ this new video game. It\'s great!', ['love', 'am loving', 'loving'], 0, 'love 是状态动词，一般不用进行时。'),
  q('simple-vs-continuous', 'A2', 'Tom usually ___ his bike to school, but today he\'s walking.', ['rides', 'is riding', 'ride'], 0, 'usually 表示习惯，用一般现在时；三单 rides。'),
  q('simple-vs-continuous', 'A2', 'Can you call back later? We ___ dinner at the moment.', ['have', 'are having', 'has'], 1, 'at the moment 表示此刻，用现在进行时。'),
  q('simple-vs-continuous', 'A2', 'How often ___ you go to the cinema?', ['are', 'do', 'does'], 1, 'How often 问频率，用一般现在时，you 配 do。'),
  q('past-simple', 'A2', 'We ___ a great time at the beach last weekend.', ['have', 'had', 'having'], 1, 'last weekend 是过去时间，have 的过去式是 had。'),
  q('past-simple', 'A2', 'I didn\'t ___ my homework yesterday.', ['finish', 'finished', 'finishing'], 0, 'didn\'t 后用动词原形。'),
  q('past-simple', 'A2', 'Where ___ you go on holiday last summer?', ['do', 'did', 'were'], 1, 'last summer 是过去，实义动词 go 的疑问用 did。'),
  q('past-simple', 'A2', 'The tickets ___ very expensive, so we didn\'t buy them.', ['was', 'were', 'are'], 1, '主语 the tickets 复数，过去时用 were。'),
  q('past-simple', 'A2', 'My grandfather ___ me a nice present for my birthday.', ['gived', 'gave', 'given'], 1, 'give 的过去式是不规则的 gave。'),
  q('past-continuous', 'A2', 'I ___ TV when my friend called me.', ['watched', 'was watching', 'am watching'], 1, '长动作"正在看电视"被短动作 called 打断，长动作用过去进行时。'),
  q('past-continuous', 'A2', 'While they were playing football, it ___ to rain.', ['started', 'was starting', 'starts'], 0, '短动作"开始下雨"用一般过去时。'),
  q('past-continuous', 'A2', 'What ___ you doing at 10 o\'clock last night?', ['did', 'were', 'was'], 1, '过去某一时刻正在做的事，用过去进行时 were + doing。'),
  q('present-perfect', 'A2', 'Have you ever ___ to Japan?', ['be', 'been', 'went'], 1, 'Have you ever…? 后接过去分词，be → been。'),
  q('present-perfect', 'A2', 'I\'ve ___ finished my project. Can I go out now?', ['yet', 'just', 'ever'], 1, 'just 表示"刚刚"，放在过去分词前；yet 放句末，ever 用于疑问。'),
  q('present-perfect', 'A2', 'Has Sam done his homework ___?', ['already', 'yet', 'just'], 1, '疑问句末尾问"…了吗"用 yet。'),
  q('present-perfect', 'A2', 'I ___ that film two days ago.', ['have seen', 'saw', 'see'], 1, 'two days ago 是明确的过去时间，用一般过去时。'),
  q('present-perfect', 'A2', 'My aunt ___ never eaten Chinese food.', ['have', 'has', 'is'], 1, '主语 my aunt 三单，现在完成时用 has。'),
  q('future', 'A2', 'Look at the sky! It ___ rain.', ['is going to', 'will', 'goes to'], 0, '根据眼前迹象（天空）作出的预测，用 be going to。'),
  q('future', 'A2', '"The phone is ringing." "Don\'t worry, I ___ answer it."', ['am going to', '\'ll', 'answer'], 1, '说话时临时作出的决定用 will。'),
  q('future', 'A2', 'I ___ my cousin at the station at 4 o\'clock tomorrow. It\'s all arranged.', ['meet', 'am meeting', 'met'], 1, '已经约好的近期安排可以用现在进行时表示将来。'),
  q('future', 'A2', 'I\'ll send you a message when I ___ to London.', ['get', 'will get', 'got'], 0, 'when 引导时间从句，表示将来用一般现在时。'),

  /* ---------------- 2. 动词形式与句型 ---------------- */
  q('there-be', 'A1', 'There ___ a lot of people at the concert last night.', ['was', 'were', 'are'], 1, 'last night 是过去；people 复数 → were。'),
  q('there-be', 'A1', '___ there a swimming pool in your school?', ['Is', 'Are', 'Has'], 0, 'a swimming pool 单数，there be 疑问句用 Is there…?'),
  q('there-be', 'A1', 'There ___ some bread on the table.', ['is', 'are', 'have'], 0, 'bread 不可数，按单数用 is。'),
  q('imperative', 'A1', '___ late for the bus! It leaves at eight.', ['Not be', 'Don\'t be', 'No be'], 1, '否定祈使句：Don\'t + 动词原形。'),
  q('imperative', 'A1', 'Let\'s ___ a picnic in the park.', ['have', 'to have', 'having'], 0, 'Let\'s 后接动词原形。'),
  q('have-got', 'A1', '___ you got a pen I can borrow?', ['Do', 'Have', 'Are'], 1, 'have got 的疑问句把 have 提前：Have you got…?'),
  q('have-got', 'A1', 'My best friend ___ got long, curly hair.', ['have', 'has', 'is'], 1, '主语三单，用 has got。'),
  q('verb-patterns', 'A2', 'I really enjoy ___ to music on the bus.', ['listen', 'to listen', 'listening'], 2, 'enjoy 后接 -ing。'),
  q('verb-patterns', 'A2', 'We decided ___ a taxi because it was raining.', ['take', 'to take', 'taking'], 1, 'decide 后接 to do。'),
  q('verb-patterns', 'A2', 'Would you like ___ to my party on Friday?', ['come', 'to come', 'coming'], 1, 'would like 后接 to do。'),
  q('verb-patterns', 'A2', 'Thank you for ___ me with my English.', ['help', 'to help', 'helping'], 2, '介词 for 后接 -ing。'),
  q('verb-patterns', 'A2', 'Have you finished ___ that book yet?', ['reading', 'to read', 'read'], 0, 'finish 后接 -ing。'),
  q('passive-basic', 'A2+', 'This castle ___ more than 600 years ago.', ['built', 'was built', 'is built'], 1, '城堡"被建造"，ago 表示过去 → 一般过去时被动 was built。'),
  q('passive-basic', 'A2+', 'Cheese ___ from milk.', ['makes', 'is made', 'made'], 1, '奶酪"被制作"，客观事实用一般现在时被动 is made。'),
  q('passive-basic', 'A2+', 'The photos were taken ___ my uncle.', ['from', 'by', 'with'], 1, '被动语态中动作执行者用 by 引出。'),

  /* ---------------- 3. 情态动词 ---------------- */
  q('can-could', 'A1', 'My little brother ___ swim yet. He\'s only three.', ['can\'t', 'mustn\'t', 'doesn\'t'], 0, '表示能力"不会"用 can\'t。'),
  q('can-could', 'A2', 'When I was six, I ___ read very well.', ['can', 'could', 'can to'], 1, '过去的能力用 could。'),
  q('can-could', 'A2', '___ you help me carry these bags, please?', ['Could', 'Should', 'Must'], 0, '礼貌请求别人帮忙用 Could you…?'),
  q('must-have-to', 'A2', 'You ___ use your phone during the exam. It\'s not allowed.', ['mustn\'t', 'don\'t have to', 'needn\'t to'], 0, '"不允许"表示禁止，用 mustn\'t。'),
  q('must-have-to', 'A2', 'The museum is free, so you ___ pay.', ['mustn\'t', 'don\'t have to', 'can\'t'], 1, '"免费所以不必付钱"→ don\'t have to（不必）。'),
  q('must-have-to', 'A2', 'Yesterday we ___ wait an hour for the train.', ['must', 'had to', 'have to'], 1, 'must 没有过去式，过去的"不得不"用 had to。'),
  q('must-have-to', 'A2', 'My mum ___ get up at 5 a.m. for work.', ['have to', 'has to', 'must to'], 1, 'have to 有人称变化，三单 has to。'),
  q('should', 'A2', 'You look tired. You ___ go to bed early tonight.', ['should', 'shouldn\'t', 'can\'t'], 0, '给出建议"应该"用 should。'),
  q('should', 'A2', 'You ___ drink so much cola. It\'s bad for your teeth.', ['should', 'shouldn\'t', 'must'], 1, '建议"不应该"用 shouldn\'t。'),
  q('may-might', 'A2', 'Take your coat. It ___ be cold later.', ['might', 'must', 'can\'t'], 0, '不确定的可能性用 might。'),
  q('may-might', 'A2', '___ I open the window? It\'s very hot in here.', ['May', 'Must', 'Will'], 0, '礼貌地请求许可用 May I…?'),
  q('offers-invitations', 'A2', '___ I carry that heavy box for you?', ['Shall', 'Would', 'Do'], 0, '主动提出帮忙用 Shall I…?'),
  q('offers-invitations', 'A2', '"Would you like some orange juice?" "Yes, ___."', ['I would like', 'please', 'I like'], 1, '接受别人提供的东西说 Yes, please.'),
  q('offers-invitations', 'A2', 'Why don\'t we ___ to the new pizza restaurant?', ['go', 'to go', 'going'], 0, 'Why don\'t we + 动词原形，表示提议。'),

  /* ---------------- 4. 名词与冠词 ---------------- */
  q('plurals', 'A1', 'There are four ___ in my family.', ['person', 'people', 'peoples'], 1, 'person 的复数是 people。'),
  q('plurals', 'A1', 'The farmer has got fifty ___.', ['sheep', 'sheeps', 'sheepes'], 0, 'sheep 单复数同形。'),
  q('plurals', 'A1', 'Go to the dentist if your ___ hurt.', ['tooth', 'tooths', 'teeth'], 2, 'tooth 的复数是 teeth；动词 hurt 也说明主语是复数。'),
  q('countable', 'A2', 'Can you give me some ___ about the summer camp?', ['information', 'informations', 'an information'], 0, 'information 不可数，没有复数，不加 a/an。'),
  q('countable', 'A2', 'I\'ve got too much ___ this weekend.', ['homework', 'homeworks', 'a homework'], 0, 'homework 不可数。'),
  q('countable', 'A2', 'Could I have a ___ of water, please?', ['piece', 'glass', 'loaf'], 1, '水用 a glass of 来计量。'),
  q('articles', 'A2', 'My uncle is ___ engineer.', ['a', 'an', 'the'], 1, 'engineer 以元音音素开头，用 an。'),
  q('articles', 'A2', 'I\'ll be back in ___ hour.', ['a', 'an', 'the'], 1, 'hour 的 h 不发音，以元音音素开头，用 an。'),
  q('articles', 'A2', 'She plays ___ guitar in a band.', ['a', 'the', '—（不填）'], 1, '乐器前加 the：play the guitar。'),
  q('articles', 'A2', 'We bought a cake and a pizza. ___ cake was delicious.', ['A', 'The', 'An'], 1, '第二次提到同一事物用 the。'),
  q('articles', 'A2', 'Do you want to play ___ tennis after school?', ['a', 'the', '—（不填）'], 2, '球类运动前不加冠词。'),
  q('possessive-s', 'A1', 'This is ___ new bike.', ['Emma\'s', 'Emmas', 'Emma'], 0, '表示"某人的"用 名词 + \'s。'),
  q('possessive-s', 'A2', 'The ___ toys are all over the floor.', ['childrens\'', 'children\'s', 'childs\''], 1, 'children 是不以 s 结尾的复数，所有格加 \'s。'),
  q('possessive-s', 'A2', 'Our cat loves ___ new bed.', ['it\'s', 'its', 'it'], 1, 'its = 它的；it\'s = it is。'),

  /* ---------------- 5. 代词 ---------------- */
  q('personal-pronouns', 'A1', 'Anna is my friend. I often play tennis with ___.', ['she', 'her', 'hers'], 1, '介词 with 后用宾格 her。'),
  q('personal-pronouns', 'A1', 'Is this your umbrella? — No, it isn\'t ___.', ['my', 'mine', 'me'], 1, '后面没有名词，用名词性物主代词 mine。'),
  q('personal-pronouns', 'A1', 'My grandparents live in the country. ___ house is very old.', ['There', 'Their', 'They\'re'], 1, '"他们的"用 their。'),
  q('personal-pronouns', 'A2', 'Help ___ to some cake, everyone!', ['you', 'yourself', 'yourselves'], 2, '对多人说"请随便吃"用 help yourselves。'),
  q('demonstratives', 'A1', '___ shoes over there are very nice.', ['This', 'That', 'Those'], 2, 'over there 指远处，shoes 复数 → those。'),
  q('demonstratives', 'A1', 'Hi, Jack. ___ is Lucy. Can you call me back?', ['This', 'I', 'Here'], 0, '电话里介绍自己用 This is…'),
  q('indefinite-pronouns', 'A2', 'I\'m bored. There\'s ___ to do here.', ['nothing', 'anything', 'something'], 0, '"没什么事可做"用 nothing（肯定句中含否定意义）。'),
  q('indefinite-pronouns', 'A2', 'Did you buy ___ at the market?', ['nothing', 'anything', 'everything'], 1, '一般疑问句中用 anything。'),
  q('indefinite-pronouns', 'A2', 'Let\'s go ___ warm for our holiday.', ['somewhere', 'anywhere', 'nowhere'], 0, '肯定句中用 somewhere；形容词 warm 放在后面。'),
  q('indefinite-pronouns', 'A2', 'Everybody ___ to the party on Saturday.', ['are coming', 'is coming', 'come'], 1, 'everybody 作主语谓语用单数。'),

  /* ---------------- 6. 数量词 ---------------- */
  q('some-any', 'A1', 'We haven\'t got ___ eggs. Can you buy some?', ['some', 'any', 'no'], 1, '否定句用 any。'),
  q('some-any', 'A1', 'Would you like ___ more soup?', ['some', 'any', 'many'], 0, '提供东西的疑问句用 some。'),
  q('much-many', 'A2', 'How ___ is this jacket?', ['many', 'much', 'long'], 1, '问价格用 How much。'),
  q('much-many', 'A2', 'How ___ students are in your class?', ['much', 'many', 'lot'], 1, 'students 可数复数，用 How many。'),
  q('much-many', 'A2', 'I put a ___ sugar in my tea.', ['few', 'little', 'many'], 1, 'sugar 不可数，用 a little。'),
  q('much-many', 'A2', 'There were ___ people in the shop, so we got served quickly.', ['a few', 'a lot of', 'much'], 0, '只有几个人所以很快——用 a few（可数）。'),
  q('much-many', 'A2', 'Don\'t eat too ___ sweets.', ['much', 'many', 'little'], 1, 'sweets 可数复数，too many。'),
  q('all-both-every', 'A2+', '___ of my parents like gardening.', ['Both', 'All', 'Every'], 0, '父母是两个人，用 both。'),
  q('all-both-every', 'A2+', '___ student in the class has a laptop.', ['All', 'Every', 'Both'], 1, 'every + 单数名词 + 单数谓语。'),

  /* ---------------- 7. 形容词与副词 ---------------- */
  q('comparatives', 'A2', 'Today is ___ than yesterday.', ['hot', 'hotter', 'hottest'], 1, '有 than，用比较级；hot 双写 t → hotter。'),
  q('comparatives', 'A2', 'This is the ___ restaurant in town.', ['better', 'best', 'good'], 1, 'the + 最高级；good → better → best。'),
  q('comparatives', 'A2', 'The red dress is ___ than the blue one.', ['expensiver', 'more expensive', 'most expensive'], 1, '多音节形容词比较级用 more。'),
  q('comparatives', 'A2', 'Who is the ___ person in your family?', ['funnier', 'funniest', 'most funny'], 1, '三者以上比较用最高级；funny → funniest。'),
  q('comparatives', 'A2', 'My cold is ___ today. I feel terrible.', ['worse', 'badder', 'worst'], 0, 'bad 的比较级是不规则的 worse。'),
  q('as-as', 'A2', 'My bag isn\'t as heavy ___ yours.', ['than', 'as', 'like'], 1, 'not as … as 是固定结构。'),
  q('as-as', 'A2', 'Ben is as ___ as his father now.', ['tall', 'taller', 'tallest'], 0, 'as … as 中间用原级。'),
  q('frequency', 'A1', 'She ___ late for class.', ['never is', 'is never', 'never be'], 1, '频率副词放在 be 动词之后。'),
  q('frequency', 'A1', 'We ___ go camping in the summer.', ['often', 'are often', 'oftens'], 0, '频率副词放在实义动词前。'),
  q('adj-adv', 'A2', 'Please drive ___. The road is wet.', ['careful', 'carefully', 'care'], 1, '修饰动词 drive 用副词 carefully。'),
  q('adj-adv', 'A2', 'Your English is very ___!', ['good', 'well', 'nicely'], 0, 'be 动词后用形容词 good。'),
  q('adj-adv', 'A2', 'He can run very ___.', ['fastly', 'fast', 'quick'], 1, 'fast 既是形容词也是副词，没有 fastly。'),
  q('adj-adv', 'A2', 'This soup tastes ___.', ['wonderful', 'wonderfully', 'wonder'], 0, 'taste（尝起来）是系动词，后接形容词。'),
  q('ed-ing', 'A2', 'I was really ___ when I heard the news.', ['surprising', 'surprised', 'surprise'], 1, '描述人的感受用 -ed 形容词。'),
  q('ed-ing', 'A2', 'The science museum was really ___.', ['interesting', 'interested', 'interest'], 0, '描述事物特点用 -ing 形容词。'),
  q('ed-ing', 'A2', 'After the long walk, we all felt ___.', ['tiring', 'tired', 'tire'], 1, '人"感到累"用 tired。'),
  q('too-enough', 'A2+', 'I can\'t reach the shelf. I\'m not tall ___.', ['enough', 'too', 'very'], 0, '形容词 + enough；表示"不够高"。'),
  q('too-enough', 'A2+', 'This tea is ___ hot to drink. Wait a minute.', ['enough', 'too', 'so much'], 1, 'too + 形容词 + to do：太…而不能…'),

  /* ---------------- 8. 介词 ---------------- */
  q('time-prep', 'A1', 'The party is ___ Saturday evening.', ['in', 'on', 'at'], 1, '具体某天的上午/下午/晚上用 on。'),
  q('time-prep', 'A1', 'I usually get up ___ 7 o\'clock.', ['in', 'on', 'at'], 2, '具体钟点用 at。'),
  q('time-prep', 'A1', 'My cousin was born ___ 2012.', ['in', 'on', 'at'], 0, '年份用 in。'),
  q('time-prep', 'A2', 'I\'ll see you ___ next week.', ['in', 'on', '—（不填）'], 2, 'next/last/this/every 前不用介词。'),
  q('time-prep', 'A2', 'What do you usually do ___ the weekend?', ['in', 'at', 'for'], 1, '英式英语 at the weekend。'),
  q('place-prep', 'A1', 'There is a picture ___ the wall.', ['on', 'in', 'at'], 0, '在墙面上用 on。'),
  q('place-prep', 'A1', 'Our flat is ___ the second floor.', ['in', 'on', 'at'], 1, '楼层用 on。'),
  q('place-prep', 'A2', 'We arrived ___ Paris at midnight.', ['to', 'in', 'at'], 1, 'arrive in + 城市。'),
  q('place-prep', 'A2', 'The café is ___ the bank and the bookshop.', ['between', 'opposite', 'next'], 0, 'between … and … 在两者之间。'),
  q('movement-prep', 'A2', 'Walk ___ the bridge and the station is on your right.', ['across', 'through', 'into'], 0, '从桥面一边到另一边用 across。'),
  q('movement-prep', 'A2', 'The train went ___ a long tunnel.', ['across', 'through', 'over'], 1, '从内部穿过隧道用 through。'),
  q('movement-prep', 'A2', 'Quick! Get ___ the taxi.', ['on', 'in', 'at'], 1, '小汽车、出租车用 get in。'),
  q('fixed-prep', 'A2', 'I\'m very interested ___ animals.', ['in', 'on', 'at'], 0, 'be interested in 固定搭配。'),
  q('fixed-prep', 'A2', 'Can you wait ___ me after school?', ['to', 'for', 'on'], 1, 'wait for sb 固定搭配。'),
  q('fixed-prep', 'A2', 'She is afraid ___ spiders.', ['of', 'from', 'with'], 0, 'be afraid of 固定搭配。'),
  q('fixed-prep', 'A2', 'I go to school ___ foot.', ['by', 'on', 'with'], 1, '步行用 on foot；其他交通工具用 by。'),
  q('fixed-prep', 'A2', 'We\'re going ___ holiday to Spain next month.', ['in', 'on', 'for'], 1, 'go on holiday 固定搭配。'),

  /* ---------------- 9. 疑问句 ---------------- */
  q('yes-no-questions', 'A1', '"Do you like spicy food?" "Yes, I ___."', ['like', 'do', 'am'], 1, '简略回答用与问句相同的助动词 do。'),
  q('yes-no-questions', 'A1', '___ your sister at home last night?', ['Did', 'Was', 'Were'], 1, '主语 your sister 单数，be 动词过去式 was。'),
  q('wh-questions', 'A2', '___ is your birthday? — It\'s in June.', ['Where', 'When', 'Who'], 1, '问时间用 When。'),
  q('wh-questions', 'A2', '___ bag is this? — It\'s Tom\'s.', ['Who', 'Whose', 'Which'], 1, '问"谁的"用 Whose。'),
  q('wh-questions', 'A2', 'How ___ does it take to get to school? — About 20 minutes.', ['often', 'long', 'far'], 1, '问花多长时间用 How long。'),
  q('wh-questions', 'A2', 'How ___ is it from here to the beach? — About 2 kilometres.', ['far', 'long', 'much'], 0, '问距离用 How far。'),
  q('wh-questions', 'A2', 'What time ___ the film start?', ['do', 'does', 'is'], 1, '主语 the film 三单，用 does。'),
  q('subject-questions', 'A2+', 'Who ___ this beautiful picture?', ['did paint', 'painted', 'did painted'], 1, 'who 作主语，直接用过去式 painted。'),
  q('subject-questions', 'A2+', 'What ___ to your arm? — I fell off my bike.', ['happened', 'did happen', 'happens'], 0, 'what 作主语，直接用 happened。'),

  /* ---------------- 10. 连词与从句 ---------------- */
  q('conjunctions', 'A1', 'I wanted to go out, ___ it was raining.', ['so', 'but', 'because'], 1, '想出去 vs 在下雨，转折用 but。'),
  q('conjunctions', 'A1', 'I was hungry, ___ I made a sandwich.', ['so', 'but', 'or'], 0, '饿了→所以做三明治，结果用 so。'),
  q('conjunctions', 'A2', 'We stayed inside ___ it was too cold.', ['so', 'because', 'but'], 1, '原因用 because。'),
  q('conjunctions', 'A1', 'Would you like tea ___ coffee?', ['and', 'or', 'but'], 1, '二选一用 or。'),
  q('time-clauses', 'A2', 'Brush your teeth ___ you go to bed.', ['before', 'after', 'until'], 0, '睡觉之前刷牙，用 before。'),
  q('time-clauses', 'A2', 'I\'ll wait here ___ you come back.', ['until', 'when', 'before'], 0, '"一直等到你回来"用 until。'),
  q('conditionals', 'A2', 'If it ___ tomorrow, we\'ll go to the museum.', ['rains', 'will rain', 'rained'], 0, 'if 从句用一般现在时表示将来。'),
  q('conditionals', 'A2', 'If you heat water to 100°C, it ___.', ['boils', 'will boiling', 'boiled'], 0, '零条件句表示客观事实：If + 现在, 现在。'),
  q('conditionals', 'A2', 'If you don\'t study, you ___ pass the test.', ['don\'t', 'won\'t', 'aren\'t'], 1, '第一条件句主句用 will / won\'t。'),
  q('relative-clauses', 'A2+', 'The man ___ lives next door is a pilot.', ['who', 'which', 'where'], 0, '先行词是人，用 who。'),
  q('relative-clauses', 'A2+', 'This is the phone ___ I bought last week.', ['who', 'which', 'where'], 1, '先行词是物，用 which。'),
  q('relative-clauses', 'A2+', 'That\'s the hotel ___ we stayed last summer.', ['which', 'who', 'where'], 2, '先行词是地点且从句缺地点状语，用 where。'),
];
