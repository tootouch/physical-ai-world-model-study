# Physical AI & World Model 통합 문서

작성일: 2026-05-11
대상: DSBA 연구실 / 산업공학과 기반 AI 스터디
구성: Related Works, Paper Metadata, 15주/30회 스터디 커리큘럼 통합본

---

## 통합 문서 안내

이 문서는 아래 세 문서를 하나로 합친 통합본이다.

| 원본 문서 | 통합 문서 내 위치 | 역할 |
|---|---|---|
| `related_works.md` | Part I | Physical AI와 World Model 연구 흐름을 서술형으로 정리 |
| `metadata.md` | Part II | 논문 제목, 저자, 소속, venue, date, link를 표로 정리 |
| `curriculum.md` | Part III | 15주, 총 30회 발표 스터디 커리큘럼 |

본문의 `G4`, `W11`, `A7`과 같은 ID는 Part II의 metadata table과 대응된다. 발표자는 Part II에서 bibliographic 정보를 확인하고, Part I의 연구 흐름과 Part III의 커리큘럼을 연결해 발표 자료를 구성한다.

각 논문별 상세 요약, figure, 주요 수식/notation 정리는 [`paper_corpus/paper_notes_curated`](papers/index.md)에 정리되어 있다. 아래의 "전체 논문 읽기 순서와 Curated Note 링크"를 따르면 통합 문서의 연구 흐름을 따라가면서 개별 논문 note로 바로 이동할 수 있다.

근거 원문과 추출 상태는 `corpus/extracted_reading_evidence_snippets.md` 및 `corpus/download_extract_status.md`를 함께 확인한다.

통합 문서에서는 원본 문서의 제목과 섹션 heading을 한 단계 낮춰 배치했다. 원본 문서 내부의 "문서 네비게이션" 문단과 파일 링크는 provenance 확인용으로 보존되어 있으며, 실제로는 아래 순서로 읽으면 된다.

| 읽는 순서 | 섹션 | 읽는 목적 |
|---:|---|---|
| 1 | Part I. Related Works | 분야 흐름과 핵심 쟁점을 먼저 이해 |
| 2 | Part II. Paper Metadata | 각 논문의 bibliographic 정보와 ID 확인 |
| 3 | Part III. Study Curriculum | 15주/30회 발표 스터디 운영안 확인 |

---

## 전체 논문 읽기 순서와 Curated Note 링크

읽기 순서는 커리큘럼 발표 순서를 기본으로 하되, 처음에는 survey로 큰 지도를 만들고 이후 foundation, robot data, policy, VLA, world model, safety/evaluation, DSBA 확장 순서로 이어지도록 재배열했다. `Note` 링크는 각 논문의 상세 요약 문서로 연결된다.

### Phase 0. 큰 지도 먼저 잡기

| 순서 | ID | 논문 | Note | 읽는 목적 |
|---:|---|---|---|---|
| 1 | S1 | A Survey on Robotics with Foundation Models: toward Embodied AI | [S1.md](papers/S1.md) | robotics와 foundation model의 접점을 먼저 잡는다. |
| 2 | S2 | A Survey on Vision-Language-Action Models for Embodied AI | [S2.md](papers/S2.md) | VLA라는 연구축의 기본 구성요소를 정리한다. |
| 3 | S3 | Embodied AI Agents: Modeling the World | [S3.md](papers/S3.md) | embodied agent와 world modeling 관점을 연결한다. |
| 4 | S4 | A Comprehensive Survey on World Models for Embodied AI | [S4.md](papers/S4.md) | world model의 taxonomy와 embodied AI 연결을 본다. |
| 5 | S5 | An Anatomy of Vision-Language-Action Models | [S5.md](papers/S5.md) | VLA module, milestone, challenge를 세부 구조로 정리한다. |

### Phase 1. Generalist Agent에서 VLA로

| 순서 | ID | 논문 | Note | 읽는 목적 |
|---:|---|---|---|---|
| 6 | G1 | A Generalist Agent | [G1.md](papers/G1.md) | 여러 task와 modality를 sequence model로 묶는 출발점을 본다. |
| 7 | G2 | Do As I Can, Not As I Say | [G2.md](papers/G2.md) | language planning과 affordance grounding의 차이를 이해한다. |
| 8 | G3 | VIMA: General Robot Manipulation with Multimodal Prompts | [G3.md](papers/G3.md) | multimodal prompt가 robot task specification을 어떻게 바꾸는지 본다. |
| 9 | G4 | RT-1: Robotics Transformer for Real-World Control at Scale | [G4.md](papers/G4.md) | real robot trajectory scaling과 transformer policy의 시작점을 잡는다. |
| 10 | G5 | PaLM-E: An Embodied Multimodal Language Model | [G5.md](papers/G5.md) | VLM/LLM에 sensor와 embodied input을 넣는 방식을 본다. |
| 11 | G6 | RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control | [G6.md](papers/G6.md) | web-scale VLM 지식이 robot action으로 전이되는 구조를 이해한다. |

### Phase 2. Robot Data, Open Policy, Cross-Embodiment

| 순서 | ID | 논문 | Note | 읽는 목적 |
|---:|---|---|---|---|
| 12 | D1 | Open X-Embodiment: Robotic Learning Datasets and RT-X Models | [D1.md](papers/D1.md) | cross-robot dataset과 embodiment diversity의 의미를 잡는다. |
| 13 | D2 | Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware | [D2.md](papers/D2.md) | low-cost teleoperation과 ACT 기반 imitation learning을 이해한다. |
| 14 | D3 | DROID: A Large-Scale In-The-Wild Robot Manipulation Dataset | [D3.md](papers/D3.md) | in-the-wild robot data collection의 설계와 병목을 본다. |
| 15 | D4 | Octo: An Open-Source Generalist Robot Policy | [D4.md](papers/D4.md) | open generalist robot policy의 구조와 재사용성을 확인한다. |
| 16 | D5 | OpenVLA: An Open-Source Vision-Language-Action Model | [D5.md](papers/D5.md) | 공개 VLA 모델의 training recipe와 평가 흐름을 본다. |
| 17 | D6 | X-VLA: Soft-Prompted Transformer as Scalable Cross-Embodiment VLA | [D6.md](papers/D6.md) | embodiment 차이를 soft prompt로 흡수하는 접근을 본다. |
| 18 | D7 | Pretrained VLA Models are Surprisingly Resistant to Forgetting | [D7.md](papers/D7.md) | continual learning과 catastrophic forgetting 문제를 VLA 관점에서 이해한다. |

### Phase 3. Visuomotor Policy와 Robot Foundation Model

| 순서 | ID | 논문 | Note | 읽는 목적 |
|---:|---|---|---|---|
| 19 | P1 | Diffusion Policy: Visuomotor Policy Learning via Action Diffusion | [P1.md](papers/P1.md) | action distribution을 diffusion으로 모델링하는 이유를 이해한다. |
| 20 | P2 | 3D Diffusion Policy | [P2.md](papers/P2.md) | 3D point cloud representation이 manipulation generalization에 주는 효과를 본다. |
| 21 | P3 | RDT-1B: a Diffusion Foundation Model for Bimanual Manipulation | [P3.md](papers/P3.md) | diffusion transformer 기반 large robot policy의 구조를 본다. |
| 22 | P4 | pi0: A Vision-Language-Action Flow Model for General Robot Control | [P4.md](papers/P4.md) | flow matching 기반 VLA policy의 action generation 방식을 이해한다. |
| 23 | P5 | pi0.5: a Vision-Language-Action Model with Open-World Generalization | [P5.md](papers/P5.md) | open-world generalization과 high-level subtask prediction을 본다. |
| 24 | P6 | GR00T N1: An Open Foundation Model for Generalist Humanoid Robots | [P6.md](papers/P6.md) | humanoid foundation model에서 System 1/System 2 구조를 확인한다. |

### Phase 4. VLA Architecture, Reasoning, Physical Grounding

