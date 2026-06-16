// ========================================
// localStorage Manager
// ========================================

const Storage = {
  KEY: 'frozen_word_game',

  // Default state
  _default() {
    return {
      stars: 0,
      // Per-unit, per-lesson, per-stage progress
      // progress[unit][lesson] = { stage1: stars, stage2: stars, ... completed: bool }
      progress: {},
      // Inventory: array of purchased gift ids
      inventory: [],
      // Current Elsa outfit: { clothes: id|null, accessories: id|null }
      outfit: { clothes: null, accessory: null },
      // Highest unlocked unit/lesson
      unlockedUnit: 2,
      unlockedLesson: 1
    };
  },

  // Load state
  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (raw) {
        const data = JSON.parse(raw);
        // Merge with defaults to handle new fields
        return { ...this._default(), ...data };
      }
    } catch (e) {}
    return this._default();
  },

  // Save state
  save(state) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(state));
    } catch (e) {}
  },

  // Add stars
  addStars(n) {
    const s = this.load();
    s.stars += n;
    this.save(s);
    return s.stars;
  },

  // Record stage completion and unlock logic
  completeStage(unit, lesson, stage, starsEarned) {
    const s = this.load();
    if (!s.progress[unit]) s.progress[unit] = {};
    if (!s.progress[unit][lesson]) s.progress[unit][lesson] = {};
    s.progress[unit][lesson][stage] = starsEarned;
    s.stars += starsEarned;

    // Check if all 5 stages completed for this lesson
    const lessonDone = ['story','listen','wordsearch','match','boss']
      .every(st => s.progress[unit]?.[lesson]?.[st] !== undefined);

    if (lessonDone) {
      s.progress[unit][lesson].completed = true;
      // Unlock next lesson or unit
      this._unlockNext(s, unit, lesson);
    }

    this.save(s);
    return s;
  },

  // Unlock next lesson
  _unlockNext(s, unit, lesson) {
    const units = Object.keys(WORD_DATA).sort((a,b)=>parseInt(a)-parseInt(b));
    const unitData = WORD_DATA[unit];
    const lessonKeys = Object.keys(unitData.lessons).sort((a,b)=>parseInt(a)-parseInt(b));
    const lessonIdx = lessonKeys.indexOf(String(lesson));

    if (lessonIdx < lessonKeys.length - 1) {
      // Unlock next lesson in same unit
      s.unlockedLesson = Math.max(s.unlockedLesson, parseInt(lessonKeys[lessonIdx + 1]));
    } else {
      // Unlock first lesson of next unit
      const unitIdx = units.indexOf(String(unit));
      if (unitIdx < units.length - 1) {
        const nextUnit = parseInt(units[unitIdx + 1]);
        if (nextUnit > s.unlockedUnit) {
          s.unlockedUnit = nextUnit;
          s.unlockedLesson = 1;
        }
      }
    }
  },

  // Buy gift item
  buyItem(itemId, category) {
    const s = this.load();
    const item = GIFT_SHOP[category].find(i => i.id === itemId);
    if (!item) return { success: false, reason: 'Item not found' };
    if (s.stars < item.cost) return { success: false, reason: 'Not enough stars' };
    if (s.inventory.includes(itemId)) return { success: false, reason: 'Already owned' };

    s.stars -= item.cost;
    s.inventory.push(itemId);
    this.save(s);
    return { success: true, stars: s.stars };
  },

  // Equip outfit
  equipOutfit(category, itemId) {
    const s = this.load();
    if (itemId && !s.inventory.includes(itemId)) return { success: false };
    if (category === 'clothes') s.outfit.clothes = itemId;
    else s.outfit.accessory = itemId;
    this.save(s);
    return { success: true };
  },

  // Get stage progress for a lesson
  getProgress(unit, lesson) {
    const s = this.load();
    return s.progress[unit]?.[lesson] || {};
  },

  // Check if a lesson is unlocked
  isUnlocked(unit, lesson) {
    const s = this.load();
    if (parseInt(unit) < s.unlockedUnit) return true;
    if (parseInt(unit) === s.unlockedUnit && parseInt(lesson) <= s.unlockedLesson) return true;
    return false;
  },

  // Get total stars
  getStars() {
    return this.load().stars;
  },

  // Get inventory
  getInventory() {
    return this.load().inventory;
  },

  // Get outfit
  getOutfit() {
    return this.load().outfit;
  }
};
