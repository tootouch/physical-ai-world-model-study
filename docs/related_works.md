# Related Works: Physical AI and World Models

작성 기준: 2026-04-30  
목적: Physical AI와 World Model 스터디를 설계하기 전에, 관련 연구가 어떤 흐름으로 발전했는지 서술형으로 정리한다.

## 문서 네비게이션

이 문서는 논문 목록표가 아니라 literature review 초안이다. 논문 제목, 저자, 소속, venue, date, link는 [`metadata.md`](metadata.md)를 기준으로 확인한다. 스터디 운영안은 [`curriculum.md`](curriculum.md)에서 관리한다.

본문의 괄호 안 ID는 metadata 문서의 `No.`와 대응된다. 예를 들어 `RT-1 (G4)`는 metadata 문서의 `G4` 항목을 뜻한다.

작성 방식:

- [`metadata.md`](metadata.md)의 59개 항목을 기준으로 PDF, 공식 논문 페이지, 또는 공식 proceedings 페이지를 직접 확인했다.
- 추출된 원문 근거는 [`corpus/extracted_reading_evidence_snippets.md`](corpus/extracted_reading_evidence_snippets.md)에 보관했다.
- PDF/full-text 추출 상태는 [`corpus/download_extract_status.md`](corpus/download_extract_status.md)에 남겼다.
- 단, RADiT (A7)는 IEEE 본문 직접 접근이 제한되어 IEEE 메타데이터와 공개된 full-text preview/search snippet을 근거로 요약했다.

## 1. 연구 지형 개요

Physical AI는 하나의 단일 방법론이라기보다, AI가 텍스트와 이미지 이해를 넘어 물리 세계에서 지각하고, 예측하고, 행동하고, 실패를 감지하는 시스템으로 확장되는 흐름이다. 이 흐름은 크게 네 가지 축이 겹치며 발전해왔다.

최근 survey들은 이 영역을 embodied AI, robot foundation model, VLA, world model이라는 서로 다른 이름으로 정리한다. Robotics with Foundation Models survey (S1)는 foundation model이 robotics planning/control로 들어오는 흐름을, VLA survey (S2)와 VLA anatomy (S5)는 vision-language-action 모델의 구성요소와 과제를, Embodied AI Agents survey (S3)와 World Models for Embodied AI survey (S4)는 agent가 세계를 어떻게 모델링하고 평가해야 하는지를 정리한다.

첫째, foundation model을 행동으로 확장하려는 축이다. Gato (G1), SayCan (G2), VIMA (G3), RT-1 (G4), PaLM-E (G5), RT-2 (G6)는 언어, 시각, 상태, 행동을 하나의 모델 또는 하나의 decision pipeline 안에서 연결하려는 초기 흐름을 만든다. 여기서 핵심 질문은 "AI가 세상을 설명하는 데 그치지 않고, 실제 행동을 생성할 수 있는가?"이다.

둘째, 대규모 로봇 데이터와 cross-embodiment learning 축이다. Open X-Embodiment/RT-X (D1), DROID (D3), Octo (D4), OpenVLA (D5), X-VLA (D6), Continual VLA (D7)는 로봇 학습의 병목이 모델 구조만이 아니라 데이터 다양성, embodiment 차이, action representation, continual adaptation에 있음을 보여준다.

셋째, world model 축이다. DreamerV3 (W2)는 latent dynamics를 학습해 imagined rollout으로 policy를 개선하는 model-based RL의 대표 사례이고, Genie (W4), Genie 2 (W5), Pandora (W6), UniSim (W8), GAIA-1 (W9), DreamGen (W10), Cosmos (W11), DreamZero/WAM (W12)은 비디오 기반 world foundation model이 시뮬레이션, synthetic data, policy evaluation, zero-shot policy까지 확장될 수 있음을 보여준다.

넷째, physical grounding과 deployment 축이다. SAM-6D (E1), DP3 (P2), SpatialVLA (V4), PhysVLM (V8), Code-as-Monitor (E2), RoboArena (E3), LIBERO (E4)는 물리 세계에서 중요한 3D geometry, reachability, failure detection, real-world evaluation 문제를 다룬다. 이 축은 Physical AI가 단순히 "멋진 데모"가 아니라 실제 현장에서 안전하고 반복 가능하게 동작해야 한다는 요구와 연결된다.

