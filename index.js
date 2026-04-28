// ======================== COMPLETE DATABASE (197 Countries) ========================
const allCountries = [
  { country: "Afghanistan", capital: "Kabul" }, { country: "Albania", capital: "Tirana" }, { country: "Algeria", capital: "Algiers" },
  { country: "Andorra", capital: "Andorra la Vella" }, { country: "Angola", capital: "Luanda" }, { country: "Antigua and Barbuda", capital: "St. John's" },
  { country: "Argentina", capital: "Buenos Aires" }, { country: "Armenia", capital: "Yerevan" }, { country: "Australia", capital: "Canberra" },
  { country: "Austria", capital: "Vienna" }, { country: "Azerbaijan", capital: "Baku" }, { country: "Bahamas", capital: "Nassau" },
  { country: "Bahrain", capital: "Manama" }, { country: "Bangladesh", capital: "Dhaka" }, { country: "Barbados", capital: "Bridgetown" },
  { country: "Belarus", capital: "Minsk" }, { country: "Belgium", capital: "Brussels" }, { country: "Belize", capital: "Belmopan" },
  { country: "Benin", capital: "Porto-Novo" }, { country: "Bhutan", capital: "Thimphu" }, { country: "Bolivia", capital: "La Paz" },
  { country: "Bosnia and Herzegovina", capital: "Sarajevo" }, { country: "Botswana", capital: "Gaborone" }, { country: "Brazil", capital: "Brasília" },
  { country: "Brunei", capital: "Bandar Seri Begawan" }, { country: "Bulgaria", capital: "Sofia" }, { country: "Burkina Faso", capital: "Ouagadougou" },
  { country: "Burundi", capital: "Gitega" }, { country: "Cabo Verde", capital: "Praia" }, { country: "Cambodia", capital: "Phnom Penh" },
  { country: "Cameroon", capital: "Yaoundé" }, { country: "Canada", capital: "Ottawa" }, { country: "Central African Republic", capital: "Bangui" },
  { country: "Chad", capital: "N'Djamena" }, { country: "Chile", capital: "Santiago" }, { country: "China", capital: "Beijing" },
  { country: "Colombia", capital: "Bogotá" }, { country: "Comoros", capital: "Moroni" }, { country: "Congo", capital: "Brazzaville" },
  { country: "Costa Rica", capital: "San José" }, { country: "Côte d'Ivoire", capital: "Yamoussoukro" }, { country: "Croatia", capital: "Zagreb" },
  { country: "Cuba", capital: "Havana" }, { country: "Cyprus", capital: "Nicosia" }, { country: "Czech Republic", capital: "Prague" },
  { country: "Denmark", capital: "Copenhagen" }, { country: "Djibouti", capital: "Djibouti" }, { country: "Dominica", capital: "Roseau" },
  { country: "Dominican Republic", capital: "Santo Domingo" }, { country: "Ecuador", capital: "Quito" }, { country: "Egypt", capital: "Cairo" },
  { country: "El Salvador", capital: "San Salvador" }, { country: "Equatorial Guinea", capital: "Malabo" }, { country: "Eritrea", capital: "Asmara" },
  { country: "Estonia", capital: "Tallinn" }, { country: "Eswatini", capital: "Mbabane" }, { country: "Ethiopia", capital: "Addis Ababa" },
  { country: "Fiji", capital: "Suva" }, { country: "Finland", capital: "Helsinki" }, { country: "France", capital: "Paris" },
  { country: "Gabon", capital: "Libreville" }, { country: "Gambia", capital: "Banjul" }, { country: "Georgia", capital: "Tbilisi" },
  { country: "Germany", capital: "Berlin" }, { country: "Ghana", capital: "Accra" }, { country: "Greece", capital: "Athens" },
  { country: "Grenada", capital: "St. George's" }, { country: "Guatemala", capital: "Guatemala City" }, { country: "Guinea", capital: "Conakry" },
  { country: "Guinea-Bissau", capital: "Bissau" }, { country: "Guyana", capital: "Georgetown" }, { country: "Haiti", capital: "Port-au-Prince" },
  { country: "Honduras", capital: "Tegucigalpa" }, { country: "Hungary", capital: "Budapest" }, { country: "Iceland", capital: "Reykjavik" },
  { country: "India", capital: "New Delhi" }, { country: "Indonesia", capital: "Jakarta" }, { country: "Iran", capital: "Tehran" },
  { country: "Iraq", capital: "Baghdad" }, { country: "Ireland", capital: "Dublin" }, { country: "Israel", capital: "Jerusalem" },
  { country: "Italy", capital: "Rome" }, { country: "Jamaica", capital: "Kingston" }, { country: "Japan", capital: "Tokyo" },
  { country: "Jordan", capital: "Amman" }, { country: "Kazakhstan", capital: "Astana" }, { country: "Kenya", capital: "Nairobi" },
  { country: "Kiribati", capital: "Tarawa" }, { country: "Kuwait", capital: "Kuwait City" }, { country: "Kyrgyzstan", capital: "Bishkek" },
  { country: "Laos", capital: "Vientiane" }, { country: "Latvia", capital: "Riga" }, { country: "Lebanon", capital: "Beirut" },
  { country: "Lesotho", capital: "Maseru" }, { country: "Liberia", capital: "Monrovia" }, { country: "Libya", capital: "Tripoli" },
  { country: "Liechtenstein", capital: "Vaduz" }, { country: "Lithuania", capital: "Vilnius" }, { country: "Luxembourg", capital: "Luxembourg" },
  { country: "Madagascar", capital: "Antananarivo" }, { country: "Malawi", capital: "Lilongwe" }, { country: "Malaysia", capital: "Kuala Lumpur" },
  { country: "Maldives", capital: "Malé" }, { country: "Mali", capital: "Bamako" }, { country: "Malta", capital: "Valletta" },
  { country: "Marshall Islands", capital: "Majuro" }, { country: "Mauritania", capital: "Nouakchott" }, { country: "Mauritius", capital: "Port Louis" },
  { country: "Mexico", capital: "Mexico City" }, { country: "Micronesia", capital: "Palikir" }, { country: "Moldova", capital: "Chișinău" },
  { country: "Monaco", capital: "Monaco" }, { country: "Mongolia", capital: "Ulaanbaatar" }, { country: "Montenegro", capital: "Podgorica" },
  { country: "Morocco", capital: "Rabat" }, { country: "Mozambique", capital: "Maputo" }, { country: "Myanmar", capital: "Naypyidaw" },
  { country: "Namibia", capital: "Windhoek" }, { country: "Nauru", capital: "Yaren" }, { country: "Nepal", capital: "Kathmandu" },
  { country: "Netherlands", capital: "Amsterdam" }, { country: "New Zealand", capital: "Wellington" }, { country: "Nicaragua", capital: "Managua" },
  { country: "Niger", capital: "Niamey" }, { country: "Nigeria", capital: "Abuja" }, { country: "North Korea", capital: "Pyongyang" },
  { country: "North Macedonia", capital: "Skopje" }, { country: "Norway", capital: "Oslo" }, { country: "Oman", capital: "Muscat" },
  { country: "Pakistan", capital: "Islamabad" }, { country: "Palau", capital: "Ngerulmud" }, { country: "Palestine", capital: "Ramallah" },
  { country: "Panama", capital: "Panama City" }, { country: "Papua New Guinea", capital: "Port Moresby" }, { country: "Paraguay", capital: "Asunción" },
  { country: "Peru", capital: "Lima" }, { country: "Philippines", capital: "Manila" }, { country: "Poland", capital: "Warsaw" },
  { country: "Portugal", capital: "Lisbon" }, { country: "Qatar", capital: "Doha" }, { country: "Romania", capital: "Bucharest" },
  { country: "Russia", capital: "Moscow" }, { country: "Rwanda", capital: "Kigali" }, { country: "Saint Kitts and Nevis", capital: "Basseterre" },
  { country: "Saint Lucia", capital: "Castries" }, { country: "Saint Vincent and the Grenadines", capital: "Kingstown" }, { country: "Samoa", capital: "Apia" },
  { country: "San Marino", capital: "San Marino" }, { country: "Sao Tome and Principe", capital: "São Tomé" }, { country: "Saudi Arabia", capital: "Riyadh" },
  { country: "Senegal", capital: "Dakar" }, { country: "Serbia", capital: "Belgrade" }, { country: "Seychelles", capital: "Victoria" },
  { country: "Sierra Leone", capital: "Freetown" }, { country: "Singapore", capital: "Singapore" }, { country: "Slovakia", capital: "Bratislava" },
  { country: "Slovenia", capital: "Ljubljana" }, { country: "Solomon Islands", capital: "Honiara" }, { country: "Somalia", capital: "Mogadishu" },
  { country: "South Africa", capital: "Pretoria" }, { country: "South Korea", capital: "Seoul" }, { country: "South Sudan", capital: "Juba" },
  { country: "Spain", capital: "Madrid" }, { country: "Sri Lanka", capital: "Sri Jayawardenepura Kotte" }, { country: "Sudan", capital: "Khartoum" },
  { country: "Suriname", capital: "Paramaribo" }, { country: "Sweden", capital: "Stockholm" }, { country: "Switzerland", capital: "Bern" },
  { country: "Syria", capital: "Damascus" }, { country: "Taiwan", capital: "Taipei" }, { country: "Tajikistan", capital: "Dushanbe" },
  { country: "Tanzania", capital: "Dodoma" }, { country: "Thailand", capital: "Bangkok" }, { country: "Timor-Leste", capital: "Dili" },
  { country: "Togo", capital: "Lomé" }, { country: "Tonga", capital: "Nukuʻalofa" }, { country: "Trinidad and Tobago", capital: "Port of Spain" },
  { country: "Tunisia", capital: "Tunis" }, { country: "Turkey", capital: "Ankara" }, { country: "Turkmenistan", capital: "Ashgabat" },
  { country: "Tuvalu", capital: "Funafuti" }, { country: "Uganda", capital: "Kampala" }, { country: "Ukraine", capital: "Kyiv" },
  { country: "United Arab Emirates", capital: "Abu Dhabi" }, { country: "United Kingdom", capital: "London" }, { country: "United States", capital: "Washington, D.C." },
  { country: "Uruguay", capital: "Montevideo" }, { country: "Uzbekistan", capital: "Tashkent" }, { country: "Vanuatu", capital: "Port Vila" },
  { country: "Vatican City", capital: "Vatican City" }, { country: "Venezuela", capital: "Caracas" }, { country: "Vietnam", capital: "Hanoi" },
  { country: "Yemen", capital: "Sana'a" }, { country: "Zambia", capital: "Lusaka" }, { country: "Zimbabwe", capital: "Harare" }
];