| 순서 | ID | 논문 | Note | 읽는 목적 |
|---:|---|---|---|---|
| 25 | V1 | CogACT | [V1.md](papers/V1.md) | cognition module과 action module을 어떻게 분리/결합하는지 본다. |
| 26 | V2 | Diffusion-VLA | [V2.md](papers/V2.md) | autoregressive reasoning과 diffusion action generation의 결합을 본다. |
| 27 | V3 | CoT-VLA | [V3.md](papers/V3.md) | visual chain-of-thought와 future visual goal prediction을 이해한다. |
| 28 | V4 | SpatialVLA | [V4.md](papers/V4.md) | spatial representation이 VLA 성능에 주는 영향을 본다. |
| 29 | V5 | RoboMamba | [V5.md](papers/V5.md) | 효율적 VLA inference와 manipulation reasoning 구조를 확인한다. |
| 30 | V6 | RoboBrain | [V6.md](papers/V6.md) | planning, affordance, trajectory prediction을 통합하는 방향을 본다. |
| 31 | V7 | Gemini Robotics | [V7.md](papers/V7.md) | industrial frontier의 embodied multimodal model 구조를 확인한다. |
| 32 | V8 | PhysVLM | [V8.md](papers/V8.md) | physical reachability와 VLM reasoning의 차이를 명시적으로 본다. |

### Phase 5. World Model과 Interactive Simulation

| 순서 | ID | 논문 | Note | 읽는 목적 |
|---:|---|---|---|---|
| 33 | W1 | The Free-Energy Principle | [W1.md](papers/W1.md) | prediction error minimization 관점의 이론적 배경을 잡는다. |
| 34 | W2 | DreamerV3 | [W2.md](papers/W2.md) | latent dynamics와 imagination rollout 기반 model-based RL을 이해한다. |
| 35 | W3 | Training Agents Inside of Scalable World Models | [W3.md](papers/W3.md) | scalable world model 안에서 agent를 학습시키는 흐름을 본다. |
| 36 | W4 | Genie | [W4.md](papers/W4.md) | unlabeled video에서 action-controllable environment를 학습하는 방식을 본다. |
| 37 | W5 | Genie 2 | [W5.md](papers/W5.md) | prompt image 기반 playable 3D world 생성 흐름을 확인한다. |
| 38 | W6 | Pandora | [W6.md](papers/W6.md) | natural language action과 video state를 결합한 world model을 본다. |
| 39 | W7 | LLMR | [W7.md](papers/W7.md) | LLM이 interactive world generation에 들어가는 HCI 관점을 본다. |
| 40 | W8 | UniSim: Learning Interactive Real-World Simulators | [W8.md](papers/W8.md) | action-conditioned real-world simulator의 가능성을 본다. |
| 41 | W9 | GAIA-1 | [W9.md](papers/W9.md) | autonomous driving world model과 scenario generation을 이해한다. |
| 42 | W10 | DreamGen | [W10.md](papers/W10.md) | video world model을 robot synthetic data generator로 쓰는 방식을 본다. |
| 43 | W11 | World Simulation with Video Foundation Models for Physical AI | [W11.md](papers/W11.md) | Cosmos 계열 world foundation model platform의 역할을 정리한다. |
| 44 | W12 | World Action Models are Zero-shot Policies | [W12.md](papers/W12.md) | world model이 zero-shot policy로 쓰일 수 있는지를 검토한다. |

### Phase 6. Safety, Evaluation, Deployment Layer

| 순서 | ID | 논문 | Note | 읽는 목적 |
|---:|---|---|---|---|
| 45 | E1 | SAM-6D | [E1.md](papers/E1.md) | zero-shot 6D pose estimation이 manipulation에 왜 중요한지 본다. |
| 46 | E2 | Code-as-Monitor | [E2.md](papers/E2.md) | VLM-generated code와 constraints로 failure detection을 하는 방식을 본다. |
| 47 | E3 | RoboArena | [E3.md](papers/E3.md) | real-world distributed evaluation protocol을 이해한다. |
| 48 | E4 | LIBERO | [E4.md](papers/E4.md) | lifelong robot learning benchmark와 knowledge transfer 평가를 본다. |
| 49 | E5 | Hierarchical Active Inference | [E5.md](papers/E5.md) | active inference 기반 control/safety 철학을 VLA/RL과 비교한다. |

### Phase 7. DSBA 확장: Digital Twin, Healthcare, Multi-Agent

| 순서 | ID | 논문 | Note | 읽는 목적 |
|---:|---|---|---|---|
| 50 | A7 | RADiT | [A7.md](papers/A7.md) | digital twin과 resource allocation의 Physical AI 연결점을 본다. |
| 51 | A8 | Foundation Models for Generalist Medical AI | [A8.md](papers/A8.md) | multimodal generalist medical AI를 physical data 관점에서 본다. |
| 52 | A9 | From Wearable Sensor Data to Digital Biomarker Development | [A9.md](papers/A9.md) | wearable sensor와 digital biomarker pipeline을 이해한다. |
| 53 | A10 | A Multimodal Sleep Foundation Model for Disease Prediction | [A10.md](papers/A10.md) | PSG 기반 sensor foundation model의 구조를 본다. |
| 54 | A1 | ProAgent | [A1.md](papers/A1.md) | proactive cooperative agent의 planning/coordination 구조를 본다. |
| 55 | A2 | REVECA | [A2.md](papers/A2.md) | cooperative language agent의 planning validation을 이해한다. |
| 56 | A3 | Resilience of LLM-Based Multi-Agent Collaboration | [A3.md](papers/A3.md) | faulty agent가 있는 multi-agent system의 robustness를 본다. |
| 57 | A4 | Synergistic Multi-Agent Framework with Trajectory Learning | [A4.md](papers/A4.md) | trajectory learning 기반 multi-agent cooperation을 본다. |
| 58 | A5 | BotSim | [A5.md](papers/A5.md) | simulation-based malicious agent evaluation을 이해한다. |
| 59 | A6 | Debate on Graph | [A6.md](papers/A6.md) | graph/debate 기반 reliable reasoning 구조를 본다. |

---

## Part I. Related Works

## Related Works: Physical AI and World Models

작성 기준: 2026-04-30  
목적: Physical AI와 World Model 스터디를 설계하기 전에, 관련 연구가 어떤 흐름으로 발전했는지 서술형으로 정리한다.

### 문서 네비게이션

이 문서는 논문 목록표가 아니라 literature review 초안이다. 논문 제목, 저자, 소속, venue, date, link는 [`metadata.md`](metadata.md)를 기준으로 확인한다. 스터디 운영안은 [`curriculum.md`](curriculum.md)에서 관리한다.

본문의 괄호 안 ID는 metadata 문서의 `No.`와 대응된다. 예를 들어 `RT-1 (G4)`는 metadata 문서의 `G4` 항목을 뜻한다.

작성 방식:

- [`metadata.md`](metadata.md)의 59개 항목을 기준으로 PDF, 공식 논문 페이지, 또는 공식 proceedings 페이지를 직접 확인했다.
- 추출된 원문 근거는 [`corpus/extracted_reading_evidence_snippets.md`](corpus/extracted_reading_evidence_snippets.md)에 보관했다.
- PDF/full-text 추출 상태는 [`corpus/download_extract_status.md`](corpus/download_extract_status.md)에 남겼다.
- 단, RADiT (A7)는 IEEE 본문 직접 접근이 제한되어 IEEE 메타데이터와 공개된 full-text preview/search snippet을 근거로 요약했다.

### 1. 연구 지형 개요

Physical AI는 하나의 단일 방법론이라기보다, AI가 텍스트와 이미지 이해를 넘어 물리 세계에서 지각하고, 예측하고, 행동하고, 실패를 감지하는 시스템으로 확장되는 흐름이다. 이 흐름은 크게 네 가지 축이 겹치며 발전해왔다.

최근 survey들은 이 영역을 embodied AI, robot foundation model, VLA, world model이라는 서로 다른 이름으로 정리한다. Robotics with Foundation Models survey (S1)는 foundation model이 robotics planning/control로 들어오는 흐름을, VLA survey (S2)와 VLA anatomy (S5)는 vision-language-action 모델의 구성요소와 과제를, Embodied AI Agents survey (S3)와 World Models for Embodied AI survey (S4)는 agent가 세계를 어떻게 모델링하고 평가해야 하는지를 정리한다.