## 2. Generalist Agent에서 Physical AI로

초기 generalist agent 연구는 "다양한 입력과 출력을 하나의 sequence modeling 문제로 볼 수 있는가?"를 물었다. Gato (G1)는 텍스트, 이미지 captioning, Atari, 로봇 팔 제어를 하나의 generalist agent 안에 넣을 수 있음을 보여줬다. 이 연구는 지금의 VLA와 robot foundation model을 직접 해결한 것은 아니지만, 서로 다른 task와 modality를 token sequence로 통합하는 사고방식을 제공했다.

SayCan (G2)은 이 흐름에 중요한 제동장치를 걸었다. LLM은 언어적으로 그럴듯한 계획을 만들 수 있지만, 로봇이 실제로 그 행동을 수행할 수 있는지는 별개의 문제다. 따라서 high-level language planning은 affordance나 value function과 결합되어야 한다. 이 문제의식은 이후 VLA 연구에서도 계속 살아 있다. 즉, "말이 되는 행동"과 "실제로 가능한 행동" 사이의 간극이 Physical AI의 핵심 병목이다.

VIMA (G3)는 robot manipulation task를 multimodal prompt learning 문제로 재구성했다. 언어 instruction뿐 아니라 이미지 goal, visual prompt, demonstration을 함께 쓰면서, 로봇에게 task를 지정하는 방식 자체가 달라질 수 있음을 보여줬다. 논문은 procedurally-generated tabletop tasks와 600K+ expert trajectories를 포함하는 benchmark를 제안하고, zero-shot generalization setting에서 기존 설계보다 높은 success rate를 보였다. 이 흐름은 PaLM-E (G5), RT-2 (G6), OpenVLA (D5)처럼 language-vision-action을 직접 연결하는 연구로 이어진다.

RT-1 (G4)은 대규모 실제 로봇 데이터를 Transformer policy에 학습시키면서 robot data scaling의 출발점을 만들었다. RT-2 (G6)는 web-scale VLM 지식과 robot trajectory를 함께 학습해 action을 token처럼 다루는 VLA 패러다임을 제시했고, PMLR abstract 기준으로 Internet-scale vision-language tasks와 robotic trajectory data를 co-fine-tuning하는 접근을 강조한다. PaLM-E (G5)는 언어 모델 안에 시각, 상태, 센서 정보를 넣어 embodied multimodal reasoning을 시도했으며, PaLM-E-562B가 robotics task와 VQA/captioning task를 함께 다루는 generalist 성격을 보인다고 보고한다. 이 세 논문은 Physical AI가 기존 로봇 제어의 hand-engineered pipeline에서 foundation model 중심 구조로 이동하는 전환점으로 볼 수 있다.

## 3. Robot Data와 Cross-Embodiment Learning

로봇 foundation model이 가능하려면 모델보다 먼저 데이터 문제가 해결되어야 한다. Open X-Embodiment/RT-X (D1)는 여러 기관의 로봇 데이터를 통합해 cross-embodiment policy의 가능성을 보여줬다. 중요한 점은 단순히 데이터가 많아졌다는 사실이 아니라, 서로 다른 로봇 몸체, 센서, action space, task distribution을 하나의 학습 문제로 다루기 시작했다는 것이다.

DROID (D3)는 실험실 안의 정제된 데이터가 아니라 in-the-wild manipulation data의 중요성을 강조한다. 로봇이 실제 현장에 배치되려면 object, background, lighting, human arrangement, task instruction이 계속 달라진다. DROID는 76K trajectories, 564 scenes, 84 tasks 규모의 데이터를 통해 이런 real-world variability를 모델이 흡수하도록 만든다.

