# KET 启航 · 剑桥 A2 Key 备考站

把 Cambridge A2 Key（KET / KET for Schools）的**完整官方词汇表**和**考试范围内的语法体系**做成一个可计数、可练习、可复习的静态网站。架构与姊妹站 [PET 领航](https://github.com/leverly/pet-b1-site) 相同。

## 直接打开

```bash
open index.html          # 双击也行，无需服务器
```

数据内联进每个页面，`file://` 下也能正常工作；全部链接为相对路径，可部署在 GitHub Pages 子路径。

## 内容规模

| 项目 | 数量 | 来源 |
|---|---|---|
| 官方单词 | 1589 | Cambridge *A2 Key Vocabulary List*（2025-08）正文 |
| 官方短语 | 127 | 同上 |
| 词条合计 | 1716 | 全部带中文释义、音标、词性、英音朗读 |
| 官方话题 | 25 | 同上，附录 2 Topic Lists |
| 语法族 | 10 | 时态、动词句型、情态、名词冠词、代词、数量词、形副、介词、疑问句、连词从句 |
| 语法考点 | 44 | 每个含规则、公式/变化表、例句、易错对比；分 A1 基础 / A2 核心 / A2+ 衔接 PET |
| 易错对比 | 105 | ✕ 错句 / ✓ 对句 / 一句错因 |
| 练习题 | 249 | 三选一 145（Reading Part 4）· 改错 47（写作自查）· 填空 57（Reading Part 5），覆盖全部 44 个考点 |

## 页面

| 页面 | 作用 |
|---|---|
| `index.html` | 首页：今日任务驾驶舱、考试倒计时、目标档位 |
| `words.html` / `topics/` | 官方词表检索、按 25 个话题浏览 |
| `quiz.html` | SRS 背单词（四选一 / 闪卡，英音自动朗读） |
| `grammar.html` / `grammar/` | 语法避坑体系 |
| `review.html` | 真题式练语法，自动定位最弱考点 |
| `wrong.html` | 错词本 + 错题本，可打印 |
| `plan.html` | 6 周通关计划（逐周打卡、按考试日期推荐每日词量） |
| `stats.html` | 学习数据、导出/导入备份 |

学习记录存 localStorage，键名统一 `ket-` 前缀，与 PET 站同域部署互不干扰。
目标档位按 KET 量表：Pass 120–132 / Merit 133–139 / Distinction 140–150。

## 数据怎么来的

```
reference/a2key2025.pdf ──pypdf──▶ raw.txt ──parse_ket.py──▶ ket_entries.json + ket_topics.json
                                                  │
     ECDICT (ecdict.csv) + ket_override.py ──build_words.py──▶ ket_words.json
                                                  │
                         emit_words.py ──▶ src/data-words.js
                         gen_audio.py  ──▶ audio/*.mp3 + src/data-audio.js
```

- 中文释义：按官方词性从 ECDICT 选义项并过滤专业/生僻义；`ket_override.py` 对 KET 高频多义词、短语和英美差异词人工精校（优先级最高）。
- 大小写敏感词条（May/may、Miss/miss、IT/it）分开保留，学习记录键也区分大小写。
- 频档：按语料词频启发式分为高频 / 中频 / 低频。
- 语法与题库：`src/data-grammar.js`、`src/data-quiz.js`、`src/data-quiz2.js`，按 A2 Key Handbook 的 Language Specifications 原创编写。选择题选项在数据层按题号轮转，正确答案均匀分布在 A/B/C。

## 重新生成

```bash
python3 -m venv ~/.venv-ket && ~/.venv-ket/bin/pip install pypdf edge-tts
ln -s /path/to/ECDICT/ecdict.csv reference/ecdict.csv
~/.venv-ket/bin/python -c "import pypdf;r=pypdf.PdfReader('reference/a2key2025.pdf');open('reference/raw.txt','w').write('\n'.join(p.extract_text() for p in r.pages))"
cd reference && python3 parse_ket.py && python3 build_words.py && python3 emit_words.py && cd ..
~/.venv-ket/bin/python reference/gen_audio.py   # Edge TTS en-GB-SoniaNeural，32 kbps mono，已存在的文件会跳过（需 ffmpeg）
node build-site.mjs
```

## 部署

GitHub Pages：main 分支根目录，`.nojekyll` 已就位。改内容后重新 `node build-site.mjs` 并提交生成的 HTML。
