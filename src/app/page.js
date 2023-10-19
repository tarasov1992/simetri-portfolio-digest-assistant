'use client';
import { useState, useEffect } from "react";

export default function Home () {
  const [pick, setPick] = useState(null);
  const [tweet, setTweet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    return () => {

    }
  }, [])
  
  if (tweet === null) return null;

  return(
    <main>
      <h2>Tweet:</h2>
      <button>Generate Summary</button>
      {pick && <span>{pick}</span>}
    </main>
  )
}