Octo (D4)와 OpenVLA (D5)는 공개 generalist robot policy의 의미를 갖는다. Octo는 Open X-Embodiment 기반 800K robot trajectories로 pretraining된 transformer policy를 제안하고, flexible task definitions, observations, action spaces를 강조한다. OpenVLA는 7B parameter open-source VLA로 970K real-world robot demonstrations를 사용하며, closed RT-2-X 대비 더 작은 규모로 강한 generalist manipulation 성능을 보였다고 보고한다. 연구실 단위에서 모든 로봇 데이터를 직접 수집하기는 어렵기 때문에, open policy와 fine-tuning 가능한 model release는 커뮤니티 전체의 실험 진입장벽을 낮춘다. X-VLA (D6)는 embodiment-specific soft prompt를 통해 서로 다른 로봇의 차이를 모델 안에서 조절하려 하고, Continual VLA (D7)는 pretrained VLA가 task sequence를 학습할 때 catastrophic forgetting이 어떻게 나타나는지 다룬다.

이 흐름의 핵심 긴장은 명확하다. 로봇 foundation model은 더 많은 데이터를 원하지만, 로봇 데이터는 웹 텍스트나 이미지처럼 저렴하게 수집되지 않는다. 따라서 real demonstration, teleoperation, simulation, synthetic video, replay, parameter-efficient fine-tuning이 모두 중요한 연구축이 된다.

## 4. Visuomotor Policy Learning과 Robot Foundation Model

VLA 이전에도 visuomotor policy learning은 로봇 행동 학습의 중심이었다. Diffusion Policy (P1)는 action distribution을 diffusion process로 모델링함으로써 multi-modal behavior cloning 문제를 잘 다룬다. 논문은 4개 robot manipulation benchmark의 15개 task에서 기존 state-of-the-art 대비 평균 46.9% improvement를 보고하며, receding-horizon control, visual conditioning, time-series diffusion transformer가 중요하다고 분석한다. 같은 관찰 상태에서 여러 가능한 행동이 있을 때 평균 행동을 내는 것은 종종 실패로 이어지는데, diffusion 기반 정책은 가능한 action trajectory의 분포를 생성할 수 있다.

DP3 (P2)는 3D representation의 중요성을 보여준다. 논문은 72개 simulation tasks와 4개 real robot tasks를 통해 sparse point cloud 기반 compact 3D representation이 적은 demonstration에서도 generalization에 유리함을 보인다. 로봇은 2D 이미지 속 물체를 분류하는 것이 아니라, 거리, 접촉, 방향, 가림, reachability가 있는 세계에서 행동한다. 따라서 point cloud나 3D geometry는 단순 부가정보가 아니라 physical generalization의 핵심 표현이 될 수 있다.

ALOHA/ACT (D2)는 저비용 teleoperation과 action chunking으로 bimanual manipulation 학습을 실용화한 사례다. 논문은 $20K 미만의 hardware setup과 ACT를 통해 fine-grained bimanual tasks를 10분 수준의 demonstration으로 학습하는 방향을 보인다. RDT-1B (P3)는 이 bimanual/dexterous manipulation 문제를 1.2B parameter diffusion foundation model로 확장하며, physically interpretable unified action space를 통해 여러 로봇의 action representation을 통합하려 한다. pi0 (P4)와 pi0.5 (P5)는 VLA와 flow matching을 결합해 general robot control과 open-world generalization을 지향한다. pi0는 7개 robot configurations와 68 tasks를 포함한 다양한 robot data를, pi0.5는 web data, high-level subtask prediction, in-the-wild mobile/static robot data를 함께 활용해 새로운 집 환경에서 장기 manipulation을 수행하는 방향을 제시한다. GR00T N1 (P6)은 humanoid robot을 대상으로 VLM 기반 System 2와 diffusion transformer 기반 System 1을 결합한다.

이 축에서 중요한 질문은 "로봇 행동을 language token처럼 다룰 수 있는가?"와 "연속적이고 물리적인 action trajectory를 생성 모델이 안정적으로 만들 수 있는가?"이다. RT-2류 VLA는 action tokenization의 가능성을 보여주고, Diffusion Policy/RDT/pi0류 연구는 continuous action generation의 강점을 보여준다.

## 5. VLA Architecture와 Physical Reasoning

