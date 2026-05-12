# Paper Metadata Table: Physical AI and World Models

작성 기준: 2026-04-30  
대상: `related_works.md`에서 수집한 CSV 포함 관련 연구

## 문서 네비게이션

이 문서는 논문 메타데이터 lookup table이다. 논문 내용의 흐름을 보려면 [`related_works.md`](related_works.md)를 먼저 보고, 실제 스터디 배치는 [`curriculum.md`](curriculum.md)에서 확인한다.

연결 방식:

- `No.` 컬럼은 문서 내부 ID다. 예를 들어 `G4`는 Generalist/VLA foundation 섹션의 네 번째 항목이다.
- `CSV 포함 여부`는 [`related_works.md`](related_works.md)의 `5. CSV 논문 전체 반영표`에서 확인한다.
- 커리큘럼에서 발표 자료를 만들 때는 이 문서의 `Title`, `Venue / Status`, `Date`, `Link`를 발표 첫 슬라이드의 bibliographic 정보로 사용한다.

표기 원칙:

- `Authors`는 저자 수가 많은 논문은 `대표 저자 et al.`로 축약했다.
- `Affiliation / Team`은 논문 첫 페이지, 공식 페이지, CSV의 team affiliation, 또는 공개적으로 확인 가능한 대표 소속 기준이다.
- `Date`는 가능한 경우 최초 공개일 또는 공식 publication date를 적고, 확인이 어려운 경우 연도만 적었다.
- 전체 저자/소속은 `Link`의 원문 페이지에서 확인한다.

## 1. Survey / Position Papers

| No. | Title | Authors | Affiliation / Team | Venue / Status | Date | Link |
|---:|---|---|---|---|---|---|
| S1 | A Survey on Robotics with Foundation Models: toward Embodied AI | Zhiyuan Xu, Kun Wu, Junjie Wen, Jinming Li, Ning Liu, Zhengping Che, Jian Tang | HEC Montréal / Mila and collaborators | arXiv | 2024-02-04 | https://arxiv.org/abs/2402.02385 |
| S2 | A Survey on Vision-Language-Action Models for Embodied AI | Yueen Ma, Zixing Song, Yuzheng Zhuang, Jianye Hao, Irwin King | Tsinghua University / CUHK and collaborators | arXiv | 2024-05-23 | https://arxiv.org/abs/2405.14093 |
| S3 | Embodied AI Agents: Modeling the World | Pascale Fung, Yoram Bachrach, Asli Celikyilmaz, Kamalika Chaudhuri, Delong Chen et al. | Multi-institution / Meta FAIR and collaborators | arXiv | 2025-06-27 | https://arxiv.org/abs/2506.22355 |
| S4 | A Comprehensive Survey on World Models for Embodied AI | Xinqing Li, Xin He, Le Zhang, Min Wu, Xiaoli Li, Yun Liu | Multi-institution, China/Singapore collaborators | arXiv | 2025-10-19 | https://arxiv.org/abs/2510.16732 |
| S5 | An Anatomy of Vision-Language-Action Models: From Modules to Milestones and Challenges | Chao Xu, Suyu Zhang, Yang Liu, Baigui Sun, Weihong Chen et al. | Multi-institution collaborators | arXiv | 2025-12-12 | https://arxiv.org/abs/2512.11362 |

## 2. Generalist Agents, Language Grounding, and VLA Foundations

| No. | Title | Authors | Affiliation / Team | Venue / Status | Date | Link |
|---:|---|---|---|---|---|---|
| G1 | A Generalist Agent | Scott Reed, Konrad Zolna, Emilio Parisotto, Sergio Gomez Colmenarejo et al. | DeepMind | TMLR | 2022-05-12 | https://arxiv.org/abs/2205.06175 |
| G2 | Do As I Can, Not As I Say: Grounding Language in Robotic Affordances | Michael Ahn, Anthony Brohan, Noah Brown, Yevgen Chebotar et al. | Robotics at Google / Everyday Robots | arXiv | 2022-04-04 | https://arxiv.org/abs/2204.01691 |
| G3 | VIMA: General Robot Manipulation with Multimodal Prompts | Yunfan Jiang, Agrim Gupta, Zichen Zhang, Guanzhi Wang et al. | NVIDIA / Stanford / Caltech and collaborators | ICML | 2022-10-06 | https://arxiv.org/abs/2210.03094 |
| G4 | RT-1: Robotics Transformer for Real-World Control at Scale | Anthony Brohan, Noah Brown, Justice Carbajal, Yevgen Chebotar et al. | Google DeepMind / Robotics at Google | arXiv | 2022-12-13 | https://arxiv.org/abs/2212.06817 |
| G5 | PaLM-E: An Embodied Multimodal Language Model | Danny Driess, Fei Xia, Mehdi S. M. Sajjadi, Corey Lynch et al. | Robotics at Google / TU Berlin / Google Research | ICML | 2023-03-06 | https://arxiv.org/abs/2303.03378 |
| G6 | RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control | Anthony Brohan, Noah Brown, Justice Carbajal, Yevgen Chebotar et al. | Google DeepMind / Robotics at Google | CoRL / PMLR | 2023 | https://proceedings.mlr.press/v229/zitkovich23a.html |

