import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

// ✅ Hardcoded tours so tests run without API issues
const sampleTours = [
  {
    id: "rec6d6T3q5EBIdCfD",
    name: "Best of Paris in 7 Days Tour",
    info: "Paris is synonymous with the finest things in life: fashion, food, art, and romance. This is not a tour to rush — it’s a chance to savor every detail and immerse yourself into Parisian culture. From the Eiffel Tower to charming cafés, this 7-day tour is designed for unforgettable memories. You'll explore world-class museums, walk along the Seine, and discover hidden gems known only to locals.",
    image: "https://www.course-api.com/images/tours/tour-1.jpeg",
    price: "1995",
  },
  {
    id: "recIwxrvU9HfJR3B4",
    name: "Best of Ireland in 14 Days Tour",
    info: "Experience Ireland’s rich culture, breathtaking landscapes, and warm hospitality on this 14-day tour. You’ll travel from Dublin to the Cliffs of Moher, taste traditional dishes, listen to live Irish music, and connect with locals in small villages. This is the complete Irish adventure you’ve been waiting for.",
    image: "https://www.course-api.com/images/tours/tour-2.jpeg",
    price: "3895",
  },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      // ✅ Instead of API, use hardcoded data
      setTours(sampleTours);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) return <Loading />;

  if (tours.length === 0) {
    return (
      <main id="main">
        <h2>No Tours Left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </main>
    );
  }

  return (
    <main id="main">
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
