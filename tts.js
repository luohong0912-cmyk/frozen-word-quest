// ========================================
// TTS (Text-to-Speech) Module
// ========================================

const TTS = {
  synth: window.speechSynthesis,
  speaking: false,
  _pending: null,

  // Quick reset for Chrome speech engine bug
  async _ensureReady() {
    if (!this.synth) return false;

    // Chrome bug workaround: pause+cancel+resume in sequence
    this.synth.pause();
    this.synth.cancel();
    this.synth.resume();
    this.speaking = false;

    // Minimal delay
    await new Promise(r => setTimeout(r, 50));

    // Load voices if needed (some browsers need this to work)
    let voices = this.synth.getVoices();
    if (voices.length === 0) {
      // Wait for voices to load
      await new Promise((resolve) => {
        const check = () => {
          voices = this.synth.getVoices();
          if (voices.length > 0) {
            resolve();
          } else {
            setTimeout(check, 100);
          }
        };
        this.synth.onvoiceschanged = () => resolve();
        setTimeout(() => resolve(), 800); // Failsafe
      });
    }

    return true;
  },

  async speak(text) {
    await this._ensureReady();

    return new Promise((resolve) => {
      if (!this.synth) { resolve(); return; }

      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'en-US';
      utter.rate = 0.8;
      utter.pitch = 1.1;
      utter.volume = 1.0;

      let resolved = false;
      this.speaking = true;

      utter.onstart = () => {
        this.speaking = true;
      };

      utter.onend = () => {
        if (!resolved) {
          resolved = true;
          this.speaking = false;
          resolve();
        }
      };

      utter.onerror = (e) => {
        // 'canceled' errors are normal after cancel(), ignore them
        // Only treat real errors as failures
        if (e.error === 'canceled' || e.error === 'interrupted') {
          if (!resolved) {
            resolved = true;
            this.speaking = false;
            resolve();
          }
        } else {
          // Real error — wait and retry once
          if (!resolved) {
            resolved = true;
            this.speaking = false;
            resolve();
          }
        }
      };

      this.synth.speak(utter);

      // Safety timeout
      setTimeout(() => {
        if (!resolved) {
          resolved = true;
          this.speaking = false;
          resolve();
        }
      }, 15000);
    });
  },

  async speakWord(word) {
    await this._ensureReady();

    return new Promise((resolve) => {
      if (!this.synth) { resolve(); return; }

      const utter = new SpeechSynthesisUtterance(word);
      utter.lang = 'en-US';
      utter.rate = 0.7;
      utter.pitch = 1.1;
      utter.volume = 1.0;

      let resolved = false;
      this.speaking = true;

      utter.onstart = () => { this.speaking = true; };

      utter.onend = () => {
        if (!resolved) {
          resolved = true;
          this.speaking = false;
          resolve();
        }
      };

      utter.onerror = () => {
        if (!resolved) {
          resolved = true;
          this.speaking = false;
          resolve();
        }
      };

      this.synth.speak(utter);

      setTimeout(() => {
        if (!resolved) {
          resolved = true;
          this.speaking = false;
          resolve();
        }
      }, 8000);
    });
  },

  stop() {
    if (this.synth) {
      this.synth.cancel();
      this.speaking = false;
    }
  }
};