## 3. Robot Data, Open Policies, and Cross-Embodiment Learning

| No. | Title | Authors | Affiliation / Team | Venue / Status | Date | Link |
|---:|---|---|---|---|---|---|
| D1 | Open X-Embodiment: Robotic Learning Datasets and RT-X Models | Open X-Embodiment Collaboration, Abby O'Neill, Abdul Rehman, Abhinav Gupta et al. | Open X-Embodiment Collaboration / Google DeepMind and 20+ institutions | ICRA / arXiv | 2023-10-13 | https://arxiv.org/abs/2310.08864 |
| D2 | Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware | Tony Z. Zhao, Vikash Kumar, Sergey Levine, Chelsea Finn | Stanford University / UC Berkeley | RSS / arXiv | 2023-04-23 | https://arxiv.org/abs/2304.13705 |
| D3 | DROID: A Large-Scale In-The-Wild Robot Manipulation Dataset | Alexander Khazatsky, Karl Pertsch, Suraj Nair, Ashwin Balakrishna et al. | UC Berkeley / Stanford / CMU / Google DeepMind and collaborators | RSS / arXiv | 2024-03-19 | https://arxiv.org/abs/2403.12945 |
| D4 | Octo: An Open-Source Generalist Robot Policy | Octo Model Team, Dibya Ghosh, Homer Walke, Karl Pertsch et al. | UC Berkeley / Stanford / Google DeepMind and collaborators | RSS / arXiv | 2024-05-20 | https://arxiv.org/abs/2405.12213 |
| D5 | OpenVLA: An Open-Source Vision-Language-Action Model | Moo Jin Kim, Karl Pertsch, Siddharth Karamcheti, Ted Xiao et al. | Stanford / UC Berkeley / TRI / Google DeepMind / Physical Intelligence / MIT | arXiv | 2024-06-13 | https://arxiv.org/abs/2406.09246 |
| D6 | X-VLA: Soft-Prompted Transformer as Scalable Cross-Embodiment Vision-Language-Action Model | Jinliang Zheng, Jianxiong Li, Zhihao Wang, Dongxiu Liu et al. | AIR Tsinghua / Shanghai AI Laboratory / Peking University | ICLR | 2026-04-23 | https://iclr.cc/virtual/2026/poster/10007740 |
| D7 | Pretrained Vision-Language-Action Models are Surprisingly Resistant to Forgetting in Continual Learning | Huihan Liu, Changyeon Kim, Bo Liu, Minghuan Liu, Yuke Zhu | UT Austin / KAIST / Microsoft Superintelligence | arXiv | 2026-03-04 | https://arxiv.org/abs/2603.03818 |

## 4. Visuomotor Policy Learning, Diffusion, and Robot Foundation Models

| No. | Title | Authors | Affiliation / Team | Venue / Status | Date | Link |
|---:|---|---|---|---|---|---|
| P1 | Diffusion Policy: Visuomotor Policy Learning via Action Diffusion | Cheng Chi, Zhenjia Xu, Siyuan Feng, Eric Cousineau et al. | Columbia University / Toyota Research Institute / MIT | RSS 2023; IJRR 2025 | 2023-03-07 | https://arxiv.org/abs/2303.04137 |
| P2 | 3D Diffusion Policy: Generalizable Visuomotor Policy Learning via Simple 3D Representations | Yanjie Ze, Gu Zhang, Kangning Zhang, Chenyuan Hu, Muhan Wang, Huazhe Xu | Shanghai Qi Zhi Institute / Shanghai Jiao Tong University / Tsinghua University | RSS | 2024-03-06 | https://arxiv.org/abs/2403.03954 |
| P3 | RDT-1B: a Diffusion Foundation Model for Bimanual Manipulation | Songming Liu, Lingxuan Wu, Bangguo Li, Hengkai Tan et al. | Tsinghua University / Shanghai AI Laboratory and collaborators | arXiv | 2024-10-10 | https://arxiv.org/abs/2410.07864 |
| P4 | π0: A Vision-Language-Action Flow Model for General Robot Control | Kevin Black, Noah Brown, Danny Driess, Adnan Esmail et al. | Physical Intelligence | RSS | 2024-10-31 | https://arxiv.org/abs/2410.24164 |
| P5 | π0.5: a Vision-Language-Action Model with Open-World Generalization | Physical Intelligence, Kevin Black, Noah Brown, James Darpinian et al. | Physical Intelligence | CoRL / arXiv | 2025-04-22 | https://arxiv.org/abs/2504.16054 |
| P6 | GR00T N1: An Open Foundation Model for Generalist Humanoid Robots | NVIDIA, Johan Bjorck, Fernando Castañeda, Nikita Cherniadev et al. | NVIDIA | arXiv | 2025-03-18 | https://arxiv.org/abs/2503.14734 |

