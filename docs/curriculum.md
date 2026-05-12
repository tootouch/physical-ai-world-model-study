# Physical AI & World Model 스터디 커리큘럼

작성일: 2026-05-08  
대상: DSBA 연구실 / 산업공학과 기반 AI 스터디  
구성: 15주, 주 2회 발표, 총 30회 발표

---

## 0. 문서 사용법

이 커리큘럼은 논문 목록만 나열하는 문서가 아니라, 아래 문서들과 함께 읽히도록 설계한 스터디 운영 문서이다.

| 문서 | 역할 |
|---|---|
| [metadata.md](metadata.md) | 논문 제목, 저자, 소속, venue, date, link, 분류, CSV 원문 매핑을 정리한 기준 테이블 |
| [related_works.md](related_works.md) | 논문들을 직접 확인한 뒤 작성한 분야 흐름 중심의 related works 문서 |
| [corpus/extracted_reading_evidence_snippets.md](corpus/extracted_reading_evidence_snippets.md) | PDF/공식 페이지에서 추출한 abstract, contribution, limitation, conclusion 근거 스니펫 |
| [corpus/download_extract_status.md](corpus/download_extract_status.md) | 논문별 PDF/HTML 확보 및 텍스트 추출 상태 |
| [Physical AI papers you should read.csv](Physical%20AI%20papers%20you%20should%20read.csv) | 사용자가 최초 수집한 핵심 논문 목록 |

이 문서의 각 발표 항목에는 `G4`, `W11`, `A7`과 같은 논문 ID가 포함되어 있다. 논문 상세정보는 `metadata.md`에서 확인하고, 발표자는 해당 논문의 원문 또는 추출 스니펫을 기준으로 발표 내용을 구성한다.

---

## 1. 커리큘럼 설계 원칙

### 1.1 연구 주제 발굴 워크숍이 아니다

이 스터디의 목표는 15주차 말에 연구 주제를 확정하는 것이 아니다.  
대신 Physical AI와 World Model 분야의 큰 흐름, 핵심 논문, 방법론적 쟁점, 현장 적용 가능성을 읽는 능력을 만드는 데 목적이 있다.

따라서 28-30회차도 `연구 제안서 작성`이나 `주제 선정`이 아니라 다음 역할을 갖는다.

| 구간 | 역할 |
|---|---|
| 1-10회차 | 분야에 흥미를 붙이고 핵심 문제의식을 빠르게 형성 |
| 11-20회차 | VLA, robot foundation model, world model의 주요 기술축 학습 |
| 21-26회차 | evaluation, safety, digital twin, healthcare, multi-agent 등 응용/검증 관점 확장 |
| 27-28회차 | 배운 논문들을 특정 쟁점 중심으로 연결 |
| 29-30회차 | 최신 VLA, humanoid foundation model, world foundation model 자료를 끝까지 학습 |

### 1.2 초반 동기부여를 우선한다

초반 2주는 수식이나 벤치마크 중심으로 시작하지 않는다.  
대신 다음 질문으로 관심도를 먼저 만든다.

| 질문 | 의미 |
|---|---|
| 로봇이 언어 지시를 실제 행동으로 바꾸려면 무엇이 필요한가? | Physical AI의 핵심 문제 |
| VLM이 보는 것과 로봇이 할 수 있는 것은 왜 다른가? | perception-action gap |
| world model은 시뮬레이터인가, 정책인가, 아니면 둘 사이의 인터페이스인가? | world model의 역할 |
| 데이터가 많아지면 로봇도 LLM처럼 일반화되는가? | scaling hypothesis |
| 산업공학/DSBA 관점에서는 어디에서 가치를 만들 수 있는가? | 실험설계, 운영, 평가, 안전, digital twin |

### 1.3 논문 간 연결을 명시한다

각 발표는 독립적인 논문 요약이 아니라, 이전 발표와 다음 발표를 연결해야 한다.  
발표자는 다음 세 가지 연결 중 최소 하나를 포함한다.

| 연결 방식 | 예시 |
|---|---|
| 문제 연결 | RT-2의 언어-행동 일반화 한계가 Open X-Embodiment의 데이터 스케일링 문제로 이어짐 |
| 방법 연결 | Diffusion Policy의 action generation 관점이 Diffusion-VLA, RDT, pi0로 확장됨 |
| 적용 연결 | Cosmos, RADiT, digital twin 논문은 world model이 현장 운영/검증과 만나는 지점을 보여줌 |

---

## 2. 전체 흐름

