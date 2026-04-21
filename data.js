const questions = [
    {
        abbreviation: "ASAP",
        meaning: "As Soon As Possible",
        description: "Indica urgência em uma tarefa",
        examples: "Send ASAP|Need this ASAP",
        options: [
            "As Soon As Possible",
            "Always Send All Papers",
            "Ask Someone About Problems",
            "Apply System Access Policy"
        ]
    },
    {
        abbreviation: "FYI",
        meaning: "For Your Information",
        description: "Compartilhar informação sem exigir ação",
        examples: "FYI meeting moved|FYI done",
        options: [
            "For Your Information",
            "Find Your Idea",
            "Fix Your Input",
            "Follow Your Instincts"
        ]
    },
    {
        abbreviation: "BRB",
        meaning: "Be Right Back",
        description: "Ausência temporária",
        examples: "BRB coffee|BRB 5 min",
        options: [
            "Be Right Back",
            "Bring Red Bag",
            "Build Random Box",
            "Break Room Break"
        ]
    },
    {
        abbreviation: "LOL",
        meaning: "Laugh Out Loud",
        description: "Expressa risada",
        examples: "LOL funny|LOL good",
        options: [
            "Laugh Out Loud",
            "Look Over List",
            "Level Of Logic",
            "Load Online Library"
        ]
    },
    {
        abbreviation: "ETA",
        meaning: "Estimated Time of Arrival",
        description: "Estimativa de tempo",
        examples: "ETA 10 min|What's ETA?",
        options: [
            "Estimated Time of Arrival",
            "Enter The Area",
            "End The Activity",
            "Execute Task Automatically"
        ]
    },
    {
        abbreviation: "IMO",
        meaning: "In My Opinion",
        description: "Expressa opinião pessoal",
        examples: "IMO it's better|IMO change it",
        options: [
            "In My Opinion",
            "Improve My Output",
            "Insert Main Object",
            "Inspect Model Operation"
        ]
    },
    {
        abbreviation: "DM",
        meaning: "Direct Message",
        description: "Mensagem privada",
        examples: "Send DM|DM me",
        options: [
            "Direct Message",
            "Data Manager",
            "Device Mode",
            "Document Method"
        ]
    },
    {
        abbreviation: "AFK",
        meaning: "Away From Keyboard",
        description: "Longe do teclado",
        examples: "AFK lunch|AFK now",
        options: [
            "Away From Keyboard",
            "Access File Key",
            "Apply Fast Knowledge",
            "Active Form Keeper"
        ]
    },
    {
        abbreviation: "TTYL",
        meaning: "Talk To You Later",
        description: "Falar depois",
        examples: "TTYL later|TTYL soon",
        options: [
            "Talk To You Later",
            "Take The Yellow Line",
            "Turn To Your Left",
            "Track The Yearly Logs"
        ]
    },
    {
        abbreviation: "GTG",
        meaning: "Got To Go",
        description: "Preciso sair",
        examples: "GTG now|GTG bye",
        options: [
            "Got To Go",
            "Go To Game",
            "Get The Guide",
            "Give The Goal"
        ]
    },

    {
        abbreviation: "OMG",
        meaning: "Oh My God",
        description: "Expressa surpresa",
        examples: "OMG wow|OMG amazing",
        options: [
            "Oh My God",
            "Open My Game",
            "Optimize Main Goal",
            "Organize My Group"
        ]
    },
    {
        abbreviation: "JK",
        meaning: "Just Kidding",
        description: "Indica brincadeira",
        examples: "JK relax|JK ok",
        options: [
            "Just Kidding",
            "Join Knowledge",
            "Jump Key",
            "Just Keep"
        ]
    },
    {
        abbreviation: "NP",
        meaning: "No Problem",
        description: "Sem problema",
        examples: "NP anytime|NP bro",
        options: [
            "No Problem",
            "New Project",
            "Next Phase",
            "Need Plan"
        ]
    },
    {
        abbreviation: "TY",
        meaning: "Thank You",
        description: "Agradecimento",
        examples: "TY so much|TY!",
        options: [
            "Thank You",
            "Test Your",
            "Track Yield",
            "Try Yourself"
        ]
    },
    {
        abbreviation: "YW",
        meaning: "You're Welcome",
        description: "Resposta a agradecimento",
        examples: "YW anytime|YW 😊",
        options: [
            "You're Welcome",
            "Your Work",
            "Yield Work",
            "You Win"
        ]
    },

    {
        abbreviation: "LMK",
        meaning: "Let Me Know",
        description: "Pedir retorno",
        examples: "LMK later|LMK please",
        options: [
            "Let Me Know",
            "Load My Key",
            "Link Main Kernel",
            "List Major Keys"
        ]
    },
    {
        abbreviation: "TBH",
        meaning: "To Be Honest",
        description: "Ser honesto",
        examples: "TBH I agree|TBH unsure",
        options: [
            "To Be Honest",
            "Take Big Help",
            "Test Basic Hardware",
            "Track Best Habit"
        ]
    },
    {
        abbreviation: "TIL",
        meaning: "Today I Learned",
        description: "Aprendi hoje",
        examples: "TIL fact|TIL something",
        options: [
            "Today I Learned",
            "Track Input Logs",
            "Test Internal Logic",
            "Transfer Info Layer"
        ]
    },
    {
        abbreviation: "BFF",
        meaning: "Best Friends Forever",
        description: "Melhores amigos",
        examples: "BFF ❤️|My BFF",
        options: [
            "Best Friends Forever",
            "Build Fast Features",
            "Bring Fresh Food",
            "Backup File Format"
        ]
    },
    {
        abbreviation: "OMW",
        meaning: "On My Way",
        description: "A caminho",
        examples: "OMW now|OMW there",
        options: [
            "On My Way",
            "Open Main Window",
            "Optimize Model Workflow",
            "Organize My Work"
        ]
    },

    {
        abbreviation: "RN",
        meaning: "Right Now",
        description: "Neste momento",
        examples: "Busy RN|Call RN",
        options: [
            "Right Now",
            "Run Network",
            "Read Node",
            "Reset Number"
        ]
    },
    {
        abbreviation: "NVM",
        meaning: "Never Mind",
        description: "Desconsiderar algo",
        examples: "NVM ignore|NVM fixed",
        options: [
            "Never Mind",
            "New Value Mode",
            "Next Version Model",
            "Node Value Map"
        ]
    },
    {
        abbreviation: "SUP",
        meaning: "What's Up",
        description: "Cumprimento informal",
        examples: "SUP man|SUP today",
        options: [
            "What's Up",
            "Start User Process",
            "Send Update Ping",
            "Setup User Profile"
        ]
    },
    {
        abbreviation: "WBU",
        meaning: "What About You",
        description: "Pergunta de retorno",
        examples: "I'm fine WBU?|WBU?",
        options: [
            "What About You",
            "Write Backup Unit",
            "Wait Buffer Update",
            "Work Base Utility"
        ]
    },
    {
        abbreviation: "HBU",
        meaning: "How About You",
        description: "Pergunta de retorno",
        examples: "Good HBU?|HBU doing",
        options: [
            "How About You",
            "Handle Base Unit",
            "Host Backup User",
            "Hold Buffer Usage"
        ]
    }
];