## 5. VLA Architectures, Reasoning, and Spatial Understanding

| No. | Title | Authors | Affiliation / Team | Venue / Status | Date | Link |
|---:|---|---|---|---|---|---|
| V1 | CogACT: A Foundational Vision-Language-Action Model for Synergizing Cognition and Action in Robotic Manipulation | Qixiu Li, Yaobo Liang, Zeyu Wang, Lin Luo et al. | Microsoft Research Asia / Tsinghua University / USTC / CAS | arXiv | 2024-11-29 | https://arxiv.org/abs/2411.19650 |
| V2 | Diffusion-VLA: Generalizable and Interpretable Robot Foundation Model via Self-Generated Reasoning | Junjie Wen, Minjie Zhu, Yichen Zhu, Zhibin Tang et al. | Midea Group / Shanghai and collaborators | ICML | 2024-12-04 | https://arxiv.org/abs/2412.03293 |
| V3 | CoT-VLA: Visual Chain-of-Thought Reasoning for Vision-Language-Action Models | Qingqing Zhao, Yao Lu, Moo Jin Kim, Zipeng Fu et al. | NVIDIA / Stanford University | CVPR | 2025-06 | https://openaccess.thecvf.com/content/CVPR2025/html/Zhao_CoT-VLA_Visual_Chain-of-Thought_Reasoning_for_Vision-Language-Action_Models_CVPR_2025_paper.html |
| V4 | SpatialVLA: Exploring Spatial Representations for Visual-Language-Action Model | Delin Qu, Haoming Song, Qizhi Chen, Yuanqi Yao et al. | Multi-institution collaborators | RSS | 2025-01-27 | https://arxiv.org/abs/2501.15830 |
| V5 | RoboMamba: Efficient Vision-Language-Action Model for Robotic Reasoning and Manipulation | Jiaming Liu, Mengzhen Liu, Zhenyu Wang, Pengju An et al. | Multi-institution collaborators | NeurIPS | 2024-06-06 | https://arxiv.org/abs/2406.04339 |
| V6 | RoboBrain: A Unified Brain Model for Robotic Manipulation from Abstract to Concrete | Yuheng Ji, Huajie Tan, Jiayu Shi, Xiaoshuai Hao et al. | Multi-institution collaborators | arXiv | 2025-02-28 | https://arxiv.org/abs/2502.21257 |
| V7 | Gemini Robotics: Bringing AI into the Physical World | Gemini Robotics Team, Saminda Abeyruwan, Joshua Ainslie, Jean-Baptiste Alayrac et al. | Google DeepMind | arXiv | 2025-03-25 | https://arxiv.org/abs/2503.20020 |
| V8 | PhysVLM: Enabling Visual Language Models to Understand Robotic Physical Reachability | Weijie Zhou, Manli Tao, Chaoyang Zhao, Haiyun Guo et al. | Beijing Jiaotong University / CAS / ObjectEye / Guangdong Polytechnic Normal University | CVPR | 2025 | https://openaccess.thecvf.com/content/CVPR2025/papers/Zhou_PhysVLM_Enabling_Visual_Language_Models_to_Understand_Robotic_Physical_Reachability_CVPR_2025_paper.pdf |

## 6. World Models and Interactive Simulation

