const judgeNameList = {
  26: ["今崎幸彦", "尾島明", "宮川美津子", "石兼公博", "平木正洋", "中村慎"],
} as const

const courtroomList = [
  {
    id: 1,
    name: "第一小法廷",
  },
  {
    id: 2,
    name: "第二小法廷",
  },
  {
    id: 2,
    name: "第三小法廷",
  },
]

const judgeProfileList = {
  今崎幸彦: {
    name: "今崎幸彦",
    appointmentDate: "2022-06-24",
    courtroom: 2,
  },
  尾島明: {
    name: "尾島明",
    appointmentDate: "2022-07-05",
    courtroom: 2,
  },
  宮川美津子: {
    name: "宮川美津子",
    appointmentDate: "2023-11-06",
    courtroom: 1,
  },
  石兼公博: {
    name: "石兼公博",
    appointmentDate: "2024-04-17",
    courtroom: 3,
  },
  平木正洋: {
    name: "平木正洋",
    appointmentDate: "2024-08-16",
    courtroom: 3,
  },
  中村慎: {
    name: "中村慎",
    appointmentDate: "2024-09-11",
    courtroom: 1,
  },
} as const