questions.push(
    {
        abbreviation: "ICYMI",
        meaning: "In Case You Missed It",
        description: "Usado para destacar algo que pode ter sido perdido",
        examples: "ICYMI update|ICYMI news",
        options: [
            "In Case You Missed It",
            "Insert Code Your Main Input",
            "Inspect Core Yield Model Index",
            "Include Config Your Module Info"
        ]
    },
    {
        abbreviation: "ICYDK",
        meaning: "In Case You Didn't Know",
        description: "Usado para introduzir informação nova",
        examples: "ICYDK fact|ICYDK info",
        options: [
            "In Case You Didn't Know",
            "Insert Config Your Data Kernel",
            "Inspect Core Yield Data Knowledge",
            "Include Class Your Domain Key"
        ]
    },
    {
        abbreviation: "AFAIK",
        meaning: "As Far As I Know",
        description: "Indica conhecimento limitado",
        examples: "AFAIK correct|AFAIK yes",
        options: [
            "As Far As I Know",
            "Apply Fast Access Input Kernel",
            "Analyze File And Index Key",
            "Add Feature And Improve Knowledge"
        ]
    },
    {
        abbreviation: "IIRC",
        meaning: "If I Recall Correctly",
        description: "Indica memória incerta",
        examples: "IIRC 2020|IIRC works",
        options: [
            "If I Recall Correctly",
            "Initialize Internal Runtime Core",
            "Inspect Input Resource Config",
            "Import Index Registry Cache"
        ]
    },
    {
        abbreviation: "ATM",
        meaning: "At The Moment",
        description: "Indica algo acontecendo agora",
        examples: "Busy ATM|Working ATM",
        options: [
            "At The Moment",
            "Access Task Manager",
            "Apply Test Method",
            "Analyze Time Metric"
        ]
    },

    {
        abbreviation: "GG",
        meaning: "Good Game",
        description: "Usado para elogiar desempenho",
        examples: "GG well played|GG!",
        options: [
            "Good Game",
            "Generate Global Map",
            "Get Group Mode",
            "Guide Game Model"
        ]
    },
    {
        abbreviation: "GL",
        meaning: "Good Luck",
        description: "Desejar boa sorte",
        examples: "GL today|GL!",
        options: [
            "Good Luck",
            "Generate Log Key",
            "Get Local Kernel",
            "Guide Level Knowledge"
        ]
    },
    {
        abbreviation: "HF",
        meaning: "Have Fun",
        description: "Desejar diversão",
        examples: "HF guys|GL HF",
        options: [
            "Have Fun",
            "Handle File Number",
            "Host Function Node",
            "Hold Frame Unit"
        ]
    },
    {
        abbreviation: "IRL",
        meaning: "In Real Life",
        description: "Fora do ambiente online",
        examples: "IRL meeting|IRL friend",
        options: [
            "In Real Life",
            "Insert Runtime Layer",
            "Inspect Resource Log",
            "Initialize Role Logic"
        ]
    },
    {
        abbreviation: "FTW",
        meaning: "For The Win",
        description: "Algo muito bom ou vencedor",
        examples: "This FTW|Win FTW",
        options: [
            "For The Win",
            "Fix Task Workflow",
            "Format Text Window",
            "Find Total Weight"
        ]
    },

    {
        abbreviation: "B2B",
        meaning: "Business To Business",
        description: "Transação entre empresas",
        examples: "B2B sales|B2B deal",
        options: [
            "Business To Business",
            "Build To Base",
            "Backup To Bucket",
            "Bridge To Backend"
        ]
    },
    {
        abbreviation: "B2C",
        meaning: "Business To Consumer",
        description: "Empresa para consumidor",
        examples: "B2C app|B2C market",
        options: [
            "Business To Consumer",
            "Build To Client",
            "Bridge To Core",
            "Backup To Cloud"
        ]
    },
    {
        abbreviation: "FAQ",
        meaning: "Frequently Asked Questions",
        description: "Perguntas frequentes",
        examples: "Check FAQ|FAQ page",
        options: [
            "Frequently Asked Questions",
            "Fast Access Query",
            "File Allocation Queue",
            "Format And Query"
        ]
    },
    {
        abbreviation: "RSVP",
        meaning: "Répondez S'il Vous Plaît",
        description: "Confirmação de presença",
        examples: "Please RSVP|RSVP today",
        options: [
            "Répondez S'il Vous Plaît",
            "Run System Validation Process",
            "Read Server Value Parameters",
            "Reset Service Variable Protocol"
        ]
    },
    {
        abbreviation: "DIY",
        meaning: "Do It Yourself",
        description: "Faça você mesmo",
        examples: "DIY project|DIY fix",
        options: [
            "Do It Yourself",
            "Develop Internal Yield",
            "Design Input YAML",
            "Deploy Integration Yard"
        ]
    },

    {
        abbreviation: "IDK",
        meaning: "I Don't Know",
        description: "Não saber algo",
        examples: "IDK answer|IDK why",
        options: [
            "I Don't Know",
            "Initialize Data Kernel",
            "Inspect Device Key",
            "Import Default Knowledge"
        ]
    },
    {
        abbreviation: "ILY",
        meaning: "I Love You",
        description: "Expressão de afeto",
        examples: "ILY ❤️|ILY always",
        options: [
            "I Love You",
            "Initialize Local Yield",
            "Inspect Layer Yield",
            "Insert Log Year"
        ]
    },
    {
        abbreviation: "XOXO",
        meaning: "Hugs And Kisses",
        description: "Expressão de carinho",
        examples: "XOXO ❤️|Bye XOXO",
        options: [
            "Hugs And Kisses",
            "Execute And Keep Operations",
            "Expand All Key Objects",
            "Export And Know Output"
        ]
    },
    {
        abbreviation: "CU",
        meaning: "See You",
        description: "Despedida informal",
        examples: "CU later|CU soon",
        options: [
            "See You",
            "Create User",
            "Control Unit",
            "Compute Usage"
        ]
    },
    {
        abbreviation: "L8R",
        meaning: "Later",
        description: "Depois",
        examples: "Talk L8R|See you L8R",
        options: [
            "Later",
            "Load Runtime",
            "Link Router",
            "List Records"
        ]
    },

    {
        abbreviation: "B4",
        meaning: "Before",
        description: "Antes",
        examples: "B4 noon|Done B4",
        options: [
            "Before",
            "Build Form",
            "Base File",
            "Basic Flow"
        ]
    },
    {
        abbreviation: "GR8",
        meaning: "Great",
        description: "Ótimo",
        examples: "GR8 job|GR8 news",
        options: [
            "Great",
            "Generate Route",
            "Get Resource",
            "Group Runtime"
        ]
    },
    {
        abbreviation: "PLS",
        meaning: "Please",
        description: "Pedido educado",
        examples: "PLS help|PLS send",
        options: [
            "Please",
            "Process Load System",
            "Print Log Status",
            "Push Local Script"
        ]
    },
    {
        abbreviation: "THX",
        meaning: "Thanks",
        description: "Agradecimento",
        examples: "THX a lot|THX!",
        options: [
            "Thanks",
            "Track Host XML",
            "Transfer HTTP XML",
            "Test Host Exchange"
        ]
    },
    {
        abbreviation: "MSG",
        meaning: "Message",
        description: "Mensagem",
        examples: "Send MSG|Got MSG",
        options: [
            "Message",
            "Manage System Group",
            "Monitor Service Gateway",
            "Modify Server Graph"
        ]
    },

    {
        abbreviation: "APP",
        meaning: "Application",
        description: "Aplicativo",
        examples: "Open APP|Mobile APP",
        options: [
            "Application",
            "Access Process Platform",
            "Analyze Program Pipeline",
            "Apply Product Package"
        ]
    },
    {
        abbreviation: "DEV",
        meaning: "Developer",
        description: "Desenvolvedor",
        examples: "DEV team|Backend DEV",
        options: [
            "Developer",
            "Deploy Environment Version",
            "Design Execution Variable",
            "Debug Event Value"
        ]
    },
    {
        abbreviation: "QA",
        meaning: "Quality Assurance",
        description: "Controle de qualidade",
        examples: "QA test|QA team",
        options: [
            "Quality Assurance",
            "Query Analysis",
            "Quick Access",
            "Queue Allocation"
        ]
    },
    {
        abbreviation: "BUG",
        meaning: "Software Error",
        description: "Erro no sistema",
        examples: "Fix BUG|Found BUG",
        options: [
            "Software Error",
            "Build User Graph",
            "Base Utility Gateway",
            "Binary Update Group"
        ]
    },
    {
        abbreviation: "FIX",
        meaning: "Correction",
        description: "Correção de erro",
        examples: "Apply FIX|Quick FIX",
        options: [
            "Correction",
            "File Index XML",
            "Fast Input Exchange",
            "Function Internal X"
        ]
    }
);