// Track Wikipedia clicks
let clickCounts = JSON.parse(localStorage.getItem('clickCounts') || '{}');

// ======================== HELPER FUNCTIONS ========================
function getWikiUrl(country) {
  const special = {
    "United States": "United_States", 
    "United Kingdom": "United_Kingdom", 
    "Côte d'Ivoire": "Ivory_Coast",
    "North Korea": "North_Korea", 
    "South Korea": "South_Korea", 
    "Bosnia and Herzegovina": "Bosnia_and_Herzegovina",
    "Antigua and Barbuda": "Antigua_and_Barbuda",
    "Trinidad and Tobago": "Trinidad_and_Tobago",
    "Papua New Guinea": "Papua_New_Guinea",
    "Saudi Arabia": "Saudi_Arabia"
  };
  const name = special[country] || country.replace(/ /g, '_');
  return `https://en.wikipedia.org/wiki/${encodeURIComponent(name)}`;
}

function getFlag(country) {
  const flags = { 
    "United States":"🇺🇸","United Kingdom":"🇬🇧","Canada":"🇨🇦","Australia":"🇦🇺","India":"🇮🇳",
    "China":"🇨🇳","Japan":"🇯🇵","Germany":"🇩🇪","France":"🇫🇷","Brazil":"🇧🇷","Mexico":"🇲🇽",
    "Bangladesh":"🇧🇩","Pakistan":"🇵🇰","Vietnam":"🇻🇳","Russia":"🇷🇺","Italy":"🇮🇹","Spain":"🇪🇸",
    "Egypt":"🇪🇬","Nigeria":"🇳🇬","Turkey":"🇹🇷","South Korea":"🇰🇷","Indonesia":"🇮🇩"
  };
  return flags[country] || "🏳️";
}

