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

// ======================== HELPER FUNCTIONS ========================
function getWikiUrl(country) {
  const special = {
    "United States": "United_States", "United Kingdom": "United_Kingdom", "Côte d'Ivoire": "Ivory_Coast",
    "North Korea": "North_Korea", "South Korea": "South_Korea", "Bosnia and Herzegovina": "Bosnia_and_Herzegovina"
  };
  const name = special[country] || country.replace(/ /g, '_');
  return `https://en.wikipedia.org/wiki/${encodeURIComponent(name)}`;
}

function getFlag(country) {
  const flags = { "United States":"🇺🇸","United Kingdom":"🇬🇧","Canada":"🇨🇦","Australia":"🇦🇺","India":"🇮🇳","China":"🇨🇳","Japan":"🇯🇵","Germany":"🇩🇪","France":"🇫🇷","Brazil":"🇧🇷","Mexico":"🇲🇽","Bangladesh":"🇧🇩","Pakistan":"🇵🇰","Vietnam":"🇻🇳","Russia":"🇷🇺","Italy":"🇮🇹","Spain":"🇪🇸","Egypt":"🇪🇬","Nigeria":"🇳🇬","Turkey":"🇹🇷","South Korea":"🇰🇷","Indonesia":"🇮🇩" };
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
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearSearch');
const gridBtn = document.getElementById('gridView');
const listBtn = document.getElementById('listView');
const darkBtn = document.getElementById('darkModeBtn');
const exportBtn = document.getElementById('exportBtn');
const randomBtn = document.getElementById('randomBtn');
const favFilterBtn = document.getElementById('favFilterBtn');
const toast = document.getElementById('toast');

// ======================== TOAST FUNCTION ========================
function showToast(message) {
  toast.textContent = message;
  toast.classList.remove('translate-x-[150%]');
  toast.classList.add('translate-x-0');
  setTimeout(() => {
    toast.classList.add('translate-x-[150%]');
    toast.classList.remove('translate-x-0');
  }, 2000);
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
  
  if (filtered.length === 0) {
    container.innerHTML = `<div class="text-center py-20 text-gray-500 text-lg">✨ No countries found ✨</div>`;
    return;
  }
  
  // Set grid or list class
  if (currentView === 'grid') {
    container.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 transition-all';
  } else {
    container.className = 'flex flex-col gap-3 transition-all';
  }
  
  container.innerHTML = '';
  
  filtered.forEach(item => {
    const isFav = favorites.has(item.country);
    const card = document.createElement('div');
    card.className = `bg-white dark:bg-slate-800/90 border-2 border-gray-200 dark:border-slate-700 hover:border-orange-400 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all group ${currentView === 'list' ? 'flex justify-between items-center' : ''}`;
    
    if (currentView === 'grid') {
      card.innerHTML = `
        <div class="flex justify-between items-start">
          <div class="flex-1">
            <div class="flex items-center gap-2">
              <span class="text-2xl">${getFlag(item.country)}</span>
              <span class="font-extrabold text-gray-800 dark:text-white group-hover:text-orange-600">${item.country}</span>
            </div>
            <div class="flex items-center gap-2 mt-2">
              <span class="text-sm font-semibold text-gray-500 dark:text-gray-400">🏛️ ${item.capital}</span>
            </div>
          </div>
          <div class="flex gap-2">
            <button class="fav-star text-2xl ${isFav ? 'text-yellow-500' : 'text-gray-400'} hover:scale-125 transition" data-country="${item.country}">${isFav ? '★' : '☆'}</button>
            <button class="wiki-link text-2xl text-blue-500 hover:scale-110 transition" data-country="${item.country}">📖</button>
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
            </div>
          </div>
          <div class="flex gap-3">
            <button class="fav-star text-xl ${isFav ? 'text-yellow-500' : 'text-gray-400'} hover:scale-125 transition" data-country="${item.country}">${isFav ? '★' : '☆'}</button>
            <button class="wiki-link text-xl text-blue-500 hover:scale-110 transition" data-country="${item.country}">📖</button>
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
      window.open(getWikiUrl(country), '_blank');
      showToast(`📖 Opening Wikipedia: ${country}`);
    });
  });
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
});

gridBtn.addEventListener('click', () => {
  currentView = 'grid';
  gridBtn.className = 'px-5 py-2.5 rounded-full font-bold bg-orange-500 text-white';
  listBtn.className = 'px-5 py-2.5 rounded-full font-bold bg-white dark:bg-slate-800 border';
  render();
});

listBtn.addEventListener('click', () => {
  currentView = 'list';
  listBtn.className = 'px-5 py-2.5 rounded-full font-bold bg-orange-500 text-white';
  gridBtn.className = 'px-5 py-2.5 rounded-full font-bold bg-white dark:bg-slate-800 border';
  render();
});

darkBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('darkMode', isDark);
  darkBtn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
  showToast(isDark ? 'Dark mode enabled' : 'Light mode enabled');
});

favFilterBtn.addEventListener('click', () => {
  showFavoritesOnly = !showFavoritesOnly;
  favFilterBtn.style.backgroundColor = showFavoritesOnly ? 'rgb(249, 115, 22)' : '';
  favFilterBtn.style.color = showFavoritesOnly ? 'white' : '';
  showToast(showFavoritesOnly ? 'Showing favorites only' : 'Showing all countries');
  render();
});

exportBtn.addEventListener('click', () => {
  const data = allCountries.map(c => ({
    Country: c.country,
    Capital: c.capital,
    Favorite: favorites.has(c.country) ? 'Yes' : 'No',
    Wikipedia: getWikiUrl(c.country)
  }));
  const csv = [Object.keys(data[0]).join(','), ...data.map(row => Object.values(row).join(','))].join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
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
  // Scroll to highlight? Optional
});

// ======================== CLOCK ========================
function updateClock() {
  const clock = document.getElementById('clock');
  if (clock) clock.textContent = `🕒 ${new Date().toLocaleTimeString()}`;
}
setInterval(updateClock, 1000);
updateClock();

// ======================== DARK MODE INIT ========================
if (localStorage.getItem('darkMode') === 'true') {
  document.documentElement.classList.add('dark');
  darkBtn.textContent = '☀️ Light';
} else {
  darkBtn.textContent = '🌙 Dark';
}

// ======================== INITIAL RENDER ========================
render();
showToast('✨ Welcome to CAPITALIUM! Click ★ to favorite countries ✨');
