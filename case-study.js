/* ==========================================================================
   CASE-STUDY.JS: MISSION DATA, CHAPTER TRANSITIONS & BILINGUAL ENGINE
   ========================================================================== */

(function() {
  'use strict';

  const cases = {
    adhd: {
      chapter: '01',
      level: 'LVL 04 · LIVE',
      progress: '95%',
      prevId: 'affiliate',
      nextId: 'fnb',
      en: {
        kicker: '// MISSION BRIEFING: FOUNDER · PWA · LIVE',
        title: 'ADHD Behavioral Support Product',
        summary: 'A behavioral support system designed for executive dysfunction: eliminates decision paralysis, initiates micro-actions, and turns positive habits into visible Skill Tree progression.',
        tags: ['Flagship Mission', '6-Week Sprint', 'Zero AI Dependency', 'Behavioral System', 'PWA'],
        problemTitle: 'Standard productivity tools falsely assume users already possess full executive function.',
        problemCopy: '<p>When individuals know exactly what needs to be done but physically struggle to initiate, an overwhelming task list only intensifies cognitive fatigue. The core challenge is never about adding more checklists, it is about minimizing the number of micro-decisions required at the exact moment of hesitation.</p>',
        approachTitle: 'Architected specifically for "non-productive" days.',
        approachCopy: '<p>Core user loop: Daily Check-in → Today Focus → Task Decomposition → Action Initiation → Reflection → Skill Tree XP. The product thesis is not "grind more tasks", but rather propelling the user from paralysis to immediate, doable action.</p><ul><li>Deterministic rule engine at core: 100% operational even with zero AI connectivity.</li><li>Optional AI adapter reserved strictly for contextual prompt decomposition.</li><li>Skill Tree maps real executive competencies: Task Initiation, Time Awareness, and Impulse Control.</li></ul>',
        systemTitle: 'Rule-Based Core Engine with Modular AI Augmentation.',
        systemCopy: '<p>Rather than letting a stochastic LLM control critical user state, the architecture relies on finite state machines, weighted scoring tables, and deterministic heuristics. AI is only invoked when quantifiable metrics (such as time-to-start or initiation rate) improve.</p>',
        diagram: ['Check-in', 'Capacity Rule', 'Action Engine', 'Micro Action', 'Reflection', 'Skill XP'],
        learningTitle: 'Build Log & Key Takeaways: AI is an amplifier, not a product thesis.',
        learningCopy: '<p>The seminal insight from this mission: separate "AI assists in building" from "product requires AI to function". A resilient, predictable behavioral system delivers orders of magnitude more value to end users than an ephemeral chatbot wrapper.</p>'
      },
      vi: {
        kicker: '// HỒ SƠ NHIỆM VỤ: FOUNDER · PWA · LIVE',
        title: 'Hệ Thống Hỗ Trợ Hành Vi ADHD',
        summary: 'Hệ thống hỗ trợ hành vi tập trung vào executive function: giải quyết sự quá tải lựa chọn, kích hoạt hành động nhỏ đầu tiên và phản ánh tiến bộ qua Cây Kỹ Năng trực quan.',
        tags: ['Nhiệm vụ trọng điểm', 'Sprint 6 tuần', 'Không phụ thuộc AI', 'Behavioral Product', 'PWA'],
        problemTitle: 'Công cụ productivity thường giả định người dùng đã có đủ executive function để tự tổ chức.',
        problemCopy: '<p>Khi người dùng biết mình phải làm gì nhưng không thể bắt đầu, một danh sách task dài chỉ làm tăng cognitive load. Bài toán không phải là nhét thêm checklist, mà là cắt giảm tối đa số quyết định người dùng phải đưa ra ở thời điểm bị kẹt.</p>',
        approachTitle: 'Thiết kế cho những ngày người dùng không ở trạng thái "productive".',
        approachCopy: '<p>Vòng lặp cốt lõi: Check-in → Focus Ngày → Chia nhỏ task / Next Action → Thực hiện → Đúc kết → Cây Kỹ Năng. Mục tiêu không phải "làm nhiều việc hơn" mà là đưa người dùng từ trạng thái bất động sang một hành động khả thi ngay lập tức.</p><ul><li>Flow cốt lõi chạy 100% không cần kết nối AI.</li><li>Tầng AI là adapter tùy chọn, chỉ kích hoạt khi cần phân rã ngữ cảnh phức tạp.</li><li>Cây Kỹ Năng đo lường năng lực thật: Khởi sự (Initiation), Kiểm soát thời gian & Sự tập trung.</li></ul>',
        systemTitle: 'Hạt nhân Rule-based kết hợp Adapter AI bổ trợ.',
        systemCopy: '<p>Thay vì phụ thuộc vào chatbot phỏng đoán, hệ thống dùng state machine, scoring và deterministic rules. AI chỉ được bổ sung khi chứng minh được tác động rõ rệt lên metric thời gian bắt đầu hành động.</p>',
        diagram: ['Check-in', 'Đo dung lượng', 'Action Engine', 'Next Action', 'Đúc kết', 'Skill XP'],
        learningTitle: 'Nhật Ký Xây Dựng: AI là đòn bẩy, không phải product thesis.',
        learningCopy: '<p>Bài học quan trọng: tách rời việc "dùng AI để build nhanh" khỏi "sản phẩm bắt buộc phải có AI". Một hệ thống hành vi minh bạch, ổn định và có thể kiểm chứng giá trị hơn rất nhiều so với một wrapper chatbot hào nhoáng.</p>'
      }
    },
    fnb: {
      chapter: '02',
      level: 'LVL 03 · BETA',
      progress: '75%',
      prevId: 'adhd',
      nextId: 'cosplay',
      en: {
        kicker: '// MISSION BRIEFING: AI PRODUCT · B2B OPS · BETA',
        title: 'AI Operations for Vietnamese F&B',
        summary: 'Transforming commodity surveillance cameras into structured operational telemetry: Event Detection → Anomaly Pipeline → Actionable Floor Insights.',
        tags: ['AI Product', 'Computer Vision', 'B2B SaaS', 'Operations Engine'],
        problemTitle: 'Cameras record vast video data, but restaurant managers still lack actionable operational insight.',
        problemCopy: '<p>The real issue is not installing "AI Cameras". It is bridging the vast chasm between gigabytes of raw pixel streams and crucial shift decisions: queue bottlenecks, wait-time spikes, table turnover latency, and staff allocation anomalies.</p>',
        approachTitle: 'Start from operational ROI questions, never from deep learning models.',
        approachCopy: '<p>Discovery centered strictly around manager pain points: What operational signals are store owners willing to pay for? What latency threshold is acceptable? How does insight transform into immediate staff adjustment?</p>',
        systemTitle: 'Optical Sensor → Event Normalizer → Metrics Store → Manager Alert.',
        systemCopy: '<p>Computer vision represents only the outermost perception layer. The true intellectual property lies in event standardization and translating temporal detections into high-confidence business metrics.</p>',
        diagram: ['Camera Feed', 'CV Model', 'Event Stream', 'Metrics Store', 'Analytics', 'Floor Action'],
        learningTitle: 'Build Log: AI features create value only when bound to daily operational habits.',
        learningCopy: '<p>Reinforced the core engineering principle: Define tangible business outcomes and decision hooks before selecting AI model architectures.</p>'
      },
      vi: {
        kicker: '// HỒ SƠ NHIỆM VỤ: AI PRODUCT · B2B · BETA',
        title: 'AI Vận Hành F&B Việt Nam',
        summary: 'Biến camera an ninh thành nguồn dữ liệu vận hành: Phát hiện sự kiện → Chuẩn hóa dữ liệu → Báo cáo can thiệp tức thì cho quản lý.',
        tags: ['AI Product', 'Computer Vision', 'B2B Vận hành', 'Telemetry'],
        problemTitle: 'Camera ghi nhận nhiều hình ảnh, nhưng nhà quản lý vẫn thiếu insight để hành động.',
        problemCopy: '<p>Bài toán không nằm ở việc "gắn camera AI", mà ở khoảng cách giữa video thô và quyết định vận hành: hàng đợi dồn ứ, thời gian chờ món, tốc độ quay vòng bàn và sự cố ca làm việc.</p>',
        approachTitle: 'Bắt đầu từ câu hỏi vận hành, không bắt đầu từ mô hình AI.',
        approachCopy: '<p>Product discovery tập trung vào câu hỏi: chủ chuỗi sẵn sàng trả tiền để biết chỉ số nào, độ trễ cho phép là bao lâu, và tín hiệu nào thực sự dẫn tới thay đổi trên sàn phục vụ.</p>',
        systemTitle: 'Cảm biến → Phân tách sự kiện → Chuẩn hóa → Insight hành động.',
        systemCopy: '<p>Computer vision chỉ là tầng thu nhận. Giá trị thật sự nằm ở việc chuẩn hóa các event và biến chúng thành báo cáo vận hành có bối cảnh.</p>',
        diagram: ['Camera', 'Computer Vision', 'Phát hiện sự kiện', 'Dữ liệu vận hành', 'Phân tích AI', 'Hành động'],
        learningTitle: 'Nhật Ký Xây Dựng: Tính năng AI chỉ có giá trị khi gắn chặt với vận hành sàn.',
        learningCopy: '<p>Đúc kết nguyên tắc: Luôn xác định business outcome và điểm can thiệp trước khi lựa chọn công nghệ AI.</p>'
      }
    },
    cosplay: {
      chapter: '03',
      level: 'LVL 03 · SHIPPED',
      progress: '85%',
      prevId: 'fnb',
      nextId: 'auction',
      en: {
        kicker: '// MISSION BRIEFING: MARKETPLACE · FOUNDER · SHIPPED',
        title: 'Cosplay Rental Marketplace',
        summary: 'A purpose-built rental lifecycle platform prioritizing asset availability, trust verification, and multi-day booking states over standard e-commerce carts.',
        tags: ['Marketplace', 'Rental Lifecycle', 'Trust Architecture', 'Founder-led'],
        problemTitle: 'Rental is not merely standard e-commerce with a "Rent" button.',
        problemCopy: '<p>Calendar conflicts, security deposits, garment wear-and-tear verification, delivery handoffs, and dispute arbitration make rental lifecycles fundamentally different from one-shot purchases.</p>',
        approachTitle: 'Model the complete stateful lifecycle before touching UI designs.',
        approachCopy: '<p>The architecture balances two distinct stakeholders: costume owners need guaranteed asset security and schedule visibility; renters demand transparent condition logs, clear deposits, and reliable pickup handoffs.</p>',
        systemTitle: 'Owner Registry ↔ Core Rental State Machine ↔ Renter Escrow.',
        systemCopy: '<p>Every transaction functions as a robust finite state machine with deterministic transitions: Listed → Reserved → Inspected → Handoff → Active → Returned → Refunded.</p>',
        diagram: ['Listing', 'Availability Matrix', 'Escrow Booking', 'Condition Check', 'Handoff', 'Settlement'],
        learningTitle: 'Build Log: Trust is the core functional feature, not aesthetic decoration.',
        learningCopy: '<p>Peer-to-peer marketplaces scale only when systemic platform rules eliminate uncertainty and counterparty risk for both sides.</p>'
      },
      vi: {
        kicker: '// HỒ SƠ NHIỆM VỤ: SÀN THƯƠNG MẠI · FOUNDER · SHIPPED',
        title: 'Sàn Cho Thuê Trang Phục Cosplay',
        summary: 'Nền tảng cho thuê trang phục chuyên biệt tập trung vào vòng đời thuê, độ tin cậy và kiểm soát lịch trống thay vì chỉ là giỏ hàng mua sắm thông thường.',
        tags: ['Sàn thương mại', 'Vòng đời thuê', 'Hệ thống niềm tin', 'Founder'],
        problemTitle: 'Cho thuê không chỉ là một website thương mại gắn thêm nút "Thuê".',
        problemCopy: '<p>Trùng lịch đặt, tiền cọc, hao mòn hư tổn trang phục, giao nhận và độ tin cậy làm cho mô hình thuê có vòng đời phức tạp hơn nhiều so với bán đứt một lần.</p>',
        approachTitle: 'Thiết kế state machine vòng đời trước khi vẽ giao diện.',
        approachCopy: '<p>Hệ thống phục vụ hai phía: chủ đồ cần bảo toàn tài sản và kiểm soát lịch trống; người thuê cần sự minh bạch về tình trạng đồ, tiền cọc và thủ tục bàn giao.</p>',
        systemTitle: 'Chủ đồ ↔ State Machine trung gian ↔ Người thuê.',
        systemCopy: '<p>Mỗi booking là một giao dịch có trạng thái rõ ràng: Đăng tải → Đặt lịch → Ký quỹ cọc → Bàn giao → Sử dụng → Hoàn trả → Quyết toán cọc.</p>',
        diagram: ['Đăng đồ', 'Lịch trống', 'Đặt cọc ký quỹ', 'Bàn giao', 'Sử dụng', 'Hoàn tất'],
        learningTitle: 'Nhật Ký Xây Dựng: Hệ thống niềm tin (Trust) là tính năng cốt lõi.',
        learningCopy: '<p>Sàn chia sẻ chỉ có thể tăng trưởng bền vững khi giảm thiểu tối đa rủi ro cho cả hai bên tham gia.</p>'
      }
    },
    auction: {
      chapter: '04',
      level: 'LVL 04 · LIVE',
      progress: '90%',
      prevId: 'cosplay',
      nextId: 'scrum',
      en: {
        kicker: '// MISSION BRIEFING: REALTIME · FINTECH · LIVE',
        title: 'Auction Platform',
        summary: 'High-concurrency realtime auction system engineered for absolute transaction integrity, low-latency bid validation, and deterministic room settlement.',
        tags: ['Realtime System', 'Transaction Integrity', 'WebSockets', 'Product Spec'],
        problemTitle: 'Realtime bidding is fundamentally a data integrity challenge, not just latency.',
        problemCopy: '<p>When multiple competing bids arrive within fractions of a millisecond, the engine requires unambiguous arbitration rules to determine bid sequencing, room validity, and uncontested winners without client race conditions.</p>',
        approachTitle: 'State machine authority precedes UI animations.',
        approachCopy: '<p>The bidding flow enforces strict lifecycle bounds: Room Opened → Bid Accepted → Balance Pre-authorized → Room Ticking → Overtime Extension → Hammer Fall → Escrow Settlement.</p>',
        systemTitle: 'Authoritative Server Engine as Single Source of Truth.',
        systemCopy: '<p>All client interfaces strictly reflect backend authoritative state via WebSocket broadcasts rather than optimistically guessing auction status.</p>',
        diagram: ['Room Open', 'Bid Validator', 'Order Book', 'Timer Extension', 'Hammer Fall', 'Settlement'],
        learningTitle: 'Build Log: User trust is earned through uncompromising system determinism.',
        learningCopy: '<p>A realtime product succeeds when transparent audit logs and invariant platform rules leave zero ambiguity in contested situations.</p>'
      },
      vi: {
        kicker: '// HỒ SƠ NHIỆM VỤ: REALTIME · GIAO DỊCH · LIVE',
        title: 'Sàn Đấu Giá Trực Tuyến Realtime',
        summary: 'Hệ thống đấu giá trực tuyến realtime tập trung vào tính toàn vẹn giao dịch, độ trễ tối thiểu và cơ chế khớp lệnh xác thực.',
        tags: ['Hệ thống Realtime', 'Toàn vẹn giao dịch', 'WebSocket', 'Product'],
        problemTitle: 'Bidding realtime là bài toán toàn vẹn dữ liệu, không chỉ là tốc độ mạng.',
        problemCopy: '<p>Khi nhiều bid được gửi lên gần như cùng một tích tắc, hệ thống phải có rule máy chủ chuẩn mực để định đoạt thứ tự, trạng thái phiên và người thắng hợp lệ.</p>',
        approachTitle: 'Tính xác thực của State Machine đi trước hiệu ứng giao diện.',
        approachCopy: '<p>Luồng phiên đấu giá tuân thủ chu kỳ nghiêm ngặt: Mở phiên → Tiếp nhận bid → Xác thực ký quỹ → Đếm ngược → Gia hạn tự động → Chốt giá → Quyết toán.</p>',
        systemTitle: 'Máy chủ đóng vai trò duy nhất kiểm soát Authoritative State.',
        systemCopy: '<p>Tất cả client chỉ render trạng thái được xác nhận từ server qua WebSocket thay vì phỏng đoán kết quả cục bộ.</p>',
        diagram: ['Mở phiên', 'Kiểm tra bid', 'Khớp giá', 'Gia hạn phiên', 'Chốt winner', 'Thanh toán'],
        learningTitle: 'Nhật Ký Xây Dựng: Niềm tin giao dịch được tạo ra từ luật chơi minh bạch.',
        learningCopy: '<p>Trải nghiệm realtime chỉ thực sự thuyết phục khi cơ chế khớp lệnh minh bạch và lịch sử giao dịch không thể bị xáo trộn.</p>'
      }
    },
    scrum: {
      chapter: '05',
      level: 'LVL 04 · INTERNAL',
      progress: '90%',
      prevId: 'auction',
      nextId: 'qa',
      en: {
        kicker: '// MISSION BRIEFING: AGILE ARCHITECTURE · INTERNAL',
        title: 'AI Scrum / Delivery System',
        summary: 'Transforming noisy daily standups, hidden cross-team dependencies, and sprint drift into actionable delivery telemetry to eliminate manual status chasing.',
        tags: ['Agile Architecture', 'Delivery Telemetry', 'Workflow Automation', 'Scrum Tools'],
        problemTitle: 'Daily ceremonies routinely devolve into passive status reporting.',
        problemCopy: '<p>When daily standups are misused for managerial interrogation ("What did you finish?"), engineering teams lose the primary objective: peer synchronization, blocker discovery, and dependency forecasting.</p>',
        approachTitle: 'Decouple collaborative alignment from performance surveillance.',
        approachCopy: '<p>Standup data is structured into pure delivery signals: Yesterday Commitments → Today Objectives → Concrete Blockers → Cross-team Dependencies → Escalation Triggers.</p>',
        systemTitle: 'Unstructured Team Updates → Normalized Delivery Graph.',
        systemCopy: '<p>LLMs parse and aggregate asynchronous updates, while the single source of truth remains linked to Jira/Lark boards, PR velocity, and release milestone forecasts.</p>',
        diagram: ['Async Daily', 'NLP Parser', 'Dependency Graph', 'Blocker Detection', 'Velocity Metrics', 'Delivery Alert'],
        learningTitle: 'Build Log: High-leverage automation eliminates status pings without surveillance.',
        learningCopy: '<p>The objective of delivery tooling is maximum transparency and unblocked momentum, never micromanagement.</p>'
      },
      vi: {
        kicker: '// HỒ SƠ NHIỆM VỤ: QUY TRÌNH AGILE · VẬN HÀNH NỘI BỘ',
        title: 'Hệ Thống AI Vận Hành Scrum & Delivery',
        summary: 'Chuyển hóa dữ liệu Daily, blocker, phụ thuộc chéo và tiến độ sprint thành structured data để loại bỏ việc dí việc thủ công.',
        tags: ['Quy trình Agile', 'Tự động hóa Delivery', 'Công cụ Scrum', 'Telemetry'],
        problemTitle: 'Daily Standup rất dễ biến thành báo cáo tiến độ thụ động hoặc đối phó.',
        problemCopy: '<p>Khi buổi Daily bị dùng để hỏi "Làm tới đâu rồi?", đội ngũ mất đi mục tiêu cốt lõi: đồng bộ nhịp độ, phát hiện sớm blocker và dự báo rủi ro phụ thuộc giữa các bên.</p>',
        approachTitle: 'Tách biệt việc phối hợp công việc khỏi áp lực báo cáo giám sát.',
        approachCopy: '<p>Dữ liệu cập nhật tập trung vào: Việc đã hoàn thành → Mục tiêu hôm nay → Rào cản cụ thể → Yêu cầu phối hợp → Điểm cần can thiệp cấp bách.</p>',
        systemTitle: 'Hội thoại thường nhật → Dữ liệu vận hành có cấu trúc.',
        systemCopy: '<p>AI tổng hợp và bóc tách các blocker, nhưng nguồn sự thật vẫn bám sát bảng công việc Jira/Lark và tiến độ sprint thực tế.</p>',
        diagram: ['Cập nhật Daily', 'Bóc tách NLP', 'Phát hiện rào cản', 'Phụ thuộc chéo', 'Báo cáo Sprint', 'Hành động'],
        learningTitle: 'Nhật Ký Xây Dựng: Tự động hóa chuẩn mực phải giảm câu hỏi dí người.',
        learningCopy: '<p>Mục tiêu lớn nhất là độ thông suốt của dòng chảy công việc (flow) mà không tạo thêm gánh nặng thủ tục cho team.</p>'
      }
    },
    qa: {
      chapter: '06',
      level: 'LVL 05 · PRODUCTION',
      progress: '100%',
      prevId: 'scrum',
      nextId: 'hermes',
      en: {
        kicker: '// MISSION BRIEFING: QUALITY ARCHITECTURE · PRODUCTION',
        title: 'QA → Release Workflow',
        summary: 'Eliminating sprint-end QA crunch through test readiness gates, automated regression planning, and deterministic release criteria in fast-paced game pipelines.',
        tags: ['Quality Engineering', 'Game Dev Pipeline', 'Release Gates', 'CI/CD Automation'],
        problemTitle: 'Late developer handoffs compress QA into high-stress release bottlenecks.',
        problemCopy: '<p>When QA engineers have no advance visibility into which modules are landing, testing turns into chaotic firefighting rather than systematic, risk-mitigated verification.</p>',
        approachTitle: 'Shift verification left with explicit gates and forecast schedules.',
        approachCopy: '<p>Implemented QA Ready Checklists, Smoke Test automation, and staging gates to guarantee that features arriving for test satisfy foundational criteria before testing begins.</p>',
        systemTitle: 'Dev Handshake → QA Gate → Regression Matrix → Sign-Off → Deploy.',
        systemCopy: '<p>The pipeline formalizes "Ready" as an audited technical condition with measurable criteria rather than a subjective team feeling.</p>',
        diagram: ['Dev Complete', 'QA Ready Gate', 'Smoke Test', 'Deep Regression', 'Acceptance Gate', 'Production Ship'],
        learningTitle: 'Build Log: Quality engineering is a delivery accelerator, not a police checkpoint.',
        learningCopy: '<p>The earlier quality criteria are codified into delivery loops, the less releases depend on heroism or emergency hotfixes.</p>'
      },
      vi: {
        kicker: '// HỒ SƠ NHIỆM VỤ: CHẤT LƯỢNG SẢN PHẨM · PRODUCTION',
        title: 'Quy Trình QA → Release Workflow',
        summary: 'Xóa bỏ nút thắt cổ chai QA cuối sprint bằng forecast trước, tiêu chuẩn QA Ready, kế hoạch regression và release criteria kiểm soát được.',
        tags: ['Kỹ thuật QA', 'Quy trình Game Dev', 'Release Gate', 'Chất lượng'],
        problemTitle: 'Bàn giao code trễ làm QA bị dồn toàn bộ rủi ro vào những giờ chót trước giờ phát hành.',
        problemCopy: '<p>Khi QA không có thông tin dự báo tính năng nào sắp bàn giao, việc kiểm thử trở thành phản ứng chữa cháy thay vì chuẩn bị kịch bản phòng ngừa lỗi.</p>',
        approachTitle: 'Thiết lập tiêu chuẩn Ready Gate và dự báo thay vì chờ build.',
        approachCopy: '<p>Áp dụng QA Ready Checklist và Forecast kiểm thử giúp cả team nắm rõ tính năng nào đạt chuẩn sang test, thiếu gì và rủi ro nào cần chặn lại trước.</p>',
        systemTitle: 'Dev Ready → QA Gate → Test → Regression → Acceptance → Release.',
        systemCopy: '<p>Quy trình biến chữ "Ready" thành trạng thái có tiêu chí rõ ràng, không phụ thuộc vào cảm tính cá nhân.</p>',
        diagram: ['Dev hoàn tất', 'QA Ready Gate', 'Smoke Test', 'Kiểm thử hồi quy', 'Tiêu chuẩn nghiệm thu', 'Phát hành'],
        learningTitle: 'Nhật Ký Xây Dựng: Quy trình chất lượng là một phần của hệ thống delivery.',
        learningCopy: '<p>QA càng được kết nối sớm trong quá trình thiết kế, đợt release càng ít phụ thuộc vào những đợt cứu hỏa khẩn cấp.</p>'
      }
    },
    hermes: {
      chapter: '07',
      level: 'LVL 02 · LAB',
      progress: '60%',
      prevId: 'qa',
      nextId: 'affiliate',
      en: {
        kicker: '// MISSION BRIEFING: EXPERIMENTAL LAB · AGENTIC OS',
        title: 'Hermes Agentic OS',
        summary: 'An experimental multi-agent workspace featuring visual orchestration boards, behavioral provider personas, and persistent project memory graphs.',
        tags: ['Agentic OS', 'Autonomous Agents', 'Vector Memory', 'Workspace UX'],
        problemTitle: 'Traditional conversational chat interfaces obfuscate complex agent work states.',
        problemCopy: '<p>When autonomous agents perform multi-step planning, tool chaining, and file modifications, users require clear task boards, dependency views, and intermediate decision checkpoints rather than an endless scrolling text box.</p>',
        approachTitle: 'Transform AI workspaces into an interactive operational surface.',
        approachCopy: '<p>Engineered an orchestrator board with visual state nodes, agent behavior profiles, and memory graphs allowing humans to monitor, intercept, and steer execution in real time.</p>',
        systemTitle: 'Intent Ingestion → Central Orchestrator → Specialized Agents → Memory Graph.',
        systemCopy: '<p>System provides transparent visibility into tool calls, cost tokens, reasoning traces, and contextual rollback states.</p>',
        diagram: ['User Intent', 'Orchestrator', 'Agent A (Coder)', 'Agent B (Reviewer)', 'Memory Graph', 'Audited Outcome'],
        learningTitle: 'Build Log: Agentic UX is fundamentally about visibility and human-in-the-loop control.',
        learningCopy: '<p>The cognitive confidence gained from seeing how an agent reasons and executes tools is just as critical as raw model intelligence.</p>'
      },
      vi: {
        kicker: '// HỒ SƠ NHIỆM VỤ: PHÒNG THỬ NGHIỆM · AGENTIC OS',
        title: 'Hệ Điều Hành Đa-Agent Hermes',
        summary: 'Thử nghiệm workspace đa tác tử thông minh với bảng điều phối trực quan, profile hành vi và memory graph ngữ cảnh cho dự án.',
        tags: ['Agentic OS', 'Hệ thống Agent', 'Bộ nhớ Vector', 'UX Workspace'],
        problemTitle: 'Giao diện chat truyền thống che giấu quá nhiều trạng thái công việc của AI.',
        problemCopy: '<p>Khi tác tử AI thực hiện quy trình nhiều bước, người dùng cần nhìn thấy danh sách task, quan hệ phụ thuộc và quyết định trung gian thay vì chỉ một khung chat dài dằng dặc.</p>',
        approachTitle: 'Biến workspace AI thành một mặt phẳng vận hành có thể can thiệp được.',
        approachCopy: '<p>Concept tập trung vào bảng điều phối (orchestrator), visual flow, hồ sơ chuyên môn cho từng agent và memory graph lưu ngữ cảnh dài hạn.</p>',
        systemTitle: 'Ý định → Bộ điều phối → Các Agent chuyên môn → Memory Graph → Kết quả.',
        systemCopy: '<p>Giao diện cho phép người dùng quan sát từng tool call, điều chỉnh hành vi và can thiệp kịp thời trước khi thay đổi được ghi nhận.</p>',
        diagram: ['Ý định', 'Bộ điều phối', 'Agent Code', 'Agent Review', 'Memory Graph', 'Kết quả'],
        learningTitle: 'Nhật Ký Xây Dựng: Trải nghiệm Agentic là bài toán về sự minh bạch và kiểm soát.',
        learningCopy: '<p>Khả năng quan sát "hệ thống đang làm gì và tại sao" quan trọng không kém gì độ thông minh của mô hình nền tảng.</p>'
      }
    },
    affiliate: {
      chapter: '08',
      level: 'LVL 03 · PIPELINE',
      progress: '80%',
      prevId: 'hermes',
      nextId: 'adhd',
      en: {
        kicker: '// MISSION BRIEFING: GROWTH ENGINE · AUTOMATION',
        title: 'AI Affiliate Automation',
        summary: 'End-to-end automated content factory connecting product telemetry to script hooks, programmatic video assembly, publishing, and conversion feedback loops.',
        tags: ['Content Engine', 'Growth Ops', 'Automation Pipeline', 'Attribution'],
        problemTitle: 'High video impressions do not automatically translate into paid conversions.',
        problemCopy: '<p>Automating short-form video generation only addresses production cost. A durable commercial system must systematically learn which hooks retain qualified buyers and which product pain points drive verifiable affiliate revenue.</p>',
        approachTitle: 'Design an iterative feedback loop rather than a naive generation pipeline.',
        approachCopy: '<p>Product Catalog → Pain Point Extraction → Viral Hook Matrix → Scene Sequencing → Speech Synthesis → Automated Scheduling → Conversion Tracking → A/B Iteration.</p>',
        systemTitle: 'Closed-Loop Content Factory with Attribution Feedback.',
        systemCopy: '<p>Every generated creative asset is indexed with tracking parameters so subsequent iterations reinforce top-converting hooks and retire low-performing angles.</p>',
        diagram: ['Product Catalog', 'Pain Point Engine', 'Hook Generator', 'Video Pipeline', 'Multi-publish', 'Conversion Loop'],
        learningTitle: 'Build Log: Growth automation must optimize for downstream business outcomes.',
        learningCopy: '<p>Automation devoid of outcome feedback simply produces noise at scale. True efficiency is measured by verified conversion per cycle.</p>'
      },
      vi: {
        kicker: '// HỒ SƠ NHIỆM VỤ: TĂNG TRƯỞNG & TỰ ĐỘNG HÓA',
        title: 'Hệ Thống Tự Động Hóa Affiliate AI',
        summary: 'Chuỗi cung ứng nội dung tự động từ phân tích sản phẩm đến kịch bản hook, xuất video, phát hành đa kênh và vòng lặp học hỏi từ chuyển đổi.',
        tags: ['Tự động hóa Content', 'Hệ thống Growth', 'Đo lường chuyển đổi', 'AI Pipeline'],
        problemTitle: 'Lượt xem (views) không đồng nghĩa với doanh thu hay tỷ lệ chuyển đổi.',
        problemCopy: '<p>Tự động tạo video hàng loạt chỉ giải quyết bài toán chi phí sản xuất. Một hệ thống tăng trưởng thực sự phải học được hook nào giữ chân đúng khách hàng mục tiêu và đem lại doanh thu thật.</p>',
        approachTitle: 'Thiết kế vòng lặp phản hồi kín thay vì chuỗi sản xuất một chiều.',
        approachCopy: '<p>Sản phẩm → Khai thác pain point → Ma trận hook → Ghép cảnh & AI voice → Đăng tải tự động → Phân tích lượt mua → Thử nghiệm A/B liên tục.</p>',
        systemTitle: 'Nhà máy nội dung có cơ chế Closed-loop Learning.',
        systemCopy: '<p>Mỗi nội dung xuất xưởng đều gắn mã tracking để dữ liệu chuyển đổi thực tế quay ngược lại làm tham số tối ưu cho kịch bản tiếp theo.</p>',
        diagram: ['Sản phẩm', 'Pain Point', 'Tạo Hook', 'Dựng Video', 'Phát hành', 'Đo lường chuyển đổi'],
        learningTitle: 'Nhật Ký Xây Dựng: Tự động hóa phải tối ưu hóa kết quả kinh doanh cuối cùng.',
        learningCopy: '<p>Tự động hóa thiếu vòng lặp phản hồi chỉ tạo ra nhiều nội dung thừa hơn. Hệ thống hiệu quả phải gia tăng tỷ lệ chuyển đổi đo lường được trên mỗi chu kỳ.</p>'
      }
    }
  };

  // Get current case from URL parameter
  const params = new URLSearchParams(window.location.search);
  const caseId = params.get('id') || 'adhd';
  const currentCase = cases[caseId] || cases.adhd;

  // Language management
  let currentLang = window.getLanguage ? window.getLanguage() : (localStorage.getItem('portfolio_lang') || localStorage.getItem('site_lang') || 'en');

  function renderCase(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    localStorage.setItem('site_lang', lang);
    document.documentElement.lang = lang;

    // Update Language Switcher Buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', active);
      if (active) {
        btn.classList.add('bg-[var(--ca-yellow)]');
        btn.classList.remove('text-[var(--ca-ink)]/60');
      } else {
        btn.classList.remove('bg-[var(--ca-yellow)]');
        btn.classList.add('text-[var(--ca-ink)]/60');
      }
    });

    const data = currentCase[lang] || currentCase.en;

    // Update Browser Document Title
    document.title = `${data.title} | Duong Nguyen`;

    // HUD Status Bar
    const hudChapter = document.getElementById('hudChapter');
    const hudTitle = document.getElementById('hudTitle');
    const hudLevel = document.getElementById('hudLevel');
    const hudProgress = document.getElementById('hudProgress');

    if (hudChapter) hudChapter.textContent = `// CHAPTER ${currentCase.chapter} // 08`;
    if (hudTitle) hudTitle.textContent = `MISSION: ${data.title.toUpperCase()}`;
    if (hudLevel) hudLevel.textContent = `LEVEL: ${currentCase.level}`;
    if (hudProgress) hudProgress.textContent = `PROGRESS: ${currentCase.progress}`;

    // Hero Section
    const caseKicker = document.getElementById('case-kicker');
    const caseTitle = document.getElementById('case-title');
    const caseSummary = document.getElementById('case-summary');
    const caseTags = document.getElementById('case-tags');

    if (caseKicker) caseKicker.textContent = data.kicker;
    if (caseTitle) {
      caseTitle.textContent = data.title;
      if (window.setupStaggerText && window.triggerStaggerText) {
        caseTitle.dataset.staggerInit = 'false';
        window.setupStaggerText(caseTitle, data.title);
        window.triggerStaggerText(caseTitle);
      }
    }
    if (caseSummary) caseSummary.textContent = data.summary;
    if (caseTags) {
      caseTags.innerHTML = data.tags.map(t => `<span class="ca-chamfer-tag bg-white border border-[var(--ca-ink)] text-xs font-bold uppercase tracking-wider text-[var(--ca-ink)] shadow-[1px_1px_0_var(--ca-ink)]">${t}</span>`).join('');
    }

    // Cover Flow Diagram
    const coverDiagram = document.getElementById('coverDiagram');
    if (coverDiagram) {
      coverDiagram.innerHTML = data.diagram.map((item, idx) => `
        <span class="ca-chamfer-tag px-3 py-1.5 bg-white border border-[var(--ca-tick)] text-xs font-bold uppercase tracking-wider text-[var(--ca-ink)] shadow-[1.5px_1.5px_0_rgba(25,21,16,0.15)]">${item}</span>
        ${idx < data.diagram.length - 1 ? '<span class="text-sm font-bold text-[var(--ca-tick)]" aria-hidden="true">→</span>' : ''}
      `).join('');
    }

    // Checkpoint Headings & Content
    const problemTitle = document.getElementById('problem-title');
    const problemCopy = document.getElementById('problem-copy');
    const approachTitle = document.getElementById('approach-title');
    const approachCopy = document.getElementById('approach-copy');
    const systemTitle = document.getElementById('system-title');
    const systemCopy = document.getElementById('system-copy');
    const caseDiagram = document.getElementById('case-diagram');
    const learningTitle = document.getElementById('learning-title');
    const learningCopy = document.getElementById('learning-copy');

    if (problemTitle) problemTitle.textContent = data.problemTitle;
    if (problemCopy) problemCopy.innerHTML = data.problemCopy;
    if (approachTitle) approachTitle.textContent = data.approachTitle;
    if (approachCopy) approachCopy.innerHTML = data.approachCopy;
    if (systemTitle) systemTitle.textContent = data.systemTitle;
    if (systemCopy) systemCopy.innerHTML = data.systemCopy;
    if (caseDiagram) {
      caseDiagram.innerHTML = data.diagram.map((item, idx) => `
        <span>${item}</span>
        ${idx < data.diagram.length - 1 ? '<b aria-hidden="true">→</b>' : ''}
      `).join('');
    }
    if (learningTitle) learningTitle.textContent = data.learningTitle;
    if (learningCopy) learningCopy.innerHTML = data.learningCopy;

    // Localized Static Labels
    const navBackLink = document.getElementById('navBackLink');
    const navCtaText = document.getElementById('navCtaText');
    const coverKicker = document.getElementById('coverKicker');
    const tocProblem = document.getElementById('tocProblem');
    const tocApproach = document.getElementById('tocApproach');
    const tocSystem = document.getElementById('tocSystem');
    const tocLearning = document.getElementById('tocLearning');
    const labelProblem = document.getElementById('labelProblem');
    const labelApproach = document.getElementById('labelApproach');
    const labelSystem = document.getElementById('labelSystem');
    const labelLearning = document.getElementById('labelLearning');
    const chapterNavKicker = document.getElementById('chapterNavKicker');
    const chapterNavTitle = document.getElementById('chapterNavTitle');

    if (lang === 'vi') {
      if (navBackLink) navBackLink.textContent = '← Kho Dự Án';
      if (navCtaText) navCtaText.textContent = 'Kết Nối Ngay';
      if (coverKicker) coverKicker.textContent = '// SƠ ĐỒ DÒNG CHẢY HỆ THỐNG';
      if (tocProblem) tocProblem.textContent = 'Bối cảnh & Bài toán';
      if (tocApproach) tocApproach.textContent = 'Tiếp cận sản phẩm';
      if (tocSystem) tocSystem.textContent = 'Kiến trúc hệ thống';
      if (tocLearning) tocLearning.textContent = 'Nhật ký & Đúc kết';
      if (labelProblem) labelProblem.textContent = 'BỐI CẢNH & BÀI TOÁN';
      if (labelApproach) labelApproach.textContent = 'TIẾP CẬN SẢN PHẨM';
      if (labelSystem) labelSystem.textContent = 'KIẾN TRÚC HỆ THỐNG';
      if (labelLearning) labelLearning.textContent = 'NHẬT KÝ & ĐÚC KẾT';
      if (chapterNavKicker) chapterNavKicker.textContent = '// HOÀN THÀNH NHIỆM VỤ / CHUYỂN CHAPTER';
      if (chapterNavTitle) chapterNavTitle.textContent = 'Tiếp Tục Đến Chapter Tiếp Theo';
    } else {
      if (navBackLink) navBackLink.textContent = '← Mission Archive';
      if (navCtaText) navCtaText.textContent = 'Let’s Talk';
      if (coverKicker) coverKicker.textContent = '// SYSTEM FLOW DIAGRAM';
      if (tocProblem) tocProblem.textContent = 'Mission Brief';
      if (tocApproach) tocApproach.textContent = 'Product Approach';
      if (tocSystem) tocSystem.textContent = 'System Architecture';
      if (tocLearning) tocLearning.textContent = 'Build Log & Outcome';
      if (labelProblem) labelProblem.textContent = 'MISSION BRIEF';
      if (labelApproach) labelApproach.textContent = 'PRODUCT APPROACH';
      if (labelSystem) labelSystem.textContent = 'SYSTEM ARCHITECTURE';
      if (labelLearning) labelLearning.textContent = 'BUILD LOG & OUTCOME';
      if (chapterNavKicker) chapterNavKicker.textContent = '// MISSION COMPLETE / NEXT STAGE';
      if (chapterNavTitle) chapterNavTitle.textContent = 'Continue To Next Chapter';
    }

    // Previous & Next Chapter Buttons
    const prevCase = cases[currentCase.prevId];
    const nextCase = cases[currentCase.nextId];
    const prevBtn = document.getElementById('prevChapterBtn');
    const nextBtn = document.getElementById('nextChapterBtn');
    const prevText = document.getElementById('prevChapterText');
    const nextText = document.getElementById('nextChapterText');

    if (prevBtn && prevCase) {
      prevBtn.href = `case-study.html?id=${currentCase.prevId}`;
      const prevData = prevCase[lang] || prevCase.en;
      if (prevText) prevText.textContent = `CH ${prevCase.chapter}: ${prevData.title}`;
    }

    if (nextBtn && nextCase) {
      nextBtn.href = `case-study.html?id=${currentCase.nextId}`;
      const nextData = nextCase[lang] || nextCase.en;
      if (nextText) nextText.textContent = `CH ${nextCase.chapter}: ${nextData.title}`;
    }
  }

  // Listen for global language changes from app.js
  window.addEventListener('languagechange', (e) => {
    if (e.detail && e.detail.lang && e.detail.lang !== currentLang) {
      renderCase(e.detail.lang);
    }
  });

  // Bind Language Buttons: delegate to window.setLanguage if available, else fallback
  if (!window.setLanguage) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');
        if (lang) renderCase(lang);
      });
    });
  }

  // Table of Contents Active State on Scroll
  const sections = document.querySelectorAll('.case-chapter-section');
  const tocLinks = document.querySelectorAll('.case-checkpoints-nav a');

  window.addEventListener('scroll', () => {
    let currentId = '';
    sections.forEach(section => {
      const top = section.offsetTop - 140;
      if (window.scrollY >= top) {
        currentId = section.getAttribute('id');
      }
    });

    if (currentId) {
      tocLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
      });
    }
  }, { passive: true });

  // Initial Render
  renderCase(currentLang);

})();