첫째, foundation model을 행동으로 확장하려는 축이다. Gato (G1), SayCan (G2), VIMA (G3), RT-1 (G4), PaLM-E (G5), RT-2 (G6)는 언어, 시각, 상태, 행동을 하나의 모델 또는 하나의 decision pipeline 안에서 연결하려는 초기 흐름을 만든다. 여기서 핵심 질문은 "AI가 세상을 설명하는 데 그치지 않고, 실제 행동을 생성할 수 있는가?"이다.

둘째, 대규모 로봇 데이터와 cross-embodiment learning 축이다. Open X-Embodiment/RT-X (D1), DROID (D3), Octo (D4), OpenVLA (D5), X-VLA (D6), Continual VLA (D7)는 로봇 학습의 병목이 모델 구조만이 아니라 데이터 다양성, embodiment 차이, action representation, continual adaptation에 있음을 보여준다.

셋째, world model 축이다. DreamerV3 (W2)는 latent dynamics를 학습해 imagined rollout으로 policy를 개선하는 model-based RL의 대표 사례이고, Genie (W4), Genie 2 (W5), Pandora (W6), UniSim (W8), GAIA-1 (W9), DreamGen (W10), Cosmos (W11), DreamZero/WAM (W12)은 비디오 기반 world foundation model이 시뮬레이션, synthetic data, policy evaluation, zero-shot policy까지 확장될 수 있음을 보여준다.

넷째, physical grounding과 deployment 축이다. SAM-6D (E1), DP3 (P2), SpatialVLA (V4), PhysVLM (V8), Code-as-Monitor (E2), RoboArena (E3), LIBERO (E4)는 물리 세계에서 중요한 3D geometry, reachability, failure detection, real-world evaluation 문제를 다룬다. 이 축은 Physical AI가 단순히 "멋진 데모"가 아니라 실제 현장에서 안전하고 반복 가능하게 동작해야 한다는 요구와 연결된다.

### 2. Generalist Agent에서 Physical AI로

초기 generalist agent 연구는 "다양한 입력과 출력을 하나의 sequence modeling 문제로 볼 수 있는가?"를 물었다. Gato (G1)는 텍스트, 이미지 captioning, Atari, 로봇 팔 제어를 하나의 generalist agent 안에 넣을 수 있음을 보여줬다. 이 연구는 지금의 VLA와 robot foundation model을 직접 해결한 것은 아니지만, 서로 다른 task와 modality를 token sequence로 통합하는 사고방식을 제공했다.

SayCan (G2)은 이 흐름에 중요한 제동장치를 걸었다. LLM은 언어적으로 그럴듯한 계획을 만들 수 있지만, 로봇이 실제로 그 행동을 수행할 수 있는지는 별개의 문제다. 따라서 high-level language planning은 affordance나 value function과 결합되어야 한다. 이 문제의식은 이후 VLA 연구에서도 계속 살아 있다. 즉, "말이 되는 행동"과 "실제로 가능한 행동" 사이의 간극이 Physical AI의 핵심 병목이다.

VIMA (G3)는 robot manipulation task를 multimodal prompt learning 문제로 재구성했다. 언어 instruction뿐 아니라 이미지 goal, visual prompt, demonstration을 함께 쓰면서, 로봇에게 task를 지정하는 방식 자체가 달라질 수 있음을 보여줬다. 논문은 procedurally-generated tabletop tasks와 600K+ expert trajectories를 포함하는 benchmark를 제안하고, zero-shot generalization setting에서 기존 설계보다 높은 success rate를 보였다. 이 흐름은 PaLM-E (G5), RT-2 (G6), OpenVLA (D5)처럼 language-vision-action을 직접 연결하는 연구로 이어진다.

RT-1 (G4)은 대규모 실제 로봇 데이터를 Transformer policy에 학습시키면서 robot data scaling의 출발점을 만들었다. RT-2 (G6)는 web-scale VLM 지식과 robot trajectory를 함께 학습해 action을 token처럼 다루는 VLA 패러다임을 제시했고, PMLR abstract 기준으로 Internet-scale vision-language tasks와 robotic trajectory data를 co-fine-tuning하는 접근을 강조한다. PaLM-E (G5)는 언어 모델 안에 시각, 상태, 센서 정보를 넣어 embodied multimodal reasoning을 시도했으며, PaLM-E-562B가 robotics task와 VQA/captioning task를 함께 다루는 generalist 성격을 보인다고 보고한다. 이 세 논문은 Physical AI가 기존 로봇 제어의 hand-engineered pipeline에서 foundation model 중심 구조로 이동하는 전환점으로 볼 수 있다.

### 3. Robot Data와 Cross-Embodiment Learning

로봇 foundation model이 가능하려면 모델보다 먼저 데이터 문제가 해결되어야 한다. Open X-Embodiment/RT-X (D1)는 여러 기관의 로봇 데이터를 통합해 cross-embodiment policy의 가능성을 보여줬다. 중요한 점은 단순히 데이터가 많아졌다는 사실이 아니라, 서로 다른 로봇 몸체, 센서, action space, task distribution을 하나의 학습 문제로 다루기 시작했다는 것이다.

DROID (D3)는 실험실 안의 정제된 데이터가 아니라 in-the-wild manipulation data의 중요성을 강조한다. 로봇이 실제 현장에 배치되려면 object, background, lighting, human arrangement, task instruction이 계속 달라진다. DROID는 76K trajectories, 564 scenes, 84 tasks 규모의 데이터를 통해 이런 real-world variability를 모델이 흡수하도록 만든다.

Octo (D4)와 OpenVLA (D5)는 공개 generalist robot policy의 의미를 갖는다. Octo는 Open X-Embodiment 기반 800K robot trajectories로 pretraining된 transformer policy를 제안하고, flexible task definitions, observations, action spaces를 강조한다. OpenVLA는 7B parameter open-source VLA로 970K real-world robot demonstrations를 사용하며, closed RT-2-X 대비 더 작은 규모로 강한 generalist manipulation 성능을 보였다고 보고한다. 연구실 단위에서 모든 로봇 데이터를 직접 수집하기는 어렵기 때문에, open policy와 fine-tuning 가능한 model release는 커뮤니티 전체의 실험 진입장벽을 낮춘다. X-VLA (D6)는 embodiment-specific soft prompt를 통해 서로 다른 로봇의 차이를 모델 안에서 조절하려 하고, Continual VLA (D7)는 pretrained VLA가 task sequence를 학습할 때 catastrophic forgetting이 어떻게 나타나는지 다룬다.

이 흐름의 핵심 긴장은 명확하다. 로봇 foundation model은 더 많은 데이터를 원하지만, 로봇 데이터는 웹 텍스트나 이미지처럼 저렴하게 수집되지 않는다. 따라서 real demonstration, teleoperation, simulation, synthetic video, replay, parameter-efficient fine-tuning이 모두 중요한 연구축이 된다.

### 4. Visuomotor Policy Learning과 Robot Foundation Model

VLA 이전에도 visuomotor policy learning은 로봇 행동 학습의 중심이었다. Diffusion Policy (P1)는 action distribution을 diffusion process로 모델링함으로써 multi-modal behavior cloning 문제를 잘 다룬다. 논문은 4개 robot manipulation benchmark의 15개 task에서 기존 state-of-the-art 대비 평균 46.9% improvement를 보고하며, receding-horizon control, visual conditioning, time-series diffusion transformer가 중요하다고 분석한다. 같은 관찰 상태에서 여러 가능한 행동이 있을 때 평균 행동을 내는 것은 종종 실패로 이어지는데, diffusion 기반 정책은 가능한 action trajectory의 분포를 생성할 수 있다.

DP3 (P2)는 3D representation의 중요성을 보여준다. 논문은 72개 simulation tasks와 4개 real robot tasks를 통해 sparse point cloud 기반 compact 3D representation이 적은 demonstration에서도 generalization에 유리함을 보인다. 로봇은 2D 이미지 속 물체를 분류하는 것이 아니라, 거리, 접촉, 방향, 가림, reachability가 있는 세계에서 행동한다. 따라서 point cloud나 3D geometry는 단순 부가정보가 아니라 physical generalization의 핵심 표현이 될 수 있다.

