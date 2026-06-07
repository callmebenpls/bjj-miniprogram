const categories = ["过腿", "防守", "降服", "体能", "封闭式防守", "开放式防守", "半防守", "德拉防守", "蜘蛛防守", "X guard", "蝴蝶勾", "摔法", "扫技", "平衡", "逃脱", "压制", "关节技", "绞技", "龟式防守", "北南位置"];

const courses = [
  {
    "id": "pin-escapes-turtle-escapes-bjj-fundamentals-go-further-faster-by-john-danaher",
    "title": "Pin Escapes & Turtle Escapes: BJJ Fundamentals - Go Further Faster by John Danaher",
    "titleCn": "压制逃脱与龟式逃脱：BJJ基础 - Go Further Faster系列 - John Danaher",
    "instructor": "John Danaher",
    "cat": "防守",
    "chapters": 99,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_PinEscapes_TurtleEscapesBJJFundamentals-GoFurtherFaster_FRONTCover1.jpg?v=1762458757"
  },
  {
    "id": "power-ride-a-new-philosophy-on-pinning-by-craig-jones",
    "title": "Power Ride: A New Philosophy on Pinning by Craig Jones",
    "titleCn": "强力骑乘：Craig Jones的压制新哲学",
    "instructor": "Craig Jones",
    "cat": "逃脱",
    "chapters": 49,
    "volumes": 6,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/CraigJones_PowerRide-ANewPhilosophyonPinning_CoverFRONT.jpg?v=1762462065"
  },
  {
    "id": "systematically-attacking-the-guard-3-0-inside-camping-by-gordon-ryan",
    "title": "Systematically Attacking the Guard 3.0: Inside Camping by Gordon Ryan",
    "titleCn": "系统性进攻防守 3.0：内侧控制 - Gordon Ryan",
    "instructor": "Gordon Ryan",
    "cat": "压制",
    "chapters": 81,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/Gordon_Ryan_Systematically_attacking_the_guard_3.0_-_Inside_Camping_Cover_FRONT.jpg?v=1762467658"
  },
  {
    "id": "octopus-guard-2-0-by-craig-jones",
    "title": "Octopus Guard 2.0 by Craig Jones",
    "titleCn": "章鱼防守 2.0 - Craig Jones",
    "instructor": "Craig Jones",
    "cat": "过腿",
    "chapters": 31,
    "volumes": 4,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/CraigJonesOctopusGuard2CoverFront.jpg?v=1766766183"
  },
  {
    "id": "systematically-attacking-the-scrimmage-upper-body-takedowns-by-gordon-ryan",
    "title": "Systematically Attacking The Scrimmage: Upper Body Takedowns by Gordon Ryan",
    "titleCn": "系统性进攻缠斗：上半身摔法 - Gordon Ryan",
    "instructor": "Gordon Ryan",
    "cat": "开放式防守",
    "chapters": 143,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/GordonRyan_SystematicallyAttackingTheScrimmage_CoverFRONT_1_3920297c-015f-42cf-a896-0868233a04e3.jpg?v=1762467010"
  },
  {
    "id": "the-half-guard-anthology-by-lachlan-giles",
    "title": "The Half Guard Anthology by Lachlan Giles",
    "titleCn": "半防守百科全书 - Lachlan Giles",
    "instructor": "Lachlan Giles",
    "cat": "摔法",
    "chapters": 48,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/LachlanGiles_TheHalfGuardAnthology_FRONTCover1.jpg?v=1762458455"
  },
  {
    "id": "ageless-jiu-jitsu-winning-when-youre-older-and-less-athletic-bottom-game-gi-by-john-danaher",
    "title": "Ageless Jiu Jitsu: Winning When You're Older and Less Athletic - Bottom game: Gi by John Danaher",
    "titleCn": "不老柔术：大龄与非运动型选手的获胜之道 - 下位防守（道服） - John Danaher",
    "instructor": "John Danaher",
    "cat": "半防守",
    "chapters": 78,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/JohnDanaher_AgelessJiuJitsu-WinningWhenYou_reOlderorLessAthletic-BottomGame-Gi_CoverFRONT.jpg?v=1762464156"
  },
  {
    "id": "the-fastest-way-to-becoming-effective-in-standing-position-by-john-danaher",
    "title": "The Fastest Way: To Becoming Effective In Standing Position by John Danaher",
    "titleCn": "最快路径：站立位置的实战效率 - John Danaher",
    "instructor": "John Danaher",
    "cat": "防守",
    "chapters": 89,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/JohnDanaher_TheFastestWay-ToBeEffectiveStandingPosition_CoverFRONT.jpg?v=1762465888"
  },
  {
    "id": "systematically-attacking-the-legs-by-gordon-ryan",
    "title": "Systematically Attacking The Legs by Gordon Ryan",
    "titleCn": "系统性腿锁进攻 - Gordon Ryan",
    "instructor": "Gordon Ryan",
    "cat": "降服",
    "chapters": 128,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/GordonRyan_SystematicallyAttackingtheLegs_CoverFRONT.jpg?v=1762463396"
  },
  {
    "id": "master-the-move-the-anaconda-strangle-by-john-danaher",
    "title": "Master The Move: The Anaconda Strangle by John Danaher",
    "titleCn": "大师招式：蟒蛇绞 - John Danaher",
    "instructor": "John Danaher",
    "cat": "摔法",
    "chapters": 38,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/JohnDanaher_MasterTheMove_TheAnacondaStrangle_CoverFRONT.jpg?v=1762467091"
  },
  {
    "id": "bteam-bottom-by-craig-jones",
    "title": "The B Team Bottom Game: Imparting Wrestling, Turtling, and Heisting For Superior Results by Craig Jones",
    "titleCn": "B Team下位体系：摔跤、龟式与起身技术 - Craig Jones",
    "instructor": "Craig Jones",
    "cat": "关节技",
    "chapters": 78,
    "volumes": 6,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/CraigJones_TheBTeamBottomGame_CoverFRONT.jpg?v=1762461696"
  },
  {
    "id": "master-the-move-arm-drags-by-john-danaher",
    "title": "Master The Move: Arm Drags by John Danaher",
    "titleCn": "大师招式：手臂拖拽 (Arm Drag) - John Danaher",
    "instructor": "John Danaher",
    "cat": "绞技",
    "chapters": 66,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/JohnDanaher_MasterTheMove-ArmDrags_CoverFRONT.jpg?v=1762466202"
  },
  {
    "id": "the-shall-not-pass-by-gordon-ryan",
    "title": "They Shall Not Pass by Gordon Ryan",
    "titleCn": "不可逾越的防守：过腿防御 - Gordon Ryan",
    "instructor": "Gordon Ryan",
    "cat": "防守",
    "chapters": 108,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/GordonRyan_Theyshallnotpass_Cover1front.jpg?v=1762460478"
  },
  {
    "id": "master-the-move-the-american-lock-by-john-danaher",
    "title": "Master The Move: The American Lock by John Danaher",
    "titleCn": "大师招式：美式肩锁 (Americana) - John Danaher",
    "instructor": "John Danaher",
    "cat": "摔法",
    "chapters": 36,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/JohnDanaher_MasterTheMove-TheAmericanLock_CoverFRONT.jpg?v=1762466946"
  },
  {
    "id": "guard-retention-bjj-fundamentals-go-further-faster-by-john-danaher",
    "title": "Guard Retention: BJJ Fundamentals - Go Further Faster by John Danaher",
    "titleCn": "防守保持：BJJ基础 - Go Further Faster系列 - John Danaher",
    "instructor": "John Danaher",
    "cat": "防守",
    "chapters": 63,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_GuardRetentionBJJFundamentals-GoFurtherFaster_FRONTCover1.jpg?v=1762458824"
  },
  {
    "id": "the-pillars-of-defense-pin-escapes-defensive-to-offensive-cycles-by-gordon-ryan",
    "title": "The Pillars of Defense: Pin Escapes - Defensive to Offensive Cycles by Gordon Ryan",
    "titleCn": "防守支柱：压制逃脱 - 从防守到进攻的循环 - Gordon Ryan",
    "instructor": "Gordon Ryan",
    "cat": "关节技",
    "chapters": 104,
    "volumes": 9,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/GordonRyan_PillarsofDefense-PinEscapes_CoverFRONT.jpg?v=1762462196"
  },
  {
    "id": "the-fastest-way-to-increase-your-submission-percentage-no-gi-by-john-danaher",
    "title": "The Fastest Way: To Increase Your Submission Percentage (No Gi) by John Danaher",
    "titleCn": "最快路径：提升降服成功率（无道服） - John Danaher",
    "instructor": "John Danaher",
    "cat": "防守",
    "chapters": 92,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/JohnDanaher_THEFASTESTWAY-ToIncreaseYourSubmissionPercentage_No-gi__CoverFRONT.jpg?v=1762465169"
  },
  {
    "id": "the-octopus-guard-by-craig-jones",
    "title": "Craig Jones Mini Product The Reach Around AKA Octopus Guard by Craig Jones",
    "titleCn": "Craig Jones迷你课程：Reach Around（即章鱼防守） - Craig Jones",
    "instructor": "Craig Jones",
    "cat": "逃脱",
    "chapters": 18,
    "volumes": 3,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/CraigJones_OctopusGuard_CoverFRONT_1.jpg?v=1762463044"
  },
  {
    "id": "master-the-move-the-straight-arm-bar-ude-gatame-the-fastest-arm-lock-by-john-danaher",
    "title": "Master The Move: The Straight Arm Bar Ude Gatame - The Fastest Arm Lock by John Danaher",
    "titleCn": "大师招式：直臂十字固 (Ude Gatame) - 最快的手臂锁 - John Danaher",
    "instructor": "John Danaher",
    "cat": "降服",
    "chapters": 44,
    "volumes": 6,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/JohnDanaher_MasterTheMove-TheStraightArmBarUdeGatame_CoverFRONT.jpg?v=1762466695"
  },
  {
    "id": "ageless-jiu-jitsu-winning-when-youre-older-or-less-athletic-top-game-gi-by-john-danaher",
    "title": "Ageless Jiu Jitsu: Winning When You're Older Or Less Athletic - Top Game Gi by John Danaher",
    "titleCn": "不老柔术：大龄与非运动型选手的获胜之道 - 上位进攻（道服） - John Danaher",
    "instructor": "John Danaher",
    "cat": "开放式防守",
    "chapters": 88,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/JohnDanaher_AgelessJiuJitsu-WinningWhenYou_reOlderorLessAthletic-TopGame-Gi_CoverFRONT.jpg?v=1762464736"
  },
  {
    "id": "just-stand-up-by-craig-jones",
    "title": "Just Stand Up by Craig Jones",
    "titleCn": "直接站起 (Just Stand Up) - Craig Jones",
    "instructor": "Craig Jones",
    "cat": "防守",
    "chapters": 44,
    "volumes": 4,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/CraigJones_JustStandUp_CoverFRONT.jpg?v=1762463293"
  },
  {
    "id": "half-guard-bjj-fundamentals-go-further-faster-by-john-danaher",
    "title": "Half Guard: BJJ Fundamentals - Go Further Faster by John Danaher",
    "titleCn": "半防守：BJJ基础 - Go Further Faster系列 - John Danaher",
    "instructor": "John Danaher",
    "cat": "关节技",
    "chapters": 58,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_HalfGuardBJJFundamentals-GoFurtherFaster_FRONTCover1.jpg?v=1762458917"
  },
  {
    "id": "leglocks-enter-the-system-by-john-danaher",
    "title": "Leglocks: Enter The System by John Danaher",
    "titleCn": "腿锁：Enter The System系列 - John Danaher",
    "instructor": "John Danaher",
    "cat": "压制",
    "chapters": 119,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_LeglocksEnterTheSystem_FRONTCover1.jpg?v=1762457907"
  },
  {
    "id": "the-fastest-way-to-develop-an-unpassable-guard-by-john-danaher",
    "title": "The Fastest Way: To Develop An Unpassable Guard by John Danaher",
    "titleCn": "最快路径：构建无法被通过的防守 - John Danaher",
    "instructor": "John Danaher",
    "cat": "摔法",
    "chapters": 40,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/JohnDanaher_TheFastestWay-ToDevelopanUnpassableGuard_CoverFRONT.jpg?v=1762465492"
  },
  {
    "id": "passing-the-guard-bjj-fundamentals-go-further-faster-by-john-danaher",
    "title": "Passing the Guard: BJJ Fundamentals - Go Further Faster by John Danaher",
    "titleCn": "过腿：BJJ基础 - Go Further Faster系列 - John Danaher",
    "instructor": "John Danaher",
    "cat": "半防守",
    "chapters": 72,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_PassingtheGuardBJJFundamentals-GoFurtherFaster_FRONTCover1.jpg?v=1762459362"
  },
  {
    "id": "the-fastest-way-to-become-an-effective-guard-passer-no-gi-by-john-danaher",
    "title": "The Fastest Way: To Become an Effective Guard Passer (No Gi) by John Danaher",
    "titleCn": "最快路径：成为高效的过腿者（无道服） - John Danaher",
    "instructor": "John Danaher",
    "cat": "关节技",
    "chapters": 79,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/JohnDanaher_TheFastestWay-ToBecomeAnEffectiveGuardPasser_No-Gi__CoverFRONT.jpg?v=1762465385"
  },
  {
    "id": "systematically-attacking-the-scrimmage-beginners-guide-to-success-by-gordon-ryan",
    "title": "Systematically Attacking The Scrimmage: Beginners Guide To Success by Gordon Ryan",
    "titleCn": "系统性进攻缠斗：新手成功指南 - Gordon Ryan",
    "instructor": "Gordon Ryan",
    "cat": "防守",
    "chapters": 46,
    "volumes": 6,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/GordonRyan_SystematicallyAttackingTheScrimmage_CoverFRONT.jpg?v=1762466416"
  },
  {
    "id": "systematically-attacking-the-crucifix-by-gordon-ryan",
    "title": "Systematically Attacking The Crucifix by Gordon Ryan",
    "titleCn": "系统性进攻十字架位 (Crucifix) - Gordon Ryan",
    "instructor": "Gordon Ryan",
    "cat": "过腿",
    "chapters": 56,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/Gordon_Ryan_Systematically_Attacking_the_Crucifix_Cover_FRONT.jpg?v=1762466788"
  },
  {
    "id": "master-the-move-the-side-crucifix-by-john-danaher",
    "title": "Master The Move: The Side Crucifix by John Danaher",
    "titleCn": "大师招式：侧向十字架位 - John Danaher",
    "instructor": "John Danaher",
    "cat": "防守",
    "chapters": 37,
    "volumes": 6,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/JohnDanaher_MASTERTHEMOVE-TheSideCrucifix_CoverFRONT.jpg?v=1762467297"
  },
  {
    "id": "systematically-attacking-the-guillotine-by-gordon-ryan",
    "title": "Systematically Attacking The Guillotine by Gordon Ryan",
    "titleCn": "系统性进攻断头台 - Gordon Ryan",
    "instructor": "Gordon Ryan",
    "cat": "过腿",
    "chapters": 67,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/GordonRyan_SystematicallyAttackingTheGuillotine_CoverFRONT.jpg?v=1762466109"
  },
  {
    "id": "systematically-attacking-from-open-guard-seated-position-by-gordon-ryan",
    "title": "Systematically Attacking From Open Guard Seated Position by Gordon Ryan",
    "titleCn": "系统性进攻：坐姿开放式防守 - Gordon Ryan",
    "instructor": "Gordon Ryan",
    "cat": "摔法",
    "chapters": 0,
    "volumes": 0,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/GordonRyan_SystematicallyattackingFromOpenGuardSeatedPosition_FRONTCover1.jpg?v=1762459589"
  },
  {
    "id": "new-wave-jiu-jitsu-side-attacks-building-a-devastating-side-control-system-by-john-danaher",
    "title": "New Wave Jiu Jitsu: Side Attacks - Building a Devastating Side Control System by John Danaher",
    "titleCn": "New Wave柔术：侧向进攻 - 构建毁灭性的侧压体系 - John Danaher",
    "instructor": "John Danaher",
    "cat": "降服",
    "chapters": 62,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_NewWaveJiu-Jitsu-SideAttacks_CoverFRONT.jpg?v=1762462329"
  },
  {
    "id": "kimura-enter-the-system-by-john-danaher",
    "title": "Kimura: Enter The System by John Danaher",
    "titleCn": "肩锁 (Kimura)：Enter The System系列 - John Danaher",
    "instructor": "John Danaher",
    "cat": "降服",
    "chapters": 84,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_KimuraEnterTheSystem_FRONTCover1.jpg?v=1762458439"
  },
  {
    "id": "systematically-attacking-the-scrimmage-lower-body-takedowns-by-gordon-ryan",
    "title": "Systematically Attacking The Scrimmage: Lower Body Takedowns by Gordon Ryan",
    "titleCn": "系统性进攻缠斗：下半身摔法 - Gordon Ryan",
    "instructor": "Gordon Ryan",
    "cat": "摔法",
    "chapters": 92,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/Gordon_Ryan_Systematically_Attacking_the_Scrimmage_Cover_FRONT.jpg?v=1762467419"
  },
  {
    "id": "systematically-attacking-the-guard-half-guard-passing-by-gordon-ryan",
    "title": "Systematically Attacking The Guard: Half Guard Passing by Gordon Ryan",
    "titleCn": "系统性进攻防守：半防守过腿 - Gordon Ryan",
    "instructor": "Gordon Ryan",
    "cat": "绞技",
    "chapters": 182,
    "volumes": 10,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/GordonRyan_Systematicallyattackingtheguard-HalfGuardPassing_CoverFRONT.jpg?v=1762462405"
  },
  {
    "id": "master-the-move-the-shoulder-crunch-series-by-john-danaher",
    "title": "Master The Move: The Shoulder Crunch Series by John Danaher",
    "titleCn": "大师招式：肩胛固 (Shoulder Crunch) 系列 - John Danaher",
    "instructor": "John Danaher",
    "cat": "开放式防守",
    "chapters": 33,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/JohnDanaher_MastertheMove-TheShoulderCrunchSeries_CoverFRONT.jpg?v=1753929090"
  },
  {
    "id": "systematically-attacking-the-guard-by-gordon-ryan",
    "title": "Systematically Attacking The Guard by Gordon Ryan",
    "titleCn": "系统性进攻防守 - Gordon Ryan",
    "instructor": "Gordon Ryan",
    "cat": "压制",
    "chapters": 85,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/GordonRyan_SystematicallyAttackingTheGuard_FRONTCover1.jpg?v=1762458535"
  },
  {
    "id": "closed-guard-bjj-fundamentals-go-further-faster-by-john-danaher",
    "title": "Closed Guard: BJJ Fundamentals - Go Further Faster by John Danaher",
    "titleCn": "封闭式防守：BJJ基础 - Go Further Faster系列 - John Danaher",
    "instructor": "John Danaher",
    "cat": "关节技",
    "chapters": 71,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_ClosedGuardBJJFundamentals-GoFurtherFaster_FRONTCover1.jpg?v=1762459056"
  },
  {
    "id": "new-wave-jiu-jitsu-a-new-philosophy-of-positional-escapes-by-john-danaher",
    "title": "New Wave Jiu Jitsu: A New Philosophy Of Positional Escapes by John Danaher",
    "titleCn": "New Wave柔术：位置逃脱的新哲学 - John Danaher",
    "instructor": "John Danaher",
    "cat": "摔法",
    "chapters": 65,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_NewWaveJiuJitsu_PositionalEscapes_FrontCover1.jpg?v=1762460287"
  },
  {
    "id": "systematically-attacking-the-guard-2-0-by-gordon-ryan",
    "title": "Systematically Attacking The Guard 2.0 by Gordon Ryan",
    "titleCn": "系统性进攻防守 2.0 - Gordon Ryan",
    "instructor": "Gordon Ryan",
    "cat": "过腿",
    "chapters": 70,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/GordonRyan_SystematicallyAttackingtheGuard2_CoverFRONT_1.jpg?v=1762462799"
  },
  {
    "id": "ajj",
    "title": "Ageless Jiu Jitsu: Winning When You're Older or Less Athletic - Bottom Game by John Danaher",
    "titleCn": "常青柔术：大龄或身体素质不佳时的获胜之道 - 下位篇 (John Danaher)",
    "instructor": "John Danaher",
    "cat": "降服",
    "chapters": 65,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/JohnDanaher_AgelessJiuJitsu-WinningWhenYou_reOlderorLessAthletic_CoverFRONT_40309f9b-f874-48b5-bb7e-ef0f15706172.jpg?v=1762463563"
  },
  {
    "id": "half-guard-passing-and-dynamic-pins-bjj-fundamentals-go-further-faster-by-john-danaher",
    "title": "Half Guard Passing and Dynamic Pins: BJJ Fundamentals - Go Further Faster by John Danaher",
    "titleCn": "半防守过腿与动态压制：柔术基础 - 进阶之路 (John Danaher)",
    "instructor": "John Danaher",
    "cat": "过腿",
    "chapters": 87,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_HalfGuardPassing_DynamicPins_BJJFundamentals-GoFurtherFaster_FRONTCover1.jpg?v=1762459495"
  },
  {
    "id": "systematically-attacking-the-back-by-gordon-ryan",
    "title": "Systematically Attacking The Back by Gordon Ryan",
    "titleCn": "背后位系统化进攻 (Gordon Ryan)",
    "instructor": "Gordon Ryan",
    "cat": "封闭式防守",
    "chapters": 88,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/GordonRyan_SystematicallyAttackingTheBack_FRONTCover1.jpg?v=1762459467"
  },
  {
    "id": "make-z-guard-great-again-by-craig-jones",
    "title": "Make Z Guard Great Again by Craig Jones",
    "titleCn": "重塑Z防守的辉煌 (Craig Jones)",
    "instructor": "Craig Jones",
    "cat": "逃脱",
    "chapters": 48,
    "volumes": 6,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/CraigJones_MAKEZ-GUARDGREATAGAIN_CoverFRONT_1.jpg?v=1762461915"
  },
  {
    "id": "systematically-attacking-from-half-guard-by-gordon-ryan",
    "title": "Systematically Attacking From Half Guard by Gordon Ryan",
    "titleCn": "半防守系统化进攻 (Gordon Ryan)",
    "instructor": "Gordon Ryan",
    "cat": "过腿",
    "chapters": 83,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/GordonRyan_SystematicallyAttackingFromHalfGuard_FrontCover1_1.jpg?v=1762460203"
  },
  {
    "id": "the-pillars-of-defense-leg-lock-escapes-and-counter-locks-by-gordon-ryan",
    "title": "The Pillars Of Defense: Leg Lock Escapes and Counter Locks by Gordon Ryan",
    "titleCn": "防守基石：腿锁逃脱与反击 (Gordon Ryan)",
    "instructor": "Gordon Ryan",
    "cat": "防守",
    "chapters": 151,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/GordonRyan_Thepillarsofdefense-Leglockescapesandcounterlocks_CoverFRONT.jpg?v=1762463893"
  },
  {
    "id": "the-front-headlock-system-by-john-danaher",
    "title": "The Front Headlock System by John Danaher",
    "titleCn": "前颈锁系统 (John Danaher)",
    "instructor": "John Danaher",
    "cat": "过腿",
    "chapters": 71,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_TheFrontHeadlockSystem_FRONTCover1psd.jpg?v=1762458383"
  },
  {
    "id": "foundations-of-guard-attacking-by-mikey-musumeci",
    "title": "Foundations of Guard: Attacking by Mikey Musumeci",
    "titleCn": "防守基础：进攻篇 (Mikey Musumeci)",
    "instructor": "Mikey Musumeci",
    "cat": "压制",
    "chapters": 78,
    "volumes": 6,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/MikeyMusumeci_FOUNDATIONSofGUARD_CoverFRONT.jpg?v=1762462237"
  },
  {
    "id": "back-attacks-enter-the-system-by-john-danaher",
    "title": "Back Attacks Enter The System by John Danaher",
    "titleCn": "背后位进攻系统 (John Danaher)",
    "instructor": "John Danaher",
    "cat": "降服",
    "chapters": 67,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_BackAttacksEnterTheSystem_FRONTCover1.jpg?v=1762458261"
  },
  {
    "id": "triangles-enter-the-system-by-john-danaher",
    "title": "Triangles Enter The System by John Danaher",
    "titleCn": "三角绞进攻系统 (John Danaher)",
    "instructor": "John Danaher",
    "cat": "半防守",
    "chapters": 84,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_TrianglesEnterTheSystem_FRONTCover1.jpg?v=1762458507"
  },
  {
    "id": "systematically-attacking-from-open-guard-supine-position-by-gordon-ryan",
    "title": "Systematically Attacking From Open Guard Supine Position by Gordon Ryan",
    "titleCn": "仰卧开放式防守系统化进攻 (Gordon Ryan)",
    "instructor": "Gordon Ryan",
    "cat": "半防守",
    "chapters": 74,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/GordonRyan_SystematicallyAttackingFromOpenGuardSupinePosition_FRONTCover1.jpg?v=1762459692"
  },
  {
    "id": "systematically-attacking-the-kimura-by-gordon-ryan",
    "title": "Systematically Attacking The Kimura by Gordon Ryan",
    "titleCn": "肩锁系统化进攻 (Gordon Ryan)",
    "instructor": "Gordon Ryan",
    "cat": "逃脱",
    "chapters": 70,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/GordonRyan_SystematicallyAttackingTheKimura_CoverFRONT.jpg?v=1762465645"
  },
  {
    "id": "systematically-attacking-the-front-headlock-by-gordon-ryan",
    "title": "Systematically Attacking The Front Headlock by Gordon Ryan",
    "titleCn": "前颈锁系统化进攻 (Gordon Ryan)",
    "instructor": "Gordon Ryan",
    "cat": "防守",
    "chapters": 0,
    "volumes": 0,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/GordonRyan_SystematicallyAttackingtheFrontHeadlock_CoverFRONT.jpg?v=1762465521"
  },
  {
    "id": "products-the-anti-wrestling-equation-by-craig-jones",
    "title": "The Anti-Wrestling Equation by Craig Jones",
    "titleCn": "反摔跤方程式 (Craig Jones)",
    "instructor": "Craig Jones",
    "cat": "绞技",
    "chapters": 92,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/CraigJones_TheAnti-WrestlingEquation_Coverfront.jpg?v=1762460599"
  },
  {
    "id": "ajj-top",
    "title": "Ageless Jiu Jitsu: Winning When You're Older or Less Athletic - Top Game No Gi by John Danaher",
    "titleCn": "常青柔术：大龄或身体素质不佳时的获胜之道 - 无道服上位篇 (John Danaher)",
    "instructor": "John Danaher",
    "cat": "防守",
    "chapters": 58,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/JohnDanaher_AgelessJiu-Jitsu-WinningWhenYou_reOlderOlderorLessAthletic-TOPGAME_CoverFRONT.jpg?v=1762463967"
  },
  {
    "id": "systematically-attacking-the-arm-bar-by-gordon-ryan",
    "title": "Systematically Attacking The Arm Bar by Gordon Ryan",
    "titleCn": "十字固系统化进攻 (Gordon Ryan)",
    "instructor": "Gordon Ryan",
    "cat": "降服",
    "chapters": 133,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/GordonRyan_SystematicallyAttackingtheArmbar_CoverFRONT.jpg?v=1762464839"
  },
  {
    "id": "new-wave-jiu-jitsu-mounted-pin-attacks-the-4x4-mount-system-by-john-danaher",
    "title": "New Wave Jiu Jitsu: Mounted Pin Attacks - The 4x4 Mount System by John Danaher",
    "titleCn": "新浪潮柔术：骑乘位压制进攻 - 4x4骑乘系统 (John Danaher)",
    "instructor": "John Danaher",
    "cat": "绞技",
    "chapters": 72,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_NewWaveJiu-Jitsu_MountedPinAttacks_CoverFRONT.jpg?v=1762462038"
  },
  {
    "id": "bteam-top-penetrate-and-pull-out-of-dangerous-entanglements-by-craig-jones",
    "title": "The B Team Top Game: How to Work Against Seated Guards, Supine Guards, and Those Trying to Stand Up by Craig Jones",
    "titleCn": "B Team上位进攻：如何应对坐姿防守、仰卧防守及对手站立尝试 (Craig Jones)",
    "instructor": "Craig Jones",
    "cat": "开放式防守",
    "chapters": 44,
    "volumes": 6,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/CraigJones_TheBTeamTopGame_CoverFRONT.jpg?v=1762462038"
  },
  {
    "id": "enter-the-system-arm-bar-by-john-danaher",
    "title": "Arm Bars: Enter The System by John Danaher",
    "titleCn": "十字固进攻系统 (John Danaher)",
    "instructor": "John Danaher",
    "cat": "关节技",
    "chapters": 94,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_ArmBarsEnterTheSystem_FRONTCover1.jpg?v=1762458620"
  },
  {
    "id": "power-switch-guard-retention-and-genius-back-takes-by-mikey-musumeci",
    "title": "Power Switch Guard Retention and Genius Back Takes by Mikey Musumeci",
    "titleCn": "强力切换防守保持与天才背部控制 (Mikey Musumeci)",
    "instructor": "Mikey Musumeci",
    "cat": "防守",
    "chapters": 29,
    "volumes": 4,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/MikeyMusumeci_PowerSwitchGuardRetentionandGeniusBackTakes_FRONTCover.jpg?v=1762458317"
  },
  {
    "id": "systematically-escaping-the-back-by-gordon-ryan",
    "title": "The Pillars of Defense: Back Escapes by Gordon Ryan",
    "titleCn": "防守基石：背后位逃脱 (Gordon Ryan)",
    "instructor": "Gordon Ryan",
    "cat": "绞技",
    "chapters": 109,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/GordonRyan_systematicallyescapingtheback_Cover_1.jpg?v=1762461232"
  },
  {
    "id": "higher-tripod-passing-by-craig-jones",
    "title": "Higher Tripod Passing by Craig Jones",
    "titleCn": "高位三脚架过腿 (Craig Jones)",
    "instructor": "Craig Jones",
    "cat": "摔法",
    "chapters": 21,
    "volumes": 4,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/CraigJones_HigherTripodPassing_CoverFRONT.jpg?v=1762467164"
  },
  {
    "id": "fundamentals-of-brazilian-jiu-jitsu-escapes-gi-no-gi-by-lachlan-giles",
    "title": "Fundamentals of Brazilian Jiu Jitsu Escapes Gi & No Gi by Lachlan Giles",
    "titleCn": "巴西柔术逃脱基础：道服与无道服 (Lachlan Giles)",
    "instructor": "Lachlan Giles",
    "cat": "压制",
    "chapters": 43,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/LachlanGiles_FundamentalsofBrazilianJiuJitsuEscapesGi_NoGi_FRONTCover1.jpg?v=1762459370"
  },
  {
    "id": "no-gi-open-guard-volume-1-k-guard-by-lachlan-giles",
    "title": "No Gi Open Guard Volume 1: K Guard by Lachlan Giles",
    "titleCn": "无道服开放式防守第一卷：K防守 (Lachlan Giles)",
    "instructor": "Lachlan Giles",
    "cat": "关节技",
    "chapters": 114,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/LachlanGiles_KGUARD_Coverfront.jpg?v=1762460572"
  },
  {
    "id": "systematically-attacking-triangles-by-gordon-ryan",
    "title": "Systematically Attacking Triangles by Gordon Ryan",
    "titleCn": "三角绞系统化进攻 (Gordon Ryan)",
    "instructor": "Gordon Ryan",
    "cat": "压制",
    "chapters": 102,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/GordonRyan_SystematicallyAttackingTriangles_CoverFRONT.jpg?v=1762465274"
  },
  {
    "id": "the-saddle-by-lachlan-giles",
    "title": "The Saddle by Lachlan Giles",
    "titleCn": "马鞍位 (Lachlan Giles)",
    "instructor": "Lachlan Giles",
    "cat": "关节技",
    "chapters": 57,
    "volumes": 6,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/LachlanGiles_TheSaddle_CoverFRONT.jpg?v=1762465702"
  },
  {
    "id": "pillars-of-defense-guillotines-by-gordon-ryan",
    "title": "Pillars of Defense: Guillotines by Gordon Ryan",
    "titleCn": "防守基石：断头台 (Gordon Ryan)",
    "instructor": "Gordon Ryan",
    "cat": "压制",
    "chapters": 69,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/GordonRyan_PillarsofDefense-Guillotines_Coverred.jpg?v=1762467217"
  },
  {
    "id": "get-off-my-legs-gringo-by-craig-jones",
    "title": "Get Off My Legs Gringo by Craig Jones",
    "titleCn": "离我的腿远点 (Craig Jones)",
    "instructor": "Craig Jones",
    "cat": "过腿",
    "chapters": 61,
    "volumes": 6,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/CraigJones_GetOffMyLegs_Cover.jpg?v=1762460982"
  },
  {
    "id": "new-wave-jiu-jitsu-a-new-philosophy-of-submissions-escapes-by-john-danaher",
    "title": "New Wave Jiu Jitsu: A New Philosophy Of Submissions Escapes by John Danaher",
    "titleCn": "新浪潮柔术：降服逃脱的新哲学 (John Danaher)",
    "instructor": "John Danaher",
    "cat": "关节技",
    "chapters": 83,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_NewWaveJiuJitsu_SubmissionEscapes_FrontCover1.jpg?v=1762460538"
  },
  {
    "id": "dont-be-finished-edging-yourself-out-of-danger-by-craig-jones",
    "title": "Don't Be Finished: Edging Yourself Out of Danger by Craig Jones",
    "titleCn": "拒绝被终结：从险境中边缘逃脱 (Craig Jones)",
    "instructor": "Craig Jones",
    "cat": "开放式防守",
    "chapters": 24,
    "volumes": 4,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/CraigJones_Don_tbeFinished_CoverFRONT.jpg?v=1762464595"
  },
  {
    "id": "leg-lock-anthology-50-50-by-lachlan-giles",
    "title": "Leg Lock Anthology: 50/50 by Lachlan Giles",
    "titleCn": "腿锁百科：50/50位 (Lachlan Giles)",
    "instructor": "Lachlan Giles",
    "cat": "防守",
    "chapters": 0,
    "volumes": 0,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/LachlanGiles_LegLockAnthology5050_FRONTCover1.jpg?v=1762459003"
  },
  {
    "id": "edging-your-way-out-of-danger-submission-escapes-bdsm-jitsu-by-craig-jones",
    "title": "Edging Your Way Out Of Danger: Submission Escapes - BDSM Jitsu by Craig Jones",
    "titleCn": "从险境中边缘逃脱：降服逃脱 - BDSM柔术 (Craig Jones)",
    "instructor": "Craig Jones",
    "cat": "逃脱",
    "chapters": 45,
    "volumes": 4,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/EdgingYourWayOutofDanger_CoverFRONT_1.jpg?v=1762465081"
  },
  {
    "id": "down-under-leg-attacks-by-craig-jones",
    "title": "Down Under Leg Attacks by Craig Jones",
    "titleCn": "澳洲腿部进攻 (Craig Jones)",
    "instructor": "Craig Jones",
    "cat": "过腿",
    "chapters": 37,
    "volumes": 4,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/CraigJones_DownUnderLegAttacks_FRONTCover.jpg?v=1762457848"
  },
  {
    "id": "the-foundation-of-defense-turtle-front-headlock-escapes-by-gordon-ryan",
    "title": "The Pillars of Defense: Turtle & Front Headlock Escapes by Gordon Ryan",
    "titleCn": "防守基石：龟式与前颈锁逃脱 (Gordon Ryan)",
    "instructor": "Gordon Ryan",
    "cat": "逃脱",
    "chapters": 96,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/GordonRyan_TheFoundationofOffense_Turtle_FrontHeadLockEscapes_Cover_2.jpg?v=1762461653"
  },
  {
    "id": "the-collar-and-sleeve-system-part-1-outside-control-on-the-knees-by-mikey-musumeci",
    "title": "The Collar and Sleeve System Part 1: Outside Control On The Knees by Mikey Musumeci",
    "titleCn": "领袖把位系统第一部分：跪姿外侧控制 (Mikey Musumeci)",
    "instructor": "Mikey Musumeci",
    "cat": "开放式防守",
    "chapters": 18,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/MikeyMusumeci_TheCollarandSleeveSystemPart1_FrontCover1.jpg?v=1762460037"
  },
  {
    "id": "fundamentals-of-guard-passing-breaking-their-guard-wall-by-wall-by-mikey-musumeci",
    "title": "Fundamentals of Guard Passing: Breaking Their Guard - Wall to Wall by Mikey Musumeci",
    "titleCn": "过腿基础：破除防守 - 全方位覆盖 (Mikey Musumeci)",
    "instructor": "Mikey Musumeci",
    "cat": "绞技",
    "chapters": 40,
    "volumes": 4,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/FundamentalsofGuardPassing_front.jpg?v=1762467164"
  },
  {
    "id": "systemizing-closed-guard-by-gordon-ryan",
    "title": "Systematically Attacking From Closed Guard by Gordon Ryan",
    "titleCn": "封闭式防守系统化进攻 (Gordon Ryan)",
    "instructor": "Gordon Ryan",
    "cat": "关节技",
    "chapters": 59,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/GordonRyan_SystematicallyAttackingFromClosedGuard_FRONTCover1.jpg?v=1762458845"
  },
  {
    "id": "the-guard-passing-anthology-half-guard-by-lachlan-giles",
    "title": "The Guard Passing Anthology: Half Guard by Lachlan Giles",
    "titleCn": "过腿百科：半防守 (Lachlan Giles)",
    "instructor": "Lachlan Giles",
    "cat": "逃脱",
    "chapters": 66,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/LachlanGiles_TheGuardPassingAnthologyHalfGuard_FRONTCover1.jpg?v=1762458689"
  },
  {
    "id": "systematically-attacking-the-turtle-position-by-gordon-ryan",
    "title": "Systematically Attacking the Turtle Position by Gordon Ryan",
    "titleCn": "龟式位系统化进攻 (Gordon Ryan)",
    "instructor": "Gordon Ryan",
    "cat": "关节技",
    "chapters": 68,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/GordonRyan_SystematicallyAttackingtheTurtlePosition_FRONTCover1.jpg?v=1762459259"
  },
  {
    "id": "feet-to-floor-volume-one-fundamental-standing-skills-by-john-danaher",
    "title": "Feet To Floor: Volume 1 Fundamental Standing Skills by John Danaher",
    "titleCn": "立技基础：第一卷 基础站立技巧 (John Danaher)",
    "instructor": "John Danaher",
    "cat": "逃脱",
    "chapters": 146,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_FeetToFloorVolumeOneFundamentalStandingSkills_FRONTCover1.jpg?v=1762459750"
  },
  {
    "id": "new-wave-jiu-jitsu-no-gi-guard-passing-by-john-danaher",
    "title": "New Wave Jiu Jitsu: No Gi Guard Passing by John Danaher",
    "titleCn": "New Wave Jiu Jitsu：John Danaher无道服过腿系统",
    "instructor": "John Danaher",
    "cat": "摔法",
    "chapters": 121,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_NEWWAVEJIUJITSU-NO-GIGUARDPASSING_CoverFRONT_1.jpg?v=1762461765"
  },
  {
    "id": "the-pillars-of-defense-leglocks-to-guard-passing-by-gordon-ryan",
    "title": "The Pillars of Defense: Leg Locks to Guard Passing by Gordon Ryan",
    "titleCn": "防守基石：Gordon Ryan从腿锁到过腿",
    "instructor": "Gordon Ryan",
    "cat": "逃脱",
    "chapters": 64,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/GordonRyan_PillarsofDefense-LeglockstoGuardPassing_CoverFRONT_1.jpg?v=1762464087"
  },
  {
    "id": "closet-closed-guard-by-craig-jones",
    "title": "Closet (Closed) Guard by Craig Jones",
    "titleCn": "Craig Jones封闭式防守教学",
    "instructor": "Craig Jones",
    "cat": "防守",
    "chapters": 33,
    "volumes": 4,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/CraigJones_Closet_closed_guard_CoverFRONT.jpg?v=1762464531"
  },
  {
    "id": "strangles-turtle-breakdowns-bjj-fundamentals-go-further-faster-by-john-danaher",
    "title": "Strangles & Turtle Breakdowns: BJJ Fundamentals - Go Further Faster by John Danaher",
    "titleCn": "绞技与龟式破解：John Danaher BJJ基础系列 - Go Further Faster",
    "instructor": "John Danaher",
    "cat": "关节技",
    "chapters": 75,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_Strangles_TurtleBreakdownsBJJFundamentals-GoFurtherFaster_FRONTCover1.jpg?v=1762459643"
  },
  {
    "id": "balls-to-wall-by-craig-jones",
    "title": "Balls To Wall by Craig Jones",
    "titleCn": "Craig Jones：Balls To Wall（高强度压制）",
    "instructor": "Craig Jones",
    "cat": "防守",
    "chapters": 41,
    "volumes": 4,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/CraigJones_BallstoWall_CoverFRONT.jpg?v=1762465389"
  },
  {
    "id": "pillars-of-defense-leg-locks-to-back-takes-by-gordon-ryan",
    "title": "Pillars of Defense: Leg Locks to Back Takes by Gordon Ryan",
    "titleCn": "防守基石：Gordon Ryan从腿锁到背后位",
    "instructor": "Gordon Ryan",
    "cat": "逃脱",
    "chapters": 0,
    "volumes": 0,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/GordonRyan_PillarsofDefense_FootlockstoBacktakes_CoverFRONT_1.jpg?v=1762464587"
  },
  {
    "id": "systematic-submission-dilemmas-high-level-triangle-and-leg-lock-combos-by-craig-jones",
    "title": "Systematic Submission Dilemmas: High Level Triangle and Leg Lock Combos by Craig Jones",
    "titleCn": "系统性降服困境：Craig Jones高阶三角绞与腿锁组合",
    "instructor": "Craig Jones",
    "cat": "关节技",
    "chapters": 64,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/CraigJones_SystematicSubmissionDilemmasHighLevelTriangleandLegLockCombos_FRONTCover1.jpg?v=1762459796"
  },
  {
    "id": "high-percentage-choke-no-gi-by-lachlan-giles",
    "title": "High Percentage Chokes: No Gi by Lachlan Giles",
    "titleCn": "高成功率无道服绞技：Lachlan Giles",
    "instructor": "Lachlan Giles",
    "cat": "逃脱",
    "chapters": 88,
    "volumes": 4,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/LachlanGiles_HighPercentageChokesNoGi_FRONTCover.jpg?v=1762457968"
  },
  {
    "id": "systematically-attacking-the-guard-body-lock-study-by-gordon-ryan",
    "title": "Systematically Attacking the Guard Body Lock Study by Gordon Ryan",
    "titleCn": "系统性过腿：Gordon Ryan身体锁（Body Lock）研究",
    "instructor": "Gordon Ryan",
    "cat": "开放式防守",
    "chapters": 140,
    "volumes": 10,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/GordonRyan_Systematicallyattackingtheguard_CoverFRONT.jpg?v=1762461925"
  },
  {
    "id": "pillars-of-defense-strangle-escapes-by-gordon-ryan",
    "title": "Pillars of Defense: Strangle Escapes by Gordon Ryan",
    "titleCn": "防守基石：Gordon Ryan绞技逃脱",
    "instructor": "Gordon Ryan",
    "cat": "过腿",
    "chapters": 111,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/GordonRyan_PillarsofDefense-StrangleEscapes_CoverFRONT.jpg?v=1762463194"
  },
  {
    "id": "new-wave-jiu-jitsu-open-guard-the-two-foundations-of-guard-play-by-john-danaher",
    "title": "New Wave Jiu Jitsu: Open Guard The two Foundations Of Guard Play by John Danaher",
    "titleCn": "New Wave Jiu Jitsu：John Danaher开放式防守的两大基石",
    "instructor": "John Danaher",
    "cat": "封闭式防守",
    "chapters": 65,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_NEWWAVEJIUJITSU_OPENGUARD_Cover.jpg?v=1762460839"
  },
  {
    "id": "death-from-below-by-mikey-musumeci",
    "title": "Death From Below by Mikey Musumeci",
    "titleCn": "Mikey Musumeci：Death From Below（下位降服）",
    "instructor": "Mikey Musumeci",
    "cat": "过腿",
    "chapters": 55,
    "volumes": 4,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/MikeyMusumeci_Deathfrombelow_CoverFRONT.jpg?v=1762461859"
  },
  {
    "id": "systematically-attacking-from-top-pins-mount-by-gordon-ryan",
    "title": "Systematically Attacking From Top Pins: Mount by Gordon Ryan",
    "titleCn": "系统性上位压制：Gordon Ryan骑乘位教学",
    "instructor": "Gordon Ryan",
    "cat": "龟式防守",
    "chapters": 60,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/GordonRyan_Systematicallyattackingfromtoppins-Mount_Cover.jpg?v=1762461036"
  },
  {
    "id": "new-wave-jiu-jitsu-no-gi-half-guard-3-directions-of-attack-by-john-danaher",
    "title": "New Wave Jiu Jitsu: No Gi Half Guard 3 Directions of Attack by John Danaher",
    "titleCn": "New Wave Jiu Jitsu：John Danaher无道服半防守的三向进攻",
    "instructor": "John Danaher",
    "cat": "摔法",
    "chapters": 102,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_NewWaveJiu-Jitsu_No-GiHalfGuard_Cover.jpg?v=1762461397"
  },
  {
    "id": "slicin-calves-by-mikey-musumeci",
    "title": "Slicin' Calves by Mikey Musumeci",
    "titleCn": "Mikey Musumeci：小腿切锁（Slicin' Calves）",
    "instructor": "Mikey Musumeci",
    "cat": "过腿",
    "chapters": 29,
    "volumes": 3,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/SlicinCalvesbyMikeyMusumeciFront.jpg?v=1762467307"
  },
  {
    "id": "the-guard-retention-anthology-by-lachlan-giles-ariel-tabak",
    "title": "The guard Retention Anthology: Around and Under by Lachlan Giles & Ariel Tabak",
    "titleCn": "防守保持全集：Lachlan Giles与Ariel Tabak的绕行与钻底技术",
    "instructor": "Lachlan Giles",
    "cat": "逃脱",
    "chapters": 0,
    "volumes": 0,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/LachlanGiles_ArielTabak_TheguardRetentionAnthologyAroundandUnder_FRONTCover2.jpg?v=1762459707"
  },
  {
    "id": "the-guard-retention-anthology-through-the-legs-and-close-range-by-lachlan-giles-ariel-tabak",
    "title": "The Guard Retention Anthology: Through The Legs and Close Range by Lachlan Giles & Ariel Tabak",
    "titleCn": "防守保持全集：Lachlan Giles与Ariel Tabak的穿腿与近身技术",
    "instructor": "Lachlan Giles",
    "cat": "封闭式防守",
    "chapters": 0,
    "volumes": 0,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/LachlanGiles_ArielTabak_TheGuardRetentionAnthologyThroughTheLegsandCloseRange_FRONTCover1.jpg?v=1762459854"
  },
  {
    "id": "new-wave-jiu-jitsu-closed-guard-building-a-complete-closed-guard-system-by-john-danaher",
    "title": "New Wave Jiu Jitsu: Closed Guard - Building a Complete Closed Guard System by John Danaher",
    "titleCn": "New Wave Jiu Jitsu：John Danaher封闭式防守系统构建",
    "instructor": "John Danaher",
    "cat": "绞技",
    "chapters": 88,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_NewWaveJiu-Jitsu_ClosedGuard_CoverFRONT.jpg?v=1762462514"
  },
  {
    "id": "false-reap-accusations-by-craig-jones",
    "title": "False Reap Accusations by Craig Jones",
    "titleCn": "Craig Jones：False Reap（假收割）技术解析",
    "instructor": "Craig Jones",
    "cat": "压制",
    "chapters": 24,
    "volumes": 4,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/CraigJones_FalseReapAccusations_CoverFRONT.jpg?v=1762462890"
  },
  {
    "id": "k-guard-and-matrix-system-attacking-the-legs-from-the-knees-part-1-by-mikey-musumeci",
    "title": "K Guard and Matrix System: Attacking The Legs From The Knees Part 1 by Mikey Musumeci",
    "titleCn": "K Guard与Matrix系统：Mikey Musumeci跪姿腿锁进攻（第一部）",
    "instructor": "Mikey Musumeci",
    "cat": "关节技",
    "chapters": 59,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/MikeyMusumeci_KguardandMatrixSystem_FrontCover1.jpg?v=1762460211"
  },
  {
    "id": "the-reverse-de-la-riva-system-by-mikey-musumeci",
    "title": "The Reverse De La Riva System by Mikey Musumeci",
    "titleCn": "Mikey Musumeci：反向DLR防守系统",
    "instructor": "Mikey Musumeci",
    "cat": "防守",
    "chapters": 43,
    "volumes": 4,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/MikeyMusumeci_TheReverseDeLaRivaSystem_CoverFRONT.jpg?v=1762464129"
  },
  {
    "id": "how-to-pass-guards-quickly-and-easily-using-leg-attacks-by-craig-jones",
    "title": "How to Pass Guards Quickly and Easily Using Leg Attacks by Craig Jones",
    "titleCn": "Craig Jones：如何利用腿锁快速轻松地过腿",
    "instructor": "Craig Jones",
    "cat": "防守",
    "chapters": 12,
    "volumes": 2,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/CraigJones_HowtoPassGuardsQuicklyandEasilyUsingLegAttacks_FRONTCover.jpg?v=1762458137"
  },
  {
    "id": "new-wave-jiu-jitsu-open-guard-vol-2-sweeps-and-reversals-by-john-danaher",
    "title": "New Wave Jiu Jitsu: Open Guard vol 2: Sweeps and Reversals by John Danaher",
    "titleCn": "New Wave Jiu Jitsu：John Danaher开放式防守第二部：扫技与反击",
    "instructor": "John Danaher",
    "cat": "封闭式防守",
    "chapters": 77,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_NEWWAVEJIUJITSU_OPENGUARDvol2_Cover.jpg?v=1762461144"
  },
  {
    "id": "systematically-attacking-from-top-pins-side-control-north-south-by-gordon-ryan",
    "title": "Systematically attacking From Top Pins: Side Control & North South by Gordon Ryan",
    "titleCn": "系统性上位压制：Gordon Ryan侧压与北南位",
    "instructor": "Gordon Ryan",
    "cat": "关节技",
    "chapters": 71,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/GordonRyan_SystematicallyattackingfromtoppinsSideControl.jpg?v=1762460785"
  },
  {
    "id": "s2g3",
    "title": "Standing2Ground: Upper Body Takedowns by John Danaher",
    "titleCn": "Standing2Ground：John Danaher上半身摔法",
    "instructor": "John Danaher",
    "cat": "关节技",
    "chapters": 85,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_Standing2Ground-UpperBodyTakedowns_CoverFRONT.jpg?v=1762463341"
  },
  {
    "id": "the-berimbolo-system-by-mikey-musumeci",
    "title": "The Berimbolo System Part 1: The Foundation by Mikey Musumeci",
    "titleCn": "Berimbolo系统第一部：Mikey Musumeci基础篇",
    "instructor": "Mikey Musumeci",
    "cat": "德拉防守",
    "chapters": 109,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/MikeyMusumeci_TheBerimboloSystem_FRONTCover1.jpg?v=1762459799"
  },
  {
    "id": "standing2ground-takedowns-standing-skills-for-jiu-jitsu-by-john-danaher",
    "title": "Standing2Ground: Takedowns & Standing Skills For Jiu Jitsu by John Danaher",
    "titleCn": "Standing2Ground：John Danaher柔术摔法与站立技巧",
    "instructor": "John Danaher",
    "cat": "过腿",
    "chapters": 134,
    "volumes": 10,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_STANDING2GROUND_CoverFRONT.jpg?v=1762462905"
  },
  {
    "id": "the-double-sleeve-system-by-mikey-musumeci",
    "title": "The Double Sleeve System by Mikey Musumeci",
    "titleCn": "Mikey Musumeci：双袖控制系统",
    "instructor": "Mikey Musumeci",
    "cat": "扫技",
    "chapters": 40,
    "volumes": 4,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/MikeyMusumeci_TheDoubleSleeveSystem_CoverFRONT.jpg?v=1762464588"
  },
  {
    "id": "no-gi-open-guard-volume-2-de-la-riva-waiter-by-lachlan-giles",
    "title": "No Gi Open Guard Volume 2: De La Riva & Waiter by Lachlan Giles",
    "titleCn": "无道服开放式防守第二部：Lachlan Giles的DLR与Waiter Guard",
    "instructor": "Lachlan Giles",
    "cat": "压制",
    "chapters": 110,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/LachlanGiles_DELARIVA_WAITER_Coverfront_2.jpg?v=1762460573"
  },
  {
    "id": "you-cant-kneebar-by-craig-jones",
    "title": "You Can't Knee bahh by Craig Jones",
    "titleCn": "Craig Jones：膝十字固防守（You Can't Knee bahh）",
    "instructor": "Craig Jones",
    "cat": "摔法",
    "chapters": 31,
    "volumes": 4,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/CraigJones_YouCan_tKneeBahh_CoverFRONT.jpg?v=1762464088"
  },
  {
    "id": "collar-sleeve-inside-control-system-by-mikey-musumeci",
    "title": "Collar Sleeve Inside Control System by Mikey Musumeci",
    "titleCn": "Mikey Musumeci：领袖控制系统",
    "instructor": "Mikey Musumeci",
    "cat": "德拉防守",
    "chapters": 37,
    "volumes": 3,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/MikeyMusumeci_COLLARSLEEVEINSIDECONTROLSYSTEM_CoverFRONT.jpg?v=1762462890"
  },
  {
    "id": "pillars-of-defense-upper-body-joint-lock-escapes-by-gordon-ryan",
    "title": "Pillars of Defense: Upper Body Joint Lock Escapes by Gordon Ryan",
    "titleCn": "防守基石：Gordon Ryan上半身关节技逃脱",
    "instructor": "Gordon Ryan",
    "cat": "摔法",
    "chapters": 118,
    "volumes": 9,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/GordonRyan_PillarsofDefense-UpperBodyJointLockEscapes_CoverFRONT.jpg?v=1762462733"
  },
  {
    "id": "battle-tested-down-under-leglocks-by-craig-jones",
    "title": "Battle Tested Down Under Leglocks by Craig Jones",
    "titleCn": "Craig Jones：实战检验的澳洲腿锁技术",
    "instructor": "Craig Jones",
    "cat": "开放式防守",
    "chapters": 41,
    "volumes": 4,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/BattleTestedDownUnderLeglocksbyCraigJones_FRONTCover.jpg?v=1762458707"
  },
  {
    "id": "the-z-guard-encyclopedia-by-craig-jones",
    "title": "The Z Guard Encyclopedia by Craig Jones",
    "titleCn": "Craig Jones：Z防守百科全书",
    "instructor": "Craig Jones",
    "cat": "德拉防守",
    "chapters": 19,
    "volumes": 3,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/CraigJones_TheZGuardEncyclopedia_FRONTCover_1.jpg?v=1762457849"
  },
  {
    "id": "standing2ground-positional-dominance-scrimmage-wrestling-by-john-danaher",
    "title": "Standing2Ground: Positional Dominance & Scrimmage Wrestling by John Danaher",
    "titleCn": "Standing2Ground：John Danaher位置控制与实战摔跤",
    "instructor": "John Danaher",
    "cat": "关节技",
    "chapters": 113,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher-PositionalDominanceandScrimmageWrestling-FRONT.jpg?v=1762463116"
  },
  {
    "id": "the-straight-armlock-anthology-by-lachlan-giles",
    "title": "The Straight Armlock Anthology by Lachlan Giles",
    "titleCn": "Lachlan Giles：十字固全集",
    "instructor": "Lachlan Giles",
    "cat": "关节技",
    "chapters": 155,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/LachlanGiles_TheStraightArmlockAnthology_Cover.jpg?v=1762461568"
  },
  {
    "id": "getting-swole-as-a-grappler-by-gordon-ryan",
    "title": "Getting Swole As A Grappler by Gordon Ryan",
    "titleCn": "Gordon Ryan：格斗选手的力量训练",
    "instructor": "Gordon Ryan",
    "cat": "开放式防守",
    "chapters": 22,
    "volumes": 3,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/GordonRyan_GettingSwoleAsAGrappler_FRONTCover.jpg?v=1762458463"
  },
  {
    "id": "the-body-lock-pass-by-lachlan-giles",
    "title": "The Body Lock Pass by Lachlan Giles",
    "titleCn": "Lachlan Giles：身体锁（Body Lock）过腿",
    "instructor": "Lachlan Giles",
    "cat": "逃脱",
    "chapters": 0,
    "volumes": 0,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/LachlanGiles_TheBodyLockPass_FRONTCover.jpg?v=1762458976"
  },
  {
    "id": "combat-base-destruction-collar-sleeve-by-mikey-musumeci",
    "title": "Combat Base Destruction: Collar Sleeve by Mikey Musumeci",
    "titleCn": "Mikey Musumeci：破坏战斗底座（Combat Base）与领袖控制",
    "instructor": "Mikey Musumeci",
    "cat": "关节技",
    "chapters": 29,
    "volumes": 4,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/MikeyMusumeci_CombatBaseDestruction-CollarSleeve_CoverFRONT.jpg?v=1762464817"
  },
  {
    "id": "mexican-ground-karate-escapes-volume-1-front-headlock-escapes-by-craig-jones",
    "title": "Mexican Ground Karate Escapes Volume 1: Front Headlock Escapes by Craig Jones",
    "titleCn": "Craig Jones：墨西哥地面空手道逃脱第一部：前颈锁逃脱",
    "instructor": "Craig Jones",
    "cat": "半防守",
    "chapters": 36,
    "volumes": 4,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/CraigJones_MexicanGroundKarateEscapes_Cover.jpg?v=1762461309"
  },
  {
    "id": "leg-pummeling-mastery-by-mikey-musumeci",
    "title": "Leg Pummeling Mastery by Mikey Musumeci",
    "titleCn": "Mikey Musumeci的腿部缠斗大师课",
    "instructor": "Mikey Musumeci",
    "cat": "摔法",
    "chapters": 51,
    "volumes": 6,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/MikeyMusumeci_LegPummelingMastery_Cover.jpg?v=1762461186"
  },
  {
    "id": "feet-to-floor-volume-2-by-john-danaher",
    "title": "Feet To Floor Volume 2 by John Danaher",
    "titleCn": "John Danaher的站立摔法系列第二部",
    "instructor": "John Danaher",
    "cat": "关节技",
    "chapters": 109,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_FeetToFloorVolume2_FRONTCover1.jpg?v=1762459877"
  },
  {
    "id": "the-mikey-lock-by-mikey-musumeci",
    "title": "The Mikey Lock by Mikey Musumeci",
    "titleCn": "Mikey Musumeci的Mikey Lock腿锁技术",
    "instructor": "Mikey Musumeci",
    "cat": "体能",
    "chapters": 76,
    "volumes": 4,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/MikeyMusumeci_TheMikeyLock_Covercopy.jpg?v=1762461354"
  },
  {
    "id": "the-triangle-machine-by-craig-jones",
    "title": "The Triangle Machine by Craig Jones",
    "titleCn": "Craig Jones的三角绞机器",
    "instructor": "Craig Jones",
    "cat": "过腿",
    "chapters": 7,
    "volumes": 1,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/TheTriangleMachinebyCraigJones_FRONTCover.jpg?v=1762457848"
  },
  {
    "id": "foundations-of-passing-neutralizing-the-guard-by-mikey-musumeci",
    "title": "Foundations of Passing: Neutralizing The Guard by Mikey Musumeci",
    "titleCn": "过腿基础：中和防守（Mikey Musumeci）",
    "instructor": "Mikey Musumeci",
    "cat": "开放式防守",
    "chapters": 64,
    "volumes": 4,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/MikeyMusumeci_FoundationsofPassingNeutralizationofGuards_CoverFRONT.jpg?v=1762462734"
  },
  {
    "id": "the-kimura-anthology-by-lachlan-giles",
    "title": "The Kimura Anthology by Lachlan Giles",
    "titleCn": "Lachlan Giles的肩锁全集",
    "instructor": "Lachlan Giles",
    "cat": "逃脱",
    "chapters": 158,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/LachlanGiles_TheKIMURAANTHOLOGY_CoverFRONT.jpg?v=1762463117"
  },
  {
    "id": "the-berimbolo-system-part-2-by-mikey-musumeci",
    "title": "The Berimbolo System Part 2: Crab Ride & Leg Drags by Mikey Musumeci",
    "titleCn": "Mikey Musumeci的回旋系统第二部：蟹式骑乘与拖腿",
    "instructor": "Mikey Musumeci",
    "cat": "关节技",
    "chapters": 58,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/TheBerimboloSystemPart2-CrabRide_LegDragsbyMikeyMusumeci_FRONTCover.jpg?v=1762459869"
  },
  {
    "id": "no-gi-open-guard-volume-3-rdlr-leg-entanglements-by-lachlan-giles",
    "title": "No Gi Open Guard Volume 3: RDLR & Leg Entanglements by Lachlan Giles",
    "titleCn": "Lachlan Giles的无道服开放式防守第三部：RDLR与腿部缠绕",
    "instructor": "Lachlan Giles",
    "cat": "防守",
    "chapters": 94,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/LachlanGiles_RDLR_LEGENTANGLEMENTS_Coverfront.jpg?v=1762460574"
  },
  {
    "id": "the-knee-shield-system-part-1-attacking-far-side-by-mikey-musumeci",
    "title": "The Knee Shield System Part 1: Attacking Far Side by Mikey Musumeci",
    "titleCn": "Mikey Musumeci的膝盾系统第一部：远侧进攻",
    "instructor": "Mikey Musumeci",
    "cat": "摔法",
    "chapters": 52,
    "volumes": 6,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/MikeyMusumeci_TheKneeShieldSystemPart1_frontCover.jpg?v=1762460356"
  },
  {
    "id": "no-gi-berimbolo-system-part-1-by-mikey-musumeci",
    "title": "No Gi Berimbolo System Part 1 by Mikey Musumeci",
    "titleCn": "Mikey Musumeci的无道服回旋系统第一部",
    "instructor": "Mikey Musumeci",
    "cat": "关节技",
    "chapters": 60,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/MikeyMusumeci_No-GiBerimboloSystemPart1_Cover.jpg?v=1762461006"
  },
  {
    "id": "the-sport-of-kings-high-performance-mindset-for-grappling-by-gordon-ryan",
    "title": "The Sport of Kings: High Performance Mindset For Grappling by Gordon Ryan",
    "titleCn": "王者运动：格斗的高性能心态（Gordon Ryan）",
    "instructor": "Gordon Ryan",
    "cat": "绞技",
    "chapters": 36,
    "volumes": 4,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/GordonRyan_TheSportofKingsHighPerformanceMindsetForGrappling_FRONTCover.jpg?v=1762459893"
  },
  {
    "id": "feet-to-floor-volume-3-by-john-danaher",
    "title": "Feet To Floor: Volume 3 by John Danaher",
    "titleCn": "John Danaher的站立摔法系列第三部",
    "instructor": "John Danaher",
    "cat": "降服",
    "chapters": 80,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_FeettoFloorVolume3_FrontCover1.jpg?v=1762460061"
  },
  {
    "id": "the-fight-dietician-by-craig-jones-and-jordan-sullivan",
    "title": "The Fight Dietician by Craig Jones and Jordan Sullivan",
    "titleCn": "Craig Jones与Jordan Sullivan的格斗饮食指南",
    "instructor": "Craig Jones and Jordan Sullivan",
    "cat": "过腿",
    "chapters": 14,
    "volumes": 3,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JordanSullivan_CraigJonesPresents-TheFightDietician_CoverFRONT.jpg?v=1762463511"
  },
  {
    "id": "omoplata-by-lachlan-giles",
    "title": "Omoplata by Lachlan Giles",
    "titleCn": "Lachlan Giles的肩胛固",
    "instructor": "Lachlan Giles",
    "cat": "关节技",
    "chapters": 36,
    "volumes": 4,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/LachlanGiles_Omoplata_CoverFRONT.jpg?v=1762464071"
  },
  {
    "id": "the-berimbolo-system-part-3-by-mikey-musumeci",
    "title": "The Berimbolo System Part 3: Wedges and Hooks by Mikey Musumeci",
    "titleCn": "Mikey Musumeci的回旋系统第三部：楔形与钩子",
    "instructor": "Mikey Musumeci",
    "cat": "德拉防守",
    "chapters": 64,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/TheBerimboloSystemPart3-WedgesandHooksbyMikeyMusumeci_FRONTCover.jpg?v=1762459935"
  },
  {
    "id": "the-berimbolo-system-part-4-defending-gi-leg-locks-and-counters-by-mikey-musumeci",
    "title": "The Berimbolo System Part 4: Defending Gi Leg Locks and Counters by Mikey Musumeci",
    "titleCn": "Mikey Musumeci的回旋系统第四部：防守道服腿锁与反击",
    "instructor": "Mikey Musumeci",
    "cat": "德拉防守",
    "chapters": 75,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/MikeyMusumeci_TheBErimboloSystem_Part4_FRONTCover.jpg?v=1762459950"
  },
  {
    "id": "my-evolution-your-revolution-adcc-2022-by-gordon-ryan",
    "title": "My Evolution Your Revolution: ADCC 2022 by Gordon Ryan",
    "titleCn": "我的进化，你的革命：ADCC 2022（Gordon Ryan）",
    "instructor": "Gordon Ryan",
    "cat": "半防守",
    "chapters": 33,
    "volumes": 5,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/GordonRyan_MyEvolution_YourRevolution-ADCC2022_CoverFRONT.jpg?v=1762463354"
  },
  {
    "id": "my-evolution-your-revolution-by-gordon-ryan",
    "title": "My Evolution Your Revolution: ADCC 2019 Analysis by Gordon Ryan",
    "titleCn": "我的进化，你的革命：ADCC 2019分析（Gordon Ryan）",
    "instructor": "Gordon Ryan",
    "cat": "德拉防守",
    "chapters": 31,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/GordonRyan_MyEvolutionYourRevolution_FRONTCover1.jpg?v=1762459065"
  },
  {
    "id": "my-evolution-your-revolution-adcc-2024-by-gordon-ryan",
    "title": "My Evolution Your Revolution ADCC 2024 by Gordon Ryan",
    "titleCn": "我的进化，你的革命：ADCC 2024（Gordon Ryan）",
    "instructor": "Gordon Ryan",
    "cat": "体能",
    "chapters": 59,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/MYEVOLUTIONYOURREVOLUTIONADCC2024byGordonRyanFront.jpg?v=1756264742"
  },
  {
    "id": "my-evolution-your-evolution-adcc-2017-analysis-by-gordon-ryan",
    "title": "My Evolution Your Evolution: ADCC 2017 Analysis by Gordon Ryan",
    "titleCn": "我的进化，你的革命：ADCC 2017分析（Gordon Ryan）",
    "instructor": "Gordon Ryan",
    "cat": "摔法",
    "chapters": 61,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/GordonRyan_MyEvolutionYourRevolution_Cover1front.jpg?v=1762460507"
  },
  {
    "id": "under-the-legs-passing-anthology-by-lachlan-giles",
    "title": "Under the Legs Passing Anthology by Lachlan Giles",
    "titleCn": "Lachlan Giles的钻腿过防全集",
    "instructor": "Lachlan Giles",
    "cat": "体能",
    "chapters": 166,
    "volumes": 6,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/UndertheLegsPassingAnthologybyLachlanGilesFront.jpg?v=1757989616"
  },
  {
    "id": "master-the-move-the-butterfly-guard-sweep-sumi-gaeshi-by-john-danaher",
    "title": "Master The Move: The Butterfly Guard Sweep Sumi Gaeshi by John Danaher",
    "titleCn": "掌握招式：蝴蝶防守扫技-隅返（John Danaher）",
    "instructor": "John Danaher",
    "cat": "防守",
    "chapters": 35,
    "volumes": 6,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/MasterTheMovebyJohnDanaherFrontNEW.jpg?v=1761359485"
  },
  {
    "id": "ageless-jiu-jitsu-winning-when-youre-older-and-less-athletic-bottom-game-gi-by-john-danaher-1",
    "title": "Ageless Jiu Jitsu: Winning When You're Older and Less Athletic - Bottom game: Gi by John Danaher",
    "titleCn": "不老柔术：大龄与非运动型选手的获胜之道-下位防守：道服（John Danaher）",
    "instructor": "John Danaher",
    "cat": "关节技",
    "chapters": 78,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/JohnDanaher_AgelessJiuJitsu-WinningWhenYou_reOlderorLessAthletic-BottomGame-Gi_CoverFRONT.jpg?v=1762464156"
  },
  {
    "id": "systematically-attacking-the-scrimmage-securing-the-score-by-gordon-ryan",
    "title": "Systematically Attacking the Scrimmage: Securing The Score by Gordon Ryan",
    "titleCn": "系统性进攻缠斗：确立得分（Gordon Ryan）",
    "instructor": "Gordon Ryan",
    "cat": "德拉防守",
    "chapters": 156,
    "volumes": 10,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/Systematically_Attacking_the_Scrimmage_Securing_The_Score_by_Gordon_Ryan_Front.jpg?v=1763336939"
  },
  {
    "id": "systematically-attacking-the-scrimmage-half-guard-whizzer-vs-underhook-by-gordon-ryan",
    "title": "Systematically Attacking The Half Guard and Scrimmaging: Whizzer vs Underhook by Gordon Ryan",
    "titleCn": "系统性进攻半防守与缠斗：Whizzer对抗Underhook（Gordon Ryan）",
    "instructor": "Gordon Ryan",
    "cat": "逃脱",
    "chapters": 100,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/Gordon_FINAL_cover.jpg?v=1776311403"
  },
  {
    "id": "master-the-move-the-knee-cut-guard-pass-by-john-danaher",
    "title": "Master The Move: The Knee Cut Guard Pass by John Danaher",
    "titleCn": "掌握招式：膝切过腿（John Danaher）",
    "instructor": "John Danaher",
    "cat": "防守",
    "chapters": 34,
    "volumes": 6,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/MastertheMovebyJohnDanaherFront.jpg?v=1769220269"
  },
  {
    "id": "systematically-dismantling-octopus-guard-other-low-percentage-moves-by-gordon-ryan",
    "title": "Systematically Dismantling Octopus Guard & Other Low-Percentage Moves by Gordon Ryan",
    "titleCn": "系统性拆解章鱼防守及其他低成功率招式（Gordon Ryan）",
    "instructor": "Gordon Ryan",
    "cat": "防守",
    "chapters": 79,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/SystematicallyDismantlingOctopusGuardAndOtherLow-PercentageMovesbyGordonRyanFront.jpg?v=1770693334"
  },
  {
    "id": "master-the-move-toreando-guard-pass-by-john-danaher",
    "title": "Master the Move: Toreando Guard Pass by John Danaher",
    "titleCn": "掌握招式：斗牛士过腿（John Danaher）",
    "instructor": "John Danaher",
    "cat": "防守",
    "chapters": 0,
    "volumes": 0,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/MastertheMove-TheToreandoGuardPassbyJohnDanaherFrontNEW.jpg?v=1774890892"
  },
  {
    "id": "my-evolution-your-revolution-2017-adcc-scrimmage-analysis-by-gordon-ryan",
    "title": "My Evolution Your Revolution 2017 ADCC Scrimmage Analysis by Gordon Ryan",
    "titleCn": "我的进化，你的革命：2017 ADCC缠斗分析（Gordon Ryan）",
    "instructor": "Gordon Ryan",
    "cat": "防守",
    "chapters": 68,
    "volumes": 5,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/MyEvolutionYourRevolution2017ADCCScrimmageAnalysisbyGordonRyanFront.jpg?v=1779767281"
  },
  {
    "id": "master-the-move-the-ankle-lock-by-john-danaher",
    "title": "Master The Move: The Ankle Lock by John Danaher",
    "titleCn": "掌握招式：踝锁（John Danaher）",
    "instructor": "John Danaher",
    "cat": "过腿",
    "chapters": 0,
    "volumes": 0,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/MasterTheMoveTheAnkleLockFrontBlack.png?v=1780458518"
  },
  {
    "id": "master-the-move-the-back-crucifix-by-john-danaher",
    "title": "Master The Move: The Back Crucifix by John Danaher",
    "titleCn": "掌握招式：背后十字固（John Danaher）",
    "instructor": "John Danaher",
    "cat": "蝴蝶勾",
    "chapters": 30,
    "volumes": 7,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/files/JohnDanaher_MasterTheMove-TheBackCrucifix_CoverFRONT.jpg?v=1762467484"
  },
  {
    "id": "open-guard-bjj-fundamentals-go-further-faster-by-john-danaher",
    "title": "Open Guard: BJJ Fundamentals - Go Further Faster by John Danaher",
    "titleCn": "开放式防守：柔术基础-更进一步（John Danaher）",
    "instructor": "John Danaher",
    "cat": "防守",
    "chapters": 90,
    "volumes": 8,
    "image": "https://cdn.shopify.com/s/files/1/1800/2299/products/JohnDanaher_OpenGuardBJJFundamentals-GoFurtherFaster_FRONTCover1.jpg?v=1762459190"
  }
];

module.exports = { categories, courses };
