const data = {
  nature: {
    car: [
      ["午前", "四万十川で清流散策"],
      ["昼", "道の駅よって西土佐でランチ"],
      ["午後", "柏島の海を眺める"]
    ],
    public: [
      ["午前", "桂浜を散策"],
      ["昼", "ひろめ市場で食事"],
      ["午後", "高知城周辺を散策"]
    ]
  },
  food: {
    car: [
      ["午前", "久礼大正町市場"],
      ["昼", "カツオのたたき"],
      ["午後", "海沿いカフェ巡り"]
    ],
    public: [
      ["午前", "高知市内商店街"],
      ["昼", "ひろめ市場"],
      ["午後", "土佐茶カフェ"]
    ]
  },
  history: {
    car: [
      ["午前", "坂本龍馬記念館"],
      ["昼", "城下町ランチ"],
      ["午後", "高知城"]
    ],
    public: [
      ["午前", "高知城"],
      ["昼", "城下町散策"],
      ["午後", "牧野植物園"]
    ]
  }
};

let state = {
  theme: null,
  move: null
};

const timeline = document.getElementById("timeline");

function render() {
  if (!state.theme || !state.move) {
    timeline.innerHTML = `<p class="hint">条件をすべて選択してください</p>`;
    return;
  }

  const plan = data[state.theme][state.move];

  timeline.innerHTML = plan.map(item => `
    <div class="event">
      <div class="time">${item[0]}</div>
      <div>${item[1]}</div>
    </div>
  `).join("");
}

document.querySelectorAll("[data-theme]").forEach(btn => {
  btn.addEventListener("click", () => {
    state.theme = btn.dataset.theme;
    document.querySelectorAll("[data-theme]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    render();
  });
});

document.querySelectorAll("[data-move]").forEach(btn => {
  btn.addEventListener("click", () => {
    state.move = btn.dataset.move;
    document.querySelectorAll("[data-move]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    render();
  });
});