ALOHA/ACT (D2)는 저비용 teleoperation과 action chunking으로 bimanual manipulation 학습을 실용화한 사례다. 논문은 $20K 미만의 hardware setup과 ACT를 통해 fine-grained bimanual tasks를 10분 수준의 demonstration으로 학습하는 방향을 보인다. RDT-1B (P3)는 이 bimanual/dexterous manipulation 문제를 1.2B parameter diffusion foundation model로 확장하며, physically interpretable unified action space를 통해 여러 로봇의 action representation을 통합하려 한다. pi0 (P4)와 pi0.5 (P5)는 VLA와 flow matching을 결합해 general robot control과 open-world generalization을 지향한다. pi0는 7개 robot configurations와 68 tasks를 포함한 다양한 robot data를, pi0.5는 web data, high-level subtask prediction, in-the-wild mobile/static robot data를 함께 활용해 새로운 집 환경에서 장기 manipulation을 수행하는 방향을 제시한다. GR00T N1 (P6)은 humanoid robot을 대상으로 VLM 기반 System 2와 diffusion transformer 기반 System 1을 결합한다.

이 축에서 중요한 질문은 "로봇 행동을 language token처럼 다룰 수 있는가?"와 "연속적이고 물리적인 action trajectory를 생성 모델이 안정적으로 만들 수 있는가?"이다. RT-2류 VLA는 action tokenization의 가능성을 보여주고, Diffusion Policy/RDT/pi0류 연구는 continuous action generation의 강점을 보여준다.

### 5. VLA Architecture와 Physical Reasoning

VLA 모델은 vision-language model의 지식과 robot action을 연결하지만, 단순히 VLM 뒤에 action head를 붙이는 것으로 충분하지 않다. CogACT (V1)는 기존 VLA가 action quantization만으로 VLM을 재사용할 때 task success가 낮다는 문제에서 출발해, VLM output에 조건화된 specialized action module과 diffusion action transformer를 제안한다. Diffusion-VLA (V2)는 autoregressive reasoning과 diffusion action generation을 결합하고, reasoning phrase를 policy learning에 주입하는 module을 둔다. CoT-VLA (V3)는 language chain-of-thought가 아니라 visual chain-of-thought, 즉 미래 visual goal frame을 예측한 뒤 action을 생성하는 방향을 제시하며, real-world manipulation에서 기존 VLA보다 17% 높은 성능을 보고한다.

SpatialVLA (V4)는 VLA가 physical task를 수행하려면 spatial representation이 핵심이라는 점을 강조한다. 로봇 조작은 object category를 맞히는 문제가 아니라, 위치, 방향, 거리, 접촉 가능성, action granularity를 다루는 문제다. RoboMamba (V5)는 효율적 VLA inference와 manipulation reasoning을, RoboBrain (V6)은 planning, affordance perception, trajectory prediction을 하나의 robotic brain 능력으로 묶으려 한다.

Gemini Robotics (V7)는 대규모 multimodal model이 실제 robot control로 확장되는 산업적 frontier를 보여준다. 논문은 Gemini Robotics-ER가 spatial/temporal understanding, pointing, trajectory/grasp prediction, 3D understanding을 강화하고, Gemini Robotics가 이를 VLA로 연결한다고 설명한다. PhysVLM (V8)은 "볼 수 있음"과 "할 수 있음"의 차이를 명시적으로 다룬다. VLM이 물체를 인식한다고 해서 로봇이 그 물체에 닿을 수 있는 것은 아니다. PhysVLM은 Space-Physical Reachability Map과 Phys100K/EQA-phys를 통해 reachability를 visual reasoning에 넣고, GPT-4o 대비 EQA-phys에서 14% improvement를 보고한다.

요약하면, VLA 연구의 중심은 단순히 언어 명령을 action으로 바꾸는 것에서, cognition, spatial reasoning, affordance, reachability, long-horizon visual planning을 함께 다루는 방향으로 이동하고 있다.

### 6. World Model: 예측, 시뮬레이션, 정책

World Model 연구는 에이전트가 행동하기 전에 세계의 변화를 예측할 수 있어야 한다는 생각에서 출발한다. Free-energy principle (W1)은 생물학적/인지과학적 관점에서 perception과 action을 prediction error minimization으로 해석한다. 로봇 제어에 직접 적용하려면 논쟁적인 부분도 있지만, "지능은 세계를 예측하고 예측 오차를 줄인다"는 직관은 World Model 연구의 중요한 배경이 된다.

DreamerV3 (W2)는 model-based RL에서 world model을 어떻게 쓸 수 있는지 보여주는 대표 연구다. Nature 논문은 단일 configuration으로 150개 이상의 다양한 control tasks를 다루며, world model 안에서 future scenarios를 상상해 behavior를 개선하는 방향을 제시한다. Training Agents Inside of Scalable World Models (W3)는 이 방향을 더 큰 world model 안에서 agent를 학습시키는 문제로 확장한다. Dreamer 4는 Minecraft에서 offline data만으로 diamond 획득을 시도하며, shortcut forcing objective와 efficient transformer architecture로 object interaction과 game mechanics prediction을 개선한다.

Genie (W4)는 unlabeled video에서 action-controllable environment를 학습한다. 중요한 점은 명시적 action label이 없어도 latent action space를 학습해 interactive environment를 만들 수 있다는 것이다. Genie 2 (W5)는 prompt image에서 playable 3D world를 생성하는 방향으로 확장되고, Pandora (W6)는 natural language action으로 video state를 제어하는 general world model을 제안한다. LLMR (W7)은 LLM을 이용해 mixed reality world를 실시간으로 생성하고 수정하는 HCI 관점의 확장으로 볼 수 있다.

UniSim (W8)과 GAIA-1 (W9)은 world model이 로봇 조작에만 국한되지 않음을 보여준다. UniSim은 action-conditioned real-world simulator를, GAIA-1은 autonomous driving에서 video/text/action 기반 generative world model을 다룬다. 이 흐름은 Physical AI에서 world model을 "시뮬레이터", "데이터 생성기", "정책 평가기", "planner"로 동시에 보게 만든다.

DreamGen (W10), Cosmos (W11), DreamZero/WAM (W12)은 Physical AI와 video world model의 직접 결합을 보여준다. DreamGen은 image-to-video world model을 robot embodiment에 맞게 fine-tuning하고, 생성된 synthetic videos에서 latent action model 또는 inverse dynamics model로 pseudo-action을 복원하는 4-stage pipeline을 제안한다. Cosmos는 Physical AI를 위한 world foundation model platform에 가깝고, Cosmos-Predict2.5가 Text2World, Image2World, Video2World를 통합하며, Cosmos-Transfer2.5가 Sim2Real/Real2Real world translation을 담당한다. DreamZero/WAM은 한 걸음 더 나아가 video와 action을 joint modeling하여 world action model 자체가 zero-shot policy가 될 수 있는 가능성을 제시하고, 14B autoregressive video diffusion model을 7Hz closed-loop control로 최적화했다고 보고한다.

### 7. VLA와 World Model의 관계

VLA와 World Model은 경쟁 관계처럼 보이지만, 실제 frontier는 둘의 결합으로 가고 있다. VLA는 instruction, perception, action mapping을 직접 학습하는 데 강하다. 반면 World Model은 행동의 결과를 상상하고, synthetic data를 만들고, policy를 평가하고, long-horizon planning을 지원하는 데 강하다.

CoT-VLA (V3)는 미래 visual goal을 예측한다는 점에서 VLA 안으로 작은 world model을 들여온 사례로 볼 수 있다. DreamGen (W10)은 world model이 robot data generator가 되는 방향이고, DreamZero/WAM (W12)은 world model이 policy 자체에 가까워지는 방향이다. Gemini Robotics (V7)나 GR00T N1 (P6) 같은 시스템은 reasoning, perception, action generation, safety stack이 분리되면서도 하나의 embodied agent처럼 동작하는 hybrid architecture를 지향한다.

따라서 스터디에서 중요한 질문은 "VLA가 맞는가, World Model이 맞는가?"가 아니라 "어떤 기능은 VLA가 담당하고, 어떤 기능은 world model이 담당하며, 이 둘을 어떻게 폐루프 시스템으로 묶을 것인가?"이다.

### 8. Safety, Evaluation, and Deployment