// ======================== STATE ========================
let favorites = new Set(JSON.parse(localStorage.getItem('favorites') || '[]'));
let searchTerm = '';
let currentView = 'grid';
let showFavoritesOnly = false;

// ======================== DOM ELEMENTS ========================
const container = document.getElementById('countriesContainer');
const totalSpan = document.getElementById('totalCount');
const favCountSpan = document.getElementById('favCount');
const visitedSpan = document.getElementById('visitedCount');
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearSearch');
const gridBtn = document.getElementById('gridView');
const listBtn = document.getElementById('listView');
const darkBtn = document.getElementById('darkModeBtn');
const exportBtn = document.getElementById('exportBtn');
const randomBtn = document.getElementById('randomBtn');
const favFilterBtn = document.getElementById('favFilterBtn');
const toast = document.getElementById('toast');
const clockEl = document.getElementById('clock');

// ======================== TOAST FUNCTION ========================
function showToast(message, isError = false) {
  toast.textContent = message;
  toast.classList.remove('translate-x-[150%]');
  toast.classList.add('translate-x-0');
  if (isError) {
    toast.classList.add('bg-red-600');
    setTimeout(() => toast.classList.remove('bg-red-600'), 2000);
  }
  setTimeout(() => {
    toast.classList.add('translate-x-[150%]');
    toast.classList.remove('translate-x-0');
  }, 2000);
}

