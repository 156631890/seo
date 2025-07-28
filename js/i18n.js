/**
 * 国际化(i18n)配置文件
 * 支持多语言版本
 */

const i18nConfig = {
  // 默认语言
  defaultLanguage: 'zh',
  
  // 支持的语言列表
  supportedLanguages: {
    'zh': { name: '中文', flag: '🇨🇳' },
    'en': { name: 'English', flag: '🇺🇸' },
    'ja': { name: '日本語', flag: '🇯🇵' },
    'ko': { name: '한국어', flag: '🇰🇷' },
    'es': { name: 'Español', flag: '🇪🇸' },
    'fr': { name: 'Français', flag: '🇫🇷' },
    'de': { name: 'Deutsch', flag: '🇩🇪' },
    'pt': { name: 'Português', flag: '🇧🇷' },
    'ru': { name: 'Русский', flag: '🇷🇺' },
    'ar': { name: 'العربية', flag: '🇸🇦' }
  },

  // 翻译文本
  translations: {
    // 中文
    zh: {
      // 网站标题和描述 - SEO优化版本
      siteTitle: '2025年最全AI工具合集 | 100+免费AI工具推荐 - MyAI',
      siteDescription: '🚀 发现2025年最好用的100+AI工具！包含ChatGPT、Midjourney、Claude等热门工具详细评测。免费AI工具推荐，提升工作效率10倍！立即获取专业使用指南。',
      
      // 工具页面专用SEO
      toolsPageTitle: 'AI工具大全2025 | 免费AI工具推荐与评测 - MyAI',
      toolsPageDescription: '⭐ 精选100+最佳AI工具！涵盖文本生成、图像创作、代码助手、效率工具等20+分类。专业评测+使用教程，帮你找到最适合的AI工具。',
      
      // 导航菜单
      nav: {
        home: '首页',
        tutorials: '教程',
        tools: '工具合集',
        about: '关于'
      },
      
      // 工具页面
      tools: {
        title: '🚀 AI工具与模型合集',
        subtitle: '发现最好的AI工具、大语言模型和智能Agent，提升你的工作效率和创造力',
        searchPlaceholder: '搜索工具名称、功能或标签...',
        searchButton: '搜索',
        allCategory: '全部',
        tabs: {
          tools: '🛠️ AI工具',
          models: '🧠 AI模型',
          agents: '🤖 AI Agent',
          compare: '⚖️ 模型对比'
        },
        stats: {
          tools: 'AI工具',
          models: 'AI模型',
          agents: 'AI Agent',
          categories: '分类'
        },
        buttons: {
          useNow: '立即使用',
          details: '详情',
          learnMore: '了解更多',
          viewGithub: '查看GitHub'
        },
        messages: {
          searching: '正在搜索',
          found: '找到',
          results: '个结果',
          filtered: '已筛选到',
          category: '分类，共',
          toolsCount: '个工具',
          reset: '已重置显示',
          noResults: '没有找到匹配的工具',
          noModels: '没有找到匹配的模型',
          noAgents: '没有找到匹配的Agent'
        }
      },
      
      // 分类
      categories: {
        'text-generation': { name: '文本生成', description: 'AI写作、内容创作工具' },
        'image-generation': { name: '图像生成', description: 'AI绘画、图片创作工具' },
        'code-assistant': { name: '代码助手', description: '编程辅助、代码生成工具' },
        'productivity': { name: '效率工具', description: '提升工作效率的AI工具' },
        'data-analysis': { name: '数据分析', description: 'AI数据处理和分析工具' },
        'voice-audio': { name: '语音音频', description: '语音合成、音频处理工具' },
        'video-creation': { name: '视频创作', description: 'AI视频生成和编辑工具' },
        'automation': { name: '自动化', description: 'AI自动化和工作流工具' },
        'research': { name: '研究助手', description: 'AI研究和信息收集工具' },
        'design': { name: '设计工具', description: 'AI设计和创意工具' },
        'education': { name: '教育学习', description: 'AI教育和学习辅助工具' },
        'healthcare': { name: '医疗健康', description: 'AI医疗和健康应用工具' },
        'finance': { name: '金融工具', description: 'AI金融分析和投资工具' },
        'marketing': { name: '营销工具', description: 'AI营销和广告工具' },
        'customer-service': { name: '客户服务', description: 'AI客服和用户支持工具' },
        'translation': { name: '翻译工具', description: 'AI翻译和语言处理工具' },
        'security': { name: '安全工具', description: 'AI安全和隐私保护工具' },
        'gaming': { name: '游戏开发', description: 'AI游戏开发和体验工具' },
        'music': { name: '音乐创作', description: 'AI音乐生成和编辑工具' },
        'legal': { name: '法律助手', description: 'AI法律分析和文档工具' }
      },
      
      // 页脚
      footer: {
        copyright: '© 2025 MyAI • 用 ❤️ 和 ☕ 构建'
      },
      
      // 通用
      common: {
        loading: '加载中...',
        error: '出错了',
        success: '成功',
        useCase: '用例',
        unknownUsers: '用户数未知'
      }
    },

    // 英文
    en: {
      // SEO优化版本
      siteTitle: 'Best AI Tools 2025 | 100+ Free AI Tools & Reviews - MyAI',
      siteDescription: '🚀 Discover 100+ best AI tools for 2025! ChatGPT, Midjourney, Claude & more. Free AI tools reviews, tutorials & comparisons. Boost productivity 10x with expert guides!',
      
      // 工具页面专用SEO
      toolsPageTitle: 'Complete AI Tools Directory 2025 | Free AI Tools Database - MyAI',
      toolsPageDescription: '⭐ Curated collection of 100+ top AI tools! Text generation, image creation, code assistants & more. Professional reviews + tutorials to find your perfect AI tool.',
      
      nav: {
        home: 'Home',
        tutorials: 'Tutorials',
        tools: 'Tools',
        about: 'About'
      },
      
      tools: {
        title: '🚀 AI Tools & Models Collection',
        subtitle: 'Discover the best AI tools, large language models, and intelligent agents to boost your productivity and creativity',
        searchPlaceholder: 'Search tool names, features, or tags...',
        searchButton: 'Search',
        allCategory: 'All',
        tabs: {
          tools: '🛠️ AI Tools',
          models: '🧠 AI Models',
          agents: '🤖 AI Agents',
          compare: '⚖️ Model Comparison'
        },
        stats: {
          tools: 'AI Tools',
          models: 'AI Models',
          agents: 'AI Agents',
          categories: 'Categories'
        },
        buttons: {
          useNow: 'Use Now',
          details: 'Details',
          learnMore: 'Learn More',
          viewGithub: 'View GitHub'
        },
        messages: {
          searching: 'Searching',
          found: 'Found',
          results: 'results',
          filtered: 'Filtered to',
          category: 'category, total',
          toolsCount: 'tools',
          reset: 'Display reset',
          noResults: 'No matching tools found',
          noModels: 'No matching models found',
          noAgents: 'No matching agents found'
        }
      },
      
      categories: {
        'text-generation': { name: 'Text Generation', description: 'AI writing and content creation tools' },
        'image-generation': { name: 'Image Generation', description: 'AI drawing and image creation tools' },
        'code-assistant': { name: 'Code Assistant', description: 'Programming assistance and code generation tools' },
        'productivity': { name: 'Productivity', description: 'AI tools to boost work efficiency' },
        'data-analysis': { name: 'Data Analysis', description: 'AI data processing and analysis tools' },
        'voice-audio': { name: 'Voice & Audio', description: 'Voice synthesis and audio processing tools' },
        'video-creation': { name: 'Video Creation', description: 'AI video generation and editing tools' },
        'automation': { name: 'Automation', description: 'AI automation and workflow tools' },
        'research': { name: 'Research Assistant', description: 'AI research and information gathering tools' },
        'design': { name: 'Design Tools', description: 'AI design and creative tools' },
        'education': { name: 'Education', description: 'AI education and learning assistance tools' },
        'healthcare': { name: 'Healthcare', description: 'AI medical and health application tools' },
        'finance': { name: 'Finance', description: 'AI financial analysis and investment tools' },
        'marketing': { name: 'Marketing', description: 'AI marketing and advertising tools' },
        'customer-service': { name: 'Customer Service', description: 'AI customer service and user support tools' },
        'translation': { name: 'Translation', description: 'AI translation and language processing tools' },
        'security': { name: 'Security', description: 'AI security and privacy protection tools' },
        'gaming': { name: 'Game Development', description: 'AI game development and experience tools' },
        'music': { name: 'Music Creation', description: 'AI music generation and editing tools' },
        'legal': { name: 'Legal Assistant', description: 'AI legal analysis and document tools' }
      },
      
      footer: {
        copyright: '© 2025 MyAI • Built with ❤️ and ☕'
      },
      
      common: {
        loading: 'Loading...',
        error: 'Error',
        success: 'Success',
        useCase: 'Use Case',
        unknownUsers: 'Unknown users'
      }
    },

    // 日文
    ja: {
      siteTitle: 'MyAI - AIツール・モデル集',
      siteDescription: '最高のAIツール、大規模言語モデル、インテリジェントエージェントを発見し、生産性と創造性を向上させましょう',
      
      nav: {
        home: 'ホーム',
        tutorials: 'チュートリアル',
        tools: 'ツール',
        about: 'について'
      },
      
      tools: {
        title: '🚀 AIツール・モデル集',
        subtitle: '最高のAIツール、大規模言語モデル、インテリジェントエージェントを発見し、生産性と創造性を向上させましょう',
        searchPlaceholder: 'ツール名、機能、タグを検索...',
        searchButton: '検索',
        allCategory: 'すべて',
        tabs: {
          tools: '🛠️ AIツール',
          models: '🧠 AIモデル',
          agents: '🤖 AIエージェント',
          compare: '⚖️ モデル比較'
        },
        stats: {
          tools: 'AIツール',
          models: 'AIモデル',
          agents: 'AIエージェント',
          categories: 'カテゴリ'
        },
        buttons: {
          useNow: '今すぐ使用',
          details: '詳細',
          learnMore: '詳しく見る',
          viewGithub: 'GitHub を見る'
        },
        messages: {
          searching: '検索中',
          found: '見つかりました',
          results: '件の結果',
          filtered: 'フィルタリング済み',
          category: 'カテゴリ、合計',
          toolsCount: 'ツール',
          reset: '表示をリセット',
          noResults: '一致するツールが見つかりません',
          noModels: '一致するモデルが見つかりません',
          noAgents: '一致するエージェントが見つかりません'
        }
      },
      
      categories: {
        'text-generation': { name: 'テキスト生成', description: 'AI文章作成・コンテンツ制作ツール' },
        'image-generation': { name: '画像生成', description: 'AI描画・画像作成ツール' },
        'code-assistant': { name: 'コードアシスタント', description: 'プログラミング支援・コード生成ツール' },
        'productivity': { name: '生産性ツール', description: '作業効率を向上させるAIツール' },
        'data-analysis': { name: 'データ分析', description: 'AIデータ処理・分析ツール' },
        'voice-audio': { name: '音声・オーディオ', description: '音声合成・音声処理ツール' },
        'video-creation': { name: '動画制作', description: 'AI動画生成・編集ツール' },
        'automation': { name: '自動化', description: 'AI自動化・ワークフローツール' },
        'research': { name: '研究アシスタント', description: 'AI研究・情報収集ツール' },
        'design': { name: 'デザインツール', description: 'AIデザイン・クリエイティブツール' },
        'education': { name: '教育', description: 'AI教育・学習支援ツール' },
        'healthcare': { name: 'ヘルスケア', description: 'AI医療・健康アプリケーションツール' },
        'finance': { name: '金融', description: 'AI金融分析・投資ツール' },
        'marketing': { name: 'マーケティング', description: 'AIマーケティング・広告ツール' },
        'customer-service': { name: 'カスタマーサービス', description: 'AIカスタマーサービス・ユーザーサポートツール' },
        'translation': { name: '翻訳', description: 'AI翻訳・言語処理ツール' },
        'security': { name: 'セキュリティ', description: 'AIセキュリティ・プライバシー保護ツール' },
        'gaming': { name: 'ゲーム開発', description: 'AIゲーム開発・体験ツール' },
        'music': { name: '音楽制作', description: 'AI音楽生成・編集ツール' },
        'legal': { name: '法務アシスタント', description: 'AI法務分析・文書ツール' }
      },
      
      footer: {
        copyright: '© 2025 MyAI • ❤️ と ☕ で構築'
      },
      
      common: {
        loading: '読み込み中...',
        error: 'エラー',
        success: '成功',
        useCase: '使用例',
        unknownUsers: 'ユーザー数不明'
      }
    },

    // 韩文
    ko: {
      siteTitle: 'MyAI - AI 도구 및 모델 컬렉션',
      siteDescription: '최고의 AI 도구, 대규모 언어 모델, 지능형 에이전트를 발견하여 생산성과 창의성을 향상시키세요',
      
      nav: {
        home: '홈',
        tutorials: '튜토리얼',
        tools: '도구',
        about: '소개'
      },
      
      tools: {
        title: '🚀 AI 도구 및 모델 컬렉션',
        subtitle: '최고의 AI 도구, 대규모 언어 모델, 지능형 에이전트를 발견하여 생산성과 창의성을 향상시키세요',
        searchPlaceholder: '도구 이름, 기능 또는 태그 검색...',
        searchButton: '검색',
        allCategory: '전체',
        tabs: {
          tools: '🛠️ AI 도구',
          models: '🧠 AI 모델',
          agents: '🤖 AI 에이전트',
          compare: '⚖️ 모델 비교'
        },
        stats: {
          tools: 'AI 도구',
          models: 'AI 모델',
          agents: 'AI 에이전트',
          categories: '카테고리'
        },
        buttons: {
          useNow: '지금 사용',
          details: '세부정보',
          learnMore: '더 알아보기',
          viewGithub: 'GitHub 보기'
        },
        messages: {
          searching: '검색 중',
          found: '찾았습니다',
          results: '개 결과',
          filtered: '필터링됨',
          category: '카테고리, 총',
          toolsCount: '개 도구',
          reset: '표시 재설정',
          noResults: '일치하는 도구를 찾을 수 없습니다',
          noModels: '일치하는 모델을 찾을 수 없습니다',
          noAgents: '일치하는 에이전트를 찾을 수 없습니다'
        }
      },
      
      categories: {
        'text-generation': { name: '텍스트 생성', description: 'AI 글쓰기 및 콘텐츠 제작 도구' },
        'image-generation': { name: '이미지 생성', description: 'AI 그림 및 이미지 제작 도구' },
        'code-assistant': { name: '코드 어시스턴트', description: '프로그래밍 지원 및 코드 생성 도구' },
        'productivity': { name: '생산성 도구', description: '업무 효율성을 높이는 AI 도구' },
        'data-analysis': { name: '데이터 분석', description: 'AI 데이터 처리 및 분석 도구' },
        'voice-audio': { name: '음성 및 오디오', description: '음성 합성 및 오디오 처리 도구' },
        'video-creation': { name: '비디오 제작', description: 'AI 비디오 생성 및 편집 도구' },
        'automation': { name: '자동화', description: 'AI 자동화 및 워크플로우 도구' },
        'research': { name: '연구 어시스턴트', description: 'AI 연구 및 정보 수집 도구' },
        'design': { name: '디자인 도구', description: 'AI 디자인 및 창작 도구' },
        'education': { name: '교육', description: 'AI 교육 및 학습 지원 도구' },
        'healthcare': { name: '헬스케어', description: 'AI 의료 및 건강 애플리케이션 도구' },
        'finance': { name: '금융', description: 'AI 금융 분석 및 투자 도구' },
        'marketing': { name: '마케팅', description: 'AI 마케팅 및 광고 도구' },
        'customer-service': { name: '고객 서비스', description: 'AI 고객 서비스 및 사용자 지원 도구' },
        'translation': { name: '번역', description: 'AI 번역 및 언어 처리 도구' },
        'security': { name: '보안', description: 'AI 보안 및 개인정보 보호 도구' },
        'gaming': { name: '게임 개발', description: 'AI 게임 개발 및 경험 도구' },
        'music': { name: '음악 제작', description: 'AI 음악 생성 및 편집 도구' },
        'legal': { name: '법무 어시스턴트', description: 'AI 법무 분석 및 문서 도구' }
      },
      
      footer: {
        copyright: '© 2025 MyAI • ❤️ 와 ☕ 로 제작'
      },
      
      common: {
        loading: '로딩 중...',
        error: '오류',
        success: '성공',
        useCase: '사용 사례',
        unknownUsers: '사용자 수 알 수 없음'
      }
    },

    // 西班牙文
    es: {
      siteTitle: 'MyAI - Colección de Herramientas y Modelos de IA',
      siteDescription: 'Descubre las mejores herramientas de IA, modelos de lenguaje grandes y agentes inteligentes para impulsar tu productividad y creatividad',
      
      nav: {
        home: 'Inicio',
        tutorials: 'Tutoriales',
        tools: 'Herramientas',
        about: 'Acerca de'
      },
      
      tools: {
        title: '🚀 Colección de Herramientas y Modelos de IA',
        subtitle: 'Descubre las mejores herramientas de IA, modelos de lenguaje grandes y agentes inteligentes para impulsar tu productividad y creatividad',
        searchPlaceholder: 'Buscar nombres de herramientas, características o etiquetas...',
        searchButton: 'Buscar',
        allCategory: 'Todas',
        tabs: {
          tools: '🛠️ Herramientas de IA',
          models: '🧠 Modelos de IA',
          agents: '🤖 Agentes de IA',
          compare: '⚖️ Comparación de Modelos'
        },
        stats: {
          tools: 'Herramientas de IA',
          models: 'Modelos de IA',
          agents: 'Agentes de IA',
          categories: 'Categorías'
        },
        buttons: {
          useNow: 'Usar Ahora',
          details: 'Detalles',
          learnMore: 'Saber Más',
          viewGithub: 'Ver GitHub'
        },
        messages: {
          searching: 'Buscando',
          found: 'Encontrado',
          results: 'resultados',
          filtered: 'Filtrado a',
          category: 'categoría, total',
          toolsCount: 'herramientas',
          reset: 'Pantalla restablecida',
          noResults: 'No se encontraron herramientas coincidentes',
          noModels: 'No se encontraron modelos coincidentes',
          noAgents: 'No se encontraron agentes coincidentes'
        }
      },
      
      categories: {
        'text-generation': { name: 'Generación de Texto', description: 'Herramientas de escritura y creación de contenido con IA' },
        'image-generation': { name: 'Generación de Imágenes', description: 'Herramientas de dibujo y creación de imágenes con IA' },
        'code-assistant': { name: 'Asistente de Código', description: 'Herramientas de asistencia de programación y generación de código' },
        'productivity': { name: 'Productividad', description: 'Herramientas de IA para impulsar la eficiencia laboral' },
        'data-analysis': { name: 'Análisis de Datos', description: 'Herramientas de procesamiento y análisis de datos con IA' },
        'voice-audio': { name: 'Voz y Audio', description: 'Herramientas de síntesis de voz y procesamiento de audio' },
        'video-creation': { name: 'Creación de Video', description: 'Herramientas de generación y edición de video con IA' },
        'automation': { name: 'Automatización', description: 'Herramientas de automatización y flujo de trabajo con IA' },
        'research': { name: 'Asistente de Investigación', description: 'Herramientas de investigación y recopilación de información con IA' },
        'design': { name: 'Herramientas de Diseño', description: 'Herramientas de diseño y creatividad con IA' },
        'education': { name: 'Educación', description: 'Herramientas de educación y asistencia de aprendizaje con IA' },
        'healthcare': { name: 'Salud', description: 'Herramientas de aplicación médica y de salud con IA' },
        'finance': { name: 'Finanzas', description: 'Herramientas de análisis financiero e inversión con IA' },
        'marketing': { name: 'Marketing', description: 'Herramientas de marketing y publicidad con IA' },
        'customer-service': { name: 'Servicio al Cliente', description: 'Herramientas de servicio al cliente y soporte de usuario con IA' },
        'translation': { name: 'Traducción', description: 'Herramientas de traducción y procesamiento de idiomas con IA' },
        'security': { name: 'Seguridad', description: 'Herramientas de seguridad y protección de privacidad con IA' },
        'gaming': { name: 'Desarrollo de Juegos', description: 'Herramientas de desarrollo y experiencia de juegos con IA' },
        'music': { name: 'Creación Musical', description: 'Herramientas de generación y edición de música con IA' },
        'legal': { name: 'Asistente Legal', description: 'Herramientas de análisis legal y documentos con IA' }
      },
      
      footer: {
        copyright: '© 2025 MyAI • Construido con ❤️ y ☕'
      },
      
      common: {
        loading: 'Cargando...',
        error: 'Error',
        success: 'Éxito',
        useCase: 'Caso de Uso',
        unknownUsers: 'Usuarios desconocidos'
      }
    }
  }
};

