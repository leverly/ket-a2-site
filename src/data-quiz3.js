/* ==========================================================
   KET 语法题库 · 第三批（补充题，全部原创）
   目的：把题量偏薄的考点补到每个至少 6 题，让「各考点掌握诊断」
        和单轮练习在每个考点上都有足够样本。
   题型配比沿用前两批：单选为主，适量写作改错与开放填空。
     type:'choice'   三选一（Reading Part 4 形态）
     type:'correct'  挑出正确的那一句（写作自查）
     type:'fill'     开放填空（Reading Part 5 形态）
   ========================================================== */

let nq = 0, ncr = 0, nfl = 0;
const Q = (topic, level, stem, options, answer, why) => {
  nq++;
  const shift = ((answer - nq) % options.length + options.length) % options.length;
  const opts = options.slice(shift).concat(options.slice(0, shift));
  return { id: 'x' + String(nq).padStart(3, '0'), topic, level, stem,
    options: opts, answer: (answer - shift + options.length) % options.length, why };
};
const C = (topic, level, options, answer, why) => {
  ncr++;
  const shift = ((answer - ncr) % options.length + options.length) % options.length;
  const opts = options.slice(shift).concat(options.slice(0, shift));
  return { id: 'y' + String(ncr).padStart(3, '0'), type: 'correct', topic, level,
    stem: '选出正确的一句：', options: opts,
    answer: (answer - shift + options.length) % options.length, why };
};
const F = (topic, level, stem, accept, why) =>
  ({ id: 'z' + String(++nfl).padStart(3, '0'), type: 'fill', topic, level, stem, answer: accept[0], accept, why });