| 주차 | 큰 질문 | 발표 1 | 발표 2 |
|---|---|---|---|
| 1 | 이 분야는 왜 지금 중요한가? | 1. Landscape | 2. Motivation & Failure Modes |
| 2 | 언어/멀티모달 모델은 어떻게 로봇으로 넘어왔나? | 3. Generalist Agent Origins | 4. Multimodal Prompting to VLA |
| 3 | 로봇 데이터 스케일링은 가능한가? | 5. RT-1/RT-2 | 6. Open X-Embodiment |
| 4 | open robot policy는 어떤 방향으로 발전했나? | 7. DROID/ALOHA | 8. Octo/OpenVLA |
| 5 | embodiment 차이를 넘을 수 있는가? | 9. Cross-Embodiment & Continual VLA | 10. Diffusion Visuomotor Policies |
| 6 | foundation policy는 어떤 action representation을 쓰는가? | 11. RDT/pi0/pi0.5 | 12. Humanoid Foundation Models |
| 7 | VLA는 어떻게 reasoning을 넣는가? | 13. VLA Architecture | 14. Visual/Spatial Reasoning |
| 8 | 물리적 grounding은 어떻게 평가하고 보완할까? | 15. Physical Grounding | 16. World Model Foundations |
| 9 | world model은 어디까지 일반화되는가? | 17. Generative Interactive Worlds | 18. Real-World Simulators |
| 10 | world model은 policy 학습을 대체할 수 있는가? | 19. Synthetic Data & Sim2Real | 20. World Model as Zero-Shot Policy |
| 11 | 안전과 평가는 어떻게 설계해야 하는가? | 21. Monitoring & Active Inference | 22. Evaluation Protocols |
| 12 | 현장 적용은 어디에서 시작되는가? | 23. Digital Twin & Operations | 24. Healthcare/Sensor Foundation Models |
| 13 | 여러 agent가 함께 행동하면 무엇이 달라지는가? | 25. Cooperative Multi-Agent AI | 26. Multi-Agent Reliability |
| 14 | 분야의 핵심 긴장은 무엇인가? | 27. Data Scaling vs Model Scaling | 28. Physical Reasoning & Safety Gap |
| 15 | 최근 트렌드는 어디로 가고 있는가? | 29. Recent VLA & Humanoid Foundation Models | 30. Recent World Foundation Models for Physical AI |

---

## 3. Week별 발표 구성 상세

아래 구성은 각 주차 발표자가 발표 자료를 만들 때 사용할 수 있는 슬라이드 목차 초안이다.  
각 발표는 `문제 배경 -> 핵심 논문 설명 -> 방법/결과 비교 -> 한계와 다음 주차 연결` 순서를 기본으로 한다.