Physical AI는 디지털 AI보다 실패 비용이 크다. 따라서 benchmark score만으로는 충분하지 않다. SAM-6D (E1)는 zero-shot 6D pose estimation을 instance segmentation과 pose estimation으로 나누고, SAM 기반 proposal과 semantic/appearance/geometry matching score, partial-to-partial point matching을 결합한다. PhysVLM (V8)은 physical reachability를 VLM reasoning에 넣는다. Code-as-Monitor (E2)는 VLM-generated code와 spatio-temporal constraint를 이용해 reactive/proactive failure detection을 시도하며, severe disturbances에서 baseline 대비 higher success rate와 reduced execution time을 보고한다.

RoboArena (E3)는 generalist robot policy를 실제 세계에서 distributed evaluation하는 방향을 제시한다. 논문은 fixed centralized benchmark 대신 다양한 evaluator가 pairwise policy comparison을 수행하고 preference aggregation으로 policy ranking을 도출하는 방식을 제안한다. LIBERO (E4)는 lifelong robot learning 평가를 제공하며, 130 tasks와 procedural generation pipeline을 통해 declarative/procedural knowledge transfer를 본다. Continual VLA (D7)는 pretrained VLA가 task sequence를 학습할 때 forgetting이 기존 intuition과 다르게 나타날 수 있음을 보여준다. Hierarchical Active Inference (E5)는 learning보다 inference 기반 control을 강조한다는 점에서, RL/VLA 중심 접근과 다른 안전한 폐루프 제어 철학을 제공한다.

여기서 평가해야 할 것은 success rate만이 아니다. unseen object, unseen environment, embodiment transfer, intervention rate, safety violation, recovery ability, latency, robustness, human oversight 비용까지 함께 봐야 한다. Physical AI의 실제 배포는 "정책이 평균적으로 잘하는가"보다 "실패할 때 알아차리고 멈추거나 회복할 수 있는가"에 더 크게 의존한다.

### 9. Industrial, Healthcare, and Multi-Agent Extensions

Physical AI는 로봇 조작만의 문제가 아니다. Digital twin과 operations 관점에서는 RADiT (A7)처럼 simulation과 resource allocation이 결합된다. 공개 preview 기준 RADiT는 UAV-assisted IoV network에서 digital twin이 physical network dynamics를 real-time으로 반영하고, local/V2V/V2I offloading mode를 고려하며, multi-network DRL 기반 resource allocation으로 energy consumption, delay, task completion rate를 최적화한다. 제조/물류 현장에서는 world model이 미래 상태 시뮬레이터가 되고, OR/IE 방법론은 task allocation, scheduling, robust optimization을 담당할 수 있다.

Healthcare와 wearable sensor 영역도 넓은 의미의 Physical AI로 볼 수 있다. Foundation Models for Generalist Medical AI (A8)는 의료 AI가 multimodal, multi-task generalist model로 이동하는 방향을 보여준다. Wearable Sensor Data to Digital Biomarker Development (A9)는 센서 데이터를 임상적으로 의미 있는 digital biomarker로 번역하는 과정을 다룬다. SleepFM (A10)은 PSG 기반 multimodal sleep foundation model로 disease prediction을 수행한다. 여기서 "world"는 로봇 주변 환경이 아니라 인간의 몸과 생리 상태다.

Multi-agent 연구도 현장 배포에서 중요하다. ProAgent (A1), REVECA (A2), Resilience of LLM-Based Multi-Agent Collaboration (A3), Synergistic MAS (A4), BotSim (A5), Debate on Graph (A6)는 LLM 기반 multi-agent collaboration, faulty agent, malicious simulation, reliable reasoning을 다룬다. 이 논문들이 직접 로봇 논문은 아니더라도, 다중 로봇, 작업자, 센서, 관리자 agent가 함께 움직이는 Physical AI 시스템을 이해하는 데 참고할 수 있다.

### 10. DSBA 관점의 핵심 연결

산업공학과 DSBA 연구실 관점에서는 Physical AI를 단순히 "로봇을 잘 움직이는 모델"로만 보면 좁다. 더 자연스러운 연결점은 데이터, 최적화, 안전, 센서, 운영 시스템이다.

- Data-centric AI: demonstration quality, synthetic data validation, dataset diversity, continual adaptation
- Operations research: robot task allocation, scheduling, resource allocation, digital twin optimization
- Safety and reliability: failure detection, intervention policy, risk-aware deployment, monitoring
- Sensor analytics: wearable, PSG, IoT signal foundation models and digital biomarkers
- Multi-agent systems: robot fleets, human-robot teams, warehouse/factory coordination

이 관점에서 Physical AI와 World Model은 DSBA가 이미 다루던 예측, 최적화, 이상탐지, 의사결정, 시뮬레이션 문제를 물리 세계로 확장하는 연구 지형으로 볼 수 있다.

### 11. Open Issues

현재 문헌을 관통하는 미해결 질문은 다음과 같다.

- 로봇 행동의 action representation은 token, continuous trajectory, diffusion sample, flow 중 무엇이 더 적절한가?
- VLA는 reachability, affordance, contact dynamics, safety constraint를 명시적 physical representation 없이 학습할 수 있는가?
- video world model이 생성한 synthetic data는 언제 실제 policy 성능을 높이고, 언제 harmful bias를 만든다?
- world model은 simulator, data generator, planner, policy 중 어느 역할을 중심으로 발전할 것인가?
- cross-embodiment learning에서 robot body 차이는 prompt, adapter, shared action space, 또는 별도 dynamics model 중 무엇으로 다뤄야 하는가?
- real-world evaluation은 success rate 외에 어떤 지표를 포함해야 하는가?
- human-in-the-loop monitoring과 intervention을 Physical AI architecture 안에 어떻게 넣을 것인가?
- healthcare/wearable sensor foundation model은 로봇 world model과 어떤 점에서 같고 어떤 점에서 다른가?

### 12. Metadata Source

논문 목록, 저자, 소속, venue, date, link는 [`metadata.md`](metadata.md)를 기준으로 관리한다. 이 문서는 그 논문들을 바탕으로 연구 흐름과 핵심 논점을 설명하는 narrative review 문서다.

---

## Part II. Paper Metadata

## Paper Metadata Table: Physical AI and World Models

작성 기준: 2026-04-30  
대상: `related_works.md`에서 수집한 CSV 포함 관련 연구

### 문서 네비게이션

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

### 1. Survey / Position Papers

| No. | Title | Authors | Affiliation / Team | Venue / Status | Date | Link |
|---:|---|---|---|---|---|---|
| S1 | A Survey on Robotics with Foundation Models: toward Embodied AI | Zhiyuan Xu, Kun Wu, Junjie Wen, Jinming Li, Ning Liu, Zhengping Che, Jian Tang | HEC Montréal / Mila and collaborators | arXiv | 2024-02-04 | https://arxiv.org/abs/2402.02385 |
| S2 | A Survey on Vision-Language-Action Models for Embodied AI | Yueen Ma, Zixing Song, Yuzheng Zhuang, Jianye Hao, Irwin King | Tsinghua University / CUHK and collaborators | arXiv | 2024-05-23 | https://arxiv.org/abs/2405.14093 |
| S3 | Embodied AI Agents: Modeling the World | Pascale Fung, Yoram Bachrach, Asli Celikyilmaz, Kamalika Chaudhuri, Delong Chen et al. | Multi-institution / Meta FAIR and collaborators | arXiv | 2025-06-27 | https://arxiv.org/abs/2506.22355 |
| S4 | A Comprehensive Survey on World Models for Embodied AI | Xinqing Li, Xin He, Le Zhang, Min Wu, Xiaoli Li, Yun Liu | Multi-institution, China/Singapore collaborators | arXiv | 2025-10-19 | https://arxiv.org/abs/2510.16732 |
| S5 | An Anatomy of Vision-Language-Action Models: From Modules to Milestones and Challenges | Chao Xu, Suyu Zhang, Yang Liu, Baigui Sun, Weihong Chen et al. | Multi-institution collaborators | arXiv | 2025-12-12 | https://arxiv.org/abs/2512.11362 |

### 2. Generalist Agents, Language Grounding, and VLA Foundations