| No. | Title | Authors | Affiliation / Team | Venue / Status | Date | Link |
|---:|---|---|---|---|---|---|
| W1 | The free-energy principle: a unified brain theory? | Karl Friston | University College London / Wellcome Trust Centre for Neuroimaging | Nature Reviews Neuroscience | 2010 | https://www.nature.com/articles/nrn2787 |
| W2 | DreamerV3: Mastering Diverse Control Tasks through World Models | Danijar Hafner, Jurgis Pasukonis, Jimmy Ba, Timothy Lillicrap | Google DeepMind / University of Toronto | Nature | 2025-04-02 | https://www.nature.com/articles/s41586-025-08744-2 |
| W3 | Training Agents Inside of Scalable World Models | Danijar Hafner, Wilson Yan, Timothy Lillicrap | Google DeepMind | arXiv | 2025-09-29 | https://arxiv.org/abs/2509.24527 |
| W4 | Genie: Generative Interactive Environments | Jake Bruce, Michael Dennis, Ashley Edwards, Jack Parker-Holder et al. | Google DeepMind | ICML / arXiv | 2024-02-23 | https://deepmind.google/research/publications/genie-generative-interactive-environments/ |
| W5 | Genie 2: A large-scale foundation world model | Genie 2 team | Google DeepMind | Technical blog / research demo | 2024-12 | https://deepmind.google/discover/blog/genie-2-a-large-scale-foundation-world-model/ |
| W6 | Pandora: Towards General World Model with Natural Language Actions and Video States | Jiannan Xiang, Guangyi Liu, Yi Gu, Qiyue Gao et al. | Maitrix / multi-institution collaborators | arXiv | 2024-06-12 | https://arxiv.org/abs/2406.09455 |
| W7 | LLMR: Real-time Prompting of Interactive Worlds using Large Language Models | Fernanda De La Torre, Cathy Mengying Fang, Han Huang, Andrzej Banburski-Fahey et al. | Microsoft and collaborators | CHI | 2023-09-21 | https://arxiv.org/abs/2309.12276 |
| W8 | Learning Interactive Real-World Simulators | Sherry Yang, Yilun Du, Kamyar Ghasemipour, Jonathan Tompson et al. | UC Berkeley / Google DeepMind and collaborators | ICLR / arXiv | 2023-10-09 | https://arxiv.org/abs/2310.06114 |
| W9 | GAIA-1: A Generative World Model for Autonomous Driving | Anthony Hu, Lloyd Russell, Hudson Yeo, Zak Murez et al. | Wayve | Technical report / arXiv | 2023-09-29 | https://arxiv.org/abs/2309.17080 |
| W10 | DreamGen: Unlocking Generalization in Robot Learning through Video World Models | Joel Jang, Seonghyeon Ye, Zongyu Lin, Jiannan Xiang et al. | GEAR Lab, NVIDIA Research | arXiv | 2025-05-19 | https://arxiv.org/abs/2505.12705 |
| W11 | World Simulation with Video Foundation Models for Physical AI | NVIDIA, Arslan Ali, Junjie Bai, Maciej Bala, Yogesh Balaji et al. | NVIDIA | arXiv / NVIDIA Research | 2025-10-28 | https://arxiv.org/abs/2511.00062 |
| W12 | World Action Models are Zero-shot Policies | Seonghyeon Ye, Yunhao Ge, Kaiyuan Zheng, Shenyuan Gao et al. | NVIDIA and collaborators | arXiv | 2026-02-17 | https://arxiv.org/abs/2602.15922 |

## 7. Perception, Reachability, Safety, and Evaluation

| No. | Title | Authors | Affiliation / Team | Venue / Status | Date | Link |
|---:|---|---|---|---|---|---|
| E1 | SAM-6D: Segment Anything Model Meets Zero-Shot 6D Object Pose Estimation | Jiehong Lin, Lihua Liu, Dekun Lu, Kui Jia | CUHK-Shenzhen / South China University of Technology | CVPR | 2023-11-27 | https://arxiv.org/abs/2311.15707 |
| E2 | Code-as-Monitor: Constraint-aware Visual Programming for Reactive and Proactive Robotic Failure Detection | Enshen Zhou, Qi Su, Cheng Chi, Zhizheng Zhang et al. | Beihang University / Peking University / BAAI / GalBot | CVPR | 2024-12-05 | https://arxiv.org/abs/2412.04455 |
| E3 | RoboArena: Distributed Real-World Evaluation of Generalist Robot Policies | Pranav Atreya, Karl Pertsch, Tony Lee, Moo Jin Kim et al. | Multi-institution collaborators | arXiv | 2025-06-22 | https://arxiv.org/abs/2506.18123 |
| E4 | LIBERO: Benchmarking Knowledge Transfer for Lifelong Robot Learning | Bo Liu, Yifeng Zhu, Chongkai Gao, Yihao Feng et al. | UT Austin / collaborators | NeurIPS Datasets and Benchmarks / arXiv | 2023-06-05 | https://arxiv.org/abs/2306.03310 |
| E5 | Why learn if you can infer? Robot arm control with Hierarchical Active Inference | Corrado Pezzato, Christopher L. Buckley, Tim Verbelen | VERSES AI | NeurIPS Workshop | 2024 | https://neurips.cc/virtual/2024/99477 |

