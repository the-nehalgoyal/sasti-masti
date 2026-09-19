const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB();

const TABLE_NAME = 'Quests';

const quests = [
  { id: 1, title: "Graffiti Different Areas", description: "Use sidewalk chalk to create art in public spaces. Know the rules first!", duration: "30-60 min", cost: "₹50-100", mood: "creative", emoji: "🎨" },
  { id: 2, title: "Paint a Rock", description: "Find a rock, paint it, leave it somewhere for someone to find.", duration: "45 min", cost: "₹0-50", mood: "creative", emoji: "🪨" },
  { id: 3, title: "Random Library Book Roulette", description: "Close your eyes, pick a random book, read it.", duration: "60-120 min", cost: "₹0", mood: "contemplative", emoji: "📚" },
  { id: 4, title: "Photography Scavenger Hunt", description: "Hunt for cool doors, patterns, pigeons, graffiti, doorknobs, architectural objects.", duration: "60-90 min", cost: "₹0", mood: "creative", emoji: "📸" },
  { id: 5, title: "Climb a Tree", description: "Find a climbable tree, embrace your inner kid.", duration: "30 min", cost: "₹0", mood: "adventurous", emoji: "🌳" },
  { id: 6, title: "Blind Food Roulette", description: "Close your eyes, pick a point on a map, go to the closest restaurant and try food.", duration: "90 min", cost: "₹200-500", mood: "adventurous", emoji: "🍜" },
  { id: 7, title: "Celebrate Your Happy Birthday", description: "Make today your birthday. Celebrate it fully.", duration: "variable", cost: "variable", mood: "fun", emoji: "🎉" },
  { id: 8, title: "Random Food Tasting Challenge", description: "Hit three nearby stalls. Pick one thing you've never tried at each. Budget: ₹100 total.", duration: "60 min", cost: "₹100", mood: "adventurous", emoji: "🛞" },
  { id: 9, title: "Make 3 Reels", description: "Create three short videos. Any vibe, any topic.", duration: "60-120 min", cost: "₹0", mood: "creative", emoji: "📱" },
  { id: 10, title: "Fashion Show in Your Room", description: "Model your own clothes like you're on a runway.", duration: "30-60 min", cost: "₹0", mood: "fun", emoji: "👗" },
  { id: 11, title: "Recreate a Childhood Photo", description: "Find an old photo of yourself and recreate it as accurately as possible.", duration: "45-90 min", cost: "₹0", mood: "contemplative", emoji: "📷" },
  { id: 12, title: "Make a Newspaper About Your Life", description: "One page: breaking news, weather, sports, scandals, celebrity gossip about friends.", duration: "45-60 min", cost: "₹0-50", mood: "creative", emoji: "📰" },
  { id: 13, title: "Random Outfit Generator", description: "Number your clothes, use a random number generator, wear the combo it gives you.", duration: "15 min", cost: "₹0", mood: "fun", emoji: "🎲" },
  { id: 14, title: "Mannequin Photo Challenge", description: "Find a mannequin, wear the same clothes, recreate its exact pose.", duration: "60 min", cost: "₹0", mood: "fun", emoji: "🧍" },
  { id: 15, title: "Make Your Flag", description: "Design and create your personal flag. Be as creative as you want.", duration: "60-90 min", cost: "₹50-150", mood: "creative", emoji: "🚩" },
  { id: 16, title: "Cloud Casting", description: "Lie down somewhere and give names to 10 clouds.", duration: "30 min", cost: "₹0", mood: "contemplative", emoji: "☁️" },
  { id: 17, title: "Make a Music Video", description: "Create a music video to a song you love.", duration: "90-180 min", cost: "₹0", mood: "creative", emoji: "🎬" },
  { id: 18, title: "Humans of My House Series", description: "Interview roommates with 3 weird questions each. Write/record it.", duration: "45-60 min", cost: "₹0", mood: "social", emoji: "🎙️" },
  { id: 19, title: "Free Call an Astrologer", description: "Use free astrology apps or numbers. Ask them wild questions.", duration: "15-30 min", cost: "₹0", mood: "fun", emoji: "🔮" },
  { id: 20, title: "Free Call a Matchmaker", description: "Try finding your perfect match or your friend's. See what happens.", duration: "15-30 min", cost: "₹0", mood: "fun", emoji: "💕" },
  { id: 21, title: "Make & Bury a Time Capsule", description: "Create a time capsule and bury it somewhere you'll remember.", duration: "60-90 min", cost: "₹0-100", mood: "contemplative", emoji: "⏰" },
  { id: 22, title: "Play Like a Child in a Park", description: "Hide-and-seek, tag, hopscotch, frisbee. Anything you haven't done in years.", duration: "60-90 min", cost: "₹0", mood: "energetic", emoji: "🎪" },
  { id: 23, title: "Karaoke in Your Room", description: "Use YouTube or Apple Music. Belt it out in your dorm.", duration: "30-60 min", cost: "₹0", mood: "fun", emoji: "🎤" },
  { id: 24, title: "Crash a Random Wedding", description: "Find a wedding happening. Dance, eat, leave without being caught.", duration: "120 min", cost: "₹0", mood: "adventurous", emoji: "💒" },
  { id: 25, title: "Create Your Iconic Handshake", description: "Come up with a unique handshake. Teach it to friends.", duration: "15-30 min", cost: "₹0", mood: "social", emoji: "🤝" },
  { id: 26, title: "Movie Hall Hall-Hopping", description: "Watch a movie, at interval switch to another hall and watch the 2nd half of a different movie.", duration: "180 min", cost: "₹300-400", mood: "fun", emoji: "🎞️" },
  { id: 27, title: "Make a 'What's in My Bag' Video", description: "Film yourself explaining everything in your bag. Post it or share it.", duration: "30 min", cost: "₹0", mood: "social", emoji: "🎒" },
  { id: 28, title: "Build a Blanket Fort", description: "Create an elaborate fort in your room using bedsheets and blankets.", duration: "60-90 min", cost: "₹0", mood: "creative", emoji: "⛺" },
  { id: 29, title: "Go Fruit Shopping (Analog Way)", description: "Forget Blinkit. Go to a real fruit market, pick fresh stuff.", duration: "45 min", cost: "₹100-300", mood: "chill", emoji: "🍎" },
  { id: 30, title: "Room Cardio Rave", description: "Full cardio workout in your room with bangers. Just you and the music.", duration: "30-45 min", cost: "₹0", mood: "energetic", emoji: "💪" }
];

async function seedData() {
  console.log('Starting to seed DynamoDB...\n');

  for (const quest of quests) {
    const params = {
      TableName: TABLE_NAME,
      Item: {
        quest_id: { N: quest.id.toString() },
        title: { S: quest.title },
        description: { S: quest.description },
        duration: { S: quest.duration },
        cost: { S: quest.cost },
        mood: { S: quest.mood },
        emoji: { S: quest.emoji }
      }
    };

    try {
      await dynamodb.putItem(params).promise();
      console.log(`✅ Seeded quest ${quest.id}: ${quest.title}`);
    } catch (error) {
      console.error(`❌ Failed to seed quest ${quest.id}:`, error.message);
    }
  }

  console.log('\n✅ All 30 quests seeded successfully!');
}

seedData().catch(err => {
  console.error('Error seeding data:', err);
  process.exit(1);
});