| No. | Title | Authors | Affiliation / Team | Venue / Status | Date | Link |
|---:|---|---|---|---|---|---|
| G1 | A Generalist Agent | Scott Reed, Konrad Zolna, Emilio Parisotto, Sergio Gomez Colmenarejo et al. | DeepMind | TMLR | 2022-05-12 | https://arxiv.org/abs/2205.06175 |
| G2 | Do As I Can, Not As I Say: Grounding Language in Robotic Affordances | Michael Ahn, Anthony Brohan, Noah Brown, Yevgen Chebotar et al. | Robotics at Google / Everyday Robots | arXiv | 2022-04-04 | https://arxiv.org/abs/2204.01691 |
| G3 | VIMA: General Robot Manipulation with Multimodal Prompts | Yunfan Jiang, Agrim Gupta, Zichen Zhang, Guanzhi Wang et al. | NVIDIA / Stanford / Caltech and collaborators | ICML | 2022-10-06 | https://arxiv.org/abs/2210.03094 |
| G4 | RT-1: Robotics Transformer for Real-World Control at Scale | Anthony Brohan, Noah Brown, Justice Carbajal, Yevgen Chebotar et al. | Google DeepMind / Robotics at Google | arXiv | 2022-12-13 | https://arxiv.org/abs/2212.06817 |
| G5 | PaLM-E: An Embodied Multimodal Language Model | Danny Driess, Fei Xia, Mehdi S. M. Sajjadi, Corey Lynch et al. | Robotics at Google / TU Berlin / Google Research | ICML | 2023-03-06 | https://arxiv.org/abs/2303.03378 |
| G6 | RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control | Anthony Brohan, Noah Brown, Justice Carbajal, Yevgen Chebotar et al. | Google DeepMind / Robotics at Google | CoRL / PMLR | 2023 | https://proceedings.mlr.press/v229/zitkovich23a.html |

### 3. Robot Data, Open Policies, and Cross-Embodiment Learning

| No. | Title | Authors | Affiliation / Team | Venue / Status | Date | Link |
|---:|---|---|---|---|---|---|
| D1 | Open X-Embodiment: Robotic Learning Datasets and RT-X Models | Open X-Embodiment Collaboration, Abby O'Neill, Abdul Rehman, Abhinav Gupta et al. | Open X-Embodiment Collaboration / Google DeepMind and 20+ institutions | ICRA / arXiv | 2023-10-13 | https://arxiv.org/abs/2310.08864 |
| D2 | Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware | Tony Z. Zhao, Vikash Kumar, Sergey Levine, Chelsea Finn | Stanford University / UC Berkeley | RSS / arXiv | 2023-04-23 | https://arxiv.org/abs/2304.13705 |
| D3 | DROID: A Large-Scale In-The-Wild Robot Manipulation Dataset | Alexander Khazatsky, Karl Pertsch, Suraj Nair, Ashwin Balakrishna et al. | UC Berkeley / Stanford / CMU / Google DeepMind and collaborators | RSS / arXiv | 2024-03-19 | https://arxiv.org/abs/2403.12945 |
| D4 | Octo: An Open-Source Generalist Robot Policy | Octo Model Team, Dibya Ghosh, Homer Walke, Karl Pertsch et al. | UC Berkeley / Stanford / Google DeepMind and collaborators | RSS / arXiv | 2024-05-20 | https://arxiv.org/abs/2405.12213 |
| D5 | OpenVLA: An Open-Source Vision-Language-Action Model | Moo Jin Kim, Karl Pertsch, Siddharth Karamcheti, Ted Xiao et al. | Stanford / UC Berkeley / TRI / Google DeepMind / Physical Intelligence / MIT | arXiv | 2024-06-13 | https://arxiv.org/abs/2406.09246 |
| D6 | X-VLA: Soft-Prompted Transformer as Scalable Cross-Embodiment Vision-Language-Action Model | Jinliang Zheng, Jianxiong Li, Zhihao Wang, Dongxiu Liu et al. | AIR Tsinghua / Shanghai AI Laboratory / Peking University | ICLR | 2026-04-23 | https://iclr.cc/virtual/2026/poster/10007740 |
| D7 | Pretrained Vision-Language-Action Models are Surprisingly Resistant to Forgetting in Continual Learning | Huihan Liu, Changyeon Kim, Bo Liu, Minghuan Liu, Yuke Zhu | UT Austin / KAIST / Microsoft Superintelligence | arXiv | 2026-03-04 | https://arxiv.org/abs/2603.03818 |

### 4. Visuomotor Policy Learning, Diffusion, and Robot Foundation Models

| No. | Title | Authors | Affiliation / Team | Venue / Status | Date | Link |
|---:|---|---|---|---|---|---|
| P1 | Diffusion Policy: Visuomotor Policy Learning via Action Diffusion | Cheng Chi, Zhenjia Xu, Siyuan Feng, Eric Cousineau et al. | Columbia University / Toyota Research Institute / MIT | RSS 2023; IJRR 2025 | 2023-03-07 | https://arxiv.org/abs/2303.04137 |
| P2 | 3D Diffusion Policy: Generalizable Visuomotor Policy Learning via Simple 3D Representations | Yanjie Ze, Gu Zhang, Kangning Zhang, Chenyuan Hu, Muhan Wang, Huazhe Xu | Shanghai Qi Zhi Institute / Shanghai Jiao Tong University / Tsinghua University | RSS | 2024-03-06 | https://arxiv.org/abs/2403.03954 |
| P3 | RDT-1B: a Diffusion Foundation Model for Bimanual Manipulation | Songming Liu, Lingxuan Wu, Bangguo Li, Hengkai Tan et al. | Tsinghua University / Shanghai AI Laboratory and collaborators | arXiv | 2024-10-10 | https://arxiv.org/abs/2410.07864 |
| P4 | π0: A Vision-Language-Action Flow Model for General Robot Control | Kevin Black, Noah Brown, Danny Driess, Adnan Esmail et al. | Physical Intelligence | RSS | 2024-10-31 | https://arxiv.org/abs/2410.24164 |
| P5 | π0.5: a Vision-Language-Action Model with Open-World Generalization | Physical Intelligence, Kevin Black, Noah Brown, James Darpinian et al. | Physical Intelligence | CoRL / arXiv | 2025-04-22 | https://arxiv.org/abs/2504.16054 |
| P6 | GR00T N1: An Open Foundation Model for Generalist Humanoid Robots | NVIDIA, Johan Bjorck, Fernando Castañeda, Nikita Cherniadev et al. | NVIDIA | arXiv | 2025-03-18 | https://arxiv.org/abs/2503.14734 |

### 5. VLA Architectures, Reasoning, and Spatial Understanding

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

### 6. World Models and Interactive Simulation

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

### 7. Perception, Reachability, Safety, and Evaluation

| No. | Title | Authors | Affiliation / Team | Venue / Status | Date | Link |
|---:|---|---|---|---|---|---|
| E1 | SAM-6D: Segment Anything Model Meets Zero-Shot 6D Object Pose Estimation | Jiehong Lin, Lihua Liu, Dekun Lu, Kui Jia | CUHK-Shenzhen / South China University of Technology | CVPR | 2023-11-27 | https://arxiv.org/abs/2311.15707 |
| E2 | Code-as-Monitor: Constraint-aware Visual Programming for Reactive and Proactive Robotic Failure Detection | Enshen Zhou, Qi Su, Cheng Chi, Zhizheng Zhang et al. | Beihang University / Peking University / BAAI / GalBot | CVPR | 2024-12-05 | https://arxiv.org/abs/2412.04455 |
| E3 | RoboArena: Distributed Real-World Evaluation of Generalist Robot Policies | Pranav Atreya, Karl Pertsch, Tony Lee, Moo Jin Kim et al. | Multi-institution collaborators | arXiv | 2025-06-22 | https://arxiv.org/abs/2506.18123 |
| E4 | LIBERO: Benchmarking Knowledge Transfer for Lifelong Robot Learning | Bo Liu, Yifeng Zhu, Chongkai Gao, Yihao Feng et al. | UT Austin / collaborators | NeurIPS Datasets and Benchmarks / arXiv | 2023-06-05 | https://arxiv.org/abs/2306.03310 |
| E5 | Why learn if you can infer? Robot arm control with Hierarchical Active Inference | Corrado Pezzato, Christopher L. Buckley, Tim Verbelen | VERSES AI | NeurIPS Workshop | 2024 | https://neurips.cc/virtual/2024/99477 |