VLA 모델은 vision-language model의 지식과 robot action을 연결하지만, 단순히 VLM 뒤에 action head를 붙이는 것으로 충분하지 않다. CogACT (V1)는 기존 VLA가 action quantization만으로 VLM을 재사용할 때 task success가 낮다는 문제에서 출발해, VLM output에 조건화된 specialized action module과 diffusion action transformer를 제안한다. Diffusion-VLA (V2)는 autoregressive reasoning과 diffusion action generation을 결합하고, reasoning phrase를 policy learning에 주입하는 module을 둔다. CoT-VLA (V3)는 language chain-of-thought가 아니라 visual chain-of-thought, 즉 미래 visual goal frame을 예측한 뒤 action을 생성하는 방향을 제시하며, real-world manipulation에서 기존 VLA보다 17% 높은 성능을 보고한다.

SpatialVLA (V4)는 VLA가 physical task를 수행하려면 spatial representation이 핵심이라는 점을 강조한다. 로봇 조작은 object category를 맞히는 문제가 아니라, 위치, 방향, 거리, 접촉 가능성, action granularity를 다루는 문제다. RoboMamba (V5)는 효율적 VLA inference와 manipulation reasoning을, RoboBrain (V6)은 planning, affordance perception, trajectory prediction을 하나의 robotic brain 능력으로 묶으려 한다.

Gemini Robotics (V7)는 대규모 multimodal model이 실제 robot control로 확장되는 산업적 frontier를 보여준다. 논문은 Gemini Robotics-ER가 spatial/temporal understanding, pointing, trajectory/grasp prediction, 3D understanding을 강화하고, Gemini Robotics가 이를 VLA로 연결한다고 설명한다. PhysVLM (V8)은 "볼 수 있음"과 "할 수 있음"의 차이를 명시적으로 다룬다. VLM이 물체를 인식한다고 해서 로봇이 그 물체에 닿을 수 있는 것은 아니다. PhysVLM은 Space-Physical Reachability Map과 Phys100K/EQA-phys를 통해 reachability를 visual reasoning에 넣고, GPT-4o 대비 EQA-phys에서 14% improvement를 보고한다.

요약하면, VLA 연구의 중심은 단순히 언어 명령을 action으로 바꾸는 것에서, cognition, spatial reasoning, affordance, reachability, long-horizon visual planning을 함께 다루는 방향으로 이동하고 있다.

## 6. World Model: 예측, 시뮬레이션, 정책

World Model 연구는 에이전트가 행동하기 전에 세계의 변화를 예측할 수 있어야 한다는 생각에서 출발한다. Free-energy principle (W1)은 생물학적/인지과학적 관점에서 perception과 action을 prediction error minimization으로 해석한다. 로봇 제어에 직접 적용하려면 논쟁적인 부분도 있지만, "지능은 세계를 예측하고 예측 오차를 줄인다"는 직관은 World Model 연구의 중요한 배경이 된다.

DreamerV3 (W2)는 model-based RL에서 world model을 어떻게 쓸 수 있는지 보여주는 대표 연구다. Nature 논문은 단일 configuration으로 150개 이상의 다양한 control tasks를 다루며, world model 안에서 future scenarios를 상상해 behavior를 개선하는 방향을 제시한다. Training Agents Inside of Scalable World Models (W3)는 이 방향을 더 큰 world model 안에서 agent를 학습시키는 문제로 확장한다. Dreamer 4는 Minecraft에서 offline data만으로 diamond 획득을 시도하며, shortcut forcing objective와 efficient transformer architecture로 object interaction과 game mechanics prediction을 개선한다.

Genie (W4)는 unlabeled video에서 action-controllable environment를 학습한다. 중요한 점은 명시적 action label이 없어도 latent action space를 학습해 interactive environment를 만들 수 있다는 것이다. Genie 2 (W5)는 prompt image에서 playable 3D world를 생성하는 방향으로 확장되고, Pandora (W6)는 natural language action으로 video state를 제어하는 general world model을 제안한다. LLMR (W7)은 LLM을 이용해 mixed reality world를 실시간으로 생성하고 수정하는 HCI 관점의 확장으로 볼 수 있다.

UniSim (W8)과 GAIA-1 (W9)은 world model이 로봇 조작에만 국한되지 않음을 보여준다. UniSim은 action-conditioned real-world simulator를, GAIA-1은 autonomous driving에서 video/text/action 기반 generative world model을 다룬다. 이 흐름은 Physical AI에서 world model을 "시뮬레이터", "데이터 생성기", "정책 평가기", "planner"로 동시에 보게 만든다.