| 주차 | 발표 1 구성 | 발표 2 구성 |
|---|---|---|
| 1 | `1. Physical AI & World Model Landscape`<br>- Physical AI, embodied AI, VLA, robot foundation model, world model, digital twin의 용어 차이를 먼저 정리한다.<br>- `S1-S5` survey를 기준으로 분야를 `robot policy`, `world model`, `evaluation/safety`, `industrial application` 축으로 나눈다.<br>- 이후 15주 동안 어떤 논문들이 어떤 흐름으로 연결되는지 전체 map을 제시한다. | `2. Motivation & Failure Modes`<br>- Gemini Robotics, pi0.5, Cosmos, DreamZero 등 최신 사례를 통해 이 분야가 왜 빠르게 커지고 있는지 보여준다.<br>- VLM은 이미지를 이해하지만 로봇은 접촉, 힘, 시간, 실패 복구까지 다뤄야 한다는 차이를 설명한다.<br>- perception-action gap, sim2real gap, safety gap을 사례 중심으로 정리한다. |
| 2 | `3. Generalist Agent Origins`<br>- Gato가 제안한 multi-modal, multi-task generalist agent의 아이디어를 설명한다.<br>- SayCan에서 LLM이 high-level planning을 담당하고 affordance/value가 action feasibility를 보완하는 구조를 설명한다.<br>- 이후 VLA 연구가 `언어 이해`와 `행동 가능성`을 어떻게 결합하려 했는지 연결한다. | `4. Multimodal Prompting to VLA`<br>- VIMA의 multimodal prompting이 task specification을 어떻게 일반화했는지 설명한다.<br>- PaLM-E가 embodied multimodal language model로서 sensor input과 language reasoning을 연결한 방식을 정리한다.<br>- RT-2가 web-scale VLM 지식을 robot action token으로 전이하려 한 지점을 강조한다. |
| 3 | `5. RT-1/RT-2 and Action Tokenization`<br>- RT-1의 robot trajectory dataset, transformer policy, action discretization 구조를 설명한다.<br>- RT-2가 VLM pretraining과 robot action fine-tuning을 결합한 방식을 RT-1과 비교한다.<br>- action을 token처럼 다루는 접근의 장점과 continuous control에서의 한계를 정리한다. | `6. Open X-Embodiment and Data Scaling`<br>- Open X-Embodiment가 여러 로봇, 여러 기관, 여러 task 데이터를 모으는 방식과 의의를 설명한다.<br>- embodiment diversity가 generalist policy 학습에 주는 이점과 noise/heterogeneity 문제를 함께 다룬다.<br>- robot data scaling이 LLM의 web-scale scaling과 왜 다른지 비교한다. |
| 4 | `7. DROID/ALOHA: Data Collection and Teleoperation`<br>- DROID가 in-the-wild robot manipulation data를 어떻게 수집했는지 설명한다.<br>- ALOHA/ACT의 low-cost teleoperation, bimanual manipulation, imitation learning 구조를 정리한다.<br>- 데이터 수집 비용, demonstrator 품질, hardware accessibility가 로봇 연구 확산에 주는 영향을 설명한다. | `8. Octo/OpenVLA: Open Generalist Policies`<br>- Octo가 여러 embodiment와 task를 다루는 open generalist robot policy로서 어떤 설계를 택했는지 설명한다.<br>- OpenVLA의 open-source VLA 구조, training recipe, evaluation setting을 정리한다.<br>- closed model 대비 open model의 장점, 재현성, 한계, 산업 적용 가능성을 비교한다. |
| 5 | `9. Cross-Embodiment & Continual VLA`<br>- X-VLA가 다른 robot embodiment 사이에서 어떤 representation을 공유하려 하는지 설명한다.<br>- Continual VLA가 sequential task learning과 catastrophic forgetting 문제를 어떻게 다루는지 정리한다.<br>- 로봇이 바뀌어도 유지되는 지식과 embodiment-specific하게 다시 배워야 하는 지식을 구분한다. | `10. Diffusion Visuomotor Policies`<br>- Diffusion Policy가 action sequence를 denoising process로 생성하는 핵심 아이디어를 설명한다.<br>- 3D Diffusion Policy가 point cloud/3D representation을 활용해 spatial manipulation을 다루는 방식을 정리한다.<br>- diffusion 기반 policy가 multimodal behavior, long-horizon action, uncertainty 표현에 어떤 장점을 갖는지 설명한다. |
| 6 | `11. RDT/pi0/pi0.5`<br>- RDT의 diffusion transformer 구조와 robot trajectory modeling 방식을 설명한다.<br>- pi0와 pi0.5의 vision-language-action policy, action generation, data mixture 전략을 비교한다.<br>- RT 계열, Diffusion Policy 계열, pi 계열이 action representation을 어떻게 다르게 보는지 정리한다. | `12. Humanoid Foundation Models`<br>- ASAP이 humanoid whole-body control과 foundation policy 관점에서 어떤 문제를 다루는지 설명한다.<br>- Gemini Robotics가 언어, 시각, 행동을 연결해 mobile manipulation과 dexterous task로 확장되는 흐름을 정리한다.<br>- humanoid foundation model이 기존 manipulation policy보다 더 어려운 이유를 balance, contact, locomotion, recovery 관점에서 설명한다. |
| 7 | `13. VLA Architecture`<br>- CogACT가 cognition과 action을 분리하거나 연결하는 방식을 설명한다.<br>- Diffusion-VLA가 VLA에 diffusion action head를 결합하는 이유를 정리한다.<br>- VLA에서 backbone, policy head, action expert, tokenizer가 각각 어떤 역할을 하는지 비교한다. | `14. Visual/Spatial Reasoning in VLA`<br>- CoT-VLA가 reasoning trace를 action decision에 연결하려는 방식을 설명한다.<br>- SpatialVLA, RoboMamba, RoboBrain이 spatial representation, memory, embodied reasoning을 어떻게 강화하는지 정리한다.<br>- reasoning이 실제 성능 향상인지, 설명 가능성 향상인지, benchmark artifact인지 구분해서 본다. |
| 8 | `15. Physical Grounding and Object Pose`<br>- SAM-6D를 통해 object pose estimation과 6D understanding이 manipulation에서 왜 중요한지 설명한다.<br>- PhysVLM을 통해 VLM의 physical commonsense와 실제 물리 추론 능력을 평가하는 방식을 정리한다.<br>- pose, affordance, contact, stability 같은 물리 개념이 VLA 성능과 어떻게 연결되는지 설명한다. | `16. World Model Foundations`<br>- Free Energy Principle을 통해 perception-action loop와 predictive processing 관점을 소개한다.<br>- DreamerV3/Dreamer4의 latent dynamics, imagination rollout, actor-critic learning 구조를 설명한다.<br>- world model이 environment simulator, representation learner, planner 중 어떤 역할을 하는지 구분한다. |
| 9 | `17. Generative Interactive Worlds`<br>- Genie와 Genie 2가 video data에서 action-controllable environment를 학습하려는 방식을 설명한다.<br>- Pandora와 LLMR을 통해 language, video generation, interactive simulation이 결합되는 흐름을 정리한다.<br>- 생성된 world가 실제 agent 학습에 쓰이려면 temporal consistency, controllability, physical plausibility가 필요함을 설명한다. | `18. Real-World Simulators and Driving World Models`<br>- UniSim이 real-world interaction simulator를 지향하는 방식과 기존 simulator와의 차이를 설명한다.<br>- GAIA-1을 통해 autonomous driving world model이 scenario generation과 planning에 어떻게 쓰이는지 정리한다.<br>- driving world model과 manipulation world model의 데이터 구조, safety requirement, evaluation 차이를 비교한다. |
| 10 | `19. Synthetic Data and Sim2Real`<br>- DreamGen이 robot learning을 위한 generative data pipeline을 어떻게 구성하는지 설명한다.<br>- Cosmos가 world foundation model platform으로서 video generation, synthetic data, simulation을 어떻게 연결하는지 정리한다.<br>- synthetic data가 real robot data를 대체하는지, 보완하는지, 또는 curriculum을 만드는지 비교한다. | `20. World Model as Zero-Shot Policy`<br>- DreamZero가 world model의 내부 예측 능력을 zero-shot robot policy로 활용하려는 아이디어를 설명한다.<br>- 별도 policy learning 없이 world model을 planning/action selection에 쓰는 접근의 장점과 위험을 정리한다.<br>- world model 기반 policy가 실제 deployment로 가려면 필요한 verification, safety, feedback loop를 설명한다. |
| 11 | `21. Monitoring and Active Inference`<br>- Code-as-Monitor가 LLM/VLM을 이용해 robot execution failure를 감시하는 방식을 설명한다.<br>- Active Inference survey를 통해 agent가 uncertainty를 줄이기 위해 행동한다는 관점을 소개한다.<br>- monitor, controller, planner, recovery policy가 safety architecture 안에서 어떻게 나뉘는지 정리한다. | `22. Evaluation Protocols for Generalist Robots`<br>- RoboArena가 generalist robot policy를 어떤 방식으로 비교 평가하는지 설명한다.<br>- LIBERO를 통해 lifelong learning, task suite, benchmark design의 중요성을 정리한다.<br>- benchmark score, real-world success, robustness, safety를 따로 평가해야 하는 이유를 설명한다. |
| 12 | `23. Digital Twin and Industrial Operations`<br>- RADiT를 통해 logistics/digital twin에서 AI가 어떤 운영 의사결정 문제와 만나는지 설명한다.<br>- Cosmos를 산업 simulation, scenario generation, synthetic data 관점에서 다시 읽는다.<br>- traditional digital twin과 generative world model의 차이와 결합 가능성을 정리한다. | `24. Healthcare and Sensor Foundation Models`<br>- GMAI를 통해 generalist medical AI가 multimodal clinical data를 어떻게 다루는지 설명한다.<br>- Wearable biomarker foundation model과 SleepFM을 통해 sensor time-series foundation model 흐름을 정리한다.<br>- 로봇이 아니더라도 physical world data를 모델링한다는 점에서 Physical AI와 연결되는 지점을 설명한다. |
| 13 | `25. Cooperative Multi-Agent AI`<br>- ProAgent가 multi-agent cooperation에서 planning, communication, role assignment를 어떻게 다루는지 설명한다.<br>- REVECA를 통해 embodied multi-agent collaboration과 environment understanding의 연결을 정리한다.<br>- single-agent policy와 multi-agent system의 평가 기준이 왜 달라지는지 설명한다. | `26. Multi-Agent Reliability and Safety Reasoning`<br>- Resilience, SMART, BotSim을 통해 multi-agent robustness와 simulation-based evaluation을 설명한다.<br>- Debate on Graph를 통해 여러 agent의 reasoning/debate 구조가 decision quality에 주는 영향을 정리한다.<br>- multi-agent AI가 physical system에 들어갈 때 coordination failure와 cascading risk가 왜 중요한지 설명한다. |
| 14 | `27. Data Scaling vs Model Scaling`<br>- Open X-Embodiment, OpenVLA, pi0.5를 묶어 robot data scaling의 실제 병목을 정리한다.<br>- DreamGen과 Cosmos를 통해 synthetic data scaling이 real-world data scarcity를 어떻게 보완하는지 설명한다.<br>- model size, data diversity, embodiment coverage, evaluation coverage 중 무엇이 성능을 좌우하는지 비교한다. | `28. Physical Reasoning and Safety Gap`<br>- CoT-VLA, SpatialVLA, PhysVLM을 묶어 reasoning과 physical grounding의 현재 수준을 설명한다.<br>- SAM-6D, Code-as-Monitor, RoboArena를 통해 perception, monitoring, evaluation layer의 안전 문제를 정리한다.<br>- benchmark에서 잘하는 모델이 실제 물리 세계에서 실패하는 이유를 distribution shift와 unobserved risk 관점에서 설명한다. |
| 15 | `29. Recent VLA & Humanoid Foundation Models`<br>- Gemini Robotics, pi0.5, ASAP을 기준점으로 최신 VLA/humanoid foundation model 흐름을 정리한다.<br>- GR00T 계열과 PhysicalAgent를 통해 humanoid, closed-loop correction, agentic robot execution 방향을 공부한다.<br>- 최신 모델들이 reasoning, recovery, dexterity, deployment stack을 어떻게 강조하는지 비교한다. | `30. Recent World Foundation Models for Physical AI`<br>- Cosmos와 DreamZero를 기준점으로 world foundation model이 robot learning에 연결되는 방식을 정리한다.<br>- Cosmos Predict/Transfer, Cosmos 3, PhysWorld를 통해 video world model, physical world model, synthetic data engine의 최신 흐름을 공부한다.<br>- world model이 data generation, policy evaluation, zero-shot control, deployment validation 중 어디까지 담당할 수 있는지 설명한다. |