// ======================== UPDATE VISITED COUNT ========================
function updateVisitedCount() {
  const totalClicks = Object.values(clickCounts).reduce((a, b) => a + b, 0);
  visitedSpan.innerHTML = `📖 ${totalClicks} clicks`;
}

// ======================== FILTER & SORT ========================
function getFilteredCountries() {
  let filtered = [...allCountries];
  
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(c => 
      c.country.toLowerCase().includes(term) || 
      c.capital.toLowerCase().includes(term)
    );
  }
  
  if (showFavoritesOnly) {
    filtered = filtered.filter(c => favorites.has(c.country));
  }
  
  return filtered;
}

// ======================== RENDER FUNCTION ========================
function render() {
  const filtered = getFilteredCountries();
  
  // Update stats
  totalSpan.textContent = filtered.length;
  favCountSpan.textContent = `⭐ ${favorites.size} favorites`;
  updateVisitedCount();
  
  if (filtered.length === 0) {
    container.innerHTML = `<div class="text-center py-20 text-gray-500 dark:text-gray-400 text-lg">✨ No countries found ✨</div>`;
    return;
  }
  
  // Set grid or list class
  if (currentView === 'grid') {
    container.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 transition-all duration-300';
  } else {
    container.className = 'flex flex-col gap-3 transition-all duration-300';
  }
  
  container.innerHTML = '';
  
  filtered.forEach(item => {
    const isFav = favorites.has(item.country);
    const clickCount = clickCounts[item.country] || 0;
    
    const card = document.createElement('div');
    card.className = `bg-white dark:bg-slate-800/90 border-2 border-gray-200 dark:border-slate-700 hover:border-orange-400 dark:hover:border-orange-500 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-200 group ${currentView === 'list' ? 'flex justify-between items-center' : ''}`;
    
    if (currentView === 'grid') {
      card.innerHTML = `
        <div class="flex justify-between items-start">
          <div class="flex-1">
            <div class="flex items-center gap-2">
              <span class="text-2xl">${getFlag(item.country)}</span>
              <span class="font-extrabold text-gray-800 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition">${item.country}</span>
            </div>
            <div class="flex items-center gap-2 mt-2">
              <span class="text-sm font-semibold text-gray-500 dark:text-gray-400">🏛️ ${item.capital}</span>
              ${clickCount > 0 ? `<span class="text-xs text-gray-400 dark:text-gray-500">📚 ${clickCount}</span>` : ''}
            </div>
          </div>
          <div class="flex gap-2">
            <button class="fav-star text-2xl ${isFav ? 'text-yellow-500' : 'text-gray-400 dark:text-gray-500'} hover:scale-125 transition" data-country="${item.country}">${isFav ? '★' : '☆'}</button>
            <button class="wiki-link text-2xl text-blue-500 dark:text-blue-400 hover:scale-110 transition" data-country="${item.country}">📖</button>
          </div>
        </div>
      `;
    } else {
      card.innerHTML = `
        <div class="flex justify-between items-center w-full">
          <div class="flex items-center gap-3">
            <span class="text-2xl">${getFlag(item.country)}</span>
            <div>
              <span class="font-extrabold text-gray-800 dark:text-white">${item.country}</span>
              <span class="text-sm text-gray-500 dark:text-gray-400 ml-2">🏛️ ${item.capital}</span>
              ${clickCount > 0 ? `<span class="text-xs text-gray-400 dark:text-gray-500 ml-2">📚 ${clickCount}</span>` : ''}
            </div>
          </div>
          <div class="flex gap-3">
            <button class="fav-star text-xl ${isFav ? 'text-yellow-500' : 'text-gray-400 dark:text-gray-500'} hover:scale-125 transition" data-country="${item.country}">${isFav ? '★' : '☆'}</button>
            <button class="wiki-link text-xl text-blue-500 dark:text-blue-400 hover:scale-110 transition" data-country="${item.country}">📖</button>
          </div>
        </div>
      `;
    }
    
    container.appendChild(card);
  });
  
  // Attach event listeners to new buttons
  document.querySelectorAll('.fav-star').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const country = btn.dataset.country;
      if (favorites.has(country)) {
        favorites.delete(country);
        showToast(`💔 Removed ${country} from favorites`);
      } else {
        favorites.add(country);
        showToast(`⭐ Added ${country} to favorites`);
      }
      localStorage.setItem('favorites', JSON.stringify([...favorites]));
      render();
    });
  });
  
  document.querySelectorAll('.wiki-link').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const country = btn.dataset.country;
      clickCounts[country] = (clickCounts[country] || 0) + 1;
      localStorage.setItem('clickCounts', JSON.stringify(clickCounts));
      window.open(getWikiUrl(country), '_blank');
      showToast(`📖 Opening Wikipedia: ${country}`);
      updateVisitedCount();
    });
  });
}

