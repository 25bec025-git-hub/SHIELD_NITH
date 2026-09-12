// LocalStorage Progress Tracker for SHIELD Learning Hub

class LearningProgressTracker {
  constructor() {
    this.storageKey = 'shield_learning_progress_v1';
    this.data = this.load();
  }

  load() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) return this.getDefaults();
      return { ...this.getDefaults(), ...JSON.parse(raw) };
    } catch {
      return this.getDefaults();
    }
  }

  getDefaults() {
    return {
      completedLessons: [],
      bookmarks: [],
      recentlyViewed: [],
      lastActiveLesson: null,
      quizScores: {}
    };
  }

  save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    } catch (err) {
      console.warn('Failed to save learning progress to LocalStorage:', err);
    }
  }

  isLessonCompleted(lessonId) {
    return this.data.completedLessons.includes(lessonId);
  }

  toggleLessonCompleted(lessonId) {
    if (this.isLessonCompleted(lessonId)) {
      this.data.completedLessons = this.data.completedLessons.filter(id => id !== lessonId);
    } else {
      this.data.completedLessons.push(lessonId);
    }
    this.save();
    return this.isLessonCompleted(lessonId);
  }

  isBookmarked(lessonId) {
    return this.data.bookmarks.includes(lessonId);
  }

  toggleBookmark(lessonId) {
    if (this.isBookmarked(lessonId)) {
      this.data.bookmarks = this.data.bookmarks.filter(id => id !== lessonId);
    } else {
      this.data.bookmarks.push(lessonId);
    }
    this.save();
    return this.isBookmarked(lessonId);
  }

  recordVisit(domainSlug, lessonId, lessonTitle) {
    this.data.lastActiveLesson = { domainSlug, lessonId, lessonTitle, timestamp: new Date().toISOString() };
    
    // Manage recently viewed (max 10)
    const existingIdx = this.data.recentlyViewed.findIndex(item => item.lessonId === lessonId);
    if (existingIdx !== -1) {
      this.data.recentlyViewed.splice(existingIdx, 1);
    }
    this.data.recentlyViewed.unshift({
      domainSlug,
      lessonId,
      lessonTitle,
      timestamp: new Date().toISOString()
    });

    if (this.data.recentlyViewed.length > 10) {
      this.data.recentlyViewed.pop();
    }

    this.save();
  }

  saveQuizScore(quizId, score, total) {
    this.data.quizScores[quizId] = { score, total, timestamp: new Date().toISOString() };
    this.save();
  }

  getDomainProgress(totalLessonsInDomain, completedInDomainCount) {
    if (!totalLessonsInDomain || totalLessonsInDomain === 0) return 0;
    return Math.min(Math.round((completedInDomainCount / totalLessonsInDomain) * 100), 100);
  }

  getOverallStats(allDomains) {
    const completedCount = this.data.completedLessons.length;
    const bookmarkCount = this.data.bookmarks.length;
    const lastActive = this.data.lastActiveLesson;
    return {
      completedCount,
      bookmarkCount,
      lastActive,
      recentlyViewed: this.data.recentlyViewed
    };
  }
}

export const learningProgress = new LearningProgressTracker();