---

## 4. 30회 발표 상세 커리큘럼

### Week 1. 분야를 먼저 좋아하게 만들기

| 발표 | 제목 | 핵심 논문/자료 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 1 | Physical AI & World Model Landscape | `S1-S5`, [related works](related_works.md) | Physical AI, VLA, robot foundation model, world model, digital twin이 어떤 관계인지 큰 지도를 만든다. | Physical AI는 robotics의 새 이름인가, 아니면 foundation model 이후의 새로운 연구 프레임인가? |
| 2 | Motivation & Failure Modes | `V7`, `P6`, `P5`, `W11`, `W12`, `E3` | humanoid, robot policy, video world model 사례를 통해 왜 기존 AI만으로는 물리 세계 행동이 어려운지 이해한다. | 언어모델의 generalization과 로봇의 generalization은 무엇이 다른가? |

추천 운영 방식: 1회차는 논문 발표보다 field map 발표에 가깝게 운영한다. 2회차는 데모 영상, 실패 사례, benchmark gap을 중심으로 구성하면 초반 몰입도가 높다.

---

### Week 2. Generalist Agent에서 VLA로

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 3 | Generalist Agent Origins | `G1` Gato, `G2` SayCan | 하나의 모델이 여러 task를 처리한다는 generalist agent 관점이 embodied AI로 넘어온 과정을 이해한다. | Gato의 generalist framing과 SayCan의 language-to-action decomposition은 이후 VLA에 어떤 영향을 주었나? |
| 4 | Multimodal Prompting to VLA | `G3` VIMA, `G5` PaLM-E, `G6` RT-2 | multimodal prompting, embodied VLM, vision-language-action model의 연결을 정리한다. | VLM이 action까지 출력하려면 어떤 representation 변화가 필요한가? |