### 8. Multi-Agent, Digital Twin, Healthcare, and Sensor Foundation Models

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

### 9. CSV 포함 여부 요약

| Group | Count | Notes |
|---|---:|---|
| CSV 원문에 포함된 논문 | 37 | `Physical AI papers you should read.csv` 기준 |
| 추가 수집 논문/자료 | 22 | survey, generalist agent, robot data, evaluation, world model 보강 |
| 총 정리 항목 | 59 | 긴 저자 목록은 대표 저자 중심 표기 |

---

## Part III. Study Curriculum

## Physical AI & World Model 스터디 커리큘럼

작성일: 2026-05-08  
대상: DSBA 연구실 / 산업공학과 기반 AI 스터디  
구성: 15주, 주 2회 발표, 총 30회 발표

---

### 0. 문서 사용법

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

### 1. 커리큘럼 설계 원칙

#### 1.1 연구 주제 발굴 워크숍이 아니다

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

#### 1.2 초반 동기부여를 우선한다

초반 2주는 수식이나 벤치마크 중심으로 시작하지 않는다.  
대신 다음 질문으로 관심도를 먼저 만든다.

| 질문 | 의미 |
|---|---|
| 로봇이 언어 지시를 실제 행동으로 바꾸려면 무엇이 필요한가? | Physical AI의 핵심 문제 |
| VLM이 보는 것과 로봇이 할 수 있는 것은 왜 다른가? | perception-action gap |
| world model은 시뮬레이터인가, 정책인가, 아니면 둘 사이의 인터페이스인가? | world model의 역할 |
| 데이터가 많아지면 로봇도 LLM처럼 일반화되는가? | scaling hypothesis |
| 산업공학/DSBA 관점에서는 어디에서 가치를 만들 수 있는가? | 실험설계, 운영, 평가, 안전, digital twin |

#### 1.3 논문 간 연결을 명시한다

각 발표는 독립적인 논문 요약이 아니라, 이전 발표와 다음 발표를 연결해야 한다.  
발표자는 다음 세 가지 연결 중 최소 하나를 포함한다.

| 연결 방식 | 예시 |
|---|---|
| 문제 연결 | RT-2의 언어-행동 일반화 한계가 Open X-Embodiment의 데이터 스케일링 문제로 이어짐 |
| 방법 연결 | Diffusion Policy의 action generation 관점이 Diffusion-VLA, RDT, pi0로 확장됨 |
| 적용 연결 | Cosmos, RADiT, digital twin 논문은 world model이 현장 운영/검증과 만나는 지점을 보여줌 |

---

### 2. 전체 흐름

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

### 3. Week별 발표 구성 상세

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

### 4. 30회 발표 상세 커리큘럼

#### Week 1. 분야를 먼저 좋아하게 만들기

| 발표 | 제목 | 핵심 논문/자료 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 1 | Physical AI & World Model Landscape | `S1-S5`, [related works](related_works.md) | Physical AI, VLA, robot foundation model, world model, digital twin이 어떤 관계인지 큰 지도를 만든다. | Physical AI는 robotics의 새 이름인가, 아니면 foundation model 이후의 새로운 연구 프레임인가? |
| 2 | Motivation & Failure Modes | `V7`, `P6`, `P5`, `W11`, `W12`, `E3` | humanoid, robot policy, video world model 사례를 통해 왜 기존 AI만으로는 물리 세계 행동이 어려운지 이해한다. | 언어모델의 generalization과 로봇의 generalization은 무엇이 다른가? |

추천 운영 방식: 1회차는 논문 발표보다 field map 발표에 가깝게 운영한다. 2회차는 데모 영상, 실패 사례, benchmark gap을 중심으로 구성하면 초반 몰입도가 높다.

---

#### Week 2. Generalist Agent에서 VLA로

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 3 | Generalist Agent Origins | `G1` Gato, `G2` SayCan | 하나의 모델이 여러 task를 처리한다는 generalist agent 관점이 embodied AI로 넘어온 과정을 이해한다. | Gato의 generalist framing과 SayCan의 language-to-action decomposition은 이후 VLA에 어떤 영향을 주었나? |
| 4 | Multimodal Prompting to VLA | `G3` VIMA, `G5` PaLM-E, `G6` RT-2 | multimodal prompting, embodied VLM, vision-language-action model의 연결을 정리한다. | VLM이 action까지 출력하려면 어떤 representation 변화가 필요한가? |

연결 포인트: Week 2는 LLM/VLM 기반 지능이 실제 행동으로 넘어가며 생기는 `symbol grounding`, `affordance`, `action tokenization` 문제를 잡는 주간이다.

---

#### Week 3. Robot Data Scaling의 출발점

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 5 | RT-1/RT-2 and Action Tokenization | `G4` RT-1, `G6` RT-2 | 대규모 robot trajectory와 web-scale VLM 지식이 어떻게 결합되는지 비교한다. | RT-2는 정말 vision-language model의 지식을 robot action으로 전이했는가? |
| 6 | Open X-Embodiment and Data Scaling | `D1` Open X-Embodiment | cross-robot dataset, embodiment diversity, data mixture의 의미를 이해한다. | robot data scaling은 LLM의 web-scale data scaling과 같은 방식으로 작동할까? |

연결 포인트: 5회차는 모델 스케일링, 6회차는 데이터 스케일링을 다룬다. 이후 Octo, OpenVLA, pi0, Cosmos를 읽을 때 반복해서 돌아올 기준점이다.

---

#### Week 4. Open Robot Policy와 데이터 수집

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 7 | DROID/ALOHA: Data Collection and Teleoperation | `D2` DROID, `D3` ALOHA/ACT | real-world robot data collection과 low-cost teleoperation이 왜 중요한지 이해한다. | 좋은 robot dataset은 크기보다 다양성, 품질, task coverage 중 무엇이 더 중요한가? |
| 8 | Octo/OpenVLA: Open Generalist Policies | `D4` Octo, `D5` OpenVLA | open-source generalist robot policy의 설계와 한계를 비교한다. | open VLA는 closed industrial VLA와 어떤 방식으로 경쟁하거나 보완할 수 있을까? |

DSBA 관점: 데이터 수집 비용, task sampling, evaluation design, distribution shift는 산업공학적 실험설계와 매우 잘 맞는 문제다.

---

#### Week 5. Embodiment Gap과 Diffusion Policy

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 9 | Cross-Embodiment & Continual VLA | `D6` X-VLA, `D7` Continual VLA | embodiment 차이를 representation과 continual learning 관점에서 이해한다. | 로봇이 바뀌어도 유지되는 지식은 무엇이고, 다시 배워야 하는 것은 무엇인가? |
| 10 | Diffusion Visuomotor Policies | `P1` Diffusion Policy, `P2` 3D Diffusion Policy | diffusion 기반 action generation이 기존 behavior cloning과 어떻게 다른지 이해한다. | diffusion policy가 multimodal action distribution을 잘 다루는 이유는 무엇인가? |

연결 포인트: 9회차는 `어떤 지식이 로봇 간 공유되는가`, 10회차는 `행동을 어떤 확률모델로 생성하는가`를 다룬다.

---

#### Week 6. Robot Foundation Policy의 현재

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 11 | RDT/pi0/pi0.5 | `P3` RDT, `P4` pi0, `P5` pi0.5 | diffusion transformer, flow matching, vision-language-action policy의 최신 흐름을 정리한다. | pi0 계열은 RT 계열과 비교해 action generation을 어떻게 다르게 본 것인가? |
| 12 | Humanoid Foundation Models | `P6` ASAP, `V7` Gemini Robotics | humanoid, mobile manipulation, dexterous control에서 foundation model이 어떤 역할을 하는지 이해한다. | humanoid generalist policy는 manipulation policy와 같은 문제인가, 다른 문제인가? |

운영 팁: 11회차는 수식보다 architecture, training data, action representation, evaluation task를 비교하는 데 집중한다.