/**
 * 国际化管理器
 */
class I18nManager {
  constructor() {
    this.currentLanguage = this.detectLanguage();
    this.translations = i18nConfig.translations;
  }

  /**
   * 检测用户语言
   */
  detectLanguage() {
    // 1. 检查URL参数
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && i18nConfig.supportedLanguages[langParam]) {
      return langParam;
    }

    // 2. 检查localStorage
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && i18nConfig.supportedLanguages[savedLang]) {
      return savedLang;
    }

    // 3. 检查浏览器语言
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0];
    if (i18nConfig.supportedLanguages[langCode]) {
      return langCode;
    }

    // 4. 返回默认语言
    return i18nConfig.defaultLanguage;
  }

  /**
   * 设置语言
   */
  setLanguage(lang) {
    if (!i18nConfig.supportedLanguages[lang]) {
      console.warn(`Language ${lang} is not supported`);
      return;
    }

    this.currentLanguage = lang;
    localStorage.setItem('preferred-language', lang);
    
    // 更新URL参数
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);

    // 触发语言变更事件
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
  }

  /**
   * 获取翻译文本
   */
  t(key, params = {}) {
    const keys = key.split('.');
    let value = this.translations[this.currentLanguage];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // 如果当前语言没有翻译，尝试使用默认语言
        value = this.translations[i18nConfig.defaultLanguage];
        for (const k2 of keys) {
          if (value && typeof value === 'object' && k2 in value) {
            value = value[k2];
          } else {
            console.warn(`Translation key "${key}" not found`);
            return key;
          }
        }
        break;
      }
    }

    if (typeof value !== 'string') {
      console.warn(`Translation key "${key}" is not a string`);
      return key;
    }

    // 替换参数
    return value.replace(/\{\{(\w+)\}\}/g, (match, param) => {
      return params[param] || match;
    });
  }

  /**
   * 获取当前语言
   */
  getCurrentLanguage() {
    return this.currentLanguage;
  }

  /**
   * 获取支持的语言列表
   */
  getSupportedLanguages() {
    return i18nConfig.supportedLanguages;
  }

  /**
   * 初始化页面翻译
   */
  initPageTranslation() {
    // 更新页面标题
    document.title = this.t('siteTitle');
    
    // 更新meta描述
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', this.t('siteDescription'));
    }

    // 更新HTML lang属性
    document.documentElement.lang = this.currentLanguage;

    // 翻译所有带有data-i18n属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.t(key);
      
      if (element.tagName === 'INPUT' && element.type === 'text') {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    });
    
    // 显示一个消息，表明翻译已完成
    console.log(`页面已翻译为 ${this.currentLanguage} 语言`);
  }
}

// 创建全局实例
const i18n = new I18nManager();

// 导出到window对象
window.i18n = i18n;
window.i18nConfig = i18nConfig;

// 不在这里自动初始化，由init-i18n.js统一管理