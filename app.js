// ============================================================
// NutriLife — Food & Health App
// Core Application Logic
// ============================================================

(() => {
  'use strict';

  // ============================================================
  // COMPREHENSIVE FOOD DATABASE — per 100g unless serving noted
  // Accurate real-world nutritional data
  // tags: deepfried, sweet, spicy, processed, fermented, probiotic
  // ============================================================
  const FOOD_DB = [
    // ── FRUITS ──
    { name: 'Apple', icon: '🍎', category: 'Fruits', calories: 52, protein: 0.3, carbs: 14, fat: 0.2, fiber: 2.4, nutriscore: 'a', tags: [] },
    { name: 'Banana', icon: '🍌', category: 'Fruits', calories: 89, protein: 1.1, carbs: 23, fat: 0.3, fiber: 2.6, nutriscore: 'a', tags: [] },
    { name: 'Mango', icon: '🥭', category: 'Fruits', calories: 60, protein: 0.8, carbs: 15, fat: 0.4, fiber: 1.6, nutriscore: 'a', tags: [] },
    { name: 'Orange', icon: '🍊', category: 'Fruits', calories: 47, protein: 0.9, carbs: 12, fat: 0.1, fiber: 2.4, nutriscore: 'a', tags: [] },
    { name: 'Grapes', icon: '🍇', category: 'Fruits', calories: 69, protein: 0.7, carbs: 18, fat: 0.2, fiber: 0.9, nutriscore: 'a', tags: [] },
    { name: 'Watermelon', icon: '🍉', category: 'Fruits', calories: 30, protein: 0.6, carbs: 8, fat: 0.2, fiber: 0.4, nutriscore: 'a', tags: [] },
    { name: 'Papaya', icon: '🍈', category: 'Fruits', calories: 43, protein: 0.5, carbs: 11, fat: 0.3, fiber: 1.7, nutriscore: 'a', tags: [] },
    { name: 'Pomegranate', icon: '🫐', category: 'Fruits', calories: 83, protein: 1.7, carbs: 19, fat: 1.2, fiber: 4, nutriscore: 'a', tags: [] },
    { name: 'Guava', icon: '🍐', category: 'Fruits', calories: 68, protein: 2.6, carbs: 14, fat: 1, fiber: 5.4, nutriscore: 'a', tags: [] },
    { name: 'Chikoo (Sapota)', icon: '🫒', category: 'Fruits', calories: 83, protein: 0.4, carbs: 20, fat: 1.1, fiber: 5.3, nutriscore: 'a', tags: [] },
    { name: 'Pineapple', icon: '🍍', category: 'Fruits', calories: 50, protein: 0.5, carbs: 13, fat: 0.1, fiber: 1.4, nutriscore: 'a', tags: [] },
    { name: 'Litchi', icon: '🫒', category: 'Fruits', calories: 66, protein: 0.8, carbs: 17, fat: 0.4, fiber: 1.3, nutriscore: 'a', tags: [] },
    { name: 'Jamun (Indian Blackberry)', icon: '🫐', category: 'Fruits', calories: 62, protein: 0.7, carbs: 16, fat: 0.2, fiber: 0.6, nutriscore: 'a', tags: [] },

    // ── VEGETABLES ──
    { name: 'Spinach (Palak)', icon: '🥬', category: 'Vegetables', calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, fiber: 2.2, nutriscore: 'a', tags: [] },
    { name: 'Tomato', icon: '🍅', category: 'Vegetables', calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, fiber: 1.2, nutriscore: 'a', tags: [] },
    { name: 'Potato', icon: '🥔', category: 'Vegetables', calories: 77, protein: 2, carbs: 17, fat: 0.1, fiber: 2.2, nutriscore: 'a', tags: [] },
    { name: 'Onion', icon: '🧅', category: 'Vegetables', calories: 40, protein: 1.1, carbs: 9, fat: 0.1, fiber: 1.7, nutriscore: 'a', tags: [] },
    { name: 'Broccoli', icon: '🥦', category: 'Vegetables', calories: 34, protein: 2.8, carbs: 7, fat: 0.4, fiber: 2.6, nutriscore: 'a', tags: [] },
    { name: 'Carrot', icon: '🥕', category: 'Vegetables', calories: 41, protein: 0.9, carbs: 10, fat: 0.2, fiber: 2.8, nutriscore: 'a', tags: [] },
    { name: 'Cucumber', icon: '🥒', category: 'Vegetables', calories: 15, protein: 0.7, carbs: 3.6, fat: 0.1, fiber: 0.5, nutriscore: 'a', tags: [] },
    { name: 'Okra (Bhindi)', icon: '🫑', category: 'Vegetables', calories: 33, protein: 1.9, carbs: 7, fat: 0.2, fiber: 3.2, nutriscore: 'a', tags: [] },
    { name: 'Bottle Gourd (Lauki)', icon: '🫑', category: 'Vegetables', calories: 14, protein: 0.6, carbs: 3.4, fat: 0.02, fiber: 0.5, nutriscore: 'a', tags: [] },
    { name: 'Bitter Gourd (Karela)', icon: '🫑', category: 'Vegetables', calories: 17, protein: 1, carbs: 3.7, fat: 0.2, fiber: 2.8, nutriscore: 'a', tags: [] },
    { name: 'Cauliflower (Gobi)', icon: '🫑', category: 'Vegetables', calories: 25, protein: 1.9, carbs: 5, fat: 0.3, fiber: 2, nutriscore: 'a', tags: [] },
    { name: 'Cabbage (Patta Gobi)', icon: '🥬', category: 'Vegetables', calories: 25, protein: 1.3, carbs: 6, fat: 0.1, fiber: 2.5, nutriscore: 'a', tags: [] },
    { name: 'Drumstick (Moringa)', icon: '🫑', category: 'Vegetables', calories: 37, protein: 2.1, carbs: 8.5, fat: 0.2, fiber: 3.2, nutriscore: 'a', tags: [] },
    { name: 'Methi (Fenugreek Leaves)', icon: '🥬', category: 'Vegetables', calories: 49, protein: 4.4, carbs: 6, fat: 0.9, fiber: 1.1, nutriscore: 'a', tags: [] },

    // ── GRAINS & RICE ──
    { name: 'White Rice (cooked)', icon: '🍚', category: 'Grains', calories: 130, protein: 2.7, carbs: 28, fat: 0.3, fiber: 0.4, nutriscore: 'b', tags: [] },
    { name: 'Brown Rice (cooked)', icon: '🍚', category: 'Grains', calories: 112, protein: 2.6, carbs: 24, fat: 0.9, fiber: 1.8, nutriscore: 'a', tags: [] },
    { name: 'Oats', icon: '🥣', category: 'Grains', calories: 389, protein: 17, carbs: 66, fat: 7, fiber: 11, nutriscore: 'a', tags: [] },
    { name: 'Pasta (cooked)', icon: '🍝', category: 'Grains', calories: 131, protein: 5, carbs: 25, fat: 1.1, fiber: 1.8, nutriscore: 'b', tags: [] },
    { name: 'Bread (white)', icon: '🍞', category: 'Grains', calories: 265, protein: 9, carbs: 49, fat: 3.2, fiber: 2.7, nutriscore: 'c', tags: ['processed'] },
    { name: 'Whole Wheat Bread', icon: '🍞', category: 'Grains', calories: 247, protein: 13, carbs: 41, fat: 3.4, fiber: 7, nutriscore: 'a', tags: [] },

    // ── INDIAN BREADS ──
    { name: 'Wheat Roti / Chapati', icon: '🫓', category: 'Indian Breads', calories: 120, protein: 3.5, carbs: 20, fat: 3.5, fiber: 2, nutriscore: 'a', tags: [], serving: '1 roti (40g)' },
    { name: 'Tandoori Roti', icon: '🫓', category: 'Indian Breads', calories: 110, protein: 3.5, carbs: 20, fat: 2, fiber: 2.2, nutriscore: 'a', tags: [], serving: '1 roti (40g)' },
    { name: 'Missi Roti', icon: '🫓', category: 'Indian Breads', calories: 130, protein: 5, carbs: 18, fat: 4, fiber: 2.5, nutriscore: 'a', tags: [], serving: '1 roti (45g)' },
    { name: 'Naan', icon: '🫓', category: 'Indian Breads', calories: 260, protein: 8, carbs: 45, fat: 5, fiber: 1.8, nutriscore: 'c', tags: [], serving: '1 naan (90g)' },
    { name: 'Garlic Naan', icon: '🫓', category: 'Indian Breads', calories: 300, protein: 8, carbs: 48, fat: 9, fiber: 1.8, nutriscore: 'c', tags: [], serving: '1 naan (95g)' },
    { name: 'Butter Naan', icon: '🫓', category: 'Indian Breads', calories: 320, protein: 8, carbs: 46, fat: 12, fiber: 1.5, nutriscore: 'd', tags: [], serving: '1 naan (100g)' },
    { name: 'Aloo Paratha', icon: '🫓', category: 'Indian Breads', calories: 210, protein: 5, carbs: 28, fat: 10, fiber: 2, nutriscore: 'c', tags: [], serving: '1 paratha (80g)' },
    { name: 'Gobi Paratha', icon: '🫓', category: 'Indian Breads', calories: 190, protein: 5, carbs: 25, fat: 9, fiber: 2.2, nutriscore: 'b', tags: [], serving: '1 paratha (80g)' },
    { name: 'Paneer Paratha', icon: '🫓', category: 'Indian Breads', calories: 250, protein: 9, carbs: 26, fat: 13, fiber: 1.8, nutriscore: 'c', tags: [], serving: '1 paratha (90g)' },
    { name: 'Puri', icon: '🫓', category: 'Indian Breads', calories: 150, protein: 3, carbs: 18, fat: 8, fiber: 1, nutriscore: 'c', tags: ['deepfried'], serving: '1 puri (30g)' },
    { name: 'Bhatura', icon: '🫓', category: 'Indian Breads', calories: 280, protein: 6, carbs: 35, fat: 14, fiber: 1, nutriscore: 'd', tags: ['deepfried'], serving: '1 bhatura (80g)' },
    { name: 'Kulcha', icon: '🫓', category: 'Indian Breads', calories: 270, protein: 7, carbs: 42, fat: 8, fiber: 1.5, nutriscore: 'c', tags: [], serving: '1 kulcha (80g)' },
    { name: 'Thepla', icon: '🫓', category: 'Indian Breads', calories: 140, protein: 4, carbs: 20, fat: 5, fiber: 2, nutriscore: 'b', tags: [], serving: '1 thepla (40g)' },
    { name: 'Rumali Roti', icon: '🫓', category: 'Indian Breads', calories: 100, protein: 3, carbs: 19, fat: 1.5, fiber: 1, nutriscore: 'a', tags: [], serving: '1 roti (35g)' },

    // ── NORTH INDIAN CURRIES & MAINS ──
    { name: 'Butter Chicken', icon: '🍗', category: 'North Indian', calories: 240, protein: 14, carbs: 8, fat: 18, fiber: 1, nutriscore: 'c', tags: ['spicy'], serving: '100g' },
    { name: 'Chicken Tikka Masala', icon: '🍗', category: 'North Indian', calories: 200, protein: 18, carbs: 7, fat: 12, fiber: 1.5, nutriscore: 'b', tags: ['spicy'], serving: '100g' },
    { name: 'Tandoori Chicken', icon: '🍗', category: 'North Indian', calories: 175, protein: 24, carbs: 5, fat: 7, fiber: 0.5, nutriscore: 'a', tags: ['spicy'], serving: '100g' },
    { name: 'Chicken Curry', icon: '🍗', category: 'North Indian', calories: 195, protein: 16, carbs: 6, fat: 12, fiber: 1, nutriscore: 'b', tags: ['spicy'], serving: '100g' },
    { name: 'Mutton Rogan Josh', icon: '🍖', category: 'North Indian', calories: 250, protein: 18, carbs: 5, fat: 18, fiber: 1, nutriscore: 'c', tags: ['spicy'], serving: '100g' },
    { name: 'Mutton Curry', icon: '🍖', category: 'North Indian', calories: 260, protein: 17, carbs: 6, fat: 19, fiber: 0.8, nutriscore: 'c', tags: ['spicy'], serving: '100g' },
    { name: 'Keema (Mutton Mince)', icon: '🍖', category: 'North Indian', calories: 230, protein: 16, carbs: 8, fat: 16, fiber: 1, nutriscore: 'c', tags: ['spicy'], serving: '100g' },
    { name: 'Fish Curry', icon: '🐟', category: 'North Indian', calories: 140, protein: 15, carbs: 6, fat: 6, fiber: 1, nutriscore: 'a', tags: ['spicy'], serving: '100g' },
    { name: 'Egg Curry', icon: '🥚', category: 'North Indian', calories: 165, protein: 10, carbs: 6, fat: 12, fiber: 1, nutriscore: 'b', tags: ['spicy'], serving: '100g' },
    { name: 'Kadai Paneer', icon: '🧀', category: 'North Indian', calories: 280, protein: 15, carbs: 8, fat: 22, fiber: 1.5, nutriscore: 'c', tags: ['spicy'], serving: '100g' },
    { name: 'Shahi Paneer', icon: '🧀', category: 'North Indian', calories: 300, protein: 14, carbs: 10, fat: 24, fiber: 1, nutriscore: 'd', tags: [], serving: '100g' },
    { name: 'Palak Paneer', icon: '🥬', category: 'North Indian', calories: 175, protein: 10, carbs: 7, fat: 13, fiber: 2, nutriscore: 'b', tags: [], serving: '100g' },
    { name: 'Matar Paneer', icon: '🧀', category: 'North Indian', calories: 235, protein: 12, carbs: 10, fat: 18, fiber: 2, nutriscore: 'c', tags: [], serving: '100g' },
    { name: 'Paneer Tikka', icon: '🧀', category: 'North Indian', calories: 265, protein: 18, carbs: 5, fat: 20, fiber: 1, nutriscore: 'b', tags: [], serving: '100g' },
    { name: 'Malai Kofta', icon: '🧆', category: 'North Indian', calories: 290, protein: 8, carbs: 18, fat: 22, fiber: 1.5, nutriscore: 'd', tags: ['deepfried'], serving: '100g' },
    { name: 'Dum Aloo', icon: '🥔', category: 'North Indian', calories: 175, protein: 3, carbs: 18, fat: 10, fiber: 2, nutriscore: 'c', tags: [], serving: '100g' },
    { name: 'Aloo Gobi', icon: '🥔', category: 'North Indian', calories: 130, protein: 3, carbs: 16, fat: 6, fiber: 3, nutriscore: 'b', tags: [], serving: '100g' },
    { name: 'Aloo Matar', icon: '🥔', category: 'North Indian', calories: 140, protein: 4, carbs: 18, fat: 6, fiber: 3, nutriscore: 'b', tags: [], serving: '100g' },
    { name: 'Baingan Bharta', icon: '🍆', category: 'North Indian', calories: 120, protein: 3, carbs: 10, fat: 8, fiber: 3, nutriscore: 'b', tags: [], serving: '100g' },
    { name: 'Bhindi Masala', icon: '🫑', category: 'North Indian', calories: 95, protein: 2, carbs: 8, fat: 7, fiber: 3, nutriscore: 'b', tags: [], serving: '100g' },
    { name: 'Sarson Ka Saag', icon: '🥬', category: 'North Indian', calories: 110, protein: 3, carbs: 8, fat: 8, fiber: 3, nutriscore: 'b', tags: [], serving: '100g' },
    { name: 'Mix Veg Curry', icon: '🥘', category: 'North Indian', calories: 100, protein: 3, carbs: 12, fat: 5, fiber: 3, nutriscore: 'a', tags: [], serving: '100g' },
    { name: 'Navratan Korma', icon: '🥘', category: 'North Indian', calories: 210, protein: 6, carbs: 16, fat: 14, fiber: 2, nutriscore: 'c', tags: [], serving: '100g' },

    // ── DALS & LENTILS ──
    { name: 'Dal (Toor / Arhar)', icon: '🥘', category: 'Dals', calories: 125, protein: 7, carbs: 20, fat: 1.2, fiber: 5, nutriscore: 'a', tags: [], serving: '1 bowl (150g)' },
    { name: 'Moong Dal', icon: '🥘', category: 'Dals', calories: 105, protein: 7, carbs: 18, fat: 0.5, fiber: 4.5, nutriscore: 'a', tags: [], serving: '1 bowl (150g)' },
    { name: 'Masoor Dal (Red Lentil)', icon: '🥘', category: 'Dals', calories: 115, protein: 8, carbs: 19, fat: 0.8, fiber: 4, nutriscore: 'a', tags: [], serving: '1 bowl (150g)' },
    { name: 'Chana Dal', icon: '🥘', category: 'Dals', calories: 125, protein: 8, carbs: 20, fat: 1.5, fiber: 5, nutriscore: 'a', tags: [], serving: '1 bowl (150g)' },
    { name: 'Urad Dal', icon: '🥘', category: 'Dals', calories: 130, protein: 8, carbs: 18, fat: 2.5, fiber: 4.5, nutriscore: 'a', tags: [], serving: '1 bowl (150g)' },
    { name: 'Dal Makhani', icon: '🥘', category: 'Dals', calories: 230, protein: 9, carbs: 24, fat: 12, fiber: 4, nutriscore: 'c', tags: [], serving: '1 bowl (150g)' },
    { name: 'Dal Fry', icon: '🥘', category: 'Dals', calories: 130, protein: 7, carbs: 18, fat: 3, fiber: 4, nutriscore: 'a', tags: [], serving: '1 bowl (150g)' },
    { name: 'Dal Tadka', icon: '🥘', category: 'Dals', calories: 145, protein: 7, carbs: 20, fat: 4, fiber: 4, nutriscore: 'a', tags: [], serving: '1 bowl (150g)' },
    { name: 'Sambhar', icon: '🥘', category: 'Dals', calories: 65, protein: 3, carbs: 10, fat: 1.5, fiber: 2.5, nutriscore: 'a', tags: [], serving: '1 bowl (150g)' },
    { name: 'Rasam', icon: '🥘', category: 'Dals', calories: 35, protein: 1.5, carbs: 6, fat: 0.5, fiber: 1, nutriscore: 'a', tags: ['spicy'], serving: '1 bowl (150g)' },
    { name: 'Chole / Chana Masala', icon: '🫘', category: 'Dals', calories: 210, protein: 9, carbs: 28, fat: 8, fiber: 6, nutriscore: 'b', tags: ['spicy'], serving: '1 bowl (150g)' },
    { name: 'Rajma (Kidney Bean Curry)', icon: '🫘', category: 'Dals', calories: 195, protein: 10, carbs: 30, fat: 4, fiber: 7, nutriscore: 'a', tags: [], serving: '1 bowl (150g)' },
    { name: 'Lobhia / Rongi (Black Eyed Peas)', icon: '🫘', category: 'Dals', calories: 180, protein: 9, carbs: 28, fat: 3, fiber: 6, nutriscore: 'a', tags: [], serving: '1 bowl (150g)' },

    // ── SOUTH INDIAN ──
    { name: 'Idli', icon: '🫓', category: 'South Indian', calories: 58, protein: 2, carbs: 12, fat: 0.4, fiber: 0.5, nutriscore: 'a', tags: ['fermented'], serving: '1 piece (40g)' },
    { name: 'Plain Dosa', icon: '🫓', category: 'South Indian', calories: 168, protein: 4, carbs: 27, fat: 5, fiber: 1, nutriscore: 'b', tags: ['fermented'], serving: '1 dosa (80g)' },
    { name: 'Masala Dosa', icon: '🫓', category: 'South Indian', calories: 250, protein: 5, carbs: 30, fat: 12, fiber: 2, nutriscore: 'c', tags: ['fermented'], serving: '1 dosa (120g)' },
    { name: 'Rava Dosa', icon: '🫓', category: 'South Indian', calories: 215, protein: 4, carbs: 28, fat: 10, fiber: 1, nutriscore: 'b', tags: [], serving: '1 dosa (100g)' },
    { name: 'Uttapam', icon: '🫓', category: 'South Indian', calories: 200, protein: 5, carbs: 30, fat: 7, fiber: 1.5, nutriscore: 'b', tags: ['fermented'], serving: '1 uttapam (100g)' },
    { name: 'Medu Vada', icon: '🧆', category: 'South Indian', calories: 180, protein: 6, carbs: 18, fat: 10, fiber: 2, nutriscore: 'c', tags: ['deepfried', 'fermented'], serving: '2 pieces (80g)' },
    { name: 'Ven Pongal', icon: '🍚', category: 'South Indian', calories: 195, protein: 5, carbs: 28, fat: 7, fiber: 1.5, nutriscore: 'b', tags: [], serving: '1 bowl (150g)' },
    { name: 'Appam', icon: '🫓', category: 'South Indian', calories: 120, protein: 2, carbs: 22, fat: 2, fiber: 0.5, nutriscore: 'a', tags: ['fermented'], serving: '1 appam (60g)' },
    { name: 'Avial', icon: '🥘', category: 'South Indian', calories: 130, protein: 3, carbs: 12, fat: 8, fiber: 3, nutriscore: 'b', tags: [], serving: '1 bowl (150g)' },
    { name: 'Coconut Chutney', icon: '🥣', category: 'South Indian', calories: 130, protein: 2, carbs: 7, fat: 10, fiber: 2.5, nutriscore: 'b', tags: [], serving: '2 tbsp (30g)' },
    { name: 'Curd Rice (Thayir Sadam)', icon: '🍚', category: 'South Indian', calories: 150, protein: 4, carbs: 25, fat: 4, fiber: 0.5, nutriscore: 'a', tags: ['probiotic'], serving: '1 bowl (150g)' },
    { name: 'Lemon Rice', icon: '🍚', category: 'South Indian', calories: 180, protein: 3, carbs: 30, fat: 5, fiber: 1, nutriscore: 'b', tags: [], serving: '1 bowl (150g)' },
    { name: 'Tamarind Rice (Puliyodarai)', icon: '🍚', category: 'South Indian', calories: 195, protein: 3, carbs: 32, fat: 6, fiber: 1.5, nutriscore: 'b', tags: [], serving: '1 bowl (150g)' },
    { name: 'Pesarattu', icon: '🫓', category: 'South Indian', calories: 135, protein: 7, carbs: 18, fat: 3.5, fiber: 3, nutriscore: 'a', tags: [], serving: '1 pesarattu (80g)' },
    { name: 'Puttu', icon: '🫓', category: 'South Indian', calories: 200, protein: 4, carbs: 38, fat: 4, fiber: 2, nutriscore: 'b', tags: [], serving: '1 serving (100g)' },
    { name: 'Upma', icon: '🥣', category: 'South Indian', calories: 155, protein: 4, carbs: 22, fat: 6, fiber: 1.5, nutriscore: 'b', tags: [], serving: '1 bowl (150g)' },

    // ── RICE DISHES ──
    { name: 'Chicken Biryani', icon: '🍛', category: 'Rice Dishes', calories: 290, protein: 15, carbs: 38, fat: 10, fiber: 1, nutriscore: 'c', tags: ['spicy'], serving: '1 plate (250g)' },
    { name: 'Mutton Biryani', icon: '🍛', category: 'Rice Dishes', calories: 320, protein: 16, carbs: 36, fat: 13, fiber: 1, nutriscore: 'c', tags: ['spicy'], serving: '1 plate (250g)' },
    { name: 'Veg Biryani', icon: '🍛', category: 'Rice Dishes', calories: 220, protein: 4, carbs: 35, fat: 7, fiber: 2, nutriscore: 'b', tags: ['spicy'], serving: '1 plate (250g)' },
    { name: 'Hyderabadi Biryani', icon: '🍛', category: 'Rice Dishes', calories: 310, protein: 14, carbs: 40, fat: 12, fiber: 1, nutriscore: 'c', tags: ['spicy'], serving: '1 plate (250g)' },
    { name: 'Veg Pulao', icon: '🍚', category: 'Rice Dishes', calories: 180, protein: 3, carbs: 30, fat: 5, fiber: 1.5, nutriscore: 'b', tags: [], serving: '1 bowl (150g)' },
    { name: 'Jeera Rice', icon: '🍚', category: 'Rice Dishes', calories: 160, protein: 3, carbs: 28, fat: 4, fiber: 0.5, nutriscore: 'b', tags: [], serving: '1 bowl (150g)' },
    { name: 'Khichdi', icon: '🍚', category: 'Rice Dishes', calories: 140, protein: 5, carbs: 22, fat: 3, fiber: 3, nutriscore: 'a', tags: [], serving: '1 bowl (150g)' },
    { name: 'Tomato Rice', icon: '🍚', category: 'Rice Dishes', calories: 175, protein: 3, carbs: 28, fat: 5, fiber: 1.5, nutriscore: 'b', tags: [], serving: '1 bowl (150g)' },

    // ── STREET FOOD ──
    { name: 'Samosa', icon: '🥟', category: 'Street Food', calories: 262, protein: 5, carbs: 28, fat: 15, fiber: 2, nutriscore: 'd', tags: ['deepfried', 'spicy'], serving: '1 piece (80g)' },
    { name: 'Pani Puri / Golgappa', icon: '🫗', category: 'Street Food', calories: 230, protein: 4, carbs: 35, fat: 8, fiber: 2, nutriscore: 'c', tags: ['spicy'], serving: '6 pieces (120g)' },
    { name: 'Bhel Puri', icon: '🥗', category: 'Street Food', calories: 200, protein: 5, carbs: 35, fat: 6, fiber: 3, nutriscore: 'b', tags: [], serving: '1 plate (150g)' },
    { name: 'Sev Puri', icon: '🥗', category: 'Street Food', calories: 280, protein: 5, carbs: 32, fat: 15, fiber: 2, nutriscore: 'c', tags: ['deepfried'], serving: '6 pieces (120g)' },
    { name: 'Dahi Puri', icon: '🥗', category: 'Street Food', calories: 240, protein: 5, carbs: 30, fat: 11, fiber: 2, nutriscore: 'c', tags: ['sweet'], serving: '6 pieces (120g)' },
    { name: 'Vada Pav', icon: '🍔', category: 'Street Food', calories: 290, protein: 7, carbs: 38, fat: 13, fiber: 2, nutriscore: 'c', tags: ['deepfried', 'spicy'], serving: '1 piece (120g)' },
    { name: 'Pav Bhaji', icon: '🍔', category: 'Street Food', calories: 350, protein: 8, carbs: 42, fat: 16, fiber: 3, nutriscore: 'd', tags: [], serving: '1 plate (200g)' },
    { name: 'Dabeli', icon: '🍔', category: 'Street Food', calories: 250, protein: 5, carbs: 35, fat: 10, fiber: 2.5, nutriscore: 'c', tags: ['spicy'], serving: '1 piece (100g)' },
    { name: 'Aloo Tikki', icon: '🥔', category: 'Street Food', calories: 220, protein: 4, carbs: 28, fat: 11, fiber: 2, nutriscore: 'c', tags: ['deepfried'], serving: '2 pieces (100g)' },
    { name: 'Chole Bhature', icon: '🫘', category: 'Street Food', calories: 450, protein: 12, carbs: 52, fat: 22, fiber: 5, nutriscore: 'd', tags: ['deepfried', 'spicy'], serving: '1 plate (200g)' },
    { name: 'Kathi Roll (Chicken)', icon: '🌯', category: 'Street Food', calories: 310, protein: 14, carbs: 32, fat: 14, fiber: 2, nutriscore: 'c', tags: ['spicy'], serving: '1 roll (150g)' },
    { name: 'Kathi Roll (Paneer)', icon: '🌯', category: 'Street Food', calories: 330, protein: 12, carbs: 34, fat: 16, fiber: 2, nutriscore: 'c', tags: [], serving: '1 roll (150g)' },
    { name: 'Ragda Pattice', icon: '🥔', category: 'Street Food', calories: 270, protein: 7, carbs: 38, fat: 10, fiber: 4, nutriscore: 'c', tags: [], serving: '1 plate (150g)' },
    { name: 'Misal Pav', icon: '🥘', category: 'Street Food', calories: 320, protein: 10, carbs: 42, fat: 12, fiber: 5, nutriscore: 'c', tags: ['spicy'], serving: '1 plate (200g)' },

    // ── BREAKFAST ──
    { name: 'Poha (Flattened Rice)', icon: '🍚', category: 'Breakfast', calories: 180, protein: 3, carbs: 32, fat: 5, fiber: 1.5, nutriscore: 'b', tags: [], serving: '1 bowl (150g)' },
    { name: 'Sabudana Khichdi', icon: '🍚', category: 'Breakfast', calories: 210, protein: 2, carbs: 35, fat: 8, fiber: 0.5, nutriscore: 'c', tags: [], serving: '1 bowl (150g)' },
    { name: 'Sheera / Suji Halwa', icon: '🍮', category: 'Breakfast', calories: 290, protein: 3, carbs: 40, fat: 14, fiber: 0.5, nutriscore: 'd', tags: ['sweet'], serving: '1 bowl (100g)' },
    { name: 'Aloo Poha', icon: '🍚', category: 'Breakfast', calories: 195, protein: 3, carbs: 30, fat: 7, fiber: 2, nutriscore: 'b', tags: [], serving: '1 bowl (150g)' },
    { name: 'Besan Chilla', icon: '🫓', category: 'Breakfast', calories: 165, protein: 7, carbs: 18, fat: 7, fiber: 3, nutriscore: 'a', tags: [], serving: '1 chilla (80g)' },
    { name: 'Moong Dal Chilla', icon: '🫓', category: 'Breakfast', calories: 120, protein: 8, carbs: 15, fat: 3, fiber: 3, nutriscore: 'a', tags: [], serving: '1 chilla (80g)' },

    // ── PROTEINS ──
    { name: 'Chicken Breast (grilled)', icon: '🍗', category: 'Protein', calories: 165, protein: 31, carbs: 0, fat: 3.6, fiber: 0, nutriscore: 'a', tags: [] },
    { name: 'Egg (boiled)', icon: '🥚', category: 'Protein', calories: 155, protein: 13, carbs: 1.1, fat: 11, fiber: 0, nutriscore: 'a', tags: [] },
    { name: 'Paneer', icon: '🧀', category: 'Protein', calories: 265, protein: 18, carbs: 1.2, fat: 21, fiber: 0, nutriscore: 'b', tags: [] },
    { name: 'Tofu', icon: '🧊', category: 'Protein', calories: 76, protein: 8, carbs: 1.9, fat: 4.8, fiber: 0.3, nutriscore: 'a', tags: [] },
    { name: 'Fish (Rohu)', icon: '🐟', category: 'Protein', calories: 97, protein: 17, carbs: 0, fat: 3, fiber: 0, nutriscore: 'a', tags: [] },
    { name: 'Salmon', icon: '🐟', category: 'Protein', calories: 208, protein: 20, carbs: 0, fat: 13, fiber: 0, nutriscore: 'a', tags: [] },
    { name: 'Prawns / Shrimp', icon: '🦐', category: 'Protein', calories: 99, protein: 24, carbs: 0.2, fat: 0.3, fiber: 0, nutriscore: 'a', tags: [] },
    { name: 'Soya Chunks', icon: '🫘', category: 'Protein', calories: 345, protein: 52, carbs: 33, fat: 0.5, fiber: 13, nutriscore: 'a', tags: [] },
    { name: 'Sprouts (Moong)', icon: '🌱', category: 'Protein', calories: 31, protein: 3, carbs: 6, fat: 0.2, fiber: 1.8, nutriscore: 'a', tags: [] },

    // ── DAIRY ──
    { name: 'Milk (whole)', icon: '🥛', category: 'Dairy', calories: 61, protein: 3.2, carbs: 4.8, fat: 3.3, fiber: 0, nutriscore: 'a', tags: [] },
    { name: 'Milk (toned)', icon: '🥛', category: 'Dairy', calories: 50, protein: 3.3, carbs: 4.9, fat: 1.5, fiber: 0, nutriscore: 'a', tags: [] },
    { name: 'Curd / Dahi (plain)', icon: '🥛', category: 'Dairy', calories: 60, protein: 3.5, carbs: 5, fat: 3.2, fiber: 0, nutriscore: 'a', tags: ['probiotic'] },
    { name: 'Raita', icon: '🥗', category: 'Dairy', calories: 50, protein: 2, carbs: 4, fat: 3, fiber: 0.5, nutriscore: 'a', tags: ['probiotic'] },
    { name: 'Paneer (raw)', icon: '🧀', category: 'Dairy', calories: 265, protein: 18, carbs: 1.2, fat: 21, fiber: 0, nutriscore: 'b', tags: [] },
    { name: 'Cheese', icon: '🧀', category: 'Dairy', calories: 402, protein: 25, carbs: 1.3, fat: 33, fiber: 0, nutriscore: 'd', tags: [] },
    { name: 'Butter', icon: '🧈', category: 'Dairy', calories: 717, protein: 0.9, carbs: 0.1, fat: 81, fiber: 0, nutriscore: 'e', tags: [] },
    { name: 'Ghee', icon: '🧈', category: 'Dairy', calories: 900, protein: 0, carbs: 0, fat: 100, fiber: 0, nutriscore: 'e', tags: [] },
    { name: 'Khoya / Mawa', icon: '🧀', category: 'Dairy', calories: 420, protein: 14, carbs: 20, fat: 31, fiber: 0, nutriscore: 'd', tags: [] },

    // ── INDIAN SWEETS (Mithai) ──
    { name: 'Gulab Jamun', icon: '🍩', category: 'Indian Sweets', calories: 380, protein: 4, carbs: 55, fat: 16, fiber: 0.5, nutriscore: 'e', tags: ['sweet', 'deepfried'], serving: '2 pieces (80g)' },
    { name: 'Rasgulla', icon: '🍡', category: 'Indian Sweets', calories: 186, protein: 5, carbs: 38, fat: 1, fiber: 0, nutriscore: 'c', tags: ['sweet'], serving: '2 pieces (80g)' },
    { name: 'Jalebi', icon: '🍩', category: 'Indian Sweets', calories: 380, protein: 3, carbs: 60, fat: 15, fiber: 0.5, nutriscore: 'e', tags: ['sweet', 'deepfried'], serving: '2 pieces (60g)' },
    { name: 'Besan Ladoo', icon: '🟡', category: 'Indian Sweets', calories: 430, protein: 7, carbs: 48, fat: 24, fiber: 2, nutriscore: 'e', tags: ['sweet'], serving: '2 pieces (60g)' },
    { name: 'Motichoor Ladoo', icon: '🟡', category: 'Indian Sweets', calories: 410, protein: 5, carbs: 52, fat: 21, fiber: 1, nutriscore: 'e', tags: ['sweet', 'deepfried'], serving: '2 pieces (60g)' },
    { name: 'Kaju Katli / Barfi', icon: '🍬', category: 'Indian Sweets', calories: 490, protein: 10, carbs: 52, fat: 28, fiber: 1, nutriscore: 'e', tags: ['sweet'], serving: '2 pieces (50g)' },
    { name: 'Gajar Halwa (Carrot)', icon: '🥕', category: 'Indian Sweets', calories: 290, protein: 4, carbs: 38, fat: 14, fiber: 2, nutriscore: 'd', tags: ['sweet'], serving: '1 bowl (100g)' },
    { name: 'Moong Dal Halwa', icon: '🟡', category: 'Indian Sweets', calories: 370, protein: 6, carbs: 42, fat: 20, fiber: 2, nutriscore: 'e', tags: ['sweet'], serving: '1 bowl (100g)' },
    { name: 'Kheer / Payasam', icon: '🍮', category: 'Indian Sweets', calories: 160, protein: 4, carbs: 25, fat: 5, fiber: 0.5, nutriscore: 'c', tags: ['sweet'], serving: '1 bowl (100g)' },
    { name: 'Mysore Pak', icon: '🟡', category: 'Indian Sweets', calories: 520, protein: 5, carbs: 45, fat: 36, fiber: 1, nutriscore: 'e', tags: ['sweet'], serving: '2 pieces (60g)' },
    { name: 'Peda', icon: '🟡', category: 'Indian Sweets', calories: 370, protein: 7, carbs: 50, fat: 16, fiber: 0, nutriscore: 'd', tags: ['sweet'], serving: '2 pieces (50g)' },
    { name: 'Sandesh', icon: '🍬', category: 'Indian Sweets', calories: 280, protein: 8, carbs: 40, fat: 10, fiber: 0, nutriscore: 'c', tags: ['sweet'], serving: '2 pieces (60g)' },
    { name: 'Rabri', icon: '🍮', category: 'Indian Sweets', calories: 230, protein: 6, carbs: 28, fat: 11, fiber: 0, nutriscore: 'd', tags: ['sweet'], serving: '1 bowl (100g)' },
    { name: 'Shrikhand', icon: '🍮', category: 'Indian Sweets', calories: 220, protein: 5, carbs: 32, fat: 8, fiber: 0, nutriscore: 'c', tags: ['sweet'], serving: '1 bowl (100g)' },
    { name: 'Kulfi', icon: '🍦', category: 'Indian Sweets', calories: 190, protein: 5, carbs: 22, fat: 10, fiber: 0, nutriscore: 'c', tags: ['sweet'], serving: '1 piece (80g)' },

    // ── SNACKS ──
    { name: 'Onion Pakora / Bhajiya', icon: '🧅', category: 'Snacks', calories: 320, protein: 5, carbs: 28, fat: 22, fiber: 2, nutriscore: 'd', tags: ['deepfried'], serving: '5 pieces (100g)' },
    { name: 'Paneer Pakora', icon: '🧀', category: 'Snacks', calories: 350, protein: 12, carbs: 22, fat: 24, fiber: 1, nutriscore: 'd', tags: ['deepfried'], serving: '4 pieces (100g)' },
    { name: 'Kachori', icon: '🥟', category: 'Snacks', calories: 380, protein: 7, carbs: 38, fat: 22, fiber: 3, nutriscore: 'd', tags: ['deepfried', 'spicy'], serving: '1 piece (80g)' },
    { name: 'Dhokla', icon: '🟡', category: 'Snacks', calories: 160, protein: 6, carbs: 22, fat: 5, fiber: 2, nutriscore: 'a', tags: ['fermented'], serving: '3 pieces (100g)' },
    { name: 'Khandvi', icon: '🟡', category: 'Snacks', calories: 140, protein: 5, carbs: 18, fat: 5, fiber: 1, nutriscore: 'a', tags: [], serving: '4 pieces (80g)' },
    { name: 'Murukku / Chakli', icon: '🟡', category: 'Snacks', calories: 450, protein: 8, carbs: 58, fat: 22, fiber: 3, nutriscore: 'd', tags: ['deepfried'], serving: '5 pieces (50g)' },
    { name: 'Namkeen / Sev', icon: '🥜', category: 'Snacks', calories: 480, protein: 12, carbs: 48, fat: 28, fiber: 4, nutriscore: 'e', tags: ['deepfried', 'processed'], serving: '1 cup (50g)' },
    { name: 'Mathri', icon: '🍪', category: 'Snacks', calories: 460, protein: 8, carbs: 50, fat: 26, fiber: 2, nutriscore: 'd', tags: ['deepfried'], serving: '4 pieces (60g)' },
    { name: 'Chips (Potato)', icon: '🥔', category: 'Snacks', calories: 536, protein: 7, carbs: 53, fat: 35, fiber: 4, nutriscore: 'e', tags: ['deepfried', 'processed'] },
    { name: 'Peanuts (roasted)', icon: '🥜', category: 'Snacks', calories: 567, protein: 26, carbs: 16, fat: 49, fiber: 9, nutriscore: 'b', tags: [] },
    { name: 'Almonds', icon: '🌰', category: 'Snacks', calories: 579, protein: 21, carbs: 22, fat: 50, fiber: 13, nutriscore: 'a', tags: [] },
    { name: 'Dark Chocolate', icon: '🍫', category: 'Snacks', calories: 546, protein: 5, carbs: 60, fat: 31, fiber: 7, nutriscore: 'd', tags: ['sweet'] },
    { name: 'Biscuit (Marie)', icon: '🍪', category: 'Snacks', calories: 440, protein: 6.5, carbs: 72, fat: 14, fiber: 2, nutriscore: 'c', tags: ['processed', 'sweet'] },
    { name: 'Khakhra', icon: '🫓', category: 'Snacks', calories: 380, protein: 10, carbs: 55, fat: 14, fiber: 5, nutriscore: 'b', tags: [], serving: '2 pieces (40g)' },
    { name: 'Makhana (Fox Nuts, roasted)', icon: '⚪', category: 'Snacks', calories: 350, protein: 10, carbs: 65, fat: 1.4, fiber: 1, nutriscore: 'a', tags: [], serving: '1 cup (30g)' },
    { name: 'Chana Jor Garam', icon: '🫘', category: 'Snacks', calories: 370, protein: 22, carbs: 58, fat: 5, fiber: 10, nutriscore: 'b', tags: [], serving: '1 cup (50g)' },

    // ── BEVERAGES ──
    { name: 'Masala Chai', icon: '🍵', category: 'Beverages', calories: 45, protein: 1.5, carbs: 6, fat: 1.5, fiber: 0, nutriscore: 'b', tags: [], serving: '1 cup (200ml)' },
    { name: 'Black Tea (no sugar)', icon: '🍵', category: 'Beverages', calories: 2, protein: 0.1, carbs: 0.5, fat: 0, fiber: 0, nutriscore: 'a', tags: [], serving: '1 cup (200ml)' },
    { name: 'Filter Coffee (milk)', icon: '☕', category: 'Beverages', calories: 55, protein: 1.5, carbs: 6, fat: 2, fiber: 0, nutriscore: 'b', tags: [], serving: '1 cup (200ml)' },
    { name: 'Black Coffee', icon: '☕', category: 'Beverages', calories: 2, protein: 0.3, carbs: 0, fat: 0, fiber: 0, nutriscore: 'a', tags: [], serving: '1 cup (200ml)' },
    { name: 'Sweet Lassi', icon: '🥛', category: 'Beverages', calories: 110, protein: 3.5, carbs: 18, fat: 3, fiber: 0, nutriscore: 'c', tags: ['sweet', 'probiotic'], serving: '1 glass (200ml)' },
    { name: 'Salt Lassi / Chaas', icon: '🥛', category: 'Beverages', calories: 30, protein: 2, carbs: 3, fat: 1, fiber: 0, nutriscore: 'a', tags: ['probiotic'], serving: '1 glass (200ml)' },
    { name: 'Nimbu Pani (Lemon Water)', icon: '🍋', category: 'Beverages', calories: 35, protein: 0.2, carbs: 9, fat: 0, fiber: 0, nutriscore: 'a', tags: [], serving: '1 glass (200ml)' },
    { name: 'Thandai', icon: '🥛', category: 'Beverages', calories: 185, protein: 5, carbs: 22, fat: 9, fiber: 1, nutriscore: 'c', tags: ['sweet'], serving: '1 glass (200ml)' },
    { name: 'Badam Milk', icon: '🥛', category: 'Beverages', calories: 150, protein: 5, carbs: 18, fat: 7, fiber: 1, nutriscore: 'b', tags: ['sweet'], serving: '1 glass (200ml)' },
    { name: 'Jaljeera', icon: '🍹', category: 'Beverages', calories: 25, protein: 0.5, carbs: 6, fat: 0, fiber: 0, nutriscore: 'a', tags: ['spicy'], serving: '1 glass (200ml)' },
    { name: 'Aam Panna', icon: '🥭', category: 'Beverages', calories: 60, protein: 0.3, carbs: 15, fat: 0, fiber: 0.5, nutriscore: 'a', tags: [], serving: '1 glass (200ml)' },
    { name: 'Sugarcane Juice', icon: '🧃', category: 'Beverages', calories: 70, protein: 0.2, carbs: 18, fat: 0, fiber: 0, nutriscore: 'b', tags: ['sweet'], serving: '1 glass (200ml)' },
    { name: 'Coconut Water', icon: '🥥', category: 'Beverages', calories: 19, protein: 0.7, carbs: 3.7, fat: 0.2, fiber: 1.1, nutriscore: 'a', tags: [] },
    { name: 'Orange Juice', icon: '🧃', category: 'Beverages', calories: 45, protein: 0.7, carbs: 10, fat: 0.2, fiber: 0.2, nutriscore: 'b', tags: [] },
  ];

  // ============================================================
  // HEALTH WARNING SYSTEM
  // ============================================================
  function getFoodWarnings(food) {
    const warnings = [];
    const tags = food.tags || [];

    // ── DANGER warnings (Red) ──
    if (food.calories > 500)
      warnings.push({ severity: 'danger', icon: '🔴', msg: 'Very High Calorie — eat sparingly, can lead to weight gain' });
    if (food.fat > 30)
      warnings.push({ severity: 'danger', icon: '🔴', msg: 'Extremely High Fat — bad for heart health, avoid daily consumption' });
    if (tags.includes('deepfried'))
      warnings.push({ severity: 'danger', icon: '🔴', msg: 'Deep Fried — linked to heart disease, obesity & high cholesterol. Limit intake!' });
    if (food.carbs > 55 && tags.includes('sweet'))
      warnings.push({ severity: 'danger', icon: '🔴', msg: 'Very High Sugar — NOT safe for diabetics, can spike blood sugar rapidly' });

    // ── WARNING (Yellow) ──
    if (food.calories > 300 && food.calories <= 500)
      warnings.push({ severity: 'warning', icon: '🟡', msg: 'High Calorie — practice portion control' });
    if (food.fat > 15 && food.fat <= 30)
      warnings.push({ severity: 'warning', icon: '🟡', msg: 'High Fat content — moderate your intake' });
    if (food.carbs > 40 && food.carbs <= 55)
      warnings.push({ severity: 'warning', icon: '🟡', msg: 'High Carbs — diabetics should limit portion size' });
    if (tags.includes('sweet') && !warnings.find(w => w.msg.includes('Sugar')))
      warnings.push({ severity: 'warning', icon: '🟡', msg: 'Contains sugar — not ideal for diabetics, consume in moderation' });
    if (tags.includes('processed'))
      warnings.push({ severity: 'warning', icon: '🟡', msg: 'Processed food — contains preservatives, avoid regular consumption' });
    if (tags.includes('spicy'))
      warnings.push({ severity: 'info', icon: '🌶️', msg: 'Spicy — may cause acidity. Avoid if you have gastric issues' });

    // ── POSITIVE (Green) ──
    if (food.protein >= 15)
      warnings.push({ severity: 'good', icon: '💪', msg: 'Excellent protein source — great for muscle building' });
    if (food.fiber >= 5)
      warnings.push({ severity: 'good', icon: '🟢', msg: 'High in fiber — aids digestion and keeps you full longer' });
    if (food.calories <= 80 && food.fiber >= 1)
      warnings.push({ severity: 'good', icon: '✅', msg: 'Low calorie & nutritious — safe for weight loss' });
    if (tags.includes('probiotic'))
      warnings.push({ severity: 'good', icon: '🦠', msg: 'Probiotic — great for gut health and immunity' });
    if (tags.includes('fermented') && !tags.includes('deepfried'))
      warnings.push({ severity: 'good', icon: '🟢', msg: 'Fermented — easier to digest, good for gut health' });
    if (food.nutriscore === 'a' && food.calories < 100)
      warnings.push({ severity: 'good', icon: '🌟', msg: 'Excellent food choice — highly nutritious, safe for daily consumption' });

    return warnings;
  }

  function getOverallSafety(food) {
    const tags = food.tags || [];

    if (food.calories > 500 || food.fat > 35 || (tags.includes('deepfried') && food.calories > 300))
      return { level: 'danger', label: '⚠️ Eat Sparingly', cls: 'danger' };

    if (tags.includes('deepfried') || food.calories > 350 || food.fat > 20 || (tags.includes('sweet') && food.carbs > 45))
      return { level: 'caution', label: '🟡 Eat in Moderation', cls: 'moderate' };

    if (food.nutriscore === 'a' || (food.calories < 150 && food.fat < 8))
      return { level: 'safe', label: '✅ Safe & Healthy', cls: 'safe' };

    return { level: 'ok', label: '🟢 Generally Safe', cls: 'safe' };
  }

  // ============================================================
  // WATER INTAKE WARNING SYSTEM
  // ============================================================
  function getWaterWarning(currentMl, targetMl) {
    const hour = new Date().getHours();
    if (hour < 7) return null; // too early

    // Expected % intake by hour of day
    const expected = { 7: 5, 8: 10, 9: 15, 10: 25, 11: 30, 12: 40, 13: 45, 14: 55, 15: 60, 16: 65, 17: 70, 18: 75, 19: 80, 20: 85, 21: 90, 22: 95 };
    let expectedPct = 0;
    for (const [h, p] of Object.entries(expected)) {
      if (hour >= parseInt(h)) expectedPct = p;
    }

    const currentPct = (currentMl / targetMl) * 100;
    const expectedMl = Math.round((expectedPct / 100) * targetMl);

    if (currentPct >= expectedPct) {
      return { severity: 'good', icon: '✅', msg: `Great job! You're on track with your water intake.`, expectedMl };
    }

    const deficit = expectedMl - currentMl;

    if (currentPct < expectedPct * 0.4) {
      return {
        severity: 'danger', icon: '🚨',
        msg: `CRITICALLY LOW! You should have had ~${expectedMl}ml by now. You're ${deficit}ml behind! Dehydration can cause headaches, fatigue & kidney issues. Drink water NOW!`,
        expectedMl,
      };
    }

    if (currentPct < expectedPct * 0.7) {
      return {
        severity: 'warning', icon: '⚠️',
        msg: `You're behind on water intake! Expected ~${expectedMl}ml by now. Drink ${deficit}ml soon to avoid dehydration.`,
        expectedMl,
      };
    }

    return {
      severity: 'info', icon: '💧',
      msg: `Slightly behind — try to drink ${deficit}ml more. Stay hydrated for better focus and energy.`,
      expectedMl,
    };
  }

  // ============================================================
  // APP STATE
  // ============================================================
  const DEFAULT_STATE = {
    profile: {
      name: '', age: 25, gender: 'male',
      weight: 70, height: 170, activity: 1.55, goal: 'maintain',
    },
    targets: { calories: 2000, protein: 60, carbs: 250, fat: 65, water: 2500 },
    meals: { breakfast: [], lunch: [], dinner: [], snacks: [] },
    hydration: { current: 0, log: [] },
    weeklyCalories: [0, 0, 0, 0, 0, 0, 0],
    streak: 0,
    lastLogDate: null,
  };

  let state = loadState();

  function loadState() {
    try {
      const saved = localStorage.getItem('nutrilife_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...DEFAULT_STATE, ...parsed, profile: { ...DEFAULT_STATE.profile, ...parsed.profile }, targets: { ...DEFAULT_STATE.targets, ...parsed.targets }, meals: { ...DEFAULT_STATE.meals, ...parsed.meals }, hydration: { ...DEFAULT_STATE.hydration, ...parsed.hydration } };
      }
    } catch (e) { console.warn('Failed to load state:', e); }
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }

  function saveState() {
    try { localStorage.setItem('nutrilife_state', JSON.stringify(state)); }
    catch (e) { console.warn('Failed to save state:', e); }
  }

  function checkDayReset() {
    const today = new Date().toDateString();
    if (state.lastLogDate && state.lastLogDate !== today) {
      const yesterday = new Date(state.lastLogDate);
      const dayIndex = yesterday.getDay();
      const totalCals = getTotalCalories();
      state.weeklyCalories[dayIndex] = totalCals;
      if (totalCals > 0) { state.streak++; } else { state.streak = 0; }
      state.meals = { breakfast: [], lunch: [], dinner: [], snacks: [] };
      state.hydration = { current: 0, log: [] };
    }
    state.lastLogDate = today;
    saveState();
  }

  // ============================================================
  // DOM ELEMENTS
  // ============================================================
  const el = {
    sidebarNav: document.getElementById('sidebar-nav'),
    mobileNav: document.getElementById('mobile-nav'),
    sections: document.querySelectorAll('.section'),

    timeGreeting: document.getElementById('time-greeting'),
    todayDate: document.getElementById('today-date'),
    healthScore: document.getElementById('health-score'),
    ringCalories: document.getElementById('ring-calories'),
    ringProtein: document.getElementById('ring-protein'),
    ringCarbs: document.getElementById('ring-carbs'),
    ringFat: document.getElementById('ring-fat'),
    ringCalText: document.getElementById('ring-calories-text'),
    ringProText: document.getElementById('ring-protein-text'),
    ringCarbText: document.getElementById('ring-carbs-text'),
    ringFatText: document.getElementById('ring-fat-text'),
    calConsumed: document.getElementById('cal-consumed'),
    proConsumed: document.getElementById('pro-consumed'),
    carbConsumed: document.getElementById('carb-consumed'),
    fatConsumed: document.getElementById('fat-consumed'),
    calTarget: document.getElementById('cal-target'),
    proTarget: document.getElementById('pro-target'),
    carbTarget: document.getElementById('carb-target'),
    fatTarget: document.getElementById('fat-target'),
    mealsCount: document.getElementById('meals-count'),
    waterSummary: document.getElementById('water-summary'),
    streakCount: document.getElementById('streak-count'),

    foodSearch: document.getElementById('food-search'),
    searchLoading: document.getElementById('search-loading'),
    foodResults: document.getElementById('food-results'),

    mealTabs: document.getElementById('meal-tabs'),
    mealContent: document.getElementById('meal-content'),
    mealEmpty: document.getElementById('meal-empty'),
    mealItems: document.getElementById('meal-items'),
    mealTotal: document.getElementById('meal-total'),

    profileName: document.getElementById('profile-name'),
    profileAge: document.getElementById('profile-age'),
    profileGender: document.getElementById('profile-gender'),
    profileWeight: document.getElementById('profile-weight'),
    profileHeight: document.getElementById('profile-height'),
    profileActivity: document.getElementById('profile-activity'),
    profileGoal: document.getElementById('profile-goal'),
    saveProfile: document.getElementById('save-profile'),
    bmiValue: document.getElementById('bmi-value'),
    bmiCategory: document.getElementById('bmi-category'),
    targetCal: document.getElementById('target-cal'),
    targetPro: document.getElementById('target-pro'),
    targetCarb: document.getElementById('target-carb'),
    targetFat: document.getElementById('target-fat'),
    targetWater: document.getElementById('target-water'),

    suggestionsGrid: document.getElementById('suggestions-grid'),

    waterFill: document.getElementById('water-fill'),
    waterPercent: document.getElementById('water-percent'),
    waterCurrent: document.getElementById('water-current'),
    waterGoal: document.getElementById('water-goal'),
    waterReset: document.getElementById('water-reset'),
    waterLogItems: document.getElementById('water-log-items'),

    weeklyChart: document.getElementById('weekly-chart'),
    insightAvg: document.getElementById('insight-avg'),
    insightBest: document.getElementById('insight-best'),
    insightStreak: document.getElementById('insight-streak'),
    insightOntrack: document.getElementById('insight-ontrack'),

    toast: document.getElementById('toast'),
  };

  // ============================================================
  // NAVIGATION
  // ============================================================
  let activeSection = 'dashboard';
  let activeMealTab = 'breakfast';

  function navigateTo(sectionId) {
    activeSection = sectionId;
    el.sections.forEach(s => s.classList.remove('active'));
    const target = document.getElementById(sectionId);
    if (target) target.classList.add('active');

    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.section === sectionId);
    });
    document.querySelectorAll('.mobile-nav__item').forEach(item => {
      item.classList.toggle('active', item.dataset.section === sectionId);
    });

    if (sectionId === 'dashboard') refreshDashboard();
    if (sectionId === 'tracker') renderMealTab();
    if (sectionId === 'suggestions') renderSuggestions();
    if (sectionId === 'hydration') updateHydrationUI();
    if (sectionId === 'insights') renderInsights();
    if (sectionId === 'profile') loadProfileForm();
  }

  el.sidebarNav.addEventListener('click', (e) => {
    const item = e.target.closest('.nav-item');
    if (item) { e.preventDefault(); navigateTo(item.dataset.section); }
  });

  el.mobileNav.addEventListener('click', (e) => {
    const item = e.target.closest('.mobile-nav__item');
    if (item) navigateTo(item.dataset.section);
  });

  // ============================================================
  // TOAST NOTIFICATIONS
  // ============================================================
  let toastTimeout;
  function showToast(message, isError = false) {
    clearTimeout(toastTimeout);
    el.toast.textContent = message;
    el.toast.className = 'toast' + (isError ? ' error' : '');
    requestAnimationFrame(() => el.toast.classList.add('visible'));
    toastTimeout = setTimeout(() => el.toast.classList.remove('visible'), 2800);
  }

  // ============================================================
  // DASHBOARD
  // ============================================================
  function refreshDashboard() {
    const h = new Date().getHours();
    el.timeGreeting.textContent = h < 12 ? 'Morning' : h < 17 ? 'Afternoon' : 'Evening';
    el.todayDate.textContent = new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' });

    const totals = getDailyTotals();
    const t = state.targets;

    el.calConsumed.textContent = Math.round(totals.calories);
    el.proConsumed.textContent = Math.round(totals.protein) + 'g';
    el.carbConsumed.textContent = Math.round(totals.carbs) + 'g';
    el.fatConsumed.textContent = Math.round(totals.fat) + 'g';
    el.calTarget.textContent = t.calories;
    el.proTarget.textContent = t.protein;
    el.carbTarget.textContent = t.carbs;
    el.fatTarget.textContent = t.fat;

    const circumference = 2 * Math.PI * 50;
    updateRing(el.ringCalories, el.ringCalText, totals.calories, t.calories, circumference);
    updateRing(el.ringProtein, el.ringProText, totals.protein, t.protein, circumference);
    updateRing(el.ringCarbs, el.ringCarbText, totals.carbs, t.carbs, circumference);
    updateRing(el.ringFat, el.ringFatText, totals.fat, t.fat, circumference);

    const totalMeals = Object.values(state.meals).reduce((sum, arr) => sum + arr.length, 0);
    el.mealsCount.textContent = totalMeals + ' Meal' + (totalMeals !== 1 ? 's' : '');

    // Water summary with warning indicator
    const waterWarn = getWaterWarning(state.hydration.current, state.targets.water);
    let waterText = state.hydration.current + ' ml';
    if (waterWarn && waterWarn.severity === 'danger') waterText += ' ⚠️';
    else if (waterWarn && waterWarn.severity === 'warning') waterText += ' 💧';
    el.waterSummary.textContent = waterText;

    el.streakCount.textContent = state.streak + ' Day' + (state.streak !== 1 ? 's' : '');
    updateHealthScore();
  }

  function updateRing(ringEl, textEl, current, target, circumference) {
    const pct = Math.min(current / target, 1);
    const offset = circumference * (1 - pct);
    ringEl.style.strokeDashoffset = offset;
    textEl.textContent = Math.round(current);
  }

  function getDailyTotals() {
    let calories = 0, protein = 0, carbs = 0, fat = 0;
    Object.values(state.meals).forEach(mealArr => {
      mealArr.forEach(item => {
        calories += item.calories || 0;
        protein += item.protein || 0;
        carbs += item.carbs || 0;
        fat += item.fat || 0;
      });
    });
    return { calories, protein, carbs, fat };
  }

  function getTotalCalories() { return getDailyTotals().calories; }

  function updateHealthScore() {
    const totals = getDailyTotals();
    const t = state.targets;
    let score = 50;
    const calRatio = t.calories > 0 ? totals.calories / t.calories : 0;
    if (calRatio >= 0.8 && calRatio <= 1.2) score += 15;
    else if (calRatio > 0 && calRatio < 0.8) score += 5;
    if (totals.protein >= t.protein * 0.8) score += 10;
    const waterRatio = state.hydration.current / t.water;
    if (waterRatio >= 0.8) score += 15;
    else score += Math.round(waterRatio * 15);
    score += Math.min(state.streak * 2, 10);
    score = Math.min(Math.max(score, 0), 100);
    el.healthScore.textContent = score;
  }

  // ============================================================
  // FOOD SCANNER — with health warnings
  // ============================================================
  let searchTimeout;

  el.foodSearch.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    const query = el.foodSearch.value.trim();
    if (query.length < 2) {
      el.foodResults.innerHTML = '';
      el.searchLoading.classList.remove('visible');
      return;
    }
    el.searchLoading.classList.add('visible');
    searchTimeout = setTimeout(() => searchFoods(query), 400);
  });

  async function searchFoods(query) {
    const localResults = FOOD_DB.filter(f =>
      f.name.toLowerCase().includes(query.toLowerCase()) ||
      f.category.toLowerCase().includes(query.toLowerCase())
    );

    let apiResults = [];
    try {
      const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1&page_size=8`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.products) {
        apiResults = data.products
          .filter(p => p.product_name && p.nutriments)
          .slice(0, 8)
          .map(p => ({
            name: p.product_name.substring(0, 50),
            brand: p.brands || '',
            icon: '📦',
            category: 'API',
            calories: Math.round(p.nutriments['energy-kcal_100g'] || p.nutriments['energy-kcal'] || 0),
            protein: +(p.nutriments.proteins_100g || 0).toFixed(1),
            carbs: +(p.nutriments.carbohydrates_100g || 0).toFixed(1),
            fat: +(p.nutriments.fat_100g || 0).toFixed(1),
            fiber: +(p.nutriments.fiber_100g || 0).toFixed(1),
            nutriscore: (p.nutriscore_grade || 'unknown').toLowerCase(),
            tags: [],
          }));
      }
    } catch (err) {
      console.warn('API search failed:', err);
    }

    const combined = [...localResults, ...apiResults];
    const seen = new Set();
    const unique = combined.filter(f => {
      const key = f.name.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    el.searchLoading.classList.remove('visible');
    renderFoodResults(unique.slice(0, 12));
  }

  function renderFoodResults(foods) {
    if (foods.length === 0) {
      el.foodResults.innerHTML = '<div class="logged-empty"><div class="logged-empty__icon">🔍</div><p>No foods found. Try a different search term.</p></div>';
      return;
    }

    el.foodResults.innerHTML = foods.map((food, i) => {
      const safety = getOverallSafety(food);
      const warnings = getFoodWarnings(food);
      const dangerWarnings = warnings.filter(w => w.severity === 'danger');
      const warnWarnings = warnings.filter(w => w.severity === 'warning' || w.severity === 'info');
      const goodWarnings = warnings.filter(w => w.severity === 'good');

      return `
      <div class="food-card" style="animation-delay: ${i * 0.06}s">
        <div class="food-card__header">
          <div>
            <div class="food-card__name">${food.icon} ${food.name}</div>
            ${food.brand ? `<div class="food-card__brand">${food.brand}</div>` : ''}
          </div>
          <div class="nutri-badge ${food.nutriscore || 'unknown'}">${(food.nutriscore || '?').toUpperCase()}</div>
        </div>

        <div class="safety-badge ${safety.cls}">${safety.label}</div>

        <div class="food-card__calories">${food.calories}</div>
        <div class="food-card__serving">kcal per ${food.serving || '100g'}</div>
        <div class="food-card__macros">
          <div class="macro-pill protein">
            <span class="macro-pill__value">${food.protein}g</span> Protein
          </div>
          <div class="macro-pill carbs">
            <span class="macro-pill__value">${food.carbs}g</span> Carbs
          </div>
          <div class="macro-pill fat">
            <span class="macro-pill__value">${food.fat}g</span> Fat
          </div>
        </div>

        ${(dangerWarnings.length > 0 || warnWarnings.length > 0 || goodWarnings.length > 0) ? `
        <div class="food-card__warnings">
          ${dangerWarnings.map(w => `<div class="warning-msg danger">${w.icon} ${w.msg}</div>`).join('')}
          ${warnWarnings.map(w => `<div class="warning-msg warning">${w.icon} ${w.msg}</div>`).join('')}
          ${goodWarnings.map(w => `<div class="warning-msg good">${w.icon} ${w.msg}</div>`).join('')}
        </div>` : ''}

        <select class="meal-select" id="meal-select-${i}">
          <option value="breakfast">🌅 Breakfast</option>
          <option value="lunch">☀️ Lunch</option>
          <option value="dinner">🌙 Dinner</option>
          <option value="snacks">🍿 Snacks</option>
        </select>
        <button class="food-card__add-btn" onclick="window.__addFood(${i}, '${food.name.replace(/'/g, "\\'")}')">+ Add to Meal</button>
      </div>`;
    }).join('');

    window.__lastSearchResults = foods;
  }

  window.__addFood = function(index, name) {
    const food = window.__lastSearchResults[index];
    if (!food) return;
    const selectEl = document.getElementById(`meal-select-${index}`);
    const mealType = selectEl ? selectEl.value : 'breakfast';

    state.meals[mealType].push({
      id: Date.now() + Math.random(),
      name: food.name, icon: food.icon,
      calories: food.calories, protein: food.protein,
      carbs: food.carbs, fat: food.fat,
    });
    saveState();
    showToast(`✅ ${food.name} added to ${mealType}`);
    refreshDashboard();
  };

  // ============================================================
  // MEAL TRACKER
  // ============================================================
  el.mealTabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.tracker__tab');
    if (!tab) return;
    activeMealTab = tab.dataset.meal;
    document.querySelectorAll('.tracker__tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderMealTab();
  });

  function renderMealTab() {
    const items = state.meals[activeMealTab] || [];
    if (items.length === 0) {
      el.mealEmpty.style.display = 'block';
      el.mealItems.innerHTML = '';
      el.mealTotal.textContent = '0 kcal';
      return;
    }
    el.mealEmpty.style.display = 'none';
    let totalCal = 0;
    el.mealItems.innerHTML = items.map((item, i) => {
      totalCal += item.calories;
      return `
        <div class="logged-item">
          <div class="logged-item__info">
            <div class="logged-item__name">${item.icon || '🍽️'} ${item.name}</div>
            <div class="logged-item__meta">P: ${item.protein}g · C: ${item.carbs}g · F: ${item.fat}g</div>
          </div>
          <div class="logged-item__cal">${item.calories} kcal</div>
          <button class="logged-item__remove" onclick="window.__removeFood('${activeMealTab}', ${i})" title="Remove">✕</button>
        </div>`;
    }).join('');
    el.mealTotal.textContent = totalCal + ' kcal';
  }

  window.__removeFood = function(mealType, index) {
    const removed = state.meals[mealType].splice(index, 1);
    saveState(); renderMealTab(); refreshDashboard();
    if (removed[0]) showToast(`🗑️ ${removed[0].name} removed`);
  };

  // ============================================================
  // HEALTH PROFILE
  // ============================================================
  function loadProfileForm() {
    const p = state.profile;
    el.profileName.value = p.name || '';
    el.profileAge.value = p.age || '';
    el.profileGender.value = p.gender || 'male';
    el.profileWeight.value = p.weight || '';
    el.profileHeight.value = p.height || '';
    el.profileActivity.value = p.activity || 1.55;
    el.profileGoal.value = p.goal || 'maintain';
    updateProfileStats();
  }

  el.saveProfile.addEventListener('click', () => {
    state.profile = {
      name: el.profileName.value.trim(),
      age: parseInt(el.profileAge.value) || 25,
      gender: el.profileGender.value,
      weight: parseFloat(el.profileWeight.value) || 70,
      height: parseFloat(el.profileHeight.value) || 170,
      activity: parseFloat(el.profileActivity.value) || 1.55,
      goal: el.profileGoal.value,
    };
    calculateTargets();
    saveState(); updateProfileStats(); refreshDashboard();
    showToast('✅ Profile saved! Targets updated.');
  });

  function calculateTargets() {
    const p = state.profile;
    let bmr;
    if (p.gender === 'female') { bmr = 10 * p.weight + 6.25 * p.height - 5 * p.age - 161; }
    else { bmr = 10 * p.weight + 6.25 * p.height - 5 * p.age + 5; }
    let tdee = bmr * p.activity;
    if (p.goal === 'lose') tdee -= 400;
    if (p.goal === 'gain') tdee += 400;
    const calories = Math.round(tdee);
    const protein = Math.round(p.weight * 0.8);
    const fat = Math.round((calories * 0.25) / 9);
    const carbs = Math.round((calories - (protein * 4) - (fat * 9)) / 4);
    const water = Math.round(p.weight * 35);
    state.targets = { calories, protein, carbs, fat, water };
  }

  function updateProfileStats() {
    const p = state.profile;
    const t = state.targets;
    if (p.height > 0 && p.weight > 0) {
      const heightM = p.height / 100;
      const bmi = p.weight / (heightM * heightM);
      el.bmiValue.textContent = bmi.toFixed(1);
      let cat = 'Normal', cls = 'normal';
      if (bmi < 18.5) { cat = 'Underweight'; cls = 'underweight'; }
      else if (bmi < 25) { cat = 'Normal'; cls = 'normal'; }
      else if (bmi < 30) { cat = 'Overweight'; cls = 'overweight'; }
      else { cat = 'Obese'; cls = 'obese'; }
      el.bmiCategory.textContent = cat;
      el.bmiCategory.className = 'bmi-card__category ' + cls;
    }
    el.targetCal.textContent = t.calories + ' kcal';
    el.targetPro.textContent = t.protein + 'g';
    el.targetCarb.textContent = t.carbs + 'g';
    el.targetFat.textContent = t.fat + 'g';
    el.targetWater.textContent = t.water + ' ml';
  }

  // ============================================================
  // SMART SUGGESTIONS
  // ============================================================
  function renderSuggestions() {
    const totals = getDailyTotals();
    const t = state.targets;
    const remaining = {
      calories: Math.max(0, t.calories - totals.calories),
      protein: Math.max(0, t.protein - totals.protein),
      carbs: Math.max(0, t.carbs - totals.carbs),
      fat: Math.max(0, t.fat - totals.fat),
    };

    const hour = new Date().getHours();
    let timeContext = 'snack';
    if (hour < 10) timeContext = 'breakfast';
    else if (hour < 14) timeContext = 'lunch';
    else if (hour < 18) timeContext = 'snack';
    else timeContext = 'dinner';

    const suggestions = [];

    // High protein suggestions if needed
    if (remaining.protein > 15) {
      const protFoods = FOOD_DB.filter(f => f.protein >= 8 && !(f.tags || []).includes('deepfried')).sort((a, b) => b.protein - a.protein);
      if (protFoods[0]) suggestions.push({ ...protFoods[0], reason: `You need ${Math.round(remaining.protein)}g more protein today` });
      if (protFoods[1]) suggestions.push({ ...protFoods[1], reason: 'Great source of lean protein' });
    }

    // Low calorie suggestions if over budget
    if (remaining.calories < 300 && remaining.calories > 0) {
      const lowCal = FOOD_DB.filter(f => f.calories < 80 && !(f.tags || []).includes('deepfried')).sort((a, b) => a.calories - b.calories);
      if (lowCal[0]) suggestions.push({ ...lowCal[0], reason: `Only ${Math.round(remaining.calories)} kcal remaining — go light!` });
    }

    // High fiber (only suggest safe foods)
    if (totals.calories > 0) {
      const fiberFoods = FOOD_DB.filter(f => f.fiber >= 3 && !(f.tags || []).includes('deepfried')).sort((a, b) => b.fiber - a.fiber);
      if (fiberFoods[0] && !suggestions.find(s => s.name === fiberFoods[0].name)) {
        suggestions.push({ ...fiberFoods[0], reason: 'Rich in fiber for better digestion' });
      }
    }

    // Time-based suggestions (healthy options only)
    const timeFoods = {
      breakfast: ['Oats', 'Idli', 'Egg (boiled)', 'Banana', 'Moong Dal Chilla', 'Besan Chilla', 'Poha (Flattened Rice)', 'Appam', 'Upma'],
      lunch: ['Brown Rice (cooked)', 'Dal (Toor / Arhar)', 'Chicken Breast (grilled)', 'Curd / Dahi (plain)', 'Rajma (Kidney Bean Curry)', 'Khichdi', 'Fish Curry', 'Mix Veg Curry'],
      snack: ['Apple', 'Almonds', 'Coconut Water', 'Makhana (Fox Nuts, roasted)', 'Sprouts (Moong)', 'Dhokla', 'Salt Lassi / Chaas', 'Guava'],
      dinner: ['Wheat Roti / Chapati', 'Palak Paneer', 'Fish (Rohu)', 'Dal Fry', 'Tandoori Chicken', 'Curd Rice (Thayir Sadam)', 'Moong Dal'],
    };

    const timeNames = timeFoods[timeContext] || [];
    timeNames.forEach(name => {
      const food = FOOD_DB.find(f => f.name === name);
      if (food && !suggestions.find(s => s.name === food.name) && food.calories <= remaining.calories) {
        const safety = getOverallSafety(food);
        suggestions.push({ ...food, reason: `${safety.label} · Perfect for ${timeContext}` });
      }
    });

    // Fill remaining slots with safe foods
    if (suggestions.length < 6) {
      const safeFoods = [...FOOD_DB].filter(f => {
        const s = getOverallSafety(f);
        return (s.level === 'safe' || s.level === 'ok') && !(f.tags || []).includes('deepfried');
      }).sort(() => Math.random() - 0.5);
      for (const food of safeFoods) {
        if (suggestions.length >= 8) break;
        if (suggestions.find(s => s.name === food.name)) continue;
        if (food.calories <= remaining.calories || remaining.calories === 0) {
          suggestions.push({ ...food, reason: '✅ Healthy choice for a balanced diet' });
        }
      }
    }

    el.suggestionsGrid.innerHTML = suggestions.slice(0, 8).map((food, i) => {
      const safety = getOverallSafety(food);
      return `
      <div class="suggestion-card" style="animation-delay: ${i * 0.06}s">
        <div class="suggestion-card__icon">${food.icon}</div>
        <div class="suggestion-card__name">${food.name}</div>
        <div class="safety-badge ${safety.cls}" style="margin-bottom:8px;font-size:0.72rem;">${safety.label}</div>
        <div class="suggestion-card__reason">💡 ${food.reason}</div>
        <div class="suggestion-card__macros">
          ${food.calories} kcal · P: ${food.protein}g · C: ${food.carbs}g · F: ${food.fat}g
        </div>
        <button class="suggestion-card__add-btn" onclick="window.__addSuggestion(${i})">+ Quick Add</button>
      </div>`;
    }).join('');

    window.__lastSuggestions = suggestions.slice(0, 8);
  }

  window.__addSuggestion = function(index) {
    const food = window.__lastSuggestions?.[index];
    if (!food) return;
    const hour = new Date().getHours();
    let mealType = 'snacks';
    if (hour < 10) mealType = 'breakfast';
    else if (hour < 14) mealType = 'lunch';
    else if (hour < 18) mealType = 'snacks';
    else mealType = 'dinner';

    state.meals[mealType].push({
      id: Date.now() + Math.random(),
      name: food.name, icon: food.icon,
      calories: food.calories, protein: food.protein,
      carbs: food.carbs, fat: food.fat,
    });
    saveState();
    showToast(`✅ ${food.name} added to ${mealType}`);
    renderSuggestions(); refreshDashboard();
  };

  // ============================================================
  // HYDRATION TRACKER — with warnings
  // ============================================================
  document.querySelectorAll('.hydration__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const amount = parseInt(btn.dataset.amount);
      state.hydration.current += amount;
      state.hydration.log.push({
        amount,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      });
      saveState(); updateHydrationUI(); refreshDashboard();
      showToast(`💧 +${amount}ml water logged`);
    });
  });

  el.waterReset.addEventListener('click', () => {
    state.hydration = { current: 0, log: [] };
    saveState(); updateHydrationUI(); refreshDashboard();
    showToast('💧 Water intake reset');
  });

  function updateHydrationUI() {
    const target = state.targets.water;
    const current = state.hydration.current;
    const pct = Math.min((current / target) * 100, 100);

    el.waterFill.style.height = pct + '%';
    el.waterPercent.textContent = Math.round(pct) + '%';
    el.waterCurrent.textContent = current;
    el.waterGoal.textContent = target;

    // Render log
    el.waterLogItems.innerHTML = state.hydration.log.map(l =>
      `<span class="hydration__log-item">${l.time} — ${l.amount}ml</span>`
    ).join('');

    // ── WATER WARNING BANNER ──
    const existingWarning = document.getElementById('water-warning-banner');
    if (existingWarning) existingWarning.remove();

    const warning = getWaterWarning(current, target);
    if (warning) {
      const banner = document.createElement('div');
      banner.id = 'water-warning-banner';
      banner.className = `water-warning-banner ${warning.severity}`;
      banner.innerHTML = `
        <div class="water-warning-banner__icon">${warning.icon}</div>
        <div class="water-warning-banner__text">
          <strong>${warning.severity === 'danger' ? 'DEHYDRATION WARNING' : warning.severity === 'warning' ? 'Low Water Intake' : warning.severity === 'good' ? 'Well Hydrated!' : 'Reminder'}</strong>
          <p>${warning.msg}</p>
          ${warning.severity !== 'good' ? `<p class="water-tip">💡 <strong>Tip:</strong> Keep a water bottle nearby. Set hourly reminders. Aim for ${Math.round(target / 8)}ml every hour during waking hours.</p>` : ''}
        </div>
      `;

      // Insert after the glass card
      const hydrationSection = document.getElementById('hydration');
      const glassCard = hydrationSection.querySelector('.glass-card');
      if (glassCard) glassCard.insertAdjacentElement('afterend', banner);
    }
  }

  // ============================================================
  // WEEKLY INSIGHTS
  // ============================================================
  function renderInsights() {
    const todayIndex = new Date().getDay();
    state.weeklyCalories[todayIndex] = getTotalCalories();

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const target = state.targets.calories;
    const maxCal = Math.max(...state.weeklyCalories, target) || target;
    const goalPct = (target / maxCal) * 100;

    el.weeklyChart.innerHTML = state.weeklyCalories.map((cal, i) => {
      const heightPct = maxCal > 0 ? (cal / maxCal) * 100 : 0;
      const isToday = i === todayIndex;
      return `
        <div class="bar-chart__bar" style="height: 100%;">
          <div class="bar-chart__bar-fill" style="height: ${heightPct}%; background: ${isToday ? 'var(--accent-gradient)' : 'linear-gradient(to top, rgba(16,185,129,0.3), rgba(16,185,129,0.7))'};"></div>
          ${cal > 0 ? `<div class="bar-chart__value">${Math.round(cal)}</div>` : ''}
          <div class="bar-chart__label">${days[i]}${isToday ? ' ★' : ''}</div>
        </div>`;
    }).join('') + `<div class="bar-chart__goal-line" style="bottom: ${goalPct}%;"><span class="bar-chart__goal-label">Goal: ${target}</span></div>`;

    const nonZeroDays = state.weeklyCalories.filter(c => c > 0);
    const avg = nonZeroDays.length > 0 ? nonZeroDays.reduce((a, b) => a + b, 0) / nonZeroDays.length : 0;
    el.insightAvg.textContent = Math.round(avg) + ' kcal';

    const bestDayCal = Math.min(...nonZeroDays.filter(c => c > 0).map(c => Math.abs(c - target)));
    const bestDayIdx = state.weeklyCalories.findIndex(c => Math.abs(c - target) === bestDayCal && c > 0);
    el.insightBest.textContent = bestDayIdx >= 0 ? days[bestDayIdx] : '—';
    el.insightStreak.textContent = state.streak;
    const onTrack = state.weeklyCalories.filter(c => c > 0 && c >= target * 0.8 && c <= target * 1.2).length;
    el.insightOntrack.textContent = onTrack + '/7';
  }

  // ============================================================
  // BOOT
  // ============================================================
  function boot() {
    checkDayReset();
    loadProfileForm();
    refreshDashboard();
    updateHydrationUI();

    // Periodic water warning check (every 30 min)
    setInterval(() => {
      if (activeSection === 'hydration') updateHydrationUI();
      if (activeSection === 'dashboard') refreshDashboard();
    }, 30 * 60 * 1000);
  }

  boot();

})();