연결 포인트: Week 2는 LLM/VLM 기반 지능이 실제 행동으로 넘어가며 생기는 `symbol grounding`, `affordance`, `action tokenization` 문제를 잡는 주간이다.

---

### Week 3. Robot Data Scaling의 출발점

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 5 | RT-1/RT-2 and Action Tokenization | `G4` RT-1, `G6` RT-2 | 대규모 robot trajectory와 web-scale VLM 지식이 어떻게 결합되는지 비교한다. | RT-2는 정말 vision-language model의 지식을 robot action으로 전이했는가? |
| 6 | Open X-Embodiment and Data Scaling | `D1` Open X-Embodiment | cross-robot dataset, embodiment diversity, data mixture의 의미를 이해한다. | robot data scaling은 LLM의 web-scale data scaling과 같은 방식으로 작동할까? |

연결 포인트: 5회차는 모델 스케일링, 6회차는 데이터 스케일링을 다룬다. 이후 Octo, OpenVLA, pi0, Cosmos를 읽을 때 반복해서 돌아올 기준점이다.

---

### Week 4. Open Robot Policy와 데이터 수집

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 7 | DROID/ALOHA: Data Collection and Teleoperation | `D2` DROID, `D3` ALOHA/ACT | real-world robot data collection과 low-cost teleoperation이 왜 중요한지 이해한다. | 좋은 robot dataset은 크기보다 다양성, 품질, task coverage 중 무엇이 더 중요한가? |
| 8 | Octo/OpenVLA: Open Generalist Policies | `D4` Octo, `D5` OpenVLA | open-source generalist robot policy의 설계와 한계를 비교한다. | open VLA는 closed industrial VLA와 어떤 방식으로 경쟁하거나 보완할 수 있을까? |

DSBA 관점: 데이터 수집 비용, task sampling, evaluation design, distribution shift는 산업공학적 실험설계와 매우 잘 맞는 문제다.

---

### Week 5. Embodiment Gap과 Diffusion Policy

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 9 | Cross-Embodiment & Continual VLA | `D6` X-VLA, `D7` Continual VLA | embodiment 차이를 representation과 continual learning 관점에서 이해한다. | 로봇이 바뀌어도 유지되는 지식은 무엇이고, 다시 배워야 하는 것은 무엇인가? |
| 10 | Diffusion Visuomotor Policies | `P1` Diffusion Policy, `P2` 3D Diffusion Policy | diffusion 기반 action generation이 기존 behavior cloning과 어떻게 다른지 이해한다. | diffusion policy가 multimodal action distribution을 잘 다루는 이유는 무엇인가? |

연결 포인트: 9회차는 `어떤 지식이 로봇 간 공유되는가`, 10회차는 `행동을 어떤 확률모델로 생성하는가`를 다룬다.

---

### Week 6. Robot Foundation Policy의 현재

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 11 | RDT/pi0/pi0.5 | `P3` RDT, `P4` pi0, `P5` pi0.5 | diffusion transformer, flow matching, vision-language-action policy의 최신 흐름을 정리한다. | pi0 계열은 RT 계열과 비교해 action generation을 어떻게 다르게 본 것인가? |
| 12 | Humanoid Foundation Models | `P6` ASAP, `V7` Gemini Robotics | humanoid, mobile manipulation, dexterous control에서 foundation model이 어떤 역할을 하는지 이해한다. | humanoid generalist policy는 manipulation policy와 같은 문제인가, 다른 문제인가? |

운영 팁: 11회차는 수식보다 architecture, training data, action representation, evaluation task를 비교하는 데 집중한다.

---

### Week 7. VLA Architecture와 Reasoning

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 13 | VLA Architecture: Policy Head, Diffusion Head, Action Expert | `V1` CogACT, `V2` Diffusion-VLA | VLA 모델이 perception-language-reasoning-action을 어떤 모듈로 나누는지 비교한다. | action expert를 별도로 두는 것은 generalist model의 장점과 충돌하는가? |
| 14 | Visual/Spatial Reasoning in VLA | `V3` CoT-VLA, `V4` SpatialVLA, `V5` RoboMamba, `V6` RoboBrain | reasoning token, spatial representation, embodied memory가 로봇 행동에 주는 의미를 이해한다. | chain-of-thought는 robot action에서 실제 성능 향상을 주는가, 아니면 설명 가능성만 높이는가? |