---

#### Week 7. VLA Architecture와 Reasoning

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 13 | VLA Architecture: Policy Head, Diffusion Head, Action Expert | `V1` CogACT, `V2` Diffusion-VLA | VLA 모델이 perception-language-reasoning-action을 어떤 모듈로 나누는지 비교한다. | action expert를 별도로 두는 것은 generalist model의 장점과 충돌하는가? |
| 14 | Visual/Spatial Reasoning in VLA | `V3` CoT-VLA, `V4` SpatialVLA, `V5` RoboMamba, `V6` RoboBrain | reasoning token, spatial representation, embodied memory가 로봇 행동에 주는 의미를 이해한다. | chain-of-thought는 robot action에서 실제 성능 향상을 주는가, 아니면 설명 가능성만 높이는가? |

연결 포인트: Week 7은 `VLA가 그냥 큰 VLM인가?`라는 질문에 답하는 주간이다. action head, spatial grounding, reasoning trace가 핵심이다.

---

#### Week 8. Physical Grounding과 World Model 이론

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 15 | Physical Grounding and Object Pose | `E1` SAM-6D, `V8` PhysVLM | object pose, affordance, physical commonsense가 VLA/robot policy에서 왜 중요한지 이해한다. | physical reasoning benchmark는 실제 로봇 성능을 얼마나 설명하는가? |
| 16 | World Model Foundations | `W1` Free Energy Principle, `W2` DreamerV3, `W3` Dreamer4 | world model의 이론적 기원과 latent dynamics 기반 RL의 핵심을 이해한다. | world model은 environment model인가, planning module인가, 아니면 representation learning인가? |

연결 포인트: 15회차는 물리 세계를 `정확히 인식하는 문제`, 16회차는 물리 세계를 `예측 가능한 latent dynamics로 모델링하는 문제`를 다룬다.

---

#### Week 9. Generative World Model과 Interactive Simulation

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 17 | Generative Interactive Worlds | `W4` Genie, `W5` Genie 2, `W6` Pandora, `W7` LLMR | video generative model이 controllable environment와 interactive simulator로 확장되는 흐름을 이해한다. | 인터넷 비디오만으로 action-controllable world model을 만들 수 있는가? |
| 18 | Real-World Simulators and Driving World Models | `W8` UniSim, `W9` GAIA-1 | real-world interaction simulator와 autonomous driving world model을 비교한다. | driving world model의 성공 조건은 manipulation world model과 무엇이 다른가? |

DSBA 관점: simulation은 optimization, scheduling, logistics, manufacturing, autonomous mobility와 직접 연결된다. 단, 생성 모델의 그럴듯함과 의사결정 신뢰성은 분리해서 봐야 한다.

---

#### Week 10. Synthetic Data, Sim2Real, Zero-Shot Policy

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 19 | Synthetic Data and Sim2Real | `W10` DreamGen, `W11` Cosmos | world model이 robot training data generator, scenario generator, policy evaluator로 쓰이는 방식을 이해한다. | synthetic data는 real robot data를 대체할 수 있는가, 아니면 보완재인가? |
| 20 | World Model as Zero-Shot Policy | `W12` DreamZero | world model 내부 지식만으로 zero-shot robot policy를 구성하려는 접근을 이해한다. | world model에서 policy가 emergence하는가, 아니면 별도 policy learning이 여전히 필수인가? |

연결 포인트: 19회차는 world model의 `data engine` 역할, 20회차는 `policy engine` 역할을 비교한다.

---

#### Week 11. Evaluation, Monitoring, Safety

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 21 | Monitoring and Active Inference | `E2` Code-as-Monitor, `E5` Active Inference Survey | robot failure monitoring과 active inference 기반 control/safety 관점을 연결한다. | LLM/VLM 기반 monitor는 실제 safety layer로 충분한가? |
| 22 | Evaluation Protocols for Generalist Robots | `E3` RoboArena, `E4` LIBERO, `D7` Continual VLA | benchmark, lifelong learning, generalist policy evaluation의 문제를 정리한다. | generalist robot policy의 성능은 어떤 protocol로 평가해야 공정한가? |

운영 팁: 이 주차는 논문 성능표를 외우는 것보다 evaluation design의 허점을 찾는 방식으로 진행하면 좋다.

---

#### Week 12. 현장 적용: Digital Twin, Healthcare, Sensor AI

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 23 | Digital Twin and Industrial Operations | `A7` RADiT, `W11` Cosmos | digital twin, operations, logistics, industrial simulation에서 Physical AI/World Model이 어떻게 쓰일 수 있는지 본다. | 생성형 world model과 전통적 digital twin은 경쟁 관계인가, 결합 관계인가? |
| 24 | Healthcare and Sensor Foundation Models | `A8` GMAI, `A9` Wearable Biomarkers, `A10` SleepFM | physical world data가 로봇이 아닌 healthcare/sensor 영역에서 foundation model로 확장되는 방식을 이해한다. | 의료/센서 foundation model은 Physical AI 범주에 포함될 수 있는가? |

주의: `A7` RADiT는 IEEE 원문 접근이 제한되어 metadata와 공개 preview/snippet 기준으로만 정리되어 있다. 발표자는 `corpus/download_extract_status.md`의 접근 상태를 함께 명시한다.

---

#### Week 13. Multi-Agent Physical AI

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 25 | Cooperative Multi-Agent AI | `A1` ProAgent, `A2` REVECA | multi-agent cooperation, embodied coordination, communication 구조를 이해한다. | multi-agent setting에서 중요한 것은 개별 agent 능력인가, coordination protocol인가? |
| 26 | Multi-Agent Reliability and Safety Reasoning | `A3` Resilience, `A4` SMART, `A5` BotSim, `A6` Debate on Graph | multi-agent robustness, simulation, safety reasoning, debate 구조를 비교한다. | 여러 agent가 토론하면 물리 세계 의사결정은 더 안전해지는가? |

DSBA 관점: multi-agent coordination은 supply chain, transportation, smart factory, scheduling, human-AI teaming과 자연스럽게 연결된다.

---

#### Week 14. 핵심 긴장 1: Scaling과 Safety

| 발표 | 제목 | 핵심 논문 | 발표 목표 | 발표 질문 |
|---|---|---|---|---|
| 27 | Data Scaling vs Model Scaling | `D1-D5`, `G6`, `P5`, `W10`, `W11` | robot intelligence에서 데이터 스케일, 모델 스케일, synthetic data 스케일이 각각 무엇을 해결하는지 비교한다. | 로봇 분야의 scaling law는 LLM 분야와 같은 형태로 나타날까? |
| 28 | Physical Reasoning and Safety Gap | `V3`, `V4`, `V8`, `E1`, `E2`, `E3` | VLA와 world model이 여전히 어려워하는 physical reasoning, safety, evaluation gap을 정리한다. | benchmark 성능 향상이 실제 physical safety 향상으로 이어진다고 볼 수 있는가? |

주의: 27-28회차는 전체 복습 시간이 아니다. 특정 긴장 관계를 중심으로 논문들을 다시 연결하는 synthesis session이다.

---

#### Week 15. 최신 트렌드 집중 스터디

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

### 5. CSV 원문 논문 반영표

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

### 6. 추가 수집 논문의 역할

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

### 7. 발표자 가이드

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

### 8. 토론 질문 Bank

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

### 9. 기대 산출물

이 스터디의 산출물은 연구주제 제안서가 아니라, 다음 세 가지이다.

| 산출물 | 설명 |
|---|---|
| 논문 발표 자료 | 각 발표자가 직접 읽은 논문에 대한 metadata, 핵심 방법, 결과, 한계, 연결 관계 |
| 누적 concept map | VLA, world model, robot data, evaluation, safety, digital twin 간 관계도 |
| field literacy note | 스터디 종료 후 새 논문을 읽을 때 사용할 질문 목록과 판단 기준 |

---

### 10. 한 줄 요약

이 커리큘럼은 Physical AI와 World Model을 `로봇 논문 모음`으로 읽지 않고, `언어/시각 모델이 물리 세계에서 행동하고, 예측하고, 평가되고, 현장에 적용되는 전체 흐름`으로 읽기 위한 30회 발표 설계이다.