export const QUESTIONS_3 = [
  /* ================= may / might（+4） ================= */
  Q('may-might', 'A2', 'I\'m not sure where Kate is. She ___ be in the library.',
    ['must', 'might', 'should'], 1, '不确定的推测用 might / may；must 表示很有把握。'),
  Q('may-might', 'A2', 'Take an umbrella. It ___ rain this afternoon.',
    ['may', 'must', 'need'], 0, '对将来天气的猜测用 may / might。'),
  Q('may-might', 'A2', 'We ___ go to the beach tomorrow, but it depends on the weather.',
    ['might', 'must', 'can'], 0, '取决于天气，说明不确定，用 might。'),
  C('may-might', 'A2', ['It may rains later.', 'It may rain later.', 'It may to rain later.'], 1,
    'may 后接动词原形，不加 -s 也不加 to。'),

  /* ================= all / both / each / every（+4） ================= */
  Q('all-both-every', 'A2+', '___ of my two brothers likes football.',
    ['All', 'Both', 'Each'], 2, '两者中的每一个用 each；both 后接复数动词 like。'),
  Q('all-both-every', 'A2+', '___ the students in my class passed the test.',
    ['All', 'Each', 'Every'], 0, 'all the + 复数名词，谓语用复数 passed。'),
  Q('all-both-every', 'A2+', 'I\'ve read ___ book on that shelf.',
    ['all', 'both', 'every'], 2, 'every + 单数名词表示"每一本"。'),
  F('all-both-every', 'A2+', '___ of the two answers is correct.', ['Each', 'each'],
    '指两者各自，用 Each + 单数谓语 is。'),

  /* ================= 一般疑问句与简略回答（+4） ================= */
  Q('yes-no-questions', 'A1', '"Are you coming to the party?" "Yes, I ___."',
    ['am', 'do', 'are'], 0, 'be 动词提问，用 be 动词回答；主语 I 配 am。'),
  Q('yes-no-questions', 'A1', '"Did you enjoy the film?" "No, I ___."',
    ['didn\'t', 'don\'t', 'wasn\'t'], 0, 'Did 提问用 did / didn\'t 回答。'),
  Q('yes-no-questions', 'A1', '"Has she finished her homework?" "Yes, she ___."',
    ['has', 'does', 'is'], 0, 'Has 提问用 has 回答。'),
  C('yes-no-questions', 'A1', ['"Do you like it?" "Yes, I like."', '"Do you like it?" "Yes, I do."', '"Do you like it?" "Yes, I am."'], 1,
    'Do 提问用 do 作简略回答，不能只重复实义动词。'),

  /* ================= 时间从句（+4） ================= */
  Q('time-clauses', 'A2', 'I\'ll call you ___ I get home.',
    ['when', 'while', 'until'], 0, '"到家的时候"用 when 引导时间从句。'),
  Q('time-clauses', 'A2', 'We had dinner ___ the film started.',
    ['before', 'until', 'while'], 0, '先吃饭后看电影，用 before。'),
  Q('time-clauses', 'A2', 'Don\'t leave ___ the rain stops.',
    ['when', 'until', 'before'], 1, '"直到雨停再走"用 not… until。'),
  F('time-clauses', 'A2', 'I\'ll finish this ___ I have time.', ['when', 'before', 'after'],
    '"有时间的时候"用 when 引导时间从句。'),

  /* ================= 祈使句与 Let's（+3） ================= */
  Q('imperative', 'A1', '___ the door, please. It\'s cold in here.',
    ['Close', 'Closing', 'To close'], 0, '祈使句用动词原形开头。'),
  Q('imperative', 'A1', 'Let\'s ___ the bus. It\'s faster than walking.',
    ['to take', 'taking', 'take'], 2, 'Let\'s 后接动词原形。'),
  C('imperative', 'A1', ['Don\'t to run in the corridor.', 'Don\'t run in the corridor.', 'Not run in the corridor.'], 1,
    '否定祈使句用 Don\'t + 动词原形。'),

  /* ================= have got / have（+3） ================= */
  Q('have-got', 'A1', 'She ___ got two younger sisters.',
    ['have', 'has', 'is'], 1, '主语 she 三单，have got 用 has got。'),
  Q('have-got', 'A1', 'We ___ got any milk in the fridge.',
    ['haven\'t', 'don\'t', 'aren\'t'], 0, 'have got 的否定是 haven\'t got。'),
  C('have-got', 'A1', ['I have got a new bike.', 'I has got a new bike.', 'I have get a new bike.'], 0,
    '主语 I 用 have got。'),

  /* ================= should（+3） ================= */
  Q('should', 'A2', 'You ___ eat so much sweets — they\'re bad for your teeth.',
    ['shouldn\'t', 'should', 'don\'t should'], 0, '提建议不要做某事用 shouldn\'t。'),
  Q('should', 'A2', 'It\'s raining. You ___ take an umbrella.',
    ['should', 'shouldn\'t', 'must not'], 0, '建议做某事用 should。'),
  C('should', 'A2', ['You should to see a doctor.', 'You should see a doctor.', 'You should seeing a doctor.'], 1,
    'should 后接动词原形，不加 to 也不加 -ing。'),

  /* ================= 指示代词（+3） ================= */
  Q('demonstratives', 'A1', '___ is my new phone here in my hand.',
    ['This', 'These', 'Those'], 0, '近处单数用 this。'),
  Q('demonstratives', 'A1', '___ books on the shelf over there are mine.',
    ['This', 'That', 'Those'], 2, '远处复数用 those。'),
  C('demonstratives', 'A1', ['These shoes is too small.', 'These shoes are too small.', 'This shoes are too small.'], 1,
    'these 是复数，谓语用 are。'),

  /* ================= some / any / no（+3） ================= */
  Q('some-any', 'A1', 'There aren\'t ___ chairs in the garden.',
    ['some', 'any', 'no'], 1, '否定句中用 any。'),
  Q('some-any', 'A1', 'Could I have ___ water, please?',
    ['any', 'some', 'no'], 1, '表示请求的疑问句用 some，期待对方同意。'),
  F('some-any', 'A1', 'There is ___ orange juice in the bottle.', ['some'],
    '肯定句中用 some。'),

  /* ================= as … as（+3） ================= */
  Q('as-as', 'A2', 'This book isn\'t as interesting ___ that one.',
    ['than', 'as', 'like'], 1, 'as … as 结构中第二个 as 不能换。'),
  Q('as-as', 'A2', 'My little sister is not as tall ___ me.',
    ['as', 'than', 'so'], 0, '否定形式 not as … as。'),
  C('as-as', 'A2', ['Tom runs as faster as Sam.', 'Tom runs as fast as Sam.', 'Tom runs as fast than Sam.'], 1,
    'as … as 中间用形容词或副词原形。'),

  /* ================= 频率副词（+3） ================= */
  Q('frequency', 'A1', 'I ___ go to bed before ten o\'clock.',
    ['usual', 'usually', 'usualy'], 1, '频率副词 usually 修饰动词，拼写为 usually。'),
  Q('frequency', 'A1', 'She is ___ late for school.',
    ['never', 'not never', 'no'], 0, 'never 本身表示否定，不与 not 连用。'),
  C('frequency', 'A1', ['He always is happy.', 'He is always happy.', 'He is happy always.'], 1,
    '频率副词放在 be 动词之后。'),

  /* ================= too / enough / very（+3） ================= */
  Q('too-enough', 'A2+', 'This box is ___ heavy for me to carry.',
    ['too', 'enough', 'very'], 0, 'too + 形容词 + to do 表示"太…以致不能"。'),
  Q('too-enough', 'A2+', 'He isn\'t old ___ to drive a car.',
    ['too', 'enough', 'very'], 1, '形容词 + enough to do 表示"足够…可以做"。'),
  C('too-enough', 'A2+', ['The room is enough big.', 'The room is big enough.', 'The room is too enough big.'], 1,
    'enough 放在形容词之后。'),

  /* ================= 方向介词与指路（+3） ================= */
  Q('movement-prep', 'A2', 'Go ___ the bridge and turn left.',
    ['across', 'through', 'over'], 0, '穿过平面（桥面、马路）用 across。'),
  Q('movement-prep', 'A2', 'Walk ___ the park and you\'ll see the museum.',
    ['across', 'through', 'on'], 1, '穿过有内部空间的地方（公园、森林）用 through。'),
  F('movement-prep', 'A2', 'The bank is ___ the post office — just opposite it.', ['opposite', 'across from', 'facing'],
    '在…对面用 opposite。'),

  /* ================= 对主语提问（+3） ================= */
  Q('subject-questions', 'A2+', 'Who ___ you that interesting story?',
    ['did tell', 'told', 'was tell'], 1, 'who 作主语时，疑问句不再加 did，直接用过去式 told。'),
  Q('subject-questions', 'A2+', 'What ___ next? — Nobody knows.',
    ['did happen', 'happened', 'was happened'], 1, 'what 作主语，谓语直接跟动词过去式。'),
  C('subject-questions', 'A2+', ['Who did break the window?', 'Who broke the window?', 'Who was broke the window?'], 1,
    'who 作主语时不用 did，直接用过去式。'),

  /* ================= 一般现在 vs 现在进行（+2） ================= */
  Q('simple-vs-continuous', 'A2', 'She usually ___ coffee, but today she\'s having tea.',
    ['drinks', 'is drinking', 'drink'], 0, 'usually 表示习惯，用一般现在时，三单加 -s。'),
  C('simple-vs-continuous', 'A2', ['I am knowing the answer.', 'I know the answer.', 'I knowing the answer.'], 1,
    'know 是状态动词，不用进行时。'),

  /* ================= There is / There are（+1） ================= */
  Q('there-be', 'A1', '___ a lot of people at the concert last night.',
    ['There was', 'There were', 'There is'], 1, 'a lot of people 是复数，过去时用 There were。'),

  /* ================= can / could（+1） ================= */
  Q('can-could', 'A1', '___ you speak French when you were ten?',
    ['Can', 'Could', 'Are'], 1, '询问过去的能力用 Could。'),

  /* ================= 邀请与提议（+1） ================= */
  Q('offers-invitations', 'A2', 'Would you like ___ come to my birthday party?',
    ['to', 'come', 'coming'], 0, 'Would you like to do…? 是固定邀请句型。'),

  /* ================= 名词复数（+1） ================= */
  Q('plurals', 'A1', 'There are three ___ in the garden.',
    ['childs', 'children', 'childes'], 1, 'child 的复数是 children，不规则变化。'),

  /* ================= 可数与不可数（+1） ================= */
  Q('countable', 'A2', 'Can I have some ___ about the course?',
    ['information', 'informations', 'an information'], 0, 'information 是不可数名词，没有复数也不加 a。'),

  /* ================= 名词所有格（+1） ================= */
  Q('possessive-s', 'A1', 'This is my ___ bag.',
    ['sister', 'sister\'s', 'sisters'], 1, '表示"姐姐的"用所有格 sister\'s。'),

  /* ================= if 条件句（+1） ================= */
  Q('conditionals', 'A2', 'If I ___ enough money, I\'ll buy that bike.',
    ['will have', 'have', 'had'], 1, '第一条件句：if 从句用一般现在时。'),

  /* ================= 定语从句（+1） ================= */
  Q('relative-clauses', 'A2+', 'That\'s the girl ___ brother plays in our team.',
    ['who', 'whose', 'which'], 1, '表示"她的哥哥"，用 whose 表所属。'),
];