연결 포인트: Week 7은 `VLA가 그냥 큰 VLM인가?`라는 질문에 답하는 주간이다. action head, spatial grounding, reasoning trace가 핵심이다.

---

### Week 8. Physical Grounding과 World Model 이론

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 15 | Physical Grounding and Object Pose | `E1` SAM-6D, `V8` PhysVLM | object pose, affordance, physical commonsense가 VLA/robot policy에서 왜 중요한지 이해한다. | physical reasoning benchmark는 실제 로봇 성능을 얼마나 설명하는가? |
| 16 | World Model Foundations | `W1` Free Energy Principle, `W2` DreamerV3, `W3` Dreamer4 | world model의 이론적 기원과 latent dynamics 기반 RL의 핵심을 이해한다. | world model은 environment model인가, planning module인가, 아니면 representation learning인가? |

연결 포인트: 15회차는 물리 세계를 `정확히 인식하는 문제`, 16회차는 물리 세계를 `예측 가능한 latent dynamics로 모델링하는 문제`를 다룬다.

---

### Week 9. Generative World Model과 Interactive Simulation

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 17 | Generative Interactive Worlds | `W4` Genie, `W5` Genie 2, `W6` Pandora, `W7` LLMR | video generative model이 controllable environment와 interactive simulator로 확장되는 흐름을 이해한다. | 인터넷 비디오만으로 action-controllable world model을 만들 수 있는가? |
| 18 | Real-World Simulators and Driving World Models | `W8` UniSim, `W9` GAIA-1 | real-world interaction simulator와 autonomous driving world model을 비교한다. | driving world model의 성공 조건은 manipulation world model과 무엇이 다른가? |

DSBA 관점: simulation은 optimization, scheduling, logistics, manufacturing, autonomous mobility와 직접 연결된다. 단, 생성 모델의 그럴듯함과 의사결정 신뢰성은 분리해서 봐야 한다.

---

### Week 10. Synthetic Data, Sim2Real, Zero-Shot Policy

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 19 | Synthetic Data and Sim2Real | `W10` DreamGen, `W11` Cosmos | world model이 robot training data generator, scenario generator, policy evaluator로 쓰이는 방식을 이해한다. | synthetic data는 real robot data를 대체할 수 있는가, 아니면 보완재인가? |
| 20 | World Model as Zero-Shot Policy | `W12` DreamZero | world model 내부 지식만으로 zero-shot robot policy를 구성하려는 접근을 이해한다. | world model에서 policy가 emergence하는가, 아니면 별도 policy learning이 여전히 필수인가? |

연결 포인트: 19회차는 world model의 `data engine` 역할, 20회차는 `policy engine` 역할을 비교한다.

---

### Week 11. Evaluation, Monitoring, Safety

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 21 | Monitoring and Active Inference | `E2` Code-as-Monitor, `E5` Active Inference Survey | robot failure monitoring과 active inference 기반 control/safety 관점을 연결한다. | LLM/VLM 기반 monitor는 실제 safety layer로 충분한가? |
| 22 | Evaluation Protocols for Generalist Robots | `E3` RoboArena, `E4` LIBERO, `D7` Continual VLA | benchmark, lifelong learning, generalist policy evaluation의 문제를 정리한다. | generalist robot policy의 성능은 어떤 protocol로 평가해야 공정한가? |

운영 팁: 이 주차는 논문 성능표를 외우는 것보다 evaluation design의 허점을 찾는 방식으로 진행하면 좋다.

---

### Week 12. 현장 적용: Digital Twin, Healthcare, Sensor AI

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 23 | Digital Twin and Industrial Operations | `A7` RADiT, `W11` Cosmos | digital twin, operations, logistics, industrial simulation에서 Physical AI/World Model이 어떻게 쓰일 수 있는지 본다. | 생성형 world model과 전통적 digital twin은 경쟁 관계인가, 결합 관계인가? |
| 24 | Healthcare and Sensor Foundation Models | `A8` GMAI, `A9` Wearable Biomarkers, `A10` SleepFM | physical world data가 로봇이 아닌 healthcare/sensor 영역에서 foundation model로 확장되는 방식을 이해한다. | 의료/센서 foundation model은 Physical AI 범주에 포함될 수 있는가? |

주의: `A7` RADiT는 IEEE 원문 접근이 제한되어 metadata와 공개 preview/snippet 기준으로만 정리되어 있다. 발표자는 `corpus/download_extract_status.md`의 접근 상태를 함께 명시한다.

---

### Week 13. Multi-Agent Physical AI

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 25 | Cooperative Multi-Agent AI | `A1` ProAgent, `A2` REVECA | multi-agent cooperation, embodied coordination, communication 구조를 이해한다. | multi-agent setting에서 중요한 것은 개별 agent 능력인가, coordination protocol인가? |
| 26 | Multi-Agent Reliability and Safety Reasoning | `A3` Resilience, `A4` SMART, `A5` BotSim, `A6` Debate on Graph | multi-agent robustness, simulation, safety reasoning, debate 구조를 비교한다. | 여러 agent가 토론하면 물리 세계 의사결정은 더 안전해지는가? |

DSBA 관점: multi-agent coordination은 supply chain, transportation, smart factory, scheduling, human-AI teaming과 자연스럽게 연결된다.

---