// ======================== DARK MODE ========================
function initDarkMode() {
  const isDark = localStorage.getItem('darkMode') === 'true';
  if (isDark) {
    document.documentElement.classList.add('dark');
    darkBtn.textContent = '☀️ Light';
    darkBtn.classList.remove('bg-gray-200', 'dark:bg-slate-700');
    darkBtn.classList.add('bg-orange-500', 'text-white');
  } else {
    document.documentElement.classList.remove('dark');
    darkBtn.textContent = '🌙 Dark';
    darkBtn.classList.remove('bg-orange-500', 'text-white');
    darkBtn.classList.add('bg-gray-200', 'dark:bg-slate-700');
  }
}

function toggleDarkMode() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('darkMode', 'false');
    darkBtn.textContent = '🌙 Dark';
    darkBtn.classList.remove('bg-orange-500', 'text-white');
    darkBtn.classList.add('bg-gray-200', 'dark:bg-slate-700');
    showToast('☀️ Light mode enabled');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('darkMode', 'true');
    darkBtn.textContent = '☀️ Light';
    darkBtn.classList.remove('bg-gray-200', 'dark:bg-slate-700');
    darkBtn.classList.add('bg-orange-500', 'text-white');
    showToast('🌙 Dark mode enabled');
  }
}

// ======================== EVENT LISTENERS ========================
searchInput.addEventListener('input', (e) => {
  searchTerm = e.target.value;
  clearBtn.classList.toggle('hidden', searchTerm === '');
  render();
});

clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchTerm = '';
  clearBtn.classList.add('hidden');
  render();
  showToast('Search cleared');
});