## 8. Multi-Agent, Digital Twin, Healthcare, and Sensor Foundation Models

| No. | Title | Authors | Affiliation / Team | Venue / Status | Date | Link |
|---:|---|---|---|---|---|---|
| A1 | ProAgent: Building Proactive Cooperative Agents with Large Language Models | Ceyao Zhang, Kaijie Yang, Siyi Hu, Zihao Wang et al. | CUHK-Shenzhen / PKU / CAS / RELER / AAII / UTS / BIGAI | AAAI | 2024-03-24 | https://ojs.aaai.org/index.php/AAAI/article/view/29710 |
| A2 | REVECA: Adaptive Planning and Trajectory-Based Validation in Cooperative Language Agents Using Information Relevance and Relative Proximity | SeungWon Seo, SeongRae Noh, Junhyeok Lee, SooBin Lim, Won Hee Lee, HyeongYeop Kang | Kyung Hee University / Korea University | AAAI | 2025-04-11 | https://ojs.aaai.org/index.php/AAAI/article/view/34496 |
| A3 | On the Resilience of LLM-Based Multi-Agent Collaboration with Faulty Agents | Jen-Tse Huang, Jiaxu Zhou, Tailin Jin, Xuhui Zhou et al. | CUHK / Tsinghua / CMU / PKU / Renmin University / CUHK-Shenzhen | ICML | 2025-07 | https://proceedings.mlr.press/v267/huang25ay.html |
| A4 | Synergistic Multi-Agent Framework with Trajectory Learning for Knowledge-Intensive Tasks | Shengbin Yue, Siyuan Wang, Wei Chen, Xuanjing Huang, Zhongyu Wei | Fudan University / USC / Huazhong University of Science and Technology | AAAI | 2025-04-11 | https://ojs.aaai.org/index.php/AAAI/article/view/34772 |
| A5 | BotSim: LLM-Powered Malicious Social Botnet Simulation | Boyu Qiao, Kun Li, Wei Zhou, Shilong Li, Qianqian Lu, Songlin Hu | Institute of Information Engineering, CAS / University of Chinese Academy of Sciences | AAAI | 2025-04-11 | https://ojs.aaai.org/index.php/AAAI/article/view/33575 |
| A6 | Debate on Graph: A Flexible and Reliable Reasoning Framework for Large Language Models | Jie Ma, Zhitao Gao, Qi Chai, Wangchun Sun et al. | Xi'an Jiaotong University / HKUST Guangzhou / Northwestern Polytechnical University / Shandong University | AAAI | 2025-04-11 | https://ojs.aaai.org/index.php/AAAI/article/view/34658 |
| A7 | RADiT: Resource Allocation in Digital Twin-Driven UAV-Aided Internet of Vehicle Networks | Bishmita Hazarika, Keshav Singh, Chih-Peng Li, Anke Schmeink, Kim Fung Tsang | National Sun Yat-sen University / City University of Hong Kong and collaborators | IEEE JSAC | 2023-08 | https://ieeexplore.ieee.org/document/10234627 |
| A8 | Foundation Models for Generalist Medical Artificial Intelligence | Michael Moor, Oishi Banerjee, Zahra Shakeri Hossein Abad et al. | Harvard University / Stanford University and collaborators | Nature | 2023 | https://www.nature.com/articles/s41586-023-05881-4 |
| A9 | From Wearable Sensor Data to Digital Biomarker Development | Paola Daniore, Vasileios Nittas, Christina Haag, Jürgen Bernard et al. | University of Zurich and collaborators | npj Digital Medicine | 2024-06-18 | https://www.nature.com/articles/s41746-024-01151-3 |
| A10 | A Multimodal Sleep Foundation Model for Disease Prediction | Rahul Thapa, Magnus Ruud Kjaer, Bryan He, Ian Covert et al. | Stanford University and collaborators | Nature Medicine | 2026-01-06 | https://www.nature.com/articles/s41591-025-04133-4 |

## 9. CSV 포함 여부 요약

| Group | Count | Notes |
|---|---:|---|
| CSV 원문에 포함된 논문 | 37 | `Physical AI papers you should read.csv` 기준 |
| 추가 수집 논문/자료 | 22 | survey, generalist agent, robot data, evaluation, world model 보강 |
| 총 정리 항목 | 59 | 긴 저자 목록은 대표 저자 중심 표기 |