### Week 14. 핵심 긴장 1: Scaling과 Safety

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 27 | Data Scaling vs Model Scaling | `D1-D5`, `G6`, `P5`, `W10`, `W11` | robot intelligence에서 데이터 스케일, 모델 스케일, synthetic data 스케일이 각각 무엇을 해결하는지 비교한다. | 로봇 분야의 scaling law는 LLM 분야와 같은 형태로 나타날까? |
| 28 | Physical Reasoning and Safety Gap | `V3`, `V4`, `V8`, `E1`, `E2`, `E3` | VLA와 world model이 여전히 어려워하는 physical reasoning, safety, evaluation gap을 정리한다. | benchmark 성능 향상이 실제 physical safety 향상으로 이어진다고 볼 수 있는가? |

주의: 27-28회차는 전체 복습 시간이 아니다. 특정 긴장 관계를 중심으로 논문들을 다시 연결하는 synthesis session이다.

---

### Week 15. 최신 트렌드 집중 스터디

| 발표 | 제목 | 핵심 논문/자료 | 발표 목표 | 핵심 확인 포인트 |
|---|---|---|---|---|
| 29 | Recent VLA & Humanoid Foundation Models | `V7` Gemini Robotics, `P5` pi0.5, `P6` ASAP, NVIDIA Isaac GR00T N1.7/GR00T N2 preview, PhysicalAgent | VLA가 humanoid, dexterous manipulation, closed-loop correction, production-ready robot stack으로 확장되는 최신 흐름을 공부한다. | reasoning, recovery, deployment 기능이 모델 구조와 학습 데이터에서 어떻게 구현되는지 확인한다. |
| 30 | Recent World Foundation Models for Physical AI | `W11` Cosmos, `W12` DreamZero, NVIDIA Cosmos Predict/Transfer 2.5, Cosmos 3 preview, PhysWorld | world foundation model이 synthetic data, policy evaluation, zero-shot robot learning, physical reasoning으로 확장되는 최신 흐름을 공부한다. | video generation이 robot learning, policy evaluation, deployment pipeline으로 연결되는 단계를 확인한다. |

15주차도 일반 발표와 동일하게 최신 자료를 읽는 주차이다. 발표자는 기존 metadata 논문을 기준점으로 삼되, 2025-2026년에 공개된 최신 논문/공식 자료를 함께 확인한다.