DreamGen (W10), Cosmos (W11), DreamZero/WAM (W12)은 Physical AI와 video world model의 직접 결합을 보여준다. DreamGen은 image-to-video world model을 robot embodiment에 맞게 fine-tuning하고, 생성된 synthetic videos에서 latent action model 또는 inverse dynamics model로 pseudo-action을 복원하는 4-stage pipeline을 제안한다. Cosmos는 Physical AI를 위한 world foundation model platform에 가깝고, Cosmos-Predict2.5가 Text2World, Image2World, Video2World를 통합하며, Cosmos-Transfer2.5가 Sim2Real/Real2Real world translation을 담당한다. DreamZero/WAM은 한 걸음 더 나아가 video와 action을 joint modeling하여 world action model 자체가 zero-shot policy가 될 수 있는 가능성을 제시하고, 14B autoregressive video diffusion model을 7Hz closed-loop control로 최적화했다고 보고한다.

## 7. VLA와 World Model의 관계

VLA와 World Model은 경쟁 관계처럼 보이지만, 실제 frontier는 둘의 결합으로 가고 있다. VLA는 instruction, perception, action mapping을 직접 학습하는 데 강하다. 반면 World Model은 행동의 결과를 상상하고, synthetic data를 만들고, policy를 평가하고, long-horizon planning을 지원하는 데 강하다.

CoT-VLA (V3)는 미래 visual goal을 예측한다는 점에서 VLA 안으로 작은 world model을 들여온 사례로 볼 수 있다. DreamGen (W10)은 world model이 robot data generator가 되는 방향이고, DreamZero/WAM (W12)은 world model이 policy 자체에 가까워지는 방향이다. Gemini Robotics (V7)나 GR00T N1 (P6) 같은 시스템은 reasoning, perception, action generation, safety stack이 분리되면서도 하나의 embodied agent처럼 동작하는 hybrid architecture를 지향한다.

따라서 스터디에서 중요한 질문은 "VLA가 맞는가, World Model이 맞는가?"가 아니라 "어떤 기능은 VLA가 담당하고, 어떤 기능은 world model이 담당하며, 이 둘을 어떻게 폐루프 시스템으로 묶을 것인가?"이다.

## 8. Safety, Evaluation, and Deployment

Physical AI는 디지털 AI보다 실패 비용이 크다. 따라서 benchmark score만으로는 충분하지 않다. SAM-6D (E1)는 zero-shot 6D pose estimation을 instance segmentation과 pose estimation으로 나누고, SAM 기반 proposal과 semantic/appearance/geometry matching score, partial-to-partial point matching을 결합한다. PhysVLM (V8)은 physical reachability를 VLM reasoning에 넣는다. Code-as-Monitor (E2)는 VLM-generated code와 spatio-temporal constraint를 이용해 reactive/proactive failure detection을 시도하며, severe disturbances에서 baseline 대비 higher success rate와 reduced execution time을 보고한다.

RoboArena (E3)는 generalist robot policy를 실제 세계에서 distributed evaluation하는 방향을 제시한다. 논문은 fixed centralized benchmark 대신 다양한 evaluator가 pairwise policy comparison을 수행하고 preference aggregation으로 policy ranking을 도출하는 방식을 제안한다. LIBERO (E4)는 lifelong robot learning 평가를 제공하며, 130 tasks와 procedural generation pipeline을 통해 declarative/procedural knowledge transfer를 본다. Continual VLA (D7)는 pretrained VLA가 task sequence를 학습할 때 forgetting이 기존 intuition과 다르게 나타날 수 있음을 보여준다. Hierarchical Active Inference (E5)는 learning보다 inference 기반 control을 강조한다는 점에서, RL/VLA 중심 접근과 다른 안전한 폐루프 제어 철학을 제공한다.

여기서 평가해야 할 것은 success rate만이 아니다. unseen object, unseen environment, embodiment transfer, intervention rate, safety violation, recovery ability, latency, robustness, human oversight 비용까지 함께 봐야 한다. Physical AI의 실제 배포는 "정책이 평균적으로 잘하는가"보다 "실패할 때 알아차리고 멈추거나 회복할 수 있는가"에 더 크게 의존한다.

## 9. Industrial, Healthcare, and Multi-Agent Extensions

