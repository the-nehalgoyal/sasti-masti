import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [quests, setQuests] = useState([]);
  const [filteredQuests, setFilteredQuests] = useState([]);
  const [loading, setLoading] = useState(false);

  const moods = [
    { name: 'creative', emoji: '🎨', color: '#FF6B6B' },
    { name: 'adventurous', emoji: '🚀', color: '#4ECDC4' },
    { name: 'social', emoji: '👥', color: '#FFE66D' },
    { name: 'chill', emoji: '😎', color: '#95E1D3' },
    { name: 'energetic', emoji: '⚡', color: '#F38181' },
    { name: 'contemplative', emoji: '🤔', color: '#AA96DA' },
    { name: 'rebellious', emoji: '🔥', color: '#FCBAD3' },
    { name: 'fun', emoji: '🎭', color: '#A8D8EA' },
  ];

  useEffect(() => {
    // Load quests on mount
    fetch('/quests.json')
      .then(res => res.json())
      .then(data => setQuests(data.quests))
      .catch(err => console.error('Failed to load quests:', err));
  }, []);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setLoading(true);

    // Simulate API call (in real app, this hits Lambda)
    setTimeout(() => {
      const filtered = quests.filter(quest =>
        quest.mood.includes(mood)
      );
      setFilteredQuests(filtered.sort(() => Math.random() - 0.5).slice(0, 6));
      setLoading(false);
    }, 300);
  };

  return (
    <>
      <Head>
        <title>Sidequest - College Boredom Killer</title>
        <meta name="description" content="Discover unconventional college activities based on your mood" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Sidequest</h1>
          <p className={styles.subtitle}>What's your vibe today?</p>
        </div>

        {/* Mood Selector */}
        {!selectedMood ? (
          <div className={styles.moodSelector}>
            <div className={styles.moods}>
              {moods.map(mood => (
                <button
                  key={mood.name}
                  className={styles.moodButton}
                  onClick={() => handleMoodSelect(mood.name)}
                  style={{ backgroundColor: mood.color }}
                  title={mood.name}
                >
                  <span className={styles.moodEmoji}>{mood.emoji}</span>
                  <span className={styles.moodLabel}>{mood.name}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.results}>
            {/* Back Button */}
            <button
              className={styles.backButton}
              onClick={() => {
                setSelectedMood(null);
                setFilteredQuests([]);
              }}
            >
              ← Back
            </button>

            {/* Results Header */}
            <h2 className={styles.resultsTitle}>
              Your {selectedMood} Quests
            </h2>

            {/* Loading State */}
            {loading ? (
              <div className={styles.loading}>Finding your vibe...</div>
            ) : (
              <>
                {/* Quest Cards */}
                <div className={styles.questsGrid}>
                  {filteredQuests.length > 0 ? (
                    filteredQuests.map(quest => (
                      <div key={quest.id} className={styles.questCard}>
                        <div className={styles.questEmoji}>{quest.emoji}</div>
                        <h3 className={styles.questTitle}>{quest.title}</h3>
                        <p className={styles.questDescription}>{quest.description}</p>
                        
                        <div className={styles.questMeta}>
                          <span className={styles.metaItem}>⏱️ {quest.duration}</span>
                          <span className={styles.metaItem}>💰 {quest.cost}</span>
                          <span className={styles.metaItem}>📍 {quest.location}</span>
                        </div>

                        <button className={styles.doButton}>
                          Do this now →
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className={styles.noResults}>
                      No quests found for this mood. Try another!
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        )}

        {/* Footer */}
        <footer className={styles.footer}>
          <p>Sidequest: Cloud-based serendipity engine for college students</p>
        </footer>
      </div>
    </>
  );
}