gridBtn.addEventListener('click', () => {
  currentView = 'grid';
  gridBtn.className = 'px-5 py-2.5 rounded-full font-bold transition-all duration-200 bg-orange-500 text-white shadow-md';
  listBtn.className = 'px-5 py-2.5 rounded-full font-bold transition-all duration-200 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-slate-600';
  render();
  showToast('Grid view');
});

listBtn.addEventListener('click', () => {
  currentView = 'list';
  listBtn.className = 'px-5 py-2.5 rounded-full font-bold transition-all duration-200 bg-orange-500 text-white shadow-md';
  gridBtn.className = 'px-5 py-2.5 rounded-full font-bold transition-all duration-200 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-slate-600';
  render();
  showToast('List view');
});

darkBtn.addEventListener('click', toggleDarkMode);

favFilterBtn.addEventListener('click', () => {
  showFavoritesOnly = !showFavoritesOnly;
  if (showFavoritesOnly) {
    favFilterBtn.classList.add('bg-orange-500', 'text-white');
    favFilterBtn.classList.remove('bg-gray-100', 'dark:bg-slate-700');
    showToast('⭐ Showing favorites only');
  } else {
    favFilterBtn.classList.remove('bg-orange-500', 'text-white');
    favFilterBtn.classList.add('bg-gray-100', 'dark:bg-slate-700');
    showToast('🌍 Showing all countries');
  }
  render();
});

exportBtn.addEventListener('click', () => {
  const data = allCountries.map(c => ({
    Country: c.country,
    Capital: c.capital,
    Favorite: favorites.has(c.country) ? 'Yes' : 'No',
    'Times Visited': clickCounts[c.country] || 0,
    'Wikipedia URL': getWikiUrl(c.country)
  }));
  
  const headers = Object.keys(data[0]);
  const csvRows = [headers.join(',')];
  
  for (const row of data) {
    const values = headers.map(header => {
      const val = row[header];
      return `"${String(val).replace(/"/g, '""')}"`;
    });
    csvRows.push(values.join(','));
  }
  
  const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `capitals_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast(`📎 Exported ${allCountries.length} countries to CSV`);
});

randomBtn.addEventListener('click', () => {
  const random = allCountries[Math.floor(Math.random() * allCountries.length)];
  showToast(`🎲 Random: ${random.country} → ${random.capital}`);
  
  // Flash the card if visible
  const cards = document.querySelectorAll('.wiki-link');
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].dataset.country === random.country) {
      cards[i].closest('.bg-white')?.classList.add('ring-4', 'ring-yellow-400', 'scale-105');
      setTimeout(() => {
        cards[i].closest('.bg-white')?.classList.remove('ring-4', 'ring-yellow-400', 'scale-105');
      }, 1000);
      break;
    }
  }
});

// ======================== CLOCK ========================
function updateClock() {
  if (clockEl) clockEl.textContent = `🕒 ${new Date().toLocaleTimeString()}`;
}
setInterval(updateClock, 1000);
updateClock();

// ======================== KEYBOARD SHORTCUTS ========================
document.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput.focus();
    showToast('🔍 Type to search...');
  }
  if (e.key === 'Escape') {
    if (searchTerm) {
      searchInput.value = '';
      searchTerm = '';
      clearBtn.classList.add('hidden');
      render();
      showToast('Search cleared');
    }
  }
  if (e.key === 'g' || e.key === 'G') {
    if (currentView !== 'grid') {
      gridBtn.click();
    }
  }
  if (e.key === 'l' || e.key === 'L') {
    if (currentView !== 'list') {
      listBtn.click();
    }
  }
  if (e.key === 'f' || e.key === 'F') {
    favFilterBtn.click();
  }
  if (e.key === 'd' || e.key === 'D') {
    darkBtn.click();
  }
  if (e.key === 'r' || e.key === 'R') {
    if (showFavoritesOnly) favFilterBtn.click();
    if (searchTerm) {
      searchInput.value = '';
      searchTerm = '';
      clearBtn.classList.add('hidden');
      render();
    }
    showToast('All filters reset');
  }
});

// ======================== INITIAL RENDER ========================
initDarkMode();
render();
showToast('✨ Welcome to CAPITALIUM! Click ★ to favorite countries ✨');
