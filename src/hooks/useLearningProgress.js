import { useState, useEffect } from 'react';

const STORAGE_KEY = 'shield_learning_progress_v1';

const getDefaults = () => ({
  completedLessons: [],
  bookmarks: [],
  recentlyViewed: [],
  lastActiveLesson: null,
  quizScores: {}
});

export function useLearningProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return getDefaults();
      return { ...getDefaults(), ...JSON.parse(raw) };
    } catch {
      return getDefaults();
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (err) {
      console.warn('Failed to save learning progress to LocalStorage:', err);
    }
  }, [progress]);

  const isLessonCompleted = (lessonId) => {
    return progress.completedLessons.includes(lessonId);
  };

  const toggleLessonCompleted = (lessonId) => {
    setProgress((prev) => {
      const exists = prev.completedLessons.includes(lessonId);
      const updated = exists
        ? prev.completedLessons.filter((id) => id !== lessonId)
        : [...prev.completedLessons, lessonId];
      return { ...prev, completedLessons: updated };
    });
  };

  const isBookmarked = (lessonId) => {
    return progress.bookmarks.includes(lessonId);
  };

  const toggleBookmark = (lessonId) => {
    setProgress((prev) => {
      const exists = prev.bookmarks.includes(lessonId);
      const updated = exists
        ? prev.bookmarks.filter((id) => id !== lessonId)
        : [...prev.bookmarks, lessonId];
      return { ...prev, bookmarks: updated };
    });
  };

  const recordVisit = (domainSlug, lessonId, lessonTitle) => {
    setProgress((prev) => {
      const recent = [...prev.recentlyViewed];
      const existingIdx = recent.findIndex((item) => item.lessonId === lessonId);
      if (existingIdx !== -1) {
        recent.splice(existingIdx, 1);
      }
      recent.unshift({
        domainSlug,
        lessonId,
        lessonTitle,
        timestamp: new Date().toISOString()
      });

      return {
        ...prev,
        lastActiveLesson: { domainSlug, lessonId, lessonTitle, timestamp: new Date().toISOString() },
        recentlyViewed: recent.slice(0, 10)
      };
    });
  };

  return {
    progress,
    isLessonCompleted,
    toggleLessonCompleted,
    isBookmarked,
    toggleBookmark,
    recordVisit
  };
}