Physical AI는 로봇 조작만의 문제가 아니다. Digital twin과 operations 관점에서는 RADiT (A7)처럼 simulation과 resource allocation이 결합된다. 공개 preview 기준 RADiT는 UAV-assisted IoV network에서 digital twin이 physical network dynamics를 real-time으로 반영하고, local/V2V/V2I offloading mode를 고려하며, multi-network DRL 기반 resource allocation으로 energy consumption, delay, task completion rate를 최적화한다. 제조/물류 현장에서는 world model이 미래 상태 시뮬레이터가 되고, OR/IE 방법론은 task allocation, scheduling, robust optimization을 담당할 수 있다.

Healthcare와 wearable sensor 영역도 넓은 의미의 Physical AI로 볼 수 있다. Foundation Models for Generalist Medical AI (A8)는 의료 AI가 multimodal, multi-task generalist model로 이동하는 방향을 보여준다. Wearable Sensor Data to Digital Biomarker Development (A9)는 센서 데이터를 임상적으로 의미 있는 digital biomarker로 번역하는 과정을 다룬다. SleepFM (A10)은 PSG 기반 multimodal sleep foundation model로 disease prediction을 수행한다. 여기서 "world"는 로봇 주변 환경이 아니라 인간의 몸과 생리 상태다.

Multi-agent 연구도 현장 배포에서 중요하다. ProAgent (A1), REVECA (A2), Resilience of LLM-Based Multi-Agent Collaboration (A3), Synergistic MAS (A4), BotSim (A5), Debate on Graph (A6)는 LLM 기반 multi-agent collaboration, faulty agent, malicious simulation, reliable reasoning을 다룬다. 이 논문들이 직접 로봇 논문은 아니더라도, 다중 로봇, 작업자, 센서, 관리자 agent가 함께 움직이는 Physical AI 시스템을 이해하는 데 참고할 수 있다.

## 10. 현장 적용 관점의 핵심 연결

현장 적용 관점에서는 Physical AI를 단순히 "로봇을 잘 움직이는 모델"로만 보면 좁다. 더 자연스러운 연결점은 데이터, 최적화, 안전, 센서, 운영 시스템이다.

- Data-centric AI: demonstration quality, synthetic data validation, dataset diversity, continual adaptation
- Operations research: robot task allocation, scheduling, resource allocation, digital twin optimization
- Safety and reliability: failure detection, intervention policy, risk-aware deployment, monitoring
- Sensor analytics: wearable, PSG, IoT signal foundation models and digital biomarkers
- Multi-agent systems: robot fleets, human-robot teams, warehouse/factory coordination

이 관점에서 Physical AI와 World Model은 기존 데이터 기반 의사결정에서 다루던 예측, 최적화, 이상탐지, 의사결정, 시뮬레이션 문제를 물리 세계로 확장하는 연구 지형으로 볼 수 있다.

## 11. Open Issues

현재 문헌을 관통하는 미해결 질문은 다음과 같다.

- 로봇 행동의 action representation은 token, continuous trajectory, diffusion sample, flow 중 무엇이 더 적절한가?
- VLA는 reachability, affordance, contact dynamics, safety constraint를 명시적 physical representation 없이 학습할 수 있는가?
- video world model이 생성한 synthetic data는 언제 실제 policy 성능을 높이고, 언제 harmful bias를 만든다?
- world model은 simulator, data generator, planner, policy 중 어느 역할을 중심으로 발전할 것인가?
- cross-embodiment learning에서 robot body 차이는 prompt, adapter, shared action space, 또는 별도 dynamics model 중 무엇으로 다뤄야 하는가?
- real-world evaluation은 success rate 외에 어떤 지표를 포함해야 하는가?
- human-in-the-loop monitoring과 intervention을 Physical AI architecture 안에 어떻게 넣을 것인가?
- healthcare/wearable sensor foundation model은 로봇 world model과 어떤 점에서 같고 어떤 점에서 다른가?

## 12. Metadata Source

논문 목록, 저자, 소속, venue, date, link는 [`metadata.md`](metadata.md)를 기준으로 관리한다. 이 문서는 그 논문들을 바탕으로 연구 흐름과 핵심 논점을 설명하는 narrative review 문서다.