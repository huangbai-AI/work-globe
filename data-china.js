(function () {
  "use strict";

  const cities = {
    "北京": { lat: 39.9042, lng: 116.4074 },
    "上海": { lat: 31.2304, lng: 121.4737 },
    "深圳": { lat: 22.5431, lng: 114.0579 },
    "苏州": { lat: 31.2989, lng: 120.5853 },
    "成都": { lat: 30.5728, lng: 104.0668 }
  };
  const snapshotDate = Date.UTC(2026, 6, 21);

  function relativeDate(postedAt) {
    const [year, month, day] = postedAt.split("-").map(Number);
    const days = Math.max(0, Math.round((snapshotDate - Date.UTC(year, month - 1, day)) / 86400000));
    return days === 0 ? "今天" : `${days} 天前`;
  }

  function officialJob({
    id, title, company, category, city, postedAt, source, sourceUrl, tags = [], summary = ""
  }) {
    const coordinates = cities[city];
    const location = `${city}，中国大陆`;
    return {
      id: `china-${id}`,
      title,
      company,
      category,
      location,
      lat: coordinates.lat,
      lng: coordinates.lng,
      remote: false,
      salary: "未公开",
      posted: relativeDate(postedAt),
      postedAt,
      attention: 12,
      source,
      sourceUrl,
      summary: summary || `${company} 官方招聘页将该岗位的工作地点列为${city}，具体职责、要求与申请状态请以官方页面为准。`,
      tags: [category, "到岗 / 混合", ...tags],
      evidence: "公司招聘官网",
      mapCity: location,
      mapPrecision: "city",
      mapBasis: "job-city"
    };
  }

  const additions = [
    officialJob({
      id: "apple-200670776-0351",
      title: "Platform Specialist, Industry - Domestic, Apple Ads Partner Development, Greater China",
      company: "Apple",
      category: "销售",
      city: "北京",
      postedAt: "2026-07-06",
      source: "Apple 招聘官网",
      sourceUrl: "https://jobs.apple.com/en-us/details/200670776-0351/platform-specialist-industry-domestic-apple-ads-partner-development-greater-china?team=SFTWR",
      tags: ["广告平台", "合作伙伴发展"]
    }),
    officialJob({
      id: "apple-200670613-0351",
      title: "Machine Learning Engineer - Generative AI & Agents",
      company: "Apple",
      category: "人工智能",
      city: "北京",
      postedAt: "2026-07-02",
      source: "Apple 招聘官网",
      sourceUrl: "https://jobs.apple.com/en-us/details/200670613-0351/machine-learning-engineer-generative-ai-agents?team=SLDEV",
      tags: ["生成式 AI", "智能体", "机器学习"]
    }),
    officialJob({
      id: "apple-200670625-0351",
      title: "Computer Vision / Machine Learning Engineer (Video Generation)",
      company: "Apple",
      category: "人工智能",
      city: "北京",
      postedAt: "2026-07-01",
      source: "Apple 招聘官网",
      sourceUrl: "https://jobs.apple.com/en-us/details/200670625-0351/computer-vision-machine-learning-engineer-video-generation?team=MLAI",
      tags: ["计算机视觉", "视频生成", "机器学习"]
    }),
    officialJob({
      id: "apple-200670629-0351",
      title: "Computer Vision / Machine Learning Intern (Video Intelligence)",
      company: "Apple",
      category: "人工智能",
      city: "北京",
      postedAt: "2026-07-01",
      source: "Apple 招聘官网",
      sourceUrl: "https://jobs.apple.com/en-us/details/200670629-0351/computer-vision-machine-learning-intern-video-intelligence?team=MLAI",
      tags: ["实习", "计算机视觉", "视频理解"]
    }),
    officialJob({
      id: "apple-200494844-3715",
      title: "Software Engineer Intern (Core OS) - Shanghai",
      company: "Apple",
      category: "开发",
      city: "上海",
      postedAt: "2026-07-21",
      source: "Apple 招聘官网",
      sourceUrl: "https://jobs.apple.com/en-us/details/200494844-3715/software-engineer-intern-core-os-shanghai?team=SFTWR",
      tags: ["实习", "Core OS", "软件工程"]
    }),
    officialJob({
      id: "apple-200494614-3715",
      title: "Product Design Engineer Intern (Mechanical) - Shanghai",
      company: "Apple",
      category: "设计",
      city: "上海",
      postedAt: "2026-07-21",
      source: "Apple 招聘官网",
      sourceUrl: "https://jobs.apple.com/en-us/details/200494614-3715/product-design-engineer-intern-mechanical-shanghai?team=HRDWR",
      tags: ["实习", "机械设计", "产品工程"]
    }),
    officialJob({
      id: "apple-200672684-3715",
      title: "Senior Software Engineer, Test Frameworks",
      company: "Apple",
      category: "开发",
      city: "上海",
      postedAt: "2026-07-17",
      source: "Apple 招聘官网",
      sourceUrl: "https://jobs.apple.com/en-us/details/200672684-3715/senior-software-engineer-test-frameworks?team=HRDWR",
      tags: ["测试框架", "软件工程", "资深"]
    }),
    officialJob({
      id: "apple-200672520-3715",
      title: "PCB Designer",
      company: "Apple",
      category: "设计",
      city: "上海",
      postedAt: "2026-07-17",
      source: "Apple 招聘官网",
      sourceUrl: "https://jobs.apple.com/en-us/details/200672520-3715/pcb-designer?team=HRDWR",
      tags: ["PCB", "硬件设计"]
    }),
    officialJob({
      id: "apple-200666948-3715",
      title: "Creative - Writer",
      company: "Apple",
      category: "写作",
      city: "上海",
      postedAt: "2026-07-14",
      source: "Apple 招聘官网",
      sourceUrl: "https://jobs.apple.com/en-us/details/200666948-3715/creative-writer?team=CORSV",
      tags: ["创意", "文案"]
    }),
    officialJob({
      id: "apple-200494600-3435",
      title: "System EE - EE/HW Intern (Shenzhen)",
      company: "Apple",
      category: "开发",
      city: "深圳",
      postedAt: "2026-07-21",
      source: "Apple 招聘官网",
      sourceUrl: "https://jobs.apple.com/en-us/details/200494600-3435/system-ee-ee-hw-intern-shenzhen?team=HRDWR",
      tags: ["实习", "电子工程", "硬件"]
    }),
    officialJob({
      id: "apple-200672519-3435",
      title: "Manufacturing Design Engineer",
      company: "Apple",
      category: "设计",
      city: "深圳",
      postedAt: "2026-07-17",
      source: "Apple 招聘官网",
      sourceUrl: "https://jobs.apple.com/en-us/details/200672519-3435/manufacturing-design-engineer?team=OPMFG",
      tags: ["制造", "工程设计"]
    }),
    officialJob({
      id: "apple-200667172-3435",
      title: "Technical Program Manager, iPad",
      company: "Apple",
      category: "产品",
      city: "深圳",
      postedAt: "2026-07-17",
      source: "Apple 招聘官网",
      sourceUrl: "https://jobs.apple.com/en-us/details/200667172-3435/technical-program-manager-ipad?team=OPMFG",
      tags: ["项目管理", "iPad", "硬件"]
    }),
    officialJob({
      id: "apple-200671855-3435",
      title: "Camera Hardware Design and Test Engineer",
      company: "Apple",
      category: "设计",
      city: "深圳",
      postedAt: "2026-07-10",
      source: "Apple 招聘官网",
      sourceUrl: "https://jobs.apple.com/en-us/details/200671855-3435/camera-hardware-design-and-test-engineer?team=HRDWR",
      tags: ["相机", "硬件设计", "测试"]
    }),
    officialJob({
      id: "apple-200672519-3916",
      title: "Manufacturing Design Engineer",
      company: "Apple",
      category: "设计",
      city: "苏州",
      postedAt: "2026-07-17",
      source: "Apple 招聘官网",
      sourceUrl: "https://jobs.apple.com/en-us/details/200672519-3916/manufacturing-design-engineer?team=OPMFG",
      tags: ["制造", "工程设计"]
    }),
    officialJob({
      id: "apple-200670634-3916",
      title: "Enclosure Global Supply Manager",
      company: "Apple",
      category: "运营",
      city: "苏州",
      postedAt: "2026-07-07",
      source: "Apple 招聘官网",
      sourceUrl: "https://jobs.apple.com/en-us/details/200670634-3916/enclosure-global-supply-manager?team=OPMFG",
      tags: ["供应链", "制造"]
    }),
    officialJob({
      id: "apple-200668367-3916",
      title: "Reliability Engineer, Mac",
      company: "Apple",
      category: "开发",
      city: "苏州",
      postedAt: "2026-06-25",
      source: "Apple 招聘官网",
      sourceUrl: "https://jobs.apple.com/en-us/details/200668367-3916/reliability-engineer-mac?team=OPMFG",
      tags: ["可靠性", "Mac", "硬件"]
    }),
    officialJob({
      id: "apple-200669096-3916",
      title: "Manufacturing Quality Engineer - Plastic Materials",
      company: "Apple",
      category: "运营",
      city: "苏州",
      postedAt: "2026-06-24",
      source: "Apple 招聘官网",
      sourceUrl: "https://jobs.apple.com/en-us/details/200669096-3916/manufacturing-quality-engineer-plastic-materials?team=OPMFG",
      tags: ["质量工程", "材料", "制造"]
    }),
    officialJob({
      id: "apple-200672519-1199",
      title: "Manufacturing Design Engineer",
      company: "Apple",
      category: "设计",
      city: "成都",
      postedAt: "2026-07-17",
      source: "Apple 招聘官网",
      sourceUrl: "https://jobs.apple.com/en-us/details/200672519-1199/manufacturing-design-engineer?team=OPMFG",
      tags: ["制造", "工程设计"]
    }),
    officialJob({
      id: "apple-200672850",
      title: "MLB (Main Logic Board) Product Engineer - Chengdu",
      company: "Apple",
      category: "开发",
      city: "成都",
      postedAt: "2026-07-17",
      source: "Apple 招聘官网",
      sourceUrl: "https://jobs.apple.com/en-us/details/200672850/mlb-main-logic-board-product-engineer-chengdu?team=HRDWR",
      tags: ["主逻辑板", "产品工程", "硬件"]
    }),
    officialJob({
      id: "apple-200651822-1199",
      title: "Reliability Engineer - MacBook",
      company: "Apple",
      category: "开发",
      city: "成都",
      postedAt: "2026-07-13",
      source: "Apple 招聘官网",
      sourceUrl: "https://jobs.apple.com/en-us/details/200651822-1199/reliability-engineer-macbook?team=HRDWR",
      tags: ["可靠性", "MacBook", "硬件"]
    }),
    officialJob({
      id: "apple-200671672-1199",
      title: "Mac Hardware Systems Engineer (SoC)",
      company: "Apple",
      category: "开发",
      city: "成都",
      postedAt: "2026-07-09",
      source: "Apple 招聘官网",
      sourceUrl: "https://jobs.apple.com/en-us/details/200671672-1199/mac-hardware-systems-engineer-soc?team=HRDWR",
      tags: ["SoC", "Mac", "硬件系统"]
    }),
    officialJob({
      id: "apple-200669539-1199",
      title: "Technical Program Manager, Mac",
      company: "Apple",
      category: "产品",
      city: "成都",
      postedAt: "2026-06-30",
      source: "Apple 招聘官网",
      sourceUrl: "https://jobs.apple.com/en-us/details/200669539-1199/technical-program-manager-mac?team=OPMFG",
      tags: ["项目管理", "Mac", "制造"]
    }),
    officialJob({
      id: "apple-200667159-1199",
      title: "Product Quality Engineer - iPad",
      company: "Apple",
      category: "运营",
      city: "成都",
      postedAt: "2026-06-24",
      source: "Apple 招聘官网",
      sourceUrl: "https://jobs.apple.com/en-us/details/200667159-1199/product-quality-engineer-ipad?team=OPMFG",
      tags: ["质量工程", "iPad", "制造"]
    }),
    officialJob({
      id: "microsoft-1970393556939072",
      title: "Software Engineer II - Voice Agent",
      company: "Microsoft",
      category: "人工智能",
      city: "北京",
      postedAt: "2026-07-17",
      source: "Microsoft Careers",
      sourceUrl: "https://apply.careers.microsoft.com/careers/job/1970393556939072?hl=en",
      tags: ["语音智能体", "软件工程"]
    }),
    officialJob({
      id: "microsoft-1970393556937646",
      title: "Principal Applied Scientist",
      company: "Microsoft",
      category: "人工智能",
      city: "北京",
      postedAt: "2026-07-14",
      source: "Microsoft Careers",
      sourceUrl: "https://apply.careers.microsoft.com/careers/job/1970393556937646?hl=en",
      tags: ["应用科学", "机器学习", "资深"]
    }),
    officialJob({
      id: "microsoft-1970393556929043",
      title: "Researcher",
      company: "Microsoft",
      category: "人工智能",
      city: "北京",
      postedAt: "2026-07-13",
      source: "Microsoft Careers",
      sourceUrl: "https://apply.careers.microsoft.com/careers/job/1970393556929043?hl=en",
      tags: ["研究", "机器学习"]
    }),
    officialJob({
      id: "microsoft-1970393556921923",
      title: "Workforce AI Solution Engineering Manager",
      company: "Microsoft",
      category: "人工智能",
      city: "上海",
      postedAt: "2026-07-08",
      source: "Microsoft Careers",
      sourceUrl: "https://apply.careers.microsoft.com/careers/job/1970393556921923?hl=en",
      tags: ["AI 解决方案", "团队管理"]
    }),
    officialJob({
      id: "nvidia-jr2019150",
      title: "Senior Deep Learning Solution Architect",
      company: "NVIDIA",
      category: "人工智能",
      city: "北京",
      postedAt: "2026-07-04",
      source: "NVIDIA Careers",
      sourceUrl: "https://nvidia.wd5.myworkdayjobs.com/en-US/NVIDIAExternalCareerSite/job/Senior-Deep-Learning-Solution-Architect_JR2019150",
      tags: ["深度学习", "解决方案架构", "资深"],
      summary: "NVIDIA 官方招聘页列出北京与上海办公地点；地图以页面列出的北京岗位城市为落点，具体职责与申请状态请以官方页面为准。"
    }),
    officialJob({
      id: "nvidia-jr2015614",
      title: "Solutions Architect - CPU and LPU",
      company: "NVIDIA",
      category: "开发",
      city: "北京",
      postedAt: "2026-07-18",
      source: "NVIDIA Careers",
      sourceUrl: "https://nvidia.wd5.myworkdayjobs.com/en-US/NVIDIAExternalCareerSite/job/China-Beijing/Solutions-Architect---CPU-and-LPU_JR2015614",
      tags: ["CPU", "LPU", "解决方案架构"],
      summary: "NVIDIA 官方招聘页列出北京与上海办公地点；地图以页面列出的北京岗位城市为落点，具体职责与申请状态请以官方页面为准。"
    }),
    officialJob({
      id: "nvidia-jr2012011",
      title: "System Software Engineer, Platform Operations",
      company: "NVIDIA",
      category: "开发",
      city: "上海",
      postedAt: "2026-07-15",
      source: "NVIDIA Careers",
      sourceUrl: "https://nvidia.wd5.myworkdayjobs.com/en-US/NVIDIAExternalCareerSite/job/China-Shanghai/System-Software-Engineer--Platform-Operations_JR2012011",
      tags: ["系统软件", "平台运营"],
      summary: "NVIDIA 官方招聘页列出上海与北京办公地点；地图以页面列出的上海岗位城市为落点，具体职责与申请状态请以官方页面为准。"
    }),
    officialJob({
      id: "nvidia-jr2015172-1",
      title: "Senior Perception Fusion and Deep Learning Engineer - Autonomous Vehicles",
      company: "NVIDIA",
      category: "人工智能",
      city: "上海",
      postedAt: "2026-07-18",
      source: "NVIDIA Careers",
      sourceUrl: "https://nvidia.wd5.myworkdayjobs.com/en-US/NVIDIAExternalCareerSite/job/Senior-Perception-Fusion-and-Deep-Learning-Engineer---Autonomous-Vehicles_JR2015172-1",
      tags: ["自动驾驶", "感知融合", "深度学习"],
      summary: "NVIDIA 官方招聘页列出上海与北京办公地点；地图以页面列出的上海岗位城市为落点，具体职责与申请状态请以官方页面为准。"
    })
  ];

  const existingIds = new Set((window.WORK_JOBS || []).map((job) => job.id));
  additions.forEach((job) => {
    if (!existingIds.has(job.id)) {
      window.WORK_JOBS.push(job);
      existingIds.add(job.id);
    }
  });

  if (window.WORK_DATA_META) {
    window.WORK_DATA_META.updatedAt = "2026-07-21T18:00:00+08:00";
    window.WORK_DATA_META.window = "2026-06-21 至 2026-07-21";
    window.WORK_DATA_META.note = "过去 30 天的公开招聘帖与职位页；新增中国大陆岗位来自 Apple、Microsoft 与 NVIDIA 官方招聘网站。";
    window.WORK_DATA_META.total = window.WORK_JOBS.length;
    window.WORK_DATA_META.remoteTotal = window.WORK_JOBS.filter((job) => job.remote).length;
  }
})();