| 최신 보강 자료 | 역할 |
|---|---|
| [NVIDIA Cosmos World Foundation Model Platform for Physical AI](https://research.nvidia.com/publication/2025-01_cosmos-world-foundation-model-platform-physical-ai) | `W11` Cosmos의 원 논문/플랫폼 자료 |
| [World Simulation with Video Foundation Models for Physical AI](https://research.nvidia.com/publication/2025-09_world-simulation-video-foundation-models-physical-ai) | Cosmos Predict/Transfer 2.5 등 video foundation model 기반 world simulation 흐름 |
| [NVIDIA Expands Open Model Families to Power the Next Wave of Agentic, Physical and Healthcare AI](https://nvidianews.nvidia.com/news/nvidia-expands-open-model-families-to-power-the-next-wave-of-agentic-physical-and-healthcare-ai) | 2026년 GR00T N1.7, Cosmos 3, Alpamayo 1.5 등 공식 발표 흐름 |
| [PhysicalAgent: Towards General Cognitive Robotics with Foundation World Models](https://huggingface.co/papers/2509.13903) | video generation, iterative reasoning, closed-loop execution을 결합한 최신 agentic robotics 흐름 |
| [Robot Learning from a Physical World Model](https://huggingface.co/papers/2511.07416) | generated video를 물리적 world model로 변환해 robot learning에 활용하는 최신 흐름 |

---

## 5. CSV 원문 논문 반영표

아래 표는 최초 CSV에 있던 37개 논문이 커리큘럼 어디에 반영되었는지 확인하기 위한 추적표이다. 논문 상세정보는 metadata 문서를 기준으로 한다.

| CSV 번호 | Metadata ID | 주요 반영 발표 |
|---:|---|---|
| 1 | `G4` RT-1 | 5, 27 |
| 2 | `G6` RT-2 | 4, 5, 27 |
| 3 | `G5` PaLM-E | 4 |
| 4 | `W4` Genie | 17 |
| 5 | `W3` Dreamer4 | 16 |
| 6 | `W2` DreamerV3 | 16 |
| 7 | `V7` Gemini Robotics | 2, 12, 29 |
| 8 | `W10` DreamGen | 19, 27 |
| 9 | `W11` Cosmos | 2, 19, 23, 30 |
| 10 | `W12` DreamZero | 2, 20, 30 |
| 11 | `V3` CoT-VLA | 14, 28 |
| 12 | `P6` ASAP | 2, 12 |
| 13 | `V1` CogACT | 13 |
| 14 | `D7` Continual VLA | 9, 22 |
| 15 | `W7` LLMR | 17 |
| 16 | `D5` OpenVLA | 8, 27 |
| 17 | `D6` X-VLA | 9 |
| 18 | `P4` pi0 | 11 |
| 19 | `P5` pi0.5 | 2, 11, 27, 29 |
| 20 | `E5` Active Inference Survey | 21 |
| 21 | `W1` Free Energy Principle | 16 |
| 22 | `A10` SleepFM | 24 |
| 23 | `A8` GMAI | 24 |
| 24 | `A9` Wearable Biomarkers | 24 |
| 25 | `P1` Diffusion Policy | 10 |
| 26 | `P2` 3D Diffusion Policy | 10 |
| 27 | `V2` Diffusion-VLA | 13 |
| 28 | `V8` PhysVLM | 15, 28 |
| 29 | `E2` Code-as-Monitor | 21, 28 |
| 30 | `A1` ProAgent | 25 |
| 31 | `A2` REVECA | 25 |
| 32 | `A3` Resilience of Multi-Agent Systems | 26 |
| 33 | `A4` SMART | 26 |
| 34 | `A5` BotSim | 26 |
| 35 | `A6` Debate on Graph | 26 |
| 36 | `E1` SAM-6D | 15 |
| 37 | `A7` RADiT | 23 |

---

## 6. 추가 수집 논문의 역할

CSV 논문만으로 커리큘럼을 구성하지 않고, 분야의 흐름을 보완하기 위해 추가 논문을 함께 배치했다.

| 분류 | 추가 논문 ID | 커리큘럼에서의 역할 |
|---|---|---|
| Survey | `S1-S5` | 1회차 landscape와 전체 용어 정리의 기준 |
| Generalist/VLA Foundation | `G1-G3` | Gato, SayCan, VIMA를 통해 VLA 이전의 흐름 보강 |
| Robot Data/Open Policy | `D1-D4` | Open X-Embodiment, DROID, ALOHA, Octo로 data scaling 흐름 보강 |
| Robot Foundation Policy | `P3` | RDT를 통해 diffusion transformer 기반 policy 흐름 보강 |
| VLA/Reasoning | `V4-V6` | SpatialVLA, RoboMamba, RoboBrain으로 spatial/reasoning 구조 보강 |
| World Model/Simulation | `W5-W6`, `W8-W9` | Genie 2, Pandora, UniSim, GAIA-1로 interactive/generative simulator 흐름 보강 |
| Evaluation | `E3-E4` | RoboArena, LIBERO로 평가 프로토콜 보강 |

---

## 7. 발표자 가이드

각 발표는 아래 구조를 권장한다. 발표 시간이 짧더라도 `논문을 읽었다`는 증거가 남도록 구성한다.

| 순서 | 내용 |
|---|---|
| 1 | 논문 metadata: title, authors, affiliation, venue/date, link, ID |
| 2 | 문제의식: 이 논문은 어떤 gap을 해결하려고 하는가? |
| 3 | 핵심 방법: model, data, training objective, action representation, evaluation setup |
| 4 | 핵심 결과: benchmark, qualitative result, ablation, failure case |
| 5 | 한계: 저자가 말한 한계와 발표자가 읽은 한계를 분리 |
| 6 | 연결: 이전/다음 발표 논문과의 관계 |
| 7 | DSBA 관점: data design, optimization, evaluation, operations, safety 중 어디와 연결되는가? |

발표자는 `metadata.md`의 metadata를 첫 슬라이드에 사용하고, `corpus/extracted_reading_evidence_snippets.md`에서 직접 확인한 문장을 근거로 삼는다. 단, 발표 자료에는 긴 원문 인용보다 요약과 해석을 중심으로 넣는다.

---

## 8. 토론 질문 Bank

아래 질문들은 발표 후 토론을 열기 위한 공통 질문이다.

| 주제 | 질문 |
|---|---|
| Data | robot data는 web text처럼 scale할 수 있는가? 아니라면 병목은 무엇인가? |
| Embodiment | cross-embodiment generalization에서 진짜 공유되는 representation은 무엇인가? |
| Action | discrete action token, continuous action, diffusion action 중 어느 방식이 더 자연스러운가? |
| World Model | world model은 planning을 위한 모델인가, data generator인가, policy 자체인가? |
| Evaluation | generalist robot benchmark는 task success만으로 충분한가? |
| Safety | VLA의 reasoning trace는 safety를 높이는가, 아니면 그럴듯한 설명만 제공하는가? |
| Industrial AI | physical AI가 제조, 물류, 의료, 모빌리티에 들어갈 때 가장 먼저 해결해야 하는 문제는 무엇인가? |
| DSBA | DSBA가 기여하기 좋은 지점은 algorithm 자체인가, data/evaluation/operation layer인가? |

---

## 9. 기대 산출물

이 스터디의 산출물은 연구주제 제안서가 아니라, 다음 세 가지이다.

| 산출물 | 설명 |
|---|---|
| 논문 발표 자료 | 각 발표자가 직접 읽은 논문에 대한 metadata, 핵심 방법, 결과, 한계, 연결 관계 |
| 누적 concept map | VLA, world model, robot data, evaluation, safety, digital twin 간 관계도 |
| field literacy note | 스터디 종료 후 새 논문을 읽을 때 사용할 질문 목록과 판단 기준 |

---

## 10. 한 줄 요약

이 커리큘럼은 Physical AI와 World Model을 `로봇 논문 모음`으로 읽지 않고, `언어/시각 모델이 물리 세계에서 행동하고, 예측하고, 평가되고, 현장에 적용되는 전체 흐름`으로 읽기 위한 30회 발표 설계이다.
